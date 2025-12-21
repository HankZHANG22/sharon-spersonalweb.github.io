<template>
  <header class="nav">
    <div class="nav-inner">
      <router-link class="brand" to="/">
        <span class="brand-name">Sharon</span>
      </router-link>

      <nav class="links">
        <router-link class="link" to="/" :class="{ active: isActive('/') }">Home</router-link>
        <router-link class="link" to="/research" :class="{ active: isActive('/research') }">
          Research & CV
        </router-link>
        <router-link class="link primary" to="/email" :class="{ active: isActive('/email') }">
          Email Me
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path === path
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  width: min(980px, calc(100% - 40px));
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: var(--text);
}
.brand:hover { text-decoration: none; }

.brand-name {
  font-size: 16px;
}

/* 右侧导航 */
.links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.link {
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--muted);
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
}

.link:hover {
  text-decoration: none;
  border-color: var(--border);
  background: var(--soft);
  color: var(--text);
}

.active {
  color: var(--text);
  border-color: #e4e4e7;
  background: #ffffff;
}

/* “Email Me” 更像按钮 */
.primary {
  border-color: rgba(26, 92, 255, 0.18);
  background: rgba(26, 92, 255, 0.08);
  color: var(--text);
}
.primary:hover {
  border-color: rgba(26, 92, 255, 0.28);
  background: rgba(26, 92, 255, 0.12);
}

@media (max-width: 520px) {
  .links { gap: 6px; }
  .link { padding: 8px 10px; font-size: 13px; }
}
</style>