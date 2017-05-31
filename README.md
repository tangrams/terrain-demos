# terrain-demos

Ways to manipulate heightmap data in [Tangram](http://github.com/tangrams/tangram) as seen in the [Mapping Mountains](https://mapzen.com/blog/mapping-mountains/) post on the [Mapzen blog](http://mapzen.com/blog).

<img width="664" alt="terrain demo" src="https://cloud.githubusercontent.com/assets/459970/14753849/e36167ae-08a5-11e6-9abb-3e219a3bc20f.png">

## Style gallery

- elevation tiles: http://tangrams.github.io/terrain-demos/?url=styles/elevation-tiles.yaml
- basic green: http://tangrams.github.io/terrain-demos/?url=styles/green.yaml
- animated contours: http://tangrams.github.io/terrain-demos/?url=styles/contours.yaml
- grayscale hypsometric: http://tangrams.github.io/terrain-demos/?url=styles/grayscale.yaml
- classic hypsometric: http://tangrams.github.io/terrain-demos/?url=styles/hypsometric.yaml
- slopemap: http://tangrams.github.io/terrain-demos/?url=styles/slope.yaml
- heightmap: http://tangrams.github.io/terrain-demos/?url=styles/heightmap.yaml
- manual normal derivation: http://tangrams.github.io/terrain-demos/?url=styles/normals-manual.yaml
- normal tiles: http://tangrams.github.io/terrain-demos/?url=styles/normals-tiles.yaml
- single light: http://tangrams.github.io/terrain-demos/?url=styles/single-light.yaml
- two lights: http://tangrams.github.io/terrain-demos/?url=styles/two-lights.yaml
- three lights: http://tangrams.github.io/terrain-demos/?url=styles/three-lights.yaml
- environment map: http://tangrams.github.io/terrain-demos/?url=styles/environment-map1.yaml
- metal spheremap: http://tangrams.github.io/terrain-demos/?url=styles/metal.yaml
- sunrise spheremap: http://tangrams.github.io/terrain-demos/?url=styles/sunrise.yaml
- sunset spheremap: http://tangrams.github.io/terrain-demos/?url=styles/sunset.yaml
- swiss style: http://tangrams.github.io/terrain-demos/?url=styles/imhof.yaml

Check out the source code for these and more examples in the [styles directory](https://github.com/tangrams/terrain-demos/tree/gh-pages/styles).

### Elevation tiles vs. Normal tiles alpha elevation

Mapzen offers two sources of elevation data: in the "terrarium" tiles, and also in the alpha channel of the normal tiles. Most of the examples in this repo are based on the elevation tiles, but some of them (such as normal-alpha-elevation.yaml) use the alpha channel of the normal tiles. This source is a bit trickier to use, but if you don't need the 24-bit resolution of the elevation tiles, and are already loading the normal tiles, it will make your styles faster.

The elevation from the elevation tiles is a relatively simple linear encoding, but the elevation in the normal tiles alpha channel is quantized, non-linear, and 8-bit. (More information about this encoding can be found in [the documentation for our elevation datasource repository](https://github.com/tilezen/joerd/blob/master/docs/formats.md#normal).)

To make this source simpler to interpret, we're using a "[decoder ring](https://wikipedia.org/wiki/Secret_decoder_ring)" image which maps the quantized range to the unquantized range as best it can. This image is generated with [a piece of JavaScript](decoder.js) which runs the quantize function in reverse, and creates a new image in a canvas element with the decoded output values for each input value. [You can run this script here](tangrams.github.io/terrain-demos/decoder.html). This image has also been pregenerated for your convenience, and is stored in this repo as [decoder.png](https://github.com/tangrams/terrain-demos/blob/master/img/decoder.png). It looks like this:

![decoder ring image](https://github.com/tangrams/terrain-demos/blob/master/img/decoder.png)

This image can be used as a texture in a heightmap shader, for easier decoding.

### To run locally:

Start a web server in the repo's directory:

    python -m SimpleHTTPServer 8000
    
If that doesn't work, try:

    python -m http.server 8000
    
Then navigate to, eg: [http://localhost:8000/?url=styles/contours.yaml](http://localhost:8000/?url=styles/contours.yaml)
