<script setup lang="ts">
import type { Conversation } from '../types/chat'

defineProps<{
  conversation: Conversation
}>()
</script>

<template>
  <div class="chat-header">
    <img :src="conversation.avatar" :alt="conversation.name" class="avatar">
    <div class="info">
      <h2>{{ conversation.name }}</h2>
      <p class="status">Online</p>
    </div>
  </div>
</template>

<style scoped>
.chat-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info {
  flex: 1;
}

h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
}

.status {
  margin: 0;
  font-size: 0.85rem;
  color: #10b981;
  font-weight: 500;
}
</style>
