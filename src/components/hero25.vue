<template>
  <div class="hero25-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero25-image" />
    <div class="hero25-container">
      <div class="hero25-max-width thq-section-max-width">
        <div class="hero25-column">
          <div class="hero25-content">
            <h1 class="thq-heading-1 hero25-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero25-fragment2">
                  <span class="hero25-text4">Discover Your True Self</span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero25-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero25-fragment1">
                  <span class="hero25-text3">
                    Embark on a journey of self-discovery and inner exploration to
                    unlock your full potential.
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
  name: 'Hero25',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1422433555807-2559a27433bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyNjU0N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Woman meditating in nature',
    },
  },
}
</script>

<style scoped>
.hero25-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero25-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero25-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero25-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero25-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero25-content {
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
 
.hero25-fragment1 {
  display: contents;
}
 
.hero25-text3 {
  display: inline-block;
}
 
.hero25-fragment2 {
  display: contents;
}
 
.hero25-text4 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero25-header5 {
    justify-content: center;
  }
  .hero25-max-width {
    justify-content: center;
  }
  .hero25-column {
    width: 100%;
  }
  .hero25-text1 {
    text-align: center;
  }
  .hero25-text2 {
    text-align: center;
  }
}
</style>
