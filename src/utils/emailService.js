import emailjs from '@emailjs/browser';

// Configuração do EmailJS
const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Inicializar EmailJS
export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

// Função para enviar email
export const sendEmail = async (formData) => {
  try {
    // Verificar se todas as configurações estão presentes
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      throw new Error('Configurações do EmailJS não encontradas. Verifique o arquivo .env');
    }

    // Preparar os dados do template
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.mensagem,
      to_name: 'Ana Karoline',
      reply_to: formData.email,
    };

    // Enviar o email
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );

    return {
      success: true,
      message: 'Email enviado com sucesso!',
      response,
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Retornar erro mais específico
    let errorMessage = 'Erro ao enviar email. Tente novamente.';
    
    if (error.message.includes('Configurações do EmailJS')) {
      errorMessage = 'Configuração do EmailJS incompleta.';
    } else if (error.status === 400) {
      errorMessage = 'Dados do formulário inválidos.';
    } else if (error.status === 404) {
      errorMessage = 'Serviço ou template não encontrado.';
    }

    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};

// Função alternativa usando mailto (fallback)
export const sendEmailFallback = (formData) => {
  const subject = encodeURIComponent(`Contato do Portfólio - ${formData.nome}`);
  const body = encodeURIComponent(
    `Nome: ${formData.nome}\n` +
    `Email: ${formData.email}\n\n` +
    `Mensagem:\n${formData.mensagem}`
  );
  
  const mailtoLink = `mailto:anakarolinearaujo@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};

export default {
  initEmailJS,
  sendEmail,
  sendEmailFallback,
};
