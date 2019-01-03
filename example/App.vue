<template>
    <div id="app"></div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                
            }
        },
        mounted() {
            this.$toast.show({
                text: 'hello world!',
                type: 'info'
            });
        }
    }
</script>

<style lang="less">
    
</style>