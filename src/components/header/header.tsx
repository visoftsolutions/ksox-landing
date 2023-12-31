import { component$ } from "@builder.io/qwik";

import LogoSvg from "~/media/logo.svg";
import {
  LogoBox,
  LogoText,
  box,
  boxText,
  header,
  leftSide,
  rightSide,
  wrapper,
} from "./header.css";
import { navItem } from "./nav.css";
import DotSvg from "~/media/icons/dot.svg";
import SolutionsSvg from "~/media/icons/solutions.svg";
import ConnectSvg from "~/media/icons/connect.svg";
import GithubSvg from "~/media/icons/github.svg";

export default component$(() => {
  return (
    <div class={header}>
      <div class={wrapper}>
        <div class={leftSide}>
          <a href="#landing-page" class={[LogoBox, navItem]}>
            <img src={LogoSvg} width={50} height={50} alt="ksox" />
            <div class={LogoText}>KSOX</div>
          </a>
        </div>
        <div class={rightSide}>
          <a href={"#ksox-solutions"}>
            <div class={[box, navItem]}>
              <div class={boxText}>Solutions</div>
              <img
                src={SolutionsSvg}
                width={20}
                height={20}
                alt="solutions image"
              />
            </div>
          </a>
          <img src={DotSvg} width={5} height={5} alt="spacer" />
          <a href={"#contact"}>
            <div class={[box, navItem]}>
              <div class={boxText}>Connect</div>
              <img
                src={ConnectSvg}
                width={20}
                height={20}
                alt="contact image"
              />
            </div>
          </a>
          <img src={DotSvg} width={5} height={5} alt="spacer" />
          <a
            href={"https://github.com/visoftsolutions"}
            target="_blank"
            rel="noreferrer"
          >
            <div class={[box, navItem]}>
              <div class={boxText}>Source Code</div>
              <img src={GithubSvg} width={20} height={20} alt="github image" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});
