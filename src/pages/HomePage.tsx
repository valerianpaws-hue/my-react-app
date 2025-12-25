import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const heroImages = [
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/d7483a0f-c51b-4539-a7ca-bc5b31860498.jpg',
      alt: 'Bardo Museum exterior building',
      caption: 'Historic Ottoman Villa Housing the Museum'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/58ae8d57-7d9c-41f8-880f-78287e7d87e6.jpg',
      alt: 'Museum gallery interior',
      caption: 'Exhibition Galleries'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/f6bada96-5e17-4b0b-9be1-e36cd4ee092e.jpg',
      alt: 'Ancient artifacts display',
      caption: 'Prehistoric Collections'
    }
  ];

  const quickLinks = [
    {
      title: t('nav.prehistoric'),
      description: t('prehistoric.intro'),
      path: '/prehistoric',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/02901782-655f-4d02-a8ec-841fe94e6433.jpg'
    },
    {
      title: t('nav.ethnographic'),
      description: t('ethnographic.intro'),
      path: '/ethnographic',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/5af57ce6-a90f-4546-a7e3-7b647d6066ff.jpg'
    },
    {
      title: t('nav.exhibitions'),
      description: 'Discover our current and upcoming special exhibitions',
      path: '/exhibitions',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/528f52bc-671b-4d7f-acd6-0231da02102e.jpg'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 py-12 xl:py-20">
          <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl xl:text-6xl font-bold text-primary leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg xl:text-xl text-muted-foreground">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/about">
                    {t('nav.about')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t('nav.contact')}</Link>
                </Button>
              </div>
            </div>

            <div className="w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 xl:py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl xl:text-4xl font-bold text-primary">
              {t('home.mission.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('home.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links to Collections */}
      <section className="py-12 xl:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl xl:text-4xl font-bold text-primary text-center mb-12">
            {t('home.quickLinks.title')}
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={link.path}>
                      {t('common.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-12 xl:py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl xl:text-4xl font-bold text-primary text-center mb-12">
            {t('home.hours.title')}
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">{t('contact.info.hours')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('home.hours.schedule')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">{t('contact.info.address')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('home.hours.address')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">{t('contact.info.phone')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  +213 21 74 11 49
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">{t('contact.info.email')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  contact@musee-bardo.dz
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Museum Guide */}
      <MuseumGuide />
    </Layout>
  );
};

export default HomePage;
