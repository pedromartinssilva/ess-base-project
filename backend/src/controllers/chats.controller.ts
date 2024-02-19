import fs from 'fs';

const filePath = 'conversas.json';

export const addChat = (novaConversa: any) => {
    try {
        let conversas: any[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        conversas.push(novaConversa);
        fs.writeFileSync(filePath, JSON.stringify(conversas));
        return conversas;
    } catch (error) {
        throw new Error('Erro ao adicionar conversa: ' + (error as Error).message);
    }
};

export const getChats = () => {
    try {
        const conversas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return conversas;
    } catch (error) {
        throw new Error('Erro ao obter conversas: ' + (error as Error).message);
    }
};
