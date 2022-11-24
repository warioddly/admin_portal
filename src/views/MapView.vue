<template>

  <div id="agro-map"></div>

  <right-sidebar-component></right-sidebar-component>

  <map-sidebar-component :map="map" :toggleFullScreen="fullScreenMap"></map-sidebar-component>

</template>


<script>

import $ from 'jquery';
import L from 'leaflet';
import MiniMap from 'leaflet-minimap';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import '@/assets/plugins/leaflet/fullscreen/Control.FullScreen';
import 'leaflet-loading/src/Control.Loading.css';
import 'leaflet-loading/src/Control.Loading.js';
import 'leaflet-multicontrol';
import 'leaflet-sidebar-v2';
import 'leaflet.zoomslider';
import 'leaflet-draw';
import 'leaflet-measure';
import 'leaflet-styleeditor';
import 'leaflet-ruler';
import 'leaflet-ruler/src/leaflet-ruler.css';
import 'leaflet.locatecontrol/src/L.Control.Locate';
import 'leaflet.locatecontrol/src/L.Control.Locate.scss';
import 'leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.css';
import 'leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.min';
import 'leaflet-measure/dist/leaflet-measure.css';
import '@geoman-io/leaflet-geoman-free';
import "../assets/plugins/leaflet/leaflet-measure-path/leaflet-measure-path";
import "../assets/plugins/leaflet/panel-layers/panel-layers";


import RightSidebarComponent from "@/components/map/RightSidebarComponent";
import MapSidebarComponent from "@/components/map/MapSidebarComponent";

