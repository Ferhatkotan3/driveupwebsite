import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Language } from '../../types';

interface InvestorFormProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const InvestorForm = React.memo(({ 
  isOpen, 
  onClose, 
  language 
}: InvestorFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    experience: '',
    previousInvestments: '',
    whyThisProject: '',
    kvkkConsent: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const experienceLevels = {
    tr: [
      { value: 'beginner', label: 'Yeni Başlayan' },
      { value: 'intermediate', label: 'Orta Seviye' },
      { value: 'experienced', label: 'Deneyimli' },
      { value: 'professional', label: 'Profesyonel' }
    ],
    en: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'experienced', label: 'Experienced' },
      { value: 'professional', label: 'Professional' }
    ]
  };

  const formText = {
    tr: {
      title: 'Yatırımcı Formu',
      description: 'Bu form, potansiyel yatırımcıların projeye olan ilgisini ve tecrübesini daha detaylı anlamak için tasarlanmıştır.',
      fullName: 'Ad Soyad',
      email: 'E-Posta',
      phone: 'Telefon',
      company: 'Şirket/Kurum',
      companyPlaceholder: 'Varsa, bağlantılı olduğunuz şirket veya kurum',
      sector: 'Hangi Sektörde Faaliyet Gösteriyorsunuz?',
      sectorPlaceholder: 'Ana faaliyet alanınızı veya uzmanlık sektörünüzü belirtin',
      experience: 'Yatırım Deneyimi',
      experiencePlaceholder: 'Yatırım deneyim seviyenizi seçin',
      previousInvestments: 'Daha Önce Yatırım Yaptığınız Firma/Projeler',
      previousInvestmentsPlaceholder: 'Daha önceki yatırım deneyimlerinizi belirtin',
      whyThisProject: 'Neden Bu Proje?',
      whyThisProjectPlaceholder: 'Bu projeye özel ilgi gösterme nedenlerinizi belirtin',
      privacyConsent: 'Gizlilik sözleşmesini okudum, kabul ediyorum.',
      kvkkDisclosureTitle: 'KVKK Aydınlatma Metni ve Açık Rıza Beyanı',
      kvkkDisclosureDescription: 'Bu form aracılığıyla paylaştığınız kişisel verileriniz (ad, soyad, e-posta, telefon vb.), "Driveup" tarafından, yatırımcı başvurunuzun değerlendirilmesi, sizinle iletişime geçilmesi ve ilgili yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir. Kişisel verileriniz, Kanun’un 5. maddesi ve diğer ilgili mevzuat hükümleri uyarınca hukuki sebeplere dayanılarak otomatik veya otomatik olmayan yollarla işlenmektedir. Kişisel verileriniz, bu amaçlar doğrultusunda iş ortakları ve yetkili kamu kurum ve kuruluşları ile paylaşılabilecektir. KVKK’nın 11. maddesi kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, bu verilere erişim, düzeltme, silme veya anonim hale getirme gibi haklara sahipsiniz. Bu haklarınızı kullanmak için info@driveuptr.com adresinden bizimle iletişime geçebilirsiniz.',
      kvkkApprove: 'Yukarıdaki Aydınlatma Metnini okudum ve kişisel verilerimin işlenmesine açık rıza gösteriyorum',
      submit: 'Bilgi Talebi Gönder',
      cancel: 'İptal',
      required: 'Bu alan zorunludur',
      emailInvalid: 'Geçerli bir e-posta adresi girin',
      phoneInvalid: 'Geçerli bir telefon numarası girin'
    },
    en: {
      title: 'Investor Form',
      description: 'This form is designed to better understand potential investors\' interest and experience in the project.',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company/Institution',
      companyPlaceholder: 'If any, the company or institution you are affiliated with',
      sector: 'What Sector Do You Operate In?',
      sectorPlaceholder: 'Specify your main field of activity or expertise sector',
      experience: 'Investment Experience',
      experiencePlaceholder: 'Select your investment experience level',
      previousInvestments: 'Previously Invested Companies/Projects',
      previousInvestmentsPlaceholder: 'Specify your previous investment experiences',
      whyThisProject: 'Why This Project?',
      whyThisProjectPlaceholder: 'Specify your reasons for showing special interest in this project',
      privacyConsent: 'I have read and agree to the privacy agreement.',
      kvkkDisclosureTitle: 'Privacy Disclosure and Explicit Consent',
      kvkkDisclosureDescription: 'The personal data you share through this form (name, surname, email, phone, etc.) is processed by DriveUp for the purposes of evaluating your investor inquiry, contacting you, and fulfilling legal obligations. Your personal data may be processed automatically or non-automatically based on legal reasons under applicable law and may be shared with business partners and competent public authorities for these purposes. Under applicable data protection laws, you have rights such as access, correction, deletion, or anonymization of your personal data. You can contact us at info@driveuptr.com to exercise these rights.',
      kvkkApprove: 'I have read the disclosure above and give my explicit consent to the processing of my personal data.',
      submit: 'Send Information Request',
      cancel: 'Cancel',
      required: 'This field is required',
      emailInvalid: 'Please enter a valid email address',
      phoneInvalid: 'Please enter a valid phone number'
    }
  };

  const t = formText[language];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = t.required;
    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.required;
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = t.phoneInvalid;
    }
    if (!formData.sector.trim()) newErrors.sector = t.required;
    if (!formData.experience) newErrors.experience = t.required;
    if (!formData.kvkkConsent) newErrors.kvkkConsent = t.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Investor Application:', formData);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        experience: '',
        previousInvestments: '',
        whyThisProject: '',
        kvkkConsent: false
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const showPreviousInvestments = formData.experience && formData.experience !== 'beginner';
  const showKvkkBlock = true;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">{t.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t.fullName} *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={errors.fullName ? 'border-destructive' : ''}
              />
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.email} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t.phone} *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">{t.company}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder={t.companyPlaceholder}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sector">{t.sector} *</Label>
            <Input
              id="sector"
              value={formData.sector}
              onChange={(e) => handleInputChange('sector', e.target.value)}
              placeholder={t.sectorPlaceholder}
              className={errors.sector ? 'border-destructive' : ''}
            />
            {errors.sector && <p className="text-sm text-destructive">{errors.sector}</p>}
          </div>

          <div className="space-y-2">
            <Label>{t.experience} *</Label>
            <RadioGroup 
              value={formData.experience} 
              onValueChange={(value: string) => handleInputChange('experience', value)}
              className="grid grid-cols-2 gap-4"
            >
              {experienceLevels[language].map((level) => (
                <div key={level.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={level.value} id={level.value} />
                  <Label htmlFor={level.value} className="text-sm">{level.label}</Label>
                </div>
              ))}
            </RadioGroup>
            {errors.experience && <p className="text-sm text-destructive">{errors.experience}</p>}
          </div>

          {showPreviousInvestments && (
            <div className="space-y-2">
              <Label htmlFor="previousInvestments">{t.previousInvestments}</Label>
              <Textarea
                id="previousInvestments"
                value={formData.previousInvestments}
                onChange={(e) => handleInputChange('previousInvestments', e.target.value)}
                placeholder={t.previousInvestmentsPlaceholder}
                rows={3}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="whyThisProject">{t.whyThisProject}</Label>
            <Textarea
              id="whyThisProject"
              value={formData.whyThisProject}
              onChange={(e) => handleInputChange('whyThisProject', e.target.value)}
              placeholder={t.whyThisProjectPlaceholder}
              rows={4}
            />
          </div>

          {showKvkkBlock && (
            <div className="p-3 sm:p-4 rounded-lg border border-border bg-background-secondary/50 space-y-2">
              <h4 className="text-sm sm:text-base font-semibold">{t.kvkkDisclosureTitle}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t.kvkkDisclosureDescription}
              </p>
              <div className="flex items-start space-x-2 pt-1">
                <Checkbox
                  id="kvkkConsent"
                  checked={formData.kvkkConsent}
                  onCheckedChange={(checked: boolean) => handleInputChange('kvkkConsent', checked)}
                  className={errors.kvkkConsent ? 'border-destructive' : ''}
                />
                <Label htmlFor="kvkkConsent" className="text-xs sm:text-sm leading-5">
                  {t.kvkkApprove} *
                </Label>
              </div>
              {errors.kvkkConsent && <p className="text-sm text-destructive">{errors.kvkkConsent}</p>}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t.cancel}
            </Button>
            <Button type="submit" className="flex-1 btn-primary" disabled={!formData.kvkkConsent}>
              {t.submit}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
});