import { component$ } from "@builder.io/qwik";
import { centerInfo, contactBox, footer, iconsBox, infoWrapper, leftInfo, rightInfo, subTitleText, titleText } from "./footer.css";

import DiscordSvg from "~/media/icons/discord.svg?jsx";
import TelegramSvg from "~/media/icons/telegram.svg?jsx";
import LinkedInSvg from "~/media/icons/linkedIn.svg?jsx";
import XSvg from "~/media/icons/x.svg?jsx";

export default component$(() => {
  const contactItems = [
    {
      icon: <DiscordSvg />,
      link: "https://discord.com/invite/d9qn83Qnbv",
    },
    {
      icon: <TelegramSvg />,
      link: "https://t.me/ksox_community",
    },
    {
      icon: <LinkedInSvg />,
      link: "https://www.linkedin.com/company/ksox/",
    },
    {
      icon: <XSvg />,
      link: "https://twitter.com/KsoxExchange",
    },
  ];

  const productItems = [
    {
      title: "Ksox Pay",
      text: "Ksox payment processor platform",
      href: "https://ksox.finance/",
    },
    {
      title: "Ksox Exchange",
      text: "Ksox Exchange trading platform",
      href: "https://ksox.finance/",
    },
  ];

  const legalItems = [
    {
      title: "Privacy policy",
      text: "Our policies around privacy and data gathering",
      href: "/",
    },
    {
      title: "Cookies policy",
      text: "Our policies around cookies",
      href: "/",
    },
    {
      title: "Crowdsale terms",
      text: "Our policies around crowdsale and token",
      href: "/",
    },
  ];

  const technologyItems = [
    {
      title: "Cairo",
      text: "Turing-complete language for writing provable programs on blockchain",
      href: "https://www.cairo-lang.org/",
    },
    {
      title: "Solidity",
      text: "Language designed for developing smart contracts",
      href: "https://soliditylang.org/",
    },
    {
      title: "Rust",
      text: "Multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency",
      href: "https://www.rust-lang.org/",
    },
  ];

  return (
    <div class={footer}>
      <div class={contactBox}>
        <h1 class={titleText}>Let's Stay in Touch!</h1>
        <p>Find us Here</p>
        <div class={iconsBox}>
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div class={infoWrapper}>
        <div class={leftInfo}>
          <h3 class={subTitleText}>
            Product
          </h3>
          {productItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <h4 style="font-weight: 600; font-size: 16px;">{item.title}</h4>
              <p style="padding-bottom: 20px;">{item.text}</p>
            </a>
          ))}
          <a
            href="src/routes/Whitepaper/ksox-whitepaper.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <h4 style="font-weight: 600; font-size: 16px;">Whitepaper</h4>
            <p style="padding-bottom: 20px;">
              Documentation about Cryptocurrency Exchange & Payment Processor
            </p>
          </a>
        </div>

        <div class={centerInfo}>
          <h3 class={subTitleText}>Legal</h3>
          {legalItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <h4 style="font-weight: 600; font-size: 16px;">{item.title}</h4>
              <p style="padding-bottom: 20px;">{item.text}</p>
            </a>
          ))}
        </div>

        <div class={rightInfo}>
          <h3 class={subTitleText}>
            Technology
          </h3>
          {technologyItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <h4 style="font-weight: 600; font-size: 16px;">{item.title}</h4>
              <p style="padding-bottom: 20px;">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});
