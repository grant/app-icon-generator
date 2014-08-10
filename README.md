App Icon Generator
==================

A tool to generate lots and lots of app icon images (or just canvas-generated images in general).

In my case, I created html canvas images labeled 1-100 for iOS icons of size 58, 80, 120 pixels. This is modifyable to produce massive amounts of images of anything rendered with canvas.

![Preview](https://cloud.githubusercontent.com/assets/744973/3868146/07cfba6a-2026-11e4-8693-87106ee6f2cb.png)

## How it works:

- Create an image with html canvas
- Generate image data urls
- Write files with these data urls

## Quickstart

- Open `index.html` (optionally run `python -m SimpleHTTPServer`)
- Move the downloaded json file to `build/data.json`
- Run `node index.js` to generate the images
- All the outputted files will be generated in `build/image`

## Developing

- Run `gulp`
- All generated files will be in the `build` folder