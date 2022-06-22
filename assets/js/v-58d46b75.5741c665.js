"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83829],{51909:(t,e,o)=>{o.r(e),o.d(e,{data:()=>a});const a={key:"v-58d46b75",path:"/devices/TYZS1L.html",title:"TuYa TYZS1L control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TYZS1L control via MQTT",description:"Integrate your TuYa TYZS1L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-07-20T23:08:11.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Limitations",slug:"limitations",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TYZS1L.md",git:{updatedTime:1655910214e3}}},69972:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var a=o(66252);const s=(0,a.uE)('<h1 id="tuya-tyzs1l" tabindex="-1"><a class="header-anchor" href="#tuya-tyzs1l" aria-hidden="true">#</a> TuYa TYZS1L</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TYZS1L</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Led strip controller HSB</td></tr><tr><td>Exposes</td><td>light (state, color_hs), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TYZS1L.jpg" alt="TuYa TYZS1L"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><p>This device has various limitations:</p><ul><li>Changing brightness is not supported</li><li>On/off and color transition is not supported</li><li>Color can only be set via hue/saturation, example payload <code>{&quot;color&quot;:{&quot;h&quot;: 360, &quot;s&quot;: 100}}</code>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',7),n=(0,a.Uk)("How to use device type specific configuration"),i=(0,a.uE)('<ul><li><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, brightness):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;hue_move&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;hue_step&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// Decrease hue by 90 (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_step&quot;</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token comment">// Increase saturation by 66 (allowed value range: -255 till 255)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),u={},l=(0,o(83744).Z)(u,[["render",function(t,e){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[n])),_:1})])]),i],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,a]of e)t[o]=a;return t}}}]);