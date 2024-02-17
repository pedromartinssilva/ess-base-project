interface Chat {
  id: string;
  participants: string[]; // IDs dos participantes do chat
  messages: Message[]; // Mensagens trocadas no chat
  lastMessage: string;
  timestamp: Date;
}

interface Message {
  id: string;
  sender: string; // ID do remetente da mensagem
  content: string; // Conteúdo da mensagem
  timestamp: Date; // Timestamp da mensagem
}

export { Chat, Message };
