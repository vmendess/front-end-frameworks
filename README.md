# Front-End Frameworks — Projeto de Interface de Chat Moderno

>  **Aviso de Compatibilidade:**  
> Este projeto funciona **somente na versão desktop**. A interface ainda **não está otimizada para dispositivos móveis**.

>  **Importante:**  
> Todos os dados e mensagens exibidos na interface são **totalmente fictícios**, usados apenas para demonstração.

---

##  Tecnologias Utilizadas
- **Vue 3** com Composition API  
- **Vite** para desenvolvimento e build  
- **Vue Router** para navegação entre conversas  
- **TypeScript** para tipagem estática  
- **CSS moderno** com gradientes e glassmorphism  
- **Transições animadas** com `Transition` e `TransitionGroup`  

---

##  Estrutura Geral do Projeto
O projeto está organizado de forma modular, facilitando manutenção e escalabilidade.

- **ConversationList** — lista de conversas  
- **ConversationItem** — item individual da lista  
- **ChatView** — tela principal do chat  
- **MessageBubble** — bolha individual de mensagem  
- **ChatInput** — campo para envio de mensagens  
- **ChatHeader** — informações da conversa  

---

##  Funcionalidades Implementadas
- Interface com **lista de conversas à esquerda** e **área de mensagens à direita**
- **Roteamento dinâmico** para cada conversa (`/chat/1`, `/chat/2` etc.)
- **Transições animadas** para entrada de mensagens
- **Simulação automática de respostas** com delays reais
- **Scroll automático** para novas mensagens
- **Indicador de status online**
- **Contador de mensagens não lidas**
- **Ordenação automática por última mensagem**
- **Layout responsivo** para desktops
- **Interface moderna** com gradiente e efeito vidro fosco

---

##  Design e Experiência do Usuário
- Fundo com **gradiente azul/roxo**
- Bolhas com **efeito glassmorphism**
- Avatares circulares com indicador de status
- Transições suaves
- Visual inspirado em grandes apps de mensagens

---

##  Compatibilidade
Este projeto foi desenvolvido **exclusivamente para uso em versão desktop**.  
A interface **não é compatível com mobile** no momento.

---

##  Dados Utilizados
As mensagens e informações exibidas na interface são **fakes**, servindo apenas como exemplo visual e funcional.

---

##  Deploy
O projeto já está em produção via **Vercel**, disponível no link:

🔗 **https://front-end-frameworks-one.vercel.app**

---

##  Objetivo do Repositório
Demonstrar como construir uma interface de chat completa utilizando Vue, Vite e boas práticas modernas, servindo como base para estudos ou expansão futura.

