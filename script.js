* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #070707;
  color: #f5f5f5;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
}

body.loading {
  overflow: hidden;
}

:root {
  --red: #e51d3e;
  --red-dark: #8f1026;
  --black: #070707;
  --card: #101010;
  --border: #252525;
  --muted: #858585;
}


/* ================= LOADER ================= */

#loader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity .8s ease, visibility .8s ease;
}

#loader.loaded {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.loader-small {
  font-size: 10px;
  letter-spacing: 5px;
  color: var(--red);
  margin-bottom: 15px;
}

.loader-name {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(25px, 7vw, 60px);
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}

.loader-percent {
  margin-top: 25px;
  color: #777;
  font-size: 12px;
  letter-spacing: 3px;
}

.loader-track {
  width: min(330px, 70vw);
  height: 2px;
  background: #242424;
  margin-top: 12px;
  overflow: hidden;
}

.loader-bar {
  width: 0%;
  height: 100%;
  background: var(--red);
  box-shadow: 0 0 18px var(--red);
}


/* ================= NAVBAR ================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 5%;
  background: rgba(7, 7, 7, .75);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,.05);
}

.logo {
  color: white;
  text-decoration: none;
  font-family: "Space Grotesk";
  font-size: 25px;
  font-weight: 700;
}

.logo span {
  color: var(--red);
}

.navbar nav {
  display: flex;
  gap: 28px;
}

.navbar nav a {
  color: #aaa;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 2px;
  transition: .3s;
}

.navbar nav a:hover {
  color: var(--red);
}


/* ================= COMMON ================= */

.section {
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 130px 5%;
}

.section-heading {
  margin-bottom: 65px;
}

.section-heading > span {
  color: var(--red);
  font-size: 10px;
  letter-spacing: 4px;
}

.section-heading h2 {
  margin-top: 15px;
  font-family: "Space Grotesk";
  font-size: clamp(42px, 7vw, 90px);
  line-height: .95;
  letter-spacing: -4px;
}

.section-heading em {
  color: #666;
  font-style: normal;
}

.reveal {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity .8s ease, transform .8s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}


/* ================= HERO ================= */

.hero {
  min-height: 100vh;
  max-width: 1400px;

  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 70px;

  padding-top: 150px;
}

.hero-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: var(--red);
  filter: blur(180px);
  opacity: .09;
  top: 20%;
  right: 10%;
  pointer-events: none;
}

.identity-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 9px 14px;
  border: 1px solid #333;
  border-radius: 100px;

  color: #aaa;
  font-size: 9px;
  letter-spacing: 3px;
}

.identity-badge span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 12px var(--red);
}

.hero h1 {
  font-family: "Space Grotesk";
  font-size: clamp(60px, 10vw, 135px);
  line-height: .82;
  letter-spacing: -8px;
  margin: 30px 0;
}

.hero h1 span {
  color: var(--red);
}

.hero-role {
  font-size: 11px;
  letter-spacing: 4px;
  color: #aaa;
}

.hero-bio {
  max-width: 470px;
  color: #888;
  line-height: 1.8;
  margin-top: 25px;
  font-size: 15px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 15px 22px;
  border-radius: 8px;

  text-decoration: none;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 700;

  transition: .3s;
}

.btn-red {
  color: white;
  background: var(--red);
  box-shadow: 0 8px 30px rgba(229,29,62,.18);
}

.btn-red:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(229,29,62,.3);
}

.btn-dark {
  color: white;
  border: 1px solid #333;
  background: #101010;
}

.btn-dark:hover {
  border-color: var(--red);
}

.scroll-text {
  margin-top: 80px;
  font-size: 8px;
  letter-spacing: 4px;
  color: #555;
}

.scroll-text span {
  color: var(--red);
  margin-left: 10px;
}


/* ================= PROFILE CARD ================= */

.profile-card {
  position: relative;
  background: linear-gradient(145deg, #151515, #090909);
  border: 1px solid #292929;
  border-radius: 28px;
  padding: 25px;

  min-height: 520px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,.5);
}

.profile-card::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 250px;
  background: var(--red);
  filter: blur(130px);
  opacity: .12;
}

.card-top,
.card-bottom {
  position: absolute;
  left: 25px;
  right: 25px;

  display: flex;
  justify-content: space-between;

  font-size: 8px;
  letter-spacing: 3px;
  color: #666;
}

.card-top {
  top: 25px;
}

.card-top span:first-child {
  color: var(--red);
}

.card-bottom {
  bottom: 25px;
}

