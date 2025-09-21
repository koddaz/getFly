
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Icon, PaperProvider, Switch } from "react-native-paper"
import { useState, ReactNode } from "react";
import { useLang } from "@/assets/language/language";
import { LinearGradient } from 'expo-linear-gradient';
import { createGlowEffect, createMetallicStyle, MetallicThemeProvider, useMetallicTheme } from "@/assets/theme/theme";

// Fixed ThemedPaperProvider using metallic theme
function ThemedPaperProvider({ children }: { children: ReactNode }) {
  const { paperTheme } = useMetallicTheme();
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
}

export default function Index() {
  return (
    <MetallicThemeProvider defaultMode="light">
      <ThemedPaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Main />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemedPaperProvider>
    </MetallicThemeProvider>
  );
}

class ImageMap {
  static card = {
    'logo': require('../assets/images/getFlyCode_logo.png'),
    'icon': require('../assets/images/icon.png'),
  };

  static main = {
    'temp1': require('../assets/images/temp1.jpg'),
    'temp2': require('../assets/images/temp2.jpg'),
    'temp3': require('../assets/images/temp3.jpg')
  }
}

interface CardProps {
  icon?: string,
  title?: string,
  text?: string,
  image?: keyof typeof ImageMap.card,
  variant?: 'success' | 'error' | 'default' | 'active' | 'disabled',
  large?: boolean,
  content?: any,
  pressable?: boolean,
  isPressed?: boolean,
  onHover?: () => void,
  onHoverOut?: () => void,
  onPress?: () => void,
  metallic?: boolean,
  glow?: boolean,
  gradient?: boolean,
}

export function Card({
  title,
  text,
  icon,
  variant,
  image,
  large = false,
  content,
  pressable = false,
  isPressed = false,
  onHover,
  onHoverOut,
  onPress,
  metallic = true,
  glow = false,
  gradient = false,
}: CardProps) {
  const { paperTheme, palette, gradients, shadows } = useMetallicTheme();

  const img = ImageMap.main
  const logo = ImageMap.card

  const variantStyles = {
    'success': {
      baseColor: palette.softMetal,
      borderColor: palette.lightSteel,
      metallicIntensity: 'light' as const,
      text: { color: paperTheme.colors.onSurface },
      container: { backgroundColor: palette.silverBlue },
      iconColor: palette.white,
      gradient: gradients.lightMetal
    },
    'error': {
      baseColor: paperTheme.colors.errorContainer,
      borderColor: palette.copper,
      metallicIntensity: 'light' as const,
      text: { color: paperTheme.colors.onErrorContainer },
      container: { backgroundColor: paperTheme.colors.error },
      iconColor: paperTheme.colors.onError,
      gradient: ['#8b0000', '#dc143c', '#ff6b6b', '#ffe4e1', '#ff6b6b', '#dc143c', '#8b0000']
    },
    'default': {
      baseColor: paperTheme.colors.surface,
      borderColor: palette.silver,
      metallicIntensity: 'medium' as const,
      text: { color: paperTheme.colors.onSurface },
      container: { backgroundColor: palette.metallicBlue },
      iconColor: palette.white,
      gradient: gradients.chromeMetal
    },
    'active': {
      baseColor: paperTheme.colors.primaryContainer,
      borderColor: palette.lightSteel,
      metallicIntensity: 'medium' as const,
      text: { color: paperTheme.colors.onPrimaryContainer },
      container: { backgroundColor: palette.metallicBlue },
      iconColor: palette.white,
      gradient: gradients.primaryMetal
    },
    'disabled': {
      baseColor: palette.metalGray[200],
      borderColor: palette.metalGray[400],
      metallicIntensity: 'light' as const,
      text: { color: palette.metalGray[600] },
      container: { backgroundColor: palette.metalGray[300] },
      iconColor: palette.metalGray[600],
      gradient: [palette.metalGray[300], palette.metalGray[200], palette.metalGray[100]]
    }
  };

  const variantStyle = variantStyles[variant || 'default'];

  const getCardStyle = () => {
    const baseStyle = large ? styles.cardLarge : styles.card;
    const backgroundStyle = {
      backgroundColor: variantStyle.baseColor,
      borderColor: variantStyle.borderColor,
      borderWidth: metallic ? 2 : 1,
    };

    const metallicEffects = metallic ? {
      ...shadows[variantStyle.metallicIntensity],
      borderColor: palette.silver,
      borderWidth: 2,
      // Add subtle gradient effect for web
      background: `linear-gradient(135deg, ${variantStyle.baseColor}dd, ${variantStyle.baseColor}ff, ${variantStyle.baseColor}dd)`,
    } : {};

    const glowEffects = glow ? createGlowEffect(variantStyle.borderColor) : {};

    return [baseStyle, backgroundStyle, metallicEffects, glowEffects];
  };

  const getIconContainerStyle = () => {
    const baseIconStyle = [styles.iconContainer, { backgroundColor: variantStyle.container.backgroundColor }];

    if (metallic) {
      return [
        ...baseIconStyle,
        createMetallicStyle(variantStyle.container.backgroundColor, 'light'),
      ];
    }

    return baseIconStyle;
  };

  const CardContent = () => {
    const cardStyle = getCardStyle();

    // Fixed LinearGradient component name
    if (gradient && variantStyle.gradient) {
      return (
        <LinearGradient
          colors={variantStyle.gradient as unknown as readonly [string, string, ...string[]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            large ? styles.cardLarge : styles.card,
            {
              borderRadius: 16,
              borderWidth: metallic ? 2 : 1,
              borderColor: metallic ? palette.silver : variantStyle.borderColor,
              ...(metallic ? shadows[variantStyle.metallicIntensity] : {}),
              ...(glow ? createGlowEffect(variantStyle.borderColor) : {})
            }
          ]}
        >
          <CardInnerContent />
        </LinearGradient>
      );
    }

    return (
      <View style={cardStyle}>
        <CardInnerContent />
      </View>
    );
  };

  const CardInnerContent = () => (
    <>
      <View style={styles.cardHeader}>
        <Text style={[large ? font.titleLarge : font.titleSmall, variantStyle.text]}>
          {title || "Title"}
        </Text>
      </View>

      {!content ? (
        <View style={styles.cardContent}>
          <View style={styles.textContent}>
            <Text style={[large ? font.bodyLarge : font.bodySmall, variantStyle.text]}>
              {text || "Temp text"}
            </Text>
          </View>

          {icon && (
            <View style={getIconContainerStyle()}>
              <Icon source={icon} size={50} color={variantStyle.iconColor} />
            </View>
          )}

          {image && (
            <View style={[
              styles.imageContainer,
              metallic ? createMetallicStyle(palette.white, 'light') : {}
            ]}>
              <Image
                source={logo[image]}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          )}
        </View>
      ) : (
        <View style={styles.cardContent}>
          {content}
        </View>
      )}
    </>
  );

  if (pressable) {
    return (
      <Pressable
        onHoverIn={onHover}
        onHoverOut={onHoverOut}
        onPress={onPress}
        style={({ pressed, hovered }) => [
          {
            flex: 1,
            opacity: pressed ? 0.4 : (hovered || isPressed) ? 0.60 : 1,
            transform: [{
              scale: metallic && (pressed || hovered || isPressed) ? 0.98 : 1
            }]
          },
        ]}
      >
        <CardContent />
      </Pressable>
    );
  }

  return <CardContent />;
}

