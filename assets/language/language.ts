import { useState } from "react";

export type Language = keyof typeof language;
export type Translations = typeof language.en;

export function useLang() {
     const [currentLang, setCurrentLang] = useState<Language>('en');

     const text = language[currentLang];

     const getFlag = () => {
          if (currentLang === 'en') {
               return (
                    '\u{1F1EC}\u{1F1E7}'
               )
          } else {
               return (
                    '\u{1F1F8}\u{1F1EA}'
               )
          }
     }

     return { text, currentLang, setCurrentLang, getFlag };
}

export const language = {
     // English
     en: {
          cardTitle: {
               about: "About GetFly!",
               current: "Current",
               portfolio: "Portfolio"
          },
          cardContent: {
               aboutText: "Read more about us",
               currentText: "Read more about my current projects",
               portfolioText: "Read more about previous projects"
          },
          title: {
               about: "Innovative App Development Solutions",
               current: "Current Projects & Innovations",
               portfolio: "Proven Track Record",
          },
          content: {
               about: "At GetFly!, we specialize in creating cutting-edge mobile and web applications that transform ideas into powerful digital experiences. Our team of passionate developers combines technical expertise with creative vision to deliver solutions that not only meet but exceed client expectations. We focus on user-centric design, scalable architecture, and seamless performance across all platforms. From startup MVPs to enterprise-level applications, we bring innovation to life through code.",
               current: "We're currently pushing the boundaries of what's possible in app development. Our ongoing projects span across various industries including fintech, healthcare, and e-commerce, utilizing the latest technologies like React Native, Flutter, Node.js, and cloud-native architectures. Each project represents our commitment to delivering high-quality, maintainable code and exceptional user experiences that drive real business value.",
               portfolio: "Our portfolio showcases a diverse range of successful applications that have made a real impact in their respective markets. From award-winning mobile apps with millions of downloads to sophisticated enterprise solutions that streamline business operations, each project demonstrates our ability to tackle complex challenges and deliver results. We've helped startups secure funding, established companies increase efficiency, and users around the world connect with technology in meaningful ways.",
          },
     },

     // Swedish
     sv: {
          cardTitle: {
               about: "Om GetFly!",
               current: "Aktuellt",
               portfolio: "Portfölj"
          },
          cardContent: {
               aboutText: "Läs mer om oss",
               currentText: "Läs mer om mina nuvarande projekt",
               portfolioText: "Läs mer om tidigare projekt"
          },
          title: {
               about: "Innovativa Apputvecklingslösningar",
               current: "Pågående Projekt & Innovationer",
               portfolio: "Bevisad Framgångsbana",
          },
          content: {
               about: "På GetFly! specialiserar vi oss på att skapa banbrytande mobil- och webbapplikationer som förvandlar idéer till kraftfulla digitala upplevelser. Vårt team av passionerade utvecklare kombinerar teknisk expertis med kreativ vision för att leverera lösningar som inte bara möter utan överträffar kundernas förväntningar. Vi fokuserar på användarcentrerad design, skalbar arkitektur och sömlös prestanda på alla plattformar. Från startup-MVP:er till företagsnivåapplikationer - vi för innovation till liv genom kod.",
               current: "Vi driver för närvarande gränserna för vad som är möjligt inom apputveckling. Våra pågående projekt spänner över olika branscher inklusive fintech, hälsovård och e-handel, där vi använder de senaste teknologierna som React Native, Flutter, Node.js och molnbaserade arkitekturer. Varje projekt representerar vårt engagemang för att leverera högkvalitativ, underhållbar kod och exceptionella användarupplevelser som skapar verkligt affärsvärde.",
               portfolio: "Vår portfölj visar ett mångsidigt utbud av framgångsrika applikationer som har gjort en verklig påverkan på sina respektive marknader. Från prisbelönta mobilappar med miljontals nedladdningar till sofistikerade företagslösningar som effektiviserar affärsverksamhet - varje projekt visar vår förmåga att tackla komplexa utmaningar och leverera resultat. Vi har hjälpt startups att säkra finansiering, etablerade företag att öka effektiviteten och användare runt om i världen att koppla upp sig till teknologi på meningsfulla sätt.",
          },
     }
};