import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        weather: null, //weatherの初期値をnullにする
        error: null //errorの初期値をnullにする
    },
    mutations: {
        setWeather(state, weather) { //state・weatherを引数として、以下をsetWeatherとする
            state.weather = weather; //stateのweatherを「weather」とする
        },
        setError(state, error) { //state・errorを引数として、以下をsetErrorとする
            state.error = error; //stateのerrorを「error」とする
        }
    },
    actions: {
        async fetchWeather({ commit }, city) { //cityを引数として、以下をfetchWeatherとする
            try {
                const response = await axios.get(`https://wttr.in/${city}?format=j1`); //天気APIを取得
                commit('setWeather', response.data); //APIから返された「data」をsetWeatherにコミット
                commit('setError', null); //serErrorにnullをコミット
            } catch (error) { //エラーの場合
                commit('setError', 'City not found or other error occured'); //「City not found or other error occured」をsetErrorにコミット
                commit('setWeather', null); //setWeatherにnullをコミット
            }
        }
    }
});

export default store;