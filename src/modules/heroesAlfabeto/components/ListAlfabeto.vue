<template>
    <div class="abcList">
            
        <router-link to="/superheroes/">A </router-link>
        <router-link to="/superheroes/letter-b">B </router-link>
        <router-link to="/superheroes/letter-c">C </router-link>
        <router-link to="/superheroes/letter-d">D </router-link>
        <router-link to="/superheroes/letter-h">E </router-link>
        <router-link to="/superheroes/letter-h">F </router-link>
        <router-link to="/superheroes/letter-h">G </router-link>
        <router-link to="/superheroes/letter-h">H </router-link>
            

            
        </div>
</template>

<style scoped>

.abcList ul {
    margin-right: 20px;
}

.abcList {
    width: 100%;
    height: 100px;
    color: white;
    justify-content: start;
    margin-bottom: 35px;
}

.abcList a {
    color: white;
    text-decoration: none;
    
}

.abcList a.router-link {
    display: flex;
    justify-content: center;
    margin: 5px;
    cursor: pointer;    
}

.abcList a.router-link-exact-active {
    color: var(--yellow);
}

</style>