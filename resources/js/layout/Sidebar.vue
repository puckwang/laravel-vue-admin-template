<template>
    <aside class="main-sidebar elevation-4" :class="sidebarTheme">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link" :class="brandTheme">
            <img src="/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                        <NavLink icon="home" link="#/">
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink icon="democrat" link="#/demo">
                            Demo
                        </NavLink>
                    </li>
                    <li class="nav-item has-treeview">
                        <NavLink icon="table" link="#">
                            Example
                        </NavLink>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <NavLink icon="chevron-circle-right" link="#/example">
                                    Example
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    import NavLink from "./NavLink";
    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState('ControlSidebar', [
                'sidebarTheme',
                'brandTheme'
            ])
        },
        components: {
            NavLink
        }
    };
</script>

<style scoped lang="scss">

</style>
