<template>
  <div class="faq141faq8 thq-section-padding" v-bind:class="rootClassName">
    <div class="faq141-max-width thq-section-max-width">
      <div class="faq141-container10 thq-flex-column">
        <div class="faq141-section-title thq-flex-column">
          <h2 class="faq141-text10 thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="faq141-fragment16">
                <span class="faq141-text26">FAQs</span>
              </div>
            </slot>
          </h2>
          <p class="faq141-text11 thq-body-large">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="faq141-fragment11">
                <span class="faq141-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </span>
              </div>
            </slot>
          </p>
        </div>
        <div class="faq141-list thq-flex-column">
          <div class="thq-divider-horizontal"></div>
          <div class="faq141-faq1">
            <div @click="faq1Visible = !faq1Visible" class="faq141-trigger1">
              <p class="faq141-faq1-question1 thq-body-large">
                <slot name="faq1Question">
                  <!--Default content for faq1Question-->
                  <div class="faq141-fragment17">
                    <span class="faq141-text27">Frequently Asked Questions</span>
                  </div>
                </slot>
              </p>
              <div class="faq141-icons-container1">
                <div v-if="!faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon10">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon12">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq1Visible" class="faq141-container13">
              <span class="thq-body-small">
                Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt aut
                deleniti illum non repudiandae voluptatem. Aut praesentium
                doloribus qui distinctio neque ut unde temporibus. Cum
                exercitationem eveniet in omnis animi in corporis nulla. Sed
                tempora excepturi et voluptatem modi et exercitationem voluptate
                cum illum quisquam 33 quia blanditiis eos minus consequatur.Ut
                neque quam qui dignissimos voluptates ut voluptate totam aut
                consequuntur quod. Ut voluptas incidunt ut fuga nostrum ut quaerat
                enim eum earum tenetur? Est esse harum et Quis officiis et enim
                amet.Et minima tempore et neque voluptatem eos amet officiis et
                temporibus Quis. Et suscipit esse id nemo sunt At nihil earum et
                consequatur fuga aut sapiente voluptate est cupiditate esse non
                dolor cumque. Ut obcaecati recusandae et beatae quae qui
                doloremque eligendi sit eaque labore.
              </span>
            </div>
          </div>
          <div class="thq-divider-horizontal"></div>
          <div class="faq141-faq2">
            <div @click="faq2Visible = !faq2Visible" class="faq141-trigger2">
              <p class="faq141-faq2-question1 thq-body-large">
                <slot name="faq2Question">
                  <!--Default content for faq2Question-->
                  <div class="faq141-fragment15">
                    <span class="faq141-text25">Frequently Asked Questions</span>
                  </div>
                </slot>
              </p>
              <div class="faq141-icons-container2">
                <div v-if="!faq2Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon14">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq2Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon16">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq2Visible" class="faq141-container16">
              <span class="thq-body-small">
                Et minima tempore et neque voluptatem eos amet officiis et
                temporibus Quis. Et suscipit esse id nemo sunt At nihil earum et
                consequatur fuga aut sapiente voluptate est cupiditate esse non
                dolor cumque. Ut obcaecati recusandae et beatae quae qui
                doloremque eligendi sit eaque labore.
              </span>
            </div>
          </div>
          <div class="thq-divider-horizontal"></div>
          <div class="faq141-faq3">
            <div @click="faq3Visible = !faq3Visible" class="faq141-trigger3">
              <p class="faq141-faq2-question2 thq-body-large">
                <slot name="faq3Question">
                  <!--Default content for faq3Question-->
                  <div class="faq141-fragment14">
                    <span class="faq141-text24">Frequently Asked Questions</span>
                  </div>
                </slot>
              </p>
              <div class="faq141-icons-container3">
                <div v-if="!faq3Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon18">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq3Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon20">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq3Visible" class="faq141-container19">
              <span class="thq-body-small">
                A quia temporibus aut ullam assumenda vel eius sapiente ut
                eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed nulla
                quia qui exercitationem alias aut consequuntur nihil et animi
                voluptas.
              </span>
            </div>
          </div>
          <div class="thq-divider-horizontal"></div>
          <div class="faq141-faq4">
            <div @click="faq4Visible = !faq4Visible" class="faq141-trigger4">
              <p class="faq141-faq2-question3 thq-body-large">
                <slot name="faq4Question">
                  <!--Default content for faq4Question-->
                  <div class="faq141-fragment12">
                    <span class="faq141-text22">Frequently Asked Questions</span>
                  </div>
                </slot>
              </p>
              <div class="faq141-icons-container4">
                <div v-if="!faq4Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon22">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq4Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon24">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq4Visible" class="faq141-container22">
              <span class="thq-body-small">
                A quia temporibus aut ullam assumenda vel eius sapiente ut
                eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed nulla
                quia qui exercitationem alias aut consequuntur nihil et animi
                voluptas.
              </span>
            </div>
          </div>
          <div class="thq-divider-horizontal"></div>
          <div class="faq141-faq5">
            <div @click="faq5Visible = !faq5Visible" class="faq141-trigger5">
              <p class="faq141-faq1-question2 thq-body-large">
                <slot name="faq5Question">
                  <!--Default content for faq5Question-->
                  <div class="faq141-fragment18">
                    <span class="faq141-text28">Frequently Asked Questions</span>
                  </div>
                </slot>
              </p>
              <div class="faq141-icons-container5">
                <div v-if="!faq5Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon26">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq5Visible">
                  <svg viewBox="0 0 1024 1024" class="faq141-icon28">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq5Visible" class="faq141-container25">
              <span class="thq-body-small">
                Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt aut
                deleniti illum non repudiandae voluptatem. Aut praesentium
                doloribus qui distinctio neque ut unde temporibus. Cum
                exercitationem eveniet in omnis animi in corporis nulla. Sed
                tempora excepturi et voluptatem modi et exercitationem voluptate
                cum illum quisquam 33 quia blanditiis eos minus consequatur.Ut
                neque quam qui dignissimos voluptates ut voluptate totam aut
                consequuntur quod. Ut voluptas incidunt ut fuga nostrum ut quaerat
                enim eum earum tenetur? Est esse harum et Quis officiis et enim
                amet.Et minima tempore et neque voluptatem eos amet officiis et
                temporibus Quis. Et suscipit esse id nemo sunt At nihil earum et
                consequatur fuga aut sapiente voluptate est cupiditate esse non
                dolor cumque. Ut obcaecati recusandae et beatae quae qui
                doloremque eligendi sit eaque labore.
              </span>
            </div>
          </div>
          <div class="thq-divider-horizontal"></div>
        </div>
      </div>
      <div class="faq141-content1 thq-flex-column">
        <div class="faq141-content2">
          <h2 class="faq141-text17 thq-heading-2">
            <slot name="heading2">
              <!--Default content for heading2-->
              <div class="faq141-fragment10">
                <span class="faq141-text20">Still have a question?</span>
              </div>
            </slot>
          </h2>
          <span class="faq141-text18 thq-body-large">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="faq141-fragment19">
                <span class="faq141-text29">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span v-html="rawp3wj"></span>
                </span>
              </div>
            </slot>
          </span>
        </div>
        <button type="button" class="thq-button-filled">
          <span>
            <slot name="action2">
              <!--Default content for action2-->
              <div class="faq141-fragment13">
                <span class="faq141-text23">Email us</span>
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
  name: 'FAQ141',
  props: {
    rootClassName: String,
  },
  data() {
    return {
      faq5Visible: false,
      faq1Visible: false,
      faq3Visible: false,
      faq4Visible: false,
      faq2Visible: false,
      rawejwh: ' ',
      rawp3wj: ' ',
    }
  },
}
</script>

