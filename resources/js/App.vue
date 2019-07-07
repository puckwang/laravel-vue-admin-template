<template>
    <div>
        <Navbar/>
        <Sidebar/>
        <Wrapper>
            <router-view></router-view>
        </Wrapper>
        <ControlSidebar/>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "./layout/Navbar";
    import Sidebar from "./layout/Sidebar";
    import Footer from "./layout/Footer";
    import Wrapper from "./layout/Wrapper";
    import ControlSidebar from "./layout/ControlSidebar";

    export default {
        metaInfo() {
            return {
                titleTemplate: `%s - Laravel`,
            }
        },
        components: {
            Navbar,
            Sidebar,
            Footer,
            Wrapper,
            ControlSidebar
        }
    }
</script>

<style scoped lang="scss">

</style>
