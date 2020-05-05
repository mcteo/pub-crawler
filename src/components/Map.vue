<template>
    <div>
        <!-- The parent google map instance -->
        <gmap-map
            ref="map"
            :center="center"
            :zoom="16"
            style="width: 100%; height: 500px;"
            @click="onMapClicked"
            @mousemove="onMouseMoveHandler"
            :options="{ styles: styles, disableDefaultUI: true }"
        >
            <!-- This holds the user drawn circle -->
            <gmap-circle
                v-if="circleCenter !== null"
                :center="circleCenter"
                :radius="circleRadius"
                @click="onMapClicked"
                @mousemove="onMouseMoveHandler"
                :options="{ strokeColor: '#666', fillColor: '#888' }"
            />
        </gmap-map>
    </div>
</template>

<script>
import gmapApi from 'vue2-google-maps'

export default {
    name: 'Map',
    props: ['center', 'publist'],
    computed: {
        google: gmapApi,
    },
    data() {
        return {
            // holds center coords of user drawn-circle
            circleCenter: null,
            // holds the radius of the user drawn-circle
            circleRadius: null,
            // true if the user is in the progress of drawing their circle
            userIsDrawing: false,
            // to make the map a little easier to see, turn off POI, and transport icons
            styles: [
                {
                    featureType: 'poi',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'transit',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        onMapClicked(event) {
            // if user is not currently drawing, save where they clicked as the new center point
            if (!this.userIsDrawing) {
                this.userIsDrawing = true
                this.circleCenter = event.latLng
                this.circleRadius = 0
                return
            }
            // otherwise, they must be finishing drawing, so raise an event tell the parent
            var circle = {
                center: this.circleCenter,
                radius: this.circleRadius,
            }
            this.$emit('circleDrawn', circle, this.$refs.map.$mapObject)
            this.userIsDrawing = false
        },

        onMouseMoveHandler(event) {
            if (this.userIsDrawing) {
                // if the user is currently drawing, set the current circle radius to the
                // distance between their start point and where their mouse currently is
                this.circleRadius = this.google.maps.geometry.spherical.computeDistanceBetween(
                    this.circleCenter,
                    event.latLng
                )
            }
        },
    },
}
</script>

<style scoped>
* {
    background-color: green;
}
</style>
