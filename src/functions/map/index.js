import $ from 'jquery';
import L from 'leaflet';
import MiniMap from 'leaflet-minimap';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import '@/assets/plugins/leaflet/fullscreen/Control.FullScreen';
import 'leaflet-sidebar-v2';
import 'leaflet.zoomslider';
import 'leaflet-measure';
import 'leaflet-styleeditor';
import 'leaflet-multicontrol';
import 'leaflet-ruler';
import 'leaflet-ruler/src/leaflet-ruler.css';
import 'leaflet.locatecontrol/src/L.Control.Locate';
import 'leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.min';
import '@geoman-io/leaflet-geoman-free';
import "../../assets/plugins/leaflet/panel-layers/panel-layers";

class LMAPL {

    _map = null;
    _editableLayers = new L.FeatureGroup();
    _sidebar = null;
    _layers = [];


    constructor({ map = null, layers = [] }) {
        this._map = map;
        this._layers = layers;


        // Init LMAPL Leaflet Controllers
        this.#initControls();


        // Init LMAPL Event Handlers
        this.#handleEventOnMap();
        this.#layerEditEvents();
    }



    toFullscreen () { this._map.toggleFullscreen(); }


    // Methods

    #initControls() {

        // Embedding Leaflet Map CONTROLLs

        new MiniMap(new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }), { toggleDisplay: true, minimized: true }).addTo(this._map);


        this._map.pm.addControls({ position: 'topleft' });

        L.control.styleEditor({ position: 'topleft' }).addTo(this._map);
        L.control.zoom({ position: 'bottomright' }).addTo(this._map);
        L.control.zoomslider({ position: 'bottomright' }).addTo(this._map);
        L.control.coordinates({
            position: "bottomleft",
            enableUserInput: false,
            useDMS: false,
            useLatLngOrder: true,
        }).addTo(this._map);
        L.control.panelLayers([
            {
                group: "Map Layers",
                layers: this._layers
            }], {}, { className: "map-style-layer-control"}).addTo(this._map);

        this._sidebar = L.control.sidebar({
            autopan: true,
            closeButton: true,
            container: 'map-sidebar',
            position: 'right'
        }).addTo(this._map);


        // this.locationController = L.control.locate({
        //     position: "topright",
        //     strings: { title: "Show me where I am, yo!" },
        //     drawCircle: false,
        //     locateOptions: {
        //       enableHighAccuracy: true
        //     }
        //   }).addTo(_map);
        // L.control.ruler({
        //   position: 'topleft',
        // }).addTo(_map);

    }


    #initMultiControls() {

    const marker = L.marker([51.5, -0.09]).addTo(_map);
    const marker2 = L.marker([51.51, -0.09]);
    const polygon = L.polygon([[51.51, -0.1],[51.5, -0.08],[51.53, -0.07],[51.50, -0.06]], {color: '#FF0000'}).addTo(_map);
    const polygon2 = L.polygon([[51.51, -0.1],[51.5, -0.08],[51.53, -0.07],[51.50, -0.06]], {color: '#0122FF'}).addTo(_map);

    const mylines = [{
        "type": "LineString",
        "coordinates": [[-0.1,51.51], [-0.07,51.53]]
    }, {
        "type": "LineString",
        "coordinates": [[-0.1,51.5], [-0.07,51.50]]
    }];
    const geojson = L.geoJSON(null).addTo(_map);
    geojson.addData(mylines);

    const states = [{
        "type": "Feature",
        "properties": {"party": "Republican"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-104.05, 48.99],
                [-97.22,  48.98],
                [-96.58,  45.94],
                [-104.03, 45.94],
                [-104.05, 48.99]
            ]]
        }
    }, {
        "type": "Feature",
        "properties": {"party": "Democrat"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
            ]]
        }
    }, {
        "type": "Feature",
        "properties": {"party": "Democrat"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
            ]]
        }
    }];

    const geojsonStates = L.geoJSON(states, {style: function(state) {
            return (state.properties.party === 'Republican')
                ? {fillColor:'red', color:'red', opacity:1, legendLabel: state.properties.party} : {fillColor:'blue', color:'blue', opacity:1, legendLabel: state.properties.party}
        }}).addTo(_map);


    const overlays = [
        {name: 'Marker', layer: marker},
        {name: 'Marker2', layer: marker2},
        {name: 'polygon', layer: polygon},
        {name: 'polygon2', layer: polygon2},
        {name: 'geojson', layer: geojson},
        {name: 'geojsonStates', layer: geojsonStates},
    ];


    L.multiControl( overlays, { position:'topright', label: 'Control de capas' } ).addTo(_map);

}


    #handleEventOnMap() {

        // _map.on('click', (event) => console.log(`${event.latlng}`));
        this._map.on('click', () => this._sidebar.close('map-sidebar'));


        // On resize screen condense sidebar
        $(window).resize(() => {
            document.getElementsByTagName('body')[0].setAttribute('data-leftbar-compact-mode', "condensed");
        });

    }


    #layerEditEvents() {

        this._map.on('draw:created', (event) => this._editableLayers.addLayer(event.layer));

        this._map.on('pm:create', (event) => this._editableLayers.addLayer(event.layer));
        this._map.on('pm:change', (event) => this._editableLayers.addLayer(event.layer));

        this._map.on('styleeditor:visible', () => $('#map-sidebar').animate({right: -40}, 0));
        this._map.on('styleeditor:hidden', () => $('#map-sidebar').animate({right: 5}, 0));

    }

}


export default LMAPL;
