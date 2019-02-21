var sidenavOpen = false;
var PC = '#5B8499';
var grey = '#9e9e9e';
var SC = '#26a69a';

console.log(WURFL.form_factor);

main();

function main(){

	

}


function sleep(fun,time){
	setTimeout(function () {
		fun();
	}, time);
}


var sidenav = M.Sidenav.init(sidenav, {
	onOpenStart: function () {
		sidenavOpen = true;
	},
	onCloseEnd: function () {
		sidenavOpen = false;
	}
});

var searchBar = document.getElementById('search');

monitorFocus(searchBar,function focus(){
		
		searchBar.style.borderBottom = 'none';
		searchBar.style.boxShadow = 'none';
		searchBar.parentElement.style.borderBottomColor = '#26a69a';
		
	},function focusout(){

		searchBar.parentElement.style.borderBottomColor = grey;

	});

function monitorFocus(e,focus){

	e.addEventListener("focus",focus);

}

function monitorFocus(e,focus,focusout){

	e.addEventListener("focus",focus);
	e.addEventListener("blur",focusout,true);

}

function monitorFocus(e,focus,focusout,blur){

	e.addEventListener("focus",focus);
	e.addEventListener("blur",focusout,true);
	e.addEventListener("blur",blur,false);
}


function login(){

	
}
