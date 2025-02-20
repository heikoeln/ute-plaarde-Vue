<template>
  <div class="hero26-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero26-image" />
    <div class="hero26-container">
      <div class="hero26-max-width thq-section-max-width">
        <div class="hero26-column">
          <div class="hero26-content">
            <h1 class="thq-heading-1 hero26-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero26-fragment2">
                  <span class="hero26-text4">
                    Discover the Power of Mind-Body Connection
                  </span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero26-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero26-fragment1">
                  <span class="hero26-text3">
                    Unlock your full potential and achieve holistic well-being
                    through our coaching, courses, and workshops designed to
                    strengthen your mind-body connection.
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
  name: 'Hero26',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1591491640784-3232eb748d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgwODA0M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Mind-Body Connection',
    },
  },
}
</script>

<style scoped>
.hero26-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero26-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero26-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero26-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero26-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero26-content {
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
 
.hero26-fragment1 {
  display: contents;
}
 
.hero26-text3 {
  display: inline-block;
}
 
.hero26-fragment2 {
  display: contents;
}
 
.hero26-text4 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero26-header5 {
    justify-content: center;
  }
  .hero26-max-width {
    justify-content: center;
  }
  .hero26-column {
    width: 100%;
  }
  .hero26-text1 {
    text-align: center;
  }
  .hero26-text2 {
    text-align: center;
  }
}
</style>
