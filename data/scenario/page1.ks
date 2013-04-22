*start 
*start_1 

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

; @wait time = 2000

;[call storage="key_mouse/key_mouse.ks"]
;[key_mouse]

[backlay]
[image storage=back2.png layer=1 page=back visible=true top=20 left=20 ]
[trans layer=1 page=back time=2000]
[wt]
[image storage=screen_1.png layer=2 page=back visible=true pos=center top="40"]
[trans layer=2 page=back method=crossfade time=1000]
[wt]
[position top=140]
[font color=rgb(243,142,57) size=25]
<div align="center">Supporting the use of flutiform&reg;[r]
<div align="center">(fluticasone propionate/formoterol fumarate)[r]
<div align="center">inhaler in the treatment of[r]
<div align="center">patients with asthma[r]
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

[call target="*prepare" storage="first.ks"]

*next
[cm]
[call target="*start_2" storage="page2.ks"]
;[l][r]

