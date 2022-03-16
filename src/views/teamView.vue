<template>
  <h1>
    Unser Anspruch ist es, „Your Production Company“ zu sein – Ihr kompetenter
    Veranstaltungsspezialist. Ihr individueller Berater. Ihr innovativer Planer.
    Ihr zuverlässiger Umsetzer. Persönlich und professionell. An diesem Anspruch
    wollen wir uns messen lassen. Am liebsten von Ihnen – bei unserem nächsten,
    gemeinsamen Projekt!
  </h1>
  <h2>Our Team</h2>

  <div class="members">
    <div
      v-for="person in people"
      :key="person.index"
      class="card"
      style="width: 100%"
    >
      <img :src="person.picture" class="card-img-top" alt="" />
      <div class="card-body">
        <h1 class="card-title">{{ person.title }}</h1>
        <h6></h6>
        <p class="card-text">{{ person.name.last }} {{ person.name.first }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=16")
      .then((res) => res.json())
      .then((data) => (this.people = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    NameWorkers() {
      console.log(this.people);
    },
  },
};
</script>

<style scoped>
@media (min-width: 576px )  {
  .members {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: minmax(10vh, auto);
    margin: 1.2em;
   
  }
   .card {
    border: none;
    border-radius: 10px;
    margin-top: 1.2em;
    width: auto;
    height: auto;
    
  }
}

@media (min-width: 768px) and (max-width: 1199.98px) { 
  .members {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(10vh, auto);
    gap: 30px;
  }
  .card {
    border: none;
    color: blue;
  }
 }

@media (min-width: 768px) {
  .members {
    grid-template-columns: repeat(2, 1fr);
    
  }
}

h1,
p {
  color: rgb(30, 20, 119);
}

@media (min-width: 992px) {
  .members {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(10vh, auto);
    gap: 30px;
  }
  .card {
    border: none;
    color: blue;
  }
}
</style>
