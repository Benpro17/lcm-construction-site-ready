
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

// Ces identifiants sont nécessaires pour EmailJS
// Vous devrez vous inscrire sur emailjs.com et créer un compte
const EMAILJS_SERVICE_ID = "service_id"; // À remplacer avec votre Service ID après création
const EMAILJS_TEMPLATE_ID = "template_id"; // À remplacer avec votre Template ID après création
const EMAILJS_USER_ID = "user_id"; // À remplacer avec votre User ID après création

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        to_email: 'ben@lecourtagemaison.fr',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      };
      
      // Envoi de l'email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Notification de succès
      toast({
        title: "Message envoyé !",
        description: "Merci de nous avoir contacté. Nous vous répondrons dès que possible.",
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input 
            placeholder="Votre nom" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="bg-white/90"
          />
        </div>
        <div>
          <Input 
            placeholder="Votre email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="bg-white/90"
          />
        </div>
        <div>
          <Input 
            placeholder="Votre téléphone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="bg-white/90"
          />
        </div>
        <div>
          <Textarea 
            placeholder="Votre message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="min-h-[120px] bg-white/90"
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <span className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Envoyer le message
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
