
;-----------------------------------------------
; First 
; Center of Screen 
;-----------------------------------------------
[iscript]
var uAgent = navigator.userAgent.toLowerCase();
if (uAgent.indexOf("phone") == -1 && uAgent.indexOf("ipad") == -1 && uAgent.indexOf("android") == -1) {
    var tDisplay = {
        center: function() {
            $("#tyrano_base").css({
                "top": ($(window).height() - $("#tyrano_base").height()) / 2,
                "left":  ($(window).width() - $("#tyrano_base").width()) / 2
            });
        }
    };
    tDisplay.center();
    $(window).resize(function(){
        tDisplay.center();
    });
}
[endscript]
;-----------------------------------------------

*prepare 

;[freeimage layer = 0]
[freeimage layer = 1]
[freeimage layer = 2]
[freeimage layer = 3]
[freeimage layer = 4]
[freeimage layer = 5]
[freeimage layer = 6]
[freeimage layer = 7]
[freeimage layer = 8]
[freeimage layer = 9]
[freeimage layer = 10]
[freeimage layer = 11]
[freeimage layer = 12]
[freeimage layer = 13]
[freeimage layer = 14]
[freeimage layer = 15]
[freeimage layer=20]
[freeimage layer=21]

[hidemenubutton]
[title name="Test"]

[backlay]

@image storage ="back.png" page=fore layer=base
@wait time = 1000

[image folder="fgimage" layer="base" page="fore" storage=back.png]

[locate x=240 y=150 ]
[button graphic="first_1.png" target=*sub1]

[locate x=240 y=200 ]
[button graphic="first_2.png" target=*sub2]

[locate x=240 y=250 ]
[button graphic="first_3.png" target=*sub3]

[s]
;======================================================;

*sub1

[cm]

[call target="*start" storage="page1.ks"]
;======================================================;

*sub2
[cm]
[backlay]
[image folder="fgimage" storage=tap2_1.png layer=2 page=back visible=true left=20 top="40"]
[trans layer=2 time=1000]
[wt]
[l][cm]
[freeimage layer=2]
[backlay]
[image folder="fgimage" storage=tap2_2.png layer=3 page=back visible=true left=20 top="40"]
[trans layer=3 time=2]
[wt]
[l][cm]
[freeimage layer=2]
[freeimage layer=3]
@jump target="*prepare"
;======================================================;

*sub3
[cm]
[backlay]
[image folder="fgimage" storage=tab3_1.png layer=4 page=back visible=true left=40 top="20"]
[trans layer=4 time=1000]
[wt]
[l][cm]
[freeimage layer=4]
[backlay]
[image folder="fgimage" storage=tab3_2.png layer=5 page=back visible=true left=20 top="10"]
[trans layer=5 time=2]
[wt]
[l][cm]
[freeimage layer=5]
[backlay]
[image folder="fgimage" storage=tab3_3.png layer=6 page=back visible=true left=20 top="15"]
[trans layer=6 time=2]
[wt]
[l][cm]
[freeimage layer=6]
[backlay]
[image folder="fgimage" storage=tab3_4.png layer=7 page=back visible=true left=20 top="15"]
[trans layer=7 time=2]
[wt]
[l][cm]
[freeimage layer=7]
[backlay]
[image folder="fgimage" storage=tab3_5.png layer=8 page=back visible=true left=20 top="15"]
[trans layer=8 time=2]
[wt]
[l][cm]
[freeimage layer=8]
[backlay]
[image folder="fgimage" storage=tab3_6.png layer=9 page=back visible=true left=20 top="20"]
[trans layer=9 time=2]
[wt]
[l][cm]
[freeimage layer=9]
[backlay]
[image folder="fgimage" storage=tab3_7.png layer=10 page=back visible=true left=20 top="15"]
[trans layer=10 time=2]
[wt]
[l][cm]
[freeimage layer=4]
[freeimage layer=5]
[freeimage layer=6]
[freeimage layer=7]
[freeimage layer=8]
[freeimage layer=9]
[freeimage layer=10]
@jump target="*prepare"
;======================================================;

