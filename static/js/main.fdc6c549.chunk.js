(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a.p+"static/media/card-img.807999d2.jpeg"},215:function(e,t,a){e.exports=a(436)},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){},410:function(e,t,a){},412:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){e.exports=a.p+"static/media/close.5bb294ba.svg"},436:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(45),c=a.n(r),i=a(16),o=a(9),s=(a(224),a(214)),d=a(20),u=a(59),m=a(90),E=a.n(m);a(400),a(403),a(437);E.a.initializeApp({apiKey:"AIzaSyBdWbAEKZrAjfIbv6j1ORIVTSZ7ohiZ76c",authDomain:"dashboard-cc429.firebaseapp.com",databaseURL:"https://dashboard-cc429.firebaseio.com",projectId:"dashboard-cc429",storageBucket:"dashboard-cc429.appspot.com",messagingSenderId:"977524609819",appId:"1:977524609819:web:c8796ec3778a37263f39be"}),E.a.firestore().settings({timestampsInSnapshots:!0});var g=E.a,p=(a(405),a(438)),f=(a(406),a(407),a(8)),b=a(11),h=(a(408),Object(o.b)(function(e){return{authError:e.authReducer.authError}},function(e){return{loginBackClicked:function(){return e({type:"LOGIN_BACK_CLICKED"})},loginClicked:function(t){return e((a=t,function(e,t,n){var l=n.getFirebase;n.getFirestore,l().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a},isAdmin:function(){return e({type:"ADMIN"})}}})(function(e){var t={value:"",valid:!1},a=Object(n.useState)(t),r=Object(f.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(t),s=Object(f.a)(o,2),d=s[0],u=s[1],m=Object(n.useState)(!1),E=Object(f.a)(m,2),g=E[0],b=E[1],h=function(){return!(!c.valid||!d.valid)},v=function(){return"admin@admin.com"===c.value&&"adminadmin"===d.value};h()&&console.log(v());var O={borderBottom:c.valid||!0!==g?"1px solid grey":"2px solid red"},C={borderBottom:d.valid||!0!==g?"1px solid grey":"2px solid red"};return console.log("AUTHERROR",e.authError),l.a.createElement("div",{className:"auth-container"},l.a.createElement("div",{className:"login-main-div"},l.a.createElement("h2",{className:"login-title"},"Login"),l.a.createElement("div",{style:{float:"left",color:"red"}},e.authError),l.a.createElement("input",{style:O,onChange:function(e){var t=e.target.value;b(!1),""!==t&&t.includes("@")&&(t.includes(".com")||t.includes(".co")||t.includes(".in"))?i({value:t,valid:!0}):i({value:t,valid:!1})},className:"inputfield username-input",type:"email",placeholder:"Email"}),l.a.createElement("input",{style:C,onChange:function(e){b(!1);var t=e.target.value;u(""!==t?{value:t,valid:!0}:{value:t,valid:!1})},className:"inputfield password-input",type:"password",placeholder:"Password"}),l.a.createElement("div",{className:"button-div"},l.a.createElement("button",{onClick:e.loginBackClicked,className:"input-button-login back-button"},"Back"),l.a.createElement("button",{onClick:function(){b(!0),h()&&e.loginClicked({email:c.value,password:d.value}),v()&&e.isAdmin()},className:"input-button-login login-button"},h()&&g&&null===e.authError?l.a.createElement(p.a,{size:"sm",color:"light"}):l.a.createElement("p",{style:{padding:"0",margin:"0"}},"Login")))))})),v=(a(409),Object(o.b)(null,function(e){return{signupBackClicked:function(){return e({type:"SIGNUP_BACK_CLICKED"})},signinFirebaseDispatch:function(t){return e(function(e){return function(t,a,n){var l=n.getFirebase,r=n.getFirestore,c=l(),i=r();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS "})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(function(e){var t={value:"",valid:!1},a=Object(n.useState)(t),r=Object(f.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(t),s=Object(f.a)(o,2),d=s[0],u=s[1],m=Object(n.useState)(t),E=Object(f.a)(m,2),g=E[0],b=E[1],h=Object(n.useState)(t),v=Object(f.a)(h,2),O=v[0],C=v[1],N=Object(n.useState)(t),y=Object(f.a)(N,2),D=y[0],j=y[1],S=Object(n.useState)(!1),P=Object(f.a)(S,2),w=P[0],L=P[1],A=function(){return!!(c.valid&&d.valid&&g.valid&&O.valid&&D.valid)},k={borderBottom:!c.valid&&w?"2px solid red":"1px solid grey"},I={borderBottom:!d.valid&&w?"2px solid red":"1px solid grey"},_={borderBottom:!g.valid&&w?"2px solid red":"1px solid grey"},R={borderBottom:!O.valid&&w?"2px solid red":"1px solid grey"},T={borderBottom:!D.valid&&w?"2px solid red":"1px solid grey"};return l.a.createElement("div",{className:"auth-container"},l.a.createElement("div",{className:"signup-main-div"},l.a.createElement("h2",{className:"signup-title"},"Signup"),l.a.createElement("input",{style:R,onChange:function(e){L(!1);var t=e.target.value;C(""!==t?{value:t,valid:!0}:{value:t,valid:!1})},className:"inputfield firstname-input",type:"text",placeholder:"Firstname"}),l.a.createElement("input",{style:T,onChange:function(e){L(!1);var t=e.target.value;j(""!==t?{value:t,valid:!0}:{value:t,valid:!1})},className:"inputfield lastname-input",type:"text",placeholder:"Lastname"}),l.a.createElement("input",{style:k,onChange:function(e){var t=e.target.value;L(!1),""!==t&&t.includes("@")&&(t.includes(".com")||t.includes(".co")||t.includes(".in"))?i({value:t,valid:!0}):i({value:t,valid:!1})},className:"inputfield username-input",type:"email",required:!0,placeholder:"Email"}),l.a.createElement("input",{style:I,onChange:function(e){L(!1);var t=e.target.value;t.length>5?u({value:t,valid:!0}):u({value:t,valid:!1})},className:"inputfield password-input",type:"password",placeholder:"Password"}),l.a.createElement("input",{style:_,onChange:function(e){L(!1);var t=d.value,a=e.target.value;t===a&&d.valid?b({value:a,valid:!0}):b({value:a,valid:!1})},className:"inputfield password-input",type:"password",placeholder:"Confirm Password"}),l.a.createElement("div",{className:"button-div"},l.a.createElement("button",{onClick:e.signupBackClicked,className:"input-button-signup back-button"},"Back"),l.a.createElement("button",{onClick:function(){L(!0),A()&&e.signinFirebaseDispatch({email:c.value,password:g.value,firstname:O.value,lastname:D.value})},className:"input-button-signup signup-button"},A()&&w?l.a.createElement(p.a,{size:"sm",color:"light"}):l.a.createElement("p",{style:{padding:"0",margin:"0"}},"Signin")))))})),O=(a(410),Object(o.b)(null,function(e){return{loginClicked:function(){return e({type:"BANNER_LOGIN_CLICKED"})},signupClicked:function(){return e({type:"BANNER_SIGNUP_CLICKED"})}}})(function(e){return l.a.createElement("div",{className:"banner-main-div"},l.a.createElement("p",{className:"welcome"},"Welcome to"),l.a.createElement("h1",{className:"company-name"},"FistBump Digital"),l.a.createElement("p",{className:"slogan"},"In here, It's Possible!"),l.a.createElement("div",{className:"banner-button-div"},l.a.createElement("button",{onClick:e.loginClicked,className:"buttons"},"Login"),l.a.createElement("button",{onClick:e.signupClicked,className:"buttons"},"Signup")))})),C=a(46),N=a.n(C),y=Object(o.b)(function(e){return{isBannerPageOpen:e.ui.isBannerPageOpen,isLoginPageOpen:e.ui.isLoginPageOpen,isSignupPageOpen:e.ui.isSignupPageOpen}})(function(e){return l.a.createElement("div",{className:"authpage-main-div"},e.isBannerPageOpen?l.a.createElement(O,null):null,e.isLoginPageOpen?l.a.createElement(N.a,{easing:"easeOutElastic",duration:700,scale:[0,1]},l.a.createElement(h,null)):null,e.isSignupPageOpen?l.a.createElement(N.a,{easing:"easeOutElastic",duration:700,scale:[0,1]},l.a.createElement(v,null)):null)}),D=(a(412),a(439)),j=a(440),S=a(441),P=a(442),w=a(443),L=Object(o.b)(null,function(e){return{editPage:function(){return e({type:"CLICKED_EDIT_PAGE"})},detailsPage:function(){return e({type:"CLICKED_DETAILS_PAGE"})},logoutClicked:function(){return e(function(e,t,a){var n=a.getFirebase;a.getFirestore,n().auth().signOut().then(function(){e({type:"LOGOUT"})})})}}})(function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement(D.a,{className:"navbar",color:"dark",dark:!0,expand:"md"},l.a.createElement(j.a,null,e.title),l.a.createElement(S.a,{onClick:function(){return c(!r)}}),l.a.createElement(P.a,{isOpen:r,navbar:!0},l.a.createElement(w.a,{navbar:!0},l.a.createElement("button",{onClick:function(){window.location.reload(!1),e.logoutClicked()},className:"mr-auto nav-button logout"},"Logout")))))}),A=a(457),k=a(449),I=a(450),_=a(28),R=(a(428),a(429),a(430),a(444)),T=a(445),F=a(446),U=a(447),B=a(448),x=Object(o.b)(function(e){return{isAdded:e.ui.isCardAddedSuccess,isEdited:e.ui.isEdited}},function(e){return{isAddedFalse:function(){return e({type:"ADDED_FALSE"})},isEditedFalse:function(){return e({type:"EDITED_FALSE"})},addNewCard:function(t,a){return e(function(e,t){return function(a,n,l){var r=l.getFirebase,c=l.getFirestore;console.log(t);var i=c(),o=r().storage();o.ref("/images/".concat(t.name)).put(t).on("state_changed",function(e){console.log(e)},function(e){console.log(e)},function(){o.ref("images").child(t.name).getDownloadURL().then(function(n){i.collection("cards").add(Object(b.a)({},e,{like:0,createdAt:new Date,imgURL:n,imgName:t.name})).then(function(){a({type:"NEW_CARD_ADDED_SUCCESS"},e)}).catch(function(e){console.log("Error Creating Card")})})})}}(t,a))},editcard:function(t,a,n){return e(function(e,t,a){return function(n,l,r){var c=r.getFirebase,i=r.getFirestore;console.log("Card",e),console.log("IMG",t),console.log("prevIMG",a);var o=i(),s=c(),d=s.storage();"string"===typeof t?(console.log("It a string"),o.collection("cards").doc(e.id).update(Object(b.a)({},e,{templateName:e.templateName,category:e.category,price:e.price,des:e.des,imgURL:t,imgName:a})).then(function(){console.log("Card Edited"),n({type:"EDIT_CARD"},e)})):"object"===typeof t&&(console.log("Its an object"),d.ref("/images/".concat(t.name)).put(t).on("state_changed",function(e){console.log(e)},function(e){console.log(e)},function(){d.ref("images").child(t.name).getDownloadURL().then(function(l){o.collection("cards").doc(e.id).update({templateName:e.templateName,category:e.category,price:e.price,des:e.des,imgURL:l,imgName:t.name}).then(function(){console.log("Card Edited"),n({type:"EDIT_CARD"},e),s.storage().ref().child("images/"+a).delete().then(function(){console.log(a+" is deleted")}).catch(function(e){console.log("Unable to delete")})}).catch(function(e){console.log("Error Creating Card")})})}))}}(t,a,n))}}})(function(e){e.isAdded;var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),s=o[0],d=o[1],u=Object(n.useState)(0),m=Object(f.a)(u,2),E=m[0],g=m[1],b=Object(n.useState)(""),h=Object(f.a)(b,2),v=h[0],O=h[1],C=Object(n.useState)("black"),N=Object(f.a)(C,2),y=N[0],D=N[1],j=Object(n.useState)(!1),S=Object(f.a)(j,2),P=S[0],w=S[1],L=Object(n.useState)(!1),A=Object(f.a)(L,2),k=(A[0],A[1]),I=Object(n.useState)(!1),_=Object(f.a)(I,2),x=_[0],M=_[1],G=Object(n.useState)(""),W=Object(f.a)(G,2),K=W[0],z=W[1],J=function(e){return"object"===typeof e&&e.type.includes("image")},Z=function(t,a){w(!1),M(!1),k(!1),e.isAddedFalse(),e.isEditedFalse();var n=t.target.value;""!==n&&a(n)},X=function(e,t){return""===t||0===t?e:t},Y=function(){return""!==r&&0!==E&&""!==v&&""!==s&&""!==K&&J(K)};console.log(e.type);var q=null;return"add"===e.type?q=l.a.createElement("div",null,l.a.createElement(R.a,{style:{width:"58px"},disabled:!Y(),onClick:function(){w(!0),e.addNewCard({templateName:r,category:s,price:E,des:v},K)},color:"primary"},Y()&&P&&!e.isAdded?l.a.createElement(p.a,{size:"sm",color:"light"}):l.a.createElement("p",{style:{padding:"0",margin:"0"}},"Add")),l.a.createElement(R.a,{onClick:e.modalOff,color:"secondary"},"Cancel")):"edit"===e.type&&(q=l.a.createElement("div",null,l.a.createElement(R.a,{onClick:function(){!function(){M(!0);var t={id:e.id,templateName:X(e.name,r),category:X(e.category,s),price:X(e.price,E),des:X(e.des,v)};""===K||void 0===K?(console.log("Empty IMG Field"),e.editcard(t,e.imgURL,e.imgName)):K.type.includes("image")?(console.log("Image Type"),e.editcard(t,K,e.imgName)):(console.log("Unknown Type"),e.editcard(t,e.imgURL,e.imgName))}()},color:"primary"},x&&!e.isEdited?l.a.createElement(p.a,{size:"sm",color:"light"}):l.a.createElement("p",{style:{padding:"0",margin:"0"}},"Save")),l.a.createElement(R.a,{onClick:e.toggleSubmit2,color:"secondary"},"Cancel"))),l.a.createElement("div",{className:"editCard-main-div"},l.a.createElement(T.a,null,l.a.createElement(F.a,null,l.a.createElement(U.a,null,"Template Name"),l.a.createElement(B.a,{onChange:function(e){return Z(e,c)},type:"text",name:"templatename",placeholder:e.name})),l.a.createElement(F.a,null,l.a.createElement(U.a,null,"Category"),l.a.createElement(B.a,{onChange:function(e){return Z(e,d)},type:"text",name:"category",placeholder:e.category})),l.a.createElement(F.a,null,l.a.createElement(U.a,null,"Price"),l.a.createElement(B.a,{onChange:function(e){return Z(e,g)},type:"number",name:"price",placeholder:e.price})),l.a.createElement(F.a,null,l.a.createElement(U.a,null,"Description"),l.a.createElement(B.a,{onChange:function(e){return Z(e,O)},type:"textarea",name:"text",placeholder:e.des})),l.a.createElement(F.a,null,l.a.createElement(U.a,null,"Upload Card"),l.a.createElement(B.a,{style:{color:y},onChange:function(t){w(!1),M(!1),e.isAddedFalse(),e.isEditedFalse();var a=t.target.files[0];z(a),console.log(a),J(a)?D("green"):(alert("Please Upload file in image format only!"),D("red"))},type:"file",name:"file"}))),q)}),M=(a(211),a(451)),G=Object(o.b)(function(e){return{isDelete:e.ui.isDelete,isEdited:e.ui.isEdited}},function(e){return{openDetailsPage:function(t){return e({type:"OPEN_DETAIL_PAGE",id:t})},deleteC:function(t,a){return e(function(e,t){return function(a,n,l){var r=l.getFirebase,c=l.getFirestore;console.log("ImageName",t);var i=c(),o=r();i.collection("cards").doc(e).delete(),o.storage().ref().child("images/"+t).delete().then(function(){console.log("CARD DELETE"),a({type:"CARD_DELETE"})}).catch(function(e){console.log("Unable to delete")})}}(t,a))},likeC:function(t,a){return e(function(e,t){return console.log(e,t),function(a,n,l){l.getFirebase,(0,l.getFirestore)().collection("cards").doc(e).update({like:t})}}(t,a))}}})(function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(f.a)(i,2),s=o[0],d=o[1],u=Object(n.useState)(!1),m=Object(f.a)(u,2);m[0],m[1];Object(n.useEffect)(function(){return e.isEdited&&c(!1),function(){}},[e.isEdited]),console.log(e),console.log(e.imgName);var E=function(){return c(!r)},g=function(){return d(!s)};console.log(e.isDelete);var p;return"user"===e.user?p=l.a.createElement("div",{className:"like-div"},l.a.createElement("p",{className:"like-message"},e.name)):"admin"===e.user&&(p=l.a.createElement("div",{className:"control-div"},l.a.createElement("button",{onClick:E,className:"control-buttons edit-card-button"},"Edit"),l.a.createElement("button",{onClick:g,className:"control-buttons delete-card-button"},"Delete"),l.a.createElement(A.a,{isOpen:r,toggle:E},l.a.createElement(k.a,{toggle:E},"Edit Card"),l.a.createElement(I.a,null,l.a.createElement(x,Object.assign({id:e.id,toggleSubmit2:E,type:"edit"},e)))),l.a.createElement(A.a,{isOpen:s,toggle:g},l.a.createElement(k.a,{toggle:g},"Delete Card"),l.a.createElement(I.a,null,"Are you sure you want to DELETE this card?"),l.a.createElement(M.a,null,l.a.createElement(R.a,{color:"danger",onClick:function(){return t=e.id,a=e.imgName,e.deleteC(t,a),void g();var t,a}},"Yes")," ",l.a.createElement(R.a,{color:"secondary",onClick:g},"No"))))),console.log("imgurl",e.imgURL),l.a.createElement("div",{className:"card-main-div"},l.a.createElement(_.ToastsContainer,{store:_.ToastsStore}),l.a.createElement("div",{className:"card"},l.a.createElement("div",{onClick:function(){return e.openDetailsPage(e.id)},className:"img-div"},l.a.createElement("img",{className:"card-img",src:e.imgURL})),p))}),W=Object(i.d)(Object(o.b)(function(e){return{cardsData:e.firestore.ordered.cards,isAdded:e.ui.isCardAddedSuccess,isDelete:e.ui.isDelete,isEdited:e.ui.isEdited}},function(e){return{isDeletedFalse:function(){return e({type:"DELETED_FALSE"})}}}),Object(d.firestoreConnect)([{collection:"cards"}]))(function(e){console.log("isAdded"),console.log(e.cardsData);var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1],i=function(){c(!1)};Object(n.useEffect)(function(){return e.isDelete&&_.ToastsStore.error("Card Deleted"),function(){}},[e.isDelete]),Object(n.useEffect)(function(){return e.isEdited?_.ToastsStore.warning("Card Edited"):console.log("Nahi"),function(){}},[e.isEdited]),Object(n.useEffect)(function(){return e.isAdded?(c(!1),_.ToastsStore.success("Card Added To the Collection")):console.log("Nahi"),function(){e.isDeletedFalse()}},[e.isAdded]);var o={display:"flex",alignItems:"center",justifyContent:"center"},s=l.a.createElement("div",{style:o},l.a.createElement(p.a,{style:{width:"4rem",height:"4rem"},type:"grow",color:"light"}));return s=void 0!==e.cardsData?e.cardsData.map(function(e){return l.a.createElement(G,{imgName:e.imgName,imgURL:e.imgURL,user:"admin",name:e.templateName,category:e.category,price:e.price,des:e.des,id:e.id})}):l.a.createElement("div",{style:o},l.a.createElement(p.a,{style:{width:"4rem",height:"4rem"},type:"grow",color:"light"})),console.log(s),l.a.createElement("div",{className:"edit-main-div"},l.a.createElement(_.ToastsContainer,{store:_.ToastsStore}),l.a.createElement("div",{onClick:function(){c(!0)},className:"add-new-card"},l.a.createElement("p",{style:{fontSize:"8em",padding:"0",margin:"0"}},"+"),l.a.createElement("p",{className:"add-card-title"}," Add Card")),s,l.a.createElement(A.a,{isOpen:r,toggle:i},l.a.createElement(k.a,{toggle:i},"Add Card"),l.a.createElement(I.a,null,l.a.createElement(x,{type:"add",modalOff:i}))))}),K=(a(431),a(452)),z=a(453),J=a(454),Z=a(455),X=a(456),Y=(a(432),a(3)),q=a.n(Y),H=Object(o.b)(function(e){return{}},function(e){return{}})(function(e){var t=Object(n.useState)("1"),a=Object(f.a)(t,2),r=a[0],c=a[1],i=function(e){r!==e&&c(e)};return l.a.createElement("div",{className:"admin-details-main-div"},l.a.createElement(w.a,{tabs:!0},l.a.createElement(K.a,null,l.a.createElement(z.a,{className:q()({active:"1"===r}),onClick:function(){i("1")}},"Likes")),l.a.createElement(K.a,null,l.a.createElement(z.a,{className:q()({active:"2"===r}),onClick:function(){i("2")}},"Orders")),l.a.createElement(K.a,null,l.a.createElement(z.a,{className:q()({active:"3"===r}),onClick:function(){i("3")}},"Logs")),l.a.createElement(K.a,null,l.a.createElement(z.a,{className:q()({active:"4"===r}),onClick:function(){i("4")}},"Info"))),l.a.createElement(J.a,{activeTab:r},l.a.createElement(Z.a,{tabId:"1"},l.a.createElement(X.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Sr No."),l.a.createElement("th",null,"Card Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Likes"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"100"),l.a.createElement("td",null,"46")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Birthday Card"),l.a.createElement("td",null,"250"),l.a.createElement("td",null,"11")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Anniversary"),l.a.createElement("td",null,"300"),l.a.createElement("td",null,"78"))))),l.a.createElement(Z.a,{tabId:"2"},l.a.createElement("div",{className:"table-div"},l.a.createElement(X.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Sr No."),l.a.createElement("th",null,"Customer Name"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Contact No"),l.a.createElement("th",null,"Product Purchased"),l.a.createElement("th",null,"Price(Rs)"),l.a.createElement("th",null,"Payment",l.a.createElement("br",null),"Method"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Mumbai"),l.a.createElement("td",null,"989767967"),l.a.createElement("td",null,"Wedding Card"),l.a.createElement("td",null,"323"),l.a.createElement("td",null,"COD"),l.a.createElement("td",null,"Pending")))))),l.a.createElement(Z.a,{tabId:"3"},l.a.createElement(X.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Sr No."),l.a.createElement("th",null,"Event"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type of User"),l.a.createElement("th",null,"Date / Time"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter"))))),l.a.createElement(Z.a,{tabId:"4"},l.a.createElement(X.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Sr No."),l.a.createElement("th",null,"Card Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Like"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))))))}),Q=Object(o.b)(function(e){return{isEditPageOpen:e.ui.isEditPageOpen,isDetailsPageOpen:e.ui.isDetailsPageOpen}},function(e){return{}})(function(e){return l.a.createElement("div",{className:"dashboard-main-div"},l.a.createElement(L,{title:"Dashboard",user:"admin"}),e.isEditPageOpen?l.a.createElement(W,null):null,e.isDetailsPageOpen?l.a.createElement(H,null):null)}),V=(a(433),a(434),a(435),Object(i.d)(Object(o.b)(function(e){return console.log(e.ui.detailsPageID),{id:e.ui.detailsPageID,cardsData:e.firestore.ordered.cards}},function(e){return{closeDetails:function(){return e({type:"CLOSE_DETAILS"})}}}),Object(d.firestoreConnect)([{collection:"cards"}]))(function(e){var t=[];if(void 0!==e.cardsData)for(var a=0;a<e.cardsData.length;a++)e.cardsData[a].id===e.id&&(console.log("found"),t.push(e.cardsData[a]));else t=[];return t=t[0],l.a.createElement("div",{className:"super-div"},l.a.createElement("button",{onClick:e.closeDetails,className:"close-button"},"X"),l.a.createElement("div",{className:"details-main-div"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"card-image",src:t.imgURL})),l.a.createElement("div",{className:"detail-div"},l.a.createElement("h2",{className:"default name"},t.templateName),l.a.createElement("p",{className:"default details"},t.des),l.a.createElement("p",{className:"default category"},l.a.createElement("span",{className:"label"},"Category: "),t.category),l.a.createElement("p",{className:"default price"},l.a.createElement("span",null,"Rs."),t.price,l.a.createElement("span",null,"/-")),l.a.createElement(R.a,{color:"success"},"Order"))))})),$=Object(i.d)(Object(o.b)(function(e){return{isClientCardsPageOpen:e.ui.isClientCardsPageOpen,isCardDetailsPageOpen:e.ui.isCardDetailsPageOpen,cardsData:e.firestore.ordered.cards}}),Object(d.firestoreConnect)([{collection:"cards"}]))(function(e){var t=l.a.createElement("div",null,l.a.createElement(p.a,{style:{width:"4rem",height:"4rem"},type:"grow",color:"light"}));return t=void 0!==e.cardsData?e.cardsData.map(function(e,t){return l.a.createElement(N.a,{easing:"easeOutBounce",duration:500,scale:[.9,1]},l.a.createElement(G,{imgName:e.imgName,imgURL:e.imgURL,name:e.templateName,user:"user",id:e.id}))}):l.a.createElement("div",null,l.a.createElement(p.a,{style:{width:"4rem",height:"4rem"},type:"grow",color:"light"})),l.a.createElement("div",{className:"clientpage-main-div"},l.a.createElement(L,{title:"FistBump",user:"user"}),e.isClientCardsPageOpen?l.a.createElement("div",{className:"cards-super-div"},l.a.createElement("h5",{className:"title"},"Cards"),l.a.createElement("div",{className:"cards-div"},t)):null,e.isCardDetailsPageOpen?l.a.createElement(N.a,{easing:"easeInElastic",duration:1500,direction:"reverse",translateX:"-30rem"},l.a.createElement(V,null)):null)}),ee=Object(o.b)(function(e){return{auth:e.firebase.auth}},function(e){return{}})(function(e){console.log("Auth",e.auth);var t=l.a.createElement(p.a,{style:{width:"3rem",height:"3rem"},color:"light",type:"grow"});return e.auth.uid?(console.log("Logged in"),console.log(e.auth.uid),"Dy4TdfimwJhG12eeYBRFdOt8xCS2"===e.auth.uid?(console.log("Admin"),t=l.a.createElement(Q,null)):(console.log("User"),t=l.a.createElement($,null))):e.auth.isEmpty&&(t=l.a.createElement(y,null)),e.auth.isLoaded||(console.log("Loggedout"),t=l.a.createElement("div",{style:{width:"inherit",height:"500px",padding:"128px"}},l.a.createElement(p.a,{style:{width:"6rem",height:"6rem"},color:"light",type:"grow"}))),l.a.createElement("div",{className:"App"},t)}),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ne={isLoginPageOpen:!1,isSignupPageOpen:!1,isBannerPageOpen:!0,isEditPageOpen:!0,isDetailsPageOpen:!1,isClientCardsPageOpen:!0,isCardDetailsPageOpen:!1,isAuthPageOpen:!0,isClientPageOpen:!1,isDashboardPageOpen:!1,detailsPageID:"",isCardAddedSuccess:!1,isDelete:!1,isEdited:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDED_FALSE":return Object(b.a)({},e,{isCardAddedSuccess:!1});case"DELETED_FALSE":return Object(b.a)({},e,{isDelete:!1});case"EDITED_FALSE":return Object(b.a)({},e,{isEdited:!1});case"EDIT_CARD":return Object(b.a)({},e,{isEdited:!0});case"CARD_DELETE":return Object(b.a)({},e,{isDelete:!0});case"NEW_CARD_ADDED_SUCCESS":return Object(b.a)({},e,{isCardAddedSuccess:!0});case"CLICKED_EDIT_PAGE":return Object(b.a)({},e,{isEditPageOpen:!0,isDetailsPageOpen:!1});case"CLOSE_DETAILS":return{isClientCardsPageOpen:!0,isCardDetailsPageOpen:!1};case"CLICKED_DETAILS_PAGE":return{isEditPageOpen:!1,isDetailsPageOpen:!0};case"OPEN_DETAIL_PAGE":return Object(b.a)({},e,{isClientCardsPageOpen:!1,isCardDetailsPageOpen:!0,detailsPageID:t.id});case"LOGIN_BACK_CLICKED":case"SIGNUP_BACK_CLICKED":return Object(b.a)({},e,{isBannerPageOpen:!0,isLoginPageOpen:!1,isSignupPageOpen:!1});case"BANNER_LOGIN_CLICKED":return Object(b.a)({},e,{isLoginPageOpen:!0,isSignupPageOpen:!1,isBannerPageOpen:!1});case"BANNER_SIGNUP_CLICKED":return Object(b.a)({},e,{isLoginPageOpen:!1,isSignupPageOpen:!0,isBannerPageOpen:!1})}return e},re={authError:null,isAdminLoggedIn:!1,isUserLoggedIn:!1,isLoggedOut:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;switch((arguments.length>1?arguments[1]:void 0).type){case"LOGOUT":return Object(b.a)({},e,{isLoggedOut:!0});case"ADMIN":return Object(b.a)({},e,{isAdminLoggedIn:!0});case"LOGIN_ERROR":return Object(b.a)({},e,{authError:"Invalid Credentials"});case"LOGIN_SUCCESS":return console.log("Login Success"),Object(b.a)({},e,{authError:null,isLoggedOut:!1});case"SIGNUP_SUCCESS":return console.log("Signup Success"),Object(b.a)({},e,{authError:null,isLoggedOut:!1});default:return e}},ie=Object(i.c)({authReducer:ce,ui:le,firestore:u.firestoreReducer,firebase:d.firebaseReducer}),oe=Object(i.e)(ie,Object(i.d)(Object(i.a)(s.a.withExtraArgument({getFirebase:d.getFirebase,getFirestore:u.getFirestore})),Object(u.reduxFirestore)(g),Object(d.reactReduxFirebase)(g)));c.a.render(l.a.createElement(o.a,{store:oe},l.a.createElement(ee,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/dashboard","/service-worker.js");te?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ae(e)})}}()}},[[215,1,2]]]);
//# sourceMappingURL=main.fdc6c549.chunk.js.map