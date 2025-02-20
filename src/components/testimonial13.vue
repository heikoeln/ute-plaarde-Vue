<template>
  <div class="thq-section-padding">
    <div class="testimonial13-max-width thq-section-max-width">
      <div class="testimonial13-section-title">
        <h2 class="testimonial13-title thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="testimonial13-fragment7">
              <span class="testimonial13-text22">Client Testimonials</span>
            </div>
          </slot>
        </h2>
        <p class="testimonial13-subtitle thq-body-large">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="testimonial13-fragment8">
              <span class="testimonial13-text23">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </slot>
        </p>
      </div>
      <div class="testimonial13-container thq-flex-row">
        <div class="testimonial13-content1 thq-flex-column">
          <div class="testimonial13-stars1">
            <svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path>
            </svg>
          </div>
          <p class="testimonial13-text10 thq-body-large">
            <slot name="review1">
              <!--Default content for review1-->
              <div class="testimonial13-fragment5">
                <span class="testimonial13-text20">
                  Ute&apos;s coaching sessions have truly transformed my life. I
                  feel more centered, calm, and in tune with my body than ever
                  before.
                </span>
              </div>
            </slot>
          </p>
          <div class="testimonial13-avatar1">
            <img
              :alt="author1Alt"
              :src="author1Src"
              class="testimonial13-avatar-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <div class="testimonial13-avatar-content1">
              <span class="testimonial13-text11 thq-body-small">
                <slot name="author1Name">
                  <!--Default content for author1Name-->
                  <div class="testimonial13-fragment6">
                    <span class="testimonial13-text21">Sarah Johnson</span>
                  </div>
                </slot>
              </span>
              <span class="thq-body-small">
                <slot name="author1Position">
                  <!--Default content for author1Position-->
                  <div class="testimonial13-fragment4">
                    <span class="testimonial13-text19">Marketing Manager</span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
        <div class="testimonial13-content2 thq-flex-column">
          <div class="testimonial13-stars2">
            <svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              ></path>
            </svg>
          </div>
          <p class="testimonial13-text13 thq-body-large">
            <slot name="review2">
              <!--Default content for review2-->
              <div class="testimonial13-fragment1">
                <span class="testimonial13-text16">
                  Working with Ute has been a game-changer for me. Her workshops
                  helped me uncover my true desires and live a more authentic
                  life.
                </span>
              </div>
            </slot>
          </p>
          <div class="testimonial13-avatar2">
            <img
              :alt="author2Alt"
              :src="author2Src"
              class="testimonial13-avatar-image2 thq-img-round"
            />
            <div class="testimonial13-avatar-content2">
              <span class="testimonial13-text14 thq-body-small">
                <slot name="author2Name">
                  <!--Default content for author2Name-->
                  <div class="testimonial13-fragment3">
                    <span class="testimonial13-text18">Michael Smith</span>
                  </div>
                </slot>
              </span>
              <span class="thq-body-small">
                <slot name="author2Position">
                  <!--Default content for author2Position-->
                  <div class="testimonial13-fragment2">
                    <span class="testimonial13-text17">Entrepreneur</span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial13',
  props: {
    author2Alt: {
      type: String,
      default: 'Image of Michael Smith',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1630713813733-7bdf88acf034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTAyMjc1NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author1Alt: {
      type: String,
      default: 'Image of Sarah Johnson',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1595565312451-23051ab0666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTAyMjc1NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.testimonial13-max-width {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.testimonial13-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial13-title {
  width: 100%;
  text-align: center;
}
 
.testimonial13-subtitle {
  text-align: center;
}
 
.testimonial13-container {
  gap: var(--dl-space-space-twounits);
  width: auto;
}
 
.testimonial13-content1 {
  gap: var(--dl-space-space-twounits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial13-stars1 {
  fill: var(--dl-color-theme-primary1);
  display: flex;
  align-items: center;
  flex-direction: row;
}
 
.testimonial13-text10 {
  text-align: center;
}
 
.testimonial13-avatar1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial13-avatar-image1 {
  width: 56px;
  height: 56px;
  object-fit: cover;
}
 
.testimonial13-avatar-content1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.testimonial13-text11 {
  font-style: normal;
  font-weight: 600;
}
 
.testimonial13-content2 {
  gap: var(--dl-space-space-twounits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial13-stars2 {
  fill: var(--dl-color-theme-primary1);
  display: flex;
  align-items: center;
  flex-direction: row;
}
 
.testimonial13-text13 {
  text-align: center;
}
 
.testimonial13-avatar2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial13-avatar-image2 {
  width: 56px;
  height: 56px;
  object-fit: cover;
}
 
.testimonial13-avatar-content2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.testimonial13-text14 {
  font-style: normal;
  font-weight: 600;
}
 
.testimonial13-fragment1 {
  display: contents;
}
 
.testimonial13-text16 {
  display: inline-block;
}
 
.testimonial13-fragment2 {
  display: contents;
}
 
.testimonial13-text17 {
  display: inline-block;
}
 
.testimonial13-fragment3 {
  display: contents;
}
 
.testimonial13-text18 {
  display: inline-block;
}
 
.testimonial13-fragment4 {
  display: contents;
}
 
.testimonial13-text19 {
  display: inline-block;
}
 
.testimonial13-fragment5 {
  display: contents;
}
 
.testimonial13-text20 {
  display: inline-block;
}
 
.testimonial13-fragment6 {
  display: contents;
}
 
.testimonial13-text21 {
  display: inline-block;
}
 
.testimonial13-fragment7 {
  display: contents;
}
 
.testimonial13-text22 {
  display: inline-block;
}
 
.testimonial13-fragment8 {
  display: contents;
}
 
.testimonial13-text23 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .testimonial13-container {
    align-items: center;
  }
}
 
@media(max-width: 767px) {
  .testimonial13-max-width {
    padding: var(--dl-space-space-threeunits);
  }
  .testimonial13-section-title {
    width: 100%;
    max-width: 800px;
  }
  .testimonial13-container {
    flex-direction: column;
  }
}
 
@media(max-width: 479px) {
  .testimonial13-max-width {
    padding: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial13-avatar1 {
    flex-direction: column;
  }
  .testimonial13-avatar-content1 {
    align-items: center;
    justify-content: center;
  }
  .testimonial13-avatar2 {
    flex-direction: column;
  }
  .testimonial13-avatar-content2 {
    align-items: center;
    justify-content: center;
  }
}
</style>
