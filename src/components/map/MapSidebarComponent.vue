<template>

  <div id="map-sidebar" class="leaflet-sidebar collapsed">

    <div class="leaflet-sidebar-tabs">

      <ul role="tablist">
        <li><a href="#home" role="tab"><i class="mdi mdi-earth"></i></a></li>
        <li class="disabled"><a href="#messages" role="tab"><i class="mdi mdi-information"></i></a></li>
        <li><a @click="_toggleEditLayers"><i class="mdi mdi-tooltip-edit"></i></a></li>
        <li class="disabled">
          <a type="button" role="tab" data-bs-toggle="offcanvas" data-bs-target="#map-layer-list-canvas" aria-controls="map-layer-list">
            <i class="mdi mdi-map-legend text-black font-18" />
          </a >
        </li>
        <li ><a href="#map-layer-list"><i class="mdi mdi-map-legend text-black font-18" /> </a></li>
      </ul>


      <ul role="tablist">
        <li><a @click="_toggleShowMiniMap"><i :class="showMiniMap ? 'mdi mdi-map-check-outline text-black font-18' : 'mdi mdi-map text-black font-18'"></i></a></li>
        <li><a @click="_toggleFullScreen"><i :class="fullScreenMap ? 'mdi mdi-fullscreen-exit text-black font-18' : 'mdi mdi-fullscreen text-black font-18'"></i></a></li>
        <li><a href="#settings" role="tab"><i class="dripicons-gear noti-icon"></i></a></li>
      </ul>

    </div>

    <div class="leaflet-sidebar-content">
      <div class="leaflet-sidebar-pane" id="home">
        <h1 class="leaflet-sidebar-header">
          sidebar-v2
          <span class="leaflet-sidebar-close"><i class="mdi mdi-information"></i></span>
        </h1>
        <p>A responsive sidebar for mapping libraries</p>
      </div>

      <div class="leaflet-sidebar-pane" id="messages">
        <h1 class="leaflet-sidebar-header">Messages<span class="leaflet-sidebar-close"><i class="mdi mdi-information"></i></span></h1>
      </div>

      <div class="leaflet-sidebar-pane" id="settings">
        <h1 class="header-title mb-2">Settings</h1>
        <hr />

        <div class="zoom-control-settings">

          <h4 class="header-title mb-3">Масштабирования</h4>


          <div class="form-check form-switch" >
            <input type="checkbox" class="form-check-input" id="show-zoom-controls" checked>
            <label class="form-check-label" for="show-zoom-controls" @click="_enableZoomControls">Показать кнопки масштабирования</label>
          </div>


          <div class="form-check form-switch">
              <input type="checkbox" class="form-check-input" id="slider-zoom-controls">
              <label class="form-check-label" for="slider-zoom-controls" @click="_toggleZoomControlStyle">Кнопки со слайдером</label>
          </div>


        </div>

      </div>

      <div class="leaflet-sidebar-pane" id="map-layer-list">
        <h4 class="header-title mb-2 leaflet-sidebar-header">Map Layer Style</h4>
        <hr />

        <div class="d-flex flex-wrap justify-content-evenly">
          <div v-for="item in layers" :key="item.id">

            <div class="mb-2 map-layer-item" :data-id="item.id">
              <img :src="item.image" class="rounded" :alt="item.name">
              <h5 >{{ item.name }}</h5>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>

  <map-layer-list-component></map-layer-list-component>

</template>

<script>

import $ from 'jquery';
import '@/assets/plugins/leaflet/fullscreen/Control.FullScreen';
import MapLayerListComponent from "@/components/map/MapLayerListComponent";

export default {
  name: "MapSidebarComponent",
  components: {MapLayerListComponent},
  props: ['map'],


  data() {
    return {
      fullScreenMap: false,
      showMiniMap: true,
      zoomControls: true,
      sliderZoom: false,
      editLayer: true,
      layers: [
        {
          name: "Satellite",
          id: 0,
          image: require('@/assets/images/map-layers/google_satellite.jpg')
        },
        {
          name: "Hybrid",
          id: 1,
          image: require('@/assets/images/map-layers/google_hybrid.jpg'),
        },
        {
          name: "Streets",
          id: 2,
          image: require('@/assets/images/map-layers/google_streets.png'),
        },
        {
          name: "Terrain",
          id: 3,
          image: require('@/assets/images/map-layers/google_terrain.jpg'),
        },
        {
          name: "OSMap",
          id: 4,
          image: require('@/assets/images/map-layers/osm_map.svg'),
        },
      ],
    }
  },


  methods: {

    _toggleEditLayers() {

      if (this.editLayer) {
        $('.leaflet-draw').show();
        $('.leaflet-pm-toolbar').show();
        $('.leaflet-control-styleeditor').show();
      }
      else {
        $('.leaflet-draw').hide();
        $('.leaflet-pm-toolbar').hide();
        $('.leaflet-control-styleeditor').hide();
      }

      this.editLayer = !this.editLayer;

    },


    _toggleFullScreen() {

      this.fullScreenMap = !this.fullScreenMap;
      this.map.toFullscreen();

    },


    _toggleShowMiniMap() {

      let miniMapElement = $('.leaflet-control-minimap ');

      this.showMiniMap ? miniMapElement.hide() : miniMapElement.show();

      this.showMiniMap = !this.showMiniMap;

    },


    _enableZoomControls() {

      let sliderZoom = $('.leaflet-control-zoomslider');
      let sliderButton = $('.leaflet-control-zoom');

      if (this.zoomControls) {

        sliderZoom.hide();
        sliderButton.hide();

      }
      else {
        this.sliderZoom ? sliderZoom.show() : sliderButton.show();
      }

      this.zoomControls = !this.zoomControls;

    },


    _toggleZoomControlStyle() {

      if (this.zoomControls) {

        let sliderZoom = $('.leaflet-control-zoomslider');
        let sliderButton = $('.leaflet-control-zoom');

        if (this.sliderZoom) {
          sliderZoom.show();
          sliderButton.hide();

        }
        else {
          sliderButton.show();
          sliderZoom.hide();

        }
      }

      this.sliderZoom = !this.sliderZoom;

    },


    changeLayer(event) {
      $('.leaflet-panel-layers-item .leaflet-panel-layers-title')[parseInt( $(event.currentTarget).data('id'))].click();
    },

  },


  mounted() {
    $('.map-layer-item').on('click', (event) => this.changeLayer(event));
  }
}

</script>

<style lang="scss" scoped>

.map-layer-item {
  cursor: pointer;
  width: 100px;
  border-radius: 3px;

  h5 {
    padding: 0 5px 4px;
    transition: .2s;
  }

  &:hover {
    background: #e7e7e7;

    h5 {
      color: black;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 90px;
  }
}

</style>
