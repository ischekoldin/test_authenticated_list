<template>
    <b-navbar class="header">
        <b-button
            v-if="showBackButton"
            @click="$router.back()"
        >
            <BIconBack />
            Назад
        </b-button>
        <b-button
            pill
            variant="success"
            v-if="showAddButton"
            @click="$router.push('/add')"
        >
            <BIconPlus />
        </b-button>
        <b-button
            variant="info"
            class="ml-auto"
            v-if="showLogoutButton"
            @click="logout"
        >
            Выйти
            <BIconDoorOpen />
        </b-button>
    </b-navbar>
</template>

<script>
export default {
    name: "Header",
    computed: {
        showBackButton() {
            return this.$route.name !== "List";
        },
        showAddButton() {
            return this.showLogoutButton &&
                  !this.showBackButton;
        },
        showLogoutButton() {
            return this.$store.state.loggedIn;
        }
    },
    methods: {
        logout() {
            this.$store.commit(
                "setLoggedIn",
                false
            );
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        background-color: #efefeff5;
    }
</style>