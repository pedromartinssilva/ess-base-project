import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styles from './recentChats.module.css';
import pinIcon from '../assets/pin.png'
import trashIcon from '../assets/trash-can.png'

interface IMessage {
    content: string;
    sender: string;
    receiver: string;
    id: string;
    media: boolean;
    timestamp: Date;
}

interface IChat {
    id: string;
    participants: string[]; 
    fixed: boolean;
    messages: IMessage[];
}

// Função auxiliar para formatar a data
const formatDate = (date: Date | string | number): string => {
    // Se a data for uma string ou um número, converta-a para um objeto Date
    const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam em 0
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const RecentChats: React.FC = () => {
    const [chats, setChats] = useState<IChat[]>([]);
    
    const fetchRecentChats = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/chats');
            setChats(response.data);
        } catch (error) {
            console.error('Erro ao buscar conversas recentes:', error);
        }
    };
    
    useEffect(() => {
        fetchRecentChats();
    }, []);

    const handleDeleteChat = async (chatId: string) => {
        try {
            await axios.delete(`http://localhost:5001/api/chats/${chatId}`);
            fetchRecentChats();
        } catch (error) {
            console.error('Erro ao excluir conversa:', error);
        }
    };

    const handleFixChat = async (chatId: string) => {
        try {
            await axios.put(`http://localhost:5001/api/chats/${chatId}/fix`);
            fetchRecentChats();
        } catch (error) {
            console.error('Erro ao fixar a conversa:', error);
        }
    };    

    return (
        <div className={styles.container}>
        <h2>Conversas Recentes</h2>
        <ul className={styles.chatList}>
            {chats.map((chat, index) => (
            <li key={index} className={styles.chatItem}>
                <div className={styles.chatTitleandActions}>
                    <div className={styles.chatTitle}>{chat.participants.slice(1).join(', ')}</div>
                    <div className={styles.chatActions}>
                        <img
                            className={styles.trashIcon}
                            src={trashIcon}
                            alt='Deletar'
                            onClick={() => handleDeleteChat(chat.id)} />
                        <img
                            className={styles.pinIcon}
                            src={pinIcon}
                            alt='Fixar'
                            onClick={() => handleFixChat(chat.id)} />
                    </div>
                </div>
                <div className={styles.chatItemContent}>
                    <div className={styles.chatLastMessage}> {chat.messages.slice(-1)[0].content}</div>
                    <div className={styles.chatLastMessageTimestamp}>{formatDate(chat.messages[0].timestamp)}</div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default RecentChats;
