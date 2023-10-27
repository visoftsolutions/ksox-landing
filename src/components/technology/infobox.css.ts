import { style } from "@vanilla-extract/css";

export const imageLeft = style({
  display: "none",
  "@media": {
    "screen and (min-width: 824px)": {
      display: "block",
      justifySelf: "start",
    },
  },
});

export const imageRight = style({
  display: "none",
  "@media": {
    "screen and (min-width: 824px)": {
      display: "block",
      justifySelf: "end",
    },
  },
});

export const box = style({
  paddingBottom: "20px",
  paddingTop: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
});

export const wrapper = style({
  display: "grid",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 824px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const textBoxLeft = style({
  textAlign: "center",
  "@media": {
    "screen and (min-width: 824px)": {
      textAlign: "left",
    },
  },
});

export const textBoxRight = style({
  textAlign: "center",
  "@media": {
    "screen and (min-width: 824px)": {
      textAlign: "right",
      paddingRight: "40px",
    },
  },
});

export const titleText = style({
  fontSize: "20px",
  "@media": {
    "screen and (min-width: 524px)": {
      fontSize: "24px",
    },
    "screen and (min-width: 824px)": {
      fontSize: "30px",
    },
  },
});

export const subText = style({
  fontSize: "14px",
  "@media": {
    "screen and (min-width: 524px)": {
      fontSize: "18px",
    },
  },
});
