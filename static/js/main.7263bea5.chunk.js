(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(8),c=n.n(i),r=n(10),l=n(1),u=n(2),s=n(4),m=n(3),d=(n(16),function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"TODO APP"))}),h=function(t){var e,n=t.info,a=n.text,i=n.status,c=n._id;e=i?o.a.createElement("span",null,"\u2713"):o.a.createElement("span",null,"\u274d");return o.a.createElement("div",{className:i?"toDoneItem":"toDoItem"},o.a.createElement("p",null,a),o.a.createElement("button",{className:"btn",onClick:function(){t.callYourParent(c)}},e))},f=function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"empty"},o.a.createElement("img",{src:"https://media.giphy.com/media/WTM0nLKlzhWTE3QwJz/giphy.gif",alt:""})))},p=function(t){var e=t.data,n=function(e){t.callGrandpa(e)},a=e.map((function(t){return o.a.createElement(h,{key:t._id,info:t,callYourParent:n})}));return o.a.createElement("div",{className:"todo"},o.a.createElement("h4",null,"To Do"),e.length>0?a:o.a.createElement(f,null))},E=function(t){var e=t.data,n=function(e){t.callGrandma(e)},a=e.map((function(t){return o.a.createElement(h,{key:t._id,info:t,callYourParent:n})}));return o.a.createElement("div",{className:"done"},o.a.createElement("h4",null,"Done"),e.length>0?a:o.a.createElement(f,null))},v=function(t){return setTimeout((function(){t.hideNotification()}),4e3),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"notification"},o.a.createElement("img",{src:"https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif",alt:""}),o.a.createElement("p",null,"Todos were updated!")))},g=n(9),T=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).handleSubmit=function(t){t.preventDefault();var e={status:!1,_id:Object(g.v4)(),text:a.state.todo,date:new Date};a.props.addTodo(e)},a.handleChange=function(t){a.setState({todo:t.target.value})},a.state={todo:""},a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"write something",onChange:this.handleChange}),o.a.createElement("button",null,"ADD"))}}]),n}(o.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).updateTodos=function(t){var e,n=a.state.items.map((function(n){return n._id===t&&(n.status=!n.status,e=n),n}));fetch("https://ds-todo-api.now.sh/todos/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e.status})}).then((function(t){return t.json()})).then((function(t){console.log(t),a.setState({items:n})}))},a.updateFam=function(t){var e=a.state.items.map((function(e){return e._id===t&&(e.status=!e.status),e}));a.setState({items:e,showNotification:!0})},a.handleNotification=function(){a.setState({showNotification:!1})},a.handleNewTodo=function(t){var e=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_URL;fetch(e).then((function(t){return t.json()})).then((function(t){var e=[].concat(Object(r.a)(a.state.items),[t]);a.setState({items:e})})).catch((function(t){console.log(t)}))},a.state={items:[],showNotification:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://ds-todo-api.now.sh/todos").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({items:e})}))}},{key:"render",value:function(){var t=this.state.items,e=t.filter((function(t){return!1===t.status})),n=t.filter((function(t){return!0===t.status})),a=this.state.showNotification;return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),a&&o.a.createElement(v,{hideNotification:this.handleNotification}),o.a.createElement(T,{addTodo:this.handleNewTodo}),o.a.createElement(p,{data:e,callGrandpa:this.updateFam}),o.a.createElement(E,{data:n,callGrandma:this.updateFam}))}}]),n}(o.a.Component);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7263bea5.chunk.js.map