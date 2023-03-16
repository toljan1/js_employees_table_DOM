parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function n(e){return o(e)||a(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l=function(e,n,t,r,a){document.body.insertAdjacentHTML("beforeend","\n    <div class = 'notification ".concat(a,"' data-qa = 'notification'>\n      <h2 class = 'title'>").concat(t,"</h2>\n      <p>").concat(r,"</p>\n    </div>\n  "));var o=document.querySelector(".".concat(a));o.style.top="".concat(e,"px"),o.style.right="".concat(n,"px"),setTimeout(function(){return o.remove()},2e3)},c=document.querySelector("tr");function u(e){return+e.innerText.slice(1).replaceAll(",","")}var d=!1,s="";c.addEventListener("click",function(e){var t,r=e.target.parentNode.children;s!==e.target.innerText&&(d=!1,s=e.target.innerText);for(var a=function(r){if(e.target.parentNode.children[r].innerText===e.target.innerText){var a=document.querySelector("tbody"),o=a.querySelectorAll("tr");t="Salary"===e.target.parentNode.children[r].innerText?n(o).sort(function(e,n){return u(e.children[r])-u(n.children[r])}):n(o).sort(function(e,n){return e.children[r].innerText.localeCompare(n.children[r].innerText)}),d?(d=!1,a.append.apply(a,n(t.reverse()))):(d=!0,a.append.apply(a,n(t)))}},o=0;o<r.length;o++)a(o)});var f=document.querySelector("tbody"),p=null;f.addEventListener("click",function(e){p&&p.removeAttribute("class"),p=e.target.parentNode,e.target.parentNode.className="active"});var y=document.querySelector("body");y.insertAdjacentHTML("beforeend",'\n  <form class = \'new-employee-form\'>\n    <label data-qa="name">\n      Name:\n      <input name="name" type="text">\n    </label>\n\n    <label data-qa="position">\n      Position:\n      <input name="position" type="text">\n    </label>\n\n    <label data-qa="office">\n    Office:\n    <select>\n        <option>Tokyo</option>\n        <option>Singapore</option>\n        <option>London</option>\n        <option>New York</option>\n        <option>Edinburgh</option>\n        <option>San Francisco</option>\n    </select>\n    </label>\n\n    <label data-qa="age">\n      Age:\n      <input name="age" type="number">\n    </label>\n\n    <label data-qa="salary">\n      Salary:\n      <input name="salary" type="number">\n    </label>\n\n    <button type = \'submit\'>\n      Save to table\n    </button>\n  </form>\n');var m,v,b,h,g=document.querySelector("button");g.addEventListener("click",function(t){t.preventDefault();var r,a=document.querySelectorAll("input"),o=document.createElement("tr"),i=n(a).find(function(e){return""===e.value}),c=e(a);try{for(c.s();!(r=c.n()).done;){var u=r.value;if(i){l(10,10,"Error","All fields must be filled","error");break}if("name"===u.name&&u.value.length<4){l(10,10,"Error","The name must contain more than 4 letters","error");break}if("age"===u.name&&(+u.value<18||+u.value>90)){l(10,10,"Error","The age value should be between 18 and 90 years","error");break}if("salary"===u.name){if(+u.value<0){l(10,10,"Error","Salary cannot be negative","error");break}var d,s=e(a);try{for(s.s();!(d=s.n()).done;){var p=d.value,y=document.createElement("td");"salary"===p.name?y.innerText="$"+"".concat(p.value):y.innerText=p.value,o.append(y),f.append(o),p.value=""}}catch(v){s.e(v)}finally{s.f()}l(10,10,"Perfectly","A new employee is successfully added to the table","success")}}}catch(v){c.e(v)}finally{c.f()}var m=document.createElement("td");m.innerText=document.querySelector("select").value,o.children[1].after(m)});var S=function(){var e=b.value;if(""!==e)return"number"===b.type?"$"===m.slice(0,1)?+e>0?void(h.innerText="$"+(+e).toLocaleString("en-US")):void l(10,10,"Error","Salary cannot be negative","error"):e>90||e<18?void l(10,10,"Error","The age value should be between 18 and 90 years","error"):void(h.innerText=e):void("text"===b.type&&(h.innerText="".concat(e.slice(0,1).toUpperCase())+"".concat(e.slice(1).toLowerCase())));h.innerText=m},T=function e(n){h=n.target,f.removeEventListener("dblclick",e),m=h.innerText,(b=document.createElement("input")).focus(),b.classList.add("cell-input"),v="1234567890".includes(h.innerText.slice(1,2))?"number":"text",b.type=v,h.innerText="",h.append(b),b.addEventListener("blur",function(){S(),f.addEventListener("dblclick",e)}),b.addEventListener("keypress",function(n){13===n.keyCode&&(f.addEventListener("dblclick",e),S())})};f.addEventListener("dblclick",T);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.207ebdc4.js.map