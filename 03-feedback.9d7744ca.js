!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){n[e.target.name]=e.target.value,console.log(n),localStorage.setItem(t,JSON.stringify(n))})),e.addEventListener("submit",(function(e){e.preventDefault()}));var t="feedback-form-state",n={};!function(o){var a=localStorage.getItem(t),r=JSON.parse(a);for(var l in console.log(r),r)e.elements[l].value=r[l],n[l]=r[l],console.log(l)}()}();
//# sourceMappingURL=03-feedback.9d7744ca.js.map
