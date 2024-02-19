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
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error: any) {
        throw new Error('(service) Erro ao obter conversas: ' + (error as Error).message);
    }
};
