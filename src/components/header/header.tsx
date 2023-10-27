import { component$ } from "@builder.io/qwik";

import LogoSvg from "~/media/logo.svg";
import { header, leftSide, rightSide, wrapper } from "./header.css";
import { navItem } from "./nav.css";
import DotSvg from "~/media/icons/dot.svg";

export default component$(() => {
  return (
    <div class={header}>
      <div class={wrapper}>
        <div class={leftSide}>
          <a href="#home">
            <img src={LogoSvg} width={200} height={40} />
          </a>
        </div>
        <div class={rightSide}>
          <a href={"#about"}>
            <div class={navItem}>About Products</div>
          </a>
          <img src={DotSvg} width={5} height={5} />
          <a href={"#contact"}>
            <div class={navItem}>Contact</div>
          </a>
          <img src={DotSvg} width={5} height={5} />
          <a href={"#about"}>
            <div class={navItem}>KSOX Exchange</div>
          </a>
          <img src={DotSvg} width={5} height={5} />
          <a href={"#about"}>
            <div class={navItem}>KSOX Pay</div>
          </a>
        </div>
      </div>
    </div>
  );
});
