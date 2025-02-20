<template>
  <div class="kontakt-container1">
    <header data-thq="thq-navbar" class="kontakt-navbar-interactive">
      <div data-thq="thq-navbar-nav" class="kontakt-desktop-menu">
        <router-link to="/" class="kontakt-navlink10">
          <span class="kontakt-text10">
            Ute Plaar
            <span v-html="rawzyvh"></span>
          </span>
          <span>
            ▪
            <span v-html="raw5z94"></span>
          </span>
          <span class="kontakt-text12">Körperbasiertes Coaching</span>
        </router-link>
        <nav class="kontakt-links1">
          <router-link to="/coaching" class="kontakt-navlink11">
            Coaching
          </router-link>
          <router-link to="/kurse" class="kontakt-navlink12">Kurse</router-link>
          <router-link to="/workshops" class="kontakt-navlink13">
            Workshops
          </router-link>
          <router-link to="/ueber-mich" class="kontakt-navlink14">
            Über mich
          </router-link>
          <router-link to="/kontakt" class="kontakt-navlink15">
            Kontakt
          </router-link>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="kontakt-burger-menu">
        <svg viewBox="0 0 1024 1024" class="kontakt-icon10">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="kontakt-mobile-menu">
        <div class="kontakt-nav">
          <div class="kontakt-top">
            <router-link to="/" class="kontakt-navlink16">
              Ute Plaar - In Bewegung zu dir
            </router-link>
            <div data-thq="thq-close-menu" class="kontakt-close-menu">
              <svg viewBox="0 0 1024 1024" class="kontakt-icon12">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="kontakt-links2">
            <router-link to="/coaching" class="kontakt-navlink17">
              <p class="kontakt-text13">Coaching</p>
            </router-link>
            <router-link to="/kurse" class="kontakt-navlink18">
              <p class="kontakt-text14">Kurse</p>
            </router-link>
            <router-link to="/workshops" class="kontakt-navlink19">
              <p class="kontakt-text15">Workshops</p>
            </router-link>
            <router-link to="/ueber-mich" class="kontakt-navlink20">
              <p class="kontakt-text16">Über mich</p>
            </router-link>
            <router-link to="/kontakt" class="kontakt-navlink21">
              <p class="kontakt-text17">Kontakt</p>
            </router-link>
          </nav>
        </div>
        <div class="kontakt-icon-group">
          <svg viewBox="0 0 602.2582857142856 1024" class="kontakt-icon14">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <div class="kontakt-kontakt thq-section-padding">
      <div class="thq-section-max-width thq-flex-row kontakt-max-width">
        <img
          alt="Image1"
          src="/ute-plaar-kontakt-600h.jpg"
          class="kontakt-image1 thq-img-ratio-4-3"
        />
        <div class="kontakt-content1 thq-flex-column">
          <div class="kontakt-section-title thq-card">
            <div class="kontakt-content2">
              <h2 class="kontakt-text18 thq-heading-2">Kontakt</h2>
              <span class="kontakt-text19 thq-body-small Content">
                <span>
                  Du hast Interesse an einem Coaching, Kurs oder Workshop,
                  möchtest eine Kooperation vorschlagen oder hast sonstige Fragen?
                </span>
                <br />
              </span>
              <span class="kontakt-text22 thq-body-small Content">
                Ich freue mich von dir zu lesen
              </span>
              <a href="mailto:kontakt@ute-plaar.de?subject=" class="button">
                <span class="thq-body-small">E-Mail senden</span>
              </a>
              <span class="kontakt-text23 Content thq-body-small">
                oder zu hören
              </span>
              <a href="tel:+49 15114171470" class="button">
                <span class="thq-body-small">anrufen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-newsletter rootClassName="newsletterroot-class-name5">
      <template v-slot:text>
        <div class="kontakt-fragment1">
          <span class="kontakt-text24">
            <span class="Content">
              Komm mit auf die Reise zu mehr Balance und Verbundenheit – melde
              dich für meinen
              <span v-html="rawb827"></span>
            </span>
            <span class="kontakt-text26">Newsletter</span>
            <span class="Content">
              an und erhalte Inspirationen, praktische Impulse und Neuigkeiten zu
              meinen Angeboten direkt in dein Postfach.
              <span v-html="rawn53y"></span>
            </span>
          </span>
        </div>
      </template>
      <template v-slot:notice>
        <div class="kontakt-fragment2">
          <span class="kontakt-text28">
            By subscribing occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </span>
        </div>
      </template>
      <template v-slot:heading>
        <div class="kontakt-fragment3">
          <span class="kontakt-text29">
            <span class="kontakt-text30">Balance</span>
            <span>Post – Bleib verbunden!</span>
          </span>
        </div>
      </template>
    </app-newsletter>
    <footer class="kontakt-footer">
      <div class="kontakt-information">
        <div class="kontakt-content3">
          <router-link to="/" class="kontakt-navlink22">
            <div class="kontakt-header">
              <div class="kontakt-branding">
                <span class="kontakt-text32">
                  <span class="kontakt-text33">
                    Ute Plaar
                    <span v-html="raws9w4"></span>
                  </span>
                  <span>
                    ▪
                    <span v-html="rawwsf3"></span>
                  </span>
                  <span class="kontakt-text35">Körperbasiertes Coaching</span>
                </span>
              </div>
              <p class="kontakt-text36">
                <span>Nervensystem Balance</span>
                <br />
                <span>Embodiment</span>
                <br />
                <span>Somatische Bewegungspraxis</span>
                <br />
                <span>Yoga &amp; Meditation</span>
              </p>
            </div>
          </router-link>
          <div class="kontakt-contact-list">
            <div class="kontakt-contact1">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="mailto:kontakt@ute-plaar.de?subject="
                class="kontakt-text44"
              >
                kontakt@ute-plaar.de
              </a>
            </div>
            <div class="kontakt-contact2">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767M14 3a7 7 0 0 1 7 7m-7-3a3 3 0 0 1 3 3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <a href="tel:+4915114171470" class="kontakt-text45">
                +49 151 14 17 14 70
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="kontakt-links3">
        <div class="kontakt-column">
          <router-link to="/coaching" class="kontakt-text46 link">
            Coaching
          </router-link>
          <router-link to="/kurse" class="kontakt-text47 link">Kurse</router-link>
          <router-link to="/workshops" class="kontakt-text48 link">
            Workshops
          </router-link>
          <span class="kontakt-text49 link">Über mich</span>
          <router-link to="/kontakt" class="kontakt-text50 link">
            Kontakt
          </router-link>
        </div>
      </div>
    </footer>
    <div class="kontakt-container2">
      <p class="kontakt-copyright">
        <router-link to="/datenschutz" class="kontakt-navlink23">
          Datenschutz
        </router-link>
        <span> ▪ </span>
        <router-link to="/impressum" class="kontakt-navlink24">
          Impressum
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import AppNewsletter from '../components/newsletter'

