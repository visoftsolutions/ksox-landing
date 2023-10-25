import { style } from "@vanilla-extract/css";

export const pay = style({
    paddingTop: "80px",
    paddingBottom: "80px",
    backgroundColor: "#f8f8f8",
    color: "#1f1f1f",
});

export const wrapper = style({
    maxWidth: "1270px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    paddingRight: "32px",
    paddingLeft: "32px",
    "@media": {
        "screen and (min-width: 824px)": {
          paddingRight: "80px",
          paddingLeft: "80px",
        },
        "screen and (min-width: 1124px)": {
          textAlign: "left",
          paddingRight: "0px",
          paddingLeft: "0px",
        },
      },
});

export const titleText = style({
    fontSize: "24px",
    "@media": {
        "screen and (min-width: 524px)": {
          fontSize: "36px",
        },
        "screen and (min-width: 1124px)": {
            paddingLeft: "40px",
        },  
      },
});
