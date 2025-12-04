<script setup lang="ts">
import { computed } from 'vue'
import type { Message } from '../types/chat'

const props = defineProps<{
  message: Message
}>()

const formattedTime = computed(() => {
  const date = props.message.timestamp
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
})
</script>

<template>
  <div :class="['message-bubble', message.sender]">
    <div class="bubble-content">
      <p class="text">{{ message.text }}</p>
      <span class="time">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<style scoped>
.message-bubble {
  display: flex;
  margin-bottom: 0.5rem;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-bubble.user {
  justify-content: flex-end;
}

.message-bubble.contact {
  justify-content: flex-start;
}

.bubble-content {
  max-width: 70%;
  padding: 0.875rem 1.125rem;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.user .bubble-content {
  background: white;
  color: #1a1a1a;
  border-bottom-right-radius: 4px;
}

.contact .bubble-content {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border-bottom-left-radius: 4px;
}

.text {
  margin: 0 0 0.25rem 0;
  line-height: 1.5;
  word-wrap: break-word;
}

.time {
  font-size: 0.75rem;
  opacity: 0.7;
  display: block;
  text-align: right;
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .bubble-content {
    max-width: 85%;
  }
}
</style>
