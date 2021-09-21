import { computed, ref } from 'vue'
import { useStore } from 'vuex'


const characters = () => {

    const store = useStore()




    return {
        heroesA: computed(() => store.state.heroes.heroesA),
        heroesB: computed(() => store.state.heroes.heroesB),
        heroesC: computed(() => store.state.heroes.heroesC),
        heroesD: computed(() => store.state.heroes.heroesD),
        getHeroe: () =>  store.dispatch('heroes/getCharacters'),         
        getHeroeB: () =>  store.dispatch('heroes/getCharactersB'),         
        getHeroeC: () =>  store.dispatch('heroes/getCharactersC'),         
        getHeroeD: () =>  store.dispatch('heroes/getCharactersD'),         
    }
    

}        



// Funciona con characters pero no con los getters mirar donde está el fallo
export default characters