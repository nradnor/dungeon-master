namespace SpriteKind {
    export const ghost = SpriteKind.create()
    export const MOB = SpriteKind.create()
    export const BOSS = SpriteKind.create()
    export const a = SpriteKind.create()
    export const b = SpriteKind.create()
    export const c = SpriteKind.create()
    export const object = SpriteKind.create()
    export const Ruin = SpriteKind.create()
    export const obeject2 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a a 
a a a a a c a a a a a a a a a a 
a a a c a a a a a a a a a a a a 
a a a a a a a a a a a c a a a a 
a a a a a a a c a a a a a a a a 
a a a a c a a a a a a c a a a a 
a a a a a a a a a a a a a a a a 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a c a a a a a a a a a a a a 
a a a a a a a c a a a a a c a a 
a a a c a a a a a a a a a a a a 
a a a a a a a a a a c a a a a a 
a a a a a a a c a a a a a a a a 
a a a a a a a a c a a a a a a a 
`
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BOSS, function (sprite, otherSprite) {
    E_health += -1
    scene.cameraShake(15, 500)
    pause(500)
    if (E_health == 0 && Boss_mode == 1) {
        otherSprite.destroy(effects.confetti, 500)
        Destroy_Wall(3, 34)
        Destroy_Wall(4, 34)
        Destroy_Wall(5, 34)
        Destroy_Wall(6, 34)
        Destroy_Wall(7, 34)
        Destroy_Wall(8, 34)
        Destroy_Wall(9, 34)
        Destroy_Wall(10, 34)
        Destroy_Wall(11, 34)
        Double_Gun = sprites.create(img`
. . . . 5 5 5 5 5 . . 5 5 5 5 5 . . . . 
. . . . 5 . . . 5 . . 5 . . . 5 . . . . 
. . . . 5 . 5 5 5 . . 5 5 5 . 5 . . . . 
. . . . 5 . . . . . . . . . . 5 . . . . 
. . . . 5 5 5 5 5 . . 5 5 5 5 5 . . . . 
. . f f f f f f f f f f f f f f f f . . 
. f 1 f 1 f f f f f f f f f f 1 f 1 f . 
. f 1 f 1 f 5 5 5 5 5 5 5 5 f 1 f 1 f . 
. f 1 f 1 f f f f 5 5 f f f f 1 f 1 f . 
. . f f f f f f f 5 5 f f f f f f f . . 
. . . . . . f f f 5 5 f f f . . . . . . 
. . . . . f f f f 5 5 f f f f . . . . . 
. . . . f f 5 f f 5 5 f f 5 f f . . . . 
. . . . f 5 5 f f 5 5 f f 5 5 f . . . . 
. . . . f f 5 f f 5 5 f f 5 f f . . . . 
. . . . . f f f f 5 5 f f f f . . . . . 
. . . . . . . f f 5 5 f f . . . . . . . 
. . . . . . . f f 5 5 f f . . . . . . . 
. . . . . . . f 1 1 1 1 f . . . . . . . 
. . . . . . . . f f f f . . . . . . . . 
`, SpriteKind.object)
        Double_Gun.follow(Zelda, 20)
        Double_Gun.say("Pick me up, I am the lost double gun of the dungeons and have the power to kill all evil, take me with a single A click!!!")
        double = 1
        tiles.placeOnTile(Double_Gun, tiles.getTileLocation(3, 50))
        Boss_mode = 0
    }
    if (E_health < 0 && Boss_mode == 2) {
        Enemy3.destroy()
        armour = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . f 5 f 5 f 5 f 5 f 5 f . . . . . 
. . . f c b c b c b c b c b c f . . . . 
. . f c b c b c b c b c b c b c f . . . 
. f c b c f f b c b c b f f c b c f . . 
. 5 b c f . f c b c b c f . f c b 5 . . 
. . 5 f . . f b c 5 c b f . . f 5 . . . 
. . . . . . f c 5 5 5 c f . . . . . . . 
. . . . . . f b c 5 c b f . . . . . . . 
. . . . . . f c b c b c f . . . . . . . 
. . . . . . f b c b c b f . . . . . . . 
. . . . . . 9 f f f f f 9 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.obeject2)
        tiles.placeOnTile(armour, tiles.getTileLocation(56, 20))
        armour.follow(Zelda)
        Boss_mode = 0
        wearing = 1
    }
})
function Destroy_Wall (x: number, y: number) {
    tiles.setWallAt(tiles.getTileLocation(x, y), false)
    tiles.setTileAt(tiles.getTileLocation(x, y), sprites.dungeon.floorLight0)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Zelda)
})
function create_gohst_new (num: number, num2: number, num3: number, num4: number) {
    Enemy_2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    Enemy_2.follow(Zelda, num3)
    animation.runImageAnimation(
    Enemy_2,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f c d d 1 1 1 1 d d c f f . . . . . 
. . . . . . . f b c f 1 1 f c b f b b f . . . . 
. . . . . . . f f b d b 1 b d f f f f . . . . . 
. . . . . . . . f c b f b f d f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . f c b 1 b c f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f b d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f c d b f d d f b d b f . . . . . . 
. . . . . . . f b c f 1 1 f c b f f f . . . . . 
. . . . . . . f f b 1 1 1 1 b c f b c f . . . . 
. . . . . . . . f c d b 1 b d f b b b f . . . . 
. . . . . . . f f f f f f f f f f c f . . . . . 
. . . . . f c b 1 b c f f f f f . . . . . . . . 
. . . . . f 1 b 1 b 1 f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    tiles.placeOnTile(Enemy_2, tiles.getTileLocation(num, num2))
}
function Make_wall (num: number, num2: number) {
    tiles.setTileAt(tiles.getTileLocation(num, num2), sprites.dungeon.purpleOuterNorth0)
    tiles.placeOnTile(Zelda, tiles.getTileLocation(3, 35))
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(7, 46))
    tiles.setWallAt(tiles.getTileLocation(num, num2), true)
}
sprites.onOverlap(SpriteKind.ghost, SpriteKind.ghost, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, sprites.dungeon.floorLight0)
})
sprites.onOverlap(SpriteKind.BOSS, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(15, 500)
    pause(500)
    statusbar += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    Make_wall_2_dungeon_2(54, 12)
    Make_wall_2_dungeon_2(54, 13)
    Make_wall_2_dungeon_2(54, 14)
    Make_wall_2_dungeon_2(54, 15)
    Make_wall_2_dungeon_2(54, 16)
    Make_wall_2_dungeon_2(54, 17)
    Make_wall_2_dungeon_2(54, 18)
    Make_wall_2_dungeon_2(54, 19)
    Make_wall_2_dungeon_2(54, 20)
    Make_wall_2_dungeon_2(54, 21)
    Make_wall_2_dungeon_2(54, 22)
    Make_wall_2_dungeon_2(54, 23)
    Make_wall_2_dungeon_2(54, 24)
    Make_wall_2_dungeon_2(54, 25)
    Make_wall_2_dungeon_2(54, 26)
    Make_wall_2_dungeon_2(54, 27)
    Make_wall_2_dungeon_2(54, 28)
    Make_wall_2_dungeon_2(54, 29)
    Make_wall_2_dungeon_2(54, 30)
    Make_wall_2_dungeon_2(54, 31)
    Make_wall_2_dungeon_2(54, 32)
    Make_wall_1_dungeon_2(63, 34)
    Make_wall_1_dungeon_2(56, 34)
    Make_wall_1_dungeon_2(62, 34)
    Make_wall_1_dungeon_2(57, 34)
    Make_wall_1_dungeon_2(61, 34)
    Make_wall_1_dungeon_2(58, 34)
    Make_wall_1_dungeon_2(59, 34)
    Make_wall_1_dungeon_2(60, 34)
    Boss_mode = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    if (wearing == 0) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`],
        100,
        true
        )
    }
    if (wearing == 1) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . f f f f f f . . . . . . 
