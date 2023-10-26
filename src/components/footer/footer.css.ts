import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

export const footer = style({
    display: "grid",
    gridTemplateRows: "repeat(2, auto)",
    justifyContent: "stretch",
    gap: "60px",
    color: vars.color.text
})

export const contactBox = style({
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: vars.color.border,
    paddingTop: "48px",
    paddingBottom: "48px",
    borderRadius: "24px",
    textAlign: "center",
});

export const infoWrapper = style({
    display: "grid",
    fontSize: "16px",
    gridTemplateRows: "repeat(3, 1fr)",
    "@media": {
        [mediaQuery.md]: {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
      },
});

export const leftInfo = style({
    paddingBottom: "40px",
    textAlign: "center",
    "@media": {
        [mediaQuery.md]: {
            paddingRight: "56px",
            textAlign: "left",
            paddingBottom: "0px",
        },
      },
});

export const centerInfo = style({
    paddingBottom: "40px",
    textAlign: "center",
    "@media": {
        [mediaQuery.md]: {
            paddingBottom: "0px",
        },
      },
});

export const rightInfo = style({
    paddingBottom: "40px",
    textAlign: "center",
    "@media": {
        [mediaQuery.md]: {
            paddingLeft: "56px",
            textAlign: "right",
            paddingBottom: "0px",
        },
      },
});

export const subTitleText = style({
    paddingBottom: "5px",
    "@media": {
        [mediaQuery.md]: {
            fontSize: "24px",
        },
      },
});

export const titleText = style({
    fontSize: "20px",
    "@media": {
        [mediaQuery.md]: {
            fontSize: "48px",
        },
      },
});

export const iconsBox = style({
    display: "grid",
    paddingTop: "20px",
    gridAutoFlow: "column",
    gap: "50px",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    "@media": {
        "screen and (min-width: 524px)": {
            paddingTop: "56px",
        },
      },
});