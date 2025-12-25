import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

const EthnographicPage: React.FC = () => {
  const { t } = useLanguage();

  const collections = [
    {
      category: 'clothing',
      title: t('ethnographic.clothing.title'),
      description: t('ethnographic.clothing.desc'),
      items: [
        {
          name: 'Kabyle Wedding Dress',
          nameAr: 'فستان زفاف قبائلي',
          nameFr: 'Robe de Mariée Kabyle',
          desc: 'Elaborate silk dress with intricate embroidery and silver jewelry',
          descAr: 'فستان حريري متقن مع تطريز معقد ومجوهرات فضية',
          descFr: 'Robe en soie élaborée avec broderie complexe et bijoux en argent',
          region: 'Kabylia',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/866bcead-8865-4aa8-8466-91d563ddde13.jpg'
        },
        {
          name: 'Saharan Tuareg Clothing',
          nameAr: 'ملابس الطوارق الصحراوية',
          nameFr: 'Vêtements Touareg Sahariens',
          desc: 'Traditional indigo-dyed robes and veils adapted to desert life',
          descAr: 'أردية وحجاب تقليدية مصبوغة بالنيلي متكيفة مع الحياة الصحراوية',
          descFr: 'Robes et voiles traditionnels teints à l\'indigo adaptés à la vie désertique',
          region: 'Sahara',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/f8fd11b7-09b8-4533-98ed-4a7be3bb801a.jpg'
        },
        {
          name: 'Algiers Traditional Costume',
          nameAr: 'الزي التقليدي للجزائر العاصمة',
          nameFr: 'Costume Traditionnel d\'Alger',
          desc: 'Urban Ottoman-influenced clothing with gold embroidery',
          descAr: 'ملابس حضرية متأثرة بالعثمانيين مع تطريز ذهبي',
          descFr: 'Vêtements urbains d\'influence ottomane avec broderie dorée',
          region: 'Algiers',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/866bcead-8865-4aa8-8466-91d563ddde13.jpg'
        }
      ]
    },
    {
      category: 'tools',
      title: t('ethnographic.tools.title'),
      description: t('ethnographic.tools.desc'),
      items: [
        {
          name: 'Weaving Loom',
          nameAr: 'نول النسيج',
          nameFr: 'Métier à Tisser',
          desc: 'Traditional wooden loom used for creating carpets and textiles',
          descAr: 'نول خشبي تقليدي يستخدم لصنع السجاد والمنسوجات',
          descFr: 'Métier à tisser en bois traditionnel utilisé pour créer des tapis et des textiles',
          region: 'Various',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/aa030a74-5456-488b-981a-618eba403165.jpg'
        },
        {
          name: 'Agricultural Tools',
          nameAr: 'الأدوات الزراعية',
          nameFr: 'Outils Agricoles',
          desc: 'Plows, sickles, and harvesting tools used in traditional farming',
          descAr: 'محاريث ومناجل وأدوات حصاد تستخدم في الزراعة التقليدية',
          descFr: 'Charrues, faucilles et outils de récolte utilisés dans l\'agriculture traditionnelle',
          region: 'Rural Algeria',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/017bee28-abcd-4f01-84fc-4aff31c6f9f0.jpg'
        },
        {
          name: 'Pottery Tools',
          nameAr: 'أدوات الفخار',
          nameFr: 'Outils de Poterie',
          desc: 'Traditional pottery wheels and shaping tools',
          descAr: 'عجلات الفخار التقليدية وأدوات التشكيل',
          descFr: 'Tours de potier traditionnels et outils de façonnage',
          region: 'Kabylia',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/d34646d9-78aa-4c34-ad63-32bad4b2c0d0.jpg'
        }
      ]
    },
    {
      category: 'ritual',
      title: t('ethnographic.ritual.title'),
      description: t('ethnographic.ritual.desc'),
      items: [
        {
          name: 'Wedding Jewelry',
          nameAr: 'مجوهرات الزفاف',
          nameFr: 'Bijoux de Mariage',
          desc: 'Silver and coral jewelry worn during wedding ceremonies',
          descAr: 'مجوهرات فضية ومرجانية ترتدى خلال حفلات الزفاف',
          descFr: 'Bijoux en argent et corail portés lors des cérémonies de mariage',
          region: 'Various',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/05e74397-cea2-4bdf-87c8-ce5f4eaa4662.jpg'
        },
        {
          name: 'Musical Instruments',
          nameAr: 'الآلات الموسيقية',
          nameFr: 'Instruments de Musique',
          desc: 'Traditional drums, flutes, and string instruments',
          descAr: 'طبول وناي وآلات وترية تقليدية',
          descFr: 'Tambours, flûtes et instruments à cordes traditionnels',
          region: 'Various',
          image: 'https://miaoda-site-img.s3cdn.medo.dev/images/606204f2-861b-4084-a53f-c5691bf787bf.jpg'
        },
        {
          name: 'Religious Artifacts',
          nameAr: 'القطع الأثرية الدينية',
          nameFr: 'Artefacts Religieux',
          desc: 'Prayer beads, amulets, and ceremonial objects',
          descAr: 'مسابح وتمائم وأشياء احتفالية',
          descFr: 'Chapelets, amulettes et objets cérémoniels',
          region: 'Various',
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
              {t('ethnographic.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('ethnographic.intro')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/5af57ce6-a90f-4546-a7e3-7b647d6066ff.jpg"
              alt="Ethnographic collections"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cultural Diversity of Algeria</CardTitle>
              <CardDescription>
                Exploring the rich tapestry of Algerian traditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Algeria's ethnographic heritage reflects the diverse cultures and traditions that have developed across its varied geography. From the Mediterranean coast to the Sahara Desert, from the Atlas Mountains to the eastern plains, each region has developed distinctive cultural practices, crafts, and customs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Bardo Museum's ethnographic collection preserves these traditions, many of which are rapidly disappearing in modern Algeria. Through clothing, tools, jewelry, and ceremonial objects, visitors can explore the daily life, celebrations, and spiritual practices of Algeria's diverse communities including Arabs, Berbers (Amazigh), and Tuareg peoples.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These collections are not merely historical artifacts but living connections to cultural practices that continue to influence contemporary Algerian society. They demonstrate the creativity, skill, and cultural sophistication of traditional Algerian craftspeople and artists.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Collections by Category */}
          <Tabs defaultValue="clothing" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="ritual">Ritual Objects</TabsTrigger>
            </TabsList>

            {collections.map((collection) => (
              <TabsContent key={collection.category} value={collection.category} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{collection.title}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {collection.items.map((item, index) => (
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
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-xs">
                          Region: {item.region}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Regional Traditions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Regional Traditions</CardTitle>
              <CardDescription>
                Distinctive cultural practices across Algeria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Kabylia</h3>
                    <p className="text-sm text-muted-foreground">
                      The Kabyle people of the mountainous Kabylia region are known for their distinctive Berber culture, including elaborate jewelry, colorful textiles, and unique pottery traditions. Kabyle women are renowned for their weaving and embroidery skills, creating intricate geometric patterns.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Sahara</h3>
                    <p className="text-sm text-muted-foreground">
                      The Tuareg and other Saharan peoples have developed cultures adapted to desert life. Their distinctive indigo-dyed clothing, silver jewelry, and leather crafts reflect both practical needs and aesthetic traditions. Tuareg metalwork, particularly silver crosses and jewelry, is highly prized.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Algiers and Coastal Cities</h3>
                    <p className="text-sm text-muted-foreground">
                      Urban Algerian culture, particularly in Algiers, shows strong Ottoman and Andalusian influences. Traditional urban clothing features rich fabrics, gold embroidery, and sophisticated tailoring. The crafts include fine woodwork, metalwork, and textile arts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">M'zab Valley</h3>
                    <p className="text-sm text-muted-foreground">
                      The Mozabite people of the M'zab Valley have preserved distinctive architectural and craft traditions. Their textiles, particularly carpets and blankets, feature bold geometric patterns. Mozabite jewelry and traditional dress are also distinctive.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crafts and Techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Traditional Crafts</CardTitle>
              <CardDescription>
                Artisanal techniques passed down through generations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Algerian traditional crafts represent centuries of accumulated knowledge and skill. Carpet weaving, practiced throughout Algeria, varies by region with distinctive patterns and techniques. Kabyle carpets feature geometric designs, while Saharan carpets often incorporate symbolic motifs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Metalwork, particularly silver jewelry, is another important craft tradition. Kabyle silver jewelry, often incorporating coral and enamel, is worn during celebrations and ceremonies. Tuareg silver crosses, each with unique designs, serve as both jewelry and cultural symbols.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pottery traditions, especially in Kabylia, continue ancient techniques. Women potters create vessels without using a wheel, building them up with coils of clay and decorating them with geometric patterns. These techniques have remained largely unchanged for thousands of years.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MuseumGuide />
    </Layout>
  );
};

export default EthnographicPage;
