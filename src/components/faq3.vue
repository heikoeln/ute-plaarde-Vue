<template>
  <div class="faq3faq9 thq-section-padding">
    <div class="faq3-max-width thq-section-max-width">
      <div class="faq3-section-title thq-flex-column">
        <h2 class="faq3-text10 thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="faq3-fragment22">
              <span class="faq3-text26">Frequently Asked Questions</span>
            </div>
          </slot>
        </h2>
        <p class="faq3-text11 thq-body-large">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="faq3-fragment16">
              <span class="faq3-text20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                <span v-html="raw6f7m"></span>
              </span>
            </div>
          </slot>
        </p>
      </div>
      <div class="thq-flex-column">
        <div class="faq3-row1">
          <div class="thq-divider-horizontal"></div>
          <div class="faq3-content2">
            <p class="faq3-faq1-question thq-body-large">
              <slot name="faq1Question">
                <!--Default content for faq1Question-->
                <div class="faq3-fragment11">
                  <span class="faq3-text15">
                    What is the focus of your coaching and courses?
                  </span>
                </div>
              </slot>
            </p>
            <span class="faq3-faq1-answer thq-body-small">
              <slot name="faq1Answer">
                <!--Default content for faq1Answer-->
                <div class="faq3-fragment14">
                  <span class="faq3-text18">
                    Our coaching and courses focus on self-discovery, wellness,
                    and understanding the nervous system to help individuals
                    strengthen their mind-body connection, improve overall health,
                    and cultivate balance and harmony in life.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="faq3-row2">
          <div class="thq-divider-horizontal"></div>
          <div class="faq3-content3">
            <p class="faq3-faq2-question thq-body-large">
              <slot name="faq2Question">
                <!--Default content for faq2Question-->
                <div class="faq3-fragment18">
                  <span class="faq3-text22">How can your workshops help me?</span>
                </div>
              </slot>
            </p>
            <span class="faq3-faq2-answer thq-body-small">
              <slot name="faq2Answer">
                <!--Default content for faq2Answer-->
                <div class="faq3-fragment15">
                  <span class="faq3-text19">
                    Our workshops are designed to provide practical tools and
                    techniques for deep relaxation and regeneration, allowing you
                    to learn how to manage stress, enhance your well-being, and
                    achieve a state of balance and harmony.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="faq3-row3">
          <div class="thq-divider-horizontal"></div>
          <div class="faq3-content4">
            <p class="faq3-faq3-question thq-body-large">
              <slot name="faq3Question">
                <!--Default content for faq3Question-->
                <div class="faq3-fragment20">
                  <span class="faq3-text24">
                    Are the courses suitable for beginners?
                  </span>
                </div>
              </slot>
            </p>
            <span class="faq3-faq3-answer thq-body-small">
              <slot name="faq3Answer">
                <!--Default content for faq3Answer-->
                <div class="faq3-fragment19">
                  <span class="faq3-text23">
                    Yes, our courses are suitable for individuals at all levels,
                    including beginners. We provide guidance and support tailored
                    to your specific needs and goals on your journey towards
                    self-discovery and wellness.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="faq3-row4">
          <div class="thq-divider-horizontal"></div>
          <div class="faq3-content5">
            <p class="faq3-faq4-question thq-body-large">
              <slot name="faq4Question">
                <!--Default content for faq4Question-->
                <div class="faq3-fragment10">
                  <span class="faq3-text14">
                    How can I benefit from understanding the nervous system?
                  </span>
                </div>
              </slot>
            </p>
            <span class="faq3-faq4-answer thq-body-small">
              <slot name="faq4Answer">
                <!--Default content for faq4Answer-->
                <div class="faq3-fragment12">
                  <span class="faq3-text16">
                    Understanding the nervous system can empower you to regulate
                    stress responses, improve emotional regulation, enhance
                    resilience, and promote overall health and well-being. Our
                    teachings aim to help you harness the power of your nervous
                    system for optimal living.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="thq-flex-column">
        <div class="faq3-content7">
          <h2 class="thq-heading-2 faq3-text12">
            <slot name="heading2">
              <!--Default content for heading2-->
              <div class="faq3-fragment17">
                <span class="faq3-text21">Still have a question?</span>
              </div>
            </slot>
          </h2>
          <p class="thq-body-large faq3-text13">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="faq3-fragment13">
                <span class="faq3-text17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span v-html="raw9rws"></span>
                </span>
              </div>
            </slot>
          </p>
        </div>
        <button class="faq3-button thq-button-outline">
          <span class="thq-body-small">
            <slot name="action">
              <!--Default content for action-->
              <div class="faq3-fragment21">
                <span class="faq3-text25">Contact</span>
              </div>
            </slot>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ3',
  props: {},
  data() {
    return {
      raw2uch: ' ',
      rawzpjs: ' ',
      raw6f7m: ' ',
      raw9rws: ' ',
    }
  },
}
</script>

