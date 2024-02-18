// userController.ts

import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, username, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'E-mail already registered' });
      return;
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = new UserModel({
      name,
      email,
      username,
      password: hashedPassword,
    });

    // Salvar o novo usuário no banco de dados
    await newUser.save();

    // Responder ao cliente com uma mensagem de sucesso
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
