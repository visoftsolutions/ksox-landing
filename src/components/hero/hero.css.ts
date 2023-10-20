import { style } from "@vanilla-extract/css";

export const hero = style({
  textAlign: "center",
  "@media": {
    "screen and (min-width: 1124px)": {
      textAlign: "left",
    },
  },
});

export const heroButton = style({
  borderWidth: "2px",
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "9999px",
  fontSize: "16px",
  transition: "background-color",
  transitionDuration: "300ms",
  ":hover": {
    backgroundColor: "rgb(17,24,39)",
  },
  "@media": {
    "screen and (min-width: 1124px)": {
      fontSize: "20px",
    },
  },
});

export const heroWrapper = style({
  maxWidth: "1270px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: "20px",
  paddingLeft: "20px",
  paddingTop: "208px",
  paddingBottom: "208px",
  display: "grid",
  "@media": {
    "screen and (min-width: 1124px)": {
      paddingRight: "32px",
      paddingLeft: "32px",
      paddingTop: "384px",
      paddingBottom: "384px",
    },
  },
});

export const contentWrapper = style({
  marginLeft: "auto",
  marginRight: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(0, 1fr)",
  "@media": {
    "screen and (min-width: 1124px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      alignItems: "center"
    },
  },
});

//font-bold text-transparent text-2xl sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-b from-blue-700 to-blue-200
export const titleText = style({
  fontWeight: "700",
  //color: "transparent",
  fontSize: "24px",
  //backgroundClip: "text",
  //backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-stops))",
  lineHeight: "1",
  "@media": {
    "screen and (min-width: 824px)": {
      fontSize: "40px",
      paddingRight: "32px",
      paddingLeft: "32px",
    },
    "screen and (min-width: 1124px)": {
      fontSize: "56px",
      paddingRight: "0px",
      paddingLeft: "0px",
    },
  },
});

export const subText = style({
  fontSize: "14px",
  paddingTop: "40px",
  paddingBottom: "40px",
  "@media": {
    "screen and (min-width: 824px)": {
      fontSize: "18px",
      paddingTop: "80px",
      paddingBottom: "80px",
    },
  },
});

export const heroImage = style({
  paddingTop: "40px",
  display: "grid",
  paddingRight: "80px",
  paddingLeft: "80px",
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 524px)": {
      paddingTop: "80px",
      paddingBottom: "80px",
    },
    "screen and (min-width: 1124px)": {
      marginLeft: "0",
      marginRight: "0",
      paddingBottom: "0px",
    },
  },
});

export const image = style({
  objectFit: "contain",
  "@media": {
    "screen and (min-width: 1124px)": {
      position: "absolute",
    },
  },
});