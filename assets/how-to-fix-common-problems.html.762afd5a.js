import{_ as r,r as o,o as i,c,b as a,d as e,a as n,e as t}from"./app.4d6819e9.js";const d={},u=t(`<h1 id="comment-resoudre-les-problemes-les-plus-courants" tabindex="-1"><a class="header-anchor" href="#comment-resoudre-les-problemes-les-plus-courants" aria-hidden="true">#</a> Comment résoudre les problèmes les plus courants ?</h1><h2 id="your-strategies-specify-a-trading-account-that-doesn-t-exist" tabindex="-1"><a class="header-anchor" href="#your-strategies-specify-a-trading-account-that-doesn-t-exist" aria-hidden="true">#</a> Your strategies specify a trading account that doesn&#39;t exist</h2><p>La première chose à faire est de vérifier votre configuration. Si vous souhaitez vous connecter à un exchange avec vos identifiants de production, les paramètres de mode doivent être à <code>false</code>.</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.modes.sandbox</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.modes.dry</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Deuxième étape, habituellement, sur un exchange, vous avez un identifiant/mot de passe et plusieurs &quot;accounts&quot;. Par exemple, un pour le trading, un pour vos économies, un pour le courant... Pour savoir ce qu&#39;il peut vendre ou acheter, Cassandre doit savoir quel compte vous souhaitez utiliser.</p>`,5),l={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29",target:"_blank",rel:"noopener noreferrer"},p=t(`<p>Pour vous aider à savoir lequel est le bon, lors du démarrage de Cassandre, vous devriez voir s&#39;afficher dans les logs la liste des comptes découverts et leur solde :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2021-11-18 Available accounts on the exchange:
2021-11-18 - Account id / name: trade / trade.
2021-11-18  - 4 TUSD.
2021-11-18  - 5.00007534 UNI.
2021-11-18  - 11.26224436 USDT.
2021-11-18  - 0.01 BTC.
2021-11-18 - Account id / name: main / main.
2021-11-18  - 1 BTC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="way-too-much-request-weight-used-ip-banned-until" tabindex="-1"><a class="header-anchor" href="#way-too-much-request-weight-used-ip-banned-until" aria-hidden="true">#</a> Way too much request weight used; IP banned until</h2><p>Sur Binance, vous devez faire très attention à ne pas demander les données trop souvent où vous aurez l&#39;erreur <code>Way too much request weight used</code>. Nos tests montrent que cela marche bien avec les paramètres suivants :</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.rates.account</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.ticker</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.trade</span><span class="token punctuation">=</span><span class="token value attr-value">PT30S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="requested-bean-is-currently-in-creation-is-there-an-unresolvable-circular-reference" tabindex="-1"><a class="header-anchor" href="#requested-bean-is-currently-in-creation-is-there-an-unresolvable-circular-reference" aria-hidden="true">#</a> Requested bean is currently in creation: Is there an unresolvable circular reference?</h2><p>Lorsque vous avez cette erreur au démmarrage :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>̀Unknown configuration error: Error creating bean with name &#39;tech.cassandre.trading.bot.configuration.ExchangeAutoConfiguration&#39;: Requested bean is currently in creation: Is there an unresolvable circular reference?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Depuis Spring boot 2.6.0, les références circulaires sont interdites par défaut, nous avons corrigé ce problème avec la version 5.0.7.</p><h2 id="kucoin-your-strategies-specifies-a-trading-account-that-doesn-t-exist" tabindex="-1"><a class="header-anchor" href="#kucoin-your-strategies-specifies-a-trading-account-that-doesn-t-exist" aria-hidden="true">#</a> Kucoin - Your strategies specifies a trading account that doesn&#39;t exist</h2><p>Vous avez des actifs sur votre compte, <code>getTradeAccount(Set&lt;AccountDTO&gt; accounts)</code> est correctement implémentée mais vous obtenez l&#39;erreur <code>Your strategies specifies a trading account that doesn&#39;t exist</code>.</p>`,11),v={href:"https://github.com/cassandre-tech/cassandre-trading-bot/issues/786#issuecomment-999503117",target:"_blank",rel:"noopener noreferrer"};function m(h,g){const s=o("ExternalLinkIcon");return i(),c("div",null,[u,a("p",null,[e("Pour se faire, vous devez implémenter dans votre stratégie la méthode "),a("a",l,[e("getTradeAccount()"),n(s)]),e(" . Cette méthode sera appelée par Cassandre au démarrage et vous passera en paramètre la liste des comptes que vous avez sur l'exchange.")]),p,a("p",null,[e("Vous pouvez essayer cette solution : "),a("a",v,[e("https://github.com/cassandre-tech/cassandre-trading-bot/issues/786#issuecomment-999503117"),n(s)]),e(" .")])])}const f=r(d,[["render",m],["__file","how-to-fix-common-problems.html.vue"]]);export{f as default};