export default {

  name: "MapView",
  components: {MapSidebarComponent, RightSidebarComponent },

  data() {
    return {
      map: null,
      mapLayers: [
        {
          name: "Google Satellite",
          layer: L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
          }),
          active: true,
        },
        {
          name: "Google Hybrid",
          layer: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
          }),
        },
        {
          name: "Google Streets",
          layer: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
          }),
        },
        {
          name: "Google Terrain",
          layer: L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
          }),
        },
        {
          name: "Open Street Map",
          layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 2,
          }),
        },
      ],
      sidebar: null,
      miniMap: false,
      editableLayers: new L.FeatureGroup(),
      locationController: null,
    }
  },

  methods: {

    initLeafletMap() {

      // initial Leaflet map
      this.map = L.map( 'agro-map', {
            drawControl: true,
            loadingControl: false,
            fullscreenControl: true,
            zoomControl: false,
            measureControl: true,
            center: [51.505, -0.09],
            zoom: 7,
            layers: [
              this.editableLayers
             ],
        });


      // Embedding Leaflet map CONTROLLs

      new MiniMap(new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
          }), { toggleDisplay: true, minimized: true }).addTo(this.map);


      this.map.pm.addControls({ position: 'topleft' });

      L.control.styleEditor({
        position: 'topleft',
        markers: ['circle-stroked', 'circle', 'square-stroked', 'square']
      }).addTo(this.map);

      L.control.zoom({ position: 'bottomright' }).addTo(this.map);
      L.control.zoomslider({ position: 'bottomright' }).addTo(this.map);
      L.control.coordinates({
        position: "bottomleft",
        enableUserInput: false,
        useDMS: false,
        useLatLngOrder: true,
      }).addTo(this.map);
      L.control.panelLayers([
        {
          group: "Map Layers",
          layers: this.mapLayers
        }], {}, { className: "map-style-layer-control"}).addTo(this.map);

      // this.locationController = L.control.locate({
      //     position: "topright",
      //     strings: { title: "Show me where I am, yo!" },
      //     drawCircle: false,
      //     locateOptions: {
      //       enableHighAccuracy: true
      //     }
      //   }).addTo(this.map);
      // L.control.ruler({
      //   position: 'topleft',
      // }).addTo(this.map);


    },


    handleEventOnMap() {

      // this.map.on('click', (event) => console.log(`${event.latlng}`));
      this.map.on('click', () => this.sidebar.close('map-sidebar'));

    },


    layerEditEvents() {

      this.map.on('draw:created', (event) => this.editableLayers.addLayer(event.layer));

      this.map.on('pm:create', (event) => this.editableLayers.addLayer(event.layer));

      this.map.on('pm:change', (event) => this.editableLayers.addLayer(event.layer));

    },


    initMultiControls() {

      const marker = L.marker([51.5, -0.09]).addTo(this.map);
      const marker2 = L.marker([51.51, -0.09]);
      const polygon = L.polygon([[51.51, -0.1],[51.5, -0.08],[51.53, -0.07],[51.50, -0.06]], {color: '#FF0000'}).addTo(this.map);
      const polygon2 = L.polygon([[51.51, -0.1],[51.5, -0.08],[51.53, -0.07],[51.50, -0.06]], {color: '#0122FF'}).addTo(this.map);

      const mylines = [{
        "type": "LineString",
        "coordinates": [[-0.1,51.51], [-0.07,51.53]]
      }, {
        "type": "LineString",
        "coordinates": [[-0.1,51.5], [-0.07,51.50]]
      }];
      const geojson = L.geoJSON(null).addTo(this.map);
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
        }}).addTo(this.map);


      const overlays = [
        {name: 'Marker', layer: marker},
        {name: 'Marker2', layer: marker2},
        {name: 'polygon', layer: polygon},
        {name: 'polygon2', layer: polygon2},
        {name: 'geojson', layer: geojson},
        {name: 'geojsonStates', layer: geojsonStates},
      ];


      L.multiControl( overlays, { position:'topright', label: 'Control de capas'} ).addTo(this.map);

    },


    initMapSidebar() {

      this.sidebar = L.control.sidebar({
        autopan: true,
        closeButton: true,
        container: 'map-sidebar',
        position: 'right',
      }).addTo(this.map);

    },


    condenseSidebar() {
      document.getElementsByTagName('body')[0].setAttribute('data-leftbar-compact-mode', "condensed");
    },


    fullScreenMap() {
      this.map.toggleFullscreen();

      setTimeout(this.condenseSidebar, 30);
    },


    changeMapDesign() {

      // Edit Svg Panel


      $('.leaflet-styleeditor').change('class', function() {
        console.log(111);
      });


      // ZOOM CONTROLS
      $('.leaflet-control-zoom-fullscreen').remove();
      $('.leaflet-control-zoomslider').hide();


      // EDIT LAYER

      $('.leaflet-draw').hide();
      $('.leaflet-pm-toolbar').hide();
      $('.leaflet-control-styleeditor').hide();


      // Map Layer Control

      $('.map-style-layer-control').hide();


      // MINIMAP

      let miniMapRef = $('.leaflet-control-minimap-toggle-display');

      miniMapRef.click(function(event) {

        $(event.currentTarget).css('width', 30).css('height', 30);

        if ($(event.currentTarget).attr('title') === 'Show MiniMap') {
          $('.leaflet-control-minimap').css('width', 30).css('height', 30);
        }
        else {
          $(event.currentTarget).css('width', 19).css('height', 19);
        }


      });

      $('.leaflet-control-minimap .leaflet-bottom.leaflet-right').remove();

      $('.leaflet-control-minimap').css('width', 30).css('height', 30);
      miniMapRef.css('width', 30).css('height', 30);
    },

  },

  mounted() {

    // INITIAL
    this.condenseSidebar();
    this.initLeafletMap();
    // this.initMultiControls();
    this.initMapSidebar();

    // EVENTS
    this.layerEditEvents();
    this.handleEventOnMap();

    // OTHERS
    this.changeMapDesign();

  }

}

</script>


<style lang="scss">
@import "../assets/scss/agromap";
@import '../assets/plugins/leaflet/fullscreen/Control.FullScreen.css';
@import "../assets/plugins/leaflet/zoombar/L.Control.Zoomslider.css";
@import "../assets/plugins/leaflet/zoombar/L.Control.Zoomslider.ie.css";
@import "../assets/plugins/leaflet/minimap/Control.MiniMap.min.css";
@import "../assets/plugins/leaflet/sidebar/leaflet-sidebar.css";
@import "../assets/plugins/leaflet/leaflet-measure-path/leaflet-measure-path.css";
@import "../../node_modules/leaflet-multicontrol/src/L.multiControl.css";
@import "../../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
</style>
