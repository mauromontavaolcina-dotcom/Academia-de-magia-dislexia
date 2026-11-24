var estrellas=0,app=document.getElementById("app");
function mezcla(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function chispas(el){if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)return;var r=el.getBoundingClientRect();for(var k=0;k<16;k++){var s=document.createElement("span");s.textContent=k%3?"✨":"⭐";s.style.cssText="position:fixed;left:"+(r.left+r.width/2)+"px;top:"+(r.top+r.height/3)+"px;font-size:"+(16+Math.random()*16)+"px;pointer-events:none;z-index:9;transition:transform .9s ease-out,opacity .9s";document.body.appendChild(s);(function(s){var a=Math.random()*6.283,d=80+Math.random()*120;requestAnimationFrame(function(){s.style.transform="translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px) rotate(180deg)";s.style.opacity="0"});setTimeout(function(){s.remove()},1000)})(s)}}
function decir(t){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="es-ES";u.rate=.8;speechSynthesis.speak(u)}catch(e){}}
function setEst(n){estrellas=n;document.getElementById("est").textContent="⭐ "+n}
function puntos(i,n){var h="";for(var k=0;k<n;k++)h+='<span class="pt'+(k<i?" on":"")+'"></span>';return '<div class="puntos">'+h+'</div>'}

var D1=[["🚢","barco","b"],["👆","dedo","d"],["🦆","pato","p"],["🧀","queso","q"],["👢","bota","b"],["🎲","dado","d"],["⛏️","pala","p"],["🚪","puerta","p"],["🐦","burbuja","b"],["🍰","dulce","d"]];
var D2=[["🦋","mariposa",["ma","ri","po","sa"]],["🏫","escuela",["es","cue","la"]],["🐴","caballo",["ca","ba","llo"]],["🪟","ventana",["ven","ta","na"]],["🪄","varita",["va","ri","ta"]],["🐘","elefante",["e","le","fan","te"]],["🌙","luna",["lu","na"]],["🧙","mago",["ma","go"]]];
var D3=[["📖","libro",["lirbo","bilro"]],["🐉","dragón",["dargón","gradón"]],["🌙","luna",["lnua","nula"]],["⭐","estrella",["esterlla","estrlela"]],["🏰","castillo",["castilol","catsillo"]],["🐱","gato",["gtao","tago"]],["🦉","búho",["bhúo","úbho"]],["🪄","varita",["vairta","vartia"]]];

