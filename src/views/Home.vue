<template>
  <section class="page">
    <div class="layout">
      <div class="left">
        <h1 class="title">
          Xiaoman Luo <span class="name-cn">骆潇蔓</span>
          <span class="nick">Sharon</span>
        </h1>

        <p class="subtitle">
          Fudan University, School of Social Development and Public Policy<br />
          PhD Candidate <strong>Sociology - Gerontology</strong><br />
          Master of <strong>Public Administration</strong>
        </p>

        <div class="section">
          <h2 class="h2">Research Interests</h2>
          <p class="muted">
            Overarching theme: the population issue of China surrounding the old and the young
          </p>
          <ul class="list">
            <li>Environment and healthy ageing</li>
            <li>Community and social cohesion</li>
            <li>Social policy for fertility support</li>
            <li>Intergenerational relationships</li>
          </ul>
        </div>

        <div class="divider" />

        <div class="section">
          <h2 class="h2">About</h2>
          <p class="text">
            I am currently in the third year of my PhD program, and my dissertation has passed
            both the proposal defense and the mid-term review. My research aims to identify ways of
            improving community environments to promote healthy ageing.<br />
            Recently, I have been thinking about how to harness the rising consumption power of
            ageing society through policy and regulation to advance the silver economy and generate
            lessons with international relevance.
          </p>
        </div>

        <div class="divider" />

        <div class="section">
          <h2 class="h2">Contact</h2>
          <ul class="contact">
            <li>
              <span class="label">Email</span>
              <a class="value link" :href="`mailto:${email}`">{{ email }}</a>
            </li>
            <li>
              <span class="label">Phone</span>
              <span class="value">{{ phone }}</span>
            </li>
            <li>
              <span class="label">Address</span>
              <span class="value">{{ address }}</span>
            </li>
          </ul>
        </div>
      </div>

      <aside class="right">
        <img class="photo" :src="profileUrl" alt="Profile photo" />
      </aside>
    </div>
  </section>
</template>

<script setup>
import profileUrl from '../assets/profile.jpg'

const email = 'lxiaomanxm@163.com'
const phone = '+86-15121121030'
const address =
  'Room 601D, No. 107, North Campus, Fudan University, 57 Wudong Road, Yangpu District, Shanghai, China.'
</script>

<style scoped>
.page { padding: 10px 0 30px; }

.layout {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 34px;
  align-items: start;
}
@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; gap: 18px; }
}

.title {
  margin: 0 0 10px;
  font-size: 36px;
  line-height: 1.25;
  letter-spacing: -0.2px;
  color: #111;
  font-family: var(--font-serif);
}

.name-cn { margin-left: 10px; font-size: 18px; font-weight: 700; color: #444; }

.nick {
  margin-left: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #555;
  border: 1px solid #e6e6e6;
  padding: 2px 10px;
  border-radius: 999px;
  vertical-align: middle;
  background: #fafafa;
}

.subtitle { margin: 0 0 18px; color: #444; font-size: 15px; }
.subtitle strong { font-weight: 800; color: #111; }

.section { margin: 14px 0; }

.h2 {
  margin: 0 0 8px;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #111;
  font-family: var(--font-sans);
}

.muted { margin: 0 0 10px; color: #666; font-size: 14px; }
.text { margin: 0; color: #222; font-size: 15px; }
.list { margin: 0; padding-left: 18px; color: #222; font-size: 15px; }

.divider { height: 1px; background: #eeeeee; margin: 18px 0; }

.contact { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.contact li { display: grid; grid-template-columns: 86px 1fr; gap: 10px; align-items: start; }
.label { color: #666; font-size: 13px; padding-top: 2px; }
.value { color: #222; font-size: 15px; word-break: break-word; }
.link { color: #1a5cff; text-decoration: none; }
.link:hover { text-decoration: underline; }

.right { display: flex; justify-content: flex-end; }
.photo {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1.15;
  object-fit: cover;
  border-radius: 0;
  border: 1px solid #eeeeee;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}
@media (max-width: 860px) {
  .right { justify-content: flex-start; }
  .photo { max-width: 360px; }
}
</style>