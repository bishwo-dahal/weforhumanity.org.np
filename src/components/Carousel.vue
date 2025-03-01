<template>
    <div
      class="carousel-container"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="carousel">
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
            <div class="background-overlay" :style="{ backgroundImage: `url(${slide.image})` }"></div>
            <img :src="slide.image" :alt="slide.caption">
          </div>
        </div>
        <div class="carousel-caption">{{ slides[currentIndex].caption }}</div>
        <button class="carousel-control-prev" @click="prev">‹</button>
        <button class="carousel-control-next" @click="next">›</button>
      </div>
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel',
    props: {
      slides: {
        type: Array,
        required: true
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      perPage: {
        type: Number,
        default: 1
      },
      navigationEnabled: {
        type: Boolean,
        default: true
      },
      centerMode: {
        type: Boolean,
        default: false
      },
      loop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentIndex: 0,
        interval: null,
        startX: 0,
        endX: 0
      };
    },
    mounted() {
      if (this.autoplay) {
        this.startAutoplay();
      }
    },
    beforeDestroy() {
      this.stopAutoplay();
    },
    methods: {
      startAutoplay() {
        this.interval = setInterval(this.next, 3000);
      },
      stopAutoplay() {
        clearInterval(this.interval);
      },
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else if (this.loop) {
          this.currentIndex = this.slides.length - 1;
        }
      },
      next() {
        if (this.currentIndex < this.slides.length - 1) {
          this.currentIndex++;
        } else if (this.loop) {
          this.currentIndex = 0;
        }
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
      handleTouchStart(event) {
        this.startX = event.touches[0].clientX;
      },
      handleTouchMove(event) {
        this.endX = event.touches[0].clientX;
      },
      handleTouchEnd() {
        if (this.startX > this.endX + 50) {
          this.next();
        } else if (this.startX < this.endX - 50) {
          this.prev();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 80vw;
    margin: auto;
  }
  
  @media (max-width: 800px) {
    .carousel-container {
      max-width: 100vw;
    }
  }
  
  .carousel {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  .carousel-item {
    position: relative;
    min-width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  
  .carousel-item .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    z-index: -1;
    opacity: 0.8;
  }
  
  .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 0px;
    min-width: 100%;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 2;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .carousel-control-prev {
    left: 10px;
  }
  
  .carousel-control-next {
    right: 10px;
  }
  
  .carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }
  
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    padding: 0;
  }
  
  .carousel-indicators button.active {
    border-color: gray;
    background: white;
  }
  </style>