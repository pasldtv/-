speed_X = 0
play = 0
time = 0
basket: game.LedSprite = None
egg: game.LedSprite = None
egg = game.create_sprite(randint(0, 4), 0)
basket = game.create_sprite(2, 4)
time = 300
score = 0
play = 1
basic.pause(time)



def on_button_pressed_a():
    global speed_X
    while play == 1:
        egg.change(LedSpriteProperty.Y, 1)
        basic.pause(time)
        speed_X = input.acceleration(Dimension.X)
        basket.set(LedSpriteProperty.X,
            2 + min(2, max(-2, Math.round(speed_X / 200))))
        if egg.get(LedSpriteProperty.Y) == 4:
            if basket.is_touching(egg):
                game.add_score(1)
            else:
                basic.show_icon(IconNames.NO)
            egg.set(LedSpriteProperty.Y, 0)
            egg.set(LedSpriteProperty.X, randint(0, 4))
            basic.pause(time)
input.on_button_pressed(Button.A, on_button_pressed_a)



def on_button_pressed_ab():
    global play
    play = 0
    basic.show_number(game.score())
    basic.pause(500)
    game.game_over()
input.on_button_pressed(Button.AB, on_button_pressed_ab)


