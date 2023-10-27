import { Slot, component$ } from "@builder.io/qwik";
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
  hrefToApp: string;
  hrefToReadMore: string;
}

export default component$((props: ModalProps) => {
  return (
    <div class={product}>
      <div class={textBox}>
        <div class={titleText}>
          <Slot name="title" />
        </div>
        <div class={subText}>
          <Slot name="description" />
        </div>
        <div>
          <a href={props.hrefToApp} target="_blank" rel="noreferrer">
            <button class={infoButton} style="margin-right: 20px;">
              Launch App
            </button>
          </a>
          <a href={props.hrefToReadMore}>
            <button class={infoButton}>Read More</button>
          </a>
        </div>
      </div>
      <div class={productImage}>
        <a href={props.hrefToApp} target="_blank" rel="noreferrer">
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
