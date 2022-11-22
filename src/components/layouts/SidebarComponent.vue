<template>
  <div class="leftside-menu">

    <!-- LOGO -->
    <router-link to="/" class="logo text-center logo-light">
      <span class="logo-lg">
          <img src="@/assets/images/logo.png" alt="" height="16">
      </span>
      <span class="logo-sm">
          <img src="@/assets/images/logo_sm.png" alt="" height="16">
      </span>
    </router-link>

    <!-- LOGO -->
    <a :href="'/'" class="logo text-center logo-dark">
      <span class="logo-lg">
          <img src="@/assets/images/logo-dark.png" alt="" height="16">
      </span>
      <span class="logo-sm">
          <img src="@/assets/images/logo_sm_dark.png" alt="" height="16">
      </span>
    </a>

    <div class="h-100" id="leftside-menu-container" data-simplebar>

      <!--- Sidemenu -->
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

        <li class="side-nav-title side-nav-item">Custom</li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" class="side-nav-link">
            <i class="uil-copy-alt"></i>
            <span> Pages </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarPages">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Profile 2</a>
              </li>
              <li>
                <a href="#">Invoice</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Maintenance</a>
              </li>
              <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth">
                  <span> Authentication </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarPagesAuth">
                  <ul class="side-nav-third-level">
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Login 2</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Register 2</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                    <li>
                      <a href="#">Logout 2</a>
                    </li>
                    <li>
                      <a href="#">Recover Password</a>
                    </li>
                    <li>
                      <a href="#">Recover Password 2</a>
                    </li>
                    <li>
                      <a href="#">Lock Screen</a>
                    </li>
                    <li>
                      <a href="#">Lock Screen 2</a>
                    </li>
                    <li>
                      <a href="#">Confirm Mail</a>
                    </li>
                    <li>
                      <a href="#">Confirm Mail 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError">
                  <span> Error </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarPagesError">
                  <ul class="side-nav-third-level">
                    <li>
                      <a href="#">Error 404</a>
                    </li>
                    <li>
                      <a href="#">Error 404-alt</a>
                    </li>
                    <li>
                      <a href="#">Error 500</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Starter Page</a>
              </li>
              <li>
                <a href="#">With Preloader</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a href="#" target="_blank" class="side-nav-link">
            <i class="uil-globe"></i>
            <span class="badge bg-light text-dark float-end">New</span>
            <span> Landing </span>
          </a>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarLayouts" aria-expanded="false" aria-controls="sidebarLayouts" class="side-nav-link">
            <i class="uil-window"></i>
            <span> Layouts </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarLayouts">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Horizontal</a>
              </li>
              <li>
                <a href="#">Vertical</a>
              </li>
              <li>
                <a href="#">Detached</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-title side-nav-item mt-1">Components</li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" class="side-nav-link">
            <i class="uil-box"></i>
            <span> Base UI </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarBaseUI">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Accordions</a>
              </li>
              <li>
                <a href="#">Alerts</a>
              </li>
              <li>
                <a href="#">Avatars</a>
              </li>
              <li>
                <a href="#">Badges</a>
              </li>
              <li>
                <a href="#">Breadcrumb</a>
              </li>
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">Cards</a>
              </li>
              <li>
                <a href="#">Carousel</a>
              </li>
              <li>
                <a href="#">Dropdowns</a>
              </li>
              <li>
                <a href="#">Embed Video</a>
              </li>
              <li>
                <a href="#">Grid</a>
              </li>
              <li>
                <a href="#">List Group</a>
              </li>
              <li>
                <a href="#">Modals</a>
              </li>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#">Offcanvas</a>
              </li>
              <li>
                <a href="#">Placeholders</a>
              </li>
              <li>
                <a href="#">Pagination</a>
              </li>
              <li>
                <a href="#">Popovers</a>
              </li>
              <li>
                <a href="#">Progress</a>
              </li>
              <li>
                <a href="#">Ribbons</a>
              </li>
              <li>
                <a href="#">Spinners</a>
              </li>
              <li>
                <a href="#">Tabs</a>
              </li>
              <li>
                <a href="#">Tooltips</a>
              </li>
              <li>
                <a href="#">Typography</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" class="side-nav-link">
            <i class="uil-package"></i>
            <span> Extended UI </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarExtendedUI">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Dragula</a>
              </li>
              <li>
                <a href="#">Range Slider</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Scrollbar</a>
              </li>
              <li>
                <a href="#">Scrollspy</a>
              </li>
              <li>
                <a href="#">Treeview</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-layer-group"></i>
            <span> Widgets </span>
          </a>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons" class="side-nav-link">
            <i class="uil-streering"></i>
            <span> Icons </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarIcons">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Dripicons</a>
              </li>
              <li>
                <a href="#">Material Design</a>
              </li>
              <li>
                <a href="#">Unicons</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" class="side-nav-link">
            <i class="uil-document-layout-center"></i>
            <span> Forms </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarForms">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Basic Elements</a>
              </li>
              <li>
                <a href="#">Form Advanced</a>
              </li>
              <li>
                <a href="#">Validation</a>
              </li>
              <li>
                <a href="#">Wizard</a>
              </li>
              <li>
                <a href="#">File Uploads</a>
              </li>
              <li>
                <a href="#">Editors</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" class="side-nav-link">
            <i class="uil-chart"></i>
            <span> Charts </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarCharts">
            <ul class="side-nav-second-level">
              <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarApexCharts" aria-expanded="false" aria-controls="sidebarApexCharts">
                  <span> Apex Charts </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarApexCharts">
                  <ul class="side-nav-third-level">
                    <li>
                      <a href="#">Area</a>
                    </li>
                    <li>
                      <a href="#">Bar</a>
                    </li>
                    <li>
                      <a href="#">Bubble</a>
                    </li>
                    <li>
                      <a href="#">Candlestick</a>
                    </li>
                    <li>
                      <a href="#">Column</a>
                    </li>
                    <li>
                      <a href="#">Heatmap</a>
                    </li>
                    <li>
                      <a href="#">Line</a>
                    </li>
                    <li>
                      <a href="#">Mixed</a>
                    </li>
                    <li>
                      <a href="#">Pie</a>
                    </li>
                    <li>
                      <a href="#">Radar</a>
                    </li>
                    <li>
                      <a href="#">RadialBar</a>
                    </li>
                    <li>
                      <a href="#">Scatter</a>
                    </li>
                    <li>
                      <a href="#">Sparklines</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Britecharts</a>
              </li>
              <li>
                <a href="#">Chartjs</a>
              </li>
              <li>
                <a href="#">Sparklines</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" class="side-nav-link">
            <i class="uil-table"></i>
            <span> Tables </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarTables">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Basic Tables</a>
              </li>
              <li>
                <a href="#">Data Tables</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" class="side-nav-link">
            <i class="uil-location-point"></i>
            <span> Maps </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarMaps">
            <ul class="side-nav-second-level">
              <li>
                <a href="#">Google Maps</a>
              </li>
              <li>
                <a href="#">Vector Maps</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" class="side-nav-link">
            <i class="uil-folder-plus"></i>
            <span> Multi Level </span>
            <span class="menu-arrow"></span>
          </a>
          <div class="collapse" id="sidebarMultiLevel">
            <ul class="side-nav-second-level">
              <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel">
                  <span> Second Level </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarSecondLevel">
                  <ul class="side-nav-third-level">
                    <li>
                      <a href="javascript: void(0);">Item 1</a>
                    </li>
                    <li>
                      <a href="javascript: void(0);">Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel">
                  <span> Third Level </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarThirdLevel">
                  <ul class="side-nav-third-level">
                    <li>
                      <a href="javascript: void(0);">Item 1</a>
                    </li>
                    <li class="side-nav-item">
                      <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel">
                        <span> Item 2 </span>
                        <span class="menu-arrow"></span>
                      </a>
                      <div class="collapse" id="sidebarFourthLevel">
                        <ul class="side-nav-forth-level">
                          <li>
                            <a href="javascript: void(0);">Item 2.1</a>
                          </li>
                          <li>
                            <a href="javascript: void(0);">Item 2.2</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <!-- Help Box -->
      <div class="help-box help-box-light text-center">
        <a href="javascript: void(0);" class="float-end close-btn text-body">
          <i class="mdi mdi-close"></i>
        </a>
        <img src="#" height="90" alt="Helper Icon Image" />
        <h5 class="mt-3">Unlimited Access</h5>
        <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
        <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm">Upgrade</a>
      </div>
      <!-- end Help Box -->
      <!-- End Sidebar -->

      <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

  </div>
</template>

<script>

export default {
  name: "SidebarComponent"
}

</script>

<style scoped>

</style>
