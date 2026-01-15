import emailjs from '@emailjs/browser';

// EmailJS yapılandırması - Environment variables'dan alınacak
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

/**
 * İletişim formu email gönder
 */
export const sendContactEmail = async (
  formData: ContactFormData,
  language: 'tr' | 'en' = 'tr'
): Promise<EmailResult> => {
  // EmailJS keys kontrolü
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    const errorMsg = language === 'en'
      ? 'Email service is not configured. Please contact the administrator.'
      : 'E-posta servisi yapılandırılmamış. Lütfen yönetici ile iletişime geçin.';
    
    if (import.meta.env.DEV) {
      console.error('EmailJS configuration missing:', {
        serviceId: EMAILJS_SERVICE_ID ? '✓' : '✗',
        templateId: EMAILJS_TEMPLATE_ID ? '✓' : '✗',
        publicKey: EMAILJS_PUBLIC_KEY ? '✓' : '✗'
      });
    }
    
    return {
      success: false,
      message: errorMsg
    };
  }

  try {
    // EmailJS'i initialize et
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Template parametrelerini hazırla
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || '',
      phone: formData.phone || '',
      service: formData.service || '',
      message: formData.message,
      language: language,
      to_email: 'info@driveuptr.com', // Admin email
      reply_to: formData.email,
      subject: language === 'en' 
        ? 'New Contact Form Submission - DriveUp' 
        : 'Yeni İletişim Formu - DriveUp',
    };

    // Email gönder
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: language === 'en' 
          ? 'Your message has been sent successfully!' 
          : 'Mesajınız başarıyla gönderildi!'
      };
    } else {
      throw new Error(`EmailJS returned status: ${response.status}`);
    }
  } catch (error) {
    // Production'da detaylı error loglamayın
    if (import.meta.env.DEV) {
      console.error('Email sending error:', error);
    }
    
    return {
      success: false,
      message: language === 'en'
        ? 'Failed to send message. Please try again later or contact us directly.'
        : 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan iletişime geçin.'
    };
  }
};
