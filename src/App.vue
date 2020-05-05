<template>
    <div id="app">
        <h1 class="title">Pub Crawl Generator - Click to Draw a Circle</h1>
        <SearchBar @locationChanged="updateMapLocation" />
        <div class="columns">
            <div class="column is-two-thirds">
                <Map
                    :center="location"
                    :publist="pubs"
                    @circleDrawn="refreshPubList"
                />
            </div>
            <div class="column">
                <PubList :publist="pubs" />
            </div>
        </div>
    </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import Map from './components/Map'
import SearchBar from './components/SearchBar'
import PubList from './components/PubList'

export default {
    name: 'App',
    components: {
        Map,
        SearchBar,
        PubList,
    },
    data() {
        return {
            location: {
                // Carlow Town :)
                lat: 52.836168,
                lng: -6.9304605,
            },
            pubs: [],
        }
    },
    computed: {
        google: gmapApi,
    },
    methods: {
        updateMapLocation(newLocation) {
            this.location = newLocation
        },
        refreshPubList(circle, map) {
            this.map = map
            var request = {
                location: circle.center,
                radius: circle.radius,
                type: ['bar'],
            }
            var service = this.google.maps.places.PlacesService(map)
            service.nearbySearch(request, this.onSearchCompleteCallback)
        },
        onSearchCompleteCallback(results /*, status, pagination*/) {
            // clear the existing pubs
            this.pubs = []

            // create a list of the pubs we want to stop in
            var waypoints = []
            for (
                var i = results.length - 1;
                i >= 0 && this.pubs.length <= 12;
                i--
            ) {
                this.pubs.push(results[i])
                waypoints.push({
                    location: results[i].geometry.location,
                    stopover: true,
                })
            }

            // create the Directions API query, from pub[0] -> pub[-1],
            // including stopping at all the intermediate pubs
            var request = {
                origin: this.pubs[0].geometry.location,
                destination: this.pubs[this.pubs.length - 1].geometry.location,
                travelMode: 'WALKING',
                waypoints: waypoints,
                optimizeWaypoints: true,
                provideRouteAlternatives: false,
            }

            // keep a reference to our maps renderer for directions
            this.mapDirectionsRenderer = this.google.maps.DirectionsRenderer({
                draggable: true,
                map: this.map,
            })

            // instantiate the service
            var directionsService = this.google.maps.DirectionsService()
            directionsService.route(request, this.onDirectionsCompleteCallback)
        },
        onDirectionsCompleteCallback(response /*, status*/) {
            this.mapDirectionsRenderer.setDirections(response)
        },
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
