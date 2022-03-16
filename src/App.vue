<template>
<!--https://dummy-apis.netlify.app/api/contact-suggestions?count=8-->
  <navBar />
 <div class="app-container">




 </div>

 

  <footerComp />
</template>

<script>
import navBar from "./components/navBar.vue";
import footerComp from "./components/footerComp.vue";



export default {
  data() {
    return {};
  },
  components: { footerComp, navBar,   },
};
</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~bootstrap-vue/dist/bootstrap-vue.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background: #3a3b3c;
  color: white;
  max-width: 1795px;
 
}

.app-container{
   margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

@media (min-width: 992px) { 
  .app-container{
    display: grid;
  grid-template-columns: repeat(12, 1fr);
  }
  nav , .collapse{
    grid-column: 1/13;
  }

 }
</style>
