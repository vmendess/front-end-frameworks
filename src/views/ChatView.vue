<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useChat } from '../composables/useChat'
import MessageBubble from '../components/MessageBubble.vue'
import ChatInput from '../components/ChatInput.vue'
import ChatHeader from '../components/ChatHeader.vue'

const route = useRoute()
const { getConversation, getMessages, sendMessage, markAsRead } = useChat()

const messagesContainer = ref<HTMLElement | null>(null)

const conversationId = computed(() => route.params.id as string)
const conversation = computed(() => getConversation(conversationId.value))
const messages = computed(() => getMessages(conversationId.value))

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const handleSendMessage = (text: string) => {
  sendMessage(conversationId.value, text)
  scrollToBottom()
}

watch(messages, () => {
  scrollToBottom()
}, { deep: true })

watch(conversationId, () => {
  markAsRead(conversationId.value)
  scrollToBottom()
}, { immediate: true })

onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <div v-if="conversation" class="chat-view">
    <ChatHeader :conversation="conversation" />

    <div ref="messagesContainer" class="messages-container">
      <TransitionGroup name="message">
        <MessageBubble
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </TransitionGroup>
    </div>

    <ChatInput @send="handleSendMessage" />
  </div>
  <div v-else class="not-found">
    <p>Conversa não encontrada</p>
  </div>
</template>

<style scoped>
.chat-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.messages-container::-webkit-scrollbar {
  width: 8px;
}

.messages-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.2rem;
}

.message-enter-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
