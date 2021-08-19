<template>
  <div class="grid h-screen m-0 p-0 custom-admin">

    <!--  Sidebar  -->
    <div class="col-fixed custom-sidebar">
      <div class="w-full mt-4 mb-6 text-center">
        <img src="../assets/logo_web.png" class="custom-logo"/>
      </div>
      <div class="grid align-items-center mx-4 text-gray-600 pointer custom-sidebar-menu custom-sidebar-menu-active shadow-2">
        <div class="col text-center">
          <i class="pi pi-th-large text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Dashboard</p>
        </div>
      </div>
      <Divider class="mb-4"/>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center">
          <i class="pi pi-user text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Candidates</p>
        </div>
      </div>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center">
          <i class="pi pi-id-card text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Employees</p>
        </div>
      </div>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center">
          <i class="pi pi-calendar-times text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Standby</p>
        </div>
      </div>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center">
          <i class="pi pi-chart-line text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Reports</p>
        </div>
      </div>
      <Divider class="mb-4"/>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center">
          <i class="pi pi-cog text-xl custom-icon"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Settings</p>
        </div>
      </div>
      <div class="grid align-items-center mx-4 mb-3 text-gray-600 custom-sidebar-menu cursor-pointer">
        <div class="col text-center custom-icon">
          <i class="pi pi-sign-out text-xl"></i>
        </div>
        <div class="col-fixed custom-text-icon">
          <p class="my-0">Sign Out</p>
        </div>
      </div>
    </div>
    <!-- --------- -->

    <div class="col p-0">

      <!--  Navbar  -->
      <div class="custom-navbar">
        <div class="grid h-full mx-1 my-auto">
          <div class="col-fixed text-left my-auto ml-2">
            <i class="pi pi-align-justify text-3xl custom-navbar-button hidden"></i>
          </div>
          <div class="col text-right my-auto">
            <Avatar icon="pi pi-user" shape="circle" class="mr-2 custom-user-icon"/>
            <h3 class="inline-block my-auto custom-user-name">Adam Syarif Hidayatullah</h3>
          </div>
        </div>
      </div>
      <!-- --------- -->

      <!--  Content  -->
      <div class="custom-content">

      </div>
      <!-- --------- -->

    </div>

  </div>
</template>

<script>

export default {
  name: "Dashboard",
}
</script>

<style scoped lang="scss">
* {
  //border: 1px solid;
}

@media only screen and (min-height: 950px){
  .custom-sidebar {
    width: 400px !important;
  }

  .custom-navbar {
    height: 100px !important;
  }

  .custom-logo {
    width: 120px !important;
  }

  .custom-text-icon {
    font-size: 20px !important;
  }

  .custom-sidebar-menu {
    margin-bottom: 35px !important;
  }

  .custom-icon {
    font-size: 25px !important;
  }

  .custom-logo {
    width: 180px !important;
  }
}

@media only screen and (max-width: 900px) {
  .custom-sidebar {
    width: 150px !important;
  }

  .custom-text-icon {
    display: none !important;
  }

  .custom-logo {
    width: 120px !important;
  }
}

@media only screen and (max-width: 650px) {
  .custom-sidebar {
    display: none !important;
  }

  .custom-navbar-button {
    width: 40px !important;
    display: block !important;
  }

  .custom-user-name {
    font-size: 13px !important;
  }
}

.custom-logo {
  width: 150px;
}

.custom-admin {
  font-family: 'Montserrat', serif;
}

.custom-sidebar-menu-active {
  background-color: #f6faff;
  border-radius: 10px;
  color: #329dff !important;
  cursor: not-allowed;
  font-weight: bold;
}

.custom-navbar {
  background-color: #ffffff;
  height: 70px;
  border-bottom: 3px solid grey;
}

.custom-sidebar {
  width: 300px;
  background-color: #ffffff;
  border-right: 1px solid grey;
}

.custom-content {
  background-color: #eff5f7;
}

.custom-text-icon {
  width: 70%;
}
</style>
