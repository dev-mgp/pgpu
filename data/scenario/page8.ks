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
[image folder="fgimage" storage=back2.png layer=20 page=back visible=true top=20 left=20]
[trans layer=20 time=2000]
[wt]
[image folder="fgimage" storage=page8_1.png layer=21 page=back visible=true top=40 left=85]
[trans layer=21 time=1]
[wt]
[html top=200 left=80]
    <input type='radio' name='radio1' style="width:30px;height:30px;"></input>
[endhtml]
[position top=190 left=115][font color=black]Yes[r]

[html top=235 left=80]
    <input type='radio' name='radio1' style="width:30px;height:30px;"></input>
[endhtml]
[font color=black]No[r]

[html top=270 left=80]
    <input type='radio' name='radio1' style="width:30px;height:30px;" value="Undecided"></input>
[endhtml]
[font color=black]Undecided

[html top=350 left=80]
    <input type='button' style="width:100px;height:30px;" value="Submit"></input>
[endhtml]

;[cm]
[locate x=200 y=515 ]
[button graphic="page8.png" target=*firstpage]
[s]

*firstpage
[cm]
[call target="*prepare" storage="first.ks"]
; @jump target="*start"
;[l][r]