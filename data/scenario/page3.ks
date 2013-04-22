
;Third Page
*start_3
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

[backlay]
[image storage=back2.png layer=1 page=back visible=true top=20 left=20]
[trans layer=1 time=2000]
[wt]
[position top=40]
[font color=rgb(243,142,57) size=30]
<div align="center" style="height:1px;">Guidelines and treatment options[r]
[resetfont]
[font color="black" size="15"]
<div align="center" style="height:1px;">The British Thoracic Society(BTS)/Scottish Intercollegiate Guidelines Network[r]
<div align="center">(SIGN)guideline outlines a 'stepwise' treatment approach for asthma[r]
[backlay]
[image storage=screen_3_3.png layer=2 page=back visible=true top=240 left=50]
[trans layer=2 time=1]
[wt]
[image storage=screen_3_4.png layer=3 page=back visible=true top=240 left=200]
[trans layer=3 time=1]
[wt]
[image storage=screen_3_5.png layer=4 page=back visible=true top=240 left=350]
[trans layer=4 time=1]
[wt]
[image storage=screen_3_6.png layer=5 page=back visible=true top=240 left=500]
[trans layer=5 time=1]
[wt]
[image storage=screen_3_7.png layer=6 page=back visible=true top=240 left=650]
[trans layer=6 time=1]
[wt]
[image storage=screen3_1.png layer=7 page=back visible=true top=200 left=135]
[trans layer=7 time=1]
[wt]
[image storage=screen3_2.png layer=8 page=back visible=true top=280 left=135]
[trans layer=8 time=1]
[wt]
[image storage=screen_3_8.png layer=9 page=back visible=true top=160 left=160]
[trans layer=9 time=1]
[wt]
[image storage=text.png layer=10 page=back visible=true top=350 left=130]
[trans layer=10 time=1]
[wt]
[image storage=img3.png layer=11 page=back visible=true top=170 left=40]
[trans layer=11 time=1]
[l]
@layopt layer=11 visible=false
[freeimage layer=11]
[image storage=img4.png layer=12 page=back visible=true top=160 left=170]
[trans layer=12 time=1]
[l]
@layopt layer=12 visible=false
[freeimage layer=12]
[image storage=img5.png layer=13 page=back visible=true top=160 left=320]
[trans layer=13 time=1]
[l]
@layopt layer=13 visible=false
[freeimage layer=13]
[image storage=img6.png layer=14 page=back visible=true top=160 left=470]
[trans layer=14 time=1]
[l]
@layopt layer=14 visible=false
[freeimage layer=14]
[image storage=img7.png layer=15 page=back visible=true top=150 left=620]
[trans layer=15 time=1]
[wt]
;[l]
; [cm]


*selpage 

; [image folder="image" layer="base" page="fore" storage=back.png]

[locate x=120 y=500 ]
[button graphic="prev1.png" target=*prev]

[locate x=200 y=500 ]
[button graphic="next1.png" target=*next]

[s]

*prev
[cm]

[call target="*start_2" storage="page2.ks"]

*next
[cm]
[call target="*start_4" storage="page4.ks"]
;[l][r]

