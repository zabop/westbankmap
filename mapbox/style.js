
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "OsloIIAccordAreas_1": {
            "type": "geojson",
            "data": json_OsloIIAccordAreas_1
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
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_OsloIIAccordAreas_1_0",
            "type": "fill",
            "source": "OsloIIAccordAreas_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'name_en'], 'Area A'], 0.5, ['==', ['get', 'name_en'], 'Area B'], 0.5, ['==', ['get', 'name_en'], 'Area C'], 0.5, ['==', ['get', 'name_en'], 'Area H1'], 0.5, ['==', ['get', 'name_en'], 'Area H1'], 0.5, ['==', ['get', 'name_en'], 'Area H2'], 0.5, ['==', ['get', 'name_en'], 'Area H2'], 0.5, 1.0], 'fill-color': ['case', ['==', ['get', 'name_en'], 'Area A'], '#3fff3f', ['==', ['get', 'name_en'], 'Area B'], '#3f3fff', ['==', ['get', 'name_en'], 'Area C'], '#ff3f3f', ['==', ['get', 'name_en'], 'Area H1'], '#1fff1f', ['==', ['get', 'name_en'], 'Area H2'], '#ff1f1f', '#2e8ed7']}
        }
],
}