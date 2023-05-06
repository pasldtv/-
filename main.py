def on_button_pressed_a():
    global ускорение_X
    while игра == 1:
        яйцо.change(LedSpriteProperty.Y, 1)
        basic.pause(время)
        ускорение_X = input.acceleration(Dimension.X)
        корзина.set(LedSpriteProperty.X,
            2 + min(2, max(-2, Math.round(ускорение_X / 200))))
        if яйцо.get(LedSpriteProperty.Y) == 4:
            if корзина.is_touching(яйцо):
                game.add_score(1)
            else:
                basic.show_icon(IconNames.NO)
            яйцо.set(LedSpriteProperty.Y, 0)
            яйцо.set(LedSpriteProperty.X, randint(0, 4))
            basic.pause(время)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global игра
    игра = 0
    basic.show_number(game.score())
    basic.pause(500)
    game.game_over()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

ускорение_X = 0
игра = 0
время = 0
корзина: game.LedSprite = None
яйцо: game.LedSprite = None
яйцо = game.create_sprite(randint(0, 4), 0)
корзина = game.create_sprite(2, 4)
время = 300
очки = 0
игра = 1
basic.pause(время)
