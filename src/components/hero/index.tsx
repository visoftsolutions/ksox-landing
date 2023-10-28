import { component$ } from "@builder.io/qwik";
import {
  hero,
  heroBox,
  heroContentBox,
  heroImage,
  subText,
  titleText,
} from "./index.css";
import HeroSvg from "~/media/home/hero.svg";

export default component$(() => {
  return (
    <div class={hero}>
      <div class={heroBox}>
        <div class={heroContentBox}>
          <h1 class={titleText}>
            The Ultimate Nexus of Exchange, Transfer, and Business Solutions
          </h1>
          <p class={subText}>
            Exchange, Transfer, build Crypto Business with us!
          </p>
        </div>
        <img
          src={HeroSvg}
          alt="hero image"
          width={320}
          height={320}
          class={heroImage}
        />
      </div>
    </div>
  );
});
