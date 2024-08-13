<template>
  <v-container>
    <v-text-field v-model="city" label="city" @keyup.enter="getWeather"></v-text-field> <!-- Enterキーを押したらgetWeatherを実行 -->
    <v-btn @click="getWeather">Search</v-btn><!-- クリックしたらgetWeatherを実行 -->
    <WeatherCard :weather="weather" :error="error" />
  </v-container>
</template>
  
<script>
import { mapState } from 'vuex';
import WeatherCard from '../components/WeatherCard.vue';

export default {
  components: {
    WeatherCard //「WeatherCard」コンポーネントを使えるようにする
  },
  data() {
    return {
      city: '' //cityの値を空にしておく
    };
  },
  computed: {
    ...mapState(['weather', 'error']) //（WeatherCardコンポーネントに）「weather」プロパティと「error」プロパティを登録
  },
  methods: {
    getWeather() {
      this.$store.dispatch('fetchWeather', this.city); //「city」プロパティを引数に、storeのfetchWeather関数を実行
    }
  }
}

</script>
  