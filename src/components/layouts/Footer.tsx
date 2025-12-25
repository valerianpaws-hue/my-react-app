import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              {t('footer.about')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('home.mission.text')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              {t('home.quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/prehistoric"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.prehistoric')}
                </Link>
              </li>
              <li>
                <Link
                  to="/ethnographic"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.ethnographic')}
                </Link>
              </li>
              <li>
                <Link
                  to="/exhibitions"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.exhibitions')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Information */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              {t('footer.visit')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('home.hours.address')}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('home.hours.schedule')}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+213 21 74 11 49</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>contact@musee-bardo.dz</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              {t('footer.follow')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
