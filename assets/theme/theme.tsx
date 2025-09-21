// assets/theme/metallicTheme.ts
import { useColorScheme } from 'react-native';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Metallic tech color palette
export const metallicPalette = {
  deepTeal: '#012a4a',
  darkCyan: '#013a63', 
  steelBlue: '#01497c',
  techBlue: '#014f86',
  metallicBlue: '#2a6f97',
  chromiumBlue: '#2c7da0',
  silverBlue: '#468faf',
  lightSteel: '#61a5c2',
  softMetal: '#89c2d9',
  lightMetal: '#a9d6e5',
  
  // Metallic accent colors
  platinum: '#e5e4e2',
  silver: '#c0c0c0',
  gunmetal: '#2a3439',
  titanium: '#878681',
  copper: '#b87333',
  
  // Base colors
  white: '#ffffff',
  black: '#000000',
  
  // Metallic grays with blue undertones
  metalGray: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#6c757d',
    500: '#495057',
    600: '#343a40',
    700: '#212529',
    800: '#1a1d21',
    900: '#0f1214',
  }
};

// Metallic gradient configurations
export const metallicGradients = {
  primaryMetal: ['#1a365d', '#2c7da0', '#89c2d9', '#ffffff', '#89c2d9', '#2c7da0', '#1a365d'],
  darkMetal: ['#000000', '#2a4a5c', '#4a7c9d', '#6ba3c7', '#4a7c9d', '#2a4a5c', '#000000'],
  lightMetal: ['#ffffff', '#f0f8ff', '#e6f3ff', '#d4edda', '#e6f3ff', '#f0f8ff', '#ffffff'],
  chromeMetal: ['#8c8c8c', '#c0c0c0', '#f5f5f5', '#ffffff', '#f5f5f5', '#c0c0c0', '#8c8c8c'],
  copperMetal: ['#8b4513', '#cd853f', '#ffd700', '#ffffe0', '#ffd700', '#cd853f', '#8b4513'],
};

// Metallic shadow configurations
export const metallicShadows = {
  light: {
    shadowColor: '#2a6f97',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: '#013a63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  heavy: {
    shadowColor: '#012a4a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  glow: {
    shadowColor: '#61a5c2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  }
};

type ColorScheme = 'light' | 'dark';
type ThemeMode = 'system' | 'light' | 'dark';

// Enhanced React Native Paper themes with metallic effects
const metallicLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Primary metallic blues
    primary: metallicPalette.metallicBlue,
    onPrimary: metallicPalette.white,
    primaryContainer: metallicPalette.lightSteel,
    onPrimaryContainer: metallicPalette.deepTeal,
    
    // Secondary chrome/silver tones
    secondary: metallicPalette.silverBlue,
    onSecondary: metallicPalette.white,
    secondaryContainer: metallicPalette.platinum,
    onSecondaryContainer: metallicPalette.darkCyan,
    
    // Tertiary steel accents
    tertiary: metallicPalette.chromiumBlue,
    onTertiary: metallicPalette.white,
    tertiaryContainer: metallicPalette.softMetal,
    onTertiaryContainer: metallicPalette.deepTeal,
    
    // Error states with metallic treatment
    error: '#d32f2f',
    onError: metallicPalette.white,
    errorContainer: '#ffcdd2',
    onErrorContainer: '#c62828',
    
    // Surfaces with metallic sheen
    background: metallicPalette.platinum,
    onBackground: metallicPalette.gunmetal,
    surface: metallicPalette.white,
    onSurface: metallicPalette.deepTeal,
    surfaceVariant: metallicPalette.metalGray[100],
    onSurfaceVariant: metallicPalette.darkCyan,
    
    // Outlines and borders
    outline: metallicPalette.silver,
    outlineVariant: metallicPalette.metalGray[300],
    
    // Inverse colors for contrast
    inverseSurface: metallicPalette.gunmetal,
    inverseOnSurface: metallicPalette.lightMetal,
    inversePrimary: metallicPalette.lightSteel,
    
    // Utility colors
    scrim: metallicPalette.black,
    shadow: metallicPalette.deepTeal,
    
    // Custom metallic properties
    surfaceTint: metallicPalette.metallicBlue,
    backdrop: 'rgba(1, 42, 74, 0.4)',
  },
};

const metallicDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // Primary metallic blues (brighter for dark mode)
    primary: metallicPalette.lightSteel,
    onPrimary: metallicPalette.deepTeal,
    primaryContainer: metallicPalette.steelBlue,
    onPrimaryContainer: metallicPalette.softMetal,
    
    // Secondary with metallic glow
    secondary: metallicPalette.softMetal,
    onSecondary: metallicPalette.deepTeal,
    secondaryContainer: metallicPalette.darkCyan,
    onSecondaryContainer: metallicPalette.lightMetal,
    
    // Tertiary accents
    tertiary: metallicPalette.silverBlue,
    onTertiary: metallicPalette.gunmetal,
    tertiaryContainer: metallicPalette.techBlue,
    onTertiaryContainer: metallicPalette.lightSteel,
    
    // Error states
    error: '#f44336',
    onError: metallicPalette.white,
    errorContainer: '#c62828',
    onErrorContainer: '#ffcdd2',
    
    // Dark metallic surfaces
    background: metallicPalette.gunmetal,
    onBackground: metallicPalette.lightMetal,
    surface: metallicPalette.deepTeal,
    onSurface: metallicPalette.softMetal,
    surfaceVariant: metallicPalette.darkCyan,
    onSurfaceVariant: metallicPalette.silverBlue,
    
    // Dark outlines
    outline: metallicPalette.titanium,
    outlineVariant: metallicPalette.steelBlue,
    
    // Inverse colors
    inverseSurface: metallicPalette.platinum,
    inverseOnSurface: metallicPalette.deepTeal,
    inversePrimary: metallicPalette.metallicBlue,
    
    // Utility colors
    scrim: metallicPalette.black,
    shadow: metallicPalette.black,
    
    // Custom metallic properties
    surfaceTint: metallicPalette.lightSteel,
    backdrop: 'rgba(15, 18, 20, 0.6)',
  },
};

interface MetallicThemeContextType {
  paperTheme: typeof metallicLightTheme;
  palette: typeof metallicPalette;
  gradients: typeof metallicGradients;
  shadows: typeof metallicShadows;
  isDark: boolean;
  colorScheme: ColorScheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const MetallicThemeContext = createContext<MetallicThemeContextType | null>(null);

interface MetallicThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export const MetallicThemeProvider = ({ 
  children, 
  defaultMode = 'system' 
}: MetallicThemeProviderProps) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const getActiveTheme = (): ColorScheme => {
    switch (mode) {
      case 'light':
        return 'light';
      case 'dark':
        return 'dark';
      case 'system':
      default:
        return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
  };

  const activeTheme = getActiveTheme();
  const isDark = activeTheme === 'dark';
  const paperTheme = isDark ? metallicDarkTheme : metallicLightTheme;

  const contextValue: MetallicThemeContextType = {
    paperTheme,
    palette: metallicPalette,
    gradients: metallicGradients,
    shadows: metallicShadows,
    isDark,
    colorScheme: activeTheme,
    mode,
    setMode,
  };

  return (
    <MetallicThemeContext.Provider value={contextValue}>
      {children}
    </MetallicThemeContext.Provider>
  );
};

export const useMetallicTheme = () => {
  const context = useContext(MetallicThemeContext);
  if (!context) {
    throw new Error('useMetallicTheme must be used within a MetallicThemeProvider');
  }
  return context;
};

// Utility functions for creating metallic effects
export const createMetallicStyle = (baseColor: string, intensity: 'light' | 'medium' | 'heavy' = 'medium') => {
  const shadows = metallicShadows[intensity];
  return {
    backgroundColor: baseColor,
    ...shadows,
    // Add subtle border for metallic edge effect
    borderWidth: 0.5,
    borderColor: metallicPalette.silver,
  };
};

export const createGlowEffect = (glowColor: string = metallicPalette.lightSteel) => ({
  ...metallicShadows.glow,
  shadowColor: glowColor,
});

// Gradient helper for creating metallic surfaces
export const createMetallicGradient = (colors: string[]) => ({
  colors,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
});

// Pre-defined metallic component styles
export const metallicStyles = {
  card: {
    ...createMetallicStyle(metallicPalette.white, 'medium'),
    borderRadius: 12,
  },
  button: {
    ...createMetallicStyle(metallicPalette.metallicBlue, 'light'),
    borderRadius: 8,
  },
  surface: {
    ...createMetallicStyle(metallicPalette.platinum, 'light'),
    borderRadius: 16,
  },
  header: {
    ...createMetallicStyle(metallicPalette.chromiumBlue, 'heavy'),
    borderBottomWidth: 1,
    borderBottomColor: metallicPalette.silver,
  }
};