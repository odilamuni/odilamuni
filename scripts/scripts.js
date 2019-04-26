// external.js
console.log("iniciando");
var doc, bod, htm;
addEventListener('load', function(){
  doc = document; bod = doc.body; htm = doc.documentElement;
  addEventListener('scroll', function(){
    doc.querySelector('nav').style.backgroundColor = htm.scrollTop > 199 ? 'rgba(23, 155, 155,0.9)' : 'transparent';
  });
});