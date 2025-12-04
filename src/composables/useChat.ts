import { ref, computed } from 'vue'
import type { Conversation, Message } from '../types/chat'

const conversations = ref<Conversation[]>([
  {
    id: '1',
    name: 'Maria Silva',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: 'Oi! Tudo bem?',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
    unread: 2
  },
  {
    id: '2',
    name: 'João Santos',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: 'Vamos marcar aquele café?',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
    unread: 0
  },
  {
    id: '3',
    name: 'Ana Costa',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: 'Obrigada pela ajuda!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unread: 0
  },
  {
    id: '4',
    name: 'Pedro Lima',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: 'Conseguiu resolver?',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unread: 1
  }
])

const messages = ref<Message[]>([
  {
    id: '1',
    conversationId: '1',
    text: 'Oi! Tudo bem?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: '2',
    conversationId: '1',
    text: 'Tudo ótimo! E você?',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 4)
  },
  {
    id: '3',
    conversationId: '2',
    text: 'Oi! Como você está?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 45)
  },
  {
    id: '4',
    conversationId: '2',
    text: 'Tudo bem sim! Você?',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 40)
  },
  {
    id: '5',
    conversationId: '2',
    text: 'Vamos marcar aquele café?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 30)
  },
  {
    id: '6',
    conversationId: '3',
    text: 'Você conseguiu fazer aquele documento?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3)
  },
  {
    id: '7',
    conversationId: '3',
    text: 'Sim! Já enviei para você',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2.5)
  },
  {
    id: '8',
    conversationId: '3',
    text: 'Obrigada pela ajuda!',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2)
  },
  {
    id: '9',
    conversationId: '4',
    text: 'Olá, tudo certo com o projeto?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25)
  },
  {
    id: '10',
    conversationId: '4',
    text: 'Praticamente pronto',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24.5)
  },
  {
    id: '11',
    conversationId: '4',
    text: 'Conseguiu resolver?',
    sender: 'contact',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
  }
])

export function useChat() {
  const getConversations = computed(() =>
    [...conversations.value].sort((a, b) =>
      b.lastMessageTime.getTime() - a.lastMessageTime.getTime()
    )
  )

  const getConversation = (id: string) =>
    conversations.value.find(c => c.id === id)

  const getMessages = (conversationId: string) =>
    messages.value
      .filter(m => m.conversationId === conversationId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

  const sendMessage = (conversationId: string, text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId,
      text,
      sender: 'user',
      timestamp: new Date()
    }

    messages.value.push(newMessage)

    const conversation = conversations.value.find(c => c.id === conversationId)
    if (conversation) {
      conversation.lastMessage = text
      conversation.lastMessageTime = new Date()
    }

    simulateResponse(conversationId)
  }

  const simulateResponse = (conversationId: string) => {
    const responses = [
      'Entendi! 😊',
      'Que legal!',
      'Pode deixar comigo',
      'Claro! Quando você preferir?',
      'Perfeito!',
      'Com certeza!',
      'Vou verificar e te respondo',
      'Boa ideia! 👍'
    ]

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const responseMessage: Message = {
        id: Date.now().toString(),
        conversationId,
        text: randomResponse,
        sender: 'contact',
        timestamp: new Date()
      }

      messages.value.push(responseMessage)

      const conversation = conversations.value.find(c => c.id === conversationId)
      if (conversation) {
        conversation.lastMessage = randomResponse
        conversation.lastMessageTime = new Date()
      }
    }, 1500 + Math.random() * 2000)
  }

  const markAsRead = (conversationId: string) => {
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (conversation) {
      conversation.unread = 0
    }
  }

  return {
    conversations: getConversations,
    getConversation,
    getMessages,
    sendMessage,
    markAsRead
  }
}
