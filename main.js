/*jslint browser: true*/
/*global Tangram, gui */

function parseQuery (qstr) {
    var query = {};
    var a = qstr.split('&');
    for (var i in a) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
    }
    return query;
}

map = (function () {
    'use strict';

    var map_start_location = [37.8090, -122.2220, 12]; // Oakland

    /*** URL parsing ***/

    // leaflet-style URL hash pattern:
    // #[zoom],[lat],[lng]
    var url_hash = window.location.hash.slice(1, window.location.hash.length).split('/');

    if (url_hash.length == 3) {
        map_start_location = [url_hash[1],url_hash[2], url_hash[0]];
        // convert from strings
        map_start_location = map_start_location.map(Number);
    }

    // determine the scene url and content to load during start-up
    var scene_url = 'styles/elevation-tiles.yaml';

    // If there is a query, use it as the scene_url
    var query = parseQuery(window.location.search.slice(1));
    if (query.url) {
        scene_url = query.url;
    }
    /*** Map ***/
    var elevationStyles = [ "styles/elevation-tiles.yaml",
                            "styles/contours.yaml",
                            "styles/elevation-tiles.yaml",
                            "styles/grayscale.yaml",
                            "styles/hypsometric.yaml",
                            "styles/normals-manual.yaml"];
    // normal tiles currently have wider zoom range
    var minZoom = (elevationStyles.indexOf(scene_url) > -1) ? 10 : 8;

    var southWest = L.latLng(31.95, -126.23),
        northEast = L.latLng(44.09, -112.76),
        bounds = L.latLngBounds(southWest, northEast);

    var map = L.map('map', {
        "keyboardZoomOffset" : .05,
        "minZoom" : minZoom,
        "maxZoom" : 16,
        "maxBounds" : bounds
        }
    );

    var layer = Tangram.leafletLayer({
        scene: scene_url,
        attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
    });

    if (query.quiet) {
        layer.options.attribution = "";
        map.attributionControl.setPrefix('');
        window.addEventListener("load", function() {
            var div = document.getElementById("mz-bug");
            if (div != null) {div.style.display = "none";}
            div = document.getElementById("mz-citysearch");
            if (div != null) {div.style.display = "none";}
            div = document.getElementById("mz-geolocator");
            if (div != null) {div.style.display = "none";}
        });
    }

    if (query.noscroll) {
        map.scrollWheelZoom.disable();
    }

    window.layer = layer;
    var scene = layer.scene;
    window.scene = scene;

    // setView expects format ([lat, long], zoom)
    map.setView(map_start_location.slice(0, 3), map_start_location[2]);

    var hash = new L.Hash(map);

    layer.addTo(map);

    return map;

}());
