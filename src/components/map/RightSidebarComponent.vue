<template>

  <div class="end-bar">

    <div class="rightbar-title">
      <a href="javascript:void(0);" class="end-bar-toggle float-end">
        <i class="dripicons-cross noti-icon"></i>
      </a>
      <h5 class="m-0">Settings</h5>
    </div>

    <div class="rightbar-content h-100" data-simplebar>

      <div class="p-3">

<!--        <div class="alert alert-warning" role="alert">-->
<!--          <strong>Customize </strong> the overall color scheme, layout width, etc.-->
<!--        </div>-->


      </div>

    </div>
  </div>

  <div class="rightbar-overlay"></div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {

  name: "RightSidebarComponent",
  computed: {
    ...mapGetters(['theme/condensed', 'theme/boxed', 'theme/theme']),
  },

  methods: {

    changeTheme(event) {

      if (event.target.checked) {

        document.getElementById('light-style').removeAttribute('disabled');
        document.getElementsByTagName('body')[0].setAttribute('data-leftbar-theme', "light");
        document.getElementById('dark-style').setAttribute('disabled', "disabled");

      }
      else {

        document.getElementById('dark-style').removeAttribute('disabled');
        document.getElementById('light-style').setAttribute('disabled', "disabled");
        document.getElementsByTagName('body')[0].setAttribute('data-leftbar-theme', "dark");

      }

      this.$store.commit("theme/SET_THEME", event.target.checked ? "light" : "dark");

    },

    changeSidebarCondense(event) {

      document.getElementsByTagName('body')[0].setAttribute('data-leftbar-compact-mode', event.target.checked ? "condensed" : "");

    },

    ...mapMutations(["theme/SET_THEME", "theme/SET_BOX_TYPE", "theme/SET_CONDENSE"]),

  },

  mounted() {

    // console.log(this.theme === 'light');
    // if (this.theme === 'light')
    //   document.getElementById('theme-mode-check').setAttribute("checked", "checked");
    //
    // console.log(document.getElementById('theme-mode-check').checked);

  }
}
</script>

<style scoped>

</style>