<style scoped>
.faq3faq9 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.faq3-max-width {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq3-section-title {
  align-items: flex-start;
}
 
.faq3-text10 {
  text-align: center;
}
 
.faq3-text11 {
  text-align: center;
}
 
.faq3-row1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq3-content2 {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.faq3-faq1-question {
  width: 500px;
  font-style: normal;
  font-weight: 600;
}
 
.faq3-faq1-answer {
  flex-grow: 1;
}
 
.faq3-row2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq3-content3 {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.faq3-faq2-question {
  width: 500px;
  font-style: normal;
  font-weight: 600;
}
 
.faq3-faq2-answer {
  flex-grow: 1;
}
 
.faq3-row3 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq3-content4 {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.faq3-faq3-question {
  width: 500px;
  font-style: normal;
  font-weight: 600;
}
 
.faq3-faq3-answer {
  flex-grow: 1;
}
 
.faq3-row4 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq3-content5 {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.faq3-faq4-question {
  width: 500px;
  font-style: normal;
  font-weight: 600;
}
 
.faq3-faq4-answer {
  flex-grow: 1;
}
 
.faq3-content7 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  flex-direction: column;
}
 
.faq3-button {
  align-self: flex-start;
}
 
.faq3-fragment10 {
  display: contents;
}
 
.faq3-text14 {
  display: inline-block;
}
 
.faq3-fragment11 {
  display: contents;
}
 
.faq3-text15 {
  display: inline-block;
}
 
.faq3-fragment12 {
  display: contents;
}
 
.faq3-text16 {
  display: inline-block;
}
 
.faq3-fragment13 {
  display: contents;
}
 
.faq3-text17 {
  display: inline-block;
}
 
.faq3-fragment14 {
  display: contents;
}
 
.faq3-text18 {
  display: inline-block;
}
 
.faq3-fragment15 {
  display: contents;
}
 
.faq3-text19 {
  display: inline-block;
}
 
.faq3-fragment16 {
  display: contents;
}
 
.faq3-text20 {
  display: inline-block;
}
 
.faq3-fragment17 {
  display: contents;
}
 
.faq3-text21 {
  display: inline-block;
}
 
.faq3-fragment18 {
  display: contents;
}
 
.faq3-text22 {
  display: inline-block;
}
 
.faq3-fragment19 {
  display: contents;
}
 
.faq3-text23 {
  display: inline-block;
}
 
.faq3-fragment20 {
  display: contents;
}
 
.faq3-text24 {
  display: inline-block;
}
 
.faq3-fragment21 {
  display: contents;
}
 
.faq3-text25 {
  display: inline-block;
}
 
.faq3-fragment22 {
  display: contents;
}
 
.faq3-text26 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .faq3-content2 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .faq3-content3 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .faq3-content4 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .faq3-content5 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .faq3-faq1-question {
    width: 100%;
  }
  .faq3-faq2-question {
    width: 100%;
  }
  .faq3-faq3-question {
    width: 100%;
  }
  .faq3-faq4-question {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .faq3-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .faq3-text12 {
    text-align: center;
  }
  .faq3-text13 {
    text-align: center;
  }
  .faq3-button {
    align-self: center;
  }
}
</style>
