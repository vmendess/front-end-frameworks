<template>
  <div class="empty-state">
    <div class="empty-content">
      <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <h2>Selecione uma conversa</h2>
      <p>Escolha uma conversa da lista ao lado para começar a trocar mensagens</p>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.empty-content {
  text-align: center;
  padding: 2rem;
  max-width: 400px;
}

.empty-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  opacity: 0.9;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

p {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}
</style>
