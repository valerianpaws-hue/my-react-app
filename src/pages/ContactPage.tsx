import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactApi } from '@/db/api';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await contactApi.submitContactForm(formData);
      
      toast({
        title: 'Success',
        description: t('contact.form.success'),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: t('contact.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-primary">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Get in touch with us.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('common.loading') : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contact.info.title')}</CardTitle>
                  <CardDescription>
                    Visit us or reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        {t('contact.info.address')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('home.hours.address')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        {t('contact.info.hours')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('home.hours.schedule')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Closed on Fridays and public holidays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        {t('contact.info.phone')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        +213 21 74 11 49
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        {t('contact.info.email')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        contact@musee-bardo.dz
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9] bg-secondary/30 rounded-lg overflow-hidden">
                    <img
                      src="https://miaoda-site-img.s3cdn.medo.dev/images/9b103240-411f-4572-a418-ff0d8be08894.jpg"
                      alt="Museum location map"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Plan Your Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-3">Getting Here</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Bardo Museum is located in the heart of Algiers, easily accessible by public transportation. The nearest metro station is Krim Belkacem, approximately 10 minutes walk from the museum. Several bus lines also stop nearby. Parking is available on surrounding streets.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3">Admission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    General admission: 200 DZD<br />
                    Students and seniors: 100 DZD<br />
                    Children under 12: Free<br />
                    Free admission on the first Sunday of each month
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3">Facilities</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The museum offers wheelchair accessibility, a gift shop featuring books and reproductions, a small café, free WiFi, and coat check services. Photography is permitted in most areas without flash.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3">Group Visits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Groups of 10 or more should book in advance. Guided tours in Arabic, French, and English are available. Educational programs for schools can be arranged. Please contact us at least two weeks before your planned visit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MuseumGuide />
    </Layout>
  );
};

export default ContactPage;
