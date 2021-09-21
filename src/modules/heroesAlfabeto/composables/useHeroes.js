import { computed, ref } from 'vue'
import { useStore } from 'vuex'


const characters = () => {

    const store = useStore()


    return {
        heroesA: computed(() => store.getters.heroesA),
        characters: computed(() => store.state.heroes.characters),
        getHeroe: () =>  store.dispatch('heroes/getCharacters'),         
    }
    

}        



// Funciona con characters pero no con los getters mirar donde está el fallo
export default characters