. . . f 5 f e e e e f f . . . . 
. . f 5 5 5 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e b b b b e e f f f f . . . 
. f b e f f f f b b b e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f c b c b d d c . . . . . 
. . . f b c b c d d b . . . . . 
. . . f c b c f b c f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 5 f e e e e f f . . . . 
. . f 5 5 5 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e b b b b e e f f f f . . . 
. f b e f f f f b b b e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f c b c d d c f . . . . . 
. . . f b c b d d b f . . . . . 
. . f f c b c b c f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 5 f e e e e f f . . . . 
. . f 5 5 5 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e b b b b e e f f f f . . . 
. f b e f f f f b b b e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f c b c b d d c . . . . . 
. . . f b c b c d d b . . . . . 
. . . f c b c f b c f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 5 f e e e e f f . . . . 
. . f 5 5 5 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e b b b b e e f f f f . . . 
. f b e f f f f b b b b f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f c b c b c d d c . . . . 
. . . f b c b c b d d b . . . . 
. . f f c b c b f b c f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`],
        100,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
    if (wearing == 0) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
        100,
        true
        )
    }
    if (wearing == 1) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f c c c c f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f c b c b c b c b f . . . 
. . c b f c b c b c b f b c . . 
. . b d f b c b c b c f d b . . 
. . c b f c b c b c b f b c . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f c c c c f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . b e f b c b c e d d 4 e . . 
. . b 4 f c b c b e d d e . . . 
. . . . f b c b c f b b . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f c c c c f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e c b c b e e f . . . 
. . b c f c b c b c b f c b . . 
. . c d f b c b c b c f d c . . 
. . b c f c b c b c b f c b . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f c c c c f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e b d d e c b c b f e b . . 
. . . b d d e b c b c f 4 b . . 
. . . . b b f c b c b f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    tiles.placeOnTile(Zelda, tiles.getTileLocation(3, 35))
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(7, 46))
    tiles.setTileAt(tiles.getTileLocation(11, 34), sprites.dungeon.purpleSwitchUp)
    Make_wall(3, 34)
    Make_wall(11, 34)
    Make_wall(4, 34)
    Make_wall(10, 34)
    Make_wall(5, 34)
    Make_wall(9, 34)
    Make_wall(6, 34)
    Make_wall(8, 34)
    Make_wall(7, 34)
    Make_wall(7, 34)
    info.changeLifeBy(3)
    Boss_mode = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    scene.cameraShake(15, 500)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Zelda)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Zelda)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.obeject2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(15, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ruin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 500)
    scene.cameraShake(15, 500)
    ruins += 1
})
function Make_wall_2_dungeon_2 (x: number, num2: number) {
    tiles.setTileAt(tiles.getTileLocation(x, num2), sprites.dungeon.greenOuterWest1)
    tiles.setWallAt(tiles.getTileLocation(x, num2), true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (double == 1) {
        double_weapon = 1
        Double_Gun.destroy()
        double = 0
    }
    if (direction == 1) {
        if (double_weapon == 1) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, -100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, 100)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
f . f f e 2 e 2 2 e 2 e f f . . 
. f f e 2 f 2 f f 2 f 2 e f . . 
. f f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f f 4 . . 
. . 4 4 f 4 4 4 4 4 4 f f 4 . . 
. . . . . f f f f f f . . f . . 
. . . . . f f . . f f . . . f . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. b . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
f . f f e 2 e 2 2 e 2 e f f . . 
. f f e 2 f 2 f f 2 f 2 e f . . 
b f f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f f 4 . . 
. . 4 4 f 4 4 4 4 4 4 f f 4 . b 
. . . . . f f f f f f . b f b . 
. . . . . f f . . f f . b b f . 
`,img`
. . . . . . f f f f . . . . . . 
. . 9 . f f e e e e f f . . . . 
. 9 . f e e e f f e e e f . . . 
. 9 f f f f f 2 2 f f f f f . . 
f . f f e 2 e 2 2 e 2 e f f . . 
. f f e 2 f 2 f f 2 f 2 e f . . 
9 f f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. 9 . f e e e e e e e e f . . 9 
9 . e 4 f f f f f f f f 4 e 9 . 
. . 4 d f 2 2 2 2 2 2 f f 4 . . 
. . 4 4 f 4 4 4 4 4 4 f f 4 9 b 
. . . 9 . f f f f f f . b f b . 
. . . . . f f 9 . f f 9 b b f . 
`],
            200,
            false
            )
        }
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, -100)
    } else if (direction == 2) {
        if (double_weapon == 1) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, -100, 0)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 100, 0)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. 5 e e e e e e d d d f . 5 . . 
. f f f e 4 d d e 4 e f f f f . 
. . . f e e d d e 2 2 f f . . . 
. . . e e e e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
b f e e 4 d 4 1 f d d e f . b . 
. 5 e e e e e e d d d f . 5 . b 
b f f f e 4 d d e 4 e f f f f . 
. . . f e e d d e 2 2 f f . b . 
. b . e e e e e f 5 5 f f . . b 
. . . f f f f f f f f f f . b . 
b . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f 7 . 
. 7 f e 4 4 e b f 4 4 e e f . 7 
7 f e e 4 d 4 1 f d d e f . . 7 
7 5 e e e e e e d d d f . 5 . 7 
. f f f e 4 d d e 4 e f f f f . 
7 . . f e e d d e 2 2 f f . . 7 
7 . . e e f e e f 5 5 f f . . 7 
. 7 . f f f f f f f f f f . 7 . 
. . . . f f . . . f f f . 7 . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . 9 . . 
. . . f f e e e e f 2 f . 9 9 . 
. . f f e e e e f 2 2 2 f . . . 
. 9 f e e e f f e e e e f . . . 
9 . f f f f e e 2 2 2 2 e f 7 . 
. . f e 2 2 2 f f f f e 2 f . 7 
. f f f f f f f e e e f f f . . 
. 7 f e 4 4 e b f 4 4 e e f 9 9 
. f e e 4 d 4 1 f d d e f . . 7 
9 5 e e e e e e d d d f . 5 . 7 
9 f f f e 4 d d e 4 e f f f f 9 
. . . f e e d d e 2 2 f f . . 7 
7 . . e e f e e f 5 5 f f . . . 
. 7 . f f f f f f f f f f . 9 9 
. . . . f f . . . f f f . 7 . 9 
`],
            200,
            false
            )
        }
        if (double_weapon == 0) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 100, 0)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f f f . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . f . 
. . f e e e e e d d d f . . f . 
. . . . f 4 d d e 4 e f . f . . 
. . . . f e d d e 2 2 f . . f . 
. . . f f f e e f 5 5 f f . f . 
. . . f f f f f f f f f f . . f 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . f f 
. . f e e e e e d d d f . f . . 
. . . . f 4 d d e 4 e f . . f f 
. . . . f e d d e 2 2 f . f . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f f . f . 
. . . . f 4 d d e 4 e f f . f . 
. . . . f e d d e 2 2 f . f . f 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . f f . 
. . . . f 4 d d e 4 e f f f f . 
. . . . f e d d e 2 2 f f . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`],
            200,
            false
            )
        }
    } else if (direction == 3) {
        if (double_weapon == 1) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, -100, 0)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 100, 0)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. 5 e e e e e e d d d f . 5 . . 