<style scoped>
.faq141faq8 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.faq141-max-width {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.faq141-container10 {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.faq141-section-title {
  width: 100%;
  align-self: center;
  align-items: center;
}
 
.faq141-text10 {
  text-align: center;
}
 
.faq141-text11 {
  text-align: center;
}
 
.faq141-list {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  align-self: center;
  align-items: flex-start;
}
 
.faq141-faq1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq141-trigger1 {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-trigger1:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-theme-primary2);
}
 
.faq141-faq1-question1 {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
 
.faq141-icons-container1 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-icon10 {
  width: 24px;
  height: 24px;
}
 
.faq141-icon12 {
  width: 24px;
  height: 24px;
}
 
.faq141-container13 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.faq141-faq2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq141-trigger2 {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-trigger2:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-theme-primary2);
}
 
.faq141-faq2-question1 {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
 
.faq141-icons-container2 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-icon14 {
  width: 24px;
  height: 24px;
}
 
.faq141-icon16 {
  width: 24px;
  height: 24px;
}
 
.faq141-container16 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.faq141-faq3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq141-trigger3 {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-trigger3:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-theme-primary2);
}
 
.faq141-faq2-question2 {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
 
.faq141-icons-container3 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-icon18 {
  width: 24px;
  height: 24px;
}
 
.faq141-icon20 {
  width: 24px;
  height: 24px;
}
 
.faq141-container19 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.faq141-faq4 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq141-trigger4 {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-trigger4:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-theme-primary2);
}
 
.faq141-faq2-question3 {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
 
.faq141-icons-container4 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-icon22 {
  width: 24px;
  height: 24px;
}
 
.faq141-icon24 {
  width: 24px;
  height: 24px;
}
 
.faq141-container22 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.faq141-faq5 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.faq141-trigger5 {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-trigger5:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-theme-primary2);
}
 
.faq141-faq1-question2 {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
 
.faq141-icons-container5 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.faq141-icon26 {
  width: 24px;
  height: 24px;
}
 
.faq141-icon28 {
  width: 24px;
  height: 24px;
}
 
.faq141-container25 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.faq141-content1 {
  align-self: center;
}
 
.faq141-content2 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  flex-direction: column;
}
 
.faq141-text17 {
  text-align: center;
}
 
.faq141-text18 {
  text-align: center;
}
 
.faq141-fragment10 {
  display: contents;
}
 
.faq141-text20 {
  display: inline-block;
}
 
.faq141-fragment11 {
  display: contents;
}
 
.faq141-text21 {
  display: inline-block;
}
 
.faq141-fragment12 {
  display: contents;
}
 
.faq141-text22 {
  display: inline-block;
}
 
.faq141-fragment13 {
  display: contents;
}
 
.faq141-text23 {
  display: inline-block;
}
 
.faq141-fragment14 {
  display: contents;
}
 
.faq141-text24 {
  display: inline-block;
}
 
.faq141-fragment15 {
  display: contents;
}
 
.faq141-text25 {
  display: inline-block;
}
 
.faq141-fragment16 {
  display: contents;
}
 
.faq141-text26 {
  display: inline-block;
}
 
.faq141-fragment17 {
  display: contents;
}
 
.faq141-text27 {
  display: inline-block;
}
 
.faq141-fragment18 {
  display: contents;
}
 
.faq141-text28 {
  display: inline-block;
}
 
.faq141-fragment19 {
  display: contents;
}
 
.faq141-text29 {
  display: inline-block;
}
 
.faq141root-class-name {
  display: none;
}
 
@media(max-width: 991px) {
  .faq141-container10 {
    flex-direction: column;
  }
}
 
@media(max-width: 479px) {
  .faq141-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
