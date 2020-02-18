(this["webpackJsonpreact-client"]=this["webpackJsonpreact-client"]||[]).push([[0],{41:function(e,t,a){e.exports=a(95)},46:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(37),l=a.n(r),o=(a(46),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),d=a(38),p=a(17),h=a(8),g=a(1),b=a.n(g),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"Username"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:9011/api/users/".concat(localStorage.getItem("userid")),{headers:{Authorization:"".concat(window.localStorage.getItem("token"))}}).then((function(t){e.setState({username:t.data.user.username})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.url;return s.a.createElement("header",{className:"bg-dark mb-4"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark"},s.a.createElement("a",{href:"/",className:"navbar-brand"},"PicPost"),s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"navbar-item pr-2"},s.a.createElement(h.b,{to:"".concat(e),className:"btn btn-dark"},"Home")),s.a.createElement("li",{className:"navbar-item pr-2"},s.a.createElement(h.b,{to:"".concat(e,"/post"),className:"btn btn-dark"},"Post")),s.a.createElement("li",{className:"navbar-item pr-2"},s.a.createElement(h.b,{to:"".concat(e,"/setting"),className:"btn btn-dark"},"Setting")),s.a.createElement("li",{className:"navbar-item pr-2"},s.a.createElement(h.b,{to:"".concat(e,"/profile"),className:"btn btn-dark"},this.state.username))))))}}]),t}(n.Component),v=a(13);var f=function(e){var t=e.status||"Hello world",a=e.imgURL||"https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return s.a.createElement("div",{className:"card",style:{margin:"10px"}},s.a.createElement("img",{className:"card-img-top",src:a,alt:"im"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text",style:{fontSize:"1.2em"}},t),s.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},s.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Like"),s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Dislike")),s.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Second group"},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Comment")))))},N=a(20),y=a.n(N),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={posts:[{image:"https://images.pexels.com/photos/556663/pexels-photo-556663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",status:"Hello World"}]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:9011/api/posts").then((function(t){e.setState({posts:Object(v.a)(t.data)})})).catch((function(e){return console.log(e.response.data)}))}},{key:"render",value:function(){var e=this.props.match.url;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{paddingBottom:"20px"}},s.a.createElement("ul",{className:"nav nav-tabs"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("button",{className:"nav-link active"},"Global Posts")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("button",{className:"nav-link"},"Following")))),s.a.createElement(y.a,{columns:{320:1,480:2,800:2,1366:3,1920:4}},this.state.posts.map((function(t,a){return s.a.createElement(h.b,{key:a,to:"".concat(e,"/").concat(t._id)},s.a.createElement(f,{imgURL:t.image,status:t.status}))})),s.a.createElement(f,null)))}}]),t}(n.Component);var S=function(e){return s.a.createElement("footer",{className:"footer-copyright text-center py-3 text-light bg-dark"},"\xa9 2020. All rights preserved. Jyo.Avyshek @ avy.jyo11")},j=a(11),O=a(9),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:this.props.name},this.props.label||this.props.placeholder),s.a.createElement("input",{type:this.props.type,className:"form-control",id:this.props.name,placeholder:this.props.placeholder,name:this.props.name,required:this.props.required,onChange:this.props.onChange,value:this.props.value}))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){t.preventDefault(),"file"===t.target.type?e.setState({data:Object(O.a)({},e.state.data,{file:URL.createObjectURL(t.target.files[0])})}):(e.setState({data:Object(O.a)({},e.state.data,Object(j.a)({},t.target.name,t.target.value))}),console.log(e.state.data))},e.handleSubmit=function(t){t.preventDefault();var a={status:e.state.data.status,image:e.state.data.image||e.state.data.file,user:localStorage.getItem("userid")};console.log(a),b.a.post("http://localhost:9011/api/posts",a,{headers:{Authorization:"".concat(window.localStorage.getItem("token"))}}).then((function(e){window.location.pathname="/"})).catch((function(e){return console.log(e.response.data)}))},e.state={data:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{style:{width:"70%",padding:"30px 0",margin:"0 auto"},onSubmit:this.handleSubmit},s.a.createElement(w,{name:"status",placeholder:"What's On Your Mind?",label:"Post Status",type:"text",onChange:this.handleChange,required:!0}),s.a.createElement(w,{name:"image",placeholder:"URL of picture post",label:"Post Pic URL",type:"text",onChange:this.handleChange,required:!0}),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"uploadPic"},"Or, Upload Pic"),s.a.createElement("input",{name:"image",type:"file",className:"form-control-file",id:"uploadPic",onChange:this.handleChange}),s.a.createElement("img",{src:this.state.data.file,alt:"Choose Img",style:{width:"100%"}})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"POST")))}}]),t}(n.Component),x=a(19),I=a.n(x),P=(a(92),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleDelete=function(t){var a=e.props.match.params;b.a.delete("http://localhost:9011/api/posts/".concat(a.postid),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){window.location.pathname="/home/profile"})).catch((function(e){return console.log(e)}))},e.handleEdit=function(t){t.preventDefault();var a=e.props.match.params,n=Object(O.a)({},e.state.edit);console.log("data",n),b.a.put("http://localhost:9011/api/posts/".concat(a.postid),n,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){window.location.pathname="/home/profile"})).catch((function(e){return console.log(e)}))},e.handleEditChange=function(t){e.setState({edit:Object(O.a)({},e.state.edit,Object(j.a)({},t.target.name,t.target.value))}),console.log(e.state.edit)},e.handleComment=function(t){t.preventDefault();var a=e.props.match.params,n={userid:localStorage.getItem("userid"),comment:e.state.myComment};b.a.post("http://localhost:9011/api/comments/".concat(a.postid),n,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){window.location.pathname="/home/".concat(a.postid)})).catch((function(e){return console.log(e.response)}))},e.state={image:"",status:"",comments:[],username:"",myComment:"",ownPost:!1,edit:{status:"",image:""}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n;return I.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=this.props.match.params,s.next=3,I.a.awrap(b.a.get("http://localhost:9011/api/posts/".concat(e.postid)));case 3:return t=s.sent,s.next=6,I.a.awrap(b.a.get("http://localhost:9011/api/users/".concat(t.data.user),{headers:{Authorization:"".concat(window.localStorage.getItem("token"))}}));case 6:return a=s.sent,s.next=9,I.a.awrap(b.a.get("http://localhost:9011/api/comments/".concat(e.postid),{headers:{Authorization:"".concat(window.localStorage.getItem("token"))}}));case 9:n=s.sent,this.setState({image:t.data.image,status:t.data.status,username:a.data.user.username,comments:Object(v.a)(n.data),ownPost:t.data.user===localStorage.getItem("userid"),edit:{image:t.data.image,status:t.data.status}});case 11:case"end":return s.stop()}}),null,this)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"frame"},s.a.createElement("img",{src:this.state.image,alt:"Club Card"}))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"row pl-2 pb-3"},s.a.createElement("strong",null,this.state.status),s.a.createElement("span",{className:"ml-2 pt-1 badge badge-secondary"},"by ",this.state.username)),s.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},s.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Like"),s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Dislike")),s.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Second group"},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Comment"))),s.a.createElement("hr",null),s.a.createElement("div",{className:"row"},s.a.createElement("strong",null,"Comments")),s.a.createElement("br",null),this.state.comments.map((function(e,t){return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{className:"row",key:t},s.a.createElement("div",{style:{margin:"0 20px"}},s.a.createElement("strong",null,e.username)),s.a.createElement("div",null,e.comment)),s.a.createElement("hr",null))})),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleComment},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Write Your Comment"),s.a.createElement("textarea",{name:"myComment",onChange:this.handleChange,className:"form-control",id:"exampleFormControlTextarea1",rows:"2"})),s.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Comment"))))),s.a.createElement("hr",null),!0===this.state.ownPost?s.a.createElement("div",{className:"row edit-delete-post mb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10"},s.a.createElement("form",{onSubmit:this.handleEdit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("div",{className:"input-group-text"},"Status")),s.a.createElement("input",{className:"form-control",placeholder:"Status",name:"status",onChange:this.handleEditChange,type:"text",value:this.state.edit.status||""}))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("div",{className:"input-group-text"},"Image URL")),s.a.createElement("input",{className:"form-control",placeholder:"Image URL",name:"image",onChange:this.handleEditChange,type:"text",value:this.state.edit.image||""}))),s.a.createElement("div",{className:"col"},s.a.createElement("button",{className:"btn btn-info mr-3",type:"submit"},"Edit Post"))))),s.a.createElement("div",{className:"col-2"},s.a.createElement("button",{className:"btn btn-danger",onClick:this.handleDelete},"Delete Post")))):null)}}]),t}(n.Component)),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState({data:Object(O.a)({},e.state.data,Object(j.a)({},t.target.name,t.target.value))})},e.onSubmit=function(t){t.preventDefault();var a=Object(O.a)({},e.state.data),n=Object(v.a)(e.state.updateClass);b.a.put("http://localhost:9011/api/users/".concat(localStorage.getItem("userid")),a,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){n.push("alert-success");var a=t.data.result;e.setState({data:{username:a.username,bio:a.bio,address:a.address,email:a.email},updateClass:n,updateSuccess:1}),setTimeout((function(){window.location.pathname="/home/setting"}),1e3)})).catch((function(t){n.push("alert-danger"),e.setState({updateClass:n,updateSuccess:0})}))},e.state={data:{username:"###",bio:"###",address:"###",email:"###",password:"###"},disabled:!1,defaultClass:["alert"],updateClass:["alert"],updateSuccess:-1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:9011/api/users/".concat(localStorage.getItem("userid")),{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){var a=t.data.user;e.setState(Object(O.a)({},e.state,{data:{username:a.username,bio:a.bio,address:a.address,email:a.email}})),console.log(e.state.data)})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){var e=this.state.data;return s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.onSubmit,style:{width:"60%",padding:"30px 0",margin:"0 auto"}},s.a.createElement(w,{name:"username",placeholder:"Username",type:"text",onChange:this.onChange,value:e.username||"",required:!0}),s.a.createElement(w,{name:"email",placeholder:"Email",type:"text",onChange:this.onChange,value:e.email||"",required:!0}),s.a.createElement(w,{name:"bio",placeholder:"Your Bio",type:"text",onChange:this.onChange,value:e.bio||"",required:!0}),s.a.createElement(w,{name:"address",placeholder:"Address",type:"text",onChange:this.onChange,value:e.address||"",required:!0}),s.a.createElement(w,{name:"password",placeholder:"New Password",type:"text",onChange:this.onChange,value:e.password||"",required:!0}),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Update Profile"),s.a.createElement("div",{style:{paddingTop:"20px"}},1===this.state.updateSuccess?s.a.createElement("div",{className:this.state.updateClass.join(" ")},s.a.createElement("strong",null,"Success!")," Update Successful."):s.a.createElement("div",null),0===this.state.updateSuccess?s.a.createElement("div",{className:this.state.updateClass.join(" ")},s.a.createElement("strong",null,"Failed!")," Update failed."):s.a.createElement("div",null))))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleLogout=function(e){localStorage.clear(),window.location.pathname="/"},e.state={userdata:{imgURL:"https://i.ya-webdesign.com/images/profile-avatar-png-4.png",username:"",bio:"",address:"",email:""},myPosts:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:9011/api/users/".concat(localStorage.getItem("userid")),{headers:{Authorization:"".concat(window.localStorage.getItem("token"))}}).then((function(t){var a=t.data.user;e.setState({userdata:Object(O.a)({},e.state.userdata,{username:a.username,bio:a.bio,address:a.address,email:a.email})})})).catch((function(e){return console.log(e.response.data)})),b.a.get("http://localhost:9011/api/posts/user/".concat(localStorage.getItem("userid"))).then((function(t){e.setState({myPosts:Object(v.a)(t.data)})})).catch((function(e){return console.log(e.response.data)}))}},{key:"render",value:function(){var e=this.state.userdata;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6",style:{textAlign:"center"}},s.a.createElement("img",{src:e.imgURL,alt:"USER_IMG",style:{width:"240px",borderRadius:"50%"}})),s.a.createElement("div",{className:"col-6"},s.a.createElement("span",null,s.a.createElement("strong",null,"username:")," \u2002 ",e.username),s.a.createElement("hr",null),s.a.createElement("span",null,s.a.createElement("strong",null,"email:")," \u2002 ",e.email),s.a.createElement("hr",null),s.a.createElement("span",null,s.a.createElement("strong",null,"bio:")," \u2002 ",e.bio),s.a.createElement("hr",null),s.a.createElement("span",null,s.a.createElement("strong",null,"address:")," \u2002 ",e.address),s.a.createElement("hr",null),s.a.createElement(h.b,{to:"setting",className:"btn btn-outline-info"},"Edit Profile Settings"),s.a.createElement("button",{className:"btn btn-outline-danger ml-3",onClick:this.handleLogout},"Logout")))),s.a.createElement("div",{className:"pb-3"},s.a.createElement("ul",{className:"nav nav-tabs"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("button",{className:"nav-link active"},"My Posts")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("button",{className:"nav-link"},"Liked Posts")))),s.a.createElement(y.a,{columns:{320:1,480:2,800:2,1366:3,1920:4}},this.state.myPosts.map((function(e,t){return s.a.createElement(h.b,{to:"".concat(e._id),key:t},s.a.createElement(f,{imgURL:e.image,status:e.status}))})),0===this.state.myPosts.length?s.a.createElement("div",{className:"pl-3"}," No Posts Yet... "):null))}}]),t}(n.Component);var A=function(e){var t=Object(p.g)(),a=t.path,n=t.url;return s.a.createElement("div",null,s.a.createElement(E,{url:n}),s.a.createElement("main",null,s.a.createElement("div",{className:"container"},s.a.createElement(p.d,null,s.a.createElement(p.b,{exact:!0,path:"".concat(a),component:C}),s.a.createElement(p.b,{exact:!0,path:"".concat(a,"/post"),component:k}),s.a.createElement(p.b,{exact:!0,path:"".concat(a,"/setting"),component:L}),s.a.createElement(p.b,{exact:!0,path:"".concat(a,"/profile"),component:U}),s.a.createElement(p.b,{exact:!0,path:"".concat(a,"/:postid"),component:P})))),s.a.createElement(S,null))},D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState({data:Object(O.a)({},e.state.data,Object(j.a)({},t.target.name,t.target.value))})},e.onSubmit=function(t){t.preventDefault();var a=Object(v.a)(e.state.loginClass);b.a.post("http://localhost:9011/api/auth/login",e.state.data).then((function(t){a.push("alert-success"),e.setState({loggedIn:!0,loginClass:a,loginMsg:"Login Successful!"}),window.localStorage.setItem("token",t.data.token),window.localStorage.setItem("userid",t.data.userid),window.location.pathname="/"})).catch((function(t){a.push("alert-danger"),e.setState({loggedIn:!0,loginClass:a,loginMsg:"Login Falied!"})}))},e.onReset=function(t){e.setState({loginMsg:"",loginClass:["alert"],loggedIn:!1})},e.state={data:{username:"",password:""},loggedIn:!1,loginClass:["alert"],loginMsg:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"form-container"},s.a.createElement("h3",{className:"mb-4"},"Login"),s.a.createElement("form",{onSubmit:this.onSubmit,method:"POST",className:"form-horizontal"},s.a.createElement(w,{name:"username",placeholder:"Username",type:"text",onChange:this.onChange,required:!0}),s.a.createElement(w,{name:"password",placeholder:"Password",type:"password",onChange:this.onChange,required:!0}),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),!0===this.state.loggedIn?s.a.createElement("div",{className:this.state.loginClass.join(" "),style:{marginTop:"20px"}},s.a.createElement("strong",null,this.state.loginMsg)):s.a.createElement("div",null),s.a.createElement("div",{style:{paddingTop:"10px"}},s.a.createElement(h.b,{to:"/register"},"Don't have an Account? Create Now."))))))}}]),t}(n.Component),R=(a(93),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){t.preventDefault();var a=Object(v.a)(e.state.registerClass);b.a.post("http://localhost:9011/api/auth/register",e.state.data).then((function(t){a.push("alert-success"),e.setState({registerClass:a,registerSuccess:1})})).catch((function(t){a.push("alert-danger"),e.setState({registerClass:a,registerSuccess:0})}))},e.onChange=function(t){e.setState({data:Object(O.a)({},e.state.data,Object(j.a)({},t.target.name,t.target.value))})},e.resetState=function(t){e.setState({registerClass:e.state.defaultClass,registerSuccess:-1})},e.state={data:{username:"",bio:"",address:"",email:"",password:""},disabled:!1,defaultClass:["alert"],registerClass:["alert"],registerSuccess:-1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"form-container"},s.a.createElement("h3",{className:"mb-4"},"Register"),s.a.createElement("form",{onSubmit:this.onSubmit,method:"POST",className:"form-horizontal"},s.a.createElement(w,{name:"username",placeholder:"Username",type:"text",onChange:this.onChange,required:!0}),s.a.createElement(w,{name:"email",placeholder:"Email",type:"text",onChange:this.onChange,required:!0}),s.a.createElement(w,{name:"bio",placeholder:"Your Bio",type:"text",onChange:this.onChange,required:!0}),s.a.createElement(w,{name:"address",placeholder:"Address",type:"text",onChange:this.onChange,required:!0}),s.a.createElement(w,{name:"password",placeholder:"Password",type:"password",onChange:this.onChange,required:!0}),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},s.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:this.state.disabled},"Register")),s.a.createElement("div",{style:{paddingTop:"20px"}},1===this.state.registerSuccess?s.a.createElement("div",{className:this.state.registerClass.join(" ")},s.a.createElement("strong",null,"Success!")," Registration Successful."):s.a.createElement("div",null),0===this.state.registerSuccess?s.a.createElement("div",{className:this.state.registerClass.join(" ")},s.a.createElement("strong",null,"Failed!")," Registration failed."):s.a.createElement("div",null)),s.a.createElement("div",{style:{paddingTop:"10px"}},s.a.createElement(h.b,{to:"/login",onClick:this.resetState},"Already have an Account? Login Now."))))))}}]),t}(n.Component)),q=(a(94),function(e){var t=e.path,a=e.component,n=e.isLoggedIn,r=Object(d.a)(e,["path","component","isLoggedIn"]);return s.a.createElement(p.b,{path:t,render:function(e){return!0===n?s.a.createElement(a,Object.assign({},r,e)):s.a.createElement(p.a,{to:"/login"})}})}),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={isLoggedIn:!!localStorage.getItem("token")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(h.a,null,s.a.createElement("div",null,s.a.createElement(q,{path:"/home",isLoggedIn:this.state.isLoggedIn,component:A}),s.a.createElement(p.b,{exact:!0,path:"/",render:function(){return e.state.isLoggedIn?s.a.createElement(p.a,{to:"/home"}):s.a.createElement(p.a,{to:"/login"})}}),s.a.createElement(p.b,{path:"/login"},s.a.createElement(D,null)),s.a.createElement(p.b,{path:"/register"},s.a.createElement(R,null))))}}]),t}(s.a.Component);l.a.render(s.a.createElement(F,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a42b74da.chunk.js.map