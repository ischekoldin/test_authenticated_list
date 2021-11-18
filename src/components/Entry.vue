<template>
    <b-card>
        <ValidationObserver ref="entryForm">
            <b-row>
                <b-col>
                    <BVInputWithValidation
                        rules="required"
                        type="text"
                        name="title"
                        v-model="title"
                        label="Наименование*"
                    />
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <BVInputWithValidation
                        rules="required"
                        type="text"
                        name="description"
                        v-model="description"
                        label="Описание*"
                    />
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Заметка">
                        <b-form-input v-model="note" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-alert
                        show
                        variant="danger"
                        v-if="entrySaveFail"
                    >
                        Не удалось сохранить запись
                    </b-alert>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button
                        variant="success"
                        @click="saveEntry"
                    >
                        Сохранить
                    </b-button>
                </b-col>
            </b-row>
        </ValidationObserver>
    </b-card>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

import BVInputWithValidation from '@/components/inputs/BVInputWithValidation';


export default {
    name: "Entry",
    components: {
        BVInputWithValidation,
        ValidationObserver
    },
    props: {
        item: Object
    },
    data() {
        return {
            title:         null,
            description:   null,
            uid:           null,
            note:          null,
            entrySaveFail: false
        }
    },
    methods: {
        async saveEntry() {
            let isValid = await this.$refs.entryForm.validate();
            if (!isValid) return;

            const success = await this.$store.dispatch(
                "list/saveEntry",
                {
                    uid:         this.uid,
                    title:       this.title,
                    description: this.description,
                    note:        this.note
                }
            )

            if (!success) {
                this.entrySaveFail = true;
                return;
            }

            this.$router.back();
        }
    },
    mounted() {
        if (this.item) {
            this.uid         = this.item.uid;
            this.title       = this.item.title;
            this.description = this.item.description;
        }
    }
}
</script>

<style lang="scss">

</style>