<template>
    <div class="field">
        <div class="control is-expanded">
            <gmap-autocomplete
                @place_changed="jumpToLocation"
                placeholder="Jump to Location..."
                class="input is-large"
            >
            </gmap-autocomplete>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {}
    },
    methods: {
        jumpToLocation(place) {
            console.log('Location has been changed!')
            var latLng = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            }
            this.$emit('locationChanged', latLng)
        },
    },
}
</script>

<style scoped></style>
