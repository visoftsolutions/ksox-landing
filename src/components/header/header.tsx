import { component$ } from "@builder.io/qwik";

import LogoSvg from "~/media/logo.svg?jsx";
import { header, leftSide, rightSide, wrapper } from "./header.css";

export default component$(() => {
    return (
        <div class={header}>
            <div class={wrapper}>
                <div class={leftSide}><a href="#home"><LogoSvg height={"40px"} /></a></div>
                <div class={rightSide}>

                </div>
            </div>
        </div>
    );
});
