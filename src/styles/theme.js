const fontGenerator = (
  fontFamily = "Pretendard",
  fontSize = "0.9375rem",
  fontWeight = "normal",
  lineHeight = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
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
    pretendardB1: fontGenerator("Pretendard", "0.75rem", "400", "150%"),
    pretendardB2: fontGenerator("Pretendard", "0.75rem", "700", "150%"),
    pretendardB3: fontGenerator("Pretendard", "0.9375rem", "400", "150%"),
    pretendardB4: fontGenerator("Pretendard", "0.9375rem", "600", "150%"),
    pretendardB5: fontGenerator("Pretendard", "1.0625rem", "400", "150%"),

    pretendardH1: fontGenerator("Pretendard", "1.25rem", "900", "100%"),
    pretendardH2: fontGenerator("Pretendard", "1.5625rem", "400", "140%"),

    lotteriaChabB1: fontGenerator("CHAB", "0.75rem", "400", "150%"),
    lotteriaChabB2: fontGenerator("CHAB", "0.9375rem", "400", "150%"),
    lotteriaChabB3: fontGenerator("CHAB", "1.25rem", "400", "150%"),

    lotteriaChabH1: fontGenerator("CHAB", "1.5625rem", "400", "150%"),
    lotteriaChabH2: fontGenerator("CHAB", "1.875rem", "400", "100%"),
  },
};
