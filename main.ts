function vis_avslutning () {
    if (liv == 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        while (true) {
            basic.showNumber(poeng)
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
        basic.pause(300)
        for (let xindex = 0; xindex <= 4; xindex++) {
            if (xindex != hull) {
                led.unplot(xindex, yindex)
            }
        }
    }
}
let hull = 0
let liv = 0
let spiller = 0
let poeng = 0
basic.pause(1000)
poeng = 0
spiller = 2
led.plot(spiller, 4)
liv = 3
while (liv > 0) {
    hull = randint(0, 4)
    rull_linje_ned()
    if (spiller == hull) {
        poeng += 1
    } else {
        liv += -1
    }
    led.plot(spiller, 4)
    basic.pause(100)
}
vis_avslutning()
