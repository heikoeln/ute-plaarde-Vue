<template>
  <div class="hero15-container1 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="hero15-image" />
    <div class="hero15-column">
      <div class="hero15-content">
        <h1 class="thq-heading-1 hero15-text1">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="hero15-fragment2">
              <span class="hero15-text5">
                Empower Your Mind, Body, and Spirit
              </span>
            </div>
          </slot>
        </h1>
        <p class="thq-body-large hero15-text2">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="hero15-fragment1">
              <span class="hero15-text4">
                Welcome to a journey of self-discovery and holistic well-being
                through movement and somatic practices. Join us to strengthen your
                mind-body connection and cultivate a balanced and connected life.
              </span>
            </div>
          </slot>
        </p>
        <div class="hero15-container2">
          <input
            type="email"
            :placeholder="textinputPlaceholder"
            class="hero15-textinput thq-input"
          />
          <div class="hero15-container3">
            <button class="hero15-button thq-button-filled">
              <span class="thq-body-small">
                <slot name="action3">
                  <!--Default content for action3-->
                  <div class="hero15-fragment3">
                    <span class="hero15-text6">Explore Courses</span>
                  </div>
                </slot>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero15',
  props: {
    image1Alt: {
      type: String,
      default: 'Image of a person practicing yoga in nature',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1531142453283-59e592982069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyMzczMHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    textinputPlaceholder: {
      type: String,
      default: 'Enter your email to stay updated',
    },
  },
}
</script>

<style scoped>
.hero15-container1 {
  width: 100%;
  height: 1015px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
}
 
.hero15-image {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
 
.hero15-column {
  gap: 24px;
  width: auto;
  display: flex;
  z-index: 1;
  max-width: 560px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero15-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeInLeft;
  flex-direction: column;
  animation-delay: 0s;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.hero15-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 0 0 auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
 
.hero15-textinput {
  width: 70%;
  background-color: transparent;
}
 
.hero15-container3 {
  flex: 1;
  display: flex;
  align-items: flex-start;
}
 
.hero15-button {
  gap: var(--dl-space-space-halfunit);
  flex: 1;
  display: flex;
  box-sizing: content-box;
  align-items: center;
  border-color: var(--dl-color-theme-primary1);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  background-color: var(--dl-color-theme-primary1);
}
 
.hero15-fragment1 {
  display: contents;
}
 
.hero15-text4 {
  display: inline-block;
}
 
.hero15-fragment2 {
  display: contents;
}
 
.hero15-text5 {
  display: inline-block;
}
 
.hero15-fragment3 {
  display: contents;
}
 
.hero15-text6 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .hero15-column {
    align-self: center;
  }
}
 
@media(max-width: 767px) {
  .hero15-column {
    width: 100%;
  }
  .hero15-text1 {
    text-align: center;
  }
  .hero15-text2 {
    text-align: center;
  }
  .hero15-container2 {
    flex-direction: column;
  }
  .hero15-textinput {
    width: 100%;
  }
  .hero15-container3 {
    width: 100%;
  }
  .hero15-button {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .hero15-container3 {
    width: 100%;
  }
  .hero15-button {
    width: 100%;
  }
}
</style>
