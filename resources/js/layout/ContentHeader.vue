<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-1">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark"><slot></slot></h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped lang="scss">
    .content-header {
        padding: 10px 0.5rem;
    }
</style>