var D1b=[["🐸","sapo","p",2],["🐴","caballo","b",2],["🔔","campana","p",3],["🪣","cubo","b",2],["☁️","nube","b",2],["🔍","lupa","p",2],["📻","radio","d",2],["🧼","jabón","b",2],["⛓️","cadena","d",2],["📦","paquete","q",2],["🧥","chaqueta","q",3]];
var D1c=[["💡","bombilla","b",3],["🥒","pepino","p",2],["🥁","tambor","b",3],["🐙","pulpo","p",3],["🫧","burbuja","b",3],["👆","dedo","d",2],["🥔","papa","p",2],["👶","bebé","b",2],["💎","diamante","d",0],["🎾","raqueta","q",2]];
var D2b=[["🦄","unicornio",["u","ni","cor","nio"]],["🧙‍♀️","hechicera",["he","chi","ce","ra"]],["🚀","cohete",["co","he","te"]],["🐢","tortuga",["tor","tu","ga"]],["🍅","tomate",["to","ma","te"]],["🍫","chocolate",["cho","co","la","te"]],["🚲","bicicleta",["bi","ci","cle","ta"]],["🐍","serpiente",["ser","pien","te"]]];
var D2c=[["🦛","hipopótamo",["hi","po","pó","ta","mo"]],["🚁","helicóptero",["he","li","cóp","te","ro"]],["🦏","rinoceronte",["ri","no","ce","ron","te"]],["🔭","telescopio",["te","les","co","pio"]],["🦇","murciélago",["mur","cié","la","go"]],["🦖","dinosaurio",["di","no","sau","rio"]],["🐞","mariquita",["ma","ri","qui","ta"]],["🎃","calabaza",["ca","la","ba","za"]]];
var D3b=[["🚢","barco",["darco","parco"]],["🦆","pato",["bato","dato"]],["👆","dedo",["bedo","deto"]],["🧀","queso",["pueso","dueso"]],["🍲","sopa",["soba","sodo"]],["🐸","sapo",["sabo","sado"]],["👢","bota",["dota","pota"]],["🎲","dado",["bado","pado"]],["🐙","pulpo",["bulpo","dulpo"]],["🥁","tambor",["tampor","tandor"]]];
var D3c=[["🦋","mariposa",["maripsoa","mairposa"]],["🔭","telescopio",["telesocpio","teslecopio"]],["🦖","dinosaurio",["dinosuario","dinoasurio"]],["🍫","chocolate",["choclolate","chocoalte"]],["🚲","bicicleta",["bicilceta","biciecleta"]],["🦄","unicornio",["unicronio","uniconrio"]],["🚁","helicóptero",["helicótpero","helicoptreo"]],["🎃","calabaza",["calbaza","cabalaza"]]];
var NIV={1:[D1,D1b,D1c],2:[D2,D2b,D2c],3:[D3,D3b,D3c]};
function menu(){
 app.innerHTML='<div class="burbuja">¡Hola, pequeña maga! Soy Lumi. Cada hechizo bien hecho te da una estrella. Si te equivocas, no pasa nada: prueba otra vez.</div>'+
 '<div class="menu">'+
 '<button id="m1">🔮 Letras gemelas<small>Elige la letra que falta: b, d, p o q</small></button>'+
 '<button id="m2">🧪 La poción de sílabas<small>Ordena las sílabas para hacer la palabra</small></button>'+
 '<button id="m3">📜 El pergamino correcto<small>Encuentra la palabra bien escrita</small></button></div>';
 document.getElementById("m1").onclick=function(){niveles(1)};
 document.getElementById("m2").onclick=function(){niveles(2)};
 document.getElementById("m3").onclick=function(){niveles(3)};
}

function niveles(m){var t=["Letras gemelas","La poción de sílabas","El pergamino correcto"][m-1];app.innerHTML='<div class="burbuja">'+t+': elige tu nivel. ¡Puedes jugarlos todos!</div><div class="menu"><button id="n0">🌱 Nivel 1<small>Aprendiz de magia</small></button><button id="n1">🌟 Nivel 2<small>Maga con varita</small></button><button id="n2">👑 Nivel 3<small>Gran hechicera</small></button></div><div class="fila"><button class="btn sec" id="vol">Volver</button></div>';for(var k=0;k<3;k++)(function(k){document.getElementById("n"+k).onclick=function(){jugar(m,k)}})(k);document.getElementById("vol").onclick=menu}

