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

            setTimeout(() => {
                this.$toast.show({text: 'hello world!'});
            }, 3000)
        }
    }
</script>

<style lang="less">
    
</style>