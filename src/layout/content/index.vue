<template>
    <div class="c-content">
        <transition name='pageFade'>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@include component('content'){
    min-height: 100vh
}
</style>


