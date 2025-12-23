import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

type Coordinates = {
  lat: number
  lng: number
}

declare var ol: any

function searchAddressHander(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURI(
    enteredAddress
  )}&format=json`

  axios
    .get(url)
    .then((response) => {
      if (response.data.length === 0)
        throw new Error('Could not fetch location!')

      const data = response.data[0]
      const coordinates: Coordinates = {
        lat: +data.lat,
        lng: +data.lon,
      }

      document.getElementById('map')!.innerHTML = ''

      new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
          zoom: 16,
        }),
      })
    })
    .catch((err) => {
      alert(err.message)
      console.log(err)
    })
}

form.addEventListener('submit', searchAddressHander)
