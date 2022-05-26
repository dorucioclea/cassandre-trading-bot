import{_ as t,r as o,o as p,c,b as n,a as e,d as a,e as i}from"./app.48b08d1c.js";const l={},r=n("h1",{id:"configure-exchange-connection",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configure-exchange-connection","aria-hidden":"true"},"#"),a(" Configure exchange connection")],-1),d=n("h2",{id:"how-does-it-work",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-does-it-work","aria-hidden":"true"},"#"),a(" How does it work?")],-1),u=n("p",null,"There are two steps to configure an exchange connection in Cassandre.",-1),g=a("Cassandre uses "),k={href:"https://github.com/knowm/XChange",target:"_blank",rel:"noopener noreferrer"},v=a("XChange"),h=a(", a Java library providing a streamlined API for interacting with 60+ Bitcoin and Altcoin exchanges. The first thing you have to do is to find the XChange library suited for the Exchange you chose. The list is "),m={href:"https://search.maven.org/search?q=org.knowm.xchange",target:"_blank",rel:"noopener noreferrer"},b=a("here"),x=a("."),y=i(`<p>For example, for a Coinbase connection, you have to add this to your <code>pom.xml</code>:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.knowm.xchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xchange-coinbasepro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The second step is to update those properties in your <code>application.properties</code>:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># Exchange configuration.</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.coinbasepro.CoinbaseProExchange</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.username</span><span class="token punctuation">=</span><span class="token value attr-value">kucoin.cassandre.test@gmail.com</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.passphrase</span><span class="token punctuation">=</span><span class="token value attr-value">cassandre</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.key</span><span class="token punctuation">=</span><span class="token value attr-value">6054ad25365ac6000689a998</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.secret</span><span class="token punctuation">=</span><span class="token value attr-value">af080d55-afe3-47c9-8ec1-4b479fbcc5e7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For <code>cassandre.trading.bot.exchange.driver-class-name</code>, you have to set the main class inside the XChange library.</p><p>The other parameters <code>username</code>, <code>passphrase</code>, <code>key</code> and<code>secret</code> are authentication parameters given by the Exchange when you will create your API access in your account.</p><h2 id="configuration-examples" tabindex="-1"><a class="header-anchor" href="#configuration-examples" aria-hidden="true">#</a> Configuration examples</h2><h3 id="kucoin" tabindex="-1"><a class="header-anchor" href="#kucoin" aria-hidden="true">#</a> Kucoin</h3><p>Add this dependency to your <code>\u0300pom.xml</code>:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.knowm.xchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xchange-kucoin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and update your <code>application.properties</code>:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.kucoin.KucoinExchange</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="coinbase" tabindex="-1"><a class="header-anchor" href="#coinbase" aria-hidden="true">#</a> Coinbase</h3><p>Add this dependency to your <code>pom.xml</code>:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.knowm.xchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xchange-coinbasepro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and update your <code>application.properties</code>:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.coinbasepro.CoinbaseProExchange</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="binance" tabindex="-1"><a class="header-anchor" href="#binance" aria-hidden="true">#</a> Binance</h3><p>Add this dependency to your <code>pom.xml</code>:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.knowm.xchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xchange-binance<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and update your <code>application.properties</code>:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.binance.BinanceExchange</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>On Binance, you should not ask for data too often, or you will get a <code>Way too much request weight used</code> error, use those parameters in your <code>application.properties</code>:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.rates.account</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.ticker</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.trade</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function f(_,w){const s=o("ExternalLinkIcon");return p(),c("div",null,[r,d,u,n("p",null,[g,n("a",k,[v,e(s)]),h,n("a",m,[b,e(s)]),x]),y])}var C=t(l,[["render",f],["__file","exchange-connection-configuration.html.vue"]]);export{C as default};
