<template>
    <b-table
        tbody-tr-class="cursor-pointer"
        @row-clicked="rowClickHandler($event)"
        responsive
        show-empty
        empty-text="Список пуст"
        :items="entries"
        :fields="fields"
    >
        <template #cell(action)="data">
            <b-button
                variant="danger"
                @click="removeEntryHandler(data.item.uid)"
            >
                <BIconTrash />
            </b-button>
        </template>
    </b-table>
</template>

<script>

import { RemoveEntryConfirmation } from '@/misc';

export default {
    name: "EntryList",
    data() {
        return {
            fields: [
                {
                    key:      "title",
                    label:    "Наименование",
                    sortable: true
                },
                {
                    key:      "description",
                    label:    "Описание",
                },
                {
                    key:      "note",
                    label:    "Заметка",
                },
                {
                    key:      "action",
                    label:    "Действие",
                }
            ]
        }
    },
    computed: {
        entries() {
            return this.$store.state.list.entries;
        },
    },
    methods: {
        rowClickHandler(item) {
            this.$router.push({name: "Edit", params: {item: item}});
        },
        async removeEntryHandler(entryUid) {
            const confirmed = await this.$bvModal
                .msgBoxConfirm(
                    RemoveEntryConfirmation.message,
                    RemoveEntryConfirmation.options
                )

            if (confirmed) {
                await this.$store.dispatch(
                    "list/removeEntry",
                    entryUid
                )
            }
        }
    },
}
</script>

<style lang="scss">

</style>