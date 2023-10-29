import { component$ } from "@builder.io/qwik";
import {
  contactBox,
  footer,
  footerTile,
  footerTileSubtitle,
  footerTileTitle,
  iconsBox,
  infoBox,
  subTitleText,
  infoBoxTile,
  titleText,
} from "./footer.css";

import DiscordSvg from "~/media/icons/discord.svg";
import TelegramSvg from "~/media/icons/telegram.svg";
import LinkedInSvg from "~/media/icons/linkedIn.svg";
import XSvg from "~/media/icons/x.svg";

export default component$(() => {
  return (
    <div class={footer}>
      <div class={contactBox}>
        <h1 class={titleText}>Let's Stay in Touch!</h1>
        <p>Find us Here</p>
        <div class={iconsBox}>
          <a
            href={"https://discord.com/invite/d9qn83Qnbv"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={DiscordSvg} width={30} height={30} alt="discord" />
          </a>
          <a
            href={"https://t.me/ksox_community"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={TelegramSvg} width={30} height={30} alt="telegram" />
          </a>
          <a
            href={"https://www.linkedin.com/company/ksox"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInSvg} width={30} height={30} alt="linkedin" />
          </a>
          <a
            href={"https://twitter.com/KsoxExchange"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={XSvg} width={30} height={30} alt="twitter" />
          </a>
        </div>
      </div>

      <div class={infoBox}>
        <div class={infoBoxTile}>
          <div class={subTitleText}>Products</div>
          <a
            href={"https://ksox.finance/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Ksox Exchange</div>
            <div class={footerTileSubtitle}>Ksox Exchange trading platform</div>
          </a>
          <a
            href={"https://ksox.finance/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Ksox Pay</div>
            <div class={footerTileSubtitle}>
              Ksox Pay crypto payment platform
            </div>
          </a>
          <a
            href={"https://ksox.finance/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Ksox Business</div>
            <div class={footerTileSubtitle}>
              Ksox Business crypto business platform
            </div>
          </a>
        </div>
        <div class={infoBoxTile}>
          <div class={subTitleText}>Technology</div>
          <a
            href={"https://www.rust-lang.org/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Rust</div>
            <div class={footerTileSubtitle}>
              Multi-paradigm, general-purpose programming language that
              emphasizes performance, type safety, and concurrency
            </div>
          </a>
          <a
            href={"https://qwik.builder.io/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Qwik</div>
            <div class={footerTileSubtitle}>
              Qwik is a new kind of web framework that can deliver instant
              loading web applications at any size or complexity
            </div>
          </a>
          <a
            href={"https://soliditylang.org/"}
            target="_blank"
            rel="noreferrer"
            class={footerTile}
          >
            <div class={footerTileTitle}>Solidity</div>
            <div class={footerTileSubtitle}>
              Language designed for developing smart contracts
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});
