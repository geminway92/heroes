<template>

    <div class="superheroes-container">
        <h1>Personajes</h1>

        <ListAlfabeto />

        <router-view/>


        
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import useHeroes from '../composables/useHeroes'

export default {
    name: 'Superheroes',
    components: {
        ListAlfabeto: defineAsyncComponent(() => import('../components/ListAlfabeto.vue')),
       
    },
    
    setup() {   
        
                
        const { getHeroe, getHeroeB, getHeroeC, getHeroeD } = useHeroes()

        return {
        
            

            getHeroe,
            getHeroeB,
            getHeroeC,
            getHeroeD,
        }

        
    },
    created(){
        this.getHeroe(),
        this.getHeroeB(),
        this.getHeroeC()
        this.getHeroeD()

    }
    
    
   
   

}
</script>

<style >
h1 {
    font-size: 2rem;
    color: white;
    font-family: 'Bangers', cursive, Arial, Helvetica, sans-serif;
    padding: 5px; 
}

h5 {
    margin-left: 5px;
    font-size: 10px;
}

ul {
    display: flex;
    flex-wrap: wrap;
}


img {
    width: 100%;
    height: 100%;
}


.superheroes-container {
    background-color: var(--red);
    width: 280px;
    height: 100%;
}


.ul-characters {
    margin-bottom: 15px;
}

.li-characters {
    justify-content: space-between;
    background-color: orange;
    width: 100px;
    height: 100px;
    margin: -34px 0px 22px 5px;
    list-style: none;
    cursor: pointer;
}





</style>


