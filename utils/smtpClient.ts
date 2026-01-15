/**
 * SMTP Client for DriveUp Forms
 * Handles communication with PHP backend
 */

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  timestamp?: string;
  form_type?: string;
  recipients?: {
    admin: string;
    user: string | null;
  };
}

export interface TestEmailResult {
  success: boolean;
  message: string;
  timestamp?: string;
  recipient?: string;
  smtp_host?: string;
  smtp_port?: number;
}

/**
 * Submit form data to PHP backend
 */
export const submitFormDirectly = async (
  formData: any,
  formType: string,
  language: string = 'tr',
  smtpProvider: string = 'default'
): Promise<FormSubmissionResult> => {
  const baseUrl = import.meta.env.DEV
    ? 'http://localhost:8000' // PHP built-in server port
    : 'https://api.driveuptr.com'; // Production API domain
  
  // Debug logging - sadece development'ta
  if (import.meta.env.DEV) {
    console.log('Environment:', import.meta.env.MODE);
    console.log('Base URL:', baseUrl);
    console.log('Final endpoint:', `${baseUrl}/email.php`);
  }
  
  const endpoint = `${baseUrl}/email.php`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        formData,
        language,
        smtpProvider,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Error logging - sadece development'ta
    if (import.meta.env.DEV) {
      console.error('Form submission error:', error);
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

/**
 * Send test email via PHP backend
 */
export const sendTestEmail = async (
  language: string = 'tr',
  smtpProvider: string = 'default'
): Promise<TestEmailResult> => {
  const baseUrl = import.meta.env.DEV
    ? 'http://localhost:8000' // PHP built-in server port
    : 'https://api.driveuptr.com'; // Production API domain
  
  // Debug logging - sadece development'ta
  if (import.meta.env.DEV) {
    console.log('Test Email - Environment:', import.meta.env.MODE);
    console.log('Test Email - Base URL:', baseUrl);
    console.log('Test Email - Final endpoint:', `${baseUrl}/test-email.php`);
  }
  
  const endpoint = `${baseUrl}/test-email.php`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language,
        smtpProvider,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Error logging - sadece development'ta
    if (import.meta.env.DEV) {
      console.error('Test email error:', error);
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

/**
 * Test SMTP connection
 */
export const testSmtpConnection = async (
  smtpProvider: string = 'default'
): Promise<boolean> => {
  try {
    const result = await sendTestEmail('tr', smtpProvider);
    return result.success;
  } catch (error) {
    // Error logging - sadece development'ta
    if (import.meta.env.DEV) {
      console.error('SMTP connection test failed:', error);
    }
    return false;
  }
};

/**
 * Get available SMTP providers
 */
export const getSmtpProviders = () => {
  return [
    { id: 'default', name: 'DriveUp SMTP', host: 'zimbra.emresarioglu.com.tr' },
    { id: 'gmail', name: 'Gmail', host: 'smtp.gmail.com' },
    { id: 'outlook', name: 'Outlook', host: 'smtp-mail.outlook.com' },
    { id: 'yandex', name: 'Yandex', host: 'smtp.yandex.com' },
  ];
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Format form data for submission
 */
export const formatFormData = (formData: any): any => {
  const formatted: any = {};
  
  Object.keys(formData).forEach(key => {
    const value = formData[key];
    
    // Handle boolean values
    if (typeof value === 'boolean') {
      formatted[key] = value;
    }
    // Handle string values
    else if (typeof value === 'string') {
      formatted[key] = value.trim();
    }
    // Handle other types
    else {
      formatted[key] = value;
    }
  });
  
  return formatted;
};