export function useNavHook() {

  const [isVisible, setIsVisible] = useState(false);
  const [pressedCard, setPressedCard] = useState<number | null>(1);

  const [page, setPage] = useState(1)



  const onHover = (page: number) => {
    if (pressedCard === null) {
      setPage(page);
      setIsVisible(true);
    }
  }

  const onPress = (page: number) => {
    if (pressedCard === page) {
      setPressedCard(null);
      setIsVisible(false);
    } else {
      setPressedCard(page);
      setPage(page);
      setIsVisible(true);
    }
  }

  return {
    isVisible,
    pressedCard,
    setIsVisible,
    onHover,
    onPress,
    page,
    setPage
  }
}

export function Main() {
  const { palette, gradients, paperTheme, mode, setMode } = useMetallicTheme();
  // Fixed colors reference
  const colors = paperTheme.colors;

  const { getFlag, setCurrentLang, text, currentLang } = useLang()


  const {
    isVisible,
    setIsVisible,
    pressedCard,
    onHover,
    onPress,
    page,
  } = useNavHook()

  const img = ImageMap.main
  const card = ImageMap.card

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const renderPage = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return <Card large={true} metallic={true} gradient={true} glow={true} title={text.title.about} text={text.content.about} content={
          <AboutCard img={img} colors={colors} text={text} />
        } />
      case 2:
        return <Card large={true} metallic={true} gradient={true} glow={true} title={text.title.current} content={
          <ProjectCard img={img} colors={colors} text={text} />
        } />
      case 3:
        return <Card large={true} metallic={true} gradient={true} glow={true} title={text.title.portfolio} content={
          <PortfolioCard img={img} colors={colors} text={text} />
        } />
      default:
        return null;
    }
  }

  return (
    <View style={[styles.main, {}]}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>

        {/* Body */}
        <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 40 }}>

          <View style={{ flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end' }}>
            <View style={styles.cardRow}>
              {renderPage(page)}
            </View>
          </View>

          <View style={{ flex: 1, alignContent: 'flex-end', justifyContent: 'flex-start' }}>
            <View style={styles.cardRow}>
              <Card
                title={text.cardTitle.about}
                text={text.cardContent.aboutText}
                image={'logo'}
                variant={pressedCard === 1 ? 'active' : 'default'}
                pressable={true}
                isPressed={pressedCard === 1}
                gradient={true}
                metallic={true}
                glow={pressedCard === 1}
                onHover={() => onHover(1)}
                onHoverOut={() => pressedCard === null && setIsVisible(false)}
                onPress={() => onPress(1)}
              />

              <Card
                title={text.cardTitle.current}
                text={text.cardContent.currentText}
                icon={"reload"}
                variant={pressedCard === 2 ? 'active' : 'default'}
                pressable={true}
                isPressed={pressedCard === 2}
                gradient={true}
                metallic={true}
                glow={pressedCard === 2}
                onHover={() => onHover(2)}
                onHoverOut={() => pressedCard === null && setIsVisible(false)}
                onPress={() => onPress(2)}
              />

              <Card
                title={text.cardTitle.portfolio}
                text={text.cardContent.portfolioText}
                icon={"briefcase-outline"}
                variant={pressedCard === 3 ? 'active' : 'default'}
                pressable={true}
                isPressed={pressedCard === 3}
                gradient={true}
                metallic={true}
                glow={pressedCard === 3}
                onHover={() => onHover(3)}
                onHoverOut={() => pressedCard === null && setIsVisible(false)}
                onPress={() => onPress(3)}
              />
            </View>

            {/*Image*/}
            <View style={{ alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={ImageMap.card.logo}
                style={{ width: 280, height: 280, borderRadius: 140 }}
              />
            </View>
          </View>

        </View>

      </View>
      {/* Footer */}
      <View style={[styles.footer, { backgroundColor: colors.surface, alignItems: 'center' }]}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ color: colors.onSurface }}>Change language: </Text>
          <Pressable onPress={() => { setCurrentLang(currentLang === 'en' ? 'sv' : 'en') }}>
            <Text>{getFlag()}</Text>
          </Pressable>
        </View>
        <Image source={card.logo} style={{ width: 25, height: 25, borderRadius: 50 }} />
        <Switch value={isSwitchOn} onValueChange={toggleSwitch} />

      </View>
    </View>
  );
}