function jugar(modo,nivel){
 var data=mezcla(NIV[modo][nivel]).slice(0,6),i=0,ganadas=0;
 function fin(){
  app.innerHTML='<div class="tablero"><div class="emoji chispa">🏆</div><div class="palabra" style="font-size:1.8rem">¡Hechizo completado!</div><p>Has ganado '+ganadas+' de 6 estrellas en esta prueba.</p><div class="fila">'+(nivel<2?'<button class="btn" id="sn">Siguiente nivel</button>':'')+'<button class="btn sec" id="otra">Jugar otra vez</button><button class="btn sec" id="men">Menú</button></div></div>';
  document.getElementById("otra").onclick=function(){jugar(modo,nivel)};if(nivel<2)document.getElementById("sn").onclick=function(){jugar(modo,nivel+1)};
  document.getElementById("men").onclick=menu;
 }
 function sig(){i++;if(i>=6)fin();else ronda()}
 function acierto(palabra,primera){
  var m=document.getElementById("msg");
  if(primera){ganadas++;setEst(estrellas+1);m.textContent="✨ ¡Muy bien! "+palabra+" ⭐";}else{m.textContent="✨ ¡Lo conseguiste! "+palabra;}
  m.className="msg ok";document.getElementById("zona").classList.add("chispa");chispas(document.getElementById("zona"));decir(palabra);
  var f=document.getElementById("acc");f.innerHTML='<button class="btn" id="sg">Siguiente hechizo</button>';
  var b=document.getElementById("sg");b.onclick=sig;b.focus();
 }
 function fallo(txt){var m=document.getElementById("msg");m.textContent=txt;m.className="msg mal";var z=document.getElementById("zona");z.classList.remove("tiembla");void z.offsetWidth;z.classList.add("tiembla")}
 function ronda(){
  var d=data[i],primera=true;
  if(modo==1){
   var w=d[1],m=d[2],ix=d[3]||0;
   app.innerHTML=puntos(i,6)+'<div class="tablero" id="zona"><div class="emoji">'+d[0]+'</div><div class="palabra">'+w.slice(0,ix)+'<span class="hueco" id="hu">&nbsp;</span>'+w.slice(ix+1)+'</div><button class="btn sec" id="oir">🔊 Escuchar</button><p>¿Qué letra falta?</p><div class="ops" id="ops"></div><div class="msg" id="msg" aria-live="polite"></div><div class="fila" id="acc"></div></div>';
   document.getElementById("oir").onclick=function(){decir(w)};
   mezcla(["b","d","p","q"]).forEach(function(l){var o=document.createElement("button");o.className="op "+l;o.textContent=l;
    o.onclick=function(){if(l==m){document.getElementById("hu").textContent=l;document.querySelectorAll(".op").forEach(function(x){x.disabled=true});acierto(w,primera)}else{primera=false;o.disabled=true;fallo("Casi. Mira bien la forma y prueba otra vez.")}};
    document.getElementById("ops").appendChild(o)});
   decir(w);
  }else if(modo==2){
   var w2=d[1],sil=d[2],elegidas=[],pool=mezcla(sil.map(function(s,k){return{s:s,k:k}})),hecho=false;
   app.innerHTML=puntos(i,6)+'<div class="tablero" id="zona"><div class="emoji">'+d[0]+'</div><button class="btn sec" id="oir">🔊 Escuchar</button><p>Toca las sílabas en orden.</p><div class="slots" id="sl"></div><div class="ops" id="ops"></div><div class="msg" id="msg" aria-live="polite"></div><div class="fila" id="acc"></div></div>';
   document.getElementById("oir").onclick=function(){decir(w2)};
   function pinta(){
    var sl=document.getElementById("sl"),ops=document.getElementById("ops");sl.innerHTML="";ops.innerHTML="";
    for(var n=0;n<sil.length;n++){var c=document.createElement("div");c.className="slot";if(elegidas[n]){(function(n){var b=document.createElement("button");b.className="sil";b.textContent=elegidas[n].s;b.onclick=function(){if(hecho)return;pool.push(elegidas.splice(n,1)[0]);pinta()};c.appendChild(b)})(n)}sl.appendChild(c)}
    pool.forEach(function(p){var b=document.createElement("button");b.className="sil";b.textContent=p.s;b.onclick=function(){if(hecho)return;elegidas.push(pool.splice(pool.indexOf(p),1)[0]);pinta();
     if(elegidas.length==sil.length){if(elegidas.map(function(x){return x.s}).join("")==sil.join("")){hecho=true;acierto(w2,primera)}else{primera=false;fallo("Casi. Toca una sílaba para quitarla y prueba otra vez.")}}};ops.appendChild(b)});
   }
   pinta();decir(w2);
  }else{
   var w3=d[1],opts=mezcla([w3].concat(d[2]));
   app.innerHTML=puntos(i,6)+'<div class="tablero" id="zona"><div class="emoji">'+d[0]+'</div><button class="btn sec" id="oir">🔊 Escuchar</button><p>¿Cuál está bien escrita?</p><div class="ops" id="ops" style="flex-direction:column;align-items:center"></div><div class="msg" id="msg" aria-live="polite"></div><div class="fila" id="acc"></div></div>';
   document.getElementById("oir").onclick=function(){decir(w3)};
   opts.forEach(function(t){var o=document.createElement("button");o.className="op largo";o.textContent=t;
    o.onclick=function(){if(t==w3){document.querySelectorAll(".op").forEach(function(x){x.disabled=true});acierto(w3,primera)}else{primera=false;o.disabled=true;fallo("Casi. Lee despacio, letra por letra, y prueba otra vez.")}};
    document.getElementById("ops").appendChild(o)});
   decir(w3);
  }
 }
 ronda();
}
var ab=document.getElementById("alto");ab.onclick=function(){var on=document.documentElement.classList.toggle("alto");ab.setAttribute("aria-pressed",on)};
menu();
