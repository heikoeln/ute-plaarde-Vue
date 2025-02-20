<template>
  <div class="hero21-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero21-image" />
    <div class="hero21-container">
      <div class="hero21-max-width thq-section-max-width">
        <div class="hero21-column">
          <div class="hero21-content">
            <h1 class="thq-heading-1 hero21-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero21-fragment1">
                  <span class="hero21-text3">
                    Welcome to Mind-Body Connection Coaching
                  </span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero21-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero21-fragment2">
                  <span class="hero21-text4">
                    Empower yourself to achieve balance and harmony in life
                    through our transformative coaching, courses, and workshops.
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
  name: 'Hero21',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyNjAxMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Mind-Body Connection Coaching Image',
    },
  },
}
</script>

<style scoped>
.hero21-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero21-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero21-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero21-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero21-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero21-content {
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
 
.hero21-fragment1 {
  display: contents;
}
 
.hero21-text3 {
  display: inline-block;
}
 
.hero21-fragment2 {
  display: contents;
}
 
.hero21-text4 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero21-header5 {
    justify-content: center;
  }
  .hero21-max-width {
    justify-content: center;
  }
  .hero21-column {
    width: 100%;
  }
  .hero21-text1 {
    text-align: center;
  }
  .hero21-text2 {
    text-align: center;
  }
}
</style>
