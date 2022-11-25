import{_ as o,r as i,o as l,c as r,b as a,d as e,a as t,e as n}from"./app.4d6819e9.js";const d={},c=n(`<h1 id="install-development-tools" tabindex="-1"><a class="header-anchor" href="#install-development-tools" aria-hidden="true">#</a> Install development tools</h1><h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_14.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p={id:"vuepress-documentation",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#vuepress-documentation","aria-hidden":"true"},"#",-1),u={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> vuepress <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),m={id:"git",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),b={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},f=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),k={id:"java",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#java","aria-hidden":"true"},"#",-1),x={href:"https://openjdk.java.net/install/",target:"_blank",rel:"noopener noreferrer"},j=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> openjdk-17-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),w={id:"maven",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#maven","aria-hidden":"true"},"#",-1),I={href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"},V=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> maven
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),E={id:"intellij-idea-optional",tabindex:"-1"},N=a("a",{class:"header-anchor",href:"#intellij-idea-optional","aria-hidden":"true"},"#",-1),T={href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"},B=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> intellij-idea-ultimate <span class="token parameter variable">--stable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function L(D,S){const s=i("ExternalLinkIcon");return l(),r("div",null,[c,a("h2",p,[h,e(),a("a",u,[e("Vuepress"),t(s)]),e(" (Documentation)")]),v,a("h2",m,[_,e(),a("a",b,[e("Git"),t(s)])]),f,a("h2",k,[g,e(),a("a",x,[e("Java"),t(s)])]),j,a("h2",w,[y,e(),a("a",I,[e("Maven"),t(s)])]),V,a("h2",E,[N,e(),a("a",T,[e("Intellij idea"),t(s)]),e(" (Optional)")]),B])}const G=o(d,[["render",L],["__file","how-to-install-development-tools.html.vue"]]);export{G as default};
