App Icon Generator
==================

A tool to generate lots and lots of app icon images (or just canvas-generated images in general).

![Preview](https://cloud.githubusercontent.com/assets/744973/3868116/a915cf16-2023-11e4-9cde-f604725ee878.png)

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