const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let l=null;t.addEventListener("click",(function(){null===l&&(t.disabled=!0,l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),e.addEventListener("click",(function(){null!==l&&(t.disabled=!1,clearInterval(l),l=null)}));
//# sourceMappingURL=01-color-switcher.6f3a4918.js.map
