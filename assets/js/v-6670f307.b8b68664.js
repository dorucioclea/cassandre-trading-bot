"use strict";(self.webpackChunkcassandre_trading_bot_website=self.webpackChunkcassandre_trading_bot_website||[]).push([[678],{4964:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-6670f307",path:"/learn/graphql-api.html",title:"GraphQL API",lang:"en-US",frontmatter:{lang:"en-US",title:"GraphQL API",description:"Learn how to add our GraphQL API to your bot to query your data from third-party software"},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Access the API with GraphiQL",slug:"access-the-api-with-graphiql",children:[]},{level:2,title:"Secure your API",slug:"secure-your-api",children:[]},{level:2,title:"API Documentation",slug:"api-documentation",children:[]}],filePathRelative:"learn/graphql-api.md"}},9750:(a,n,e)=>{e.r(n),e.d(n,{default:()=>g});var s=e(6252);const t=(0,s.uE)('<h1 id="graphql-api" tabindex="-1"><a class="header-anchor" href="#graphql-api" aria-hidden="true">#</a> GraphQL API</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Cassandre GraphQL API allows you to query your data (balances, strategies, orders, trades and positions).</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To deploy the GraphQL API on your bot, just add this spring boot starter to your pom:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>tech.cassandre.trading.bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cassandre-trading-bot-spring-boot-starter-api-graphql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="access-the-api-with-graphiql" tabindex="-1"><a class="header-anchor" href="#access-the-api-with-graphiql" aria-hidden="true">#</a> Access the API with GraphiQL</h2>',7),r=(0,s.Uk)("Start your bot and open a browser to "),p={href:"http://localhost:8080/graphiql",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("http://localhost:8080/graphiql"),i=(0,s.Uk)(". GraphiQL is a query editor that comes out of the box with the "),l={href:"https://netflix.github.io/dgs/",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("DGS framework"),u=(0,s.Uk)(" we are using."),d=(0,s.uE)('<p>For example, you can try to enter this query to display all your strategies:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query {\n    strategies{ strategyId name }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="secure-your-api" tabindex="-1"><a class="header-anchor" href="#secure-your-api" aria-hidden="true">#</a> Secure your API</h2><p>To secure your API with a key, add this property: <code>cassandre.trading.bot.api.graphql.key</code> in your <code>applications.properties</code>.</p><h2 id="api-documentation" tabindex="-1"><a class="header-anchor" href="#api-documentation" aria-hidden="true">#</a> API Documentation</h2><p>You can view the API documentation at <a href="graphql-api-documentation">this address</a>.</p>',6),h={},g=(0,e(3744).Z)(h,[["render",function(a,n){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[r,(0,s._)("a",p,[o,(0,s.Wm)(e)]),i,(0,s._)("a",l,[c,(0,s.Wm)(e)]),u]),d],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{const e=a.__vccOpts||a;for(const[a,s]of n)e[a]=s;return e}}}]);