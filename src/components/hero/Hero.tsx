import { component$ } from "@builder.io/qwik";
import { heroButton, hero, heroWrapper, contentWrapper, titleText, subText, heroImage, image } from "./hero.css";

interface ModalProps {
  image: string;
  title: string;
  text: string;
  buttonText1: string;
  buttonText2: string;
  link1: string;
  link2: string;
}

export default component$((props: ModalProps) => {
  return (
    <div
      class={hero}
      style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;"
    >
      <div class={heroWrapper}>
        <div class={contentWrapper}>
          <div>
            <h1 class={titleText}>
              {props.title}
            </h1>
            <p class={subText}>
              {props.text}
            </p>
            <div>
              <a
                href={props.link1}
                target="_blank"
                rel="noreferrer"
                style="padding-right: 20px;"
              >
                <button class={heroButton}>
                  {props.buttonText1}
                </button>
              </a>

              <a
                href={props.link2}
                target={props.link2.includes("#") ? "" : "_blank"}
                rel="noreferrer"
              >
                <button class={heroButton}>{props.buttonText2}</button>
              </a>
            </div>
          </div>
          <div class={heroImage}>
            <img
              src={props.image}
              alt="hero image"
              class={image}
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
