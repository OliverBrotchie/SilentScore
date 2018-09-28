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

var canvas = document.getElementById("content");
var ctx = canvas.getContext("2d");
var canvasOffset = getOffset(canvas);
var offsetX = canvasOffset.x;
var offsetY = canvasOffset.y;
var startX;
var startY;
var prevX;
var prevY;
var prevStartX;
var prevStartY;
var isDown = false;

function drawLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

canvas.onmousedown = function (e)  {
    e.preventDefault();
    e.stopPropagation();
	
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);
    isDown = true;
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(prevStartX,prevStartY,prevX-prevStartX,prevY-prevStartY);
	
}

canvas.onmousemove = function (e)  {
    if (!isDown) {
        return;
    }
    e.preventDefault();
    e.stopPropagation();
	
	
    curX = parseInt(e.clientX - offsetX);
    curY = parseInt(e.clientY - offsetY);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(startX,startY,prevX-startX,prevY-startY);
	
	
    ctx.fillStyle = "#FFF";
	ctx.fillRect(startX,startY,curX-startX,curY-startY);
	
	
	prevX = curX;
	prevY = curY;
	
}
canvas.onmouseup = function (e)  {
    mouseUp(e);
	 isDown = false;
}

document.getElementById("content").addEventListener ("mouseout", mouseUp(), false);

function mouseUp(e){
	if (!isDown) {
        return;
    }
    e.preventDefault();
    e.stopPropagation();
	
	prevStartX=startX;
	prevStartY=startY;
}

function getOffset(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}