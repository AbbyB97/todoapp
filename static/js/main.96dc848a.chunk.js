(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{168:function(e,t,s){},173:function(e,t,s){},174:function(e,t,s){},175:function(e,t,s){},193:function(e,t,s){},195:function(e,t,s){},196:function(e,t,s){},197:function(e,t,s){},292:function(e,t,s){},295:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s(0),c=s.n(a),i=s(10),r=s.n(i),o=s(52),l=s(53),d=s(57),u=s(56),j=(s(168),s(19)),b=s(35),O=s(15),h=(s(173),s(174),s.p+"static/media/logo.24a3167d.png"),p=function(){return Object(n.jsxs)("div",{className:"section-1",children:[Object(n.jsxs)("div",{className:"logo-container",children:[Object(n.jsx)("img",{src:h,alt:"Logo"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"switch"}),"on"]})]}),Object(n.jsx)("h3",{children:"Assignments"})]})},m=(s(175),s(99)),f=s.n(m),x=s(135),k=s(136),g=s.n(k).a.create({baseURL:"https://reqres.in/api"}),v=function(){return{type:"USER_LOGOUT"}},y=function(e){return{type:"UPDATE_TASKS",payload:e}},T=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).passwordRef=c.a.createRef(),n.passwordTypeRef=c.a.createRef(),n.handleEyeClick=function(){var e=n.passwordTypeRef.current.type;n.passwordTypeRef.current.type="password"===e?"text":"password"},n.handleChangeEmail=function(e){n.setState({email:e.target.value}),n.emailRef.current.classList.remove("error")},n.handleChangePassword=function(e){n.setState({password:e.target.value}),n.passwordRef.current.classList.remove("error")},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.email&&""!==n.state.password?n.props.login(n.state.email):(""===n.state.email&&n.emailRef.current.classList.add("error"),""===n.state.password&&n.passwordRef.current.classList.add("error"))},n.emailRef=c.a.createRef(),n.state={email:"",password:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"section-2",children:Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("h1",{children:"To-Do App"}),Object(n.jsxs)("form",{className:"ui form",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{ref:this.emailRef,className:"ui field left icon input",children:[Object(n.jsx)("input",{type:"email",value:this.state.email,placeholder:"Email ID",onChange:this.handleChangeEmail}),Object(n.jsx)("i",{className:"envelope outline icon"})]}),Object(n.jsxs)("div",{ref:this.passwordRef,className:"ui field left icon input",children:[Object(n.jsx)("input",{ref:this.passwordTypeRef,type:"password",value:this.state.password,placeholder:"Password",onChange:this.handleChangePassword}),Object(n.jsx)("i",{className:"lock icon"}),Object(n.jsx)("div",{onClick:this.handleEyeClick,className:"ui icon input",children:Object(n.jsx)("i",{className:"eye link icon"})})]}),Object(n.jsx)("button",{className:"ui field green button",type:"submit",value:"Submit",children:" Login"})]})]})})}}]),s}(c.a.Component),C=Object(j.b)(null,{login:function(e){return function(){var t=Object(x.a)(f.a.mark((function t(s,n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/login",{email:"eve.holt@reqres.in",password:"cityslicka"});case 2:a=t.sent,s({type:"USER_LOGIN",payload:{token:a.data,email:e}});case 4:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}()}})(T),N=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"LoginPage",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(p,{}),Object(n.jsx)(C,{})]})})}}]),s}(c.a.Component),w=s(12),S=s(55),D=s(21),R=s(44),E=s.n(R),P=(s(193),s(336)),L=s(145),A=s(330),_=s(140),I=s.n(_);var M=function(e){var t=Object(L.a)({palette:{primary:I.a},overrides:{MuiPickersToolbar:{toolbar:{}},MuiPickersToolbarText:{toolbarBtnSelected:{color:"#FFFF"},toolbarTxt:{color:"#FFFF"}}}});return Object(n.jsx)(a.Fragment,{children:Object(n.jsx)(A.a,{theme:t,children:!0===e.keyboardPicker?Object(n.jsx)(P.b,{autoOk:!0,variant:"inline",inputVariant:"outlined",format:"dd-MM-yyyy",value:e.taskDate,InputAdornmentProps:{position:"start"},onChange:e.setTaskDate}):Object(n.jsx)(P.a,{label:"Select Date",autoOk:!0,variant:"inline",format:"dd-MM-yyyy",value:e.taskDate,onChange:e.setTaskDate,orientation:"landscape"})})})},U=s(18),z=s(146),B=s(341),F=s(338),G=Object(j.b)((function(e){return{state:e}}),{updateTaskList:y})((function(e){var t,s=Object(O.e)(),a=c.a.useState(null),i=Object(w.a)(a,2),r=i[0],o=i[1],l=function(t,n){var a=n.task;o(null),console.log("clicked",t,"===",a),"Delete"===t?function(t){console.log("deleting task ->",t);var s=e.state.tasks.filter((function(e){return e!==t}));console.log("og state",e.state.tasks),console.log("new state",s),e.updateTaskList(s)}(a):(console.log("edittask"),s.push({pathname:"/edittask",editableTask:a}))},d=function(e){return Object(n.jsxs)(z.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:l,children:[Object(n.jsx)(B.a,{onClick:function(){return l("Edit",e)},children:"Edit"}),Object(n.jsx)(B.a,{onClick:function(){return l("Delete",e)},children:"Delete"})]})};return Object(n.jsxs)("div",{style:{backgroundColor:"#ffffff",margin:"1rem",borderRadius:"0.25rem"},children:[Object(n.jsxs)("div",{style:{marginLeft:"0.5rem",display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)("div",{style:{backgroundColor:"#21ba45",marginTop:"0.5rem",borderRadius:"0.25rem"},children:Object(n.jsx)("p",{style:{padding:".25rem",margin:".15rem",color:"white"},children:e.task.taskType})}),Object(n.jsx)("i",{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},style:{cursor:"pointer",marginTop:"0.5rem"},class:"ellipsis vertical grey icon"}),Object(n.jsx)(d,{task:e.task})]}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)("h4",{style:{marginLeft:"0.5rem",marginBottom:"0rem"},children:e.task.taskName}),e.task.description?Object(n.jsx)("p",{style:{marginLeft:"0.5rem",marginBottom:"0",color:"gray"},children:e.task.description}):null,e.task.subTask?(t=e.task.subTask,t.map((function(s,a){return Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[" ",Object(n.jsx)(F.a,{size:"medium",checked:s.isComplete,onClick:function(){!function(t,s){console.log("check pressed -"),console.log("==== checked subt",t);var n=t.map((function(e){return e===s?Object(U.a)(Object(U.a)({},s),{},{isComplete:!s.isComplete}):e}));console.log("==== checked newsubt",n),console.log("===task ",e.task),console.log("===========og state ",e.state.tasks);var a=e.state.tasks.map((function(t){return t===e.task?Object(U.a)(Object(U.a)({},t),{},{subTask:n}):t}));console.log("===========new state ",a),e.updateTaskList(a)}(t,s)},style:{color:"green"}}),Object(n.jsx)("p",{children:s.subTaskText})]})}))):null]})]})})),K=Object(j.b)((function(e){return{state:e}}),{logout:v})((function(e){console.log("show type  -- - -",e.state.showTaskType);var t=Object(a.useState)(new Date),s=Object(w.a)(t,2),c=s[0],i=s[1],r=Object(O.e)(),o=function(){r.push("/createtask")},l=function(t){return console.log("show type  -- - -",e.state.showTaskType),e.state.tasks.filter((function(s){return s.tag===t&&e.state.showTaskType.includes(s.taskType)})).map((function(e,t){return Object(n.jsx)(G,{task:e},t)}))};return Object(n.jsx)(D.a,{utils:S.a,children:Object(n.jsxs)("div",{className:"dashboard",children:[Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"top-row",children:[Object(n.jsxs)("div",{id:"search-bar",className:"ui icon input search",children:[Object(n.jsx)("input",{style:{paddingLeft:"1rem"},className:"prompt",type:"text",placeholder:"Search Tasks..."}),Object(n.jsx)("i",{className:"search icon"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:o,class:"positive ui button",children:"New Task"})}),Object(n.jsx)("div",{children:Object(n.jsx)(M,{keyboardPicker:!0,taskDate:c,setTaskDate:i})})]}),Object(n.jsxs)("div",{className:"tasks-container",children:[Object(R.find)(e.state.tasks,(function(t){return"To-do"===t.tag&&e.state.showTaskType.includes(t.taskType)}))?Object(n.jsxs)("div",{style:{backgroundColor:"#f8f8f9",width:"300px",border:"red"},children:[Object(n.jsx)("div",{style:{textAlign:"center",backgroundColor:"#f2c94c",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"},children:Object(n.jsx)("h3",{style:{padding:"0.27rem",color:"white"},children:"To do"})}),l("To-do")]}):null,Object(R.find)(e.state.tasks,(function(t){return"In-Progress"===t.tag&&e.state.showTaskType.includes(t.taskType)}))?Object(n.jsxs)("div",{style:{backgroundColor:"#f8f8f9",width:"300px",border:"red"},children:[Object(n.jsx)("div",{style:{textAlign:"center",backgroundColor:"#21ba45",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"},children:Object(n.jsx)("h3",{style:{padding:"0.27rem",color:"white"},children:"In-progress"})}),l("In-Progress")]}):null,Object(R.find)(e.state.tasks,(function(t){return"Done"===t.tag&&e.state.showTaskType.includes(t.taskType)}))?Object(n.jsxs)("div",{style:{backgroundColor:"#f8f8f9",width:"300px",border:"red"},children:[Object(n.jsx)("div",{style:{textAlign:"center",backgroundColor:"#2f80ed",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"},children:Object(n.jsx)("h3",{style:{padding:"0.27rem",color:"white"},children:"Done"})}),l("Done")]}):null]}),0===e.state.tasks.length?Object(n.jsx)("div",{style:{textAlign:"center",height:"5rem",backgroundColor:"#2f80ed",cursor:"pointer",borderTopRightRadius:"0.5rem",borderRadius:"0.5rem",width:"18rem",margin:"auto",marginTop:"5vh"},onClick:o,children:Object(n.jsx)("h3",{style:{padding:"1.5rem",color:"white"},children:"Please add Some tasks!"})}):null]})})})),H=s(31),q=(s(195),function(e){var t=Object(O.e)();return Object(n.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(n.jsxs)("h2",{className:"ui header",children:[Object(n.jsx)("i",{onClick:function(){t.push("/")},className:"arrow left icon",style:{fontSize:"1.5rem",cursor:"pointer"}}),Object(n.jsx)("div",{className:"content",children:e.screenName})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsx)("div",{className:"ui divider"})]})}),J=s(339),V=s(337),W=s(331);function X(e){return Object(n.jsx)(V.a,Object(U.a)({elevation:6,variant:"filled"},e))}var Y=Object(W.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Q(e){var t=Y(),s=c.a.useState(e.isOpenSnackbar),a=Object(w.a)(s,2),i=a[0],r=a[1],o=function(t,s){"clickaway"!==s&&(e.disableError(),r(!1))};return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(J.a,{open:i,autoHideDuration:1500,onClose:o,children:e.isError?Object(n.jsx)(X,{onClose:o,severity:"error",children:e.errorMessage}):Object(n.jsx)(X,{onClose:o,severity:"success",children:"Task Added!"})})})}var Z=Object(j.b)((function(e){return{state:e}}),{createTask:function(e,t,s,n,a,c){return{type:"CREATE_TASK",payload:{taskName:e,description:t,tag:s,taskType:n,date:a,subTask:c}}}})((function(e){var t=Object(O.e)(),s=Object(a.useState)(""),c=Object(w.a)(s,2),i=c[0],r=c[1],o=Object(a.useState)(""),l=Object(w.a)(o,2),d=l[0],u=l[1],j=Object(a.useState)("To-do"),b=Object(w.a)(j,2),h=b[0],p=b[1],m=Object(a.useState)([!0,!1,!1]),f=Object(w.a)(m,2),x=f[0],k=f[1],g=Object(a.useState)("Personal"),v=Object(w.a)(g,2),y=v[0],T=v[1],C=Object(a.useState)(new Date),R=Object(w.a)(C,2),E=R[0],P=R[1],L=Object(a.useState)([{subTaskText:"",isComplete:!1}]),A=Object(w.a)(L,2),_=A[0],I=A[1],z=Object(a.useState)(!1),B=Object(w.a)(z,2),G=B[0],K=B[1],J=Object(a.useState)(!1),V=Object(w.a)(J,2),W=V[0],X=V[1],Y=Object(a.useState)(""),Z=Object(w.a)(Y,2),$=Z[0],ee=Z[1],te=function(){X(!1)};return void 0===e.state.login.token?Object(n.jsx)(N,{children:t.push("/")}):Object(n.jsx)(D.a,{utils:S.a,children:Object(n.jsxs)("div",{className:"create-task",children:[Object(n.jsx)(q,{screenName:"Create Task"}),Object(n.jsxs)("div",{id:"form",className:"ui form",children:[Object(n.jsxs)("div",{className:"section-one",children:[Object(n.jsxs)("div",{className:"ten wide field",children:[Object(n.jsx)("label",{style:{color:"#a6a6a6"},children:"Enter Task Name"}),Object(n.jsx)("input",{onChange:function(e){r(e.target.value),K(!1)},value:i,style:{backgroundColor:"#f2f2f2",fontSize:"1.2rem"},type:"text",placeholder:"Task Name"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"ten wide field",children:[Object(n.jsx)("label",{style:{color:"#a6a6a6"},children:"Task Description"}),Object(n.jsx)("textarea",{value:d,onChange:function(e){return u(e.target.value)},style:{backgroundColor:"#f2f2f2",resize:"none",fontSize:"1rem"},rows:"2",type:"text",placeholder:"Task Description"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"ui basic buttons",children:[Object(n.jsx)("button",{onClick:function(){return p("To-do")},className:"To-do"!==h?"ui button":"ui button active",children:"To-Do"}),Object(n.jsx)("button",{onClick:function(){return p("In-Progress")},className:"In-Progress"!==h?"ui button":"ui button active",children:"In-Progress"}),Object(n.jsx)("button",{onClick:function(){return p("Done")},className:"Done"!==h?"ui button":"ui button active",children:"Done"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"checkbox-container",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[0],onClick:function(){k([!0,!1,!1]),T("Personal")},style:{color:"green"}}),"Personal"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[1],onClick:function(){k([!1,!0,!1]),T("Official")},style:{color:"green"}}),"Official"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[2],onClick:function(){k([!1,!1,!0]),T("Miscellaneous")},style:{color:"green"}}),"Miscellaneous"]})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsx)(M,{taskDate:E,setTaskDate:P}),Object(n.jsx)("div",{className:"ui hidden divider"})]}),function(){var e=_.map((function(e,t){return console.log(t),Object(n.jsxs)("div",{style:{display:"flex",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)(F.a,{size:"medium",checked:e.isComplete,onChange:function(){return function(e){var t=Object(H.a)(_);console.log("task",t[e]),0===t[e].subTaskText.trim().length&&!1===t[e].isComplete?(console.log("empty check"),ee("Enter sub task before checking it as complete"),X(!0)):(t[e]=Object(U.a)(Object(U.a)({},t[e]),{},{isComplete:!t[e].isComplete}),I(t))}(t)},style:{color:"green"}}),Object(n.jsx)("div",{style:{marginTop:"1rem"},className:"ui ten wide input field",children:Object(n.jsx)("input",{value:e.subTaskText||"",onChange:function(e){return function(e,t){var s=Object(H.a)(_);s[e]=Object(U.a)(Object(U.a)({},s[e]),{},{subTaskText:t.target.value}),I(s)}(t,e)},type:"text",placeholder:"Sub Task ".concat(t+1)})}),Object(n.jsx)("i",{style:{cursor:"pointer"},onClick:function(){I(_.filter((function(t){return t!==e})))},className:"trash large icon grey"})]},t)}));return Object(n.jsxs)("div",{className:"section-two",children:[e,Object(n.jsxs)("div",{onClick:function(){return I([].concat(Object(H.a)(_),[{subTaskText:"",isComplete:!1}]))},style:{color:"#2185d0",fontSize:"1.2rem",cursor:"pointer"},children:[Object(n.jsx)("i",{style:{marginTop:"1rem"},className:"plus icon blue",children:" "}),"Add new sub task"]})]})}()]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"buttons-container",children:[Object(n.jsx)("button",{style:{margin:"1rem"},className:"ui button",children:"Cancel"}),Object(n.jsx)("button",{onClick:function(){0===i.trim().length?(ee("Task name is mandatory"),X(!0)):(e.createTask(i,d,h,y,E,_.filter((function(e){return""!==e.subTaskText}))),r(""),u(""),p("To-do"),k([!0,!1,!1]),T("Personal"),P(new Date),I([{subTaskText:"",isComplete:!1}]),K(!0))},className:"ui green button",children:"Create"})]}),G?Object(n.jsx)(Q,{disableError:te,isError:!1,isOpenSnackbar:G}):null,W?Object(n.jsx)(Q,{disableError:te,errorMessage:$,isError:!0,isOpenSnackbar:W}):null]})})})),$=(s(196),Object(j.b)((function(e){return{state:e}}),{updateTaskList:y})((function(e){var t=Object(O.e)(),s=Object(a.useState)(""),c=Object(w.a)(s,2),i=c[0],r=c[1],o=Object(a.useState)(""),l=Object(w.a)(o,2),d=l[0],u=l[1],j=Object(a.useState)("To-do"),b=Object(w.a)(j,2),h=b[0],p=b[1],m=Object(a.useState)([!0,!1,!1]),f=Object(w.a)(m,2),x=f[0],k=f[1],g=Object(a.useState)("Personal"),v=Object(w.a)(g,2),y=v[0],T=v[1],C=Object(a.useState)(new Date),R=Object(w.a)(C,2),E=R[0],P=R[1],L=Object(a.useState)([{subTaskText:"",isComplete:!1}]),A=Object(w.a)(L,2),_=A[0],I=A[1],z=Object(a.useState)(!1),B=Object(w.a)(z,2),G=B[0],J=B[1],V=Object(a.useState)(!1),W=Object(w.a)(V,2),X=W[0],Y=W[1],Z=Object(a.useState)(""),$=Object(w.a)(Z,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){if(void 0!==e.history.location.editableTask){var t=e.history.location.editableTask;r(t.taskName),u(t.description),p(t.tag),T(t.taskType),"Personal"===t.taskType?k([!0,!1,!1]):"Official"===t.taskType?k([!1,!0,!1]):k([!1,!1,!0]),P(t.date),I(t.subTask)}}),[e.history.location.editableTask]);var se=function(){Y(!1)};return void 0===e.state.login.token?Object(n.jsx)(N,{children:t.push("/")}):void 0===e.history.location.editableTask?Object(n.jsx)(K,{children:t.push("/")}):Object(n.jsx)(D.a,{utils:S.a,children:Object(n.jsxs)("div",{className:"edit-task",children:[Object(n.jsx)(q,{screenName:"Edit Task"}),Object(n.jsxs)("div",{id:"form",className:"ui form",children:[Object(n.jsxs)("div",{className:"section-one",children:[Object(n.jsxs)("div",{className:"ten wide field",children:[Object(n.jsx)("label",{style:{color:"#a6a6a6"},children:"Enter Task Name"}),Object(n.jsx)("input",{onChange:function(e){r(e.target.value),J(!1)},value:i,style:{backgroundColor:"#f2f2f2",fontSize:"1.2rem"},type:"text",placeholder:"Task Name"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"ten wide field",children:[Object(n.jsx)("label",{style:{color:"#a6a6a6"},children:"Task Description"}),Object(n.jsx)("textarea",{value:d,onChange:function(e){return u(e.target.value)},style:{backgroundColor:"#f2f2f2",resize:"none",fontSize:"1rem"},rows:"2",type:"text",placeholder:"Task Description"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"ui basic buttons",children:[Object(n.jsx)("button",{onClick:function(){return p("To-do")},className:"To-do"!==h?"ui button":"ui button active",children:"To-Do"}),Object(n.jsx)("button",{onClick:function(){return p("In-Progress")},className:"In-Progress"!==h?"ui button":"ui button active",children:"In-Progress"}),Object(n.jsx)("button",{onClick:function(){return p("Done")},className:"Done"!==h?"ui button":"ui button active",children:"Done"})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"checkbox-container",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[0],onClick:function(){k([!0,!1,!1]),T("Personal")},style:{color:"green"}}),"Personal"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[1],onClick:function(){k([!1,!0,!1]),T("Official")},style:{color:"green"}}),"Official"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{checked:x[2],onClick:function(){k([!1,!1,!0]),T("Miscellaneous")},style:{color:"green"}}),"Miscellaneous"]})]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsx)(M,{taskDate:E,setTaskDate:P}),Object(n.jsx)("div",{className:"ui hidden divider"})]}),function(){var e=_.map((function(e,t){return console.log(t),Object(n.jsxs)("div",{style:{display:"flex",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)(F.a,{size:"medium",checked:e.isComplete,onChange:function(){return function(e){console.log("item check ",e);var t=Object(H.a)(_);0===t[e].subTaskText.trim().length&&!1===t[e].isComplete?(console.log("empty check"),te("Enter sub task before checking it as complete"),Y(!0)):(t[e]=Object(U.a)(Object(U.a)({},t[e]),{},{isComplete:!t[e].isComplete}),I(t))}(t)},style:{color:"green"}}),Object(n.jsx)("div",{style:{marginTop:"1rem"},className:"ui ten wide input field",children:Object(n.jsx)("input",{value:e.subTaskText||"",onChange:function(e){return function(e,t){var s=Object(H.a)(_);s[e]=Object(U.a)(Object(U.a)({},s[e]),{},{subTaskText:t.target.value}),I(s)}(t,e)},type:"text",placeholder:"Sub Task ".concat(t+1)})}),Object(n.jsx)("i",{style:{cursor:"pointer"},onClick:function(){I(_.filter((function(t){return t!==e})))},className:"trash large icon grey"})]},t)}));return Object(n.jsxs)("div",{className:"section-two",children:[e,Object(n.jsxs)("div",{onClick:function(){return I([].concat(Object(H.a)(_),[{subTaskText:"",isComplete:!1}]))},style:{color:"#2185d0",fontSize:"1.4rem",cursor:"pointer"},children:[Object(n.jsx)("i",{className:"plus icon blue",children:" "}),"Add new sub task"]})]})}()]}),Object(n.jsx)("div",{className:"ui hidden divider"}),Object(n.jsxs)("div",{className:"buttons-container",children:[Object(n.jsx)("button",{style:{margin:"1rem"},className:"ui button",children:"Cancel"}),Object(n.jsx)("button",{onClick:function(){if(console.log("editTask"),0===i.trim().length)te("Task name is mandatory"),Y(!0);else{console.log("og state",e.state.tasks);var s=e.history.location.editableTask,n=e.state.tasks.map((function(e){return e===s?Object(U.a)(Object(U.a)({},s),{},{taskName:i,description:d,tag:h,subTask:_,date:E,taskType:y}):e}));console.log("newtasklist --",n),e.updateTaskList(n),t.push("/")}},className:"ui green button",children:"Update"})]}),G?Object(n.jsx)(Q,{disableError:se,isError:!1,isOpenSnackbar:G}):null,X?Object(n.jsx)(Q,{disableError:se,isError:!0,errorMessage:ee,isOpenSnackbar:X}):null]})})}))),ee=(s(197),s(141)),te=Object(j.b)((function(e){return{state:e}}))((function(e){var t=Object(O.e)(),s=E.a.countBy(e.state.tasks,(function(e){return"To-do"===e.tag})),a=E.a.countBy(e.state.tasks,(function(e){return"In-Progress"===e.tag})),c=E.a.countBy(e.state.tasks,(function(e){return"Done"===e.tag})),i={labels:["To-do","In-Progress","Done"],datasets:[{label:"Rainfall",backgroundColor:["#f2c94c","#27ae60","#2f80ed"],hoverBackgroundColor:["#cfa936","#1c7a44","#1656ab"],data:[s.true,a.true,c.true]}]};return Object(n.jsxs)("div",{className:"analytics",children:[Object(n.jsx)(q,{screenName:"Analytics"}),0!==e.state.tasks.length?Object(n.jsx)("div",{style:{height:"65vh"},children:Object(n.jsx)(ee.Pie,{data:i,options:{title:{display:!0,text:"Your task trends",fontSize:20},legend:{display:!0,position:"bottom",labels:{usePointStyle:!0}},maintainAspectRatio:!1}})}):Object(n.jsx)("div",{style:{textAlign:"center",height:"5rem",backgroundColor:"#2f80ed",cursor:"pointer",borderTopRightRadius:"0.5rem",borderRadius:"0.5rem",width:"18rem",margin:"auto",marginTop:"5vh"},onClick:function(){t.push("/createtask")},children:Object(n.jsx)("h3",{style:{padding:"1.5rem",color:"white"},children:"Please add Some tasks!"})})]})})),se=(s(292),Object(j.b)((function(e){return{state:e}}),{logout:v,showTaskType:function(e){return{type:"UPDATE_SHOW_LIST",payload:e}}})((function(e){var t=Object(O.e)();return Object(n.jsx)("div",{className:"side-bar",children:Object(n.jsxs)("div",{className:"side-bar-content",children:[Object(n.jsxs)("div",{className:"profile-container",children:[Object(n.jsx)("img",{alt:"avatar",style:{height:"3rem",width:"3rem"},src:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"0.5rem"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:e.state.login.email})}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:e.state.login.email.substring(0,e.state.login.email.indexOf("@"))})})]})]}),Object(n.jsxs)("div",{className:"sidebar-actions",children:[Object(n.jsxs)("div",{className:"tasktype-container",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#2f80ed",cursor:"pointer"},onClick:function(){e.showTaskType(["Personal","Official","Miscellaneous"])},children:"All"}),Object(n.jsx)("div",{style:{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#21ba45",cursor:"pointer"},onClick:function(){e.showTaskType(["Personal"])},children:"Personal"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#9b51e0",cursor:"pointer"},onClick:function(){e.showTaskType(["Official"])},children:"Official"}),Object(n.jsx)("div",{style:{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#f2994a",cursor:"pointer"},onClick:function(){e.showTaskType(["Miscellaneous"])},children:"Misc."})]})]}),Object(n.jsx)("div",{className:"analytics-container",onClick:function(){t.push("/analytics")},children:"Analytics"})]}),Object(n.jsx)("div",{className:"logout-container",onClick:function(){e.logout(),t.push("/")},children:Object(n.jsx)("img",{style:{height:"2rem",width:"2rem"},src:"https://cdn.pixabay.com/photo/2014/04/10/17/59/exit-321143_960_720.png",alt:"logout"})})]})})}))),ne=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderMainPage=function(){return void 0===e.props.state.login.token?Object(n.jsx)(N,{}):Object(n.jsx)(K,{})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"App",children:[void 0!==this.props.state.login.token&&Object(n.jsx)(se,{}),Object(n.jsx)(O.a,{path:"/",exact:!0,component:this.renderMainPage}),Object(n.jsx)(O.a,{path:"/createtask",exact:!0,component:Z}),Object(n.jsx)(O.a,{path:"/edittask",exact:!0,component:$}),Object(n.jsx)(O.a,{path:"/analytics",exact:!0,component:te})]})})}}]),s}(c.a.Component),ae=Object(j.b)((function(e){return{state:e}}))(ne),ce=s(27),ie=s(142),re=s(102),oe=s(143),le=s.n(oe),de=s(144),ue=Object(ce.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.payload;case"USER_LOGOUT":return{};default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":return[].concat(Object(H.a)(e),[t.payload]);case"UPDATE_TASKS":return console.log("update task reducer"),t.payload;case"USER_LOGOUT":return[];default:return e}},showTaskType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Personal","Official","Miscellaneous"],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SHOW_LIST":return t.payload;default:return e}}}),je={key:"root",storage:le.a},be=Object(re.a)(je,ue),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,he=Object(ce.e)(be,Oe(Object(ce.a)(ie.a))),pe=Object(re.b)(he);r.a.render(Object(n.jsx)(j.a,{store:he,children:Object(n.jsx)(de.a,{loading:null,persistor:pe,children:Object(n.jsx)(ae,{})})}),document.getElementById("root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.96dc848a.chunk.js.map