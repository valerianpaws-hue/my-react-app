import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Streamdown } from 'streamdown';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const APP_ID = import.meta.env.VITE_APP_ID || 'app-8gszr55zjz7l';

const MuseumGuide: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [streamingContent, setStreamingContent] = useState('');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streamingContent]);

  const getMuseumContext = () => {
    return `You are a knowledgeable museum guide for the Bardo National Museum of Prehistory and Ethnography in Algiers, Algeria. 

Museum Information:
- Founded: 1930
- Location: 3 Rue Franklin Roosevelt, Algiers, Algeria
- Opening Hours: Saturday to Thursday, 9:00 AM - 5:00 PM (Closed Friday)
- Phone: +213 21 74 11 49
- Email: contact@musee-bardo.dz

About the Museum:
The Bardo National Museum is housed in an 18th-century Ottoman villa and is one of the most important museums in North Africa. It specializes in prehistoric and ethnographic collections from Algeria.

Collections:
1. Prehistoric Collections:
   - Paleolithic Era: Stone tools and artifacts from the earliest human settlements in North Africa
   - Neolithic Era: Pottery, polished stone tools, and evidence of early agriculture
   - Bronze Age: Metal tools, weapons, and decorative objects
   - Ancient jewelry, pottery, and ceremonial objects

2. Ethnographic Exhibits:
   - Traditional Algerian clothing and textiles from various regions
   - Agricultural and craft tools used in daily life
   - Musical instruments
   - Religious and ceremonial artifacts
   - Traditional jewelry and decorative arts

3. Special Exhibitions:
   - Rotating temporary exhibitions featuring specific themes or periods
   - Collaborations with international museums
   - Contemporary interpretations of traditional culture

Please respond in ${language === 'ar' ? 'Arabic' : language === 'fr' ? 'French' : 'English'}. Provide helpful, accurate information about the museum, its collections, visiting information, and Algerian cultural heritage. Be friendly and engaging.`;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setStreamingContent('');

    try {
      const contents = [
        {
          role: 'user',
          parts: [{ text: getMuseumContext() }]
        },
        ...messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ];

      const response = await fetch(
        'https://api-integrations.appmedo.com/app-8gszr55zjz7l/api-rLob8RdzAOl9/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-App-Id': APP_ID,
          },
          body: JSON.stringify({ contents }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const jsonData = JSON.parse(line.slice(6));
                const text = jsonData.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                  accumulatedText += text;
                  setStreamingContent(accumulatedText);
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }

      if (accumulatedText) {
        setMessages(prev => [...prev, { role: 'model', content: accumulatedText }]);
        setStreamingContent('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to get response from the museum guide. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-40"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[90vw] max-w-md h-[600px] shadow-2xl z-40 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
            <CardTitle className="text-lg font-bold">
              {t('ai.title')}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="text-sm text-muted-foreground p-4 bg-secondary/30 rounded-lg">
                  {t('ai.welcome')}
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block max-w-[85%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.role === 'model' ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <Streamdown>{message.content}</Streamdown>
                      </div>
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {streamingContent && (
                <div className="mb-4 text-left">
                  <div className="inline-block max-w-[85%] p-3 rounded-lg bg-secondary text-secondary-foreground">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <Streamdown>{streamingContent}</Streamdown>
                    </div>
                  </div>
                </div>
              )}
              {isLoading && !streamingContent && (
                <div className="text-sm text-muted-foreground">
                  {t('ai.thinking')}
                </div>
              )}
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t('ai.placeholder')}
                  className="min-h-[60px] resize-none"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default MuseumGuide;
