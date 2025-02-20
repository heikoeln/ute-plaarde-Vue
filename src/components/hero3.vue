<template>
  <div class="hero3-header9">
    <img :alt="image1Alt" :src="image1Src" class="thq-img-ratio-16-9" />
    <div class="hero3-content thq-section-padding">
      <div class="hero3-max-width thq-section-max-width thq-flex-row">
        <div class="hero3-column1">
          <h1 class="thq-heading-1 hero3-text1">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="hero3-fragment3">
                <span class="hero3-text7">
                  Cultivate Balance and Harmony Through Mind-Body Connection
                </span>
              </div>
            </slot>
          </h1>
        </div>
        <div class="hero3-column2">
          <p class="thq-body-large hero3-text2">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="hero3-fragment2">
                <span class="hero3-text6">
                  Discover the power of mind-body connection and transform your
                  life.
                </span>
              </div>
            </slot>
          </p>
          <div class="hero3-actions">
            <button class="thq-button-filled hero3-button1">
              <span class="thq-body-small">
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="hero3-fragment4">
                    <span class="hero3-text8">Get Started</span>
                  </div>
                </slot>
              </span>
            </button>
            <button class="thq-button-outline hero3-button2">
              <span class="thq-body-small">
                <slot name="action2">
                  <!--Default content for action2-->
                  <div class="hero3-fragment1">
                    <span class="hero3-text5">Explore Courses</span>
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
  name: 'Hero3',
  props: {
    image1Alt: {
      type: String,
      default: 'Mindful person practicing yoga in nature',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1670256291883-b80cd3d735c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTUyMzk5MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.hero3-header9 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.hero3-content {
  display: flex;
  justify-content: center;
}
 
.hero3-max-width {
  align-self: center;
  align-items: center;
}
 
.hero3-column1 {
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero3-column2 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero3-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
 
.hero3-fragment1 {
  display: contents;
}
 
.hero3-text5 {
  display: inline-block;
}
 
.hero3-fragment2 {
  display: contents;
}
 
.hero3-text6 {
  display: inline-block;
}
 
.hero3-fragment3 {
  display: contents;
}
 
.hero3-text7 {
  display: inline-block;
}
 
.hero3-fragment4 {
  display: contents;
}
 
.hero3-text8 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .hero3-column1 {
    width: 100%;
  }
  .hero3-column2 {
    width: auto;
  }
  .hero3-button1 {
    flex: 1;
  }
  .hero3-button2 {
    flex: 1;
  }
}
 
@media(max-width: 767px) {
  .hero3-max-width {
    flex-direction: column;
  }
  .hero3-text1 {
    text-align: center;
  }
  .hero3-text2 {
    text-align: center;
  }
  .hero3-actions {
    width: 100%;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .hero3-actions {
    flex-direction: column;
  }
  .hero3-button1 {
    width: 100%;
  }
  .hero3-button2 {
    width: 100%;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
