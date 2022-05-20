import{_ as n,e as s}from"./app.24a7277a.js";const a={},t=s(`<h1 id="write-your-strategy-unit-test" tabindex="-1"><a class="header-anchor" href="#write-your-strategy-unit-test" aria-hidden="true">#</a> Write your strategy unit test</h1><h2 id="what-are-we-going-to-do" tabindex="-1"><a class="header-anchor" href="#what-are-we-going-to-do" aria-hidden="true">#</a> What are we going to do ?</h2><p>Our goal is to check that our strategy is making gains. We can&#39;t predict the future, so we will test it on historical data with a simulated exchange provided by Cassandre (Our dry mode). TODO ajouter lien</p><p>There is three steps:</p><ul><li>Configure how much fake assets you want to put on your trade account.</li><li>Download and import the historical data Cassandre will send to your strategy.</li><li>Write the unit tests that check the gains we made when all historical tickers will have been treated by your strategy.</li></ul><h2 id="configure-assets" tabindex="-1"><a class="header-anchor" href="#configure-assets" aria-hidden="true">#</a> Configure assets.</h2><p>To correctly simulate the behavior your strategy, you need tell Cassandre dry mode how much assets you will play with.</p><p>This is done by creating csv files starting with <code>user-</code> and ending with <code>csv</code> in the <code>my-trading-bot/src/test/resources</code> directory.</p><p>If you open <code>my-trading-bot/src/test/resources/user-trade.csv</code>, you will find those data:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BTC,0.99962937
USDT,1000
ETH,10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With this file, when Cassandre will start in dry mode, your strategy will act as if it has 0.99962937 BTC, 1000 USDT and 10 ETH. Of course, when your strategy will be tested, the assets will be updated at each buy/sell action.</p><h2 id="download-historical-data" tabindex="-1"><a class="header-anchor" href="#download-historical-data" aria-hidden="true">#</a> Download historical data.</h2><p>As I said earlier, we will test your bot behavior on historical data. To do this, we have to put the data we want to use in a file starting with <code>candles-for-backtesting</code> and ending with <code>.csv</code> and located in <code>my-trading-bot/src/test/resources/</code>.</p><p>This is an example of the file content:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;TIMESTAMP&quot;,&quot;OPEN&quot;,&quot;CLOSE&quot;,&quot;HIGH&quot;,&quot;LOW&quot;,&quot;VOLUME&quot;,&quot;QUOTE_VOLUME&quot;,&quot;CURRENCY_PAIR&quot;
&quot;1508371200&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;BTC-USDT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, you have all typical fields you can have with a backtesting data.</p><p>You can create those files with the tools/sources you want but this is how, with Linux &amp; Kucoin, I easily generate those data:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">SYMBOL</span><span class="token operator">=</span>BTC-USDT
<span class="token assign-left variable">START_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> --date<span class="token operator">=</span><span class="token string">&quot;3 months ago&quot;</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">END_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;TIMESTAMP&quot;, &quot;OPEN&quot;, &quot;CLOSE&quot;, &quot;HIGH&quot;, &quot;LOW&quot;, &quot;VOLUME&quot;, &quot;QUOTE_VOLUME&quot;, &quot;CURRENCY_PAIR&quot;&#39;</span> <span class="token operator">&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
<span class="token function">curl</span> -s <span class="token string">&quot;https://api.kucoin.com/api/v1/market/candles?type=15min&amp;symbol=<span class="token variable">\${SYMBOL}</span>&amp;startAt=<span class="token variable">\${START_DATE}</span>&amp;endAt=<span class="token variable">\${END_DATE}</span>&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> jq --arg SYMBOL <span class="token string">&quot;<span class="token variable">$SYMBOL</span>&quot;</span> -r -c <span class="token string">&#39;.data[] | . + [$SYMBOL] | @csv&#39;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> <span class="token function">tac</span> <span class="token variable">$1</span> <span class="token operator">&gt;&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can add as many backtesting files as you want, Cassandre, will load them all before the tests starts.</p></div><h2 id="write-your-test" tabindex="-1"><a class="header-anchor" href="#write-your-test" aria-hidden="true">#</a> Write your test.</h2><p>The test code is quite easy to understand:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@ActiveProfiles</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">TickerFluxMock</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;Simple strategy test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ETHStrategyTest</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">TickerFluxMock</span> tickerFluxMock<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/** Dumb strategy. */</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">ETHStrategy</span> strategy<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Check data reception.
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;Check data reception&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receivedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> tickerFluxMock<span class="token punctuation">.</span><span class="token function">isFluxDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// =============================================================================================================</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Gains by position&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		strategy<span class="token punctuation">.</span><span class="token function">getPositions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>positionDTO <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>positionDTO<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">PositionStatusDTO</span><span class="token punctuation">.</span>CLOSED<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Position &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getPositionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; closed with gain: &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getGain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Position &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getPositionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; NOT closed with latest gain: &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getLatestCalculatedGain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// =============================================================================================================</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Global gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyDTO</span><span class="token punctuation">,</span> <span class="token class-name">GainDTO</span><span class="token punctuation">&gt;</span></span> gains <span class="token operator">=</span> strategy<span class="token punctuation">.</span><span class="token function">getGains</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		gains<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>gainDTO <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>gainDTO<span class="token punctuation">.</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">assertFalse</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, no gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">assertNotNull</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>USDT<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, USDT gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">assertTrue</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>USDT<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSuperiorTo</span><span class="token punctuation">(</span><span class="token class-name">GainDTO</span><span class="token punctuation">.</span>ZERO<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, USDT inferior to zero&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is what you have to notice:</p><ul><li>It&#39;s a classical spring boot test.</li><li>Adding <code>@Import(TickerFluxMock.class)</code> makes Cassandre load backtesting data and send them to your strategies.</li><li>We add <code>private TickerFluxMock tickerFluxMock;</code> because we need to know when all data will have been read.</li><li>When doing this <code>await().forever().until(() -&gt; tickerFluxMock.isFluxDone());</code>, we make the test wait until all backtesting data have been treated by Cassandre and received by your strategies.</li><li>We then display all the gains by positions, and we make the test fail if there is no gain !</li></ul><h2 id="run-test" tabindex="-1"><a class="header-anchor" href="#run-test" aria-hidden="true">#</a> Run test</h2><p>Run the test with the simple command: <code>mvn test</code>.</p><p>Here is an example of result:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Gains by position
Position <span class="token number">1</span> closed with gain: Gains: -3.170296 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">2</span> closed with gain: Gains: -3.170208 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">3</span> closed with gain: Gains: -3.168264 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">4</span> closed with gain: Gains: -3.165088 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">5</span> closed with gain: Gains: -3.164112 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">6</span> closed with gain: Gains: -3.162976 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">7</span> closed with gain: Gains: -3.15744 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">8</span> closed with gain: Gains: -3.1594 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">9</span> closed with gain: Gains: -3.15688 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">10</span> closed with gain: Gains: -3.150648 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">11</span> closed with gain: Gains: -3.13744 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">12</span> closed with gain: Gains: -3.11872 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
osition <span class="token number">120</span> closed with gain: Gains: <span class="token number">1.114808</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">121</span> closed with gain: Gains: <span class="token number">1.141692</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">122</span> closed with gain: Gains: <span class="token number">1.133536</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">123</span> closed with gain: Gains: <span class="token number">1.124956</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">124</span> closed with gain: Gains: <span class="token number">1.128588</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">125</span> closed with gain: Gains: <span class="token number">1.17594</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">126</span> closed with gain: Gains: <span class="token number">1.163032</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">127</span> closed with gain: Gains: <span class="token number">1.145548</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">128</span> closed with gain: Gains: <span class="token number">1.143424</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">129</span> closed with gain: Gains: <span class="token number">1.141428</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">130</span> closed with gain: Gains: <span class="token number">1.133732</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">131</span> closed with gain: Gains: <span class="token number">1.14464</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">132</span> closed with gain: Gains: <span class="token number">1.140584</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">133</span> closed with gain: Gains: <span class="token number">1.130728</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">134</span> closed with gain: Gains: <span class="token number">1.156604</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">135</span> closed with gain: Gains: <span class="token number">1.177412</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">136</span> closed with gain: Gains: <span class="token number">1.173072</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">137</span> NOT closed with latest gain: Gains: -0.6901 USDT <span class="token punctuation">(</span>-2.2868640422821045 %<span class="token punctuation">)</span>
Position <span class="token number">138</span> NOT closed with latest gain: Gains: -0.956 USDT <span class="token punctuation">(</span>-3.1403369903564453 %<span class="token punctuation">)</span>
Position <span class="token number">139</span> NOT closed with latest gain: Gains: -0.8586 USDT <span class="token punctuation">(</span>-2.8294429779052734 %<span class="token punctuation">)</span>
Position <span class="token number">140</span> NOT closed with latest gain: Gains: -0.7031 USDT <span class="token punctuation">(</span>-2.3289411067962646 %<span class="token punctuation">)</span>
Position <span class="token number">141</span> NOT closed with latest gain: Gains: -1.2125 USDT <span class="token punctuation">(</span>-3.9496281147003174 %<span class="token punctuation">)</span>
Position <span class="token number">142</span> NOT closed with latest gain: Gains: -1.1565 USDT <span class="token punctuation">(</span>-3.7740960121154785 %<span class="token punctuation">)</span>
Position <span class="token number">143</span> NOT closed with latest gain: Gains: -1.0674 USDT <span class="token punctuation">(</span>-3.4934868812561035 %<span class="token punctuation">)</span>
Position <span class="token number">144</span> NOT closed with latest gain: Gains: -0.5626 USDT <span class="token punctuation">(</span>-1.8538539409637451 %<span class="token punctuation">)</span>
Position <span class="token number">145</span> NOT closed with latest gain: Gains: -0.5489 USDT <span class="token punctuation">(</span>-1.809527039527893 %<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
Global gains
-191.903428 USDT
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> Tests run: <span class="token number">1</span>, Failures: <span class="token number">1</span>, Errors: <span class="token number">0</span>, Skipped: <span class="token number">0</span>, Time elapsed: <span class="token number">348.345</span> s <span class="token operator">&lt;&lt;&lt;</span> FAILURE<span class="token operator">!</span> - <span class="token keyword">in</span> com.mycompany.bot.SimpleStrategyTest
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> receivedData  Time elapsed: <span class="token number">339.607</span> s  <span class="token operator">&lt;&lt;&lt;</span> FAILURE<span class="token operator">!</span>
org.opentest4j.AssertionFailedError: Failure, USDT inferior to zero <span class="token punctuation">(</span>eg loss<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> expected: <span class="token operator">&lt;</span>true<span class="token operator">&gt;</span> but was: <span class="token operator">&lt;</span>false<span class="token operator">&gt;</span>
	at com.mycompany.bot.SimpleStrategyTest.receivedData<span class="token punctuation">(</span>SimpleStrategyTest.java:67<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, this strategy is not a winning one!</p>`,29);function e(o,p){return t}var c=n(a,[["render",e],["__file","write-strategy-unit-test.html.vue"]]);export{c as default};
