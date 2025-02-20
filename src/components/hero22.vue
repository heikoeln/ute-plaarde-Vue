<template>
  <div class="hero22-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero22-image" />
    <div class="hero22-container1">
      <div class="hero22-max-width thq-section-max-width">
        <div class="hero22-column">
          <div class="hero22-content">
            <h1 class="thq-heading-1 hero22-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero22-fragment4">
                  <span class="hero22-text8">Unlock Your Full Potential</span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero22-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero22-fragment3">
                  <span class="hero22-text7">
                    Discover the power of mind-body connection and achieve
                    holistic wellness.
                  </span>
                </div>
              </slot>
            </p>
            <div class="hero22-actions">
              <div class="hero22-container2">
                <button class="hero22-button1 thq-button-filled">
                  <span class="thq-body-small">
                    <slot name="action1">
                      <!--Default content for action1-->
                      <div class="hero22-fragment2">
                        <span class="hero22-text6">Explore Courses</span>
                      </div>
                    </slot>
                  </span>
                </button>
              </div>
              <div class="hero22-container3">
                <button class="thq-button-outline hero22-button2">
                  <span class="thq-body-small">
                    <slot name="action2">
                      <!--Default content for action2-->
                      <div class="hero22-fragment1">
                        <span class="hero22-text5">Book a Coaching Session</span>
                      </div>
                    </slot>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero22',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1501959915551-4e8d30928317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyNjMwNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Mind-Body Connection',
    },
  },
}
</script>

<style scoped>
.hero22-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero22-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero22-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero22-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero22-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero22-content {
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
 
.hero22-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.hero22-container2 {
  display: flex;
  align-items: flex-start;
}
 
.hero22-button1 {
  display: flex;
  box-sizing: content-box;
  align-items: center;
  border-color: var(--dl-color-theme-primary1);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  background-color: var(--dl-color-theme-primary1);
}
 
.hero22-container3 {
  display: flex;
  align-items: flex-start;
}
 
.hero22-fragment1 {
  display: contents;
}
 
.hero22-text5 {
  display: inline-block;
}
 
.hero22-fragment2 {
  display: contents;
}
 
.hero22-text6 {
  display: inline-block;
}
 
.hero22-fragment3 {
  display: contents;
}
 
.hero22-text7 {
  display: inline-block;
}
 
.hero22-fragment4 {
  display: contents;
}
 
.hero22-text8 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero22-header5 {
    justify-content: center;
  }
  .hero22-max-width {
    justify-content: center;
  }
  .hero22-column {
    width: 100%;
  }
  .hero22-text1 {
    text-align: center;
  }
  .hero22-text2 {
    text-align: center;
  }
  .hero22-actions {
    width: 100%;
    align-self: flex-start;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .hero22-actions {
    flex-direction: column;
  }
  .hero22-container2 {
    width: 100%;
  }
  .hero22-button1 {
    width: 100%;
  }
  .hero22-container3 {
    width: 100%;
  }
  .hero22-button2 {
    width: 100%;
  }
}
</style>
