import { IMessage } from '../interfaces/chat.interface';

export default class NotificationsDatabase {
    private static instance: NotificationsDatabase;
    private unreadMessages: IMessage[];

    addNotification(message: IMessage) {
        // Verifique se o valor de timestamp já é um objeto Date
        if (typeof message.timestamp === 'string') {
            // Se for uma string, converta-a para um objeto Date
            message.timestamp = new Date(message.timestamp);
        }
        this.unreadMessages.push(message);
    }
    deleteNotification(id: string) {
        const index = this.unreadMessages.findIndex(message => message.id === id);
        if (index !== -1) {
            this.unreadMessages.splice(index, 1);
            return true;
        }
        return false;
    }

    getNotifications(participant: string) {
        return this.unreadMessages.filter(message => (message.receiver === participant)
        );
    }
    static getInstance() {
        if (!NotificationsDatabase.instance) {
            NotificationsDatabase.instance = new NotificationsDatabase();
        }
        return NotificationsDatabase.instance;
    }    
}