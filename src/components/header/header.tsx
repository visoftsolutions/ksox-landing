import { component$ } from "@builder.io/qwik";

import LogoSvg from "~/media/logo.svg?jsx";
import { header, leftSide, rightSide, wrapper } from "./header.css";
import { navItem } from "./nav.css";
import DotSvg from "~/media/icons/dot.svg?jsx";

export default component$(() => {
  return (
    <div class={header}>
      <div class={wrapper}>
        <div class={leftSide}>
          <a href="#home">
            <LogoSvg height={"40px"} />
          </a>
        </div>
        <div class={rightSide}>
          <a href={"#about"}>
            <div class={navItem}>About Products</div>
          </a>
          <DotSvg width={"5px"} />
          <a href={"#contact"}>
            <div class={navItem}>Contact</div>
          </a>
          <DotSvg width={"5px"} />
          <a href={"#about"}>
            <div class={navItem}>KSOX Exchange</div>
          </a>
          <DotSvg width={"5px"} />
          <a href={"#about"}>
            <div class={navItem}>KSOX Pay</div>
          </a>
        </div>
      </div>
    </div>
  );
});
