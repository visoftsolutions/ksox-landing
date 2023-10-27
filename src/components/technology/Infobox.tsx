import { component$ } from "@builder.io/qwik";
import {
  box,
  imageLeft,
  imageRight,
  subText,
  textBoxLeft,
  textBoxRight,
  titleText,
  wrapper,
} from "./infobox.css";

interface ModalProps {
  image: string;
  title: string;
  text: string;
  rightSide: boolean;
}

export default component$((props: ModalProps) => {
  return (
    <div class={box}>
      <div class={wrapper}>
        {props.rightSide ? (
          <>
            <div class={textBoxLeft}>
              <h2 class={titleText}>{props.title}</h2>
              <p class={subText}>{props.text}</p>
            </div>
            <div class={imageLeft}>
              <img src={props.image} width={280} height={200} />
            </div>
          </>
        ) : (
          <>
            <div class={imageRight}>
              <img src={props.image} width={280} height={200} />
            </div>
            <div class={textBoxRight}>
              <h2 class={titleText}>{props.title}</h2>
              <p class={subText}>{props.text}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
