<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="map-layer-list-canvas" data-bs-backdrop="false" aria-labelledby="map-layer-list-label">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="map-layer-list-label">Map Layers</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

      <h5 class="mt-3 ">List</h5>

      <div class="d-flex flex-wrap justify-content-between">
        <div v-for="item in layers" :key="item.id">

          <div class="mb-2 map-layer-item" :data-id="item.id">
            <img :src="item.image" class="rounded" :alt="item.name">
            <h5 >{{ item.name }}</h5>
          </div>

        </div>
      </div>


    </div>
    <div class="offcanvas-footer">
      <h5 class="ms-2">warioddly</h5>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {

  name: "MapLayerListComponent",

  data() {
    return {
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

    changeLayer(event) {
      $('.leaflet-panel-layers-item .leaflet-panel-layers-title')[parseInt($(event.currentTarget).data('id'))].click();
    },

  },

  mounted() {

    $('.map-layer-item').on('click', (event) => this.changeLayer(event));

  }

}
</script>

<style scoped lang="scss">

.offcanvas-start {
  width: 250px;

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

}

</style>
