(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=n(8),i=n(2),u=n(3),b=n(5),d=n(4),j=n(0),l=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Statistics"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good: ",t]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",a]}),Object(j.jsxs)("li",{children:["Total: ",c]}),Object(j.jsxs)("li",{children:["Positive feedback: ",Math.round(r),"%"]})]})]})}}]),n}(a.Component);l.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var h=l,O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:t}),n]})}}]),n}(a.Component);O.defaultProps={title:"(empty)"};var p=O,v=n(9),f=n.n(v),k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("button",{className:f.a.button,onClick:n,name:e,children:e},e)}))})}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("p",{children:e})]})}}]),n}(a.Component);g.defaultProps={message:"(empty)"};var x=g,m=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t>0?e.state.good/t*100:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),n=Object.keys(this.state);return Object(j.jsxs)(p,{title:"Please leave feedback",children:[Object(j.jsx)(k,{options:n,onLeaveFeedback:this.onLeaveFeedback}),e>0?Object(j.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t}):Object(j.jsx)(x,{message:"No feedback given"})]})}}]),n}(c.a.Component);n(15);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__3vqKs"}}},[[16,1,2]]]);
//# sourceMappingURL=main.b0a92155.chunk.js.map