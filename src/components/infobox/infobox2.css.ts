import { style } from "@vanilla-extract/css";

export const imageLeft = style({
    display: "none",
    "@media": {
        "screen and (min-width: 824px)": {
            display: "block",
            paddingLeft: "20px",
        },
      },
});

export const imageRight = style({
    display: "none",
    "@media": {
        "screen and (min-width: 824px)": {
            display: "block",
            justifySelf: "end",
            paddingRight: "20px",
        },
      },
});

export const box = style({
    paddingBottom: "20px",
    paddingTop: "20px",
    marginBottom: "40px",
    marginTop: "40px",
    paddingLeft: "10px",
    paddingRight: "10px",
    "@media": {
        "screen and (min-width: 524px)": {
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "80px",
            marginTop: "80px",
        },
        "screen and (min-width: 1024px)": {
            marginLeft: "40px",
            marginRight: "40px",
            marginBottom: "180px",
            marginTop: "180px",
        },
      },
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
           paddingLeft: "40px",
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
    fontWeight: "600",
    fontSize: "20px",
    paddingBottom: "14px",
    "@media": {
      "screen and (min-width: 524px)": {
        fontSize: "24px",
        paddingBottom: "20px",
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
      }
    },
  });
