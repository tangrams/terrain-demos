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

Check out the source code inside the scene files in the [styles directory](https://github.com/tangrams/terrain-demos/tree/gh-pages/styles)!

### To run locally:

Start a web server in the repo's directory:

    python -m SimpleHTTPServer 8000
    
If that doesn't work, try:

    python -m http.server 8000
    
Then navigate to, eg: [http://localhost:8000/?url=styles/contours.yaml](http://localhost:8000/?url=styles/contours.yaml)
