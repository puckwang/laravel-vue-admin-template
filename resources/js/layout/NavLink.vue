<template>
    <a :href="link" class="nav-link" :class="active">
        <font-awesome-icon :icon="icon" class="nav-icon"/>
        <p>
            <slot></slot>
        </p>
    </a>
</template>

<script>
    export default {
        props: {
            icon: [String, Array],
            link: String
        },
        computed: {
            active() {
                return this.$route.path === this.link.replace('#', '') ? 'active' : '';
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