. f f f e 4 d d e 4 e f f f f . 
. . . f e e d d e 2 2 f f . . . 
. . . e e e e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
b f e e 4 d 4 1 f d d e f . b . 
. 5 e e e e e e d d d f . 5 . b 
b f f f e 4 d d e 4 e f f f f . 
. . . f e e d d e 2 2 f f . b . 
. b . e e e e e f 5 5 f f . . b 
. . . f f f f f f f f f f . b . 
b . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f 7 . 
. 7 f e 4 4 e b f 4 4 e e f . 7 
7 f e e 4 d 4 1 f d d e f . . 7 
7 5 e e e e e e d d d f . 5 . 7 
. f f f e 4 d d e 4 e f f f f . 
7 . . f e e d d e 2 2 f f . . 7 
7 . . e e f e e f 5 5 f f . . 7 
. 7 . f f f f f f f f f f . 7 . 
. . . . f f . . . f f f . 7 . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . 9 . . 
. . . f f e e e e f 2 f . 9 9 . 
. . f f e e e e f 2 2 2 f . . . 
. 9 f e e e f f e e e e f . . . 
9 . f f f f e e 2 2 2 2 e f 7 . 
. . f e 2 2 2 f f f f e 2 f . 7 
. f f f f f f f e e e f f f . . 
. 7 f e 4 4 e b f 4 4 e e f 9 9 
. f e e 4 d 4 1 f d d e f . . 7 
9 5 e e e e e e d d d f . 5 . 7 
9 f f f e 4 d d e 4 e f f f f 9 
. . . f e e d d e 2 2 f f . . 7 
7 . . e e f e e f 5 5 f f . . . 
. 7 . f f f f f f f f f f . 9 9 
. . . . f f . . . f f f . 7 . 9 
`],
            200,
            false
            )
        }
        if (double_weapon == 0) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, -100, 0)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. f f . f d d d e e e e e f . . 
. f f f f e 4 e d d 4 f . . . . 
. . . f f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
f . . f e d d f 1 4 d 4 e e f . 
. f . . f d d d e e e e e f . . 
f . f . f e 4 e d d 4 f . . . . 
. f . f f 2 2 e d d e f . . . . 
. . f f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
f f . . f d d d e e e e e f . . 
f f . . f e 4 e d d 4 f . . . . 
. f f f f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
f f . . f d d d e e e e e f . . 
f f f . f e 4 e d d 4 f . . . . 
. f . f f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. f f . f d d d e e e e e f . . 
. f f f f e 4 e d d 4 f . . . . 
. . . f f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`],
            200,
            false
            )
        }
    } else if (direction == 4) {
        if (double_weapon == 1) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, 100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, -100)
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f f f . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d f d e e f . . 
. . . f e e 4 4 4 f f e f f . . 
. . e 4 f 2 2 2 2 2 f f f e . . 
. . 4 d f 2 2 2 2 2 f f f f . . 
. . 4 4 f 4 4 5 5 f 4 f 4 f . . 
. . . . . f f f f f f . . . f . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 f e e f . 
. . f e e d d d d f d f e f . . 
. . . f e e 4 4 4 1 f f f f . . 
. . e 4 f 2 2 2 2 2 f f f e . . 
. . 4 d f 2 2 2 2 2 f f f 1 . . 
. . 4 4 f 4 4 5 5 f 4 f 4 f . . 
. . . . . f f f f f f . . . 1 . 
. . . . . f f . . f f . . . . . 
`],
            200,
            false
            )
        }
        if (double_weapon == 0) {
            animation.runImageAnimation(
            Zelda,
            [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f f f . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d f d e e f . . 
. . . f e e 4 4 4 f f e f f . . 
. . e 4 f 2 2 2 2 2 f f f e . . 
. . 4 d f 2 2 2 2 2 f f f f . . 
. . 4 4 f 4 4 5 5 f 4 f 4 f . . 
. . . . . f f f f f f . . . f . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 f e e f . 
. . f e e d d d d f d f e f . . 
. . . f e e 4 4 4 1 f f f f . . 
. . e 4 f 2 2 2 2 2 f f f e . . 
. . 4 d f 2 2 2 2 2 f f f 1 . . 
. . 4 4 f 4 4 5 5 f 4 f 4 f . . 
. . . . . f f f f f f . . . 1 . 
. . . . . f f . . f f . . . . . 
`],
            200,
            false
            )
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Zelda, 0, 100)
        }
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    E_health = 3
    Enemy3 = sprites.create(img`
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . . 1 f d d f 1 . . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 f f 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 . . . 1 1 . . . 1 1 . . 
. . 1 1 . 1 1 1 1 1 1 . 1 1 . . 
. 1 1 . . . . 1 1 . . . . 1 1 . 
. 1 1 . . 1 1 1 1 1 1 . . 1 f . 
. 1 . . . . . 1 1 . . . . . f . 
. . . . . 1 1 1 1 1 1 . . f f f 
. . . . . 1 1 1 1 1 1 . . f f . 
. . . . . 1 1 . . 1 1 . . . . . 
. . . . . 1 1 . . 1 1 . . . . . 
. . . . . 1 1 . . 1 1 . . . . . 
`, SpriteKind.BOSS)
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(67, 0))
    game.showLongText("You have reached a second dungeon", DialogLayout.Full)
    game.showLongText("This will allow you to continue further and find the ultimate armour", DialogLayout.Full)
    game.showLongText("Your health will drop the further you tread", DialogLayout.Full)
    game.showLongText("YOUR END IS NEAR...", DialogLayout.Full)
    tiles.setTilemap(tiles.createTilemap(
            hex`4600460019191919191919191919191919190302020202020f02150202081616161616161616161603150202020f0202020208161616161616161616161616161616161616161616161619191919191919191919191919190419191919191919191919091616161616161616161604191919191919191919091616161616161616161616161616161616161616161616191919191919191919191919191904191919191919191919190916161616161616161616041919191919191919190916161616161616161616161616161616161616161616161919191919191919191919191919041919191919191919191909161616161616161616160419191919191919191909161616161616161616161616161616161616161616161619191919191919191919191919190419191919191919191919091616161616161616161604191919191919191919091616161616161616161616161616161616161616161616191919191919191919191919191904191919191919191919190b02020202020202020202071919191919191919190916161616161616161616161616161616161616161616161919191919191c1c191919191919041919191919191919191919191919191919191919191919191919191919191909161616161616161616161616161616161616161616161619191919191919191919191919030719191919191919191919191919191919191919191919191919191919191919091616161616161616161616161616161616161616161616191919191919191919191919030719191919191919191919191919191919191919191919191919191919191919190916161616161616161616161616161616161616161616161508191919191919191919030719191919191919191919191919191919191919191919191919191919191919191909161616161616161616161616161616161616161616161616091919191919191919030719191919191919191919191919191919191919191919191919191919191919191919091616161616161616161616161616161616161616161616160919191919191919030719191919191919191919191919191919191919191919191919191919191919191919190b0202020202020f02021502020202020f02020215180202160919191919191919041919191919191919191c1919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919161019191919191919041919191919191919191919191919191919191919191919191c191919191919191919191919191919191919191919191919191919191919191919191916091919191919191904191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919160919191919191919041919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191609191919191919190419191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191916091919191919191904191919191919191919191919030202081919191919191919191919191919191919191919191919191919191919191919191919191919191919191919160919191919191d1d04191919191919191919191919040000091919191919191919191919191919191919191919191919191919191919191919191919191919191919191919160919191919191d19121919191919191919191919190400000b0202020202020202081919191919191919191919191919191919191919191919191919191919191919191919160919191d19191919041919191919191919191919190400000000000000000000000919191919191919191919191919191919191919191919191919191919191919191919191609191919191919190419191919191919191919191904000000000000000000000009191919191919191919191919191919191919191919191e191919191919191919191919160919191919191919041919191919191919191919190400060e0e0e0e0e0e0e0e0e05191919191919191919191919191919191919191919191e191919191919191919191919160919191919191919041919191919191919191919190a0d0519191919191919191919191919191919191a1919191919191919191919191919191e19191919191919191919191610191919191919190419191919191919191919191919191919191919191919191919191919191919191a191919191919191919191919191919191e1919191919191919191916091919191919191904191919191919191919191919191919191919191919191919191919191919191a1919191d1919191d1919191919191919191e19191919191919191919160919191919191919041919191919191919191919191919191919191919191919191919191919191a191919191919191919191919191919191919191e1e19191919191919191609191919191919190419191919191919191919191d1919191919191919191919191919191919191a1919191919191919191919191919191919191919191919191919191919160919191919191919041919191919191919191919191919191919191919191919191919191919191a1919191c191919191919191919191919191919191919191919191919191609191919191919191219191919191919191919191919191919191919191919191919191919191a1919191919191919191919191919191919191919191919191919191919191609191919191919190419191919191919191919191919191919191919191919191919191919191a19191919191919191919191919191919191919191919191919191919191916091919191919191904191919191919191919191919191919191919191919191919191919191a1919191919191919191919191919191919191919191919191919191919191916091919191919191919191919191919191919191919191919191919191919191919191919191a19191919191919191919191919191919191919191919191919191919191919160919191919191919191919191919191919191919191919191919191919191919191c19191a1919191919030202020202020202020202021919191919191919191919191919160919191919191919191919191919191919191919191919191919191919191919191919191a19191919191f1616161616161616161616041919191919191919060e0e0e110e1609191919191919191919191919191919191919191919191919191919191919191919191919191919191904161616161616161616161604191919191919191909161616161616091919191919191903020202020202020202020202020819191919191919191919191919191919191919041616161616161616161616041919191919191919091616161616161019191919191919041616161616161616161616161604191919191919191919191919191919191919190416161616161616161616160419191919191919191016161616161609191919191919190416161616161616161616161616041919191919191919191919191919191919191904161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616160419191919191919191919191919191919191919041616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161604191919191919191919191919191919191919190416161616161616161616160419191919191919190916161616161609191919191919190416161616161616161616161616041919191919191919191919191919191919191904161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616160419191919191919191919191919191919191919041616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161604191919191919191919191919191919191919190416161616161616161616160419191919191919190916161616161609191919191919191216161616161616161616161616041919191919191919191919191919191919191904161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616160419191919191919191919191919191919191919041616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161604191919191919191919191919191919191919190416161616161616161616160419191919191919190916161616161609191919191919190416161616161616161616161616041919191919191919191919191919191919191904161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616160419191919191919191919191919191919191919041616161616161616161616041919191919191919091616161616161019191c19191919041616161616161616161616161604191919191919191919191c1919191919191919041616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161604191919191919191919191919191919191919190416161616161616161616160419191919191919191016161616161609191919191919190416161616161616161616161616041919191919191919191319191919191919191904161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616160a0202020202020202020202020202020202020207161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161616161616161616161616161616161616161616161616161616161616161616160419191919191919190916161616161609191919191919190416161616161616161616161616161616161616161616161616161616161616161616161616161616161616161604191919191919191909161616161616091919191919191912161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161616161616161616161616161616161616161616161616161616161616161616160419191919191919190916161616161610191919191919190416161616161616161616161616161616161616161616161616161616161616161616161616161616161616161604191919191919191909161616161616091919191919191904161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616041919191919191919091616161616160919191919191919041616161616161616161616161616161616161616161616161616161616161616161616161616161616161616160419191919191919190916161616161609191919191919190416161616161616161616161616161616161616161616161616161616161616161616161616161616161616161604191919191919191909161616161616091919191919191904020202020f0202020202020f02020202020202020202020f020202020202020202020f0202020202020f0202020719191919191919190916161616161609191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191909161616161616091919191919191919191c191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919190916161616161609191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191910161616161616091919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191c191919191919190916161616161609191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191909161616161616091919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919091616161616160b0202020202020202020202020202020f02020202020202020f0202020202020202020202020f02020202020202020f0202020202020f0202020202020202021616161616`,
            img`
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . 
. 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedNorth,sprites.dungeon.greenOuterNorth1,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenSwitchDown,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterWest1,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
    tiles.placeOnTile(Zelda, tiles.getTileLocation(6, 4))
    for (let index = 0; index < 30; index++) {
        tiles.placeOnRandomTile(Enemy_2, sprites.dungeon.floorLight0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    E_health = 3
    pause(1000)
    info.changeLifeBy(-1)
    Enemy1.destroy(effects.rings, 500)
    scene.cameraShake(15, 500)
    pause(10000)
    Enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 f f f f f f f f f f f f f f 9 f . . . 
. . . f 9 f 4 4 4 4 4 4 4 4 4 4 4 4 f 9 f . . . 
. . . f 9 f 4 f f f f f f f f f f 4 f 9 f . . . 
. . . f 9 f 4 f 2 f 9 9 9 9 f 2 f 4 f 9 f . . . 
. . . f 9 f 4 2 2 f 9 9 9 9 f 2 2 4 f 9 f . . . 
. . 8 f 9 f f f f f 9 9 9 9 f f f f f 9 f . . . 
. 8 8 f 9 9 9 9 9 f f f f f f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 9 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 9 9 f f f f f 9 f f f f f f 9 f f f f f . . . 
8 8 9 8 8 8 8 f f f f f f f f f f . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
8 8 9 8 8 9 9 9 9 9 8 8 8 . . . . . . . . . . . 
8 8 9 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . 
8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(28, 58))
    animation.runImageAnimation(
    Enemy1,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. . . f c f f f f f f f f f f f f f f c f . . . 
. . . f c f 4 4 4 4 4 4 4 4 4 4 4 4 f c f . . . 
. . . f c f 4 f 4 4 4 4 4 4 4 4 f 4 f c f . . . 
. . . f c f 4 f f f f f f f f f f 4 f c f . . . 
. . . f c f 2 2 2 f c c c c f 2 2 2 f c f . . . 
. . . f c f f f f f c c c c f f f f f c f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. f f f c c c c c f f f f f f c c c c c f . . . 
. f 8 f c c c c f f 2 2 2 2 f f c c c c f . . . 
. f 8 f c c c c f 2 2 2 2 2 2 f c c c c f . . . 
f 8 8 f c c c c f f f f f f f f c c c c f . . . 
f 8 8 f c c c c c c c c c c c c c c c c f . . . 
8 8 8 f f f f f c c c c c c c c f f f f f . . . 
8 9 8 8 f f 8 f f f f f f f f f f . . . . . . . 
8 9 8 8 f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
8 9 8 f 8 8 8 8 8 6 8 8 8 f f f . . . . . . . . 
8 8 f f 8 8 8 9 8 6 8 8 f f . . . . . . . . . . 
8 f f 8 8 8 9 9 8 6 8 f f f . . . . . . . . . . 
f f 8 8 8 9 9 8 8 6 8 f f . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. . . f c f f f f f f f f f f f f f f c f . . . 
. . . f c f 4 4 f 4 4 4 4 4 4 f 4 4 f c f . . . 
. . . f c f 4 f 4 4 4 4 4 4 4 4 f 4 f c f . . . 
. . . f c f 4 f f f f f f f f f f 4 f c f . . . 
. . . f c f 2 2 2 f c c c c f 2 2 2 f c f . . . 
. . . f c f f f f f c c c c f f f f f c f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. f f f c c c c c f f f f f f c c c c c f . . . 
. f 8 f c c c c f f f f f f f f c c c c f . . . 
. f 8 f c c c c f 2 f 2 f 2 f f c c c c f . . . 
f 8 8 f c c c c f f f f f f f f c c c c f . . . 
f 8 8 f c c c c c c c c c c c c c c c c f . . . 
8 8 8 f f f f f c c c c c c c c f f f f f . . . 
8 9 8 8 f f 8 f f f f f f f f f f . . . . . . . 
8 9 8 8 f f 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
8 9 8 f 8 f 8 8 f 6 8 8 8 f f f . . . . . . . . 
8 8 f f 8 f 8 9 8 f 8 8 f f . . . . . . . . . . 
8 f f 8 8 f 9 9 8 f f f f f . . . . . . . . . . 
f f 8 8 f f 9 8 8 6 8 f f . . . . . . . . . . . 
`],
    1000,
    true
    )
    Enemy1.follow(Zelda, 50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    if (wearing == 0) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
        100,
        true
        )
    }
    if (wearing == 1) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e b 5 f . . . 
