<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="../assets/opel5.jpg"
          class="d-block caroussel-formatting"
          alt="first image"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to our Website</h5>
          <p>Family Zone wish u very nice year in advance</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          :class="{}"
          src="../assets/opel6.jpg"
          class="d-block caroussel-formatting"
          alt="second image"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Our home is the best</h5>
          <p>So feel free to come and visit us</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/opel7.jpg"
          class="d-block caroussel-formatting"
          alt="third image"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Are you satisfied</h5>
          <p>Family Zone is the best family ever</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style  >
img{
  margin: 0 auto;
}



 

 


 

</style>