export function AboutCard(
  {colors, text, img} : {colors: any, text: any, img: any}
) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.textContent}>
          <Text style={[font.bodyLarge, { color: colors.onSurface }]}>{text.content.about}</Text>
        </View>
      </View>
      <Image
        resizeMode="cover"
        source={img.temp1}
        style={{ width: 280, height: '100%' }}
      />
    </>
  );
}

export function ProjectCard(
  {colors, text, img} : {colors: any, text: any, img: any}
) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.textContent}>
          <Text style={[font.bodyLarge, { color: colors.onSurface }]}>{text.content.current}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Card title={"emiSense"} metallic={true}></Card>
        </View>
      </View>
      <Image
        resizeMode="cover"
        source={img.temp2}
        style={{ width: 280, height: '100%' }}
      />
    </>
  );
}

export function PortfolioCard(
  {colors, text, img} : {colors: any, text: any, img: any}
) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.textContent}>
          <Text style={[font.bodyLarge, { color: colors.onSurface }]}>{text.content.portfolio}</Text>
        </View>
      </View>
      <Image
        resizeMode="cover"
        source={img.temp3}
        style={{ width: 280, height: '100%' }}
      />
    </>
  );
}

const font = StyleSheet.create({
  bodyMedium: {
    fontSize: 16,
    textAlign: 'justify'
  },
  bodyLarge: {
    fontSize: 18,
    textAlign: 'justify'
  },
  bodySmall: {
    fontSize: 14,
    textAlign: 'justify'
  },
  titleMedium: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    minHeight: 160,
    maxHeight: 200,
    overflow: 'hidden',
  },
  cardHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8
  },

  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
    flex: 1
  },

  cardRow: {
    flexDirection: 'row',
    marginBottom: 40,
    gap: 24,
    paddingHorizontal: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%'
  },

  cardLarge: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    minHeight: 500,
    maxHeight: 600,
    overflow: 'hidden',
  },

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },

  // MAIN:
  main: { flex: 1 },
  body: {

  },
  header: {

  },
  footer: {
    maxHeight: 40,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    alignContent: 'center',
    justifyContent: 'flex-end'
  },
});