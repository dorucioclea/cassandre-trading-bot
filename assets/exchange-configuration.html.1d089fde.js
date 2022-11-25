import{_ as t,r as o,o as c,c as r,b as a,d as n,a as s,e as i}from"./app.4d6819e9.js";const l={},p=a("h1",{id:"configuration-de-la-connexion-a-l-exchange",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#configuration-de-la-connexion-a-l-exchange","aria-hidden":"true"},"#"),n(" Configuration de la connexion à l'exchange")],-1),u={href:"https://www.kucoin.com/ucenter/signup?rcode=2HMJtt1",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/knowm/XChange",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/knowm/XChange/tree/develop/xchange-kucoin",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"BaseExchange",-1),m=a("code",null,"Exchange",-1),v={href:"https://github.com/knowm/XChange/blob/develop/xchange-kucoin/src/main/java/org/knowm/xchange/kucoin/KucoinExchange.java",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"driver-class-name",-1),x=a("code",null,"application.properties",-1),b=i(`<p>Nous pouvons donc désormais éditer le fichier de configuration <code>src/main/resources/application.properties</code> :</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.kucoin.KucoinExchange</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.username</span><span class="token punctuation">=</span><span class="token value attr-value">kucoin.cassandre.test@gmail.com</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.passphrase</span><span class="token punctuation">=</span><span class="token value attr-value">cassandre</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.key</span><span class="token punctuation">=</span><span class="token value attr-value">61d0c8a041a5330001d0d59c</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.secret</span><span class="token punctuation">=</span><span class="token value attr-value">79edb229-a9c8-449d-a476-04689eaf376b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nous devons aussi ajouter la librairie XChange dans votre fichier <code>pom.xml</code> (La valeur <code>artifactId</code> est le nom du dossier Github).</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.knowm.xchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xchange-kucoin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dernier point, comme nous allons lancer le bot en production, les deux modes (dry &amp; sandbox) doivent tous les deux être à <code>false</code>.</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cassandre.trading.bot.exchange.modes.sandbox</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.modes.dry</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(f,y){const e=o("ExternalLinkIcon");return c(),r("div",null,[p,a("p",null,[n("Pour le moment, nous avons seulement lancé des tests en local sans jamais s'être connecté à un vrai exchange. Maintenant, supposons que notre stratégie est prête et que nous voulons nous lancer dans le grand bain en utilisant, par exemple, l'exchange "),a("a",u,[n("Kucoin"),s(e)]),n(".")]),a("p",null,[n("La première étape est d'ajouter la librairie XChange correspondante à l'exchange que vous souhaitez utiliser. C'est un peu comme ajouter un driver JDBC. Allez sur "),a("a",d,[n("XChange"),s(e)]),n(", trouvez le répertoire correspondant. Dans notre cas, il s'agit de "),a("a",g,[n("xchange-kucoin directory"),s(e)]),n(" .")]),a("p",null,[n("Dans ce répertoire, nous devons ensuite trouver la classe qui hérite de "),k,n(" et qui implémente "),m,n(". Dans notre cas, il s'agit de "),a("a",v,[n("org.knowm.xchange.kucoin.KucoinExchange"),s(e)]),n(" . Le nom de cette classe sera utilisée comme "),h,n(" dans le fichier "),x,n(".")]),b])}const w=t(l,[["render",_],["__file","exchange-configuration.html.vue"]]);export{w as default};
