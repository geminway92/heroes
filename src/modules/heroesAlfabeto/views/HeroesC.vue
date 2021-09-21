<template>
    <div  class="ul-characters">
            <ul>

                <li v-for="item in heroesC" :key="item" class="li-characters"
                >
                {{item.name}} <img :src="item.image.url"  alt="">
                
                </li>  

            </ul>
                
        </div>
</template>

<script>
import useHeroes from '../composables/useHeroes'


export default {
    name: 'letter-c',

    setup() {

        const { heroesC } = useHeroes()

        return{
            heroesC,

        }
    }
   
}


</script>
