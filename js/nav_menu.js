function btn(){
				let menu=document.getElementById('nav_menu');
				if(menu.style.display=='none'){
					menu.style.display="block"
				}else{
					menu.style.display="none"
				}
			}


function bar(){
	let navbar=document.getElementById('navbar');
	if(navbar.style.display=='none'){
		navbar.style.display=="block;"
	}else{
		navbar.style.display='none'
	}
}


function prev(){
	let preve=document.getElementById('carusel_01');
	let next=document.getElementById('carusel_02');
	preve.style.display='block';
	next.style.display='none';




}
function next(){
	let preve=document.getElementById('carusel_01');
	let next=document.getElementById('carusel_02');
	next.style.display='block';
	preve.style.display='none'
}


function per_img(elem){
	elem.src="images/team/member03-k.jpg"
}
function next_img(elem){
	elem.src="images/team/member01-k.jpg"
}

function prev_img(elem){
	elem.src="images/team/member04-k.jpg"
}
function next_img02(elem){
	elem.src="images/team/member05-k.jpg"
}


let i=0;
let text='Junior Developer Tasks. What exactly does a Junior Developer do? Junior Developer Tasks. What exactly does a Junior Developer do?';
let speed=50;
function dev(){
	if(i<text.length){
		document.getElementById('person_demo').innerHTML+=text.charAt(i);
		i++;
		setTimeout(dev,speed);
	}
}