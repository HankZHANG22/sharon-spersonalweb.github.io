<template>
  <section>
    <h1 class="title">Email Me</h1>
    <p class="muted">
      Fill in the subject and message, then click the button to send via your default email client.
    </p>

    <div class="card">
      <div class="row">
        <label class="label">To</label>
        <div class="value">
          <code>{{ EMAIL_TO }}</code>
        </div>
      </div>

      <div class="field">
        <label class="label" for="subject">Subject</label>
        <input id="subject" v-model="subject" class="input" placeholder="Hello Sharon..." />
      </div>

      <div class="field">
        <label class="label" for="body">Message</label>
        <textarea id="body" v-model="body" class="textarea" rows="8" placeholder="Write your message here..." />
      </div>

      <div class="actions">
        <button class="btn" @click="openMail">Open Email Client</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const EMAIL_TO = 'lxiaomanxm@163.com'
const PHONE = '+86-15121121030'
const ADDRESS =
  'Room 601D, No. 107, North Campus, Fudan University, 57 Wudong Road, Yangpu District, Shanghai, China.'

const subject = ref('')
const body = ref('')

const mailtoLink = computed(() => {
  const s = encodeURIComponent(subject.value || '')
  const signature =
    `\n\n---\nXiaoman Luo (Sharon)\nEmail: ${EMAIL_TO}\nPhone: ${PHONE}\nAddress: ${ADDRESS}\n`
  const b = encodeURIComponent((body.value || '') + signature)
  return `mailto:${EMAIL_TO}?subject=${s}&body=${b}`
})

function openMail() {
  window.location.href = mailtoLink.value
}
</script>

<style scoped>
.title { margin: 0 0 8px; font-size: 28px; }
.muted { color: var(--muted); margin: 0 0 14px; }

.card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
}

.row { display: flex; gap: 14px; align-items: center; margin-bottom: 14px; }
.value { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }

.field { margin: 12px 0; }
.label { display: block; font-size: 13px; color: var(--muted); margin-bottom: 6px; }

.input, .textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--soft);
  color: var(--text);
  padding: 10px 12px;
  outline: none;
}
.input:focus, .textarea:focus { border-color: rgba(26, 92, 255, 0.35); }

.actions { display: flex; gap: 12px; align-items: center; margin-top: 14px; flex-wrap: wrap; }

.btn {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(26, 92, 255, 0.25);
  background: rgba(26, 92, 255, 0.10);
  color: var(--text);
  cursor: pointer;
}
.btn:hover { border-color: rgba(26, 92, 255, 0.45); }

code {
  background: rgba(0, 0, 0, 0.06);
  padding: 2px 6px;
  border-radius: 8px;
}
</style>