(this.webpackJsonpfcc_task=this.webpackJsonpfcc_task||[]).push([[0],{10:function(e,t,r){e.exports={itemsWrapper:"ItemList_itemsWrapper__1Q7Bi",ItemContainer:"ItemList_ItemContainer__1OsKp",itemName:"ItemList_itemName__4fcQW",itemPrice:"ItemList_itemPrice__1Sbmj",itemQty:"ItemList_itemQty__M6Cpa"}},13:function(e,t,r){e.exports={itemTotalBlock:"OrderList_itemTotalBlock__27Zeh",orderWrapper:"OrderList_orderWrapper__1bidv",orderName:"OrderList_orderName__2P5bz",orderQty:"OrderList_orderQty__Zh1fv"}},23:function(e,t,r){e.exports={appWrapper:"App_appWrapper__3NVUO"}},42:function(e,t,r){e.exports=r(71)},71:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(15),c=r.n(i),o=r(17),l=r(4),m=r(18),s=r(19),u=r(21),d=r(22),p=r(12),_=r(20),E=r.n(_),f=function(e){return{type:"GET_ITEMS",items:e}},O=function(e){return{type:"FETCH_DATA",isFetching:e}},h=function(){return function(e){e(O(!0)),E.a.get("https://5e2df3533b0d640014be10a0.mockapi.io/api/v1/items").then((function(t){e(f(t.data)),e(O(!1))})).catch((function(t){e(function(e){return{type:"CATCH_ERROR",error:e}}(t)),e(O(!1))}))}},v=function(e,t,r){return{type:"ADD_TO_ORDER",itemName:e,itemId:t,itemPrice:r}},b=function(e){return{type:"SEND_ORDER_TOGGLE",isSending:e}},g=r(13),y=r.n(g),T=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:y.a.orderWrapper},n.a.createElement("div",{className:y.a.orderName},n.a.createElement("li",null,e.name)),n.a.createElement("div",{className:y.a.orderQty},e.count," pcs.")))},N=function(){return n.a.createElement("div",{style:{color:"red",margin:"25px",fontSize:"25px"}},"Failed to load or send data.")},j=function(){return n.a.createElement("div",{className:"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active",style:{margin:"50px"}})},I=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(m.a)(this,r),(a=t.call(this,e)).changeInputHandler=function(e){e.persist(),a.setState((function(t){return Object(l.a)({},t,{},Object(o.a)({},e.target.name,e.target.value))}))},a.sendOrder=function(e){e.preventDefault(),a.props.createOrder(a.state.customer_name,a.state.customer_phone,a.props.myOrder,a.props.totalAmount),a.setState({customer_name:"",customer_phone:""})},a.state={customer_name:"",customer_phone:""},a}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props,t=e.myOrder,r=e.totalAmount,a=e.error,i=e.sendToggle,c=t.reduce((function(e,t){return e+t.count}),0),o=t.map((function(e){return n.a.createElement(T,Object.assign({},e,{key:e.id}))}));return a?n.a.createElement(N,null):i?n.a.createElement(j,null):n.a.createElement("div",null,n.a.createElement("div",null,"Order list:"),n.a.createElement("form",{onSubmit:this.sendOrder},n.a.createElement("div",null,o),n.a.createElement("div",{className:y.a.itemTotalBlock},0===c?"Your order list is empty!":"You have ".concat(c," items in your order")),n.a.createElement("hr",null),n.a.createElement("div",null,"Total: ",r,"$"),n.a.createElement("div",{className:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"customer_name",value:this.state.customer_name,name:"customer_name",onChange:this.changeInputHandler}),n.a.createElement("label",{className:"mdl-textfield__label",htmlFor:"customer_name"},"Enter your name...")),n.a.createElement("div",{className:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",pattern:"-?[0-9]*(\\.[0-9]+)?",id:"customer_phone",value:this.state.customer_phone,name:"customer_phone",onChange:this.changeInputHandler}),n.a.createElement("label",{className:"mdl-textfield__label",htmlFor:"customer_phone"},"Enter your number..."),n.a.createElement("span",{className:"mdl-textfield__error"},"Input is not a number!")),n.a.createElement("div",null,n.a.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect",disabled:c>0?"":"disabled",type:"submit"},"Create order"))))}}]),r}(a.Component),R=Object(p.b)((function(e){var t=e.order;return{myOrder:t.myOrder,totalAmount:t.totalAmount,error:t.error,sendToggle:t.sendToggle}}),{addToOrder:v,createOrder:function(e,t,r,a){return function(n){n(b(!0)),E.a.post("https://5e2df3533b0d640014be10a0.mockapi.io/api/v1/order",{customer_name:e,customer_phone:t,customer_order:r,total_amount:a}).then((function(e){console.log(e),n(b(!1)),n({type:"CLEAR_CART"}),alert("\u0417\u0430\u043a\u0430\u0437 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!"),n(h())})).catch((function(e){n(function(e){return{type:"CATCH_CART_ERROR",error:e}}(e))}))}}})(I),C=r(10),A=r.n(C),x=function(e){var t=e.name,r=e.price,a=e.quantity,i=e.id;return n.a.createElement("div",{className:A.a.ItemContainer},n.a.createElement("div",{className:A.a.itemName},n.a.createElement("li",null,t)),n.a.createElement("div",{className:A.a.itemPrice},r,"$"),n.a.createElement("div",{className:A.a.itemQty},a," pcs."),n.a.createElement("div",null,n.a.createElement("button",{className:"mdl-button mdl-js-button mdl-button--fab",style:{width:"30px",height:"30px",minWidth:"initial"},onClick:function(){e.removeItem(i),e.addToOrder(t,i,r)},disabled:e.quantity>0?"":"disabled"},n.a.createElement("i",{className:"material-icons"},"add"))))},D=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(m.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.props.setItems(this.items)}},{key:"render",value:function(){var e=this.props,t=e.items,r=e.isFetching,a=e.error,i=e.removeItem,c=e.addToOrder,o=t.map((function(e){return n.a.createElement(x,Object.assign({},e,{key:e.id,removeItem:i,addToOrder:c}))}));return r?n.a.createElement(j,null):a?n.a.createElement(N,null):n.a.createElement("div",{className:A.a.itemsWrapper},o)}}]),r}(a.Component),k=Object(p.b)((function(e){var t=e.items;return{items:t.items,isFetching:t.isFetching,error:t.error}}),{getItems:f,removeItem:function(e){return{type:"REMOVE_ITEM",itemId:e}},fetchData:O,addToOrder:v,setItems:h})(D),S=r(23),w=r.n(S),L=function(){return n.a.createElement("div",{className:w.a.appWrapper},n.a.createElement("div",{className:w.a.itemWrapper},n.a.createElement(k,null)),n.a.createElement("div",{className:w.a.orderWrapper},n.a.createElement(R,null)))},W=r(8),F=r(39),H={items:[],isFetching:!0,error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(l.a)({},e,{items:t.items});case"FETCH_DATA":return Object(l.a)({},e,{isFetching:t.isFetching});case"REMOVE_ITEM":var r=e.items.map((function(e){return e.id===t.itemId?Object(l.a)({},e,{quantity:e.quantity-1}):e}));return Object(l.a)({},e,{items:r});case"CATCH_ERROR":return Object(l.a)({},e,{error:t.error});default:return e}},Q={myOrder:[],totalAmount:0,sendToggle:!1,error:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_ORDER":var r=e.myOrder,a=!1;return r.forEach((function(e){e.id===t.itemId&&(e.count+=1,a=!0)})),a||r.push({name:t.itemName,id:t.itemId,price:t.itemPrice,count:1}),Object(l.a)({},e,{myOrder:r,totalAmount:e.totalAmount+t.itemPrice});case"CLEAR_CART":return Object(l.a)({},e,{myOrder:[],totalAmount:0});case"SEND_ORDER_TOGGLE":return Object(l.a)({},e,{sendToggle:t.isSending});case"CATCH_CART_ERROR":return Object(l.a)({},e,{error:t.error});default:return e}},B=Object(W.c)({items:M,order:P}),G=r(40),V=r(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(68),r(69);var q=Object(W.e)(B,Object(W.d)(Object(W.a)(F.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G.a,null,n.a.createElement(p.a,{store:q},n.a.createElement(L,null),n.a.createElement(V.a,{exact:!0,path:"/store",render:function(){return n.a.createElement(k,null)}}),n.a.createElement(V.a,{exact:!0,path:"/order",render:function(){return n.a.createElement(R,null)}})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.2eb757b8.chunk.js.map