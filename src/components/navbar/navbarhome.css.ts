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

export const leftSide = style([
headerGrid,
{
    gridColumnStart: "1",
    gridColumnEnd: "2",
},
]);

export const rightSide = style([
headerGrid,
{   
    display: "none",
    gridColumnStart: "3",
    gridColumnEnd: "4",
    "@media": {
        "screen and (min-width: 1124px)": {
            display: "grid",
        },
      },
},
]);

export const rightSideMobile = style([
    headerGrid,
    {   
        display: "grid",
        gridColumnStart: "3",
        gridColumnEnd: "4",
        "@media": {
            "screen and (min-width: 1124px)": {
                display: "none",
            },
          },
    },
    ]);
  
export const navItem = style({
    paddingRight: "20px",
    paddingLeft: "20px",
    transition: "color",
    transitionDuration: "300ms",
    ":hover": {
        color: "#ffffff",
      },
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
    borderWidth: "2px",
    borderRadius: "9999px",
    borderColor: "#4183E8",
});

export const sm = style({
    marginTop: "80px",
    display: "grid",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
});