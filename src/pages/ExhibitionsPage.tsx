import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

interface Exhibition {
  id: number;
  title: string;
  titleFr: string;
  titleAr: string;
  description: string;
  descriptionFr: string;
  descriptionAr: string;
  curator: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  status: 'current' | 'upcoming' | 'past';
}

const ExhibitionsPage: React.FC = () => {
  const { t, language } = useLanguage();

  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: 'Treasures of the Sahara: Rock Art and Ancient Cultures',
      titleFr: 'Trésors du Sahara : Art Rupestre et Cultures Anciennes',
      titleAr: 'كنوز الصحراء: الفن الصخري والثقافات القديمة',
      description: 'Explore the magnificent rock art of the Sahara Desert, featuring reproductions and photographs from Tassili n\'Ajjer and other important sites. This exhibition showcases the artistic achievements of prehistoric Saharan peoples and the dramatic environmental changes that transformed the region.',
      descriptionFr: 'Explorez l\'art rupestre magnifique du désert du Sahara, avec des reproductions et des photographies de Tassili n\'Ajjer et d\'autres sites importants. Cette exposition présente les réalisations artistiques des peuples sahariens préhistoriques et les changements environnementaux dramatiques qui ont transformé la région.',
      descriptionAr: 'استكشف الفن الصخري الرائع لصحراء الصحراء، مع نسخ وصور من تاسيلي ناجر ومواقع مهمة أخرى. يعرض هذا المعرض الإنجازات الفنية للشعوب الصحراوية في عصور ما قبل التاريخ والتغيرات البيئية الدراماتيكية التي حولت المنطقة.',
      curator: 'Dr. Yasmine Benmohamed',
      startDate: '2024-09-01',
      endDate: '2025-03-31',
      location: 'Main Gallery',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/568d21c1-3ec1-4395-8f56-f2b5960093ea.jpg',
      status: 'current'
    },
    {
      id: 2,
      title: 'Berber Silver: Jewelry and Identity',
      titleFr: 'Argent Berbère : Bijoux et Identité',
      titleAr: 'الفضة البربرية: المجوهرات والهوية',
      description: 'A stunning collection of traditional Berber silver jewelry from across Algeria. This exhibition explores how jewelry serves as both personal adornment and cultural expression, with pieces from Kabylia, the Aurès, and the Sahara. Each region\'s distinctive styles and techniques are highlighted.',
      descriptionFr: 'Une collection époustouflante de bijoux en argent berbère traditionnels de toute l\'Algérie. Cette exposition explore comment les bijoux servent à la fois de parure personnelle et d\'expression culturelle, avec des pièces de Kabylie, des Aurès et du Sahara. Les styles et techniques distinctifs de chaque région sont mis en évidence.',
      descriptionAr: 'مجموعة مذهلة من المجوهرات الفضية البربرية التقليدية من جميع أنحاء الجزائر. يستكشف هذا المعرض كيف تعمل المجوهرات كزينة شخصية وتعبير ثقافي، مع قطع من القبائل والأوراس والصحراء. يتم تسليط الضوء على الأساليب والتقنيات المميزة لكل منطقة.',
      curator: 'Fatima Cherif',
      startDate: '2025-04-15',
      endDate: '2025-09-30',
      location: 'East Wing',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/05e74397-cea2-4bdf-87c8-ce5f4eaa4662.jpg',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Women\'s Work: Traditional Textiles of Algeria',
      titleFr: 'Travail des Femmes : Textiles Traditionnels d\'Algérie',
      titleAr: 'عمل النساء: المنسوجات التقليدية للجزائر',
      description: 'Celebrating the artistry of Algerian women weavers and embroiderers. This exhibition features carpets, clothing, and decorative textiles from various regions, highlighting the technical skill and artistic vision of female artisans. Traditional techniques and contemporary adaptations are both represented.',
      descriptionFr: 'Célébrant l\'art des tisserandes et brodeuses algériennes. Cette exposition présente des tapis, des vêtements et des textiles décoratifs de diverses régions, mettant en évidence la compétence technique et la vision artistique des artisanes. Les techniques traditionnelles et les adaptations contemporaines sont toutes deux représentées.',
      descriptionAr: 'احتفالاً بفن النساجات والمطرزات الجزائريات. يعرض هذا المعرض السجاد والملابس والمنسوجات الزخرفية من مناطق مختلفة، مع تسليط الضوء على المهارة التقنية والرؤية الفنية للحرفيات. يتم تمثيل التقنيات التقليدية والتكيفات المعاصرة على حد سواء.',
      curator: 'Leila Mansouri',
      startDate: '2025-10-01',
      endDate: '2026-02-28',
      location: 'West Wing',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/aa030a74-5456-488b-981a-618eba403165.jpg',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Neolithic Revolution in North Africa',
      titleFr: 'Révolution Néolithique en Afrique du Nord',
      titleAr: 'الثورة النيوليتية في شمال أفريقيا',
      description: 'This past exhibition explored the transition from hunter-gatherer societies to agricultural communities in prehistoric Algeria. Featuring pottery, tools, and evidence of early domestication, it illustrated one of humanity\'s most important cultural transformations.',
      descriptionFr: 'Cette exposition passée a exploré la transition des sociétés de chasseurs-cueilleurs aux communautés agricoles dans l\'Algérie préhistorique. Présentant de la poterie, des outils et des preuves de domestication précoce, elle a illustré l\'une des transformations culturelles les plus importantes de l\'humanité.',
      descriptionAr: 'استكشف هذا المعرض السابق الانتقال من مجتمعات الصيد والجمع إلى المجتمعات الزراعية في الجزائر في عصور ما قبل التاريخ. من خلال عرض الفخار والأدوات وأدلة على التدجين المبكر، وضح أحد أهم التحولات الثقافية للبشرية.',
      curator: 'Prof. Ahmed Benali',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      location: 'Main Gallery',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/02901782-655f-4d02-a8ec-841fe94e6433.jpg',
      status: 'past'
    }
  ];

  const getLocalizedTitle = (exhibition: Exhibition) => {
    if (language === 'ar') return exhibition.titleAr;
    if (language === 'fr') return exhibition.titleFr;
    return exhibition.title;
  };

  const getLocalizedDescription = (exhibition: Exhibition) => {
    if (language === 'ar') return exhibition.descriptionAr;
    if (language === 'fr') return exhibition.descriptionFr;
    return exhibition.description;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  };

  const currentExhibitions = exhibitions.filter(e => e.status === 'current');
  const upcomingExhibitions = exhibitions.filter(e => e.status === 'upcoming');
  const pastExhibitions = exhibitions.filter(e => e.status === 'past');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-primary">
              {t('exhibitions.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our rotating exhibitions featuring special themes and collections
            </p>
          </div>

          {/* Exhibitions Tabs */}
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="current">
                {t('exhibitions.current')}
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                {t('exhibitions.upcoming')}
              </TabsTrigger>
              <TabsTrigger value="past">
                {t('exhibitions.past')}
              </TabsTrigger>
            </TabsList>

            {/* Current Exhibitions */}
            <TabsContent value="current" className="space-y-6">
              {currentExhibitions.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No current exhibitions at this time. Check back soon!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                currentExhibitions.map((exhibition) => (
                  <Card key={exhibition.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto">
                        <img
                          src={exhibition.image}
                          alt={getLocalizedTitle(exhibition)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">
                            Now Showing
                          </Badge>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <CardHeader>
                          <CardTitle className="text-2xl">
                            {getLocalizedTitle(exhibition)}
                          </CardTitle>
                          <CardDescription className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4" />
                              <span>{exhibition.location}</span>
                            </div>
                            <div className="text-sm">
                              Curator: {exhibition.curator}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {getLocalizedDescription(exhibition)}
                          </p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            {/* Upcoming Exhibitions */}
            <TabsContent value="upcoming" className="space-y-6">
              {upcomingExhibitions.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No upcoming exhibitions announced yet. Stay tuned!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingExhibitions.map((exhibition) => (
                    <Card key={exhibition.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[16/9]">
                        <img
                          src={exhibition.image}
                          alt={getLocalizedTitle(exhibition)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">
                            Coming Soon
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {getLocalizedTitle(exhibition)}
                        </CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>Opens {formatDate(exhibition.startDate)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{exhibition.location}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {getLocalizedDescription(exhibition)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Past Exhibitions */}
            <TabsContent value="past" className="space-y-6">
              {pastExhibitions.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No past exhibitions to display.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {pastExhibitions.map((exhibition) => (
                    <Card key={exhibition.id} className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={exhibition.image}
                          alt={getLocalizedTitle(exhibition)}
                          className="w-full h-full object-cover opacity-90"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {getLocalizedTitle(exhibition)}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {getLocalizedDescription(exhibition)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Exhibition Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Visit Our Exhibitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All special exhibitions are included with regular museum admission. The Bardo Museum regularly rotates exhibitions to showcase different aspects of Algeria's cultural heritage and to feature items from our extensive collections that are not on permanent display.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also collaborate with other museums and cultural institutions to bring international exhibitions to Algeria and to share our collections with audiences around the world. These partnerships help promote understanding and appreciation of Algerian heritage globally.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Admission</h3>
                  <p className="text-sm text-muted-foreground">
                    Special exhibitions are included with regular museum admission. No additional fee required.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Guided Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Guided tours of special exhibitions are available. Please inquire at the information desk.
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

export default ExhibitionsPage;
