// external.js
console.log("iniciando");
var doc, bod, htm;
addEventListener('load', function(){
  doc = document; bod = doc.body; htm = doc.documentElement;
  addEventListener('scroll', function(){
    doc.querySelector('nav').style.backgroundColor = htm.scrollTop > 199 ? 'rgba(255, 255, 255, 0.9)' : 'transparent';
  });
});