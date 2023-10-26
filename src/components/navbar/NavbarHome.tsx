import { component$, useSignal } from "@builder.io/qwik";

import logoNav from "/assets/LogoNav.svg";
import DotIcon from "/assets/icons/DotIcon.svg";
import BarsIcon from "/assets/icons/BarsIcon.svg";
import TimesIcon from "/assets/icons/TimesIcon.svg";
import Discord from "/assets/icons/Discord.svg";
import Telegram from "/assets/icons/Telegram.svg";
import LinkedIn from "/assets/icons/LinkedIn.svg";
import XIcon from "/assets/icons/XIcon.svg";
import { leftSide, navbar, rightSide, wrapper, rightSideMobile, navItem, smWrapper, sm, mobile, hidden } from "./navbarhome.css";

export default component$(() => {
  const NavItems = [
    {
      id: 2,
      name: "About Products",
      href: "#about",
    },
    {
      id: 3,
      name: "Contact",
      href: "#contact",
    },
    {
      id: 4,
      name: "KSOX Pay",
      href: "/PaymentProcessor",
    },
    {
      id: 5,
      name: "KSOX Exchange",
      href: "/Exchange",
    },
  ];

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

  const mobileNav = useSignal(false);

  return (
    <div
    class={navbar}
    style="box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);"
    >
      <div class={wrapper}>
        <div class={leftSide}>
          <a href="#home">
            <img src={logoNav} alt="logo" width={110} height={50} />
          </a>
        </div>

        <div class={rightSide}>

          <>
            <a href="/ksox-whitepaper.pdf" target="_blank" rel="noreferrer">
              <h3 class={navItem}>Whitepaper</h3>
            </a>
            <img src={DotIcon} alt="dot" width={5} height={5} />
          </>

          {NavItems.map((item) =>
            item.id <= 4 ? (
              <>
                <a href={item.href} key={item.id}>
                  <h3 class={navItem}>
                    {item.name}
                  </h3>
                </a>
                <img src={DotIcon} alt="dot" width={5} height={5} />
              </>
            ) : (
              <div key={item.id}>
                <a href={item.href}>
                  <h3 class={navItem}>
                    {item.name}
                  </h3>
                </a>
              </div>
            ),
          )}
        </div>

        <div
          class={rightSideMobile}
          onClick$={() => (mobileNav.value = !mobileNav.value)}
        >
          {mobileNav.value ? (
            <>
              <p style="padding-top: 2px;">Close</p>
              <img
                src={TimesIcon}
                alt="close menu icon"
                width={16}
                height={16}
              />
            </>
          ) : (
            <img src={BarsIcon} alt="open menu icon" width={16} height={16} />
          )}
        </div>
      </div>

      <div class={mobileNav.value ? mobile : hidden}>
        <div
          style="height: 100vh; background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;"
        >
          <div style="margin-top: 80px;">
            <a href="/ksox-whitepaper.pdf" target="_blank" rel="noreferrer">
              <h3 style="text-align: center; padding-top: 32px;">Whitepaper</h3>
            </a>
            {NavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick$={() => (mobileNav.value = !mobileNav.value)}
              >
                <h3 style="text-align: center; padding-top: 32px;">{item.name}</h3>
              </a>
            ))}
          </div>

          <div class={sm}>
            <div class={smWrapper}>
              {contactItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
