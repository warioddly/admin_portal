<template>
  <div id="map-sidebar" class="leaflet-sidebar collapsed">

    <div class="leaflet-sidebar-tabs">

      <ul role="tablist">
        <li><a href="#home" role="tab"><i class="mdi mdi-earth"></i></a></li>
        <li class="disabled"><a href="#messages" role="tab"><i class="mdi mdi-information"></i></a></li>
        <li><a href="#messages" role="tab"><i class="mdi mdi-tooltip-edit"></i></a></li>
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
        <h1 class="header-title mb-3">Settings</h1>
        <hr />

        <div class="zoom-control-settings">

          <h4 class="header-title mb-3">Масштабирования</h4>


          <div class="form-check form-switch" >
            <input type="checkbox" class="form-check-input" id="show-zoom-controls" checked :value="zoomControls">
            <label class="form-check-label" for="show-zoom-controls" @click="_enableZoomControls">Показать кнопки масштабирования</label>
          </div>


          <div class="form-check form-switch">
              <input type="checkbox" class="form-check-input" id="slider-zoom-controls">
              <label class="form-check-label" for="slider-zoom-controls" @click="_toggleZoomControlStyle">Кнопки со слайдером</label>
          </div>


        </div>

      </div>

    </div>

  </div>
</template>

<script>

import $ from 'jquery';
import '@/assets/plugins/leaflet/fullscreen/Control.FullScreen';

export default {
  name: "MapSidebarComponent",
  props: ['map', 'toggleFullScreen'],


  data() {
    return {
      fullScreenMap: false,
      showMiniMap: true,
      zoomControls: false,
      sliderZoom: false,
    }
  },


  methods: {

    _toggleFullScreen() {
      this.fullScreenMap = !this.fullScreenMap;
      this.toggleFullScreen();
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

        sliderButton.show();

      }
      else {
        sliderZoom.hide();
        sliderButton.hide();
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

        this.sliderZoom = !this.sliderZoom;

      }

    }

  }
}
</script>

<style lang="scss" scoped>
</style>
