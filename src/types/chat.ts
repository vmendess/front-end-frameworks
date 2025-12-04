export interface Message {
  id: string
  conversationId: string
  text: string
  sender: 'user' | 'contact'
  timestamp: Date
}

export interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: Date
  unread: number
}
