import { component$, useSignal } from "@builder.io/qwik";

import logoNav from "/assets/LogoNav.svg";
import DotIcon from "/assets/icons/DotIcon.svg";
import BarsIcon from "/assets/icons/BarsIcon.svg";
import TimesIcon from "/assets/icons/TimesIcon.svg";
import Discord from "/assets/icons/Discord.svg";
import Telegram from "/assets/icons/Telegram.svg";
import LinkedIn from "/assets/icons/LinkedIn.svg";
import XIcon from "/assets/icons/XIcon.svg";
import { center, hidden, launchButton, leftSide, mobile, navItem, navbar, rightSide, rightSideMobile, smWrapper, wrapper } from "./navbarproduct.css";

interface ModalProps {
  linkToApp?: string;
}

export default component$((props: ModalProps) => {
  const NavItems = [
    {
      id: 0,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "KSOX Pay",
      href: "/PaymentProcessor",
    },
    {
      id: 2,
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
    <div class={navbar}>
      <div class={wrapper}>
        <div class={leftSide}>
          <a href="/">
            <img src={logoNav} alt="logo" width={110} height={50} />
          </a>
        </div>

        <div class={center}>
          {NavItems.map((item) =>
            item.id <= 1 ? (
              <>
                <a href={item.href} key={item.id} >
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

        <div class={rightSide}>
          <a href={props.linkToApp} target="_blank" rel="noreferrer">
            <button class={launchButton}>
              Launch App
            </button>
          </a>
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
        <div style="text-align: center; margin-top: 60px; margin-bottom: 20px;">
          <a href={props.linkToApp} target="_blank" rel="noreferrer">
            <button class={launchButton}>
              Launch App
            </button>
          </a>
        </div>

        <div
          style="height: 100vh; background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;"
        >
          <div>
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

          <div class={smWrapper}>
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style="padding-right: 20px; padding-left: 20px;"
              >
                <img src={item.icon} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
