import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-primary">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              Preserving Algeria's Cultural Heritage Since 1930
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/d7483a0f-c51b-4539-a7ca-bc5b31860498.jpg"
              alt="Bardo Museum Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* History Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.history.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.history.text')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The museum was established in 1930 during the French colonial period and was originally known as the Musée Ethnographique et Préhistorique du Bardo. It occupies a magnificent 18th-century Ottoman villa that once belonged to wealthy Algerian families. The building itself is a testament to the architectural heritage of Algiers, featuring traditional Moorish design elements including intricate tilework, carved wooden ceilings, and elegant courtyards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After Algeria gained independence in 1962, the museum was nationalized and renamed the Bardo National Museum. It has since become one of the most important cultural institutions in North Africa, dedicated to preserving and showcasing Algeria's rich prehistoric and ethnographic heritage.
              </p>
            </CardContent>
          </Card>

          <Separator />

          {/* Mission Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.mission.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The museum serves multiple purposes: as a research center for archaeologists and anthropologists, as an educational resource for students and scholars, and as a public institution that makes Algeria's cultural heritage accessible to all. Through its exhibitions, publications, and educational programs, the Bardo Museum plays a crucial role in fostering appreciation for Algeria's diverse cultural traditions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Preservation</h3>
                  <p className="text-sm text-muted-foreground">
                    Conserving artifacts using modern techniques and climate-controlled storage
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting archaeological and ethnographic studies of Algerian heritage
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing learning opportunities for students, researchers, and the public
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Collections Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.collections.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.collections.text')}
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Prehistoric Collections</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The prehistoric section spans from the Paleolithic era (over 2 million years ago) through the Neolithic period and Bronze Age. Highlights include hand axes from the Lower Paleolithic, rock art reproductions from the Sahara, Neolithic pottery with geometric decorations, and bronze weapons and jewelry from the protohistoric period.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Ethnographic Collections</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ethnographic galleries showcase the rich diversity of Algerian traditional culture. The collection includes elaborate wedding costumes from different regions, traditional jewelry in silver and coral, Berber carpets and textiles, agricultural tools, pottery and ceramics, musical instruments, and religious artifacts. These objects provide insight into the daily life, ceremonies, and artistic traditions of Algeria's various ethnic groups.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Special Collections</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The museum also houses special collections including historical photographs documenting Algerian life in the 19th and 20th centuries, manuscripts and documents related to Algerian history, and contemporary art pieces that reinterpret traditional themes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">The Building</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Bardo Museum building is itself a work of art. This 18th-century Ottoman villa exemplifies the traditional architecture of wealthy Algiers households. The structure features a central courtyard surrounded by galleries, ornate tile work (zellige), carved plaster decorations (gypsum), painted wooden ceilings, and marble columns. The building has been carefully maintained and restored to preserve its historical character while accommodating modern museum facilities.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/719d718e-6b78-4a16-a984-2672855e6066.jpg"
                  alt="Museum courtyard"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  loading="lazy"
                />
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/58ae8d57-7d9c-41f8-880f-78287e7d87e6.jpg"
                  alt="Architectural details"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MuseumGuide />
    </Layout>
  );
};

export default AboutPage;
