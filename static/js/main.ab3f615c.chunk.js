(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a,c,s,i,r=n(1),o=n.n(r),d=n(5),b=n.n(d),j=n(9),l=n(6),h=n(7),O=n(11),u=n(10),p=n(2),x=n(3),g=x.a.p(a||(a=Object(p.a)(["\n  font-size: 18px;\n  padding: 0;\n  margin: 0 0 10px;\n  text-transform: capitalize;\n"]))),k=n(0),f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(g,{children:[Object.keys(e)[0],": ",t]}),Object(k.jsxs)(g,{children:[Object.keys(e)[1],": ",n]}),Object(k.jsxs)(g,{children:[Object.keys(e)[2],": ",a]}),Object(k.jsxs)(g,{children:["Total: ",c]}),Object(k.jsxs)(g,{children:["Positive feedback: ",s?"".concat(s,"%"):0]})]})},v=x.a.button(c||(c=Object(p.a)(["\n  padding: 10px;\n  margin-right: 20px;\n  border-radius: 5px;\n"]))),m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(k.jsx)(v,{type:"button",name:t,onClick:n,children:t})},y=function(e){return Object(k.jsxs)("section",{children:[Object(k.jsx)("h2",{children:e.title}),e.children]})},F=x.a.p(s||(s=Object(p.a)(["\n  font-size: 18px;\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n"]))),w=function(e){var t=e.message;return Object(k.jsx)(F,{children:t})},L=x.a.article(i||(i=Object(p.a)(["\n  padding: 20px;\n"]))),P=function(e){Object(O.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var n=t.target.name;e.setState((function(e){return e[n]=e[n]+1}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state),t=Object(j.a)(e,3),n=t[0],a=t[1],c=t[2],s=this.state.good+this.state.neutral+this.state.bad,i=Math.floor(this.state.good/s*100);return Object(k.jsxs)(L,{children:[Object(k.jsxs)(y,{title:"Please leave feedback",children:[Object(k.jsx)(m,{options:n,onLeaveFeedback:this.addFeedback}),Object(k.jsx)(m,{options:a,onLeaveFeedback:this.addFeedback}),Object(k.jsx)(m,{options:c,onLeaveFeedback:this.addFeedback})]}),Object(k.jsx)(y,{title:"Statistics",children:s?Object(k.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:s,positivePercentage:i}):null}),s?null:Object(k.jsx)(w,{message:"No feedback given"})]})}}]),n}(r.Component);b.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ab3f615c.chunk.js.map