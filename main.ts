let speed_X = 0
let play = 0
let time = 0
let basket : game.LedSprite = null
let egg : game.LedSprite = null
egg = game.createSprite(randint(0, 4), 0)
basket = game.createSprite(2, 4)
time = 300
let score = 0
play = 1
basic.pause(time)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    while (play == 1) {
        egg.change(LedSpriteProperty.Y, 1)
        basic.pause(time)
        speed_X = input.acceleration(Dimension.X)
        basket.set(LedSpriteProperty.X, 2 + Math.min(2, Math.max(-2, Math.round(speed_X / 200))))
        if (egg.get(LedSpriteProperty.Y) == 4) {
            if (basket.isTouching(egg)) {
                game.addScore(1)
            } else {
                basic.showIcon(IconNames.No)
            }
            
            egg.set(LedSpriteProperty.Y, 0)
            egg.set(LedSpriteProperty.X, randint(0, 4))
            basic.pause(time)
        }
        
    }
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    play = 0
    basic.showNumber(game.score())
    basic.pause(500)
    game.gameOver()
})
