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
            Key to a Future Free From Financial Constraints
          </h1>
          <p class={subText}>
            Our mission at KSOX is to design a user-centric ecosystem that
            democratizes financial control
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
