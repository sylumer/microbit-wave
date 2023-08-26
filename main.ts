function option3 () {
    basic.showLeds(`
        . . . # #
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . # . .
        . # . # #
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # #
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # . . .
        . . # . .
        . . . # #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # . # #
        . . # . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        # . # . .
        . # . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(delay)
}
function option1 () {
    basic.showLeds(`
        . # . . .
        # . # . #
        # . # . #
        # . # . #
        . . . # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # . . . #
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . # .
        # . # . #
        # . # . #
        # . # . #
        . # . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        `)
    basic.pause(delay)
}
function option2 () {
    basic.showLeds(`
        . . . . #
        . . # # .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . # #
        . # # . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . # # .
        # # . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . # # . .
        # . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # # . . .
        . . # # .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # . . . .
        . # # . .
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . # # .
        . . . . #
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # # . .
        . . . # #
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . # # .
        . . . . #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # # . .
        . . . # #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        . . # # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        . # # . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . # # .
        # # . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . # # . .
        # . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . # # .
        # # . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . # #
        . # # . .
        # . . . .
        . . . . .
        `)
    basic.pause(delay)
}
let delay = 0
basic.clearScreen()
delay = 0
basic.forever(function () {
    option3()
})
