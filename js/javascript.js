var sidenavOpen = false;
var sidenav = document.querySelector('.sidenav');

		
var navInstance = M.Sidenav.init(sidenav, {
	onOpenStart: function () {
		sidenavOpen = true;
	},
	onCloseEnd: function () {
		sidenavOpen = false;
	}
});
		
		
function login(){
	if(window.screen.width>=601){
		document.getElementById("login").innerHTML = "Test User";
		} else {
		document.getElementById("loginMobile").innerHTML = "Test User";
	}
}
