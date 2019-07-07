<template>
    <aside class="control-sidebar control-sidebar-dark">
        <div class="p-3 control-sidebar-content"><h5>Customize AdminLTE</h5>
            <hr class="mb-2">
            <h6>Navbar Variants</h6>
            <div class="d-flex">
                <div class="d-flex flex-wrap mb-3">
                    <div class="navbar-primary elevation-2"
                         @click="setNavbarTheme('navbar-primary navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-secondary elevation-2"
                         @click="setNavbarTheme('navbar-secondary navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-info elevation-2"
                         @click="setNavbarTheme('navbar-info navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-success elevation-2"
                         @click="setNavbarTheme('navbar-success navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-danger elevation-2"
                         @click="setNavbarTheme('navbar-danger navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-indigo elevation-2"
                         @click="setNavbarTheme('navbar-indigo navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-purple elevation-2"
                         @click="setNavbarTheme('navbar-purple navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-pink elevation-2"
                         @click="setNavbarTheme('navbar-pink navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-teal elevation-2"
                         @click="setNavbarTheme('navbar-teal navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-cyan elevation-2"
                         @click="setNavbarTheme('navbar-cyan navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-dark elevation-2"
                         @click="setNavbarTheme('navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-gray-dark elevation-2"
                         @click="setNavbarTheme('navbar-gray-dark navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-gray elevation-2"
                         @click="setNavbarTheme('navbar-gray navbar-dark')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-light elevation-2"
                         @click="setNavbarTheme(' navbar-light')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-warning elevation-2"
                         @click="setNavbarTheme('navbar-warning navbar-light')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-white elevation-2"
                         @click="setNavbarTheme('navbar-white navbar-light')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                    <div class="navbar-orange elevation-2"
                         @click="setNavbarTheme('navbar-orange navbar-light')"
                         style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                </div>
            </div>
            <h6>Dark Sidebar Variants</h6>
            <div class="d-flex"></div>
            <div class="d-flex flex-wrap mb-3">
                <div class="bg-primary elevation-2"
                     @click="setSidebarTheme('sidebar-dark-primary')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-warning elevation-2"
                     @click="setSidebarTheme('sidebar-dark-warning')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-info elevation-2"
                     @click="setSidebarTheme('sidebar-dark-info')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-danger elevation-2"
                     @click="setSidebarTheme('sidebar-dark-danger')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-success elevation-2"
                     @click="setSidebarTheme('sidebar-dark-success')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
            </div>
            <h6>Light Sidebar Variants</h6>
            <div class="d-flex"></div>
            <div class="d-flex flex-wrap mb-3">
                <div class="bg-primary elevation-2"
                     @click="setSidebarTheme('sidebar-light-primary')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-warning elevation-2"
                     @click="setSidebarTheme('sidebar-light-warning')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-info elevation-2"
                     @click="setSidebarTheme('sidebar-light-info')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-danger elevation-2"
                     @click="setSidebarTheme('sidebar-light-danger')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="bg-success elevation-2"
                     @click="setSidebarTheme('sidebar-light-success')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
            </div>
            <h6>Brand Logo Variants</h6>
            <div class="d-flex"></div>
            <div class="d-flex flex-wrap mb-3">
                <div class="navbar-primary elevation-2"
                     @click="setBrandTheme('navbar-primary')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-secondary elevation-2"
                     @click="setBrandTheme('navbar-secondary')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-info elevation-2"
                     @click="setBrandTheme('navbar-info')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-success elevation-2"
                     @click="setBrandTheme('navbar-success')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-danger elevation-2"
                     @click="setBrandTheme('navbar-danger')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-indigo elevation-2"
                     @click="setBrandTheme('navbar-indigo')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-purple elevation-2"
                     @click="setBrandTheme('navbar-purple')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-pink elevation-2"
                     @click="setBrandTheme('navbar-pink')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-teal elevation-2"
                     @click="setBrandTheme('navbar-teal')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-cyan elevation-2"
                     @click="setBrandTheme('navbar-cyan')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-dark elevation-2"
                     @click="setBrandTheme('navbar-dark')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-gray-dark elevation-2"
                     @click="setBrandTheme('navbar-gray-dark')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-gray elevation-2"
                     @click="setBrandTheme('navbar-gray')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-light elevation-2"
                     @click="setBrandTheme(' navbar-light')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-warning elevation-2"
                     @click="setBrandTheme('navbar-warning')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-white elevation-2"
                     @click="setBrandTheme('navbar-white')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <div class="navbar-orange elevation-2"
                     @click="setBrandTheme('navbar-orange')"
                     style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"></div>
                <a href="javascript:void(0)" @click="setBrandTheme('')">clear</a></div>
        </div>
    </aside>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        methods: {
            ...mapActions('ControlSidebar', [
                'setNavbarTheme',
                'setSidebarTheme',
                'setBrandTheme'
            ])
        }
    };
</script>

<style scoped lang="scss">

</style>
