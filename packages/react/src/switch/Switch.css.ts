import { theme } from "../styles";
import { type RecipeVariants, recipe, style } from "../vanilla-extract";

export const root = recipe({
  base: [
    {
      borderColor: "transparent",
      px: "12",
      py: "2",
      rounded: "full",
    },
    style({
      backgroundColor: theme.colors["fg.brand"],
      position: "relative",

      selectors: {
        "&:focus-visible": {
          outline: `${theme.colors["brand.300"]} solid 2px`,
          outlineOffset: "1px",
        },
        "&:hover": {
          backgroundColor: theme.colors["fg.brand.hover"],
        },
        "&[data-disabled]": {
          backgroundColor: theme.colors["border.secondary"],
          cursor: "not-allowed",
        },
        '&[data-state="unchecked"]:not([data-disabled])': {
          backgroundColor: theme.colors["border.default"],
        },
      },
    }),
  ],
  variants: {
    size: {
      md: {},
      lg: {},
    },
  },
});

export const thumb = recipe({
  base: [
    {
      bg: "white",
      display: "block",
      rounded: "full",
      transition: "transform",
    },
    style({
      transform: "translateX(-10px)",

      selectors: {
        '&[data-state="checked"]': { transform: "translateX(10px)" },
      },
    }),
  ],
  variants: {
    size: {
      md: {
        size: "16",
      },
      lg: {
        size: "20",
      },
    },
  },
});

export type SwitchVariants = RecipeVariants<typeof root>;