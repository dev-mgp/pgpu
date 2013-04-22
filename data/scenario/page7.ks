;Seventh Page
*start_7
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
[image storage=back2.png layer=2 page=back visible=true top=20 left=20]
[trans layer=2 time=2000]
[wt]
[image storage=screen_7_1.png layer=3 page=back visible=true top=30 left=110]
[trans layer=3 time=1]
[wt]
[image storage=screen_7_2.png layer=4 page=back visible=true top=120 left=60]
[trans layer=4 time=1]
[wt]
[image storage=screen_7_3.png layer=5 page=back visible=true top=150 left=30]
[trans layer=5 time=1]
[wt]
[image storage=screen_7_4.png layer=6 page=back visible=true top=250 left=30]
[trans layer=6 time=1]
[wt]
[image storage=screen_7_5.png layer=7 page=back visible=true top=140 left=450]
[trans layer=7 time=1]
[wt]
;[l]
;[cm]

*selpage 

; [image folder="image" layer="base" page="fore" storage=back.png]

[locate x=120 y=500 ]
[button graphic="prev1.png" target=*prev]

[locate x=200 y=515 ]
[button graphic="page8.png" target=*next]

[s]

*prev
[cm]

[call target="*start_6" storage="page6.ks"]

*next
[cm]
[call target="*prepare" storage="first.ks"]
;[l][r]

