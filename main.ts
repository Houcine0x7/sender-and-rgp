input.onButtonPressed(Button.A, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Purple))
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Orange))
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Violet))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Yellow))
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Indigo))
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(neopixel.colors(NeoPixelColors.Blue))
})
radio.setGroup(1)
