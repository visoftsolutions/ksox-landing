import { component$ } from "@builder.io/qwik";
import { hero, heroContent, heroImage, subText, titleText } from "./index.css";
import HeroSvg from "~/media/home/hero.svg";

export default component$(() => {
  return (
    <div class={hero}>
      <div class={heroContent}>
        <h1 class={titleText}>
          Key to a Future Free From Financial Constraints
        </h1>
        <p class={subText}>
          Our mission at KSOX is to design a user-centric ecosystem that
          democratizes financial control
        </p>
      </div>
      <div class={heroImage}>
        <img src={HeroSvg} alt="hero image" width={480} height={480} />
      </div>
    </div>
  );
});
