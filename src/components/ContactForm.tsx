
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

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
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Merci de nous avoir contacté. Nous vous répondrons dès que possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
