let mySprite = sprites.create(img`
    . . f f . . . . . . . f f . . . 
    . f 1 1 f f f f f f f 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 d d d d d d d 1 1 f . . 
    . f 1 d d d d d d d d d 1 f . . 
    . f 1 d f d d d d d f d 1 f . . 
    . f 1 d d d f f f d d d 1 f . . 
    . f 1 1 d d d d d d d 1 1 f . . 
    f 7 7 1 1 1 1 1 1 1 1 1 7 7 f . 
    f d 7 9 9 9 9 9 9 9 9 9 7 d f . 
    f d 7 9 9 9 9 9 9 9 9 9 7 d f . 
    f d 9 9 9 9 9 9 9 9 9 9 9 d f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
    . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
    . f 8 8 8 f f f f f 8 8 8 f . . 
    . . f f f . . . . . f f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(150, 60)
mySprite.setVelocity(-50, 0)
let mySprite2 = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . f f 2 f f . . . . . . 
    . . . . f 2 5 5 5 2 f . . . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . f 1 9 9 9 9 9 9 9 1 f . . . 
    . . f 1 9 f 9 9 9 f 9 1 f . . . 
    . f 8 1 1 9 9 9 9 9 1 1 8 f . . 
    . f 8 1 1 1 f 9 f 1 1 1 8 f . . 
    . f 8 1 1 1 f 9 f 1 1 1 8 f . . 
    . f 8 8 1 1 1 f 1 1 1 8 8 f . . 
    . f 8 8 8 1 1 1 1 1 8 8 8 f . . 
    . f 9 8 8 8 1 1 1 8 8 8 9 f . . 
    . . f 8 8 8 8 8 8 8 8 8 f . . . 
    . . f 8 8 8 8 8 8 8 8 8 f . . . 
    . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(0, 0)
controller.moveSprite(mySprite, 100, 100)
mySprite2.follow(mySprite, 60)
