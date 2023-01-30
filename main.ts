input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
function UpdateScore () {
    OLED.clear()
    basic.showString("P1: " + P1)
    OLED.newLine()
    basic.showString("P2: " + P2)
    OLED.newLine()
    basic.showString("Ties: " + Tie)
    OLED.newLine()
    basic.showString("Rounds: " + Rounds)
}
let Tie = 0
let Rounds = 0
let P2 = 0
let P1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("I wanna play a game - Saw")
P1 = 0
P2 = 0
Rounds = 0
Tie = 0
basic.pause(2000)
UpdateScore()
