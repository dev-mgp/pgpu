
var TheBoard = null;
var curPageId = -1;

$(document).ready(function() {
    
   
 document.addEventListener("deviceready", onDeviceReady(), true);
    
    
});

function onDeviceReady() {
    doResize();
	
	$(window).bind('resize', function() {
                   doResize();
                   });
	
	$(window).bind('orientationchange', function() {
                   doResize();
                   });
}


/**------------ For Control display size -----------------**/
function doResize() {
    
	var minRatio = 0.01;
	if(!this.boundObj)
	this.boundObj = $('.ABox');
    var dev_width = $('[data-role="page"]').first().width();
    var dev_hight = $('[data-role="page"]').first().height();
	var ratioW = dev_width / this.boundObj.width();
	var ratioH = dev_hight / this.boundObj.height();
	var ratio = ratioH > ratioW ? ratioW : ratioH;
	ratio = ratio > minRatio ? ratio : minRatio;

	var org_x = (dev_width - this.boundObj.width() * ratio )/2;
	this.boundObj.css('left',org_x+'px');

	this.boundObj.css('-webkit-transform', 'scale(' + ratio + ', ' + ratio + ')');
	this.boundObj.css('-webkit-transform-origin', '0% 0%');
	this.boundObj.css('-moz-transform', 'scale(' + ratio + ', ' + ratio + ')');
	this.boundObj.css('-moz-transform-origin', '0% 0%');
	this.boundObj.css('-ms-transform', 'scale(' + ratio + ', ' + ratio + ')');
	this.boundObj.css('-ms-transform-origin', '0% 0%');
    
    console.log("w="+$(window).width());
    console.log("h="+$(window).height());
    
}

$( document ).bind("mobileinit", function () {
	 
	console.log('mobileinit');
	$.mobile.ajaxEnabled = false;
	
});

$( document ).on( "vclick", "#page_00 #btn0", function( event, ui ) {

	$.mobile.changePage( "#page_01", {
		transition: "slide",
		reverse: false,
		changeHash: false
	});
});

$( document ).on( "vclick", "#page_00 #btn1", function( event, ui ) {

	$.mobile.changePage( "#page_10", {
//	$.mobile.changePage( "#page_08", {
		transition: "slide",
		reverse: false,
		changeHash: false
	});
});

$( document ).on( "vclick", "#page_00 #btn2", function( event, ui ) {

	$.mobile.changePage( "#page_11", {
		transition: "slide",
		reverse: false,
		changeHash: false
	});
});


/////////////////////////////////////////
$( document ).on( "pagehide", '[data-role="page"]',  function( event, ui ) {
	if(TheBoard) {
		TheBoard.reset();
		TheBoard = null;
	}
});
$( document ).on( "pageshow", '[data-role="page"]',  function( event, ui ) {
	curPageId = this.id;
	console.log("cur_page="+curPageId);
});
$( document ).on( "swiperight", '[data-role="page"]',  function( event, ui ) {
	go_prev_pg();
});
$( document ).on( "swipeleft", '[data-role="page"]',  function( event, ui ) {
	go_next_pg();
});

function go_prev_pg() {

	var target_pg = "";
	switch(curPageId) {
		case "page_00": return;
		case "page_01": target_pg = "page_00";	break;
		case "page_02": target_pg = "page_01";	break;
		case "page_03": target_pg = "page_02";	break;
		case "page_04": target_pg = "page_03";	break;
		case "page_05": target_pg = "page_04";	break;
		case "page_06": target_pg = "page_05";	break;
		case "page_07": target_pg = "page_06";	break;
		case "page_08": target_pg = "page_07";	break;
		case "page_09": target_pg = "page_08";	break;
		case "page_10": target_pg = "page_00";	break;
		case "page_11": target_pg = "page_00";	break;
		case "page_11_2": target_pg = "page_11";	break;
		case "page_11_3": target_pg = "page_11_2";	break;
		case "page_11_4": target_pg = "page_11_3";	break;
		case "page_11_5": target_pg = "page_11_4";	break;
		case "page_11_6": target_pg = "page_11_5";	break;
		case "page_11_7": target_pg = "page_11_6";	break;
	}
	$.mobile.changePage( "#"+target_pg, {
		transition: "slide",
		reverse: true,
		changeHash: false
	});
}

