(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(t,e,n){"use strict";n.r(e);var r,a,i,o,s,c=n(0),u=n.n(c),p=(n(152),n(244)),l=n(204),d=n(7),m=n.n(d),f=n(308),y=n(310),h=Object(f.a)(r=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={seconds:20},n}m()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.interval=setInterval(function(){return t.props.store.setpcstate()},22e3),this.setState({seconds:20})},n.componentWillUnmount=function(){clearInterval(this.interval)},n.render=function(){var t=this.props.store.get_pc_persistentEnemies;return c.createElement("div",null,"Worldstate:",t&&c.createElement("div",null,t.map(function(t){return c.createElement("div",{key:t.id},t.agentType,c.createElement("div",null,"Status: ",t.isDiscovered?"Found at "+t.lastDiscoveredAt:"Missing"))}),c.createElement(y.a,{key:Date.now(),date:Date.now()+2e4,renderer:function(t){var e=t.seconds;return c.createElement("span",null,e," seconds")}})))},e}(c.Component))||r,g=(n(74),n(312)),w=n.n(g),v=(n(249),n(313)),b=n.n(v),E=n(314),k=n.n(E),x=n(315),_=n.n(x),j=n(316),q=n.n(j),T=(n(317),n(318)),P=n.n(T),O=n(247),D=(a=function(){function t(){var t=this;k()(this,"pc_worldstate",i,this),k()(this,"client",o,this),this.setclient=b()(w.a.mark(function e(){var n,r,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://docs.warframestat.us/swagger.json");case 2:return n=e.sent,Object(O.m)(function(){t.client=n}),e.next=6,t.client.apis.worldstate.get_pc();case 6:r=e.sent,a=r.body,Object(O.m)(function(){t.pc_worldstate=a});case 9:case"end":return e.stop()}},e,this)})),k()(this,"setpcstate",s,this),this.setclient()}return t.prototype.checkpersistent=function(){var t=b()(w.a.mark(function t(){var e;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.client.apis.worldstate.get_pc_persistentEnemies();case 2:e=t.sent,e.obj.forEach(function(t){});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),_()(t,[{key:"get_pc_persistentEnemies",get:function(){return this.pc_worldstate.persistentEnemies}},{key:"check",get:function(){return this.pc_worldstate.persistentEnemies}}]),t}(),i=q()(a.prototype,"pc_worldstate",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),o=q()(a.prototype,"client",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),q()(a.prototype,"get_pc_persistentEnemies",[O.e],Object.getOwnPropertyDescriptor(a.prototype,"get_pc_persistentEnemies"),a.prototype),q()(a.prototype,"check",[O.e],Object.getOwnPropertyDescriptor(a.prototype,"check"),a.prototype),s=q()(a.prototype,"setpcstate",[O.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return b()(w.a.mark(function e(){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.client.apis.worldstate.get_pc();case 2:n=e.sent,r=n.body,Object(O.m)(function(){t.pc_worldstate=r});case 5:case"end":return e.stop()}},e,this)}))}}),q()(a.prototype,"checkpersistent",[O.d],Object.getOwnPropertyDescriptor(a.prototype,"checkpersistent"),a.prototype),a);e.default=function(){return u.a.createElement(p.a,null,u.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),u.a.createElement(h,{store:new D}))}},152:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(144),c=n.n(s);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var u=n(167),p=n.n(u);n.d(e,"PageRenderer",function(){return p.a});var l=n(33);n.d(e,"parsePath",function(){return l.a});var d=a.a.createContext({}),m=function(t){return a.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(t,e,n){var r;t.exports=(r=n(202))&&r.default||r},201:function(t){t.exports={data:{site:{siteMetadata:{title:"Project Wf"}}}}},202:function(t,e,n){"use strict";n.r(e);n(32);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(54),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},203:function(t,e,n){},204:function(t,e,n){"use strict";var r=n(205),a=n(0),i=n.n(a),o=n(4),s=n.n(o),c=n(245),u=n.n(c),p=n(152);function l(t){var e=t.description,n=t.lang,a=t.meta,o=t.keywords,s=t.title;return i.a.createElement(p.StaticQuery,{query:d,render:function(t){var r=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})},data:r})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l;var d="1025518380"},205:function(t){t.exports={data:{site:{siteMetadata:{title:"Project Wf",description:"Side Project to create warframe tracker app",author:"@gatsbyjs"}}}}},244:function(t,e,n){"use strict";var r=n(201),a=n(0),i=n.n(a),o=n(4),s=n.n(o),c=n(152),u=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var p=u,l=(n(203),function(t){var e=t.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement("a",{href:"https://eddayy.github.io"},"Edmund"))))},data:r})});l.propTypes={children:s.a.node.isRequired};e.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-27c8ddfb8e0d30172e76.js.map