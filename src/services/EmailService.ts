interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[];
}

interface IMessageDTO {
    to:IMailTo;
    message: IMailMessage;
}

interface IMailService {
    sendMail(reques: IMessageDTO): void;
}

class EmailService implements IMailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email has sended to ${to.name}: ${message.subject}`);
    }
}

export default EmailService;