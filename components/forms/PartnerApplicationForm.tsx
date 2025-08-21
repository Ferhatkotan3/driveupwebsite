import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Language } from "../../types";
import { submitFormDirectly } from "../../utils/smtpClient";

interface PartnerApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PartnerApplicationForm = React.memo(
  ({
    isOpen,
    onClose,
    language,
  }: PartnerApplicationFormProps) => {
    const [formData, setFormData] = useState({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      companyType: "",
      location: "",
      additionalInfo: "",
      kvkkConsent: false,
    });

    const [errors, setErrors] = useState<{
      [key: string]: string;
    }>({});
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
      type: 'success' | 'error' | null;
      message: string;
    }>({ type: null, message: '' });

    const companyTypes = {
      tr: [
        "Yedek Parça Tedarikçileri",
        "Kısa Dönem Kiralama Operatörleri",
        "Filo Aracılık Hizmetleri (Brokerleri)",
        "Özmal Filo Yönetim Firmaları",
        "Hasar, Onarım Çözümleri",
        "Servis Ağı Zincirleri",
      ],
      en: [
        "Automotive Parts and Equipment Suppliers",
        "Mobility and Short-term Rental Operators",
        "Fleet Management and Brokerage Services (Fleet Brokers)",
        "Corporate Fleet Management Companies",
        "Damage, Repair and Maintenance Solutions",
        "Service Network Operators and Chains",
      ],
    };

    const formText = {
      tr: {
        title: "İş Ortağı Başvurusu",
        description:
          "Bu form, potansiyel iş ortaklarının başvuru yapması için tasarlanmıştır.",
        fullName: "Ad Soyad",
        companyName: "Şirket Adı",
        email: "E-Posta",
        phone: "Telefon",
        companyType: "Firma Tipi",
        companyTypePlaceholder: "Firma tipinizi seçin",
        location: "Konum",
        locationPlaceholder: "Şehir ve ilçe bilgisi",
        additionalInfo: "Ek Bilgiler",
        additionalInfoPlaceholder:
          "Başvuruyla ilgili belirtilmek istenen ek notlar, açıklamalar veya detaylar",
        kvkkDisclosureTitle: "KVKK Aydınlatma Metni ve Açık Rıza Beyanı",
        kvkkDisclosureDescription:
          "Bu form aracılığıyla paylaştığınız kişisel verileriniz (ad, soyad, şirket unvanı, iletişim bilgileri vb.), \"Driveup\" tarafından, iş ortağı başvuru değerlendirme süreçlerinin yürütülmesi, sizinle iletişim kurulması ve karşılıklı yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir. Kişisel verileriniz, Kanun’un 5. maddesi ve diğer ilgili mevzuat hükümleri uyarınca hukuki sebeplere dayanılarak otomatik veya otomatik olmayan yollarla işlenmektedir. Kişisel verileriniz, bu amaçlar doğrultusunda yetkili kamu kurum ve kuruluşları ile paylaşılabilecektir. KVKK’nın 11. maddesi kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, bu verilere erişim, düzeltme, silme veya anonim hale getirme gibi haklara sahipsiniz. Bu haklarınızı kullanmak için info@driveuptr.com adresinden bizimle iletişime geçebilirsiniz.",
        kvkkApprove:
          "Yukarıdaki Aydınlatma Metnini okudum ve kişisel verilerimin işlenmesine açık rıza gösteriyorum.",

        submit: "Başvuruyu Gönder",
        cancel: "İptal",
        required: "Bu alan zorunludur",
        emailInvalid: "Geçerli bir e-posta adresi girin",
        phoneInvalid: "Geçerli bir telefon numarası girin",
      },
      en: {
        title: "Partnership Application",
        description:
          "This form is designed for potential business partners to apply.",
        fullName: "Full Name",
        companyName: "Company Name",
        email: "Email",
        phone: "Phone",
        companyType: "Company Type",
        companyTypePlaceholder: "Select your company type",
        location: "Location",
        locationPlaceholder: "City and district information",
        additionalInfo: "Additional Information",
        additionalInfoPlaceholder:
          "Additional notes, explanations or details regarding the application",
        kvkkDisclosureTitle: "Privacy Disclosure and Explicit Consent",
        kvkkDisclosureDescription:
          "The personal data you share through this form (name, surname, company name, contact details, etc.) is processed by DriveUp for the purposes of evaluating your partnership application, contacting you, and fulfilling mutual obligations. Your personal data may be processed automatically or non-automatically based on legal reasons under applicable law and may be shared with competent public authorities for these purposes. Under applicable data protection laws, you have rights such as access, correction, deletion, or anonymization of your personal data. You can contact us at info@driveuptr.com to exercise these rights.",
        kvkkApprove:
          "I have read the disclosure above and give my explicit consent to the processing of my personal data.",

        submit: "Submit Application",
        cancel: "Cancel",
        required: "This field is required",
        emailInvalid: "Please enter a valid email address",
        phoneInvalid: "Please enter a valid phone number",
      },
    };

    const t = formText[language];

    const validateForm = () => {
      const newErrors: { [key: string]: string } = {};

      if (!formData.fullName.trim())
        newErrors.fullName = t.required;
      if (!formData.companyName.trim())
        newErrors.companyName = t.required;
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
      if (!formData.companyType)
        newErrors.companyType = t.required;
      if (!formData.location.trim())
        newErrors.location = t.required;
      if (!formData.kvkkConsent) newErrors.kvkkConsent = t.required;

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });
        
        try {
          const result = await submitFormDirectly(formData, 'partner', language);
          
          if (result.success) {
            setSubmitStatus({ type: 'success', message: result.message });
            // Reset form after successful submission
            setTimeout(() => {
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                companyType: "",
                location: "",
                additionalInfo: "",
                kvkkConsent: false,
              });
              setErrors({});
              setSubmitStatus({ type: null, message: '' });
              onClose();
            }, 2000);
          } else {
            setSubmitStatus({ type: 'error', message: result.message });
          }
        } catch (error) {
          setSubmitStatus({ 
            type: 'error', 
            message: 'Bir hata oluştu. Lütfen tekrar deneyin.' 
          });
        } finally {
          setIsSubmitting(false);
        }
      }
    };



    const handleInputChange = (
      field: string,
      value: string | boolean,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-visible mx-auto z-[60]">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-xl sm:text-2xl text-foreground">
              {t.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm sm:text-base">
              {t.description}
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium"
                >
                  {t.fullName} *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange(
                      "fullName",
                      e.target.value,
                    )
                  }
                  className={
                    errors.fullName ? "border-destructive" : ""
                  }
                />
                {errors.fullName && (
                  <p className="text-xs sm:text-sm text-destructive">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="companyName"
                  className="text-sm font-medium"
                >
                  {t.companyName} *
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange(
                      "companyName",
                      e.target.value,
                    )
                  }
                  className={
                    errors.companyName
                      ? "border-destructive"
                      : ""
                  }
                />
                {errors.companyName && (
                  <p className="text-xs sm:text-sm text-destructive">
                    {errors.companyName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  {t.email} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange("email", e.target.value)
                  }
                  className={
                    errors.email ? "border-destructive" : ""
                  }
                />
                {errors.email && (
                  <p className="text-xs sm:text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium"
                >
                  {t.phone} *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    handleInputChange("phone", e.target.value)
                  }
                  className={
                    errors.phone ? "border-destructive" : ""
                  }
                />
                {errors.phone && (
                  <p className="text-xs sm:text-sm text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="companyType"
                className="text-sm font-medium"
              >
                {t.companyType} *
              </Label>
              <div className="relative">
                <Select
                  value={formData.companyType}
                  onValueChange={(value: string) =>
                    handleInputChange("companyType", value)
                  }
                >
                  <SelectTrigger
                    className={`min-h-[44px] ${errors.companyType ? "border-destructive" : ""}`}
                  >
                    <SelectValue
                      placeholder={t.companyTypePlaceholder}
                    />
                  </SelectTrigger>
                  <SelectContent className="z-[9999]">
                    {companyTypes[language].map(
                      (type, index) => (
                        <SelectItem
                          key={index}
                          value={type}
                          className="text-sm min-h-[44px] py-3"
                        >
                          {type}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
              {errors.companyType && (
                <p className="text-xs sm:text-sm text-destructive">
                  {errors.companyType}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="location"
                className="text-sm font-medium"
              >
                {t.location} *
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  handleInputChange("location", e.target.value)
                }
                placeholder={t.locationPlaceholder}
                className={
                  errors.location ? "border-destructive" : ""
                }
              />
              {errors.location && (
                <p className="text-xs sm:text-sm text-destructive">
                  {errors.location}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="additionalInfo"
                className="text-sm font-medium"
              >
                {t.additionalInfo}
              </Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange(
                    "additionalInfo",
                    e.target.value,
                  )
                }
                placeholder={t.additionalInfoPlaceholder}
                rows={3}
                className="resize-none"
              />
            </div>

            {/* KVKK Disclosure and Consent */}
            <div className="p-3 sm:p-4 rounded-lg border border-border bg-background-secondary/50 space-y-2">
              <h4 className="text-sm sm:text-base font-semibold">{t.kvkkDisclosureTitle}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t.kvkkDisclosureDescription}
              </p>
              <div className="flex items-start space-x-2 pt-1">
                <Checkbox
                  id="kvkkConsent"
                  checked={formData.kvkkConsent}
                  onCheckedChange={(checked: boolean) => handleInputChange("kvkkConsent", checked as boolean)}
                  className={errors.kvkkConsent ? "border-destructive" : ""}
                />
                <Label htmlFor="kvkkConsent" className="text-xs sm:text-sm leading-5">
                  {t.kvkkApprove} *
                </Label>
              </div>
              {errors.kvkkConsent && (
                <p className="text-sm text-destructive">{errors.kvkkConsent}</p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`p-3 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <p className="text-sm font-medium">
                  {submitStatus.message}
                </p>
              </div>
            )}

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:flex-1 order-2 sm:order-1"
                disabled={isSubmitting}
              >
                {t.cancel}
              </Button>
              
              <Button
                type="submit"
                className="w-full sm:flex-1 btn-primary order-1 sm:order-2"
                disabled={!formData.kvkkConsent || isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : t.submit}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  },
);