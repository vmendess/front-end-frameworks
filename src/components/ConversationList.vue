<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useChat } from '../composables/useChat'
import ConversationItem from './ConversationItem.vue'

const router = useRouter()
const route = useRoute()
const { conversations } = useChat()

const activeConversationId = computed(() => route.params.id as string)

const selectConversation = (id: string) => {
  router.push(`/chat/${id}`)
}
</script>

<template>
  <div class="conversation-list">
    <div class="list-header">
      <h1>Mensagens</h1>
      <div class="header-actions">
        <button class="icon-button" title="Nova conversa">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="search-box">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input type="text" placeholder="Buscar conversas...">
    </div>

    <div class="conversations-scroll">
      <TransitionGroup name="list">
        <ConversationItem
          v-for="conversation in conversations"
          :key="conversation.id"
          :conversation="conversation"
          :active="activeConversationId === conversation.id"
          @click="selectConversation(conversation.id)"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.conversation-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border-right: 1px solid #e5e7eb;
}

.list-header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.icon-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f3f4f6;
  color: #4b5563;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.icon-button:hover {
  background: #667eea;
  color: white;
  transform: scale(1.05);
}

.icon-button svg {
  width: 18px;
  height: 18px;
}

.search-box {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #9ca3af;
  flex-shrink: 0;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: #1a1a1a;
  font-family: inherit;
}

.search-box input::placeholder {
  color: #9ca3af;
}

.conversations-scroll {
  flex: 1;
  overflow-y: auto;
}

.conversations-scroll::-webkit-scrollbar {
  width: 6px;
}

.conversations-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.conversations-scroll::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.conversations-scroll::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
