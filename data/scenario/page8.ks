;8th Page
*start_8
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
[image storage=back2.png layer=20 page=back visible=true top=20 left=20]
[trans layer=20 time=2000]
[wt]

;[cm]
*selpage 
[locate x=240 y=150 ]
[button graphic="page8.png" target=*firstpage]
[s]

; @jump target="*start"
;[l][r]

