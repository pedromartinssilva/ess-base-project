
import { Chat, Message } from '../models/chat.model';

export default class ChatDatabase {
    private static instance: ChatDatabase;
    private chats: Chat[];
  
    private constructor() {
        this.chats = [
            { id: '1', participants: ['Letícia'], messages: [], lastMessage: 'Oi!', timestamp: new Date('2024-02-17T10:00:00') },
            { id: '2', participants: ['Bia'], messages: [], lastMessage: 'Olá.', timestamp: new Date('2024-02-17T18:30:00') },
            { id: '3', participants: ['Jessyca'], messages: [], lastMessage: 'Tchau.', timestamp: new Date('2024-02-17T10:00:00') },
          ];
    }
  
    static getInstance() {
        if (!ChatDatabase.instance) {
            ChatDatabase.instance = new ChatDatabase();
        }
        return ChatDatabase.instance;
    }

    // Método para ordenar os chats pelo timestamp
    private sortChatsByTimestamp() {
        this.chats.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    }

    // Método para adicionar um novo chat
    addChat(chat: any) {
        this.chats.push(chat);
    }
  
    // Método para remover um chat com base no ID
    removeChat(chatId: string) {
        this.chats = this.chats.filter(chat => chat.id !== chatId);
    }

    // Método para obter todos os chats
    getAllChats() {
        this.sortChatsByTimestamp();
        return this.chats;
    }

    // Outros métodos para interagir com os chats, como obter todos os chats, buscar um chat pelo ID, etc.
}
  