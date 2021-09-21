
import superheroapi from '../../Api/superheroe-Api'

// export const myAction = async ({ commit }) => {

// }



export  const getCharacters = async( { commit } ) => {
    
    const heroesA = []
    
    for (let id = 1; id < 59; id++)  {
        const { data } = await superheroapi.get(`/${id}`)
            
        heroesA.push(data)
            
        commit('setHeroes', heroesA )
               
    }
    
}


export  const getCharactersB = async( { commit } ) => {
    
    const heroesB = []
    
    for (let id = 60; id < 144; id++)  {
        const { data } = await superheroapi.get(`/${id}`)
            
        heroesB.push(data)
            
        commit('setHeroesB', heroesB )
               
    }
    
}

export  const getCharactersC = async( { commit } ) => {
    
    const heroesC = []
    
    for (let id = 145; id < 197; id++)  {
        const { data } = await superheroapi.get(`/${id}`)
            
        heroesC.push(data)
            
        commit('setHeroesC', heroesC )
               
    }
    
}


export  const getCharactersD = async( { commit } ) => {
    
    const heroesD = []
    
    for (let id = 145; id < 197; id++)  {
        const { data } = await superheroapi.get(`/${id}`)
            
        heroesD.push(data)
            
        commit('setHeroesD', heroesD )
               
    }
    
}





