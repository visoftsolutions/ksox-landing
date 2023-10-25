import { style } from "@vanilla-extract/css";

export const navbar = style({
    position: "fixed",
    backgroundColor: "#040c18",
    boxShadow: "#000000",
    width: "100%"
});

export const wrapper = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1400px",
    paddingTop: "20px",
    paddingBottom: "20px",
    fontSize: "16px",
    paddingRight: "20px",
    paddingLeft: "20px",
    "@media": {
        "screen and (min-width: 1124px)": {
          paddingRight: "32px",
          paddingLeft: "32px",
          gridTemplateColumns: "repeat(3, 1fr)",
        },
      },
});

export const headerGrid = style({
    gridAutoFlow: "column",
    gap: "8px",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
  });

export const leftSide = style({
    gridAutoFlow: "column",
    justifyItems: "left",
    justifyContent: "left",
    alignItems: "left",
});

export const center = style([
    headerGrid,
    {   
        display: "none",
        "@media": {
            "screen and (min-width: 1124px)": {
                display: "grid",
            },
          },
    },
    ]);

export const rightSide = style({
    justifyItems: "right",
    justifyContent: "right",
    alignItems: "center",
    textAlign: "right",
    display: "none",
    "@media": {
        "screen and (min-width: 1124px)": {
            display: "grid",
        },
      },
    
});

export const rightSideMobile = style({   
    display: "grid",
    justifyItems: "right",
    justifyContent: "right",
    alignItems: "center",
    textAlign: "right",
    "@media": {
        "screen and (min-width: 1124px)": {
            display: "none",
        },
        },
});
  
export const navItem = style({
    paddingRight: "20px",
    paddingLeft: "20px",
    transition: "color",
    transitionDuration: "300ms",
    ":hover": {
        color: "#ffffff",
      },
});

export const mobile = style({
    display: "grid",
    "@media": {
        "screen and (min-width: 1124px)": {
            display: "none",
        },
    },
});

export const hidden = style({
    display: "none",
});

export const smWrapper = style({
    display: "grid",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    gridAutoFlow: "column",
    gap: "16px",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px"
});

export const launchButton = style({
    borderWidth: "2px",
    borderRadius: "9999px",
    borderColor: "#4183E8",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
});
