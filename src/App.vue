<script setup lang="ts">
import { RouterView } from 'vue-router'
import ConversationList from './components/ConversationList.vue'
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <ConversationList />
    </aside>
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 360px;
  flex-shrink: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.main-content {
  flex: 1;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: absolute;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
