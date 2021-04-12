import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: "Viniciud", email: 'email@gmail.com'},
];

export default {
    async index (req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        
        emailService.sendMail({
            to: { 
                name: 'Name', 
                email: 'email@gamil.com'
            }, 
            message: {
                subject: 'Welcome to the system', 
                body: 'Welcome new user!!'
            }
        });
        
        return res.send();
    }
};
