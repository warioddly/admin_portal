<template>
  <div class="leftside-menu">

    <router-link to="/" class="logo text-center logo-light">
      <span class="logo-lg">
          <img src="@/assets/images/logo.png" alt="" height="16">
      </span>
      <span class="logo-sm">
          <img src="@/assets/images/logo_sm.png" alt="" height="16">
      </span>
    </router-link>

    <router-link to="/" class="logo text-center logo-dark">
      <span class="logo-lg">
          <img src="@/assets/images/logo-dark.png" alt="" height="16">
      </span>
      <span class="logo-sm">
          <img src="@/assets/images/logo_sm_dark.png" alt="" height="16">
      </span>
    </router-link>

    <div class="h-100" id="leftside-menu-container" data-simplebar>

      <ul class="side-nav">

        <li class="side-nav-title side-nav-item">Navigation</li>

        <li class="side-nav-item">
          <router-link to="/"  class="side-nav-link">
            <span class="badge bg-success float-end">4</span>
            <i class="uil-home-alt"></i>
            <span> Dashboard </span>
          </router-link>
        </li>

        <li class="side-nav-title side-nav-item">Apps</li>

        <li class="side-nav-item">
          <router-link to="/agromap"  class="side-nav-link">
            <i class="mdi mdi-earth"></i>
            <span> Карта </span>
          </router-link>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-comments-alt"></i>
            <span> Chat </span>
          </a>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
            <i class="uil-store"></i>
            <span> Ecommerce </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarEcommerce">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Products Details</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Order Details</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Shopping Cart</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Sellers</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" class="side-nav-link">
            <i class="uil-envelope"></i>
            <span> Email </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarEmail">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Inbox</a>
              </li>
              <li>
                <a href="#">Read Email</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" class="side-nav-link">
            <i class="uil-briefcase"></i>
            <span> Projects </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarProjects">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Details</a>
              </li>
              <li>
                <a href="#">Gantt <span class="badge rounded-pill badge-light-lighten text-light font-10 float-end">New</span></a>
              </li>
              <li>
                <a href="#">Create Project <span class="badge rounded-pill badge-success-lighten font-10 float-end">New</span></a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-rss"></i>
            <span> Social Feed </span>
          </a>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" class="side-nav-link">
            <i class="uil-clipboard-alt"></i>
            <span> Tasks </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarTasks">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Details</a>
              </li>
              <li>
                <a href="#">Kanban Board</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-folder-plus"></i>
            <span> File Manager </span>
          </a>
        </li>

      </ul>

<!--      <div class="help-box help-box-light text-center">-->
<!--        <a href="javascript: void(0);" class="float-end close-btn text-body">-->
<!--          <i class="mdi mdi-close"></i>-->
<!--        </a>-->
<!--        <img src="#" height="90" alt="Helper Icon Image" />-->
<!--        <h5 class="mt-3">Unlimited Access</h5>-->
<!--        <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>-->
<!--        <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm">Upgrade</a>-->
<!--      </div>-->

      <div class="clearfix"></div>

    </div>

  </div>
</template>

<script>

export default {
  name: "SidebarComponent"
}

</script>

<style scoped>

</style>
