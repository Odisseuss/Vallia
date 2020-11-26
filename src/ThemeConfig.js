// This file contains theme variables such as colors or shadow presets. You can edit them to create your custom theme.
let colors = {
  // Dark Theme
  primary: "#64FF8F",
  navy_blue: "#0A192F",
  darkest_grey: "#939393",
  darker_grey: "#B9B9B9",
  grey: "#C4C4C4",
  lighter_grey: "#D8D8D8",
  lightest_grey: "#E6E6E6",
  // Light Theme
  // primary: "#495FEF",
  // white: "#FFFFFF",
  // black_blue_tint: "#161C2D",
  // black: "#101010",
  // grey: "#E6E6E6",
  // darker_grey: "#B9B9B9",
  // hard_shadow: "#0D0D0D",
  shadow: "rgba(13, 13, 13, 0.25)",
};
let shadows = {
  elevation_1: `drop-shadow(0px 0px 1px #0D0D0D), drop-shadow(0px 1px 3px ${colors.shadow});`,
  elevation_2: `drop-shadow(0px 0px 1px #0D0D0D), drop-shadow(0px 2px 4px ${colors.shadow});`,
  elevation_3: `drop-shadow(0px 0px 1px #0D0D0D), drop-shadow(0px 4px 8px ${colors.shadow});`,
  elevation_4: `drop-shadow(0px 0px 1px #0D0D0D), drop-shadow(0px 8px 16px ${colors.shadow});`,
  elevation_5: `drop-shadow(0px 0px 1px #0D0D0D), drop-shadow(0px 16px 25px ${colors.shadow});`,
};
export { colors, shadows };
