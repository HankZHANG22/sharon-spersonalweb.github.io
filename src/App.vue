<template>
  <div class="app">
    <NavBar />
    <main class="container">
      <router-view />
    </main>

    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} Xiaoman Luo (Sharon)</span>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
:root {
  --bg: #ffffff;
  --text: #111111;
  --muted: #666666;
  --border: #eeeeee;
  --soft: #f7f7f8;
  --accent: #1a5cff;

  /* ✅ 先用稳的系统字体，保证一定显示 */
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-serif: Georgia, "Times New Roman", Times, serif;
}

* { box-sizing: border-box; }
html, body { height: 100%; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.9;
}

* { font-family: inherit; }
input, textarea, button, select { font-family: inherit; }

a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }

.app { min-height: 100vh; display: flex; flex-direction: column; }

.container {
  width: min(980px, calc(100% - 40px));
  margin: 0 auto;
  padding: 24px 0 40px;
}

.footer {
  margin-top: auto;
  border-top: 1px solid var(--border);
  padding: 18px 0;
  color: var(--muted);
  text-align: center;
  font-size: 14px;
}
</style>