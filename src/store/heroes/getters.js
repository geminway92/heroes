
// export const myGetter = ( state ) => {
//  return state
// }

export const heroesA = ( state ) => {

    const heroesletterA = []
     
    for ( let id = 0; id < 59; id++ ) {
        
        heroesletterA.push( state.characters[id])
    }
    return heroesletterA
}

