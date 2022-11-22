<template>
  <div id="agro-map"></div>
</template>


<script>

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from 'leaflet';
// eslint-disable-next-line no-unused-vars
import LD from 'leaflet-draw';


export default {
  name: "MapView",

  components: { },

  data() {
    return {
      map: null,
    }
  },


  methods: {

    initLeafletMap() {

      this.map = L.map('agro-map', { drawControl: true })
          .setView([51.505, -0.09], 7)
          .addLayer(new L.FeatureGroup());


      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 2,
      }).addTo(this.map);

    },


    addPolygonToMap() {

      // console.log(this.map.getZoom());

    },


    handleClickOnMap() {

      // this.map.on('click', (event) => console.log(`${event.latlng}`));

      this.map.on('draw:created', function (event) {

        var shape_for_db = JSON.stringify(event.layer.toGeoJSON());

        console.log(`shape_for_db ${shape_for_db}`);

      });


    },


    condenseSidebar() {
      document.getElementsByTagName('body')[0].setAttribute('data-leftbar-compact-mode', "condensed");
    }


  },


  mounted() {

    this.condenseSidebar();
    this.initLeafletMap();
    this.addPolygonToMap();
    this.handleClickOnMap();

  }

}

</script>




<style>

#agro-map {
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

body {
  overflow: hidden;
}

.content-page {
  padding: 70px 0 0;
}

</style>
