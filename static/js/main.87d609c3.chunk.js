(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),i=s(4),r=s.n(i),o=s(5),l=s(6),d=s(9),u=s(8),p=(s(32),s(33),s.p+"static/media/logo.24a3167d.png"),j=function(){return Object(n.jsxs)("div",{className:"section-1",children:[Object(n.jsxs)("div",{className:"logo-container",children:[Object(n.jsx)("img",{src:p,alt:"Logo"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"switch"}),"on"]})]}),Object(n.jsx)("h3",{children:"Assignments"})]})},h=(s(34),s(7)),f=s(14),b=s.n(f),m=s(24),O=s(25),v=s.n(O).a.create({baseURL:"https://reqres.in/api"}),g=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleEyeClick=function(){var e=n.passwordTypeRef.current.type;n.passwordTypeRef.current.type="password"===e?"text":"password"},n.handleChangeEmail=function(e){n.setState({email:e.target.value}),n.emailRef.current.classList.remove("error")},n.handleChangePassword=function(e){n.setState({password:e.target.value}),n.passwordRef.current.classList.remove("error")},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.email&&""!==n.state.password?n.props.login():(console.log(n.state),""===n.state.email&&(console.log("no email"),console.log("email ref",n.emailRef.current.classList),n.emailRef.current.classList.add("error")),""===n.state.password&&(console.log("no password"),n.passwordRef.current.classList.add("error")))},n.emailRef=c.a.createRef(),n.passwordRef=c.a.createRef(),n.passwordTypeRef=c.a.createRef(),n.state={email:"",password:""},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"section-2",children:Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("h1",{children:"To-Do App"}),Object(n.jsxs)("form",{className:"ui form",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{ref:this.emailRef,className:"ui field left icon input",children:[Object(n.jsx)("input",{type:"email",value:this.state.email,placeholder:"Email ID",onChange:this.handleChangeEmail}),Object(n.jsx)("i",{className:"envelope outline icon"})]}),Object(n.jsxs)("div",{ref:this.passwordRef,className:"ui field left icon input",children:[Object(n.jsx)("input",{ref:this.passwordTypeRef,type:"password",value:this.state.password,placeholder:"Password",onChange:this.handleChangePassword}),Object(n.jsx)("i",{className:"lock icon"}),Object(n.jsx)("div",{onClick:this.handleEyeClick,class:"ui icon input",children:Object(n.jsx)("i",{class:"eye link icon"})})]}),Object(n.jsx)("button",{className:"ui field green button",type:"submit",value:"Submit",children:" Login"})]})]})})}}]),s}(c.a.Component),x=Object(h.b)(null,{login:function(){return function(){var e=Object(m.a)(b.a.mark((function e(t,s){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/login",{email:"eve.holt@reqres.in",password:"cityslicka"});case 2:n=e.sent,t({type:"USER_LOGIN",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()}})(g),w=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"LoginPage",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(j,{}),Object(n.jsx)(x,{})]})})}}]),s}(c.a.Component),y=(s(59),function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(w,{})})}),R=s(3),N=s(26),E=Object(R.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.payload;default:return e}}}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,C=Object(R.e)(E,k(Object(R.a)(N.a)));r.a.render(Object(n.jsx)(h.a,{store:C,children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.87d609c3.chunk.js.map