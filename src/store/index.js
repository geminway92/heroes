import { createStore } from 'vuex'
import charactersStore from './heroes'



const store = createStore({
    modules: {
        heroes: charactersStore
    }

})

export default store