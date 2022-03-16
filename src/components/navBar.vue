<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/carsView">Cars</router-link></li>
        <li><router-link to="/PokemonsView">Pokemons</router-link></li>
        <li><router-link to="/teamView">Our Team</router-link></li>
        <li><router-link to="/ContactView">Contact</router-link></li>
      </ul>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="for-logo">
      <h1>CL Electronics</h1>
    </div>
    </div>
    
  </nav>
    <router-view />
</template>

<style >
ul{
  display: block;
}

li{
  text-decoration: none;
  list-style: none;
}
.for-logo{
  
  
  

}
/*
li:hover{
  color: red;
  font-weight: bold;
  
}
li:active{
  color: red;
  font-weight: bold;
  
}*/
</style>
