<template>
  <section class="newsletter-newsletter" v-bind:class="rootClassName">
    <div class="newsletter-header">
      <h2 class="newsletter-text1 Zitat">
        <slot name="heading">
          <!--Default content for heading-->
          <div class="newsletter-fragment3">
            <span class="newsletter-text8">Nervenpost – Bleib verbunden!</span>
          </div>
        </slot>
      </h2>
      <p class="newsletter-text2">
        <slot name="text">
          <!--Default content for text-->
          <div class="newsletter-fragment2">
            <p class="newsletter-text4">
              <span class="Content">
                Komm mit auf die Reise zu mehr Balance und Verbundenheit – melde
                dich für meinen
                <span v-html="rawj50r"></span>
              </span>
              <span class="newsletter-text6">Newsletter</span>
              <span class="Content">
                an und erhalte Inspirationen, praktische Impulse und Neuigkeiten
                zu meinen Angeboten direkt in dein Postfach.
                <span v-html="raw0vz2"></span>
              </span>
            </p>
          </div>
        </slot>
      </p>
    </div>
    <div class="newsletter-content">
      <div class="newsletter-email">
        <input
          type="text"
          :placeholder="textinputPlaceholder"
          class="newsletter-textinput input"
        />
        <div class="newsletter-submit">
          <img :alt="imageAlt" :src="imageSrc" class="newsletter-image" />
        </div>
      </div>
      <div class="newsletter-notice1">
        <span class="newsletter-notice2">
          <slot name="notice">
            <!--Default content for notice-->
            <div class="newsletter-fragment1">
              <span class="newsletter-text3">
                By subscribing occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum
              </span>
            </div>
          </slot>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  props: {
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc: {
      type: String,
      default:
        'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
    rootClassName: String,
    textinputPlaceholder: {
      type: String,
      default: 'Enter your email',
    },
  },
  data() {
    return {
      rawnnh7: ' ',
      rawq0pd: ' ',
      rawj50r: ' ',
      raw0vz2: ' ',
    }
  },
}
</script>

<style scoped>
.newsletter-newsletter {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  position: relative;
  max-width: auto;
  align-items: center;
  padding-top: 120px;
  border-color: var(--dl-color-gray-black);
  padding-left: var(--dl-space-space-oneandhalfunits);
  margin-bottom: 120px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
 
.newsletter-header {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.newsletter-text1 {
  color: var(--dl-color-primary-dunkelgruen);
  width: 100%;
  font-size: 48px;
  max-width: 800px;
  font-style: italic;
  text-align: center;
  font-weight: 400;
}
 
.newsletter-text2 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-family: "Lato";
  font-weight: 400;
  line-height: 1.25;
  text-transform: none;
  text-decoration: none;
}
 
.newsletter-content {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.newsletter-email {
  width: 400px;
  height: 60px;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding-top: 2px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 60px;
  padding-right: 2px;
  flex-direction: row;
  padding-bottom: 2px;
  justify-content: center;
  background-color: #F3F3F3;
}
 
.newsletter-textinput {
  flex: 1;
  color: #122821;
  outline: inherit;
  font-family: Lato;
  font-weight: 600;
  background-color: transparent;
}
 
.newsletter-submit {
  width: 56px;
  cursor: pointer;
  height: 56px;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-primary-dunkelgruen);
}
 
.newsletter-submit:hover {
  background-color: #408770;
}
 
.newsletter-image {
  width: 18px;
  filter: brightness(0) saturate(100%) invert(88%) sepia(8%) saturate(484%) hue-rotate(62deg) brightness(111%) contrast(95%);
  transform: rotate(-45deg);
  object-fit: cover;
}
 
.newsletter-notice1 {
  width: 100%;
  display: flex;
  max-width: 400px;
  align-items: flex-start;
  padding-left: 27px;
  flex-direction: column;
  justify-content: center;
}
 
.newsletter-notice2 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 12px;
  max-width: 305px;
  font-family: Lato;
  line-height: 15px;
}
 
.newsletter-fragment1 {
  display: contents;
}
 
.newsletter-text3 {
  display: inline-block;
}
 
.newsletter-fragment2 {
  display: contents;
}
 
.newsletter-text4 {
  color: rgb(18, 40, 33);
  width: 100%;
  display: inline-block;
  font-size: 20px;
  text-align: center;
  font-family: "Lato";
  font-weight: 400;
  line-height: 1.25;
  text-transform: none;
  text-decoration: none;
}
 
.newsletter-text6 {
  color: var(--dl-color-primary-gruen);
  font-size: 20px;
  font-weight: 700;
}
 
.newsletter-fragment3 {
  display: contents;
}
 
.newsletter-text8 {
  display: inline-block;
}
 
.newsletterroot-class-name {
  background-color: var(--dl-color-primary-hellgruen);
}
 
.newsletterroot-class-name1 {
  background-color: var(--dl-color-primary-hellgruen);
}
 
.newsletterroot-class-name2 {
  background-color: var(--dl-color-primary-hellgruen);
}
 
.newsletterroot-class-name3 {
  background-color: var(--dl-color-primary-hellgruen);
}
 
.newsletterroot-class-name4 {
  background-color: var(--dl-color-primary-hellgruen);
}
 
.newsletterroot-class-name5 {
  background-color: var(--dl-color-primary-hellgruen);
}
 
@media(max-width: 991px) {
  .newsletter-newsletter {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .newsletter-text1 {
    font-size: 32px;
  }
  .newsletter-text2 {
    font-size: 16px;
    line-height: 24px;
  }
  .newsletter-notice2 {
    font-size: 10px;
    line-height: 13px;
  }
  .newsletter-text4 {
    font-size: 16px;
    line-height: 24px;
  }
}
 
@media(max-width: 479px) {
  .newsletter-email {
    width: 100%;
  }
}
</style>
