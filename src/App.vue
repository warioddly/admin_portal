<template>

  <div class="wrapper">

    <sidebar-component></sidebar-component>

    <div class="content-page">
      <div class="content">

        <navbar-component></navbar-component>

        <!-- Start Content-->
        <router-view/>
        <!-- End Content-->

      </div>


      <footer-component v-if="$route.name !== 'agromap'"></footer-component>


    </div>


  </div>
</template>


<script>

import SidebarComponent from "@/components/layouts/SidebarComponent";
import FooterComponent from "@/components/layouts/FooterComponent";
import NavbarComponent from "@/components/layouts/NavbarComponent";

export default {

  components: { NavbarComponent, FooterComponent, SidebarComponent },


  mounted() {

    this.$store.dispatch('theme/setTheme');

  }
}

</script>


<style lang="scss">


</style>
