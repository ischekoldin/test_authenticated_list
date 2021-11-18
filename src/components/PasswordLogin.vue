<template>
    <b-form class="password-login">
        <b-card bg-variant="light">
            <b-form-group>
                <b-row>
                    <b-col>
                        <ValidationObserver ref="loginForm">
                            <BVInputWithValidation
                                rules="required"
                                type="text"
                                name="username"
                                v-model="username"
                                placeholder="Логин"
                            />
                            <BVInputWithValidation
                                rules="required"
                                type="password"
                                name="password"
                                v-model="password"
                                placeholder="Пароль"
                            />
                            <b-alert
                                show
                                variant="danger"
                                v-if="invalidCredentials"
                            >
                                Неверный логин или пароль
                            </b-alert>
                            <b-button
                                class="mt-3"
                                @click="passwordLogin"
                            >
                                Войти
                            </b-button>
                        </ValidationObserver>
                    </b-col>
                </b-row>

            </b-form-group>
        </b-card>
    </b-form>

</template>

<script>

import { ValidationObserver } from 'vee-validate';
import BVInputWithValidation from '@/components/inputs/BVInputWithValidation';

import {
    ValidLogin,
    ValidPassword
} from '@/misc';

export default {
    name: "PasswordLogin",
    components: {
        BVInputWithValidation,
        ValidationObserver
    },
    data() {
        return {
            username: null,
            password: null,
            invalidCredentials: false
        }
    },
    methods: {
        async passwordLogin() {
            let isValid = await this.$refs.loginForm.validate();
            if (!isValid) return;

            if (
                this.password !== ValidPassword ||
                this.username !== ValidLogin
            )
            {
                this.invalidCredentials = true;
                return;
            }

            this.$store.commit("setLoggedIn", true);
            await this.$router.push("/");
        },
    },
    mounted() {
        if (this.$store.state.loggedIn) {
            this.$router.push("/");
        }
    }
}
</script>

<style lang="scss">
    .password-login {
        position: relative;
        top: 25%;
    }
</style>