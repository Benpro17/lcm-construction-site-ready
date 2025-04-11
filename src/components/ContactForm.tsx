
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import emailjs from 'emailjs-com';

// Configuration des identifiants EmailJS
const EMAILJS_SERVICE_ID = "service_kr80xis";  // Service ID
const EMAILJS_TEMPLATE_ID = "template_rd84m4n"; // Template ID
const EMAILJS_PUBLIC_KEY = "xP0FkhPgT3dk4tYLD"; // Votre clé publique EmailJS

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Réinitialiser le message d'erreur lorsque l'utilisateur modifie le formulaire
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      console.log("Tentative d'envoi d'email avec EmailJS...");
      
      // Préparation des données pour EmailJS
      const templateParams = {
        to_email: 'ben@lecourtagemaison.fr',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      };
      
      console.log("Paramètres du template:", templateParams);
      console.log("Service ID:", EMAILJS_SERVICE_ID);
      console.log("Template ID:", EMAILJS_TEMPLATE_ID);
      console.log("Public Key (masquée pour sécurité):", "********");
      
      // Envoi de l'email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
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
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      // Message d'erreur plus détaillé
      let errorMsg = "Une erreur est survenue lors de l'envoi du message.";
      
      if (error.text && error.text.includes("Gmail_API: Request had insufficient authentication scopes")) {
        errorMsg = "Erreur d'autorisation Gmail: Votre compte EmailJS n'a pas les autorisations suffisantes pour envoyer des emails via Gmail.";
        setErrorMessage("Votre compte EmailJS nécessite une configuration supplémentaire. Veuillez vérifier les autorisations Gmail dans votre compte EmailJS.");
      } else if (error.status === 401 || error.status === 403) {
        errorMsg = "Erreur d'authentification: Vérifiez vos identifiants EmailJS.";
      } else if (error.status === 400) {
        errorMsg = "Erreur de requête: Vérifiez les données du formulaire.";
      } else if (error.status === 429) {
        errorMsg = "Trop de requêtes: Veuillez réessayer plus tard.";
      }
      
      toast({
        title: "Erreur",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Problème de configuration</AlertTitle>
          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}
      
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
