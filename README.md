App Icon Generator
==================

A tool to generate lots and lots of app icon images (or just canvas-generated images in general).

![Preview](https://cloud.githubusercontent.com/assets/744973/3868090/a3f180c6-2022-11e4-8240-4e41397802af.png)

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