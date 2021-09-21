
import superheroapi from '../../Api/superheroe-Api'

// export const myAction = async ({ commit }) => {

// }



export  const getCharacters = async( { commit } ) => {
    
    const characters = []
    
    for (let id = 1; id < 731; id++)  {
        const { data } = await superheroapi.get(`/${id}`)
            
        characters.push(data)
            
        commit('setHeroes', characters )
        
   
            
    }
}



