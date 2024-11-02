const fontGenerator = (
  fontFamily,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    //색상
    blue300: "#3782ED", //메인
    blue400: "#2d6fcc",
    blue200: "#d2deef",
    blue100: "#eaeff8",

    red100: "#fee9e9",
    red200: "#ff0000",

    yellow: "#fef9d5",

    gray100: "#ffffff",
    gray200: "#f6f6f6",

    gray300: "#d9d9d9",
    gray400: "#979797",
    gray500: "#000000",
  },

  fonts: {
    default: fontGenerator("CHAB", "1rem", "400", "1.5", "normal"),

    // LOTTERIA CHAB 폰트 설정
    CHAB: fontGenerator("CHAB"),
  },
};
