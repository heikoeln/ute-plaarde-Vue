<template>
  <div class="cta4-container1 thq-section-padding">
    <div class="cta4-max-width thq-section-max-width">
      <div class="cta4-container2 thq-flex-row">
        <div class="cta4-column">
          <span class="thq-heading-2">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="cta4-fragment3">
                <span class="cta4-text7">
                  Ready to start your journey to inner peace and wellness?
                </span>
              </div>
            </slot>
          </span>
          <p class="thq-body-small">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="cta4-fragment2">
                <span class="cta4-text6">
                  Join our community and discover the power of mind-body
                  connection.
                </span>
              </div>
            </slot>
          </p>
          <div class="cta4-actions">
            <button type="button" class="thq-button-filled">
              <span>
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="cta4-fragment4">
                    <span class="cta4-text8">Explore Coaching Services</span>
                  </div>
                </slot>
              </span>
            </button>
            <button type="button" class="thq-button-outline">
              <span>
                <slot name="action2">
                  <!--Default content for action2-->
                  <div class="cta4-fragment1">
                    <span class="cta4-text5">Browse Courses and Workshops</span>
                  </div>
                </slot>
              </span>
            </button>
          </div>
        </div>
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="cta4-placeholder-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA4',
  props: {
    image1Alt: {
      type: String,
      default: 'Yoga pose',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1614064643087-96ce7f0737c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgwNzI0M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.cta4-container1 {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta4-max-width {
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
 
.cta4-container2 {
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
 
.cta4-column {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta4-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
 
.cta4-placeholder-image {
  height: 100%;
  flex-grow: 1;
  max-height: 400px;
}
 
.cta4-fragment1 {
  display: contents;
}
 
.cta4-text5 {
  display: inline-block;
}
 
.cta4-fragment2 {
  display: contents;
}
 
.cta4-text6 {
  display: inline-block;
}
 
.cta4-fragment3 {
  display: contents;
}
 
.cta4-text7 {
  display: inline-block;
}
 
.cta4-fragment4 {
  display: contents;
}
 
.cta4-text8 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .cta4-container2 {
    flex-direction: column;
  }
  .cta4-placeholder-image {
    width: 100%;
  }
}
</style>
