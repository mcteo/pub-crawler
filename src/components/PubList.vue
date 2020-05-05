<template>
    <nav class="publist panel">
        <a class="panel-block" v-for="pub in publist" :key="pub.id">
            <span class="panel-icon">
                <figure class="image is-16x16">
                    <img :src="pub.icon" />
                </figure>
            </span>
            {{ pub.name }}
        </a>
    </nav>
</template>

<script>
export default {
    name: 'PubList',
    props: ['publist'],
    data() {
        return {
            pubLimit: 10,
        }
    },
}
</script>

<style scoped></style>