. . . f f e e e e b 5 5 5 f . . 
. . . f e e e b b e e e e f . . 
. . . f b b b e e 5 5 5 5 e f . 
. . . f e 5 5 5 b b b b e 5 f . 
. . f f b b b b b e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . b d d c b c b f . . . 
. . . . . c d d b c b c f . . . 
. . . . . f b c f b c b f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e b 5 f . . . 
. . . f f e e e e b 5 5 5 f . . 
. . . f e e e b b e e e e f . . 
. . . f b b b e e 5 5 5 5 e f . 
. . . f e 5 5 5 b b b b e 5 f . 
. . f f b b b b b e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f b d d c b c f . . . 
. . . . . f c d d b c b f . . . 
. . . . f f f b c f b c f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e b 5 f . . . 
. . . f f e e e e b 5 5 5 f . . 
. . . f e e e b b e e e e f . . 
. . . f b b b e e 5 5 5 5 e f . 
. . . f e 5 5 5 b b b b e 5 f . 
. . f f b b b b b e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . b d d c b c b f . . . 
. . . . . c d d b c b c f . . . 
. . . . . f b c f b c b f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e b 5 f . . . 
. . . f f e e e e b 5 5 5 f . . 
. . . f e e e b b e e e e f . . 
. . . f b b b e e 5 5 5 5 e f . 
. . . f e 5 5 5 b b b b e 5 f . 
. . f f b b b b b e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . b d d c b c b c f . . . 
. . . . c d d b c b c b f . . . 
. . . . f b c f b c b c f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    pause(1000)
    info.changeLifeBy(-1)
    statusbar += -1
    Enemy_2.destroy(effects.ashes, 500)
    scene.cameraShake(15, 500)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Zelda)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(15, 500)
})
function Make_wall_1_dungeon_2 (x: number, y: number) {
    tiles.setTileAt(tiles.getTileLocation(x, y), sprites.dungeon.greenOuterNorth0)
    tiles.setWallAt(tiles.getTileLocation(x, y), true)
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(58, 24))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    if (wearing == 0) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`],
        100,
        true
        )
    }
    if (wearing == 1) {
        animation.runImageAnimation(
        Zelda,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e b b e e e f . . . 
. . . f b b b 5 5 b b b f . . . 
. . f f e 5 e 5 5 e 5 e f f . . 
. . f e 5 b 5 b b b 5 b e f . . 
. . f b b 5 b e e 5 5 b b f . . 
. . f e 5 b b e e 5 b e e f . . 
. f f e b b e e e b e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . c f f f f f f f f b c . . 
. . . b f c b c b c b d d b . . 
. . . c f f f f f f c c b . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e b b e e e f . . . 
. . f f b b b 5 5 b b b f f . . 
. . f f e 5 e 5 5 e 5 e f f . . 
. . f e 5 b 5 b b 5 b 5 e f . . 
. . f b b 5 5 e e 5 5 b b f . . 
. f f e b 5 b e e b 5 b e f f . 
. f e e b b e e e e b e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . c b f f f f f f f f b c . . 
. . b d f b c b c b c f d b . . 
. . c b f c b c b c b f b c . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e b b e e e f . . . 
. . . f b b b 5 5 b b b f . . . 
. . f f e 5 e 5 5 e 5 e f f . . 
. . f e b 5 b b b 5 b 5 e f . . 
. . f b b 5 5 e e b 5 b b f . . 
. . f e e b 5 e e b b 5 e f . . 
. f f e e e b e e e b b e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . c b f f f f f f f f c . . . 
. . b d d b c b c b c f b . . . 
. . . b c b f f f f f f c . . . 
. . . . . . . . . f f f . . . . 
`],
        100,
        true
        )
    }
})
function Make_ruin (x: number, y: number) {
    Ruin2 = sprites.create(img`
c c c c c c c c c c c c c c c c 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
c 2 c c c c c c c c c c c c 2 c 
c 2 c 2 2 2 2 2 2 2 2 c 2 c 2 c 
c 2 c 2 2 2 c c c 2 c c 2 c 2 c 
c 2 c 2 2 2 2 2 c 2 c 2 2 c 2 c 
c 2 c 2 2 c c 2 c c c c 2 c 2 c 
c 2 c 2 2 2 c c c c 2 c 2 c 2 c 
c 2 c 2 2 2 c 2 2 2 c c 2 c 2 c 
c 2 c 2 c c c c 2 2 c c 2 c 2 c 
c 2 c 2 2 2 2 c 2 2 c 2 2 c 2 c 
c 2 c 2 2 2 2 c c 2 2 2 2 c 2 c 
c 2 c 2 2 2 2 2 2 2 2 2 2 c 2 c 
c 2 c c c c c c c c c c c c 2 c 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
c c c c c c c c c c c c c c c c 
`, SpriteKind.Ruin)
    tiles.placeOnTile(Ruin2, tiles.getTileLocation(x, y))
}
let Ruin2: Sprite = null
let projectile: Sprite = null
let ruins = 0
let direction = 0
let statusbar = 0
let armour: Sprite = null
let Double_Gun: Sprite = null
let Enemy3: Sprite = null
let Zelda: Sprite = null
let double = 0
let double_weapon = 0
let E_health = 0
let wearing = 0
let Boss_mode = 0
let Enemy1: Sprite = null
let Enemy_2: Sprite = null
game.showLongText("Goal: Find all the ruins and defeat the grand skeleton.", DialogLayout.Bottom)
game.showLongText("Controls:", DialogLayout.Bottom)
game.showLongText("A = Shoot", DialogLayout.Bottom)
game.showLongText("Arrow keys control the characters movement", DialogLayout.Bottom)
Enemy_2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
Enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 f f f f f f f f f f f f f f 9 f . . . 
. . . f 9 f 4 4 4 4 4 4 4 4 4 4 4 4 f 9 f . . . 
. . . f 9 f 4 f f f f f f f f f f 4 f 9 f . . . 
. . . f 9 f 4 f 2 f 9 9 9 9 f 2 f 4 f 9 f . . . 
. . . f 9 f 4 2 2 f 9 9 9 9 f 2 2 4 f 9 f . . . 
. . 8 f 9 f f f f f 9 9 9 9 f f f f f 9 f . . . 
. 8 8 f 9 9 9 9 9 f f f f f f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 8 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 9 8 f 9 9 9 9 9 f 8 8 8 8 f 9 9 9 9 9 f . . . 
8 9 9 f f f f f 9 f f f f f f 9 f f f f f . . . 
8 8 9 8 8 8 8 f f f f f f f f f f . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
8 8 9 8 8 9 9 9 9 9 8 8 8 . . . . . . . . . . . 
8 8 9 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . 
8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Boss_mode = 0
wearing = 0
E_health = 3
double_weapon = 0
info.setLife(3)
double = 0
Zelda = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
let Text = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Enemy3 = sprites.create(img`
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . . 1 f d d f 1 . . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 f f 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 . . . 1 1 . . . 1 1 . . 
. . 1 1 . 1 1 1 1 1 1 . 1 1 . . 
. 1 1 . . . . 1 1 . . . . 1 1 . 
. 1 1 . . 1 1 1 1 1 1 . . 1 f . 
. 1 . . . . . 1 1 . . . . . f . 
. . . . . 1 1 1 1 1 1 . . f f f 
. . . . . 1 1 1 1 1 1 . . f f . 
. . . . . 1 1 . . 1 1 . . . . . 
. . . . . 1 1 . . 1 1 . . . . . 
. . . . . 1 1 . . 1 1 . . . . . 
`, SpriteKind.BOSS)
tiles.setTilemap(tiles.createTilemap(
            hex`460046000101010101011f2021202120202121212122010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101012730303030303030303030230101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010129303434303030303030302301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101273030343430303030303024010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101012930303034343030303030230101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010127303030303030303030302401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101282e26262a30302c2e2626250101010101011f21322121203221202121322121212121212121220101010101010101010101010101010101010101010101010101010101010101010101273030240101010101010101010127303030303030303030303030303030303030302b220101010101010101010101010101010101010101010101010101010101011f2132212d30302b213221220101010101012730303030303030303030303030303030303030302b220101010101010101010101010101010101010101010101010101010101273030303030303030303023010101010101273030301f20213220212120213221202121322230302b212122010101010101010101010101010101010101010101011f2121212d303030303030303030302b2132202132212d3030302b21223030303030303030303030302b22303030302301010101010101010101010101010101010101010101273030303030303030303030303030303030303030303030303030302b223030303030303030303030302b22303030230101010101010101010101010101010101010101010127303030303030303030303030303030303030303030303030303030302b223030303030303030303030302b3030302b220101010101010101010101010101010101010101013530303029303030303030303030301f212132212121223030303030303023303030303030303030303030303030303023010101010101010101010101010101010101010101293030302730303030303030303030293030303030302330303030303030243030303030303030303030303030303030330101010101010101010101010101010101010101012930303028262e2e2e3030213221212d303030303030233030303430303024303030303030303030303030303030303023010101010101010101010101010101010101010101293030303030303030303030303030303030303030302b32223034303030233030303030303030303030303030303030230101010101010101010101010101010101010101012730303030303030303030303030303030303030303030302330303430302430303030303030303030303030303030302301010101010101010101010101010101010101010127303030303030303030303030303030303030303030303023303034303023303030303030303030303030303030303023010101010101010101010101010101010101010101282626262a303030303030303030303030303030303030302330303430302b22303030303030303030303030303030303301010101010101010101010101010101010101010101010101273030123030303030303030303030303030303023303030303030243030303030303030303030303030303023010101010101010101010101010101010101010101010101012730301230303030303030303030303030303030243030303030302430303030303030303030303030303030240101010101010101010101010101010101010101010101010127303012303030303030302c26262e262e262e2625303030303030243030303030303030303030303030302c25010101010101010101010101010101010101010101010101012730301212303030303030333030303030303030303030303030302430303030303030303030303030303023010101010101010101010101010101010101010101011f2121212d30303030123030303030233030303030303030303030303030302430303030303030303030303030303023010101010101010101010101010101010101010101013530303030303030303030303030302430303030343030303030303030303024303030303030303030303030302c26250101010101010101010101010101010101010101010127303030303030303030303030303023303430303030303430301212303030233030303030303030303030303023010101010101010101010101010101010101010101010101293030303030303030303030303030233030303030303030301230303030302330303030303030303030303030230101010101010101010101010101010101010101010101012730303030303030303030303030302b3030303030303030123030303030302b212121212021212121212021212201010101010101010101010101010101010101010101010129303030303030303030303030303030303030303030301230303030303030303030303030303030303030303023010101010101010101010101010101010101010101010101353030303030303030303030303030303030303030303030303030303030303030303030303030303030303030230101010101010101010101010101010101010101010101012730303030303030303030303030303030303030303030303030303030303030303030303030303030303030302301010101010101010101010101010101010101010101010127303030303030303030303030303030303030303030303030303030303030303030303030303030303030303023010101010101010101010101010101010101010101010101273030303030303030303030303030303030303030303030303030303030302730303030303030303030303030230101010101010101010101010101010101010101010101013530303030303030303722262626262626262e26262626262626262e2626262b21212121212121223030303030230101010101010101010101010101010101010101010101012730303030303030303023010101010101010101010101010101010101010101010101010101012330303030302301010101010101010101010101010101010101010101010129303030303030303030230101010101010101010101010101010101010101010101010101010123303030303023010101010101010101010101010101010101010101010101273030303030303030302301010101010101010101010101010101010101010101010101010101233030303030230101010101010101010101010101010101010101010101013530303030303030303023010101010101010101010101010101010101010101010101010101012430303030302301010101010101010101010101010101010101010101010127303030303030303030330101010101010101010101010101010101010101010101010101010123303030303023010101010101010101010101010101010101010101010101293030303030303030302301010101010101010101010101010101010101010101010101010101233030303030230101010101010101010101010101010101010101010101012930303030303030303023010101010101010101010101010101010101010101010101010101012430303030302301010101010101010101010101010101010101010101010127303030303030303030230101010101010101011f2121212121212121212121212121212121212430303030302301010101010101010101010101010101010101010101010135303030303030303030330101010101010101012730303030303030303030303030303030303024303030303023010101010101010101010101010101010101010101010101273030303030303030302301010101010101010127303030303030303030303030303030303030233030303030230101010101010101010101010101010101010101010101012730303030303030303023010101010101010101273030303030303030303030303030303030302330303030302301010101010101010101010101010101010101010101010127303030303030303030230101010101010101012730303030302c3030303030303030303030302330303030302b21322120212132212121220101010101010101010101010127303030303030303030230101010101010101012730303030302330303030303030303030303024303030303030303030303030300000002301010101010101010101010101353030303030303030303301010101010101010127303030303023303030303030303030303030233030303030303030303030303000000023010101010101010101010101012730303030303030303023010101010101010101273030303030233030301f2121223030303030233030303030303030303030303000000023010101010101010101010101012730303030303030303023010101010101010101273030303030233030302700002330303030302330303030302c202121212120212121212501010101010101010101010101293030303030303030302301010101010101010127303030303033303030270000233030303030233030303030230101010101010101010101010101010101010101010101012730303030303030303023010101010101010101273030303030233030302826262530303030302330303030302301010101010101010101010101010101010101010101010128263126262e26262e26250101010101010101012730303030302330303030303030303030303024303030303023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010127303030303033303030303030303030303030233030303030230101010101010101010101010101010101010101010101010101010101010101010101010101010101010101273030303030233030303030303030303030302330303030302301010101010101010101010101010101010101010101010101010101010101010101010101010101010101012730303030302b2121213220213221212132212d303030303023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010127303030303030303030303030303030303030303030303030230101010101010101010101010101010101010101010101010101010101010101010101010101010101010101273030303030303030303030303030303030303030303030302301010101010101010101010101010101010101010101010101010101010101010101010101010101010101012730303030303030303030303030303030303030303030303023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010128262626263b262626262626262626262626262626262626262501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 . . 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 . . 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . . 2 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 2 2 . . . 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . 2 . . . . . . . . . . 2 . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . 2 2 2 2 2 . . 2 2 2 2 2 . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . 2 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . 2 . . 2 . . . . . 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . 2 . . 2 . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . . . . . . 2 . . . . . 2 . . . 2 2 2 2 . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5,sprites.dungeon.floorLightMoss,sprites.dungeon.floorMixed,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight3,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tilePath4,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterSouth0,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.floorLight1,sprites.dungeon.purpleOuterWest2,sprites.dungeon.floorLight4,sprites.dungeon.purpleSwitchDown,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.purpleSwitchUp],
            TileScale.Sixteen
        ))
Make_ruin(37, 50)
Make_ruin(57, 48)
Make_ruin(40, 19)
Zelda.setPosition(70, 41)
Enemy_2.setPosition(44, 88)
scene.cameraFollowSprite(Zelda)
tiles.placeOnTile(Enemy1, tiles.getTileLocation(28, 58))
tiles.placeOnTile(Zelda, tiles.getTileLocation(11, 3))
E_health = 3
tiles.placeOnTile(Zelda, tiles.getTileLocation(11, 3))
controller.moveSprite(Zelda)
scene.setBackgroundColor(15)
create_gohst_new(12, 15, 50, 1)
create_gohst_new(42, 32, 50, 1)
create_gohst_new(6, 31, 50, 1)
create_gohst_new(20, 31, 50, 1)
create_gohst_new(5, 52, 50, 1)
create_gohst_new(41, 20, 50, 1)
create_gohst_new(38, 47, 50, 1)
create_gohst_new(41, 20, 50, 1)
create_gohst_new(43, 57, 50, 1)
create_gohst_new(44, 46, 50, 1)
create_gohst_new(39, 26, 50, 1)
create_gohst_new(44, 24, 50, 1)
animation.runImageAnimation(
Enemy3,
[img`
. . . . f f f f f f f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f 1 f 1 f 1 f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f f 1 1 1 f f . . . . . . . . . 
. . . . . f f f f f . . . . . . f f . . 
. . . 1 1 1 1 1 f 1 1 1 1 . . f f f . . 
. 1 1 1 1 1 1 f 1 1 1 1 1 1 1 . f . . . 
. 1 1 . . 1 1 1 f 1 1 . . 1 1 f . . . . 
. 1 1 . . . . 1 1 . . . . 1 f . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
`,img`
. . . . f f f f f f f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f 1 f 1 f 1 f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f f 1 1 1 f f . . . . . . . . . 
. . . . . f f f f f . . . . . . . . . . 
. . . . 1 1 1 1 f 1 1 1 1 . . . . . f . 
. . . 1 1 1 1 f 1 1 1 1 1 1 1 . . . f f 
. . 1 1 . 1 1 1 f 1 1 . . 1 1 1 . f f f 
. 1 1 . . . . 1 1 . . . . 1 1 f f . f f 
. . . . . 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
. . . . . 1 1 1 . 1 1 . . . . . . . . . 
. . . . . . . . . 1 1 . . . . . . . . . 
`,img`
. . . . f f f f f f f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f 1 f 1 f 1 f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f f 1 1 1 f f . . . . . . . . . 
. . . . . f f f f f . . . . . 7 7 . . . 
. . . . 1 1 1 1 f 1 1 1 1 . . . 7 . 7 . 
. . . 1 1 1 1 f 1 1 1 1 1 1 1 . 7 . 7 . 
. . 1 1 . 1 1 1 f 1 1 . . 1 1 . . . 7 . 
. 1 1 . . . . 1 1 . . . . f 1 . . . 7 . 
. . . . . 1 1 1 1 1 1 . . . f . . 7 . . 
. . . . . . . 1 1 . . . . . f . f . . . 
. . . . . . 1 1 1 1 . . . . . f f f . . 
. . . . . 1 1 . . 1 1 . . . . . f f . . 
. . . 1 . 1 1 1 . 1 1 . . . . . . . . . 
. . . . 1 . . . 1 1 1 . . . . . . . . . 
`,img`
. . . . f f f f f f f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f 1 f 1 f 1 f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f f 1 1 1 f f . . . . . . . . . 
. . . . . f f f f f . . . . . . . . . . 
. . . . 1 1 1 1 f 1 1 1 1 . . . . . . 7 
. . . 1 1 1 1 f 1 1 1 1 1 1 1 . . . . 7 
. . 1 1 . 1 1 1 f 1 1 . . 1 1 . . . 7 7 
. 1 1 . . . . 1 1 . . . . f 1 . . 7 7 . 
. . . . . 1 1 1 1 1 1 . . f . . 7 7 . . 
. . . . . . . 1 1 . . . . f . . . 7 7 . 
. . b . 1 . 1 1 1 1 . . f f f 7 7 . 7 . 
. . b . 1 1 1 . . 1 1 . f f . . . 7 7 . 
. . . 1 . 1 1 1 . 1 1 . . . . . 7 7 . . 
. b . . b . . b 1 1 1 . . . . . . . . . 
`,img`
. . . . f f f f f f f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f 1 f 1 f 1 f . . . . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . f f 1 1 1 f f . . . . . . . . . 
. . . . . f f f f f . . . . . . f f . . 
. . . 1 1 1 1 1 f 1 1 1 1 . . f f f . . 
. 1 1 1 1 1 1 f 1 1 1 1 1 1 1 . f . . . 
. 1 1 . . 1 1 1 f 1 1 . . 1 1 f . . . . 
. 1 1 . . . . 1 1 . . . . 1 f . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . . . . . 
`],
100,
true
)
animation.runImageAnimation(
Enemy1,
[img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. . . f c f f f f f f f f f f f f f f c f . . . 
. . . f c f 4 4 4 4 4 4 4 4 4 4 4 4 f c f . . . 
. . . f c f 4 f 4 4 4 4 4 4 4 4 f 4 f c f . . . 
. . . f c f 4 f f f f f f f f f f 4 f c f . . . 
. . . f c f 2 2 2 f c c c c f 2 2 2 f c f . . . 
. . . f c f f f f f c c c c f f f f f c f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. f f f c c c c c f f f f f f c c c c c f . . . 
. f 8 f c c c c f f 2 2 2 2 f f c c c c f . . . 
. f 8 f c c c c f 2 2 2 2 2 2 f c c c c f . . . 
f 8 8 f c c c c f f f f f f f f c c c c f . . . 
f 8 8 f c c c c c c c c c c c c c c c c f . . . 
8 8 8 f f f f f c c c c c c c c f f f f f . . . 
8 9 8 8 f f 8 f f f f f f f f f f . . . . . . . 
8 9 8 8 f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
8 9 8 f 8 8 8 8 8 6 8 8 8 f f f . . . . . . . . 
8 8 f f 8 8 8 9 8 6 8 8 f f . . . . . . . . . . 
8 f f 8 8 8 9 9 8 6 8 f f f . . . . . . . . . . 
f f 8 8 8 9 9 8 8 6 8 f f . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. . . f c f f f f f f f f f f f f f f c f . . . 
. . . f c f 4 4 f 4 4 4 4 4 4 f 4 4 f c f . . . 
. . . f c f 4 f 4 4 4 4 4 4 4 4 f 4 f c f . . . 
. . . f c f 4 f f f f f f f f f f 4 f c f . . . 
. . . f c f 2 2 2 f c c c c f 2 2 2 f c f . . . 
. . . f c f f f f f c c c c f f f f f c f . . . 
. . . f c c c c c c c c c c c c c c c c f . . . 
. f f f c c c c c f f f f f f c c c c c f . . . 
. f 8 f c c c c f f f f f f f f c c c c f . . . 
. f 8 f c c c c f 2 f 2 f 2 f f c c c c f . . . 
f 8 8 f c c c c f f f f f f f f c c c c f . . . 
f 8 8 f c c c c c c c c c c c c c c c c f . . . 
8 8 8 f f f f f c c c c c c c c f f f f f . . . 
8 9 8 8 f f 8 f f f f f f f f f f . . . . . . . 
8 9 8 8 f f 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
8 9 8 f 8 f 8 8 f 6 8 8 8 f f f . . . . . . . . 
8 8 f f 8 f 8 9 8 f 8 8 f f . . . . . . . . . . 
8 f f 8 8 f 9 9 8 f f f f f . . . . . . . . . . 
f f 8 8 f f 9 8 8 6 8 f f . . . . . . . . . . . 
`],
1000,
true
)
tiles.placeOnTile(Text, tiles.getTileLocation(11, 1))
pause(100)
Text.say("So, You have reached: THE DREADED DUNGEONS, This place lurks with monsters, so be careful, good luck, because you won't live without it...", 20000)
pause(21000)
scene.cameraShake(8, 5000)
Text.setPosition(70, 25)
forever(function () {
    music.playMelody("E B C5 A B G A F ", 200)
    music.playMelody("E B C5 A B G A A ", 200)
    music.playMelody("E B C5 A B G A G ", 200)
    music.playMelody("E B C5 A G F A C5 ", 200)
    if (Enemy_2.y != Zelda.y + -10) {
        Enemy_2.follow(Zelda, 60)
    }
    if (E_health == 0) {
        music.baDing.play()
        info.changeLifeBy(3)
        Enemy3.destroy(effects.fire, 500)
        animation.runImageAnimation(
        Enemy_2,
        [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 . . . 7 . . . 7 . . . . . . . 
. . . . . . . . 7 . . . 7 . . . 7 . . . . . . . 
. . . . . 7 . . 7 . . . 7 . . . . . . . . . . . 
. . . . . 7 . . . . . . 7 . . . . . . . . . . . 
. . . . . 7 . . . . . . 7 . . . . . . . . . . . 
. . . . . 7 . . . . . . 7 . . . . . . . . . . . 
. . . . . 7 . . 7 . . . 7 . . . . . . . . . . . 
. . . . . 7 . 7 . . . . . . . . . . . . . . . . 
. . . . . 7 . 7 . . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . 7 . . . . . . . . 
. . . . . . . . . 7 . . . . 7 7 . . . . . . . . 
. . . . . . . . . 7 . . 7 . . . . . . . . . . . 
. . . . . . . . . 7 . . . 7 . . . . . . . . . . 
. . . . . . . . . 7 . . . 7 . . . . . . . . . . 
. . . . . . . . . 7 . . . 7 . . . . . . . . . . 
. . . . . . . . . 7 . . . 7 . . . . . . . . . . 
. . . . . . . . . . . . . 7 . . . . . . . . . . 
. . . . . . . . . . . . . 7 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . 7 7 . . . . . . . . . . 
. . . . . . . . . 7 . . 7 . 7 . . . . . . . . . 
. . . . . . . . . 7 7 . . 7 7 . . . . . . . . . 
. . . . . . . . . . 7 7 7 7 . . . . . . . . . . 
. . . . . . . . . . . 7 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
        100,
        false
        )
        E_health += -1
    }
    if (E_health < 1) {
        if (ruins == 3) {
            tiles.setTileAt(tiles.getTileLocation(3, 50), sprites.dungeon.doorOpenNorth)
        }
    }
})
forever(function () {
    if (Boss_mode == 1) {
        Enemy3.follow(Zelda, 50)
    }
    if (E_health == 2) {
        create_gohst_new(4, 49, 50, 1)
        create_gohst_new(10, 50, 50, 1)
        pause(10000)
    }
    if (Boss_mode == 2) {
        Enemy3.follow(Zelda, 50)
    }
    if (wearing == 1) {
        pause(20000)
        info.changeLifeBy(1)
    }
})
