import { component$ } from "@builder.io/qwik";
import {
  product,
  infoButton,
  productImage,
  titleText,
  textBox,
  subText,
} from "./product.css";

interface ModalProps {
  image: string;
  title: string;
  text: string;
  linkToApp: string;
  pathToReadMore: string;
}

export default component$((props: ModalProps) => {
  return (
    <div class={product}>
      <div class={textBox}>
        <h2 class={titleText}>{props.title}</h2>
        <p class={subText}>{props.text}</p>
        <div>
          <a href={props.linkToApp} target="_blank" rel="noreferrer">
            <button class={infoButton} style="margin-right: 20px;">
              Launch App
            </button>
          </a>
          <a href={props.pathToReadMore}>
            <button class={infoButton}>Read More</button>
          </a>
        </div>
      </div>
      <div class={productImage}>
        <a href={props.linkToApp} target="_blank" rel="noreferrer">
          <img
            src={props.image}
            style="border-radius: 1rem; box-shadow: 8px 8px 45px 0px rgba(66, 68, 90, 0.2); aspect-ratio: 16/9;  width: 100%; height: auto;"
            width={700}
            height={400}
          />
        </a>
      </div>
    </div>
  );
});
