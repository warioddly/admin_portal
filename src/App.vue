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

  <right-sidebar-component></right-sidebar-component>


</template>


<script>

import SidebarComponent from "@/components/layouts/SidebarComponent";
import FooterComponent from "@/components/layouts/FooterComponent";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import RightSidebarComponent from "@/components/layouts/RightSidebarComponent";

export default {

  components: {RightSidebarComponent, NavbarComponent, FooterComponent, SidebarComponent },

}

</script>


<style lang="scss">

.content-page {
  padding: 0;
}

</style>
