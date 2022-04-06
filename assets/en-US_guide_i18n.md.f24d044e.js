import{_ as n,d as a,o as s,f as t}from"./app.bdf4a3d8.js";const h='{"title":"Internationalization","description":"","frontmatter":{"title":"Internationalization","lang":"en-US"},"headers":[{"level":2,"title":"Global configuration","slug":"global-configuration"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"CDN Usage","slug":"cdn-usage"}],"relativePath":"en-US/guide/i18n.md"}',e={},p=t(`<h1 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor" href="#internationalization" aria-hidden="true">#</a></h1><p>Element Plus components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="global-configuration" tabindex="-1">Global configuration <a class="header-anchor" href="#global-configuration" aria-hidden="true">#</a></h2><p>Element Plus provides global configurations</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor" href="#configprovider" aria-hidden="true">#</a></h2><p>Element Plus also provides a Vue component <a href="/en-US/component/config-provider.html">ConfigProvider</a> for globally configuring locale and other settings.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ElConfigProvider<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="cdn-usage" tabindex="-1">CDN Usage <a class="header-anchor" href="#cdn-usage" aria-hidden="true">#</a></h2><p>If you are using Element Plus via CDN, then you need to do this, let&#39;s again take unpkg as an example</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> ElementPlusLocaleZhCn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Full documentation refer to: <a href="/en-US/component/config-provider.html">ConfigProvider</a></p><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">Supported Language List</a></p><ul class="language-list"><li>Simplified Chinese (zh-cn)</li><li>American English (en)</li><li>German (de)</li><li>Portuguese (pt)</li><li>Spanish (es)</li><li>Danish (da)</li><li>French (fr)</li><li>Norwegian (nb-NO)</li><li>Traditional Chinese (zh-tw)</li><li>Italian (it)</li><li>Korean (ko)</li><li>Japanese (ja)</li><li>Dutch (nl)</li><li>Vietnamese (vi)</li><li>Russian (ru)</li><li>Turkish (tr)</li><li>Brazilian Portuguese (pt-br)</li><li>Farsi (fa)</li><li>Thai (th)</li><li>Indonesian (id)</li><li>Bulgarian (bg)</li><li>Pashto (pa)</li><li>Polish (pl)</li><li>Finnish (fi)</li><li>Swedish (sv)</li><li>Greek (el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>Czech (cs)</li><li>Ukrainian (uk)</li><li>Turkmen (tk)</li><li>Tamil (ta)</li><li>Latvian (lv)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>Hebrew (he)</li><li>Lithuanian (lt)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>Hungarian (hu)</li><li>Romanian (ro)</li><li>Kurdish (ku)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li><li>Bengali (bn)</li></ul><p>If you need any other languages, <a href="https://github.com/element-plus/element-plus/pulls" target="_blank" rel="noopener noreferrer">PR</a> is always welcomed, you only need to add a language file at <a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">here</a>.</p>`,15),l=[p];function o(i,c,u,r,k,g){return s(),a("div",null,l)}var m=n(e,[["render",o]]);export{h as __pageData,m as default};
