const search_input = document.getElementById('search')
const search_button = document.getElementById('search-button')

const updateFinishCoordinates = ()=> {
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode({
        "address": search_input.value
    }, function (results) {
        navigator.geolocation.getCurrentPosition((position) => {
            let start_coordinate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            let finish_coordinate = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }

            renderMap(start_coordinate, finish_coordinate)
        })
    })
}

const calculateAndDisplayRoute = (start, finish)=> {
    directionsService.route(
        {
            origin: start,
            destination: finish,
            travelMode: 'DRIVING'
        },
        (response, status) => {
            if (status === 'OK') {
                directionsRenderer.setDirections(response)
            } else {
                window.alert(`Direções inválidas.\n\nErro:${JSON.stringify(status)}`)
            }
        }
    )
}

let map
let directionsService
let directionsRenderer

const renderMap = (start_coordiantes, finish_coordinates)=> {

    map = new google.maps.Map(document.getElementById('map'))

    directionsService = new google.maps.DirectionsService()
    directionsRenderer = new google.maps.DirectionsRenderer()
    directionsRenderer.setMap(map)

    const start = start_coordiantes
    const finish = finish_coordinates

    calculateAndDisplayRoute(start, finish)
}

const start = ()=> {
    navigator.geolocation.getCurrentPosition((position) => {
        let start_coordinate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        renderMap(start_coordinate, start_coordinate)
    })
}

start()

const geocoder = new google.maps.Geocoder();

const endereco = 'Coração Eucarístico, Belo Horizonte, Minas Gerais, Brasil';

geocoder.geocode({ address: endereco }, function(results, status) {
    if (status === 'OK') {
        const location = results[0].geometry.location;
        const latitude = location.lat();
        const longitude = location.lng();

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } else {
        console.error('Erro ao geocodificar endereço:', status);
    }
});



// Events
search_button.addEventListener('click', (e) => {
    updateFinishCoordinates()
})
