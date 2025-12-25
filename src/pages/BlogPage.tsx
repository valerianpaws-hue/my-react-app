import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layouts/Layout';
import MuseumGuide from '@/components/common/MuseumGuide';
import { useLanguage } from '@/contexts/LanguageContext';

interface Article {
  id: number;
  title: string;
  titleFr: string;
  titleAr: string;
  excerpt: string;
  excerptFr: string;
  excerptAr: string;
  content: string;
  contentFr: string;
  contentAr: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  const articles: Article[] = [
    {
      id: 1,
      title: 'Origins of Prehistoric Artifacts in Algeria',
      titleFr: 'Origines des Artefacts Préhistoriques en Algérie',
      titleAr: 'أصول القطع الأثرية لعصور ما قبل التاريخ في الجزائر',
      excerpt: 'Explore the fascinating journey of prehistoric human settlements in Algeria and the artifacts they left behind.',
      excerptFr: 'Explorez le voyage fascinant des établissements humains préhistoriques en Algérie et les artefacts qu\'ils ont laissés.',
      excerptAr: 'استكشف الرحلة الرائعة للمستوطنات البشرية في عصور ما قبل التاريخ في الجزائر والقطع الأثرية التي تركوها وراءهم.',
      content: 'Algeria has been inhabited by humans for over 2 million years, making it one of the oldest continuously inhabited regions in the world. The prehistoric collections at the Bardo Museum tell the story of these early inhabitants through their tools, pottery, and art. From the crude stone tools of the Lower Paleolithic to the sophisticated bronze weapons of the protohistoric period, each artifact provides a window into the lives of our ancestors. The Saharan rock art, dating back thousands of years, depicts hunting scenes, religious ceremonies, and daily life, offering invaluable insights into prehistoric North African culture.',
      contentFr: 'L\'Algérie est habitée par des humains depuis plus de 2 millions d\'années, ce qui en fait l\'une des régions continuellement habitées les plus anciennes du monde. Les collections préhistoriques du Musée du Bardo racontent l\'histoire de ces premiers habitants à travers leurs outils, leur poterie et leur art. Des outils en pierre bruts du Paléolithique inférieur aux armes en bronze sophistiquées de la période protohistorique, chaque artefact offre une fenêtre sur la vie de nos ancêtres.',
      contentAr: 'سكن البشر الجزائر منذ أكثر من 2 مليون سنة، مما يجعلها واحدة من أقدم المناطق المأهولة باستمرار في العالم. تحكي المجموعات ما قبل التاريخ في متحف باردو قصة هؤلاء السكان الأوائل من خلال أدواتهم وفخارهم وفنهم. من الأدوات الحجرية الخام من العصر الحجري القديم السفلي إلى الأسلحة البرونزية المتطورة من الفترة ما قبل التاريخية، توفر كل قطعة أثرية نافذة على حياة أسلافنا.',
      author: 'Dr. Amina Benali',
      date: '2024-11-15',
      category: 'Prehistory',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7917167c-b630-4d27-b239-966376dcb7f9.jpg'
    },
    {
      id: 2,
      title: 'Traditional Algerian Ethnography Explained',
      titleFr: 'L\'Ethnographie Algérienne Traditionnelle Expliquée',
      titleAr: 'شرح الإثنوغرافيا الجزائرية التقليدية',
      excerpt: 'Discover the rich tapestry of Algerian traditional culture through clothing, tools, and ceremonial objects.',
      excerptFr: 'Découvrez la riche tapisserie de la culture algérienne traditionnelle à travers les vêtements, les outils et les objets cérémoniels.',
      excerptAr: 'اكتشف النسيج الغني للثقافة الجزائرية التقليدية من خلال الملابس والأدوات والأشياء الاحتفالية.',
      content: 'Algeria\'s ethnographic heritage reflects the diverse cultures that have shaped the nation. The Bardo Museum\'s ethnographic collection showcases traditional clothing from different regions, each with distinctive styles and decorations. Kabyle dresses feature intricate embroidery and silver jewelry, while Saharan garments are adapted to desert life. Traditional tools reveal the ingenuity of Algerian craftspeople, from agricultural implements to weaving looms. Ceremonial objects, including wedding costumes and religious artifacts, demonstrate the importance of ritual and celebration in Algerian society. These collections preserve traditions that are rapidly disappearing in modern Algeria.',
      contentFr: 'Le patrimoine ethnographique de l\'Algérie reflète les diverses cultures qui ont façonné la nation. La collection ethnographique du Musée du Bardo présente des vêtements traditionnels de différentes régions, chacun avec des styles et des décorations distinctifs. Les robes kabyles présentent des broderies complexes et des bijoux en argent, tandis que les vêtements sahariens sont adaptés à la vie dans le désert.',
      contentAr: 'يعكس التراث الإثنوغرافي للجزائر الثقافات المتنوعة التي شكلت الأمة. تعرض المجموعة الإثنوغرافية لمتحف باردو الملابس التقليدية من مناطق مختلفة، كل منها بأنماط وزخارف مميزة. تتميز الفساتين القبائلية بالتطريز المعقد والمجوهرات الفضية، بينما تتكيف الملابس الصحراوية مع الحياة في الصحراء.',
      author: 'Prof. Karim Messaoudi',
      date: '2024-10-22',
      category: 'Ethnography',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/5af57ce6-a90f-4546-a7e3-7b647d6066ff.jpg'
    },
    {
      id: 3,
      title: 'How the Museum Preserves Heritage',
      titleFr: 'Comment le Musée Préserve le Patrimoine',
      titleAr: 'كيف يحافظ المتحف على التراث',
      excerpt: 'Behind the scenes look at the conservation techniques used to protect Algeria\'s cultural treasures.',
      excerptFr: 'Un regard en coulisses sur les techniques de conservation utilisées pour protéger les trésors culturels de l\'Algérie.',
      excerptAr: 'نظرة من وراء الكواليس على تقنيات الحفظ المستخدمة لحماية الكنوز الثقافية للجزائر.',
      content: 'Preserving cultural heritage requires constant vigilance and expertise. The Bardo Museum employs a team of conservators who use both traditional and modern techniques to protect the collections. Climate control is essential for preventing deterioration, with temperature and humidity carefully monitored in all storage and exhibition areas. Fragile textiles are stored in acid-free tissue paper and displayed in low-light conditions to prevent fading. Metal objects are treated to prevent corrosion, while pottery and stone artifacts are carefully cleaned and stabilized. The museum also maintains detailed documentation of each object, including photographs, condition reports, and provenance information. Digital preservation efforts ensure that even if physical objects deteriorate, their images and information will be preserved for future generations.',
      contentFr: 'La préservation du patrimoine culturel nécessite une vigilance et une expertise constantes. Le Musée du Bardo emploie une équipe de conservateurs qui utilisent des techniques traditionnelles et modernes pour protéger les collections. Le contrôle climatique est essentiel pour prévenir la détérioration, avec une surveillance attentive de la température et de l\'humidité dans toutes les zones de stockage et d\'exposition.',
      contentAr: 'يتطلب الحفاظ على التراث الثقافي يقظة وخبرة مستمرة. يوظف متحف باردو فريقًا من المحافظين الذين يستخدمون تقنيات تقليدية وحديثة لحماية المجموعات. يعد التحكم في المناخ ضروريًا لمنع التدهور، مع مراقبة دقيقة لدرجة الحرارة والرطوبة في جميع مناطق التخزين والعرض.',
      author: 'Leila Khelifi',
      date: '2024-09-10',
      category: 'Conservation',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/528f52bc-671b-4d7f-acd6-0231da02102e.jpg'
    }
  ];

  const getLocalizedTitle = (article: Article) => {
    if (language === 'ar') return article.titleAr;
    if (language === 'fr') return article.titleFr;
    return article.title;
  };

  const getLocalizedExcerpt = (article: Article) => {
    if (language === 'ar') return article.excerptAr;
    if (language === 'fr') return article.excerptFr;
    return article.excerpt;
  };

  const getLocalizedContent = (article: Article) => {
    if (language === 'ar') return article.contentAr;
    if (language === 'fr') return article.contentFr;
    return article.content;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-primary">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights into Algeria's Cultural Heritage
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={article.image}
                      alt={getLocalizedTitle(article)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl">
                        {getLocalizedTitle(article)}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString(
                            language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {getLocalizedExcerpt(article)}
                      </p>
                      <Separator />
                      <p className="text-muted-foreground leading-relaxed">
                        {getLocalizedContent(article)}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <MuseumGuide />
    </Layout>
  );
};

export default BlogPage;
