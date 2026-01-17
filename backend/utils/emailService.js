const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendApplicationConfirmation(to, applicationId, fullName) {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: to,
      subject: 'Ваша заявка на вступление в клуб принята',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Уважаемый(ая) ${fullName},</h2>
          <p>Ваша заявка на вступление в наш клуб была успешно получена.</p>
          <p><strong>Номер заявки:</strong> ${applicationId}</p>
          <p>Мы рассмотрим вашу заявку в ближайшее время и свяжемся с вами по указанным контактам.</p>
          <p>Спасибо за ваш интерес к нашему клубу!</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Это автоматическое письмо, пожалуйста, не отвечайте на него.
          </p>
        </div>
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendStatusUpdate(to, applicationId, status, notes = '') {
    const statusMessages = {
      'approved': 'одобрена',
      'rejected': 'отклонена',
      'pending': 'на рассмотрении'
    };

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: to,
      subject: `Обновление статуса заявки ${applicationId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Обновление статуса заявки</h2>
          <p>Статус вашей заявки <strong>${applicationId}</strong> был изменен на: <strong>${statusMessages[status] || status}</strong></p>
          ${notes ? `<p><strong>Комментарий:</strong><br>${notes}</p>` : ''}
          <hr>
          <p style="color: #666; font-size: 12px;">
            Это автоматическое письмо, пожалуйста, не отвечайте на него.
          </p>
        </div>
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}

module.exports = new EmailService();