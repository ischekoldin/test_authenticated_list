<template>
    <Entry :item="item" />
</template>

<script>
import Entry from '@/components/Entry';
export default {
    name: "Edit",
    components: {Entry},
    props: {
        item: {
            type:    Object,
            default: () => {}
        }
    },
}
</script>

<style>

</style>