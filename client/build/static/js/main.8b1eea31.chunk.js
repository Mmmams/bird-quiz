(this["webpackJsonpbird-quiz"]=this["webpackJsonpbird-quiz"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),s=a.n(r),i=(a(88),a(10)),o=(a(93),a(162)),l=a(165),u=(a(94),{SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAIL:"SIGN_UP_FAIL",LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAIL:"LOGIN_FAIL",LOGOUT:"LOGOUT",UPDATE_LEVEL_START:"UPDATE_LEVEL_START",UPDATE_LEVEL_SUCCESS:"UPDATE_LEVEL_SUCCESS",UPDATE_LEVEL_FAIL:"UPDATE_LEVEL_FAIL",GET_LEVEL_START:"GET_LEVEL_START",GET_LEVEL_SUCCESS:"GET_LEVEL_SUCCESS",GET_LEVEL_FAIL:"GET_LEVEL_FAIL",RESET_LEVEL_START:"RESET_LEVEL_START",RESET_LEVEL_SUCCESS:"RESET_LEVEL_SUCCESS",RESET_LEVEL_FAIL:"RESET_LEVEL_FAIL",SET_MESSAGE:"SET_MESSAGE"}),d=function(e){return{type:u.SIGN_UP_FAIL,payload:e}},j=function(e,t){return{type:u.LOGIN_START,payload:{email:e,password:t}}},b=function(e){return{type:u.LOGIN_SUCCESS,payload:e}},O=function(e){return{type:u.LOGIN_FAIL,payload:e}},E=function(e){return{type:u.UPDATE_LEVEL_SUCCESS,payload:e}},p=function(e){return{type:u.GET_LEVEL_START,payload:e}},S=function(e){return{type:u.GET_LEVEL_SUCCESS,payload:e}},_=function(e){return{type:u.RESET_LEVEL_SUCCESS,payload:e}},f=function(e){return{type:u.SET_MESSAGE,payload:e}},m=a(22),T=function(e){return e.birds},x=Object(m.a)([T],(function(e){return e.birdsArray})),h=Object(m.a)([T],(function(e){return e.currentBirdsArray})),v=Object(m.a)([T],(function(e){return e.score})),A=Object(m.a)([T],(function(e){return e.extraScore})),L=Object(m.a)([T],(function(e){return e.random})),R=Object(m.a)([T],(function(e){return e.answered})),y=Object(m.a)([T],(function(e){return e.activeBird})),C=Object(m.a)([T],(function(e){return e.questionBird})),N=Object(m.a)([T],(function(e){return e.colorsArray})),I=function(e){return e.user},g=Object(m.a)([I],(function(e){return e.currentUser})),w=Object(m.a)([I],(function(e){return e.message})),U=Object(m.a)([I],(function(e){return e.level})),F=a(3),G=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},btn:{margin:"10px",color:"white"}}})),V=function(){var e=G(),t=Object(i.b)(),a=Object(i.c)(g),c=Object(i.c)(U),n=Object(i.c)(v);return Object(F.jsxs)("div",{className:"header",children:[Object(F.jsxs)("div",{className:"header-info",children:[Object(F.jsxs)("div",{className:"header-logo",children:["Song",Object(F.jsx)("span",{className:"logo-part",children:"Bird"})]}),Object(F.jsxs)("div",{className:"header-userinfo",children:[Object(F.jsxs)("div",{className:"score",children:[a.email,": ",n]}),Object(F.jsx)(l.a,{variant:"outlined",className:e.btn,onClick:function(){localStorage.removeItem("user"),t(b(null))},children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(F.jsxs)("ul",{className:"header-list",children:[Object(F.jsx)("li",{className:"".concat(1===c?"currentLevel":"","  list"),children:"\u0420\u0430\u0437\u043c\u0438\u043d\u043a\u0430"}),Object(F.jsx)("li",{className:"".concat(2===c?"currentLevel":"","  list"),children:"\u0412\u043e\u0440\u043e\u0431\u044c\u0438\u043d\u044b\u0435"}),Object(F.jsx)("li",{className:"".concat(3===c?"currentLevel":"","  list"),children:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(4===c?"currentLevel":"","  list"),children:"\u041f\u0435\u0432\u0447\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(5===c?"currentLevel":"","  list"),children:"\u0425\u0438\u0449\u043d\u044b\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(6===c?"currentLevel":"","  list"),children:"\u041c\u043e\u0440\u0441\u043a\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"})]})]})},D=(a(96),a(97),a.p+"static/media/true.878a455e.mp3"),k=a.p+"static/media/wrong.31792b99.mp3",P={FETCH_INFO_START:"FETCH_INFO_START",FETCH_INFO_SUCCESS:"FETCH_INFO_SUCCESS",FETCH_INFO_FAIL:"FETCH_INFO_FAIL",SET_CURRENT_BIRD_ARRAY:"SET_CURRENT_BIRD_ARRAY",SET_RANDOM_VALUE:"SET_RANDOM_VALUE",SET_ACTIVE_BIRD:"SET_ACTIVE_BIRD",SET_QUESTION_BIRD:"SET_QUESTION_BIRD",SET_ANSWERED:"SET_ANSWERED",INCREASE_SCORE:"INCREASE_SCORE",DECREASE_EXPTRA_SCORE:"DECREASE_EXPTRA_SCORE",RESET_EXTRA_SCORE:"RESET_EXTRA_SCORE",RESET_ACTIVE_BIRD:"RESET_ACTIVE_BIRD",RESET_GAME:"RESET_GAME",FILL_COLORS_ARRAY:"FILL_COLORS_ARRAY",CHANGE_LIST_COLOR:"CHANGE_LIST_COLOR"},B=function(e){return{type:P.SET_CURRENT_BIRD_ARRAY,payload:e}},H=function(e){return{type:P.SET_RANDOM_VALUE,payload:e}},M=function(){return{type:P.SET_ANSWERED}},q=function(e){return{type:P.FILL_COLORS_ARRAY,payload:e}},W=function(e,t){return{type:P.CHANGE_LIST_COLOR,payload:{color:e,index:t}}},J=function(){var e=Object(i.b)(),t=new Audio(D),a=new Audio(k),c=Object(i.c)(N),n=Object(i.c)(L),r=Object(i.c)(R),s=Object(i.c)(h),o=Object(i.c)(A),l=function(i,l){var u;e((u=s[l],{type:P.SET_ACTIVE_BIRD,payload:u})),l===n?!1===r&&(t.play(),e(W("green",l)),e({type:P.INCREASE_SCORE,payload:o}),e(M())):!1===r&&"red"!==c[l]&&(a.play(),e({type:P.DECREASE_EXPTRA_SCORE}),e(W("red",l)))};return Object(F.jsx)("div",{className:"bird-list-container",children:s?Object(F.jsx)("div",{children:Object(F.jsx)("ul",{className:"bird-list",children:s.map((function(e,t){return Object(F.jsxs)("li",{className:"list",onClick:function(e){return l(0,t)},children:[Object(F.jsx)("svg",{className:"options_block",width:"14",height:"14",children:Object(F.jsx)("circle",{cx:"7",cy:"7",r:"6",stroke:"black",strokeWidth:"1",fill:c[t]})}),Object(F.jsx)("span",{children:e.name})]},e._id)}))})}):Object(F.jsx)("div",{className:"bird-list-container loading-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})},X=(a(98),function(){var e=Object(i.c)(y);return Object(F.jsx)("div",{className:"container",children:e?Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"bird-info",children:[Object(F.jsx)("img",{className:"bird-img",alt:"bird",src:e.image}),Object(F.jsxs)("div",{className:"title-container",children:[Object(F.jsx)("div",{className:"title",children:e.name}),Object(F.jsx)("div",{className:"engName",children:e.species}),Object(F.jsx)("div",{className:"sub-title",children:e.description})]})]}),Object(F.jsx)("audio",{controls:!0,className:"bird-audio",src:e.audio})]}):Object(F.jsx)("div",{className:"bird-info",children:"\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0439\u0442\u0435 \u0437\u0432\u0443\u043a \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442."})})}),Y=function(){return Object(F.jsxs)("div",{className:"main",children:[Object(F.jsx)(J,{}),Object(F.jsx)(X,{})]})},z=(a(99),function(){var e=Object(i.b)(),t=Object(i.c)(h),a=Object(i.c)(L),n=Object(i.c)(C),r=Object(i.c)(R),s=Object(c.useRef)(null);return!0===r&&s.current.pause(),Object(c.useEffect)((function(){var c;t&&e((c=t[a],{type:P.SET_QUESTION_BIRD,payload:c}))}),[a]),Object(F.jsxs)("div",{className:"question",children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{className:"question-image",alt:"unknown-bird",src:r?n.image:"https://image.freepik.com/free-vector/pixel-art-cartoon-bird-icon-set-8bit-autumn_41992-931.jpg"})}),Object(F.jsxs)("div",{className:"question-data",children:[Object(F.jsx)("div",{className:"name",children:r?n.name:"******"}),n?Object(F.jsx)("audio",{className:"question-audio",controls:!0,src:n.audio,ref:s}):Object(F.jsx)("div",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})]})}),Q=(a(100),function(e){return Math.floor(Math.random()*e)}),Z=function(e,t){return t.slice(6*(e-1),6*e)},$=function(e){for(var t=[],a=0;a<e.length;a++)t.push("white");return t},K=function(){var e=Object(i.b)(),t=Object(i.c)(g),a=Object(i.c)(R),c=Object(i.c)(U),n=Object(i.c)(x),r=function(){if(!0===a){e(M()),e({type:P.RESET_ACTIVE_BIRD}),e({type:P.RESET_EXTRA_SCORE}),e((o={email:t.email},{type:u.UPDATE_LEVEL_START,payload:o}));var r=Z(c+1,n);e(B(r));var s=Q(r.length);e(H(s));var i=$(r);e(q(i)),e(f(null)),localStorage.setItem("user",JSON.stringify(t))}var o};return Object(F.jsx)("div",{children:Object(F.jsx)("button",{className:a?"custom-button":"blockedBtn",onClick:function(){r()},children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"})})},ee=(a(101),function(){var e=Object(i.b)(),t=Object(i.c)(v),a=Object(i.c)(g),c=Object(i.c)(x),n=function(){e({type:P.RESET_GAME});var t=Z(1,c);e(B(t));var n=$(t);e(q(n));var r,s=Q(t.length);e(H(s)),e((r=a.email,{type:u.RESET_LEVEL_START,payload:r}))};return Object(F.jsxs)("div",{className:"endgame-container",children:[Object(F.jsx)("div",{className:"endgame-title",children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c"}),Object(F.jsxs)("div",{className:"endgame-subtitle",children:["\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u041e\u0431\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",t," \u0438\u0437 30 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0431\u0430\u043b\u043b\u043e\u0432."]}),30===t?Object(F.jsx)("div",{className:"endgame-subtitle",children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u0438\u0433\u0440\u0443."}):Object(F.jsx)("button",{className:"endgame-btn",onClick:function(){return n()},children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437!"})]})}),te=a(11),ae=a.n(te),ce=a(57),ne=a(52),re=a(6),se=a(75),ie=a(175),oe=a(169),le=a(173),ue=a(172),de=a(72),je=a.n(de),be=a(170),Oe=a(74),Ee=a(168),pe=a(167),Se=a(174),_e=Object(o.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#64b5f6"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),fe=Object(Oe.a)({palette:{primary:{main:"#64b5f6"},secondary:{main:"#008cff"}}});function me(){var e=Object(i.b)(),t=_e(),a=Object(i.c)(w),n=(Object(i.c)(g),Object(c.useState)({email:"",password:""})),r=Object(se.a)(n,2),s=r[0],o=r[1],d=function(e){e.preventDefault(),o(Object(re.a)(Object(re.a)({},s),{},Object(ne.a)({},e.target.name,e.target.value)))},b=function(){var t=Object(ce.a)(ae.a.mark((function t(a){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e((c=s.email,n=s.password,{type:u.SIGN_UP_START,payload:{email:c,password:n}})),e(f(null));case 3:case"end":return t.stop()}var c,n}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(ce.a)(ae.a.mark((function t(a){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),c=s.email,!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c)?(e(j(s.email,s.password)),e(p(s.email)),e(f(null))):e(f("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"));case 3:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsx)(pe.a,{theme:fe,children:Object(F.jsxs)(Ee.a,{component:"main",maxWidth:"xs",children:[Object(F.jsx)(oe.a,{}),Object(F.jsxs)("div",{className:t.paper,children:[Object(F.jsx)(ie.a,{className:t.avatar,children:Object(F.jsx)(je.a,{})}),Object(F.jsx)(be.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(F.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(F.jsx)(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:d}),Object(F.jsx)(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:d}),a?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d!"===a?Object(F.jsx)(Se.a,{severity:"success",children:a}):Object(F.jsx)(Se.a,{severity:"error",children:a}):null,Object(F.jsxs)(ue.a,{container:!0,justify:"space-between",children:[Object(F.jsx)(ue.a,{item:!0,children:Object(F.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:O,children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(F.jsx)(ue.a,{item:!0,children:Object(F.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:b,children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})]})]})]})})}var Te=function(){var e=Object(i.b)(),t=Object(i.c)(g),a=Object(i.c)(U),n=Object(i.c)(x);return Object(c.useEffect)((function(){e({type:P.FETCH_INFO_START})}),[]),Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));e(b(t))}),[]),Object(c.useEffect)((function(){t&&e(p(t.email))}),[t]),Object(c.useEffect)((function(){if(n){var t=Z(a,n),c=Q(t.length),r=$(t);e(q(r)),e(B(t)),e(H(c))}}),[n]),Object(F.jsx)("div",{className:"App",children:t?Object(F.jsxs)("div",{children:[Object(F.jsx)(V,{}),a>6?Object(F.jsx)(ee,{}):Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{}),Object(F.jsx)(Y,{}),Object(F.jsx)(K,{})]})]}):Object(F.jsx)("div",{children:Object(F.jsx)(me,{})})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},he=a(25),ve=(a(107),a(76)),Ae=a(13),Le=a(55),Re=a.n(Le),ye=ae.a.mark(Ie),Ce=ae.a.mark(ge),Ne=ae.a.mark(we);function Ie(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([Object(Ae.b)(ge)]);case 2:case"end":return e.stop()}}),ye)}function ge(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(P.FETCH_INFO_START,we);case 2:case"end":return e.stop()}}),Ce)}function we(){var e;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Re.a.get("http://localhost:5000/getdata");case 3:return e=t.sent,t.next=6,Object(Ae.c)((c=e.data,{type:P.FETCH_INFO_SUCCESS,payload:c}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ae.c)((a=t.t0,{type:P.FETCH_INFO_FAIL,payload:a}));case 12:case"end":return t.stop()}var a,c}),Ne,null,[[0,8]])}var Ue=ae.a.mark(We),Fe=ae.a.mark(Je),Ge=ae.a.mark(Xe),Ve=ae.a.mark(Ye),De=ae.a.mark(ze),ke=ae.a.mark(Qe),Pe=ae.a.mark(Ze),Be=ae.a.mark($e),He=ae.a.mark(Ke),Me=ae.a.mark(et),qe=ae.a.mark(tt);function We(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([Object(Ae.b)(et),Object(Ae.b)($e),Object(Ae.b)(Qe),Object(Ae.b)(Ye),Object(Ae.b)(Je)]);case 2:case"end":return e.stop()}}),Ue)}function Je(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(u.RESET_LEVEL_START,Xe);case 2:case"end":return e.stop()}}),Fe)}function Xe(e){var t,a,c,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t,console.log(a),r.prev=3,r.next=6,fetch("http://localhost:5000/resetLevel",{method:"POST",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 6:return c=r.sent,r.next=9,c.json();case 9:return n=r.sent,r.next=12,Object(Ae.c)(_(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(3),r.next=18,Object(Ae.c)((s=r.t0,{type:u.RESET_LEVEL_FAIL,payload:s}));case 18:case"end":return r.stop()}var s}),Ge,null,[[3,14]])}function Ye(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(u.GET_LEVEL_START,ze);case 2:case"end":return e.stop()}}),Ve)}function ze(e){var t,a,c,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t,console.log(a),r.prev=3,r.next=6,fetch("http://localhost:5000/getLevel",{method:"POST",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 6:return c=r.sent,r.next=9,c.json();case 9:return n=r.sent,r.next=12,Object(Ae.c)(S(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(3),r.next=18,Object(Ae.c)((s=r.t0,{type:u.GET_LEVEL_FAIL,payload:s}));case 18:case"end":return r.stop()}var s}),De,null,[[3,14]])}function Qe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(u.UPDATE_LEVEL_START,Ze);case 2:case"end":return e.stop()}}),ke)}function Ze(e){var t,a,c,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.email,r.prev=2,r.next=5,fetch("http://localhost:5000/updateLevel",{method:"PATCH",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 5:return c=r.sent,r.next=8,c.json();case 8:return n=r.sent,r.next=11,Object(Ae.c)(E(n));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(2),r.next=17,Object(Ae.c)((s=r.t0,{type:u.UPDATE_LEVEL_FAIL,payload:s}));case 17:case"end":return r.stop()}var s}),Pe,null,[[2,13]])}function $e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(u.LOGIN_START,Ke);case 2:case"end":return e.stop()}}),Be)}function Ke(e){var t,a,c,n,r;return ae.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.email,c=t.password,s.prev=2,s.next=5,fetch("http://localhost:5000/login",{method:"POST",credentials:"include",body:JSON.stringify({email:a,password:c}),headers:{"Content-Type":"application/json"}});case 5:return n=s.sent,s.next=8,n.json();case 8:if(!(r=s.sent).message){s.next=14;break}return s.next=12,Object(Ae.c)(O(r.message));case 12:s.next=16;break;case 14:return s.next=16,Object(Ae.c)(b(r));case 16:localStorage.setItem("user",JSON.stringify(r)),s.next=23;break;case 19:return s.prev=19,s.t0=s.catch(2),s.next=23,Object(Ae.c)(O(s.t0));case 23:case"end":return s.stop()}}),He,null,[[2,19]])}function et(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(u.SIGN_UP_START,tt);case 2:case"end":return e.stop()}}),Me)}function tt(e){var t,a,c,n,r;return ae.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.email,c=t.password,s.prev=2,s.next=5,fetch("http://localhost:5000/signup",{method:"POST",credentials:"include",body:JSON.stringify({email:a,password:c}),headers:{"Content-Type":"application/json"}});case 5:return n=s.sent,s.next=8,n.json();case 8:if(r=s.sent,console.log(r),!r.message){s.next=15;break}return s.next=13,Object(Ae.c)(d(r.message));case 13:s.next=18;break;case 15:if(!r.success){s.next=18;break}return s.next=18,Object(Ae.c)((i=r.success,{type:u.SIGN_UP_SUCCESS,payload:i}));case 18:s.next=24;break;case 20:return s.prev=20,s.t0=s.catch(2),s.next=24,Object(Ae.c)(d(s.t0));case 24:case"end":return s.stop()}var i}),qe,null,[[2,20]])}var at=ae.a.mark(ct);function ct(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([Object(Ae.b)(Ie),Object(Ae.b)(We)]);case 2:case"end":return e.stop()}}),at)}var nt={extraScore:5,random:null,answered:!1,score:0,birdsArray:null,currentBirdsArray:null,activeBird:null,questionBird:null,error:null,colorsArray:[]},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.FETCH_INFO_SUCCESS:return Object(re.a)(Object(re.a)({},e),{},{birdsArray:t.payload});case P.FETCH_INFO_FAIL:return Object(re.a)(Object(re.a)({},e),{},{error:t.payload});case P.SET_CURRENT_BIRD_ARRAY:return Object(re.a)(Object(re.a)({},e),{},{currentBirdsArray:t.payload});case P.SET_RANDOM_VALUE:return Object(re.a)(Object(re.a)({},e),{},{random:t.payload});case P.SET_ACTIVE_BIRD:return Object(re.a)(Object(re.a)({},e),{},{activeBird:t.payload});case P.SET_QUESTION_BIRD:return Object(re.a)(Object(re.a)({},e),{},{questionBird:t.payload});case P.SET_ANSWERED:return Object(re.a)(Object(re.a)({},e),{},{answered:!e.answered});case P.INCREASE_SCORE:return Object(re.a)(Object(re.a)({},e),{},{score:e.score+t.payload});case P.DECREASE_EXPTRA_SCORE:return Object(re.a)(Object(re.a)({},e),{},{extraScore:e.extraScore>=0?e.extraScore-1:e.extraScore});case P.RESET_EXTRA_SCORE:return Object(re.a)(Object(re.a)({},e),{},{extraScore:5});case P.RESET_ACTIVE_BIRD:return Object(re.a)(Object(re.a)({},e),{},{activeBird:null});case P.FILL_COLORS_ARRAY:return Object(re.a)(Object(re.a)({},e),{},{colorsArray:t.payload});case P.CHANGE_LIST_COLOR:return Object(re.a)(Object(re.a)({},e),{},{colorsArray:e.colorsArray.map((function(e,a){return a===t.payload.index?e=t.payload.color:e}))});case P.RESET_GAME:return Object(re.a)(Object(re.a)({},e),{},{extraScore:5,score:0,answered:!1,activeBird:null,questionBird:null});default:return Object(re.a)({},e)}},st={currentUser:null,level:1,message:null},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SIGN_UP_SUCCESS:case u.SIGN_UP_FAIL:return Object(re.a)(Object(re.a)({},e),{},{message:t.payload});case u.LOGIN_SUCCESS:return Object(re.a)(Object(re.a)({},e),{},{currentUser:t.payload});case u.LOGIN_FAIL:return Object(re.a)(Object(re.a)({},e),{},{message:t.payload});case u.UPDATE_LEVEL_SUCCESS:return Object(re.a)(Object(re.a)({},e),{},{level:t.payload});case u.UPDATE_LEVEL_FAIL:return Object(re.a)(Object(re.a)({},e),{},{message:t.payload});case u.GET_LEVEL_SUCCESS:return Object(re.a)(Object(re.a)({},e),{},{level:t.payload});case u.GET_LEVEL_FAIL:case u.SET_MESSAGE:return Object(re.a)(Object(re.a)({},e),{},{message:t.payload});default:return Object(re.a)({},e)}},ot=Object(he.combineReducers)({birds:rt,user:it}),lt=a(73),ut=Object(ve.a)(),dt=[ut];var jt=Object(he.createStore)(ot,Object(lt.composeWithDevTools)(he.applyMiddleware.apply(void 0,dt)));ut.run(ct);var bt=jt;s.a.render(Object(F.jsx)(i.a,{store:bt,children:Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(Te,{})})}),document.getElementById("root")),xe()},88:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.8b1eea31.chunk.js.map