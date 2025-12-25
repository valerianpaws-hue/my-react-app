import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

const PrehistoricPage: React.FC = () => {
  const { t } = useLanguage();

  const artifacts = [
    {
      period: 'paleolithic',
      title: t('prehistoric.paleolithic.title'),
      description: t('prehistoric.paleolithic.desc'),
      items: [
        {
          name: 'Hand Axes',
          nameAr: 'الفؤوس اليدوية',
          nameFr: 'Haches à Main',
          desc: 'Stone tools from Lower Paleolithic period, over 1 million years old',
          descAr: 'أدوات حجرية من العصر الحجري القديم السفلي، عمرها أكثر من مليون سنة',
          descFr: 'Outils en pierre du Paléolithique inférieur, vieux de plus d\'un million d\'années',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7917167c-b630-4d27-b239-966376dcb7f9.jpg'
        },
        {
          name: 'Scrapers and Blades',
          nameAr: 'الكاشطات والشفرات',
          nameFr: 'Grattoirs et Lames',
          desc: 'Refined stone tools used for cutting and processing materials',
          descAr: 'أدوات حجرية مصقولة تستخدم للقطع ومعالجة المواد',
          descFr: 'Outils en pierre raffinés utilisés pour couper et traiter les matériaux',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/f6bada96-5e17-4b0b-9be1-e36cd4ee092e.jpg'
        }
      ]
    },
    {
      period: 'neolithic',
      title: t('prehistoric.neolithic.title'),
      description: t('prehistoric.neolithic.desc'),
      items: [
        {
          name: 'Decorated Pottery',
          nameAr: 'الفخار المزخرف',
          nameFr: 'Poterie Décorée',
          desc: 'Ceramic vessels with geometric patterns, evidence of settled communities',
          descAr: 'أواني خزفية بأنماط هندسية، دليل على المجتمعات المستقرة',
          descFr: 'Récipients en céramique avec des motifs géométriques, preuve de communautés sédentaires',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/02901782-655f-4d02-a8ec-841fe94e6433.jpg'
        },
        {
          name: 'Polished Stone Tools',
          nameAr: 'الأدوات الحجرية المصقولة',
          nameFr: 'Outils en Pierre Polie',
          desc: 'Advanced tools including axes, adzes, and grinding stones',
          descAr: 'أدوات متقدمة بما في ذلك الفؤوس والمعاول وحجارة الطحن',
          descFr: 'Outils avancés comprenant des haches, des herminettes et des meules',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/98fd2c1a-e567-477a-8190-98ea21992360.jpg'
        },
        {
          name: 'Neolithic Jewelry',
          nameAr: 'مجوهرات العصر الحجري الحديث',
          nameFr: 'Bijoux Néolithiques',
          desc: 'Beads and ornaments made from stone, shell, and bone',
          descAr: 'خرز وزخارف مصنوعة من الحجر والصدف والعظام',
          descFr: 'Perles et ornements en pierre, coquillage et os',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2bdbab32-4f87-4a02-872b-149e22a7d5de.jpg'
        }
      ]
    },
    {
      period: 'bronze',
      title: t('prehistoric.bronze.title'),
      description: t('prehistoric.bronze.desc'),
      items: [
        {
          name: 'Bronze Weapons',
          nameAr: 'الأسلحة البرونزية',
          nameFr: 'Armes en Bronze',
          desc: 'Daggers, spearheads, and arrowheads from the protohistoric period',
          descAr: 'خناجر ورؤوس رماح وسهام من الفترة ما قبل التاريخية',
          descFr: 'Poignards, pointes de lance et pointes de flèche de la période protohistorique',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce8b992c-dae3-4db2-90f2-d1321fc22d64.jpg'
        },
        {
          name: 'Bronze Jewelry',
          nameAr: 'المجوهرات البرونزية',
          nameFr: 'Bijoux en Bronze',
          desc: 'Bracelets, fibulae, and decorative pins showing advanced metalworking',
          descAr: 'أساور ودبابيس زخرفية تظهر صناعة معادن متقدمة',
          descFr: 'Bracelets, fibules et épingles décoratives montrant un travail du métal avancé',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/05e74397-cea2-4bdf-87c8-ce5f4eaa4662.jpg'
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-primary">
              {t('prehistoric.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('prehistoric.intro')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/f6bada96-5e17-4b0b-9be1-e36cd4ee092e.jpg"
              alt="Prehistoric collections"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Timeline Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Archaeological Timeline</CardTitle>
              <CardDescription>
                Journey through millions of years of human history in Algeria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Algeria's prehistoric heritage spans an extraordinary timeline, from the earliest stone tools of the Lower Paleolithic (over 2 million years ago) to the sophisticated bronze artifacts of the protohistoric period (around 3,000 years ago). This vast chronological range makes Algeria one of the most important regions for understanding human evolution and cultural development in Africa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Sahara Desert, now arid, was once a fertile region with lakes, rivers, and abundant wildlife. Rock art found throughout the Sahara depicts elephants, giraffes, and hippopotamuses, evidence of a dramatically different climate. As the Sahara dried out around 5,000 years ago, populations moved to more hospitable areas, leaving behind a rich archaeological record.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Collections by Period */}
          <Tabs defaultValue="paleolithic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="paleolithic">Paleolithic</TabsTrigger>
              <TabsTrigger value="neolithic">Neolithic</TabsTrigger>
              <TabsTrigger value="bronze">Bronze Age</TabsTrigger>
            </TabsList>

            {artifacts.map((period) => (
              <TabsContent key={period.period} value={period.period} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{period.title}</CardTitle>
                    <CardDescription>{period.description}</CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {period.items.map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Rock Art Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Saharan Rock Art</CardTitle>
              <CardDescription>
                Ancient artistic expressions from the Sahara Desert
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    The Sahara Desert contains some of the world's most spectacular prehistoric rock art. These paintings and engravings, found in sites like Tassili n'Ajjer and Tadrart Acacus, date from around 12,000 years ago to the historic period. They depict hunting scenes, pastoral life, religious ceremonies, and daily activities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    The Bardo Museum displays reproductions and photographs of this rock art, allowing visitors to appreciate these masterpieces without traveling to remote desert locations. The art provides invaluable information about prehistoric life, showing the animals that once inhabited the region and the activities of ancient peoples.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/568d21c1-3ec1-4395-8f56-f2b5960093ea.jpg"
                    alt="Saharan rock art"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                    loading="lazy"
                  />
                  <img
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/568d21c1-3ec1-4395-8f56-f2b5960093ea.jpg"
                    alt="Rock art details"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                    loading="lazy"
                  />
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

export default PrehistoricPage;
