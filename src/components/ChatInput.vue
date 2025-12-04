<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  send: [text: string]
}>()

const inputText = ref('')

const handleSend = () => {
  if (inputText.value.trim()) {
    emit('send', inputText.value.trim())
    inputText.value = ''
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleSend()
  }
}
</script>

<template>
  <div class="chat-input">
    <div class="input-container">
      <input
        v-model="inputText"
        type="text"
        placeholder="Digite uma mensagem..."
        @keydown="handleKeydown"
        class="input-field"
      >
      <button @click="handleSend" class="send-button" :disabled="!inputText.trim()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-input {
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.input-container {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.input-field {
  flex: 1;
  padding: 0.875rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 24px;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  background: white;
  font-family: inherit;
}

.input-field:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.send-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.send-button:active:not(:disabled) {
  transform: scale(0.95);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-button svg {
  width: 20px;
  height: 20px;
}
</style>
