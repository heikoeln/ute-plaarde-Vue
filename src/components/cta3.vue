<template>
  <div class="cta3-container1 thq-section-padding">
    <div class="cta3-max-width thq-section-max-width">
      <div class="cta3-container2 thq-flex-row">
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="cta3-placeholder-image thq-img-ratio-16-9"
        />
        <div class="cta3-column">
          <span class="thq-heading-2">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="cta3-fragment3">
                <span class="cta3-text7">Medium length heading goes here</span>
              </div>
            </slot>
          </span>
          <p class="thq-body-small">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="cta3-fragment1">
                <span class="cta3-text5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </span>
              </div>
            </slot>
          </p>
          <div class="cta3-actions">
            <button type="button" class="thq-button-filled">
              <span>
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="cta3-fragment2">
                    <span class="cta3-text6">Action1</span>
                  </div>
                </slot>
              </span>
            </button>
            <button type="button" class="thq-button-outline">
              <span>
                <slot name="action2">
                  <!--Default content for action2-->
                  <div class="cta3-fragment4">
                    <span class="cta3-text8">Action2</span>
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
  name: 'CTA3',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1620134280013-e756c46affc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgwNzIyMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Image1Alt',
    },
  },
}
</script>

<style scoped>
.cta3-container1 {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta3-max-width {
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
 
.cta3-container2 {
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
 
.cta3-placeholder-image {
  height: 100%;
  flex-grow: 1;
  max-height: 400px;
}
 
.cta3-column {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta3-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
 
.cta3-fragment1 {
  display: contents;
}
 
.cta3-text5 {
  display: inline-block;
}
 
.cta3-fragment2 {
  display: contents;
}
 
.cta3-text6 {
  display: inline-block;
}
 
.cta3-fragment3 {
  display: contents;
}
 
.cta3-text7 {
  display: inline-block;
}
 
.cta3-fragment4 {
  display: contents;
}
 
.cta3-text8 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .cta3-container2 {
    flex-direction: column;
  }
  .cta3-placeholder-image {
    width: 100%;
  }
}
</style>
