import fs from 'fs';

import path from 'path';

const filePath = path.join(__dirname, '..', 'database', 'chats.json');

export const addChat = (novaConversa: any) => {
    try {
        let conversas: any[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        conversas.push(novaConversa);
        fs.writeFileSync(filePath, JSON.stringify(conversas));
        return conversas;
    } catch (error: any) {
        throw new Error('Erro ao adicionar conversa: ' + (error as Error).message);
    }
};

export const getChats = () => {
    try {
        const conversas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        // Ordenar as conversas com base no timestamp da última mensagem (a mais recente)
        conversas.sort((a: any, b: any) => {
            return new Date(b.messages[0].timestamp).getTime() - new Date(a.messages[0].timestamp).getTime();
        });

        return conversas;
    } catch (error: any) {
        throw new Error('(service) Erro ao obter conversas: ' + (error as Error).message);
    }
};

export const deleteChat = (id: string) => {
    try {
        const conversas: any[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const index = conversas.findIndex((conversa: any) => conversa.id === id);
        if (index !== -1) {
            const deletedChat = conversas.splice(index, 1);
            fs.writeFileSync(filePath, JSON.stringify(conversas));
            return deletedChat;
        } else {
            throw new Error('Conversa não encontrada');
        }
    } catch (error: any) {
        throw new Error('Erro ao excluir conversa: ' + (error as Error).message);
    }
};