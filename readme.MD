## gif-from-sprite

### a nodejs api to create gifs from sprites

### Usage

```
    npm install gif-from-sprite
```
#### Spacing between each image in the sprite must be consitent .Creating gif. the function create takes a string for name of the sprite , a second string for the out gif file name, delay for frame, two other parameters for number of rows and columns respectively. Number of columns is the number of images in each row. Number of rows is (total number of images)/(number of rows).

```
    const GifFromSprite = require('gif-from-sprite')
    GifFromSprite.create(spriteFileName,gifFileName,delayPerFrame,)
```

### Demo

#### Input

<img src="jump.png">

#### Output

<img src="jump.gif">
