input.onButtonPressed(Button.A, function () {
    led.unplot(spiller, 4)
    if (spiller > 0) {
        spiller += -1
    }
    led.plot(spiller, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(spiller, 4)
    if (spiller < 4) {
        spiller += 1
    }
    led.plot(spiller, 4)
})
let hull = 0
let spiller = 0
soundExpression.hello.play()
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()
basic.pause(200)
let poeng = 0
spiller = 2
led.plot(2, 4)
let liv = 3
while (liv >= 0) {
    hull = randint(0, 4)
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            if (xindex != hull) {
                led.plot(xindex, yindex)
            }
        }
        basic.pause(300)
        for (let xindex = 0; xindex <= 4; xindex++) {
            if (xindex != hull) {
                led.unplot(xindex, yindex)
            }
        }
    }
    if (spiller == hull) {
        poeng += 1
        soundExpression.happy.play()
        basic.pause(100)
    } else {
        soundExpression.sad.play()
        liv += -1
        basic.pause(100)
        if (liv == 0) {
            basic.pause(200)
            music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
            basic.showIcon(IconNames.Skull)
            basic.pause(1000)
            while (true) {
                basic.showNumber(poeng)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(100)
            }
        } else {
            led.plot(spiller, 4)
        }
    }
}
