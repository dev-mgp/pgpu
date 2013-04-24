;Second Page
*start_2
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
[trans layer=2 method="slide" time=2000]
[wt]
[position top=40]
[font color=rgb(243,142,57) size=30]
<div align="center">The economic burden of asthma[r]
[resetfont]
[font color="black" size="13"]
<div align="center">Roll over both of the icons to read information on the economic burden of asthma[r]
[backlay]
[image folder="fgimage" storage=screen_2_1.png layer=3 page=back visible=true top=200 left=100]
[trans layer=3 time=1]
[wt]
[backlay]
[image folder="fgimage" storage=screen_2_2.png layer=4 page=back visible=true top=200 left=400]
[trans layer=4 time=1]
[wt]
[image folder="fgimage" storage=img1.png layer=5 page=back visible=true top=150 left=80]
[trans layer=5 time=1]
[wt]
[image folder="fgimage" storage=img2.png layer=6 page=back visible=true top=150 left=380]
[trans layer=6 time=1]
[wt]
;[l]
; [cm]


*selpage 

; [image folder="fgimage" layer="base" page="fore" storage=back.png]

[locate x=120 y=500 ]
[button graphic="prev1.png" target=*prev]

[locate x=200 y=500 ]
[button graphic="next1.png" target=*next]

[s]

*prev
[cm]

[call target="*start_1" storage="page1.ks"]

*next
[cm]
[call target="*start_3" storage="page3.ks"]
;[l][r]
