import { theme } from "../styles";
import { style } from "../vanilla-extract";
import { recipe } from "../vanilla-extract";

const itemMarker = style({});

export const wrapper = recipe({
  base: [
    {
      flexDirection: "column",
      gap: "0",
    },
    style({
      color: theme.colors["fg.default"],

      selectors: {
        [`&:has(${itemMarker}[data-disabled])`]: {
          color: theme.colors["fg.disabled"],
        },
      },
    }),
  ],

  variants: {
    readonly: {
      true: style({
        selectors: {
          [`&:has(${itemMarker}[data-disabled])`]: {
            color: theme.colors["fg.default"],
          },
        },
      }),
    },
  },
});

export const item = recipe({
  base: [
    itemMarker,
    {
      bg: "white",
      border: "1",
      p: "2",
      rounded: "full",
      size: "16",
    },
    style({
      borderColor: theme.colors["fg.tertiary"],

      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${theme.colors["outline.brand"]}`,
          outlineOffset: "1px",
        },
        "&[data-disabled]": {
          borderColor: theme.colors["border.secondary"],
        },
        "&[data-state='checked']:not([data-disabled])": {
          borderColor: theme.colors["border.brand"],
        },
      },
    }),
  ],
});

export const indicator = recipe({
  base: [
    {
      display: "block",
      rounded: "full",
      size: "full",
    },
    style({
      backgroundColor: theme.colors["fg.brand"],

      selectors: {
        "&[data-disabled]": {
          backgroundColor: theme.colors["border.secondary"],
        },
      },
    }),
  ],
});

export const label = recipe({
  base: [
    {
      flex: "1",
    },
    style({
      cursor: "pointer",

      selectors: {
        [`${itemMarker}[data-disabled] + &`]: {
          cursor: "default",
        },
      },
    }),
  ],
});

export const endDecorator = recipe({
  base: [
    {
      flex: "1",
      ml: "24",
    },
  ],
});
