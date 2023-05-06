input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    while (игра == 1) {
        яйцо.change(LedSpriteProperty.Y, 1)
        basic.pause(время)
        ускорение_X = input.acceleration(Dimension.X)
        корзина.set(LedSpriteProperty.X, 2 + Math.min(2, Math.max(-2, Math.round(ускорение_X / 200))))
        if (яйцо.get(LedSpriteProperty.Y) == 4) {
            if (корзина.isTouching(яйцо)) {
                game.addScore(1)
            } else {
                basic.showIcon(IconNames.No)
            }
            
            яйцо.set(LedSpriteProperty.Y, 0)
            яйцо.set(LedSpriteProperty.X, randint(0, 4))
            basic.pause(время)
        }
        
    }
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    игра = 0
    basic.showNumber(game.score())
    basic.pause(500)
    game.gameOver()
})
let ускорение_X = 0
let игра = 0
let время = 0
let корзина : game.LedSprite = null
let яйцо : game.LedSprite = null
яйцо = game.createSprite(randint(0, 4), 0)
корзина = game.createSprite(2, 4)
время = 300
let очки = 0
игра = 1
basic.pause(время)