export default {
  name: 'Kontakt',
  props: {},
  components: {
    AppNewsletter,
  },
  data() {
    return {
      rawzyvh: ' ',
      raw5z94: ' ',
      rawb827: ' ',
      rawn53y: ' ',
      raws9w4: ' ',
      rawwsf3: ' ',
    }
  },
  metaInfo: {
    title: 'Kontakt',
    meta: [
      {
        property: 'og:title',
        content: 'Kontakt',
      },
    ],
  },
}
</script>

<style scoped>
.kontakt-container1 {
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-primary-creme);
}
 
.kontakt-navbar-interactive {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 106px;
  display: flex;
  z-index: 1000;
  position: sticky;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: space-between;
}
 
.kontakt-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
 
.kontakt-navlink10 {
  text-decoration: none;
}
 
.kontakt-text10 {
  color: var(--dl-color-primary-dunkelgruen);
}
 
.kontakt-text12 {
  color: var(--dl-color-primary-gruen);
  font-style: normal;
  font-weight: 700;
}
 
.kontakt-links1 {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.kontakt-navlink11 {
  color: var(--dl-color-primary-dunkelgruen);
  text-decoration: none;
}
 
.kontakt-navlink12 {
  color: var(--dl-color-primary-dunkelgruen);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
 
.kontakt-navlink13 {
  color: var(--dl-color-primary-dunkelgruen);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
 
.kontakt-navlink14 {
  color: var(--dl-color-primary-dunkelgruen);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
 
.kontakt-navlink15 {
  color: var(--dl-color-primary-dunkelgruen);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
 
.kontakt-burger-menu {
  width: 100%;
  display: none;
}
 
.kontakt-icon10 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
 
.kontakt-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
 
.kontakt-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
 
.kontakt-navlink16 {
  text-decoration: none;
}
 
.kontakt-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.kontakt-icon12 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
 
.kontakt-links2 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-navlink17 {
  display: contents;
}
 
.kontakt-text13 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
 
.kontakt-navlink18 {
  display: contents;
}
 
.kontakt-text14 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
 
.kontakt-navlink19 {
  display: contents;
}
 
.kontakt-text15 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
 
.kontakt-navlink20 {
  display: contents;
}
 
.kontakt-text16 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
 
.kontakt-navlink21 {
  display: contents;
}
 
.kontakt-text17 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
 
.kontakt-icon-group {
  display: none;
}
 
.kontakt-icon14 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
 
.kontakt-kontakt {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.kontakt-image1 {
  flex: 1;
  width: 420px;
  height: 476px;
  max-width: 640px;
  border-radius: var(--dl-radius-radius-radius4);
}
 
.kontakt-content1 {
  gap: 0;
  flex: 1;
  align-items: stretch;
}
 
.kontakt-section-title {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-content2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-text18 {
  color: var(--dl-color-primary-dunkelgruen);
}
 
.kontakt-text19 {
  color: var(--dl-color-primary-dunkelgruen);
}
 
.kontakt-text22 {
  color: var(--dl-color-primary-dunkelgruen);
  align-self: center;
}
 
.kontakt-text23 {
  color: var(--dl-color-primary-dunkelgruen);
  align-self: center;
}
 
.kontakt-fragment1 {
  display: contents;
}
 
.kontakt-text24 {
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
 
.kontakt-text26 {
  color: var(--dl-color-primary-gruen);
  font-size: 20px;
  font-weight: 700;
}
 
.kontakt-fragment2 {
  display: contents;
}
 
.kontakt-text28 {
  display: inline-block;
}
 
.kontakt-fragment3 {
  display: contents;
}
 
.kontakt-text29 {
  color: var(--dl-color-primary-dunkelgruen);
  display: inline-block;
}
 
.kontakt-text30 {
  color: var(--dl-color-primary-gruen);
}
 
.kontakt-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  border-color: #ccd1b3;
  border-width: 1px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  margin-bottom: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: row;
  justify-content: space-between;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
 
.kontakt-information {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-content3 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-navlink22 {
  display: contents;
}
 
.kontakt-header {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-decoration: none;
}
 
.kontakt-branding {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.kontakt-text32 {
  text-decoration: none;
}
 
.kontakt-text33 {
  color: var(--dl-color-primary-dunkelgruen);
}
 
.kontakt-text36 {
  color: var(--dl-color-primary-dunkelgruen);
  width: 100%;
  max-width: 600px;
}
 
.kontakt-contact-list {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-contact1 {
  gap: 11px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.kontakt-text44 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 18px;
  font-family: "Lato";
  line-height: 18px;
  text-decoration: none;
}
 
.kontakt-contact2 {
  gap: 11px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.kontakt-text45 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 18px;
  font-family: "Lato";
  line-height: 18px;
  text-decoration: underline;
}
 
.kontakt-links3 {
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-right: 0px;
  flex-direction: column;
  justify-content: flex-start;
}
 
.kontakt-column {
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.kontakt-text46 {
  text-decoration: underline;
}
 
.kontakt-text47 {
  text-decoration: underline;
}
 
.kontakt-text48 {
  text-decoration: underline;
}
 
.kontakt-text49 {
  text-decoration: underline;
}
 
.kontakt-text50 {
  text-decoration: underline;
}
 
.kontakt-container2 {
  width: 100%;
  display: block;
  padding-bottom: var(--dl-space-space-twounits);
}
 
.kontakt-copyright {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 14px;
  text-align: center;
  font-family: "Lato";
  line-height: 21px;
  padding-bottom: var(--dl-space-space-twounits);
}
 
.kontakt-navlink23 {
  text-decoration: underline;
}
 
.kontakt-navlink24 {
  text-decoration: underline;
}
 
@media(max-width: 1200px) {
  .kontakt-navlink10 {
    font-size: 20px;
  }
  .kontakt-text10 {
    color: var(--dl-color-primary-dunkelgruen);
  }
  .kontakt-text12 {
    color: var(--dl-color-primary-gruen);
    font-style: normal;
    font-weight: 700;
  }
  .kontakt-image1 {
    width: 371px;
    height: 504px;
  }
  .kontakt-text32 {
    font-size: 20px;
  }
  .kontakt-text33 {
    color: var(--dl-color-primary-dunkelgruen);
  }
  .kontakt-text35 {
    color: var(--dl-color-primary-gruen);
    font-style: normal;
    font-weight: 700;
  }
  .kontakt-text36 {
    color: var(--dl-color-primary-dunkelgruen);
  }
  .kontakt-links3 {
    padding-right: var(--dl-space-space-threeunits);
  }
  .kontakt-column {
    width: auto;
  }
}
 
@media(max-width: 991px) {
  .kontakt-max-width {
    flex-direction: column;
  }
  .kontakt-content1 {
    width: 100%;
  }
  .kontakt-text24 {
    font-size: 16px;
    line-height: 24px;
  }
  .kontakt-footer {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .kontakt-content3 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .kontakt-header {
    gap: var(--dl-space-space-unit);
  }
  .kontakt-links3 {
    gap: var(--dl-space-space-threeunits);
    padding-right: 0px;
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .kontakt-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .kontakt-burger-menu {
    align-items: center;
    justify-content: center;
  }
  .kontakt-text13 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .kontakt-text14 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .kontakt-text15 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .kontakt-text16 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .kontakt-text17 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .kontakt-image1 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .kontakt-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .kontakt-desktop-menu {
    display: none;
  }
  .kontakt-burger-menu {
    display: flex;
  }
  .kontakt-icon10 {
    align-self: center;
  }
  .kontakt-mobile-menu {
    padding: 16px;
  }
  .kontakt-links2 {
    width: 446px;
    align-self: center;
    align-items: flex-start;
    justify-content: space-between;
  }
  .kontakt-text13 {
    width: 100%;
    display: block;
    align-self: flex-start;
    text-align: center;
  }
  .kontakt-text14 {
    width: 100%;
    text-align: center;
  }
  .kontakt-text15 {
    width: 100%;
    text-align: center;
  }
  .kontakt-text16 {
    width: 100%;
    text-align: center;
  }
  .kontakt-text17 {
    width: 100%;
    text-align: center;
  }
}
</style>
