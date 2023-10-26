import { component$ } from "@builder.io/qwik";
import { centerInfo, contactBox, iconsBox, infoWrapper, leftInfo, rightInfo, subTitleText, titleText, wrapper } from "./footer.css";

import Discord from "/assets/icons/Discord.svg";
import Telegram from "/assets/icons/Telegram.svg";
import LinkedIn from "/assets/icons/LinkedIn.svg";
import XIcon from "/assets/icons/XIcon.svg";

export default component$(() => {
  const contactItems = [
    {
      id: 1,
      icon: Discord,
      link: "https://discord.com/invite/d9qn83Qnbv",
    },
    {
      id: 2,
      icon: Telegram,
      link: "https://t.me/ksox_community",
    },
    {
      id: 3,
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/ksox/",
    },
    {
      id: 4,
      icon: XIcon,
      link: "https://twitter.com/KsoxExchange",
    },
  ];

  const productItems = [
    {
      id: 1,
      title: "Payment Processor",
      text: "Ksox pay apps",
      href: "https://pay.ksox.finance/",
    },
    {
      id: 2,
      title: "Exchange app",
      text: "Ksox Exchange trading platform",
      href: "https://pay.ksox.finance/",
    },
  ];

  const legalItems = [
    {
      id: 1,
      title: "Privacy policy",
      text: "Our policies around privacy and data gathering",
      href: "/",
    },
    {
      id: 2,
      title: "Cookies policy",
      text: "Our policies around cookies",
      href: "/",
    },
    {
      id: 3,
      title: "Crowdsale terms",
      text: "Our policies around crowdsale and token",
      href: "/",
    },
  ];

  const technologyItems = [
    {
      id: 1,
      title: "Cairo",
      text: "Turing-complete language for writing provable programs on blockchain",
      href: "https://www.cairo-lang.org/",
    },
    {
      id: 2,
      title: "Solidity",
      text: "Language designed for developing smart contracts",
      href: "https://soliditylang.org/",
    },
    {
      id: 3,
      title: "Rust",
      text: "Multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency",
      href: "https://www.rust-lang.org/",
    },
  ];

  return (
    <div
      style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%; padding-bottom: 100px;"
    >
      <div class={wrapper}>
        <div
          class={contactBox}
          id="contact"
        >
          <div style="text-align: center;">
            <h1 class={titleText}>Let's Stay in Touch!</h1>
            <p>Find us Here</p>
              <div class={iconsBox}>
                {contactItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={item.icon} width={25} height={25}/>
                  </a>
                ))}
              </div>
          </div>
        </div>

        <div class={infoWrapper}>
          <div class={leftInfo}>
            <h3 class={subTitleText}>
              Product
            </h3>
            {productItems.map((item) => (
              <a
                key={item.id}
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
            {legalItems.map((item) => (
              <a
                key={item.id}
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
            {technologyItems.map((item) => (
              <a
                key={item.id}
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
    </div>
  );
});
