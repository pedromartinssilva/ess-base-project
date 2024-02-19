import express, { Request, Response } from 'express';
import * as chatsService from '../services/chats.service';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    try {
        const novaConversa = req.body;
        const conversas = chatsService.addChat(novaConversa); // Usando addChats do serviço
        res.json(conversas);
    } catch (error: any) {
        res.status(500).json({ message: 'Erro ao adicionar conversa: ' + (error as Error).message });
    }
});

router.get('/', (req: Request, res: Response) => {
    try {
        const conversas = chatsService.getChats(); // Usando getChats do serviço
        res.json(conversas);
    } catch (error: any) {
        res.status(500).json({ message: 'Erro ao obter conversas: ' + (error as Error).message });
    }
});

export const addChats = router; // Exportando o router
export const getChats = router; // Exportando o router

export default router; // Exportação padrão do router
