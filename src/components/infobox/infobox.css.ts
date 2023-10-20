import { style } from "@vanilla-extract/css";

export const infoButton = style({
    borderWidth: "2px",
    borderRadius: "9999px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderColor: "#4183E8",
    transition: "background-color",
    transitionDuration: "300ms",
    ":hover": {
        backgroundColor: "rgb(250, 249, 246)",
    },
});

export const productImage = style({
    borderRadius: "16px",
    transitionDuration: "500ms",
    paddingTop: "40px",
    ":hover": {
        transform: "skewX(-1deg)",
    },
    "@media": {
        "screen and (min-width: 1024px)": {
            paddingTop: "0px",
        },
      },
});

export const box = style({
    paddingBottom: "64px",
    paddingTop: "64px",
    marginBottom: "80px",
    marginTop: "80px",
    paddingLeft: "40px",
    paddingRight: "40px",
    borderRadius: "16px",
    borderWidth: "2px",
    "@media": {
        "screen and (min-width: 524px)": {
            marginLeft: "40px",
            marginRight: "40px",
        },
      },
});

export const wrapper = style({
    display: "grid",
    alignItems: "center",
    "@media": {
        "screen and (min-width: 1024px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
      },
});

export const textBox = style({
    textAlign: "center",
    "@media": {
        "screen and (min-width: 1024px)": {
           textAlign: "left",
           paddingRight: "40px",
        },
      },
});

export const titleText = style({
    fontWeight: "600",
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
    paddingBottom: "20px",
    paddingTop: "20px",
    "@media": {
      "screen and (min-width: 524px)": {
        paddingBottom: "40px",
        paddingTop: "40px",
      }
    },
  });
