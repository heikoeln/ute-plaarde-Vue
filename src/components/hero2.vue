<template>
  <div class="hero2-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero2-image" />
    <div class="hero2-container">
      <div class="hero2-max-width thq-section-max-width">
        <div class="hero2-column">
          <div class="hero2-content">
            <h1 class="thq-heading-1 hero2-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero2-fragment1">
                  <span class="hero2-text3">
                    Welcome to a Journey of Self-Discovery and Wellness
                  </span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero2-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero2-fragment2">
                  <span class="hero2-text4">
                    Discover a path to strengthen your mind-body connection,
                    improve your overall health, and cultivate a sense of balance
                    and harmony in your life through our coaching, courses, and
                    workshops.
                  </span>
                </div>
              </slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero2',
  props: {
    image1Src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image1Alt: {
      type: String,
      default: 'Image of a person practicing somatic movement',
    },
  },
}
</script>

<style scoped>
.hero2-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero2-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero2-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero2-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero2-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero2-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeInLeftBig;
  flex-direction: column;
  animation-delay: 0s;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.hero2-fragment1 {
  display: contents;
}
 
.hero2-text3 {
  display: inline-block;
}
 
.hero2-fragment2 {
  display: contents;
}
 
.hero2-text4 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero2-header5 {
    justify-content: center;
  }
  .hero2-max-width {
    justify-content: center;
  }
  .hero2-column {
    width: 100%;
  }
  .hero2-text1 {
    text-align: center;
  }
  .hero2-text2 {
    text-align: center;
  }
}
</style>
