import{_ as r,r as o,o as i,c,b as a,a as t,e as n,d as e}from"./app.48b08d1c.js";const d={},u=n(`<h1 id="comment-resoudre-les-problemes-les-plus-courants" tabindex="-1"><a class="header-anchor" href="#comment-resoudre-les-problemes-les-plus-courants" aria-hidden="true">#</a> Comment r\xE9soudre les probl\xE8mes les plus courants ?</h1><h2 id="your-strategies-specify-a-trading-account-that-doesn-t-exist" tabindex="-1"><a class="header-anchor" href="#your-strategies-specify-a-trading-account-that-doesn-t-exist" aria-hidden="true">#</a> Your strategies specify a trading account that doesn&#39;t exist</h2><p>La premi\xE8re chose \xE0 faire est de v\xE9rifier votre configuration. Si vous souhaitez vous connecter \xE0 un exchange avec vos identifiants de production, les param\xE8tres de mode doivent \xEAtre \xE0 <code>false</code>.</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.modes.sandbox</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.modes.dry</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Deuxi\xE8me \xE9tape, habituellement, sur un exchange, vous avez un identifiant/mot de passe et plusieurs &quot;accounts&quot;. Par exemple, un pour le trading, un pour vos \xE9conomies, un pour le courant... Pour savoir ce qu&#39;il peut vendre ou acheter, Cassandre doit savoir quel compte vous souhaitez utiliser.</p>`,5),l=e("Pour se faire, vous devez impl\xE9menter dans votre strat\xE9gie la m\xE9thode "),p={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29",target:"_blank",rel:"noopener noreferrer"},v=e("getTradeAccount()"),h=e(" . Cette m\xE9thode sera appel\xE9e par Cassandre au d\xE9marrage et vous passera en param\xE8tre la liste des comptes que vous avez sur l'exchange."),m=n(`<p>Pour vous aider \xE0 savoir lequel est le bon, lors du d\xE9marrage de Cassandre, vous devriez voir s&#39;afficher dans les logs la liste des comptes d\xE9couverts et leur solde :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2021-11-18 Available accounts on the exchange:
2021-11-18 - Account id / name: trade / trade.
2021-11-18  - 4 TUSD.
2021-11-18  - 5.00007534 UNI.
2021-11-18  - 11.26224436 USDT.
2021-11-18  - 0.01 BTC.
2021-11-18 - Account id / name: main / main.
2021-11-18  - 1 BTC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="way-too-much-request-weight-used-ip-banned-until" tabindex="-1"><a class="header-anchor" href="#way-too-much-request-weight-used-ip-banned-until" aria-hidden="true">#</a> Way too much request weight used; IP banned until</h2><p>Sur Binance, vous devez faire tr\xE8s attention \xE0 ne pas demander les donn\xE9es trop souvent o\xF9 vous aurez l&#39;erreur <code>Way too much request weight used</code>. Nos tests montrent que cela marche bien avec les param\xE8tres suivants :</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.rates.account</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.ticker</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.trade</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="requested-bean-is-currently-in-creation-is-there-an-unresolvable-circular-reference" tabindex="-1"><a class="header-anchor" href="#requested-bean-is-currently-in-creation-is-there-an-unresolvable-circular-reference" aria-hidden="true">#</a> Requested bean is currently in creation: Is there an unresolvable circular reference?</h2><p>Lorsque vous avez cette erreur au d\xE9mmarrage :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u0300Unknown configuration error: Error creating bean with name &#39;tech.cassandre.trading.bot.configuration.ExchangeAutoConfiguration&#39;: Requested bean is currently in creation: Is there an unresolvable circular reference?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Depuis Spring boot 2.6.0, les r\xE9f\xE9rences circulaires sont interdites par d\xE9faut, nous avons corrig\xE9 ce probl\xE8me avec la version 5.0.7.</p><h2 id="kucoin-your-strategies-specifies-a-trading-account-that-doesn-t-exist" tabindex="-1"><a class="header-anchor" href="#kucoin-your-strategies-specifies-a-trading-account-that-doesn-t-exist" aria-hidden="true">#</a> Kucoin - Your strategies specifies a trading account that doesn&#39;t exist</h2><p>Vous avez des actifs sur votre compte, <code>getTradeAccount(Set&lt;AccountDTO&gt; accounts)</code> est correctement impl\xE9ment\xE9e mais vous obtenez l&#39;erreur <code>Your strategies specifies a trading account that doesn&#39;t exist</code>.</p>`,11),g=e("Vous pouvez essayer cette solution : "),b={href:"https://github.com/cassandre-tech/cassandre-trading-bot/issues/786#issuecomment-999503117",target:"_blank",rel:"noopener noreferrer"},f=e("https://github.com/cassandre-tech/cassandre-trading-bot/issues/786#issuecomment-999503117"),x=e(" .");function _(k,y){const s=o("ExternalLinkIcon");return i(),c("div",null,[u,a("p",null,[l,a("a",p,[v,t(s)]),h]),m,a("p",null,[g,a("a",b,[f,t(s)]),x])])}var w=r(d,[["render",_],["__file","how-to-fix-common-problems.html.vue"]]);export{w as default};
