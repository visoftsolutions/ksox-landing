import { component$ } from "@builder.io/qwik";

import LogoSvg from "~/media/logo.svg";
import { box, header, leftSide, rightSide, wrapper } from "./header.css";
import { navItem } from "./nav.css";
import DotSvg from "~/media/icons/dot.svg";
import GithubSvg from "~/media/icons/github.svg";

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
          <a href={"#ksox-solutions"}>
            <div class={navItem}>Solutions</div>
          </a>
          <img src={DotSvg} width={5} height={5} />
          <a href={"#contact"}>
            <div class={navItem}>Contact</div>
          </a>
          <img src={DotSvg} width={5} height={5} />
          <a
            href={"https://github.com/visoftsolutions"}
            target="_blank"
            rel="noreferrer"
          >
            <div class={[box, navItem]}>
              <div>Source Code</div>
              <img src={GithubSvg} width={30} height={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});
