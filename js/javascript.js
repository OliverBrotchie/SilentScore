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


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 200);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);


// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [

    new VF.StaveNote({ clef: "treble", keys: ["eb/5"], duration: "16" }).
        addAccidental(0, new VF.Accidental("b")),

    new VF.StaveNote({ clef: "treble", keys: ["d/5", "eb/4"], duration: "h" }).
        addDot(0),

    new VF.StaveNote({ clef: "treble", keys: ["c/5", "eb/5", "g#/5"], duration: "q" }).
        addAccidental(1, new VF.Accidental("b")).
        addAccidental(2, new VF.Accidental("#")).addDotToAll()
];

VF.Formatter.FormatAndDraw(context, stave, notes);