(this["webpackJsonpbird-quiz"]=this["webpackJsonpbird-quiz"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(16),s=a.n(n),i=(a(88),a(10)),o=(a(93),a(162)),u=a(165),l=(a(94),{SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAIL:"SIGN_UP_FAIL",LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAIL:"LOGIN_FAIL",LOGOUT:"LOGOUT",UPDATE_LEVEL_START:"UPDATE_LEVEL_START",UPDATE_LEVEL_SUCCESS:"UPDATE_LEVEL_SUCCESS",UPDATE_LEVEL_FAIL:"UPDATE_LEVEL_FAIL",GET_LEVEL_START:"GET_LEVEL_START",GET_LEVEL_SUCCESS:"GET_LEVEL_SUCCESS",GET_LEVEL_FAIL:"GET_LEVEL_FAIL",RESET_LEVEL_START:"RESET_LEVEL_START",RESET_LEVEL_SUCCESS:"RESET_LEVEL_SUCCESS",RESET_LEVEL_FAIL:"RESET_LEVEL_FAIL",SET_MESSAGE:"SET_MESSAGE"}),d=function(e){return{type:l.SIGN_UP_FAIL,payload:e}},j=function(e,t){return{type:l.LOGIN_START,payload:{email:e,password:t}}},b=function(e){return{type:l.LOGIN_SUCCESS,payload:e}},O=function(e){return{type:l.LOGIN_FAIL,payload:e}},E=function(e){return{type:l.UPDATE_LEVEL_SUCCESS,payload:e}},p=function(e){return{type:l.GET_LEVEL_START,payload:e}},S=function(e){return{type:l.GET_LEVEL_SUCCESS,payload:e}},_=function(e){return{type:l.RESET_LEVEL_SUCCESS,payload:e}},m=function(e){return{type:l.SET_MESSAGE,payload:e}},f=a(22),T=function(e){return e.birds},x=Object(f.a)([T],(function(e){return e.birdsArray})),h=Object(f.a)([T],(function(e){return e.currentBirdsArray})),v=Object(f.a)([T],(function(e){return e.score})),L=Object(f.a)([T],(function(e){return e.extraScore})),A=Object(f.a)([T],(function(e){return e.random})),R=Object(f.a)([T],(function(e){return e.answered})),y=Object(f.a)([T],(function(e){return e.activeBird})),C=Object(f.a)([T],(function(e){return e.questionBird})),N=Object(f.a)([T],(function(e){return e.colorsArray})),I=function(e){return e.user},g=Object(f.a)([I],(function(e){return e.currentUser})),w=Object(f.a)([I],(function(e){return e.message})),U=Object(f.a)([I],(function(e){return e.level})),F=a(3),k=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},btn:{margin:"10px",color:"white"}}})),G=function(){var e=k(),t=Object(i.b)(),a=Object(i.c)(g),r=Object(i.c)(U),c=Object(i.c)(v);return Object(F.jsxs)("div",{className:"header",children:[Object(F.jsxs)("div",{className:"header-info",children:[Object(F.jsxs)("div",{className:"header-logo",children:["Song",Object(F.jsx)("span",{className:"logo-part",children:"Bird"})]}),Object(F.jsxs)("div",{className:"header-userinfo",children:[Object(F.jsxs)("div",{className:"score",children:[a.email,": ",c]}),Object(F.jsx)(u.a,{variant:"outlined",className:e.btn,onClick:function(){localStorage.removeItem("user"),t(b(null))},children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(F.jsxs)("ul",{className:"header-list",children:[Object(F.jsx)("li",{className:"".concat(1===r?"currentLevel":"","  list"),children:"\u0420\u0430\u0437\u043c\u0438\u043d\u043a\u0430"}),Object(F.jsx)("li",{className:"".concat(2===r?"currentLevel":"","  list"),children:"\u0412\u043e\u0440\u043e\u0431\u044c\u0438\u043d\u044b\u0435"}),Object(F.jsx)("li",{className:"".concat(3===r?"currentLevel":"","  list"),children:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(4===r?"currentLevel":"","  list"),children:"\u041f\u0435\u0432\u0447\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(5===r?"currentLevel":"","  list"),children:"\u0425\u0438\u0449\u043d\u044b\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(F.jsx)("li",{className:"".concat(6===r?"currentLevel":"","  list"),children:"\u041c\u043e\u0440\u0441\u043a\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"})]})]})},V=(a(96),a(97),a.p+"static/media/true.878a455e.mp3"),D=a.p+"static/media/wrong.31792b99.mp3",P={FETCH_INFO_START:"FETCH_INFO_START",FETCH_INFO_SUCCESS:"FETCH_INFO_SUCCESS",FETCH_INFO_FAIL:"FETCH_INFO_FAIL",SET_CURRENT_BIRD_ARRAY:"SET_CURRENT_BIRD_ARRAY",SET_RANDOM_VALUE:"SET_RANDOM_VALUE",SET_ACTIVE_BIRD:"SET_ACTIVE_BIRD",SET_QUESTION_BIRD:"SET_QUESTION_BIRD",SET_ANSWERED:"SET_ANSWERED",INCREASE_SCORE:"INCREASE_SCORE",DECREASE_EXPTRA_SCORE:"DECREASE_EXPTRA_SCORE",RESET_EXTRA_SCORE:"RESET_EXTRA_SCORE",RESET_ACTIVE_BIRD:"RESET_ACTIVE_BIRD",RESET_GAME:"RESET_GAME",FILL_COLORS_ARRAY:"FILL_COLORS_ARRAY",CHANGE_LIST_COLOR:"CHANGE_LIST_COLOR"},B=function(e){return{type:P.SET_CURRENT_BIRD_ARRAY,payload:e}},q=function(e){return{type:P.SET_RANDOM_VALUE,payload:e}},H=function(){return{type:P.SET_ANSWERED}},M=function(e){return{type:P.FILL_COLORS_ARRAY,payload:e}},z=function(e,t){return{type:P.CHANGE_LIST_COLOR,payload:{color:e,index:t}}},W=function(){var e=Object(i.b)(),t=new Audio(V),a=new Audio(D),r=Object(i.c)(N),c=Object(i.c)(A),n=Object(i.c)(R),s=Object(i.c)(h),o=Object(i.c)(L),u=function(i,u){var l;e((l=s[u],{type:P.SET_ACTIVE_BIRD,payload:l})),u===c?!1===n&&(t.play(),e(z("green",u)),e({type:P.INCREASE_SCORE,payload:o}),e(H())):!1===n&&"red"!==r[u]&&(a.play(),e({type:P.DECREASE_EXPTRA_SCORE}),e(z("red",u)))};return Object(F.jsx)("div",{className:"bird-list-container",children:s?Object(F.jsx)("div",{children:Object(F.jsx)("ul",{className:"bird-list",children:s.map((function(e,t){return Object(F.jsxs)("li",{className:"list",onClick:function(e){return u(0,t)},children:[Object(F.jsx)("svg",{className:"options_block",width:"14",height:"14",children:Object(F.jsx)("circle",{cx:"7",cy:"7",r:"6",stroke:"black",strokeWidth:"1",fill:r[t]})}),Object(F.jsx)("span",{children:e.name})]},e._id)}))})}):Object(F.jsx)("div",{className:"bird-list-container loading-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})},J=(a(98),function(){var e=Object(i.c)(y);return Object(F.jsx)("div",{className:"container",children:e?Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"bird-info",children:[Object(F.jsx)("img",{className:"bird-img",alt:"bird",src:e.image}),Object(F.jsxs)("div",{className:"title-container",children:[Object(F.jsx)("div",{className:"title",children:e.name}),Object(F.jsx)("div",{className:"engName",children:e.species}),Object(F.jsx)("div",{className:"sub-title",children:e.description})]})]}),Object(F.jsx)("audio",{controls:!0,className:"bird-audio",src:e.audio})]}):Object(F.jsx)("div",{className:"bird-info",children:"\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0439\u0442\u0435 \u0437\u0432\u0443\u043a \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442."})})}),X=function(){return Object(F.jsxs)("div",{className:"main",children:[Object(F.jsx)(W,{}),Object(F.jsx)(J,{})]})},Y=(a(99),function(){var e=Object(i.b)(),t=Object(i.c)(h),a=Object(i.c)(A),c=Object(i.c)(C),n=Object(i.c)(R),s=Object(r.useRef)(null);return!0===n&&s.current.pause(),Object(r.useEffect)((function(){var r;t&&e((r=t[a],{type:P.SET_QUESTION_BIRD,payload:r}))}),[a]),Object(F.jsxs)("div",{className:"question",children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{className:"question-image",alt:"unknown-bird",src:n?c.image:"https://image.freepik.com/free-vector/pixel-art-cartoon-bird-icon-set-8bit-autumn_41992-931.jpg"})}),Object(F.jsxs)("div",{className:"question-data",children:[Object(F.jsx)("div",{className:"name",children:n?c.name:"******"}),c?Object(F.jsx)("audio",{className:"question-audio",controls:!0,src:c.audio,ref:s}):Object(F.jsx)("div",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})]})}),Q=(a(100),function(e){return Math.floor(Math.random()*e)}),Z=function(e,t){return t.slice(6*(e-1),6*e)},$=function(e){for(var t=[],a=0;a<e.length;a++)t.push("white");return t},K=function(){var e=Object(i.b)(),t=Object(i.c)(g),a=Object(i.c)(R),r=Object(i.c)(U),c=Object(i.c)(x),n=function(){if(!0===a){e(H()),e({type:P.RESET_ACTIVE_BIRD}),e({type:P.RESET_EXTRA_SCORE}),e((o={email:t.email},{type:l.UPDATE_LEVEL_START,payload:o}));var n=Z(r+1,c);e(B(n));var s=Q(n.length);e(q(s));var i=$(n);e(M(i)),e(m(null)),localStorage.setItem("user",JSON.stringify(t))}var o};return Object(F.jsx)("div",{children:Object(F.jsx)("button",{className:a?"custom-button":"blockedBtn",onClick:function(){n()},children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"})})},ee=(a(101),function(){var e=Object(i.b)(),t=Object(i.c)(v),a=Object(i.c)(g),r=Object(i.c)(x),c=function(){e({type:P.RESET_GAME});var t=Z(1,r);e(B(t));var c=$(t);e(M(c));var n,s=Q(t.length);e(q(s)),e((n=a.email,{type:l.RESET_LEVEL_START,payload:n}))};return Object(F.jsxs)("div",{className:"endgame-container",children:[Object(F.jsx)("div",{className:"endgame-title",children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c"}),Object(F.jsxs)("div",{className:"endgame-subtitle",children:["\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u041e\u0431\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",t," \u0438\u0437 30 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0431\u0430\u043b\u043b\u043e\u0432."]}),30===t?Object(F.jsx)("div",{className:"endgame-subtitle",children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u0438\u0433\u0440\u0443."}):Object(F.jsx)("button",{className:"endgame-btn",onClick:function(){return c()},children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437!"})]})}),te=a(11),ae=a.n(te),re=a(57),ce=a(52),ne=a(6),se=a(75),ie=a(175),oe=a(169),ue=a(173),le=a(172),de=a(72),je=a.n(de),be=a(170),Oe=a(74),Ee=a(168),pe=a(167),Se=a(174),_e=Object(o.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#64b5f6"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),me=Object(Oe.a)({palette:{primary:{main:"#64b5f6"},secondary:{main:"#008cff"}}});function fe(){var e=Object(i.b)(),t=_e(),a=Object(i.c)(w),c=(Object(i.c)(g),Object(r.useState)({email:"",password:""})),n=Object(se.a)(c,2),s=n[0],o=n[1],d=function(e){e.preventDefault(),o(Object(ne.a)(Object(ne.a)({},s),{},Object(ce.a)({},e.target.name,e.target.value)))},b=function(){var t=Object(re.a)(ae.a.mark((function t(a){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e((r=s.email,c=s.password,{type:l.SIGN_UP_START,payload:{email:r,password:c}})),e(m(null));case 3:case"end":return t.stop()}var r,c}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(re.a)(ae.a.mark((function t(a){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),r=s.email,!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(r)?(e(j(s.email,s.password)),e(p(s.email)),e(m(null))):e(m("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"));case 3:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsx)(pe.a,{theme:me,children:Object(F.jsxs)(Ee.a,{component:"main",maxWidth:"xs",children:[Object(F.jsx)(oe.a,{}),Object(F.jsxs)("div",{className:t.paper,children:[Object(F.jsx)(ie.a,{className:t.avatar,children:Object(F.jsx)(je.a,{})}),Object(F.jsx)(be.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(F.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(F.jsx)(ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:d}),Object(F.jsx)(ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:d}),a?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d!"===a?Object(F.jsx)(Se.a,{severity:"success",children:a}):Object(F.jsx)(Se.a,{severity:"error",children:a}):null,Object(F.jsxs)(le.a,{container:!0,justify:"space-between",children:[Object(F.jsx)(le.a,{item:!0,children:Object(F.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:O,children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(F.jsx)(le.a,{item:!0,children:Object(F.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:b,children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})]})]})]})})}var Te=function(){var e=Object(i.b)(),t=Object(i.c)(g),a=Object(i.c)(U),c=Object(i.c)(x);return Object(r.useEffect)((function(){e({type:P.FETCH_INFO_START})}),[]),Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));e(b(t))}),[]),Object(r.useEffect)((function(){t&&e(p(t.email))}),[t]),Object(r.useEffect)((function(){if(c){var t=Z(a,c),r=Q(t.length),n=$(t);e(M(n)),e(B(t)),e(q(r))}}),[c]),Object(F.jsx)("div",{className:"App",children:t?Object(F.jsxs)("div",{children:[Object(F.jsx)(G,{}),a>6?Object(F.jsx)(ee,{}):Object(F.jsxs)("div",{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(X,{}),Object(F.jsx)(K,{})]})]}):Object(F.jsx)("div",{children:Object(F.jsx)(fe,{})})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))},he=a(25),ve=(a(107),a(76)),Le=a(13),Ae=a(55),Re=a.n(Ae),ye=ae.a.mark(Ie),Ce=ae.a.mark(ge),Ne=ae.a.mark(we);function Ie(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Object(Le.b)(ge)]);case 2:case"end":return e.stop()}}),ye)}function ge(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(P.FETCH_INFO_START,we);case 2:case"end":return e.stop()}}),Ce)}function we(){var e;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Re.a.get("https://bird-quiz-server.herokuapp.com/getdata");case 3:return e=t.sent,t.next=6,Object(Le.c)((r=e.data,{type:P.FETCH_INFO_SUCCESS,payload:r}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Le.c)((a=t.t0,{type:P.FETCH_INFO_FAIL,payload:a}));case 12:case"end":return t.stop()}var a,r}),Ne,null,[[0,8]])}var Ue=ae.a.mark(ze),Fe=ae.a.mark(We),ke=ae.a.mark(Je),Ge=ae.a.mark(Xe),Ve=ae.a.mark(Ye),De=ae.a.mark(Qe),Pe=ae.a.mark(Ze),Be=ae.a.mark($e),qe=ae.a.mark(Ke),He=ae.a.mark(et),Me=ae.a.mark(tt);function ze(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Object(Le.b)(et),Object(Le.b)($e),Object(Le.b)(Qe),Object(Le.b)(Xe),Object(Le.b)(We)]);case 2:case"end":return e.stop()}}),Ue)}function We(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(l.RESET_LEVEL_START,Je);case 2:case"end":return e.stop()}}),Fe)}function Je(e){var t,a,r,c;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,a=t,n.prev=2,n.next=5,fetch("https://bird-quiz-server.herokuapp.com/resetLevel",{method:"POST",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 5:return r=n.sent,n.next=8,r.json();case 8:return c=n.sent,n.next=11,Object(Le.c)(_(c));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(2),n.next=17,Object(Le.c)((s=n.t0,{type:l.RESET_LEVEL_FAIL,payload:s}));case 17:case"end":return n.stop()}var s}),ke,null,[[2,13]])}function Xe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(l.GET_LEVEL_START,Ye);case 2:case"end":return e.stop()}}),Ge)}function Ye(e){var t,a,r,c;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,a=t,n.prev=2,n.next=5,fetch("https://bird-quiz-server.herokuapp.com/getLevel",{method:"POST",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 5:return r=n.sent,n.next=8,r.json();case 8:return c=n.sent,n.next=11,Object(Le.c)(S(c));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(2),n.next=17,Object(Le.c)((s=n.t0,{type:l.GET_LEVEL_FAIL,payload:s}));case 17:case"end":return n.stop()}var s}),Ve,null,[[2,13]])}function Qe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(l.UPDATE_LEVEL_START,Ze);case 2:case"end":return e.stop()}}),De)}function Ze(e){var t,a,r,c;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,a=t.email,n.prev=2,n.next=5,fetch("https://bird-quiz-server.herokuapp.com/updateLevel",{method:"PATCH",credentials:"include",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json"}});case 5:return r=n.sent,n.next=8,r.json();case 8:return c=n.sent,n.next=11,Object(Le.c)(E(c));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(2),n.next=17,Object(Le.c)((s=n.t0,{type:l.UPDATE_LEVEL_FAIL,payload:s}));case 17:case"end":return n.stop()}var s}),Pe,null,[[2,13]])}function $e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(l.LOGIN_START,Ke);case 2:case"end":return e.stop()}}),Be)}function Ke(e){var t,a,r,c,n;return ae.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.email,r=t.password,s.prev=2,s.next=5,fetch("https://bird-quiz-server.herokuapp.com/login",{method:"POST",credentials:"include",body:JSON.stringify({email:a,password:r}),headers:{"Content-Type":"application/json"}});case 5:return c=s.sent,s.next=8,c.json();case 8:if(!(n=s.sent).message){s.next=14;break}return s.next=12,Object(Le.c)(O(n.message));case 12:s.next=16;break;case 14:return s.next=16,Object(Le.c)(b(n));case 16:localStorage.setItem("user",JSON.stringify(n)),s.next=23;break;case 19:return s.prev=19,s.t0=s.catch(2),s.next=23,Object(Le.c)(O(s.t0));case 23:case"end":return s.stop()}}),qe,null,[[2,19]])}function et(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.d)(l.SIGN_UP_START,tt);case 2:case"end":return e.stop()}}),He)}function tt(e){var t,a,r,c,n;return ae.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.email,r=t.password,s.prev=2,s.next=5,fetch("https://bird-quiz-server.herokuapp.com/signup",{method:"POST",credentials:"include",body:JSON.stringify({email:a,password:r}),headers:{"Content-Type":"application/json"}});case 5:return c=s.sent,s.next=8,c.json();case 8:if(n=s.sent,console.log(n),!n.message){s.next=15;break}return s.next=13,Object(Le.c)(d(n.message));case 13:s.next=18;break;case 15:if(!n.success){s.next=18;break}return s.next=18,Object(Le.c)((i=n.success,{type:l.SIGN_UP_SUCCESS,payload:i}));case 18:s.next=24;break;case 20:return s.prev=20,s.t0=s.catch(2),s.next=24,Object(Le.c)(d(s.t0));case 24:case"end":return s.stop()}var i}),Me,null,[[2,20]])}var at=ae.a.mark(rt);function rt(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Object(Le.b)(Ie),Object(Le.b)(ze)]);case 2:case"end":return e.stop()}}),at)}var ct={extraScore:5,random:null,answered:!1,score:0,birdsArray:null,currentBirdsArray:null,activeBird:null,questionBird:null,error:null,colorsArray:[]},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.FETCH_INFO_SUCCESS:return Object(ne.a)(Object(ne.a)({},e),{},{birdsArray:t.payload});case P.FETCH_INFO_FAIL:return Object(ne.a)(Object(ne.a)({},e),{},{error:t.payload});case P.SET_CURRENT_BIRD_ARRAY:return Object(ne.a)(Object(ne.a)({},e),{},{currentBirdsArray:t.payload});case P.SET_RANDOM_VALUE:return Object(ne.a)(Object(ne.a)({},e),{},{random:t.payload});case P.SET_ACTIVE_BIRD:return Object(ne.a)(Object(ne.a)({},e),{},{activeBird:t.payload});case P.SET_QUESTION_BIRD:return Object(ne.a)(Object(ne.a)({},e),{},{questionBird:t.payload});case P.SET_ANSWERED:return Object(ne.a)(Object(ne.a)({},e),{},{answered:!e.answered});case P.INCREASE_SCORE:return Object(ne.a)(Object(ne.a)({},e),{},{score:e.score+t.payload});case P.DECREASE_EXPTRA_SCORE:return Object(ne.a)(Object(ne.a)({},e),{},{extraScore:e.extraScore>=0?e.extraScore-1:e.extraScore});case P.RESET_EXTRA_SCORE:return Object(ne.a)(Object(ne.a)({},e),{},{extraScore:5});case P.RESET_ACTIVE_BIRD:return Object(ne.a)(Object(ne.a)({},e),{},{activeBird:null});case P.FILL_COLORS_ARRAY:return Object(ne.a)(Object(ne.a)({},e),{},{colorsArray:t.payload});case P.CHANGE_LIST_COLOR:return Object(ne.a)(Object(ne.a)({},e),{},{colorsArray:e.colorsArray.map((function(e,a){return a===t.payload.index?e=t.payload.color:e}))});case P.RESET_GAME:return Object(ne.a)(Object(ne.a)({},e),{},{extraScore:5,score:0,answered:!1,activeBird:null,questionBird:null});default:return Object(ne.a)({},e)}},st={currentUser:null,level:1,message:null},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.SIGN_UP_SUCCESS:case l.SIGN_UP_FAIL:return Object(ne.a)(Object(ne.a)({},e),{},{message:t.payload});case l.LOGIN_SUCCESS:return Object(ne.a)(Object(ne.a)({},e),{},{currentUser:t.payload});case l.LOGIN_FAIL:return Object(ne.a)(Object(ne.a)({},e),{},{message:t.payload});case l.UPDATE_LEVEL_SUCCESS:return Object(ne.a)(Object(ne.a)({},e),{},{level:t.payload});case l.UPDATE_LEVEL_FAIL:return Object(ne.a)(Object(ne.a)({},e),{},{message:t.payload});case l.GET_LEVEL_SUCCESS:return Object(ne.a)(Object(ne.a)({},e),{},{level:t.payload});case l.GET_LEVEL_FAIL:case l.SET_MESSAGE:return Object(ne.a)(Object(ne.a)({},e),{},{message:t.payload});case l.RESET_LEVEL_SUCCESS:return Object(ne.a)(Object(ne.a)({},e),{},{level:t.payload});case l.RESET_LEVEL_FAIL:return Object(ne.a)(Object(ne.a)({},e),{},{messgae:t.payload});default:return Object(ne.a)({},e)}},ot=Object(he.combineReducers)({birds:nt,user:it}),ut=a(73),lt=Object(ve.a)(),dt=[lt];var jt=Object(he.createStore)(ot,Object(ut.composeWithDevTools)(he.applyMiddleware.apply(void 0,dt)));lt.run(rt);var bt=jt;s.a.render(Object(F.jsx)(i.a,{store:bt,children:Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(Te,{})})}),document.getElementById("root")),xe()},88:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.fe7aa07b.chunk.js.map