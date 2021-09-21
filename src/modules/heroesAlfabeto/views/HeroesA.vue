<template>
    <h1>Estoy en heroesA</h1>
    <div  class="ul-characters">
            <ul>

                <li v-for="item in heroesletterA" :key="item" class="li-characters"
                >
                {{item.name}} <img :src="item.image.url"  alt="">
                
                </li>  

            </ul>
                
        </div>
</template>

<script>
import useHeroes from '../../heroesAlfabeto/composables/useHeroes'


export default {
    name: 'letter-a',

    setup() {

        const { characters, heroesA} = useHeroes(heroesA)

        return{
            characters,
            heroesA,

        }
    }
   
}


</script>
