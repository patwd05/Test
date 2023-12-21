
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "BPS_Schools_SY2324_1": {
            "type": "geojson",
            "data": json_BPS_Schools_SY2324_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_BPS_Schools_SY2324_1_0",
            "type": "circle",
            "source": "BPS_Schools_SY2324_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Cluster'], 'A'], ['/', 16.428571428571427, 2], ['==', ['get', 'Cluster'], 'B'], ['/', 16.428571428571427, 2], ['==', ['get', 'Cluster'], 'C'], ['/', 16.428571428571427, 2], ['==', ['get', 'Cluster'], 'D'], ['/', 16.428571428571427, 2], ['==', ['get', 'Cluster'], 'E'], ['/', 16.428571428571427, 2], ['==', ['get', 'Cluster'], 'F'], ['/', 16.428571428571427, 2], ['/', 16.428571428571427, 2]], 'circle-color': ['case', ['==', ['get', 'Cluster'], 'A'], '#d7191c', ['==', ['get', 'Cluster'], 'B'], '#f17c4a', ['==', ['get', 'Cluster'], 'C'], '#fec980', ['==', ['get', 'Cluster'], 'D'], '#ffffbf', ['==', ['get', 'Cluster'], 'E'], '#c7e9ad', ['==', ['get', 'Cluster'], 'F'], '#80bfac', '#2b83ba'], 'circle-opacity': ['case', ['==', ['get', 'Cluster'], 'A'], 1.0, ['==', ['get', 'Cluster'], 'B'], 1.0, ['==', ['get', 'Cluster'], 'C'], 1.0, ['==', ['get', 'Cluster'], 'D'], 1.0, ['==', ['get', 'Cluster'], 'E'], 1.0, ['==', ['get', 'Cluster'], 'F'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'Cluster'], 'A'], 1, ['==', ['get', 'Cluster'], 'B'], 1, ['==', ['get', 'Cluster'], 'C'], 1, ['==', ['get', 'Cluster'], 'D'], 1, ['==', ['get', 'Cluster'], 'E'], 1, ['==', ['get', 'Cluster'], 'F'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'Cluster'], 'A'], '#232323', ['==', ['get', 'Cluster'], 'B'], '#232323', ['==', ['get', 'Cluster'], 'C'], '#232323', ['==', ['get', 'Cluster'], 'D'], '#232323', ['==', ['get', 'Cluster'], 'E'], '#232323', ['==', ['get', 'Cluster'], 'F'], '#232323', '#232323']}
        }
],
}