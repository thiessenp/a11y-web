!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.A11yWeb=e():t.A11yWeb=e()}(self,(function(){return(()=>{var t={698:(t,e,i)=>{"use strict";i.r(e),i.d(e,{Dialog:()=>a,Hotkeys:()=>n.Hotkeys,Tablist:()=>r});var n=i(373);function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e){var i=e.tablistEl,n=e.selectorTab,o=e.activateCb,r=e.deactivateCb,s=e.focusCb,a=e.isAutoInit,c=void 0===a||a;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listnav=void 0,this.isInitialized=!1,this.tablistEl=void 0,this.selectorTab="[data-ayw-tab]",this.activateCb=function(t){var e=t.item,i=t.isInit,n=void 0!==i&&i;if(e&&"true"!==e.getAttribute["aria-selected"]){var o=this.items().find((function(t){return"true"===t.getAttribute("aria-selected")}));this.deactivateCb({item:o}),e.setAttribute("tabindex","0"),e.setAttribute("aria-selected","true");var r=document.getElementById(e.getAttribute("aria-controls"));r&&(r.setAttribute("tabindex","0"),r.removeAttribute("hidden"),n||this.focusCb({item:r}))}},this.deactivateCb=function(t){var e=t.item;if(e){e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false");var i=document.getElementById(e.getAttribute("aria-controls"));i&&i.setAttribute("hidden","hidden")}},this.focusCb=function(t){var e=t.item;e&&e.focus()},!i||!n)throw new Error("Tabslist requires both tabslistEl and selectorTab");this.tablistEl=i,this.selectorTab=n,o&&"function"==typeof o&&(this.activateCb=o),r&&"function"==typeof r&&(this.deactivateCb=r),s&&"function"==typeof s&&(this.focusCb=s),c&&this.init()}var e,i,r;return e=t,r=[{key:"buildTablists",value:function(e){var i=e.selectorTablist,n=e.selectorTab,o=document.querySelectorAll(i);if(o&&0!==o.length)return(o=Array.from(o)).map((function(e){return new t({tablistEl:e,selectorTab:n})}));console.log("Tabs, no tablists found.")}}],(i=[{key:"init",value:function(){this.listnav=this.build()}},{key:"build",value:function(){return new n.ListNav({listEl:this.tablistEl,listItemsSelector:this.selectorTab,activateCb:this.activateCb,deactivateCb:this.deactivateCb,focusCb:this.focusCb})}}])&&o(e.prototype,i),r&&o(e,r),t}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e){var i=this,o=e.containerEl,r=e.selectorHotkeys,s=e.selectorFocus,a=e.hotkeys,c=e.openCallback,l=e.closeCallback,u=e.isAutoInit,f=void 0===u||u;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hotkeys=[],this.dialogHotkeys=void 0,this.focusTrap=void 0,this.containerEl=void 0,this.returnFocusToEl=void 0,this.selectorHotkeys="[data-knw-hotkeys-dialog-key]",this.selectorFocus="[data-ayw-dialog-focus]",this.selectorActivatable='\n        a[href]:not([disabled]), \n        area[href],\n        button:not([disabled]), \n        textarea:not([disabled]), \n        input:not([disabled]),\n        select:not([disabled]), \n        iframe,\n        object,\n        embed,\n        [tabindex="0"],\n        [contenteditable]\n    ',this.openCallback=function(){i.returnFocusToEl=document.activeElement,i.containerEl.removeAttribute("hidden"),i.dialogHotkeys.pub({topic:"knw.hotkeys.activateDialog"}),i.focusTrap=new n.FocusTrap({containerEl:i.containerEl});var t=i.getItemToDoInitialFocus();t&&t.focus()},this.closeCallback=function(){i.containerEl.setAttribute("hidden",""),i.dialogHotkeys.pub({topic:"knw.hotkeys.activate"}),i.focusTrap.remove(),i.returnFocusToEl.focus()},!o)throw new Error("Dialog requires a containerEl");this.containerEl=o,r&&(this.selectorHotkeys=r),s&&(this.selectorFocus=s),a&&(this.hotkeys=a),c&&"function"==typeof c&&(this.openCallback=c),l&&"function"==typeof l&&(this.closeCallback=l),f&&this.init()}var e,i;return e=t,(i=[{key:"init",value:function(){this.addBehavior()}},{key:"open",value:function(){this.openCallback()}},{key:"close",value:function(){this.closeCallback()}},{key:"addBehavior",value:function(){var t=this;this.dialogHotkeys=n.Hotkeys.buildDialog({containerEl:this.containerEl,selectorHotkeys:this.selectorHotkeys});var e,i=this.containerEl.querySelector("[data-ayw-dialog-close]");i&&(e=function(e){t.close()},i.addEventListener("click",e))}},{key:"getItemToDoInitialFocus",value:function(){var t=this.containerEl.querySelector("[data-ayw-dialog-focus]");return t||this.containerEl.querySelector(this.selectorActivatable)}}])&&s(e.prototype,i),t}()},373:function(t){t.exports=(()=>{"use strict";var t={904:(t,e,i)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"object"!==n(t)?t:"Space"===t.code?"Space":t.key}function r(t){return"object"!==n(t)?"":t.altKey?"Alt":t.shiftKey?"Shift":t.ctrlKey?"Ctrl":""}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e),i.d(e,{FocusTrap:()=>m,Hotkeys:()=>a,ListNav:()=>c,ListNavConfigurable:()=>f,ListNavConfigurableBuilder:()=>u});var a=function(){function t(e){var i=e.items,n=e.containerEl,o=e.selectorHotkeys,r=e.isActive,s=e.isGlobal,a=e.isAutoInit,c=void 0===a||a;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.hotkeys=[],this.containerEl=window.document,this.selectorHotkeys="data-knw-hotkeys-key",this.isActive=!0,this.isGlobal=!0,this._subs=[],!i||void 0===i.length)throw new Error("Error: called Hotkey constructor without items list");this.items=Array.from(i),n&&(this.containerEl=n),o&&(this.selectorHotkeys=o),void 0!==r&&(this.isActive=r),void 0!==s&&(this.isGlobal=s),c&&this.init()}var e,i,n;return e=t,n=[{key:"buildGlobal",value:function(e){var i=e.containerEl,n=e.selectorContainer,o=e.selectorHotkeys,r=(i=i||document.querySelector(n)||document).querySelectorAll(o);return r||console.log("Error: buildGlobal missing hotkeys from selectorHotkeys"),new t({containerEl:i,items:r,selectorHotkeys:o})}},{key:"buildDialog",value:function(e){var i=e.containerEl,n=e.selectorContainer,o=e.selectorHotkeys,r=(i=i||document.querySelector(n)||document).querySelectorAll(o);return r||console.log("Error: buildDialog missing hotkeys from selectorHotkeys"),new t({containerEl:i,items:r,selectorHotkeys:o,isGlobal:!1,isActive:!1})}}],(i=[{key:"init",value:function(){this.parseHotkeys(),this.addBehavior()}},{key:"addBehavior",value:function(){var t=this;this.sub({topic:"knw.hotkeys.activateDialog",callback:function(e){var i=e.detail.targetEl;t.containerEl!==i?t.isActive=!1:t.isActive=!0}}),this.sub({topic:"knw.hotkeys.activate",callback:function(){t.isGlobal?t.isActive=!0:t.isActive=!1}}),this.sub({topic:"keydown",callback:function(e){if(t.isActive){var i=o(e),n=r(e),s="Escape"===i;if((!t.isInputElement(e)||s)&&t.isValidHotkey(i)){var a="";"Alt"===n&&(a="alt+"),"Ctrl"===n&&(a="ctrl+"),"Shift"===n&&(a="shift+"),a+=i.toLowerCase();var c=t.hotkeys[a];c&&(c.triggerEl?c.triggerEl.click():console.log("Error: no trigger element for key="+a))}}}})}},{key:"pub",value:function(t){var e=t.topic,i=new CustomEvent(e,{detail:{targetEl:this.containerEl},bubbles:!0});document.dispatchEvent(i)}},{key:"sub",value:function(t){var e=t.topic,i=t.callback;this._subs.push({topic:e,callback:i}),document.addEventListener(e,i)}},{key:"unsub",value:function(){this._subs.forEach((function(t){document.removeEventListener(t.topic,t.callback)}))}},{key:"parseHotkeys",value:function(){var t=this;this.items.forEach((function(e){var i=t.selectorHotkeys.replace(/\[|\]/gi,""),n=e.getAttribute(i);if(n){n=String(n).toLowerCase();var o=/^alt/i.test(n),r=/^ctrl/i.test(n),s=o||r?n.split("+")[1]:n;t.isValidHotkey(s)?t.hotkeys[n]={triggerEl:e}:console.log("Hotkeys: invalid hotkey "+n)}else console.log("Hotkeys: no hotkey for "+n)}))}},{key:"isValidHotkey",value:function(t){return/[a-z0-9]|Escape/i.test(t)}},{key:"isInputElement",value:function(t){return/input|textarea|select/i.test(t.target.tagName)}}])&&s(e.prototype,i),n&&s(e,n),t}();var c=function(){function t(e){var i=this,n=e.listEl,o=e.listItemsSelector,r=e.isAutoInit,s=void 0===r||r,a=e.activateCb,c=e.deactivateCb,l=e.focusCb;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listEl=void 0,this.listItemsSelector=void 0,this._itemsCacheTime=Date.now(),this._itemsCache=void 0,this.items=function(){var t=(Date.now()-this._itemsCacheTime)/1e3<5;if(this._itemsCache&&t)return this._itemsCache;var e=this.listEl.querySelectorAll(this.listItemsSelector)||[];return e=Array.from(e),this._itemsCache=e,this._itemsCacheTime=Date.now(),e},this.isInitialized=!1,this.eventPointers={},this.activateCb=function(t){var e=t.item;if(e&&"0"!==e.getAttribute("tabindex")){var n=i.items().find((function(t){return"0"===t.getAttribute("tabindex")}));i.deactivateCb({item:n}),e.setAttribute("tabindex","0")}},this.deactivateCb=function(t){var e=t.item;e&&"-1"!==e.getAttribute("tabindex")&&e.setAttribute("tabindex","-1")},this.focusCb=function(t){var e=t.item;e&&("-1"!==e.getAttribute("tabindex")&&"0"!==e.getAttribute("tabindex")&&e.setAttribute("tabindex","-1"),e.focus())},!n||!o)throw new Error("ListSimple invoked without a valid listEl or listItemsSelector");this.listEl=n,this.listItemsSelector=o,a&&"function"==typeof a&&(this.activateCb=a),c&&"function"==typeof c&&(this.deactivateCb=c),l&&"function"==typeof l&&(this.focusCb=l),s&&this.init()}var e;return(e=[{key:"init",value:function(){if(!this.isInitialized){this.addBehavior();var t=this.getActive()||this.getFirst();this.activateCb({item:t,isInit:!0}),this.isInitialized=!0}}},{key:"addBehavior",value:function(){var t=this,e=/Enter|Space|ArrowDown|ArrowRight|ArrowUp|ArrowLeft|End|Home|Delete/;this.eventPointers.keydown=function(i){var n=i.key;if("Space"===i.code&&(n="Space"),e.test(n)){var o=i.target.closest(t.listItemsSelector);o&&o.contains(o)&&t.handleKey(i,n)}},this.listEl.addEventListener("keydown",this.eventPointers.keydown),this.eventPointers.click=function(e){var i=e.target.closest(t.listItemsSelector);i&&i.contains(i)&&t.handleClick(e)},this.listEl.addEventListener("click",this.eventPointers.click)}},{key:"removeBehavior",value:function(){this.listEl.removeEventListener("keydown",this.eventPointers.keydown),this.listEl.removeEventListener("click",this.eventPointers.click)}},{key:"handleKey",value:function(t,e){if(t&&e)switch(e){case"Enter":case"Space":var i=t.target;i&&i.click();break;case"ArrowDown":case"ArrowRight":t.preventDefault();var n=this.getNext(t.target);this.focusCb({item:n});break;case"ArrowUp":case"ArrowLeft":t.preventDefault();var o=this.getPrev(t.target);this.focusCb({item:o});break;case"End":t.preventDefault();var r=this.getLast();this.focusCb({item:r});break;case"Home":t.preventDefault();var s=this.getFirst();this.focusCb({item:s});break;case"Delete":var a=new KeyboardEvent("keydown",{key:"ArrowUp",bubbles:!0});t.target.dispatchEvent(a),this.removeItem(t.target)}}},{key:"handleClick",value:function(t){this.focusCb({item:t.target,isClick:!0}),this.activateCb({item:t.target,isClick:!0})}},{key:"getNext",value:function(t){var e=this.items().indexOf(t);return e<0?this.items()[0]:this.items()[e+1]?this.items()[e+1]:this.items()[0]}},{key:"getPrev",value:function(t){var e=this.items().indexOf(t);return e<0?this.items()[0]:this.items()[e-1]?this.items()[e-1]:this.items()[this.items().length-1]}},{key:"getLast",value:function(){return this.items()[this.items().length-1]}},{key:"getFirst",value:function(){return this.items()[0]}},{key:"getActive",value:function(){return this.items().find((function(t){return"0"===t.getAttribute("tabindex")}))}},{key:"removeItem",value:function(t){var e=this.items().indexOf(t);e>-1&&this.items().splice(e,1)}}])&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,e),t}();function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.items||f.createListsFromDOM({selectorList:t.selectorList||"[data-knw-list]",selectorListItem:t.selectorListItem||"[data-knw-list-item]"});this.lists=f.buildLists({items:e,activateCb:t.activateCb,deactivateCb:t.deactivateCb,focussedCb:t.focussedCb,customKeys:t.customKeys})}var f=function(){function t(e){var i=this,n=e.items,o=e.isAutoInit,r=void 0===o||o,s=e.activateCb,a=e.deactivateCb,c=e.focusCb,l=e.customKeys;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.isInitialized=!1,this.NAV={ACTIVATE:{keys:["Enter","Space"],run:function(t){console.log("ACTIVATE",this),t.preventDefault();var e=t.target;e&&e.click()}},NEXT:{keys:["ArrowDown","ArrowRight"],run:function(t){t.preventDefault();var e=i.getNext(t.target);i.focusCb({item:e})}},PREV:{keys:["ArrowUp","ArrowLeft"],run:function(t){t.preventDefault();var e=i.getPrev(t.target);i.focusCb({item:e})}},LAST:{keys:["End"],run:function(t){t.preventDefault();var e=i.getLast();i.focusCb({item:e})}},FIRST:{keys:["Home"],run:function(t){t.preventDefault();var e=i.getFirst();i.focusCb({item:e})}},REMOVE:{keys:["Delete"],run:function(t){t.preventDefault(),function(t){var e=t.target,i=void 0===e?document:e,n=t.type,o=t.key;if(void 0!==o){var r=new KeyboardEvent(void 0===n?"keydown":n,{key:o,bubbles:!0});i.dispatchEvent(r)}}({target:t.target,type:"keydown",key:"ArrowUp"}),i.removeItem(t.target)}}},this.activateCb=function(t){var e=t.item;if(e&&"0"!==e.getAttribute("tabindex")){var n=i.items.find((function(t){return"0"===t.getAttribute("tabindex")}));i.deactivateCb({item:n}),e.setAttribute("tabindex","0")}},this.deactivateCb=function(t){var e=t.item;e&&"-1"!==e.getAttribute("tabindex")&&e.setAttribute("tabindex","-1")},this.focusCb=function(t){var e=t.item;e&&("-1"!==e.getAttribute("tabindex")&&"0"!==e.getAttribute("tabindex")&&e.setAttribute("tabindex","-1"),e.focus())},!n||void 0===n.length)throw new Error("Error: called List constructor without items list");this.items=Array.from(n),s&&"function"==typeof s&&(this.activateCb=s),a&&"function"==typeof a&&(this.deactivateCb=a),c&&"function"==typeof c&&(this.focusCb=c),l&&this.addCustomKeys(l),r&&this.init()}var e,i,n;return e=t,n=[{key:"createListsFromDOM",value:function(t){var e=t.selectorList,i=t.selectorListItem,n=document.querySelectorAll(e),o=[];return n.forEach((function(t){o.push(t.querySelectorAll(i))})),o}},{key:"buildLists",value:function(e){var i=e.items,n=e.activateCb,o=e.deactivateCb,r=e.customKeys;return(i=Array.from(i)).map((function(e){if(!e||void 0===e.length)throw new Error("Error: Lists addListItems received a non array like list of items in listItems");return new t({items:e=Array.from(e),activateCb:n,deactivateCb:o,customKeys:r})}))}}],(i=[{key:"init",value:function(){if(!this.isInitialized){this.addBehavior();var t=this.getActive()||this.getFirst();this.activateCb({item:t,isInit:!0}),this.isInitialized=!0}}},{key:"addBehavior",value:function(){var t=this;this.items.forEach((function(e){e&&(e.addEventListener("keydown",(function(e){t.handleKey(e)})),e.addEventListener("click",(function(e){t.handleClick(e)})))}))}},{key:"addCustomKeys",value:function(t){var e=Object.keys(this.NAV),i=Object.keys(t);if(i.length>0)for(var n=0,o=e.length;n<o;n++)for(var r=0,s=i.length;r<s;r++){var a=i[r];this.NAV[a]?(Array.isArray(t[a].keys)&&(this.NAV[a].keys=t[a].keys),"function"==typeof t[a].run&&(this.NAV[a].run=t[a].run)):t[a].keys.length>0&&"function"==typeof t[a].run&&(this.NAV[a]=t[a])}}},{key:"handleKey",value:function(t){if(!/Shift|Alt|Control/i.test(t.key))for(var e=r(t),i=o(t),n=""===e?i:"".concat(e,"+").concat(i),s=Object.keys(this.NAV),a=0,c=s.length;a<c;a++){var l=s[a];this.NAV[l].keys.indexOf(n)>-1&&this.NAV[l].run.call(this,t)}}},{key:"handleClick",value:function(t){this.focusCb({item:t.target,isClick:!0}),this.activateCb({item:t.target,isClick:!0})}},{key:"getNext",value:function(t){var e=this.items.indexOf(t);return e<0?this.items[0]:this.items[e+1]?this.items[e+1]:this.items[0]}},{key:"getPrev",value:function(t){var e=this.items.indexOf(t);return e<0?this.items[0]:this.items[e-1]?this.items[e-1]:this.items[this.items.length-1]}},{key:"getLast",value:function(){return this.items[this.items.length-1]}},{key:"getFirst",value:function(){return this.items[0]}},{key:"getActive",value:function(){return this.items.find((function(t){return"0"===t.getAttribute("tabindex")}))}},{key:"removeItem",value:function(t){var e=this.items.indexOf(t);e>-1&&this.items.splice(e,1)}}])&&l(e.prototype,i),n&&l(e,n),t}();function h(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var v=0;function b(t){return"__private_"+v+++"_"+t}var d=b("events"),y=b("selectorsActiveatable"),m=function(){function t(e){var i=e.containerEl,n=e.items,o=e.selectorsActiveatable,r=e.isAutoInit,s=void 0===r||r;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.containerEl=void 0,this.items=void 0,Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,y,{writable:!0,value:'\n        a[href]:not([disabled]), \n        button:not([disabled]), \n        textarea:not([disabled]), \n        input:not([disabled]),\n        select:not([disabled]), \n        [tabindex="0"],\n        [data-knw-activatable]\n    '}),!i)throw new Error("TabTrap contructor requires a containerEl and tabs");this.containerEl=i,n&&this.items,o&&h(this,y)[y],s&&this.init()}var e;return(e=[{key:"init",value:function(){if(!this.items){var t=this.containerEl.querySelectorAll(h(this,y)[y]);this.items=Array.from(t)}this.addBehavior()}},{key:"addBehavior",value:function(){var t=this;h(this,d)[d][0]={topic:"keydown",callback:function(e){var i=o(e),n=r(e),s=window.document.activeElement;"Tab"===i&&("Shift"===n?s===t.getFirstItem()&&(e.preventDefault(),t.getLastItem().focus()):s===t.getLastItem()&&(e.preventDefault(),t.getFirstItem().focus()))}},this.containerEl.addEventListener(h(this,d)[d][0].topic,h(this,d)[d][0].callback)}},{key:"getFirstItem",value:function(){return this.items[0]}},{key:"getLastItem",value:function(){return this.items[this.items.length-1]}},{key:"remove",value:function(){this.containerEl.removeEventListener(h(this,d)[d][0].topic,h(this,d)[d][0].callback)}}])&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,e),t}()}},e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}return i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(904)})()}},e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}return i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(698)})()}));