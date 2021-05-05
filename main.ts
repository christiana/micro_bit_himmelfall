function vis_intro () {
    soundExpression.hello.play()
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(200)
}
function vis_avslutning () {
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
    }
}
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
function rull_linje_ned () {
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            if (xindex != hull) {
                led.plot(xindex, yindex)
            }
        }
        basic.pause(pust)
        for (let xindex = 0; xindex <= 4; xindex++) {
            if (xindex != hull) {
                led.unplot(xindex, yindex)
            }
        }
    }
}
let hull = 0
let liv = 0
let pust = 0
let spiller = 0
let poeng = 0
poeng = 0
spiller = 2
led.plot(spiller, 4)
pust = 500
liv = 3
vis_intro()
while (liv > 0) {
    hull = randint(0, 4)
    rull_linje_ned()
    if (spiller == hull) {
        poeng += 1
        if (pust > 200) {
            pust += -20
        }
        soundExpression.happy.play()
    } else {
        soundExpression.sad.play()
        liv += -1
    }
    basic.pause(100)
    led.plot(spiller, 4)
}
vis_avslutning()
