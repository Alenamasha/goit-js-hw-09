const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.setAttribute("disabled",!0),t.addEventListener("click",(function(t){d(),t.target.setAttribute("disabled",!0),e.removeAttribute("disabled"),r=setInterval((()=>{d()}),1e3)})),e.addEventListener("click",(function(e){e.target.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.894242ee.js.map
