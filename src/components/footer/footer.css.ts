import { style } from "@vanilla-extract/css";

export const wrapper = style({
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "16px",
    paddingRight: "16px",
    "@media": {
        "screen and (min-width: 824px)": {
            paddingLeft: "80px",
            paddingRight: "80px",
        },
        "screen and (min-width: 1124px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
      },
});

export const contactBox = style({
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: "2px",
    paddingTop: "48px",
    paddingBottom: "48px",
    marginBottom: "80px",
    borderRadius: "24px",
});

export const infoWrapper = style({
    display: "grid",
    fontSize: "14px",
    "@media": {
        "screen and (min-width: 524px)": {
            fontSize: "16px",
            gridTemplateColumns: "repeat(3, 1fr)",
        },
      },
});

export const leftInfo = style({
    paddingBottom: "40px",
    textAlign: "center",
    "@media": {
        "screen and (min-width: 524px)": {
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
        "screen and (min-width: 524px)": {
            paddingBottom: "0px",
        },
      },
});

export const rightInfo = style({
    paddingBottom: "40px",
    textAlign: "center",
    "@media": {
        "screen and (min-width: 524px)": {
            paddingLeft: "56px",
            textAlign: "right",
            paddingBottom: "0px",
        },
      },
});

export const subTitleText = style({
    paddingBottom: "20px",
    "@media": {
        "screen and (min-width: 524px)": {
            fontSize: "24px",
        },
      },
});

export const titleText = style({
    fontSize: "20px",
    "@media": {
        "screen and (min-width: 524px)": {
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