<template>

  <div id="agro-map"></div>

  <right-sidebar-component></right-sidebar-component>

  <map-sidebar-component :map="LMAPi"></map-sidebar-component>

</template>


<script>

import $ from 'jquery';
import L from 'leaflet';
import LMAPL from "@/functions/map";

import "leaflet/dist/leaflet.css";
import 'leaflet-loading/src/Control.Loading.css';
import 'leaflet-loading/src/Control.Loading.js';
import 'leaflet.zoomslider';
import 'leaflet-draw';
import 'leaflet-measure';
import 'leaflet.locatecontrol/src/L.Control.Locate.scss';
import 'leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.css';
import 'leaflet-measure/dist/leaflet-measure.css';
import "../assets/plugins/leaflet/panel-layers/panel-layers";

import RightSidebarComponent from "@/components/map/RightSidebarComponent";
import MapSidebarComponent from "@/components/map/MapSidebarComponent";


export default {

  name: "MapView",
  components: { MapSidebarComponent, RightSidebarComponent },

  data() {
    return {
      LMAPi: null,
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
      miniMap: false,
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
              new L.FeatureGroup()
             ],
        });


      // Init LMAPL Class
      this.LMAPi = new LMAPL({ map: this.map, layers: this.mapLayers });

    },


    changeMapDesign() {

      document.getElementsByTagName('body')[0].setAttribute('data-leftbar-compact-mode', "condensed");


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
    this.initLeafletMap();

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
