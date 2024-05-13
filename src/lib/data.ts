"use server"

import { Resend } from 'resend';
import { MAIL_FROM } from './constants';
import { z } from 'zod'; 
import { revalidatePath } from 'next/cache';

export async function SendEmail(
    prevState: any, 
    data: FormData
) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        if(!resend) return "Error al inicializar el servicio de envío de correos.";

        const email = data.get('email');
        const subject = data.get('subject');
        const message = data.get('message');

        if(!email || !subject || !message) return "Por favor, rellena todos los campos.";

        const emailSchema = z.object({
            email: z.string().email(),
            subject: z.string(),
            message: z.string(),
        });

        const emailData = emailSchema.safeParse({
            email,
            subject,
            message,
        });

        if(!emailData.success) return "Por favor, rellena todos los campos correctamente.";

        await resend.emails.send({
            from: `Formulario wevvi.es <${ MAIL_FROM }>`,
            to: [ MAIL_FROM ],
            subject: `Solicitud de contacto: ${ emailData.data.subject }`,
            text: emailData.data.message,
        });

        revalidatePath('/');

        return "email_sent";
    } catch (error) {
        console.error((error as Error).message);

        return "Ha ocurrido un error al enviar el mensaje."
    }
}