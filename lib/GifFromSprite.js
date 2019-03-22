const Canvas = require('canvas')
const Image = Canvas.Image
const fs = require('fs')
const GifEncoder = require('gifencoder')
class GifFromSprite {
    static create(imgSrc, filename, interval, rows, cols, skipLast) {
        const image = new Image()
        image.src = imgSrc
        const r = rows || 1
        const c = cols || 1
        const w = image.width / c,
            h = image.height / r
        const encoder = new GifEncoder(w, h)
        encoder.createReadStream().pipe(fs.createWriteStream(filename))
        encoder.start()
        encoder.setQuality(100)
        encoder.setRepeat(0)
        encoder.setDelay(interval)

        const canvas = new Canvas()
        canvas.width = w
        canvas.height = h
        const context = canvas.getContext('2d')
        var x = 0,
            y = 0
        for (var i = 0; i < r * c - skipLast; i++) {
            context.clearRect(0, 0, w, h)
            context.fillStyle = 'white'
            context.fillRect(0, 0, w, h)
            context.save()
            context.beginPath()
            context.rect(0, 0, w, h)
            context.clip()
            context.save()
            context.translate(-x, -y)
            context.drawImage(image, 0, 0)
            context.restore()
            context.restore()
            encoder.addFrame(context)
            x += w
            if ((i + 1) % c == 0) {
                y += h
                x = 0
            }
        }

        encoder.finish()
    }
}
module.exports = GifFromSprite