.avatar {
  width: 240px;
  height: 240px;

  border-radius: 50%;
  padding: 5px;

  background: linear-gradient(145deg, var(--red), #350913);
  box-shadow:
    0 0 0 1px #333,
    0 0 60px rgba(229,29,62,.18);

  overflow: hidden;
  position: relative;
  z-index: 2;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
}

.card-line {
  width: 70px;
  height: 2px;
  background: var(--red);
  margin-top: 28px;
}

.profile-card h2 {
  margin-top: 18px;
  font-family: "Space Grotesk";
  font-size: 24px;
  letter-spacing: 1px;
}

.profile-card > p {
  margin-top: 7px;
  font-size: 8px;
  color: #666;
  letter-spacing: 3px;
}


/* ================= MARQUEE ================= */

.marquee {
  overflow: hidden;
  border-top: 1px solid #1d1d1d;
  border-bottom: 1px solid #1d1d1d;
  padding: 18px 0;
  white-space: nowrap;
  background: #090909;
}

.marquee div {
  display: inline-block;
  animation: marquee 25s linear infinite;

  font-family: "Space Grotesk";
  font-size: 14px;
  letter-spacing: 3px;
}

.marquee span {
  color: var(--red);
  margin: 0 25px;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}


/* ================= ABOUT ================= */

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.about-card {
  min-height: 280px;
  padding: 30px;

  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-card.featured {
  background: var(--red);
  border-color: var(--red);
}

.number {
  color: var(--red);
  font-size: 11px;
  letter-spacing: 2px;
}

.about-card h3 {
  font-family: "Space Grotesk";
  font-size: 18px;
}

.about-card p {
  color: #999;
  line-height: 1.7;
  font-size: 14px;
}

.featured p {
  color: white;
  font-family: "Space Grotesk";
  font-size: 25px;
  line-height: 1.3;
}

.quote-mark {
  font-size: 55px;
  color: rgba(255,255,255,.3);
}

.quote-author {
  font-size: 9px;
  letter-spacing: 3px;
}


/* ================= SKILLS ================= */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.skill {
  padding: 35px;
  min-height: 220px;

  border: 1px solid var(--border);
  border-radius: 20px;
  background: #0d0d0d;

  transition: .3s;
}

.skill:hover {
  border-color: #4b1520;
  transform: translateY(-5px);
}

.skill span {
  color: var(--red);
  font-size: 10px;
}

.skill h3 {
  margin-top: 50px;
  font-family: "Space Grotesk";
  font-size: 22px;
}

.skill p {
  margin-top: 10px;
  color: #777;
  font-size: 13px;
  line-height: 1.6;
}


/* ================= QUOTE ================= */

.quote-section {
  padding: 150px 5%;
  background: #0a0a0a;
  border-top: 1px solid #171717;
  border-bottom: 1px solid #171717;
}

.big-quote {
  max-width: 1100px;
  margin: auto;
}

.big-quote > span {
  color: var(--red);
  font-size: 9px;
  letter-spacing: 4px;
}

.big-quote h2 {
  margin-top: 30px;
  font-family: "Space Grotesk";
  font-size: clamp(35px, 6vw, 75px);
  line-height: 1.05;
  letter-spacing: -3px;
}

.big-quote em {
  color: #666;
  font-style: normal;
}

.big-quote p {
  margin-top: 35px;
  color: #555;
  font-size: 10px;
  letter-spacing: 3px;
}


/* ================= POETRY ================= */

.poetry-card {
  max-width: 850px;
  padding: 55px;

  margin-left: auto;

  background:
    linear-gradient(135deg, #111, #090909);

  border: 1px solid #252525;
  border-radius: 25px;
}

.poetry-label {
  color: var(--red);
  font-size: 9px;
  letter-spacing: 4px;
  margin-bottom: 30px;
}

.poetry-card p {
  font-family: "Space Grotesk";
  font-size: clamp(22px, 3vw, 36px);
  line-height: 1.5;
  color: #ddd;
  margin-bottom: 20px;
}

.poetry-card span {
  display: block;
  margin-top: 35px;
  font-size: 9px;
  letter-spacing: 3px;
  color: #666;
}


/* ================= SQUAD ================= */

.squad-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.squad-card {
  padding: 22px;

  background: #0d0d0d;
  border: 1px solid var(--border);
  border-radius: 18px;

  display: flex;
  align-items: center;
  gap: 18px;

  transition: .3s;
}

.squad-card:hover {
  border-color: var(--red);
  transform: translateY(-3px);
}

.squad-avatar {
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background: #191919;
  border: 1px solid #333;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--red);
  font-family: "Space Grotesk";
  font-weight: 700;
}

.squad-card h3 {
  font-family: "Space Grotesk";
  font-size: 15px;
}

.squad-card p {
  color: #666;
  font-size: 8px;
  letter-spacing: 3px;
  margin-top: 6px;
}


/* ================= GALLERY ================= */

.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
}

.gallery-item {
  position: relative;
  min-height: 300px;

  border: 1px solid var(--border);
  border-radius: 22px;

  overflow: hidden;
  background: #0d0d0d;
}

.gallery-item.large {
  grid-row: span 2;
  min-height: 615px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%);
  transition: .5s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.placeholder {
  width: 100%;
  height: 100%;

  min-height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(circle, #321019, #0b0b0b 60%);
}

.placeholder span {
  font-family: "Space Grotesk";
  font-size: 70px;
  color: #241018;
}

.gallery-overlay {
  position: absolute;
  inset: auto 0 0 0;

  padding: 25px;

  background: linear-gradient(transparent, rgba(0,0,0,.9));
}

.gallery-overlay span {
  color: var(--red);
  font-size: 9px;
}

.gallery-overlay h3 {
  margin-top: 7px;
  font-family: "Space Grotesk";
  font-size: 17px;
}


/* ================= RESOURCES ================= */

.resources-grid {
  display: flex;
  flex-direction: column;
}

.resource {
  padding: 25px 5px;

  border-top: 1px solid #252525;

  display: grid;
  grid-template-columns: 60px 1fr 30px;
  align-items: center;

  color: white;
  text-decoration: none;

  transition: .3s;
}

.resource:last-child {
  border-bottom: 1px solid #252525;
}

.resource:hover {
  padding-left: 15px;
  color: var(--red);
}

.resource > span {
  color: var(--red);
  font-size: 9px;
}

.resource h3 {
  font-family: "Space Grotesk";
  font-size: 18px;
}

.resource p {
  margin-top: 5px;
  color: #666;
  font-size: 12px;
}

.resource b {
  font-size: 20px;
}


/* ================= CONTACT ================= */

.contact-section {
  padding: 170px 5%;
  border-top: 1px solid #171717;
  background:
    radial-gradient(circle at center, rgba(229,29,62,.08), transparent 45%),
    #080808;
}

.contact-inner {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.contact-inner > span {
  color: var(--red);
  font-size: 9px;
  letter-spacing: 4px;
}

.contact-inner h2 {
  margin: 30px 0;
  font-family: "Space Grotesk";
  font-size: clamp(55px, 10vw, 125px);
  line-height: .85;
  letter-spacing: -7px;
}

.contact-inner h2 em {
  color: #555;
  font-style: normal;
}

.contact-inner p {
  max-width: 500px;
  margin: 0 auto 35px;
  color: #777;
  line-height: 1.7;
  font-size: 14px;
}


/* ================= FOOTER ================= */

footer {
  padding: 60px 5% 25px;
  border-top: 1px solid #202020;
  background: #050505;
}

.footer-top {
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-logo {
  font-family: "Space Grotesk";
  font-size: 20px;
  font-weight: 700;
}

.footer-top p {
  margin-top: 10px;
  color: #555;
  font-size: 8px;
  letter-spacing: 3px;
}

.footer-links {
  display: flex;
  gap: 25px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 8px;
  letter-spacing: 2px;
}

.footer-links a:hover {
  color: var(--red);
}

.footer-bottom {
  max-width: 1200px;
  margin: 60px auto 0;

  padding-top: 20px;
  border-top: 1px solid #171717;

  display: flex;
  justify-content: space-between;

  color: #444;
  font-size: 8px;
  letter-spacing: 2px;
}


/* ================= MOBILE ================= */

@media (max-width: 800px) {

  .navbar {
    padding: 16px 5%;
  }

  .navbar nav {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 130px;
    gap: 50px;
  }

  .hero h1 {
    font-size: 68px;
    letter-spacing: -5px;
  }

  .profile-card {
    min-height: 430px;
  }

  .avatar {
    width: 190px;
    height: 190px;
  }

  .about-grid,
  .skills-grid,
  .squad-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item.large {
    grid-row: auto;
    min-height: 500px;
  }

  .gallery-item {
    min-height: 300px;
  }

  .poetry-card {
    padding: 30px;
  }

  .contact-inner h2 {
    font-size: 60px;
    letter-spacing: -4px;
  }

  .footer-top {
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }
}
