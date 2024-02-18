import express, { Request, Response } from 'express';
import { updateUser } from '../services/update.service'; // Importe a função do service

const router = express.Router();

// Rota para atualizar as informações do usuário
router.put('/api/users/update', async (req: Request, res: Response) => {
  try {
    const { oldEmail, newName, newEmail, newPassword, newUserName } = req.body; // Extrair dados do corpo da requisição

    // Chame a função do service para atualizar as informações do usuário
    const updatedUser = await updateUser(oldEmail, newName, newEmail, newPassword, newUserName);
    
    res.status(200).json(updatedUser); // Retorne uma resposta com o usuário atualizado
  } catch (error) {
    console.error('Erro ao atualizar as informações do usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' }); // Retorne uma resposta de erro
  }
});

export default router;
