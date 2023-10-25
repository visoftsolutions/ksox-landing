import { style } from "@vanilla-extract/css";

export const navbar = style({
    position: "fixed",
    backgroundColor: "#040c18",
    boxShadow: "#000000",
    width: "100%"
});

export const wrapper = style({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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
    gridColumnEnd: "3",
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
  
//px-5 hover:text-white duration-300
export const navItem = style({
    paddingRight: "20px",
    paddingLeft: "20px",
    transition: "color",
    transitionDuration: "300ms",
    ":hover": {
        color: "#ffffff",
      },
});

//class="hidden lg:block text-lg border-2 px-3 rounded-full border-blue-700 hover:border-blue-500 duration-300"