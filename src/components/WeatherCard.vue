<template>
    <v-card v-if="weather" class="mx-auto" max-width="400">
      <v-card-title>{{ weather.nearest_area[0].areaName[0].value }}</v-card-title>
      <v-card-subtitle>{{ weather.current_condition[0].weatherDesc[0].value }}</v-card-subtitle>
      <v-card-text>
        <div>Temperature: {{ weather.current_condition[0].temp_C }} °C</div>
        <div>Humidity: {{ weather.current_condition[0].humidity }} %</div>
        <div>Wind Speed: {{ weather.current_condition[0].windspeedKmph }} km/h</div>
      </v-card-text>
    </v-card>
    <v-alert v-else type="error" v-if="error">{{ error }}</v-alert>
  </template>
  
  <script>
  export default {
    props: ['weather', 'error']
  };
  </script>
  