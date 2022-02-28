input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
})
