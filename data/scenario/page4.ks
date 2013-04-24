;Fourth Page
*start_4
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
[image folder="fgimage" storage=back2.png layer=2 page=back visible=true top=20 left=20]
[trans layer=2 time=2000]
[wt]
[position top=40]
[font color=black size=30 bold="true"]
<div align="center" style="height:1px;">An introduction to flutiform[r]
[backlay]
[image folder="fgimage" storage=screen_4_0.png layer=3 page=back visible=true top=100 left=25]
[trans layer=3 time=1]
[wt]
[image folder="fgimage" storage=screen_4_1.png layer=4 page=back visible=true top=280 left=140]
[trans layer=4 time=1]
[wt]
[image folder="fgimage" storage=screen_4_2.png layer=5 page=back visible=true top=280 pos=center]
[trans layer=5 time=1]
[wt]
[image folder="fgimage" storage=screen_4_3.png layer=6 page=back visible=true top=280 left=500]
[trans layer=6 time=1]
[wt]
;[l]
;[cm]


*selpage 

; [image folder="fgimage" layer="base" page="fore" storage=back.png]

[locate x=120 y=500 ]
[button graphic="prev1.png" target=*prev]

[locate x=200 y=500 ]
[button graphic="next1.png" target=*next]

[s]

*prev
[cm]

[call target="*start_3" storage="page3.ks"]

*next
[cm]
[call target="*start_5" storage="page5.ks"]
;[l][r]

