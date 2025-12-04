<script setup lang="ts">
import { computed } from 'vue'
import type { Conversation } from '../types/chat'

const props = defineProps<{
  conversation: Conversation
  active: boolean
}>()

const formattedTime = computed(() => {
  const date = props.conversation.lastMessageTime
  const now = new Date()
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

  if (diffInHours < 24) {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  } else {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
  }
})
</script>

<template>
  <div :class="['conversation-item', { active }]">
    <div class="avatar-wrapper">
      <img :src="conversation.avatar" :alt="conversation.name" class="avatar">
      <span class="status-indicator"></span>
    </div>

    <div class="conversation-info">
      <div class="top-row">
        <h3 class="name">{{ conversation.name }}</h3>
        <span class="time">{{ formattedTime }}</span>
      </div>
      <div class="bottom-row">
        <p class="last-message">{{ conversation.lastMessage }}</p>
        <span v-if="conversation.unread > 0" class="unread-badge">
          {{ conversation.unread }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conversation-item {
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.conversation-item:hover {
  background: #f9fafb;
}

.conversation-item.active {
  background: #f3f4f6;
  border-left-color: #667eea;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}

.conversation-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
}

.top-row,
.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.time {
  font-size: 0.75rem;
  color: #9ca3af;
  flex-shrink: 0;
}

.last-message {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.unread-badge {
  background: #667eea;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .conversation-item {
    padding: 0.875rem 1rem;
  }

  .avatar {
    width: 48px;
    height: 48px;
  }
}
</style>
