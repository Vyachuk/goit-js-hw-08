var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{return null===localStorage.getItem(e)?void 0:localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},r={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,u=l||s||Function("return this")(),c=Object.prototype.toString,m=Math.max,v=Math.min,d=function(){return u.Date.now()};function g(e,t,r){var n,o,i,a,f,l,s=0,u=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,i=o;return n=o=void 0,s=t,a=e.apply(i,r)}function h(e){return s=e,f=setTimeout(S,t),u?b(e):a}function j(e){var r=e-l;return void 0===l||r>=t||r<0||c&&e-s>=i}function S(){var e=d();if(j(e))return w(e);f=setTimeout(S,function(e){var r=t-(e-l);return c?v(r,i-(e-s)):r}(e))}function w(e){return f=void 0,g&&n?b(e):(n=o=void 0,a)}function O(){var e=d(),r=j(e);if(n=arguments,o=this,l=e,r){if(void 0===f)return h(l);if(c)return f=setTimeout(S,t),b(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,p(r)&&(u=!!r.leading,i=(c="maxWait"in r)?m(y(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),s=0,n=l=o=f=void 0},O.flush=function(){return void 0===f?a:w(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?f(e.slice(2),r?2:8):o.test(e)?NaN:+e}r=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),g(e,t,{leading:n,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form")},h=t.load("feedback-form-state");h&&(b.form.elements.email.value=h.email,b.form.elements.message.value=h.message),b.form.addEventListener("input",r((e=>{const r={email:b.form.elements.email.value,message:b.form.elements.message.value};t.save("feedback-form-state",r)}),500)),b.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(`Email: ${b.form.elements.email.value}`),console.log(`Message: ${b.form.elements.message.value}`),b.form.reset(),t.remove("feedback-form-state")}));
//# sourceMappingURL=03-feedback.bf751d83.js.map