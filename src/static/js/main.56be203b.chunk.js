(this["webpackJsonpendpoint-client"]=this["webpackJsonpendpoint-client"]||[]).push([[0],{219:function(e,t,a){e.exports=a(417)},224:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/bi_polar.e06ab775.png"},276:function(e,t,a){},289:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),o=a.n(r),s=(a(224),a(12)),c=a(13),i=a(14),m=a(15),u=a(180),d=a(11),p=a(427),h=a(426),g=a(29),E=a(432),f=a(431),b=a(25),y=a.n(b),v=a(9),w=a.n(v),k=a(21),S=a(30),N=a.n(S),O="http://localhost:8000/api",C="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZGZuIiwibmFtZSI6ImNsb3VkREZOIEVuZHBvaW50IiwiaWF0IjoxNTE2MjM5MDIyfQ.u7K0eXq9XhDkvW-SgC-neczEk6u2sOERJJZ59ygSpxw",x=function(){var e=Object(k.a)(w.a.mark((function e(t,a){var n,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=null,null,l="".concat(O,"/users/login"),e.next=6,N.a.post(l,{email:t,password:a},{headers:{Accept:"application/json","Content-type":"application/json","X-Key":C}});case 6:return n=e.sent,e.abrupt("return",n.data);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",loading:!1},e._login=function(t){t.preventDefault(),e.setState({loading:!0}),x(e.state.email,e.state.password).then((function(t,a){a||t.err?console.log(a):(t.data?(p.a.success({message:"Login Successful",placement:"bottomRight"}),localStorage.setItem("user",JSON.stringify(t.data)),e.props.history.push("/dashboard/home")):p.a.error({message:"Invalid User Credentials",placement:"bottomRight"}),e.setState({loading:!1}))}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"p-4",style:{height:"100vh",backgroundColor:"#f4f4f4"}},l.a.createElement("img",{src:y.a,alt:"Logo",style:{width:"7%"}}),l.a.createElement("div",{style:{margin:"auto",width:"500px",height:"400px",backgroundColor:"#ffffff",top:0,left:0,bottom:0,right:0,position:"absolute",boxShadow:"0 0 20px #c7c7c7",padding:"2%"}},l.a.createElement("h2",{style:{textAlign:"center",letterSpacing:"2px",marginTop:"5%"}},"LOGIN"),l.a.createElement("div",{className:"mt-5 pl-4 pr-4"},l.a.createElement("form",{onSubmit:this._login},l.a.createElement("div",{className:"p-3"},l.a.createElement(h.a,{size:"large",placeholder:"Email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})},prefix:l.a.createElement(E.a,null)})),l.a.createElement("div",{className:"p-3"},l.a.createElement(h.a.Password,{size:"large",placeholder:"Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})},prefix:l.a.createElement(f.a,null)})),l.a.createElement("div",{className:"p-3"},l.a.createElement(g.a,{type:"primary",htmlType:"submit",style:{letterSpacing:"1px"},loading:this.state.loading},"Login")))))))}}]),a}(n.Component),I=a(430),D=function(){var e=Object(k.a)(w.a.mark((function e(t,a,n){var l,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=null,null,r="".concat(O,"/users/register"),e.next=6,N.a.post(r,{name:t,email:a,password:n},{headers:{Accept:"application/json","Content-type":"application/json","X-Key":C}});case 6:return l=e.sent,e.abrupt("return",l.data);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),A=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",password:"",loading:!1},e._register=function(t){(t.preventDefault(),""!==e.state.name&&""!==e.state.email&&""!==e.state.password)&&(e.setState({loading:!0}),D(e.state.name,e.state.email,e.state.password).then((function(t,a){a?console.log(a):t.err?console.log(t.err):("User Registered"===t.data?p.a.success({message:"Registration Successful",placement:"bottomRight"}):p.a.error({message:"Register Unsuccessfull",placement:"bottomRight"}),e.setState({loading:!1,name:"",email:"",password:""}))})))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"p-4",style:{height:"100vh",backgroundColor:"#f4f4f4"}},l.a.createElement("img",{src:y.a,alt:"Logo",style:{width:"7%"}}),l.a.createElement("div",{style:{margin:"auto",width:"500px",height:"450px",backgroundColor:"#ffffff",top:0,left:0,bottom:0,right:0,position:"absolute",boxShadow:"0 0 20px #c7c7c7",padding:"2%"}},l.a.createElement("h2",{style:{textAlign:"center",letterSpacing:"2px",marginTop:"5%"}},"REGISTER"),l.a.createElement("div",{className:"mt-5 pl-4 pr-4"},l.a.createElement("form",{onSubmit:this._register},l.a.createElement("div",{className:"p-3"},l.a.createElement(h.a,{size:"large",placeholder:"Name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})},prefix:l.a.createElement(E.a,null)})),l.a.createElement("div",{className:"p-3"},l.a.createElement(h.a,{size:"large",placeholder:"Email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})},prefix:l.a.createElement(I.a,null)})),l.a.createElement("div",{className:"p-3"},l.a.createElement(h.a.Password,{size:"large",placeholder:"Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})},prefix:l.a.createElement(f.a,null)})),l.a.createElement("div",{className:"p-3"},l.a.createElement(g.a,{type:"primary",htmlType:"submit",style:{letterSpacing:"1px"},loading:this.state.loading},"Register")))))))}}]),a}(n.Component),T=a(115),B=a(64),M=a(420),R=a(429),J=a(428),_=(a(276),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).logout=function(){localStorage.clear(),window.history.go("/")},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement("nav",{bg:"light",expand:"lg",className:"p-2"},l.a.createElement("a",{href:"/dashboard/home"},l.a.createElement("img",{src:y.a,alt:"biPolar",style:{width:"4%"},className:"logo-white mb-2"})),l.a.createElement("ul",{className:""},l.a.createElement("li",null,l.a.createElement(g.a,{type:"link"},l.a.createElement(R.a,{style:{fontSize:"1.5rem",color:"#3b3b3b"}}))),l.a.createElement("li",null,l.a.createElement(g.a,{type:"link"},l.a.createElement(J.a,{style:{fontSize:"1.5rem",color:"#3b3b3b"}}))),l.a.createElement("li",null,l.a.createElement(T.a,{overlay:l.a.createElement(B.a,{style:{width:"150px",textAlign:"center"}},l.a.createElement(B.a.Item,{key:"0"},l.a.createElement("a",{href:"#0"},"Profile")),l.a.createElement(B.a.Item,{key:"1"},l.a.createElement("a",{href:"#0"},"Preferences")),l.a.createElement(B.a.Divider,null),l.a.createElement(B.a.Item,{key:"3",onClick:this.logout},l.a.createElement(g.a,{type:"primary",danger:!0,style:{width:"100%"}},"Logout"))),trigger:["click"],placement:"bottomLeft"},l.a.createElement(g.a,{type:"link",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},l.a.createElement(M.a,{size:"large",icon:l.a.createElement(E.a,null)})," "))))))}}]),a}(n.Component)),z=(a(289),a(421)),G=a(433),P=a(436),q=a(48),L=a(425),U=a(148),K=a(422),V=a(114),H=a(435),Z=a(434),W=a(45),X=a.n(W),F=function(){var e=Object(k.a)(w.a.mark((function e(t,a,n,l,r,o){var s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=null,null,c="".concat(O,"/slot/").concat(o),e.next=6,N.a.post(c,{userId:t,name:a,email:n,phone:l,date:r,title:o},{headers:{Accept:"application/json","Content-type":"application/json","X-Key":C,Authorization:"Bearer ".concat(localStorage.getItem("user"))}});case 6:return s=e.sent,e.abrupt("return",s.data);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n,l,r,o){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O+"/slot/".concat(t),{method:"get",headers:{"X-Key":C,Authorization:"Bearer ".concat(localStorage.getItem("user"))}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Q=a(424),$=z.a.Content,ee=L.a.Meta,te=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={userId:"",user:"",name:"",email:"",phone:"",slotModal:!1,date:"",title:"",header:"",description:"",time:""},e.range=function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a},e.disabledDate=function(e){return e&&e<X()().endOf("day")},e.onChange=function(t,a){console.log("Selected Time: ",t),console.log("Formatted Selected Time: ",a),e.setState({date:a})},e.onTimeChange=function(t,a){console.log(t,a),e.setState({time:a})},e.onOk=function(t){console.log("onOk: ",t),e.setState({date:t})},e.register=function(t){(t.preventDefault(),console.log("function called"),""!==e.state.name&&""!==e.state.email&&""!==e.state.phone&&""!==e.state.date&&""!==e.state.time)&&(console.log(e.state.date+" "+e.state.time),F(JSON.parse(localStorage.getItem("user")).user,e.state.name,e.state.email,e.state.phone,e.state.date+" "+e.state.time,e.state.header).then((function(t,a){a?(console.log(a),p.a.error({message:"Slot is Already Booked",placement:"bottomRight"})):t?(p.a.success({message:"Slot Booked Successfully",placement:"bottomRight"}),e.setState({slotModal:!1})):(p.a.error({message:"Slot Is'nt Available.",placement:"bottomRight"}),e.setState({slotModal:!1}))})))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("user"))?(console.log(JSON.parse(localStorage.getItem("user")).user),this.setState({userId:JSON.parse(localStorage.getItem("user")).user._id,name:JSON.parse(localStorage.getItem("user")).user.name,email:JSON.parse(localStorage.getItem("user")).user.email}),this.props.history.push("/dashboard/home/manage"),p.a.success({message:"Dashboard opened Successfully",placement:"bottomRight"})):(this.props.history.push("/dashboard/home/slot"),p.a.error({message:"User Dashboard couldn't be opened",placement:"bottomRight"}))}},{key:"render",value:function(){var e=this,t=l.a.createElement(Q.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",show:this.state.slotModal,onHide:function(){e.setState({slotModal:!1})},centered:!0},l.a.createElement(Q.a.Header,{closeButton:!0},l.a.createElement(Q.a.Title,null,this.state.title)),l.a.createElement(Q.a.Body,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"name"},"Name"),l.a.createElement(h.a,{type:"text",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value,errName:""===t.target.value})}}))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"phone"},"Phone"),l.a.createElement(h.a,{type:"text",placeholder:"Phone",value:this.state.phone,onChange:function(t){return e.setState({phone:t.target.value})}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email"),l.a.createElement(h.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}}))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"slot"},"Select the Date"),l.a.createElement(U.a,{format:"YYYY-MM-DD",disabledDate:this.disabledDate,onChange:this.onChange,onOk:this.onOk,style:{width:"100%"}}))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"time"},"Select the Time"),l.a.createElement(K.a,{use12Hours:!0,format:"h:mm a",onChange:this.onTimeChange}))))),l.a.createElement(Q.a.Footer,null,l.a.createElement(g.a,{type:"secondary",style:{marginRight:"10px"}},"Cancel"),l.a.createElement(g.a,{type:"primary",onClick:this.register},"Slot Booking"," ")));return l.a.createElement(z.a,null,t,l.a.createElement($,{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://i.pinimg.com/originals/7f/42/f8/7f42f844280b163931d9de15ba775e7c.jpg",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Tennis Court",header:"tennis",description:"A tennis court is the venue where the sport of tennis is played. It is a firm rectangular surface with a low net stretched across the centre"})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a,alt:"Logo"}),title:"Tennis Court",description:"A tennis court is the venue where the sport of tennis is played. It is a firm rectangular surface with a low net stretched across the centre"}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9TwF68V_tWebKTLqt6T3EOfmweKm-w19N0g&usqp=CAU",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Cycle tracks",header:"cycle",description:"A cycle track is an exclusive bike facility that combines the user experience of a separated path with the on-street infrastructure of a conventional bike lane"})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a}),title:"Cycle tracks",description:"A cycle track is an exclusive bike facility that combines the user experience of a separated path with the on-street infrastructure of a conventional bike lane"}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBUM2Osq-O5eZ4GLbdZ_F4gzCMoCw5v02f_Q&usqp=CAU",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Swimming Pool",header:"swimming",description:"A swimming pool is a tank or large basin that is filled with water and intended for recreational or competitive swimming or diving"})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a}),title:"Swimming Pool",description:"A swimming pool is a tank or large basin that is filled with water and intended for recreational or competitive swimming or diving"})))),l.a.createElement("div",{className:"row",style:{marginTop:25,marginBottom:75}},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://5.imimg.com/data5/JK/GP/MY-1515609/badminton-court-28-indoor-29-500x500.jpg",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Badminton Court",header:"badminton",description:"The court is rectangular and divided into halves by a net. Courts are usually marked for both singles and doubles play, although badminton rules permit a court to be marked for singles only."})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a}),title:"Badminton Court",description:"The court is rectangular and divided into halves by a net. Courts are usually marked for both singles and doubles play, although badminton rules permit a court to be marked for singles only."}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://www.skistar.com/globalassets/bilder-nya-skistar.com/experium/gym.jpg?maxwidth=924&quality=80",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Gym",header:"gym",description:"physical exercises and activities performed inside, often using equipment, especially when done as a subject at school. Gymnasium is a large room with equipment for exercising the body"})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a}),title:"Gym",description:"physical exercises and activities performed inside, often using equipment, especially when done as a subject at school. Gymnasium is a large room with equipment for exercising the body"}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(L.a,{style:{width:300},cover:l.a.createElement("img",{alt:"example",src:"https://www.iacworldwide.com/app/uploads/club_import/406-Le_Lido_Clubhouse_Cairo/Header/iac-le_lido_city_view_clubhouse-header_01-2000x1331.jpg",style:{width:"100%",height:"175px"}}),actions:[l.a.createElement(V.a,{title:"settings"},l.a.createElement(R.a,{key:"setting"})),l.a.createElement(V.a,{title:"Slot Booking"},l.a.createElement(H.a,{key:"slot",onClick:function(){e.setState({slotModal:!0,title:"Club House",header:"club",description:"A Clubhouse is a community organized to help people living with serious mental illness as they manage their illness and rejoin the worlds of employment, education, family,friends and residents."})}})),l.a.createElement(V.a,{title:"View"},l.a.createElement(Z.a,{key:"ellipsis"}))]},l.a.createElement(ee,{avatar:l.a.createElement(M.a,{src:y.a}),title:"Club House",description:"A Clubhouse is a community organized to help people living with serious mental illness as they manage their illness and rejoin the worlds of employment, education, family,friends and residents."}))))))}}]),a}(n.Component),ae=a(423),ne=z.a.Content,le=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={tennisData:[],cycleData:[],swimmingData:[],badmintonData:[],gymData:[],clubData:[]},e._getUserInfo=function(){Y("tennis").then((function(t,a){a?console.log(a):(console.log(t),e.setState({tennisData:t.users}))})),Y("cycle").then((function(t,a){a?console.log(a):(console.log(t),e.setState({cycleData:t.users}))})),Y("swimming").then((function(t,a){a?console.log(a):(console.log(t),e.setState({swimmingData:t.users}))})),Y("badminton").then((function(t,a){a?console.log(a):(console.log(t),e.setState({badmintonData:t.users}))})),Y("gym").then((function(t,a){a?console.log(a):(console.log(t),e.setState({gymData:t.users}))})),Y("club").then((function(t,a){a?console.log(a):(console.log(t),e.setState({clubData:t.users}))}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("user"))?(console.log(JSON.parse(localStorage.getItem("user")).user),this.props.history.push("/dashboard/home/slot"),p.a.success({message:"Dashboard opened Successfully",placement:"bottomRight"}),this._getUserInfo()):(this.props.history.push("/dashboard/home/manage"),p.a.error({message:"User Dashboard couldn't be opened",placement:"bottomRight"}))}},{key:"render",value:function(){var e=[{title:"Name",dataIndex:"name",key:"name"},{title:"Date",dataIndex:"slotDate",key:"slotDate"}];return l.a.createElement(z.a,null,l.a.createElement(ne,{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Tennis Court"},l.a.createElement(ae.a,{dataSource:this.state.tennisData,columns:e}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Cycle Tracks"},l.a.createElement(ae.a,{dataSource:this.state.cycleData,columns:e})))),l.a.createElement("div",{className:"row",style:{marginTop:10}},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Swimming Pool"},l.a.createElement(ae.a,{dataSource:this.state.swimmingData,columns:e}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Badminton Court"},l.a.createElement(ae.a,{dataSource:this.state.badmintonData,columns:e})))),l.a.createElement("div",{className:"row",style:{marginTop:10,marginBottom:20}},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Gym"},l.a.createElement(ae.a,{dataSource:this.state.gymData,columns:e}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(L.a,{title:"Club House"},l.a.createElement(ae.a,{dataSource:this.state.clubData,columns:e}))))))}}]),a}(n.Component),re=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/dashboard/home/manage",component:te}),l.a.createElement(d.b,{path:"/dashboard/home/slot",component:le}),l.a.createElement(d.a,{from:"/dashboard/home",to:"/dashboard/home/manage"}))}}]),a}(n.Component),oe=z.a.Sider,se=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.location;return l.a.createElement(z.a,{style:{height:"87vh"}},l.a.createElement(oe,{width:200,className:"sidebar"},l.a.createElement(B.a,{mode:"inline",defaultSelectedKeys:[e.pathname.split("/")[3]],defaultOpenKeys:[e.pathname.split("/")[2]],style:{height:"100%",borderRight:0}},l.a.createElement(B.a.Item,{key:"manage",icon:l.a.createElement(G.a,null)},l.a.createElement(q.b,{to:"/dashboard/home/manage"}),"Slot Booking"),l.a.createElement(B.a.Item,{key:"slot",icon:l.a.createElement(P.a,null)},l.a.createElement(q.b,{to:"/dashboard/home/slot"}),"Slot Managing"))),l.a.createElement(re,null))}}]),a}(n.Component),ce=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/dashboard/home",component:se}),l.a.createElement(d.a,{from:"/dashboard/home",to:"/dashboard/home/manage"}))}}]),a}(n.Component),ie=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.location;return l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"sticky-top"},l.a.createElement(_,null),l.a.createElement("nav",{className:"tab-bar"},l.a.createElement("a",{href:"/dashboard/home",id:"home",style:{width:200},className:e.pathname.includes("/dashboard/home")?"active":null},"Home"))),l.a.createElement(ce,null))}}]),a}(n.Component),me=function(e){var t=e.component,a=Object(u.a)(e,["component"]),n=JSON.parse(localStorage.getItem("user"));return l.a.createElement(d.b,Object.assign({},a,{render:function(e){return n&&n.token&&n?l.a.createElement(t,e):l.a.createElement(d.a,{to:"/"})}}))},ue=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",component:j}),l.a.createElement(d.b,{exact:!0,path:"/register",component:A}),l.a.createElement(me,{path:"/dashboard",component:ie}))}}]),a}(n.Component);a(414),a(415),a(416);var de=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(q.a,null,l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,1,2]]]);
//# sourceMappingURL=main.56be203b.chunk.js.map