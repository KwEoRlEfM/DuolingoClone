// Design tokens — mirrors the Lingua design system exactly.
// Use these with StyleSheet.create() for exception components (SafeAreaView, etc.)
// For regular components, use the NativeWind utilities in global.css.

export const colors = {
  // Primary
  linguaPurple: "#6c4ef5",
  linguaDeepPurple: "#5b3bf6",
  linguaBlue: "#4d88ff",
  linguaGreen: "#21c168",

  // Semantic
  success: "#21c168",
  warning: "#ffcb00",
  streak: "#ff8a00",
  error: "#ff4d4f",
  info: "#4d88ff",

  // Neutral
  foreground: "#001132", // Text / Primary
  muted: "#6b7280", // Text / Secondary
  border: "#e5e7eb",
  surface: "#f6f7fb",
  background: "#ffffff",
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 31 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22 },
  bodyLg: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 26 },
  bodyMd: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 22 },
  bodySm: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 21 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15 },
} as const;
