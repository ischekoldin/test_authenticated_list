<template>
    <div class="contentWrapper">
        <Header />
        <b-container
            fluid
            class="container"
        >
            <router-view></router-view>
        </b-container>
        <Footer />
    </div>
</template>

<script>

import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
export default {
    name: "Content",
    components: {Footer, Header},
}
</script>

<style lang="scss">
    .contentWrapper {
        display: flex;
        flex-direction: column;
        height: 100%;

        .container {
            flex: 1 1 100%;
        }
    }
</style>