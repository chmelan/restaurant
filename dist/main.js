!function(n){var e={};function t(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(i,s,function(e){return n[e]}.bind(null,s));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);const i=n=>{n.innerHTML='\n<div class="bodyPageTitle">\n<h1>Elmer\'s Eggselent Emporium</h1>\n<h2>You need eggs? We have eggs. So many eggs.</h2>\n</div>\n<div class="reviewContainer">\n    <div class="reviewEgg">\n        <div class="reviewText">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <p>Wow! Abslutely eggceptional customer service!<br>-Suzie </p>\n        </div>\n    </div>\n    <div class="reviewEgg">\n        <div class="reviewText">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <p>The owner was too eggcentric for me.<br>-Greg</p>\n        </div>\n    </div>\n    <div class="reviewEgg">\n        <div class="reviewText">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n            <p>It\'s eggactly what you\'d expect.<br>-Nik </p>\n        </div>\n    </div>\n</div>'};document.querySelector("#content").innerHTML=' <nav>\n<img class="navLogo" src="https://image.flaticon.com/icons/png/512/44/44506.png">\n<span class="navPageTitle">Elmer\'s Eggselent Emporium</span>\n<button class="navButton" id="navAboutButton">About</button>\n<button class="navButton" id="navMenuButton">Menu</button>\n<button class="navButton" id="navContactButton">Contact</button>\n</nav>\n<div class="tabContent"></div>';const s=document.querySelector(".tabContent"),a=document.querySelector(".navLogo"),o=document.querySelector("#navAboutButton"),c=document.querySelector("#navMenuButton"),g=document.querySelector("#navContactButton");i(s),a.addEventListener("click",(function(){i(s)})),o.addEventListener("click",(function(){s.innerHTML='<div class="aboutTab">\n    <div class="aboutTabHeading">We. Like. Eggs.<br> Read up on these facts to become an eggspert!</div>\n    <div class="aboutTabFactContainer">\n      <div class="aboutTabTextDiv">Eggshell color is caused by pigment deposition during egg formation in the oviduct and may vary according to species and breed, from the more common white or brown to pink or speckled blue-green. Generally, chicken breeds with white ear lobes lay white eggs, whereas chickens with red ear lobes lay brown eggs.</div>\n      <div class="aboutTabTextDiv">Double-yolk eggs, when an egg contains two or more yolks, occurs when ovulation occurs too rapidly, or when one yolk becomes joined with another yolk</div>\n      <div class="aboutTabTextDiv">Egg yolks and whole eggs store significant amounts of protein and choline, and are widely used in cookery. Due to their protein content, the United States Department of Agriculture (USDA) categorizes eggs as Meats within the Food Guide Pyramid. Despite the nutritional value of eggs, there are some potential health issues arising from egg quality, storage, and individual allergies.</div>\n    </div>\n  </div>'})),c.addEventListener("click",(function(){s.innerHTML='<div class="menuTab">\n    <div class="menuTabHeading">We dont mean to eggagerate, we really do have a lot of eggs!</div>\n    <div class="menuList">\n      <div class="menuItem">Single Egg</div>\n      <div class="menuPrice">$0.15</div>\n      <div class="menuItem">1/2 Dozen Eggs</div>\n      <div class="menuPrice">$0.90</div>\n      <div class="menuItem">1 Dozen Eggs</div>\n      <div class="menuPrice">$1.80</div>\n      <div class="menuItem">1 & 1/2 Dozen Eggs</div>\n      <div class="menuPrice">$2.70</div>\n      <div class="menuItem">2 Dozen Eggs</div>\n      <div class="menuPrice">$3.60</div>\n      <div class="menuItem">12 Dozen Eggs</div>\n      <div class="menuPrice">$21.60</div>\n      <div class="menuItem">100 Dozen Eggs</div>\n      <div class="menuPrice">$180.00</div>\n      <div class="menuItem">1 Pallet of Eggs</div>\n      <div class="menuPrice">$1620.00</div>\n      <div class="menuItem">1 Semi Truck of Eggs</div>\n      <div class="menuPrice">$42,120.00</div>\n    </div>\n  </div>'})),g.addEventListener("click",(function(){var n;n.innerHTML='  <div class="contactTab">\n    <div class="contactTabHeading">We are eggcited to hear from you!</div>\n    <div class="contactInfo">\n      <div class="contactItem">Phone Number</div>\n      <div class="contactItem">1-800-438-3447 <br>(1-800-GET-EGGS)</div>\n      <div class="contactItem">Fax</div>\n      <div class="contactItem">1-800-234-2342</div>\n      <div class="contactItem">Address</div>\n      <div class="contactItem">3000 Egg Way Madison WI</div>\n      <div class="contactItem">Email</div>\n      <div class="contactItem">eggman@egg.egg</div>\n\n    </div>\n  </div>'}))}]);