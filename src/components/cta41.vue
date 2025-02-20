<template>
  <div class="cta41-container1 thq-section-padding" v-bind:class="rootClassName">
    <div class="cta41-max-width thq-section-max-width">
      <div class="cta41-container2 thq-flex-row">
        <div class="cta41-column">
          <span class="thq-heading-2">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="cta41-fragment1">
                <span class="cta41-text4">
                  Ready to start your journey to inner balance and resilience?
                </span>
              </div>
            </slot>
          </span>
          <p class="thq-body-small">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="cta41-fragment3">
                <span class="cta41-text6">
                  Join our community and embark on a path to holistic wellness.
                </span>
              </div>
            </slot>
          </p>
          <div class="cta41-actions">
            <button type="button" class="thq-button-filled">
              <span>
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="cta41-fragment2">
                    <span class="cta41-text5">Explore Coaching Services</span>
                  </div>
                </slot>
              </span>
            </button>
          </div>
        </div>
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="cta41-placeholder-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA41',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1552664688-cf412ec27db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgwNzQwMHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    rootClassName: String,
    image1Alt: {
      type: String,
      default: 'Yoga pose',
    },
  },
}
</script>

<style scoped>
.cta41-container1 {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta41-max-width {
  gap: 80px;
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.cta41-container2 {
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
 
.cta41-column {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta41-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
 
.cta41-placeholder-image {
  height: 100%;
  flex-grow: 1;
  max-height: 400px;
}
 
.cta41-fragment1 {
  display: contents;
}
 
.cta41-text4 {
  display: inline-block;
}
 
.cta41-fragment2 {
  display: contents;
}
 
.cta41-text5 {
  display: inline-block;
}
 
.cta41-fragment3 {
  display: contents;
}
 
.cta41-text6 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .cta41-container2 {
    flex-direction: column;
  }
  .cta41-placeholder-image {
    width: 100%;
  }
}
</style>
