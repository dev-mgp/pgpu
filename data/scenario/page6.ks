;Sixth Page
*start_6
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
[image storage=back2.png layer=4 page=back visible=true top=20 left=20]
[trans layer=4 time=2000]
[wt]
[position top=20 left=50]
[font color=rgb(243,142,57) size=22]
The case for flutiform in the treatment of asthma[r]
[backlay]
[image storage=screen_6_1.png layer=5 page=back visible=true top=70 left=100]
[trans layer=5 time=1]
[wt]
[image storage=screen_6_2.png layer=6 page=back visible=true top=140 left=100]
[trans layer=6 time=1]
[wt]
[image storage=screen_6_3.png layer=7 page=back visible=true top=350 left=100]
[trans layer=7 time=1]
[wt]
;[l]
;[cm]

*selpage 

; [image folder="image" layer="base" page="fore" storage=back.png]

[locate x=120 y=500 ]
[button graphic="prev1.png" target=*prev]

[locate x=200 y=500 ]
[button graphic="next1.png" target=*next]

[s]

*prev
[cm]

[call target="*start_5" storage="page5.ks"]

*next
[cm]
[call target="*start_7" storage="page7.ks"]
;[l][r]

