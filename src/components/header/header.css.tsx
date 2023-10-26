import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { backgroundBlue, vars } from "~/theme.css";

export const header = style([backgroundBlue, {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "minmax(0px, 1200px)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    boxShadow: "8px 8px 44px 0px rgba(0, 0, 0, 0.2)",
}]);

export const wrapper = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    fontSize: "16px",
});

export const headerGrid = style({
    gridAutoFlow: "column",
    gap: "8px",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
});

export const leftSide = style([headerGrid, {
    gridColumnStart: "1",
    gridColumnEnd: "2",
}]);

export const rightSide = style([headerGrid, {
    display: "none",
    gridColumnStart: "2",
    gridColumnEnd: "3",
    "@media": {
        [mediaQuery.xl]: {
            display: "grid",
        },
    },
}]);