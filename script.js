(function(){
var D=window.WEAPONS;
var GN={SC:'Simples · corpo a corpo',SD:'Simples · à distância',MC:'Marciais · corpo a corpo',MD:'Marciais · à distância'};
var R={'cano duplo':w=>/^(Mosquete|Pistola)$/.test(w.n),'linha tripla':w=>/^(Arco|Besta)/.test(w.n),'empunhadura leve':w=>!w.duas&&!w.pes&&!w.leve,'haste de arremesso':w=>!w.duas&&!w.pes&&!w.arr,'empunhadura versátil':w=>!w.duas&&!w.pes&&!w.vers&&w.s<=(w.t=='S'?8:10),'gume serrilhado':w=>w.tp=='Cortante','pomo de impacto':w=>w.tp!='Contundente','ponta perfurante reforçada':w=>w.tp=='Perfurante','cabo alongado':w=>!w.ext};
var cols=document.querySelector('.cols'),ov=document.getElementById('ov'),fs=document.getElementById('fs'),fns=document.getElementById('fns'),fn=document.getElementById('fn'),fp=document.getElementById('fp'),fd=document.getElementById('fd'),dragging=false,mode='add',tgt=null;
var CT='<span class="ctl"><button class="ib" data-a="e" title="Editar">✎</button><button class="ib" data-a="d" title="Excluir">✕</button></span>';
var HD='<b class="grip" title="Arraste">⠿</b><span class="nm"></span><span class="pr"></span>'+CT;
var secs=()=>[].slice.call(cols.querySelectorAll('.sec'));
function h2(el,t){el.innerHTML='<span class="t"></span>'+CT;el.firstChild.textContent=t}
function mkSec(t){var s=document.createElement('div'),h=document.createElement('h2');s.className='sec';h2(h,t);s.appendChild(h);return s}
function set(m,n,p,d,a){m.classList.toggle('arc',a);m.querySelector('.nm').textContent=n;p=p.trim();m.querySelector('.pr').textContent=/^\d+$/.test(p)?p+' po':p;[].slice.call(m.querySelectorAll('p')).forEach(x=>x.remove());d.split(/\n\s*\n/).forEach(b=>{b=b.trim();if(!b)return;var e=document.createElement('p');if(b[0]==='*'&&b[1]!=='*'){e.className='r';b=b.slice(1).trim()}b.split(/\*\*(.+?)\*\*/).forEach((x,i)=>{if(!x)return;if(i%2){var B=document.createElement('b');B.textContent=x;e.appendChild(B)}else e.appendChild(document.createTextNode(x))});m.appendChild(e)})}
function ser(m){return [].map.call(m.querySelectorAll('p'),p=>(p.className=='r'?'* ':'')+[].map.call(p.childNodes,n=>n.nodeName=='B'?'**'+n.textContent+'**':n.textContent).join('')).join('\n\n')}
function mk(n,p,d,a){var m=document.createElement('div'),h=document.createElement('h3');m.className='m';h.innerHTML=HD;m.appendChild(h);set(m,n,p,d,a);return m}
/* sidebar */
document.querySelectorAll('#sb').forEach(x=>x.remove());var sb=document.createElement('div');sb.id='sb';sb.innerHTML='<h5></h5><table></table>';document.body.appendChild(sb);
var tb=sb.querySelector('table'),rows=[];tb.insertRow().innerHTML='<th>Nome<th>Dano<th>Propriedades<th>Maestria<th>Peso<th>Custo';
for(var k in D){var g=tb.insertRow();g.className='g';var c=g.insertCell();c.colSpan=6;c.textContent=GN[k];D[k].split(';').forEach(s=>{var a=s.split('|'),p=a[2],w={n:a[0],t:k[0],r:k[1],tp:a[1].split(' ').pop(),s:+(a[1].match(/d(\d+)/)||[])[1],leve:/Leve/.test(p),pes:/Pesada/.test(p),duas:/Duas/.test(p),arr:/Arremesso/.test(p),vers:/Versátil/.test(p),ext:/Extensão/.test(p)},r=tb.insertRow();a.forEach(x=>r.insertCell().textContent=x);rows.push({e:r,w:w})})}
var sel=null;function ovr(m){try{var o=JSON.parse(m.dataset.man||'{}');return Array.isArray(o)?{}:o}catch(e){return{}}}
function desel(){sel=null;sb.className='';document.querySelectorAll('.m.sel').forEach(x=>x.classList.remove('sel'))}
function auto(m,w){var ti=m.closest('.sec').querySelector('.t').textContent.toLowerCase(),nm=m.querySelector('.nm').textContent.toLowerCase().trim();return !/foco/.test(ti)&&(!/simples/.test(ti)||w.t=='S')&&(!/marciais/.test(ti)||w.t=='M')&&(!/dist/.test(ti)||w.r=='D')&&(!/corpo/.test(ti)||w.r=='C')&&(!R[nm]||R[nm](w))}
function compat(m,w){var mn=ovr(m);return w.n in mn?!!mn[w.n]:auto(m,w)}
var lastX=null;
function show(m,keep){sel=m;document.querySelectorAll('.m.sel').forEach(x=>x.classList.remove('sel'));m.classList.add('sel');
var mn=ovr(m),n=0,first=null,st=sb.scrollTop,f=w=>auto(m,w);
rows.forEach(r=>{var nme=r.e.cells[0].textContent,k=nme in mn,o=k?mn[nme]:f(r.w);r.a=f(r.w);r.e.className=(o?'ok':'no')+(k?' man':'');if(o){n++;first=first||r.e}});
var b=m.getBoundingClientRect();sb.querySelector('h5').textContent=m.querySelector('.nm').textContent+' — '+n+' compatíveis · '+Object.keys(mn).length+' ajustes manuais';
var hs=sb.classList.contains('l')||sb.classList.contains('r'),sd=keep&&hs?(sb.classList.contains('l')?'l':'r'):((lastX==null?b.left+b.width/2:lastX)>innerWidth/2?'l':'r');sb.className='on '+sd+(m.classList.contains('arc')?' arc':'');sb.scrollTop=keep?st:(first?Math.max(0,first.offsetTop-50):0)}
var hb=document.createElement('div');hb.className='hint';hb.innerHTML='<button class="cb">Restaurar regras</button>Clique em uma arma para alternar se ela é compatível (✎ = ajuste manual).';sb.insertBefore(hb,tb);
hb.firstChild.onclick=()=>{if(sel&&sel.isConnected){sel.dataset.man='{}';show(sel,1)}};
tb.addEventListener('click',e=>{var tr=e.target.closest('tr'),r=rows.filter(x=>x.e===tr)[0];if(!r||!sel||!sel.isConnected)return;var o=ovr(sel),nme=tr.cells[0].textContent,nw=!tr.classList.contains('ok');if(nw===r.a)delete o[nme];else o[nme]=nw;sel.dataset.man=JSON.stringify(o);show(sel,1)});
document.addEventListener('click',e=>{var t=e.target;if(!t.closest||t.closest('#sb,#ov,.ib,.ft,#sp'))return;var m=t.closest('.m');if(m&&!dragging){lastX=e.clientX;show(m)}else desel()});
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&!ov.classList.contains('on'))desel()});
/* drag */
document.addEventListener('pointerdown',e=>{var g=e.target.closest&&e.target.closest('.grip');if(!g)return;e.preventDefault();var m=g.closest('.m'),r=m.getBoundingClientRect(),ox=e.clientX-r.left,oy=e.clientY-r.top,ph=document.createElement('div');dragging=true;sb.className='';ph.className='ph';ph.style.height=r.height+'px';m.parentNode.insertBefore(ph,m);m.classList.add('drag');m.style.width=r.width+'px';m.style.left=r.left+'px';m.style.top=r.top+'px';document.body.appendChild(m);g.setPointerCapture(e.pointerId);
var mv=ev=>{edgeFlip(ev.clientX);m.style.left=(ev.clientX-ox)+'px';m.style.top=(ev.clientY-oy)+'px';var t=document.elementFromPoint(ev.clientX,ev.clientY);if(!t)return;var c=t.closest('.m,.ph'),s=t.closest('.sec');if(c&&c!==ph){var b=c.getBoundingClientRect();c.parentNode.insertBefore(ph,ev.clientY<b.top+b.height/2?c:c.nextSibling)}else if(!c&&s)s.appendChild(ph)};
var up=()=>{edgeFlip(null);g.removeEventListener('pointermove',mv);g.removeEventListener('pointerup',up);g.removeEventListener('pointercancel',up);m.classList.remove('drag');m.style.cssText='';ph.parentNode.insertBefore(m,ph);ph.remove();dragging=false;if(sel&&sel.isConnected)show(sel,1)};
g.addEventListener('pointermove',mv);g.addEventListener('pointerup',up);g.addEventListener('pointercancel',up)});
/* panel */
var pn=ov.querySelector('.pn'),fa0=document.createElement('label');fa0.innerHTML='<input type="checkbox" id="fa" style="width:auto;margin-right:6px">Modificação arcana';fa0.style.cssText='display:flex;align-items:center;margin-top:10px;font-size:13px';if(!document.getElementById('fa'))pn.insertBefore(fa0,pn.lastElementChild);
var ch=[].slice.call(pn.children),fa=document.getElementById('fa');ch[9].textContent='Descrição (linha em branco = novo parágrafo; * no início = itálico; **negrito**)';
function setMode(md,t){mode=md;ch[0].textContent=t;var S=md=='es'?[3,4]:[1,2,5,6,7,8,9,10,11].concat(md=='add'&&fs.value==='new'?[3,4]:[]);ch.forEach((c,i)=>c.style.display=(i==0||i==12||S.indexOf(i)>=0)?'':'none')}
function opts(n){fs.innerHTML='';secs().forEach((s,i)=>{var o=document.createElement('option');o.value=i;o.textContent=s.querySelector('.t').textContent;fs.appendChild(o)});if(n){var o=document.createElement('option');o.value='new';o.textContent='+ Nova seção';fs.appendChild(o)}}
fs.onchange=()=>{if(mode=='add')setMode('add','Adicionar')};
function close(){ov.classList.remove('on');[fns,fn,fp,fd].forEach(i=>i.value='');fa.checked=false;if(sel&&sel.isConnected)show(sel,1)}
document.getElementById('open').onclick=()=>{opts(true);setMode('add','Adicionar');ov.classList.add('on')};
document.getElementById('cx').onclick=close;ov.addEventListener('pointerdown',e=>{if(e.target===ov)close()});
document.getElementById('ok').onclick=()=>{
if(mode=='es'){var t=fns.value.trim();if(!t)return fns.focus();tgt.querySelector('.t').textContent=t;return close()}
var n=fn.value.trim();
if(mode=='em'){if(!n)return fn.focus();set(tgt,n,fp.value,fd.value,fa.checked);var s=secs()[+fs.value];if(s&&s!==tgt.closest('.sec'))s.appendChild(tgt);return close()}
var s;if(fs.value==='new'){var t=fns.value.trim();if(!t)return fns.focus();s=mkSec(t);cols.appendChild(s)}else s=secs()[+fs.value];
if(n)s.appendChild(mk(n,fp.value,fd.value,fa.checked));close()};
/* edit / delete */
document.addEventListener('click',e=>{var b=e.target.closest&&e.target.closest('.ib');if(!b)return;var m=b.closest('.m'),el=m||b.closest('.sec');
if(b.dataset.a=='d'){if(!b.classList.contains('arm')){b.classList.add('arm');b.dataset.t=b.textContent;b.textContent='Excluir?';setTimeout(()=>{b.classList.remove('arm');b.textContent=b.dataset.t},2500)}else{if(sel&&el.contains(sel))desel();el.remove()}return}
tgt=el;if(m){opts(false);fs.value=secs().indexOf(m.closest('.sec'));fn.value=m.querySelector('.nm').textContent;var p=m.querySelector('.pr').textContent,mm=p.match(/^(\d+) po$/i);fp.value=mm?mm[1]:p;fd.value=ser(m);fa.checked=m.classList.contains('arc');setMode('em','Editar modificação')}
else{fns.value=el.querySelector('.t').textContent;setMode('es','Editar seção')}ov.classList.add('on')});
/* persistencia */
var KEY='armas-mods-v1',VER=String(window.MODS_VERSION||1),tm=null,sv=null;
try{if(localStorage.getItem(KEY+'v')===VER)sv=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!sv||!sv.length)sv=window.MODS||[];
cols.innerHTML='';
if(sv.length){sv.forEach(x=>{var s=mkSec(x.t);cols.appendChild(s);x.m.forEach(y=>{var m=mk(y.n,y.p,y.d,y.a);if(y.k&&!Array.isArray(y.k)&&Object.keys(y.k).length)m.dataset.man=JSON.stringify(y.k);s.appendChild(m)})})}
function cur(){return secs().map(s=>({t:s.querySelector('.t').textContent,m:[].slice.call(s.querySelectorAll(':scope>.m')).map(m=>({n:m.querySelector('.nm').textContent,p:m.querySelector('.pr').textContent,d:ser(m),a:m.classList.contains('arc'),k:ovr(m)}))}))}
function save(){if(dragging||document.querySelector('body>.m.drag'))return;try{localStorage.setItem(KEY+'v',VER);localStorage.setItem(KEY,JSON.stringify(cur()))}catch(e){}}
new MutationObserver(()=>{clearTimeout(tm);tm=setTimeout(save,300)}).observe(cols,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['data-man','class']});
var rb=document.getElementById('reset'),eb=document.getElementById('exp');
rb.onclick=()=>{if(!rb.dataset.a){rb.dataset.a=1;rb.textContent='Confirmar?';setTimeout(()=>{delete rb.dataset.a;rb.textContent='\u21ba'},2500);return}try{localStorage.removeItem(KEY);localStorage.removeItem(KEY+'v')}catch(e){}location.reload()};
eb.onclick=()=>{var t='window.MODS_VERSION = '+(+VER+1)+';\nwindow.MODS = '+JSON.stringify(cur(),null,1)+';\n',a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/javascript'}));a.download='mods.js';a.click()};
/* ===== paginação ===== */
var vp=document.querySelector('.vp'),pgn=document.getElementById('pgn'),pv=document.getElementById('prev'),nx=document.getElementById('next'),GAP=30,page=0,pages=1,stride=0,raf=0;
function go(p,inst){page=Math.max(0,Math.min(pages-1,p));cols.style.transition=inst?'none':'';cols.style.transform='translateX('+(-page*stride)+'px)';pgn.textContent=(page+1)+' / '+pages;pv.disabled=page<=0;nx.disabled=page>=pages-1}
function layout(){var W=vp.clientWidth,H=vp.clientHeight;if(W<=0||H<=0)return;var n=innerWidth<=700?1:2,cw=(W-(n-1)*GAP)/n,c=cols.style;
c.transition='none';c.transform='none';c.width=W+'px';c.height=H+'px';c.columnCount=n;c.columnWidth=(Math.floor(cw*100)/100)+'px';c.columnGap=GAP+'px';
var total=Math.max(1,Math.round((vp.scrollWidth+GAP)/(cw+GAP)));pages=Math.max(1,Math.ceil(total/n));stride=W+GAP;go(page,true)}
function sched(){cancelAnimationFrame(raf);raf=requestAnimationFrame(refresh)}
new MutationObserver(sched).observe(cols,{childList:true,subtree:true,characterData:true});
new ResizeObserver(sched).observe(vp);addEventListener('resize',sched);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sched);
pv.onclick=()=>go(page-1);nx.onclick=()=>go(page+1);
document.addEventListener('keydown',e=>{if(ov.classList.contains('on')||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key=='ArrowRight'||e.key=='PageDown'){go(page+1);e.preventDefault()}else if(e.key=='ArrowLeft'||e.key=='PageUp'){go(page-1);e.preventDefault()}});
var sx=null,sy=0;
vp.addEventListener('touchstart',e=>{sx=e.target.closest('.grip')||e.touches.length>1?null:e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
vp.addEventListener('touchend',e=>{if(sx==null)return;var t=e.changedTouches[0],dx=t.clientX-sx;if(Math.abs(dx)>60&&Math.abs(t.clientY-sy)<50)go(page+(dx<0?1:-1));sx=null},{passive:true});
vp.addEventListener('scroll',()=>{vp.scrollLeft=0;vp.scrollTop=0});
cols.addEventListener('focusin',e=>{var r=e.target.getBoundingClientRect(),v=vp.getBoundingClientRect(),x=r.left-v.left+vp.scrollLeft+page*stride+4;vp.scrollLeft=0;var p=Math.floor(x/stride);if(p!==page)go(p)});
var ez=0,et=null;
function edgeFlip(x){var d=0;if(x!=null){var r=vp.getBoundingClientRect();d=x<r.left+36?-1:x>r.right-36?1:0}if(d===ez)return;ez=d;clearInterval(et);et=null;if(d)et=setInterval(()=>go(page+d),900)}

/* ===== busca ===== */
var sp=document.getElementById('sp'),qi=document.getElementById('q'),wi=document.getElementById('qw'),rs=document.getElementById('rs'),wn=document.getElementById('wn'),emp=document.getElementById('emp'),sbtn=document.getElementById('srch'),arcF='',active=false;
function fold(t){return String(t).split('').map(c=>{var x=(c.normalize('NFD')[0]||c),l=x.toLowerCase();return l.length==1?l:x}).join('')}
function mtext(m){return m.querySelector('.nm').textContent+' '+m.querySelector('.pr').textContent+' '+[].map.call(m.querySelectorAll('p'),p=>p.textContent).join(' ')}
var dl=document.getElementById('wl');rows.forEach(r=>{var o=document.createElement('option');o.value=r.w.n;dl.appendChild(o)});
function words(){return fold(qi.value).split(/\s+/).filter(Boolean)}
function hl(){if(!window.CSS||!CSS.highlights||typeof Highlight=='undefined')return;try{CSS.highlights.delete('srch');var q=words();if(!q.length)return;var rg=[];
[].forEach.call(cols.querySelectorAll('.m:not([hidden])'),m=>{var w=document.createTreeWalker(m,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentNode.closest('.ctl,.grip')?2:1}),n;while(n=w.nextNode()){var t=fold(n.data);q.forEach(k=>{for(var i=t.indexOf(k);i>=0;i=t.indexOf(k,i+k.length)){var r=document.createRange();r.setStart(n,i);r.setEnd(n,i+k.length);rg.push(r)}})}});
if(rg.length)CSS.highlights.set('srch',new Highlight(...rg))}catch(e){}}
function apply(){var q=words(),wq=fold(wi.value).trim(),ws=wq?rows.map(r=>r.w).filter(w=>fold(w.n).indexOf(wq)>=0):null,vis=0,all=0;
active=!!(q.length||arcF||wq);
[].forEach.call(cols.querySelectorAll('.m'),m=>{all++;var ok=true;
if(arcF&&(arcF=='a')!==m.classList.contains('arc'))ok=false;
if(ok&&q.length){var t=fold(mtext(m));ok=q.every(w=>t.indexOf(w)>=0)}
if(ok&&ws)ok=ws.some(w=>compat(m,w));
m.hidden=!ok;if(ok)vis++});
secs().forEach(s=>s.hidden=active&&!s.querySelector(':scope>.m:not([hidden])'));
if(sel&&sel.hidden)desel();
rs.textContent=active?vis+' de '+all+' modificadores':all+' modificadores';
wn.textContent=wq?(ws.length?' · '+ws.length+(ws.length>1?' armas correspondem':' arma corresponde'):' · nenhuma arma encontrada'):'';
emp.hidden=!(active&&!vis);sbtn.classList.toggle('on',active);layout();hl()}
function refresh(){if(active)apply();else{layout();hl()}}
function search(){page=0;apply()}
qi.addEventListener('input',search);wi.addEventListener('input',search);wi.addEventListener('change',search);
document.getElementById('sg').addEventListener('click',e=>{var b=e.target.closest('button');if(!b)return;arcF=b.dataset.v;[].forEach.call(document.getElementById('sg').children,x=>x.classList.toggle('on',x===b));search()});
document.getElementById('clr').onclick=()=>{qi.value=wi.value='';arcF='';[].forEach.call(document.getElementById('sg').children,(x,i)=>x.classList.toggle('on',i==0));search();qi.focus()};
function togSp(on){sp.classList.toggle('on',on);sbtn.setAttribute('aria-expanded',on);if(on){if(!active)rs.textContent=cols.querySelectorAll('.m').length+' modificadores';qi.focus();qi.select()}}
sbtn.onclick=()=>togSp(!sp.classList.contains('on'));
document.getElementById('spx').onclick=()=>togSp(false);
sp.addEventListener('keydown',e=>{if(e.key=='Escape'){togSp(false);sbtn.focus()}});
refresh();

})();