function go_next_pg() {

	var target_pg = "";
	switch(curPageId) {
		case "page_00": return;
		case "page_01": target_pg = "page_02";	break;
		case "page_02": target_pg = "page_03";	break;
		case "page_03": target_pg = "page_04";	break;
		case "page_04": target_pg = "page_05";	break;
		case "page_05": target_pg = "page_06";	break;
		case "page_06": target_pg = "page_07";	break;
		case "page_07": target_pg = "page_08";	break;
		case "page_08": target_pg = "page_00";	break;
		case "page_09": target_pg = "page_00";	break;
		case "page_10": return;
		case "page_11": target_pg = "page_11_2";	break;
		case "page_11_2": target_pg = "page_11_3";	break;
		case "page_11_3": target_pg = "page_11_4";	break;
		case "page_11_4": target_pg = "page_11_5";	break;
		case "page_11_5": target_pg = "page_11_6";	break;
		case "page_11_6": target_pg = "page_11_7";	break;
		case "page_11_7": return;
	}
	$.mobile.changePage( "#"+target_pg, {
		transition: "slide",
		reverse: false,
		changeHash: false
	});
}

/*
$('div.ui-page').live("swipeleft", function(){
});
*/

////////////////////////////////////////


$( document ).on( "pageshow", "#page_01", function( event, ui ) {
	
	TheBoard = new BoardJS("pg01");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addImage("content/screen_1.png", 340, 40, "", "", "appear", 1000, "linear", "top01",true)
	.addText("Supporting the use of flutiform&reg;", 40, 160, "", "split", 1000, "linear", "txt01",true)
	.addText("(fluticasone propionate/formoterol fumarate)", 40, 220, "", "split", 1000, "linear", "txt02",true)
	.addText("inhaler in the treatment of", 40, 280, "", "split", 1000, "linear", "txt03",true)
	.addText("patients with asthma", 40, 340, "", "split", 1000, "linear", "txt04",true)
	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv")
	.setStyle("prv", "cursor:pointer")
	.addEvent("prv", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt")
	.setStyle("nxt", "cursor:pointer")
	.addEvent("nxt", "click", go_next_pg)

	TheBoard.go()

});

$( document ).on( "pageshow", "#page_02", function( event, ui ) {
	
	TheBoard = new BoardJS("pg02");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("The economic burden of asthma", 140, 40, "", "zoom", 1000, "linear", "txt01",true)
	.addText("Roll over both of the icons to read information on the economic burden of asthma", 24, 100, "", "FromRight", 1000, "linear", "txt02",true)

	// box
	.addImage("content/screen_2_1.png", 140, 180, "", "", "zoom", 1000, "backOut", "box01",true)
	.addEvent("box01", "click", function () {
		TheBoard.changeImage("box01", "content/img1.png" )
	})
	.addImage("content/screen_2_2.png", 440, 180, "", "", "zoom", 1000, "backOut", "box02",true)
	.addEvent("box02", "click", function () {
		TheBoard.changeImage("box02", "content/img2.png" )
	})

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv02")
	.setStyle("prv02", "cursor:pointer")
	.addEvent("prv02", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt02")
	.setStyle("nxt02", "cursor:pointer")
	.addEvent("nxt02", "click", go_next_pg)

	TheBoard.go()
});

$( document ).on( "pageshow", "#page_03", function( event, ui ) {
	
	TheBoard = new BoardJS("pg03");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("Guidelines and treatment options", 140, 40, "", "FromTop", 1000, "linear", "txt01",true)
	.addText("The British Thoracic Society(BTS)/Scottish Intercollegiate Guidelines Network", 24, 100, "", "split", 1000, "linear", "txt02",true)
	.addText("(SIGN)guideline outlines a 'stepwise' treatment approach for asthma", 24, 130, "", "split", 1000, "linear", "txt03",true)

	// buttoons
	.addImage("content/screen_3_3.png", 50, 240, "", "", "appear", 500, "linear", "btn01")
	.addEvent("btn01", "click", function () {
		TheBoard.setStyle("b01", "display:block;")
		.setStyle("b02", "display:none")
		.setStyle("b03", "display:none")
		.setStyle("b04", "display:none")
		.setStyle("b05", "display:none")
	})
	.addImage("content/img3.png", 40, 160, "", "", "fade", 1, "linear", "b01")
	.setStyle("b01", "display:none;z-index:100")
	.delay(500)
	.addImage("content/screen_3_4.png", 200, 240, "", "", "appear", 500, "linear", "btn02")
	.addEvent("btn02", "click", function () {
		TheBoard.setStyle("b01", "display:none")
		.setStyle("b02", "display:block;")
		.setStyle("b03", "display:none")
		.setStyle("b04", "display:none")
		.setStyle("b05", "display:none")
	})
	.addImage("content/img4.png", 170, 160, "", "", "fade", 1, "linear", "b02")
	.setStyle("b02", "display:none;z-index:100")
	.delay(500)
	.addImage("content/screen_3_5.png", 350, 240, "", "", "appear", 500, "linear", "btn03")
	.addEvent("btn03", "click", function () {
		TheBoard.setStyle("b01", "display:none")
		.setStyle("b02", "display:none")
		.setStyle("b03", "display:block;")
		.setStyle("b04", "display:none")
		.setStyle("b05", "display:none")
	})
	.addImage("content/img5.png", 320, 160, "", "", "fade", 1, "linear", "b03")
	.setStyle("b03", "display:none;z-index:100")
	.delay(500)
	.addImage("content/screen_3_6.png", 500, 240, "", "", "appear", 500, "linear", "btn04")
	.addEvent("btn04", "click", function () {
		TheBoard.setStyle("b01", "display:none")
		.setStyle("b02", "display:none")
		.setStyle("b03", "display:none")
		.setStyle("b04", "display:block;")
		.setStyle("b05", "display:none")
	})
	.addImage("content/img6.png", 470, 160, "", "", "fade", 1, "linear", "b04")
	.setStyle("b04", "display:none;z-index:100")
	.delay(500)
	.addImage("content/screen_3_7.png", 650, 240, "", "", "appear", 500, "linear", "btn05")
	.addEvent("btn05", "click", function () {
		TheBoard.setStyle("b01", "display:none")
		.setStyle("b02", "display:none")
		.setStyle("b03", "display:none")
		.setStyle("b04", "display:none")
		.setStyle("b05", "display:block;")
	})
	.addImage("content/img7.png", 620, 150, "", "", "fade", 1, "linear", "b05")
	.setStyle("b05", "display:none;z-index:100")
	.delay(500)
	.addImage("content/screen3_1.png", 135, 200, "", "", "FromRight", 500, "linear")
	.addImage("content/screen3_2.png", 135, 280, "", "", "FromLeft", 500, "linear", true)
	.addImage("content/screen_3_8.png", 160, 160, "", "", "appear", 500, "linear", true)
	.addImage("content/screen_6_1.png", 100, 360, "", "", "appear", 500, "linear", true)

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv03")
	.setStyle("prv03", "cursor:pointer")
	.addEvent("prv03", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt03")
	.setStyle("nxt03", "cursor:pointer")
	.addEvent("nxt03", "click", go_next_pg)

	TheBoard.go()
	
});

$( document ).on( "pageshow", "#page_04", function( event, ui ) {
	
	TheBoard = new BoardJS("pg04");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("An introduction to flutiform", 200, 40, "", "zoom", 1000, "linear", "txt01",true)
	.addImage("content/screen_4_0.png", 25, 100, "", "", "appear", 1000, "linear", "",true)
	.addImage("content/screen_4_1.png", 140, 280, "", "", "zoom", 1000, "backOut", "",true)
	.addImage("content/screen_4_2.png", 320, 280, "", "", "zoom", 1000, "backOut", "",true)
	.addImage("content/screen_4_3.png", 500, 280, "", "", "zoom", 1000, "backOut", "",true)
	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv04")
	.setStyle("prv04", "cursor:pointer")
	.addEvent("prv04", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt04")
	.setStyle("nxt04", "cursor:pointer")
	.addEvent("nxt04", "click", go_next_pg)

	TheBoard.go()
});

$( document ).on( "pageshow", "#page_05", function( event, ui ) {
	
	TheBoard = new BoardJS("pg05");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("Summary of evidence", 400, 20, "", "appear", 1000, "linear", "txt01",true)
	.addImage("content/screen_5_1.png", 25, 60, "", "", "appear", 1000, "linear", "graph_summary_1",true)
	.addImage("content/screen_5_3.png", 25, 210, "", "", "appear", 1000, "linear", "graph_summary_2",true)
	
	.addImage("content/btn_5_1.png", 420, 345, "", "", "appear", 500, "linear", "btn05_01")
	.addEvent("btn05_01", "click", function () {
		TheBoard.setStyle("graph01", "display:block")
		.setStyle("graph02", "display:none")
		.remove("graph_summary_1")
		.remove("graph_summary_2")
		.addImage("content/screen_5_1.png", 25, 60, "", "", "appear", 1000, "linear", "graph_summary_1",true)
		.addImage("content/screen_5_3.png", 25, 210, "", "", "appear", 1000, "linear", "graph_summary_2",true)
	})
	.addImage("content/screen_5_2.png", 240, 50, "", "", "appear", 1000, "linear", "graph01")
	.setStyle("graph01", "display:block;z-index:100")

	.addImage("content/btn_5_2.png", 560, 345, "", "", "appear", 500, "linear", "btn_05_02")
	.addEvent("btn_05_02", "click", function () {
		TheBoard.setStyle("graph01", "display:none")
		.setStyle("graph02", "display:block")
		.remove("graph_summary_1")
		.remove("graph_summary_2")
		.addImage("content/screen_5_4.png", 25, 60, "", "", "appear", 1000, "linear", "graph_summary_1",true)
		.addImage("content/screen_5_6.png", 40, 298, "", "", "appear", 1000, "linear", "graph_summary_2",true)
	})
	.addImage("content/screen_5_5.png", 240, 50, "", "", "fade", 1000, "linear", "graph02")
	.setStyle("graph02", "display:none;z-index:100")
	.delay(500)

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv05")
	.setStyle("prv05", "cursor:pointer")
	.addEvent("prv05", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt05")
	.setStyle("nxt05", "cursor:pointer")
	.addEvent("nxt05", "click", go_next_pg)

	TheBoard.go()
});


$( document ).on( "pageshow", "#page_06", function( event, ui ) {
	
	TheBoard = new BoardJS("pg06");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("The case for flutiform in the treatment of asthma", 50, 20, "", "FromRight", 1000, "linear", "txt01",true)
	.addImage("content/screen_6_1.png", 100, 70, "", "", "FromRight", 1000, "linear", "",true)
	.addImage("content/screen_6_2.png", 100, 140, "", "", "fade", 1000, "linear", "",true)
	.addImage("content/screen_6_3.png", 100, 350, "", "", "FromRight", 1000, "linear", "",true)

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv06")
	.setStyle("prv06", "cursor:pointer")
	.addEvent("prv06", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt06")
	.setStyle("nxt06", "cursor:pointer")
	.addEvent("nxt06", "click", go_next_pg)

	TheBoard.go()
});

$( document ).on( "pageshow", "#page_07", function( event, ui ) {

	TheBoard = new BoardJS("pg07");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("flutiform has been accepted for use by the <br/> Scottish Medicines Consortium <sup>10</sup>", 80, 20, "", "zoom", 1000, "linear", "txt01", true)

	.addText("ADVICE: following an abbreviated submission:", 60, 120, "", "FromLeft", 1000, "linear", "txt02", true)
	.addImage("content/screen_7_3.png", 30, 150, "", "", "FromLeft", 1000, "linear", "",true)
	.addImage("content/screen_7_4.png", 30, 250, "", "", "FromLeft", 1000, "linear", "",true)
	.addImage("content/screen_7_5.png", 450, 140, "", "", "zoom", 1000, "backOut", "",true)

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv07")
	.setStyle("prv07", "cursor:pointer")
	.addEvent("prv07", "click", go_prev_pg)
	// Next
	.addImage("image/next2.png", 160, 490, "", "", "fade", 500, "linear", "nxt07")
	.setStyle("nxt07", "cursor:pointer")
	.addEvent("nxt07", "click", go_next_pg)

	TheBoard.go()
});


$( document ).on( "pageshow", "#page_08", function( event, ui ) {

	TheBoard = new BoardJS("pg08");
	TheBoard.reset()
	.delay(500)
	.addImage("content/back2.png", 20, 20, "", "", "zoom", 1000, "linear", "back2",true)
	.addText("Please complete the flutiform survey question", 60, 20, "", "FromTop", 1000, "linear", "txt01", true)
	.addText("As a result of viewing this presentation, would you <br/>"+
			"consider recommending flutiform as an alternative <br/>"+
			"inhaler to Seretide Evohaler in appropriate?", 
			60, 70, "", "fade", 1000, "linear", "txt02", true)
	.addText('<div style="text-align:left"><form action="#">'+
		'<input type="radio" name="radio1" style="width:30px;height:30px;" /> : Yes <br/>'+
		'<input type="radio" name="radio1" style="width:30px;height:30px;" /> : No <br/>'+
		'<input type="radio" name="radio1" style="width:30px;height:30px;" /> : Undecided <br/><br/>'+
		'<input type="button" style="width:100px;height:30px;" value="Submit" />'+
		'</form></div>', 60, 200, "", "", "fade", 1000, "linear", "qform")
	.delay(1000)

	// Prev
	.addImage("image/prev2.png", 100, 490, "", "", "fade", 500, "linear", "prv08")
	.setStyle("prv08", "cursor:pointer")
	.addEvent("prv08", "click", go_prev_pg)
	// Next
	.addImage("image/btn_first.png", 200, 510, "", "", "fade", 500, "linear", "nxt08")
	.setStyle("nxt08", "cursor:pointer")
	.addEvent("nxt08", "click", go_next_pg)

	TheBoard.go()
});


