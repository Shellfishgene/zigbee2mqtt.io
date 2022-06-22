"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86509],{84423:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-47dc1eaf",path:"/devices/S2.html",title:"Ubisys S2 control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys S2 control via MQTT",description:"Integrate your Ubisys S2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring Inputs",slug:"configuring-inputs",children:[]},{level:3,title:"(Re-)Binding and/or Decoupling",slug:"re-binding-and-or-decoupling",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Power (numeric, meter endpoint)",slug:"power-numeric-meter-endpoint",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Power_on_behavior (enum, l1 endpoint)",slug:"power-on-behavior-enum-l1-endpoint",children:[]},{level:3,title:"Power_on_behavior (enum, l2 endpoint)",slug:"power-on-behavior-enum-l2-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/S2.md",git:{updatedTime:1655910214e3}}},53065:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var i=o(66252);const n=(0,i.uE)('<h1 id="ubisys-s2" tabindex="-1"><a class="header-anchor" href="#ubisys-s2" aria-hidden="true">#</a> Ubisys S2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>S2</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Power switch S2</td></tr><tr><td>Exposes</td><td>switch (state), power, action, power_on_behavior, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/S2.jpg" alt="Ubisys S2"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="configuring-inputs" tabindex="-1"><a class="header-anchor" href="#configuring-inputs" aria-hidden="true">#</a> Configuring Inputs</h3>',4),a=(0,i.Uk)("In case the input(s) need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as "),d=(0,i.Uk)("it is being done for the ubisys C4"),s=(0,i.Uk)("."),c=(0,i._)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling","aria-hidden":"true"},"#"),(0,i.Uk)(" (Re-)Binding and/or Decoupling")],-1),r=(0,i.Uk)("Also see "),l=(0,i.Uk)("the ubisys C4 documentation"),u=(0,i.Uk)(", example use cases:"),h=(0,i._)("ul",null,[(0,i._)("li",null,"Use the second input to control a different Zigbee device (S1-R only, S1 only has one input)"),(0,i._)("li",null,"Completely decouple the input(s) from the local load")],-1),p=(0,i._)("p",null,"When decoupled, 'action' will be published when pressing the attached switch button.",-1),b=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),g=(0,i.Uk)("This device supports OTA updates, for more information see "),m=(0,i.Uk)("OTA updates"),_=(0,i.Uk)("."),v=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),w=(0,i.Uk)("How to use device type specific configuration"),f=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric-meter-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-meter-endpoint" aria-hidden="true">#</a> Power (numeric, meter endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle_s1</code>, <code>toggle_s2</code>, <code>on_s1</code>, <code>on_s2</code>, <code>off_s1</code>, <code>off_s2</code>, <code>recall_*_s1</code>, <code>recal_*_s2</code>, <code>brightness_move_up_s1</code>, <code>brightness_move_up_s2</code>, <code>brightness_move_down_s1</code>, <code>brightness_move_down_s2</code>, <code>brightness_stop_s1</code>, <code>brightness_stop_s2</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint" aria-hidden="true">#</a> Power_on_behavior (enum, l1 endpoint)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint" aria-hidden="true">#</a> Power_on_behavior (enum, l2 endpoint)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),q={},y=(0,o(83744).Z)(q,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[a,(0,i.Wm)(o,{to:"/devices/C4.html#configuring-inputs"},{default:(0,i.w5)((()=>[d])),_:1}),s]),c,(0,i._)("p",null,[r,(0,i.Wm)(o,{to:"/devices/C4.html#binding"},{default:(0,i.w5)((()=>[l])),_:1}),u]),h,p,b,(0,i._)("p",null,[g,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[m])),_:1}),_]),v,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[w])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);