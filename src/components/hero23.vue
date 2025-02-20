<template>
  <div class="hero23-header5 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero23-image" />
    <div class="hero23-container1">
      <div class="hero23-max-width thq-section-max-width">
        <div class="hero23-column">
          <div class="hero23-content">
            <h1 class="thq-heading-1 hero23-text1">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="hero23-fragment1">
                  <span class="hero23-text5">
                    Transform Your Life Through Mind-Body Connection
                  </span>
                </div>
              </slot>
            </h1>
            <p class="thq-body-large hero23-text2">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="hero23-fragment3">
                  <span class="hero23-text7">
                    Welcome to a journey of self-discovery and wellness. Explore
                    our coaching, courses, and workshops designed to help you
                    strengthen the connection between your mind and body.
                  </span>
                </div>
              </slot>
            </p>
            <div class="hero23-actions">
              <div class="hero23-container2">
                <button class="hero23-button1 thq-button-filled">
                  <span class="thq-body-small">
                    <slot name="action1">
                      <!--Default content for action1-->
                      <div class="hero23-fragment4">
                        <span class="hero23-text8">Explore Courses</span>
                      </div>
                    </slot>
                  </span>
                </button>
              </div>
              <div class="hero23-container3">
                <button class="thq-button-outline hero23-button2">
                  <span class="thq-body-small">
                    <slot name="action2">
                      <!--Default content for action2-->
                      <div class="hero23-fragment2">
                        <span class="hero23-text6">Book a Coaching Session</span>
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
  name: 'Hero23',
  props: {
    image1Alt: {
      type: String,
      default: 'Mind-Body Connection',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1531464969876-f77a04ca410f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyNjQwNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.hero23-header5 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero23-image {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.hero23-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.hero23-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
 
.hero23-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero23-content {
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
 
.hero23-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.hero23-container2 {
  display: flex;
  align-items: flex-start;
}
 
.hero23-button1 {
  display: flex;
  box-sizing: content-box;
  align-items: center;
  border-color: var(--dl-color-theme-primary1);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  background-color: var(--dl-color-theme-primary1);
}
 
.hero23-container3 {
  display: flex;
  align-items: flex-start;
}
 
.hero23-fragment1 {
  display: contents;
}
 
.hero23-text5 {
  display: inline-block;
}
 
.hero23-fragment2 {
  display: contents;
}
 
.hero23-text6 {
  display: inline-block;
}
 
.hero23-fragment3 {
  display: contents;
}
 
.hero23-text7 {
  display: inline-block;
}
 
.hero23-fragment4 {
  display: contents;
}
 
.hero23-text8 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .hero23-header5 {
    justify-content: center;
  }
  .hero23-max-width {
    justify-content: center;
  }
  .hero23-column {
    width: 100%;
  }
  .hero23-text1 {
    text-align: center;
  }
  .hero23-text2 {
    text-align: center;
  }
  .hero23-actions {
    width: 100%;
    align-self: flex-start;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .hero23-actions {
    flex-direction: column;
  }
  .hero23-container2 {
    width: 100%;
  }
  .hero23-button1 {
    width: 100%;
  }
  .hero23-container3 {
    width: 100%;
  }
  .hero23-button2 {
    width: 100%;
  }
}
</style>
