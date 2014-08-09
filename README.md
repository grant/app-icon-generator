App Icon Generator
==================

A tool to generate lots and lots of app icon images.

## How it works:

- Create an image with html canvas
- Generate image data urls
- Write files with these data urls

## Quickstart

- Open `index.html` (optionally run `python -m SimpleHTTPServer`)
- Copy the console output
- Put it into a file `build/data.json`
- Run `node index.js`
- All the outputted files will be generated in `build/images`

## Developing

- Run `gulp`
- All generated files will be in the `build` folder