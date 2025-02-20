<template>
  <div class="cta7-container thq-section-padding">
    <div class="cta7-max-width thq-section-max-width">
      <div class="cta7-column">
        <div class="cta7-content">
          <span class="thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="cta7-fragment1">
                <span class="cta7-text5">
                  Ready to start your journey to inner peace and wellness?
                </span>
              </div>
            </slot>
          </span>
          <p class="thq-body-large">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="cta7-fragment3">
                <span class="cta7-text7">
                  Join us in discovering the path to a balanced and harmonious
                  life through our transformative programs.
                </span>
              </div>
            </slot>
          </p>
          <div class="cta7-actions">
            <button type="button" class="thq-button-filled">
              <span>
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="cta7-fragment2">
                    <span class="cta7-text6">Book a Coaching Session</span>
                  </div>
                </slot>
              </span>
            </button>
            <button type="button" class="thq-button-outline">
              <span>
                <slot name="action2">
                  <!--Default content for action2-->
                  <div class="cta7-fragment4">
                    <span class="cta7-text8">Explore Courses</span>
                  </div>
                </slot>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      :alt="backgroundImageAlt"
      :src="backgroundImageSrc"
      class="cta7-background-image thq-img-ratio-16-9"
    />
  </div>
</template>

<script>
export default {
  name: 'CTA7',
  props: {
    backgroundImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1526439308453-63d4abe3bd1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgwNzAzMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    backgroundImageAlt: {
      type: String,
      default: 'Mind-body Connection',
    },
  },
}
</script>

<style scoped>
.cta7-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta7-max-width {
  gap: 80px;
  width: 100%;
  height: auto;
  display: flex;
  z-index: 100;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.cta7-column {
  gap: 24px;
  width: 768px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.cta7-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta7-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
 
.cta7-background-image {
  left: 0px;
  width: 100%;
  bottom: 0px;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
 
.cta7-fragment1 {
  display: contents;
}
 
.cta7-text5 {
  display: inline-block;
}
 
.cta7-fragment2 {
  display: contents;
}
 
.cta7-text6 {
  display: inline-block;
}
 
.cta7-fragment3 {
  display: contents;
}
 
.cta7-text7 {
  display: inline-block;
}
 
.cta7-fragment4 {
  display: contents;
}
 
.cta7-text8 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .cta7-column {
    width: auto;
  }
}
</style>
