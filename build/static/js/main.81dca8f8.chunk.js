(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=n(8),i=n(2),u=n(3),b=n(5),j=n(4),d=n(0),l=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Statistics"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Good: ",t]}),Object(d.jsxs)("li",{children:["Neutral: ",n]}),Object(d.jsxs)("li",{children:["Bad: ",a]}),Object(d.jsxs)("li",{children:["Total: ",c]}),Object(d.jsxs)("li",{children:["Positive feedback: ",Math.round(r),"%"]})]})]})}}]),n}(a.Component);l.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var h=l,p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:t}),n]})}}]),n}(a.Component);p.defaultProps={title:"(empty)"};var O=p,v=n(9),f=n.n(v),k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)("button",{className:f.a.button,onClick:n,name:e,children:e},e)}))})}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("p",{children:e})]})}}]),n}(a.Component);g.defaultProps={message:"(empty)"};var x=g,m=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t>0?e.state.good/t*100:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),n=Object.keys(this.state);return Object(d.jsxs)(O,{title:"Please leave feedback",children:[Object(d.jsx)(k,{options:n,onLeaveFeedback:this.onLeaveFeedback}),e>0?Object(d.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t}):Object(d.jsx)(x,{message:"No feedback given"})]})}}]),n}(c.a.Component);n(15);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__2FENY"}}},[[16,1,2]]]);
//# sourceMappingURL=main.81dca8f8.chunk.js.map