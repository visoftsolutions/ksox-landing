import { component$, useSignal } from "@builder.io/qwik";

import logoNav from "/assets/LogoNav.svg";
import DotIcon from "/assets/icons/DotIcon.svg";
import BarsIcon from "/assets/icons/BarsIcon.svg";
import TimesIcon from "/assets/icons/TimesIcon.svg";
import Discord from "/assets/icons/Discord.svg";
import Telegram from "/assets/icons/Telegram.svg";
import LinkedIn from "/assets/icons/LinkedIn.svg";
import XIcon from "/assets/icons/XIcon.svg";
import { leftSide, navbar, rightSide, wrapper } from "./navbarproduct.css";

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
            <img src={logoNav} alt="logo" width={120} height={60} />
          </a>
        </div>

        <div class="hidden lg:flex items-center">
          {NavItems.map((item) =>
            item.id <= 1 ? (
              <div key={item.id} class="flex">
                <a href={item.href}>
                  <h3 class="px-5 hover:text-white duration-300">
                    {item.name}
                  </h3>
                </a>
                <img src={DotIcon} alt="dot" width={5} height={5} />
              </div>
            ) : (
              <div key={item.id}>
                <a href={item.href}>
                  <h3 class="pl-5 hover:text-white duration-300">
                    {item.name}
                  </h3>
                </a>
              </div>
            ),
          )}
        </div>

        <div class={rightSide}>
          <a href={props.linkToApp} target="_blank" rel="noreferrer">
            <button>
              Launch App
            </button>
          </a>
        </div>

        <div
          class="lg:hidden pt-2"
          onClick$={() => (mobileNav.value = !mobileNav.value)}
        >
          {mobileNav.value ? (
            <div class="flex">
              <p class="pr-4 pt-1">Close</p>
              <img
                src={TimesIcon}
                alt="close menu icon"
                width={16}
                height={16}
              />
            </div>
          ) : (
            <img src={BarsIcon} alt="open menu icon" width={16} height={16} />
          )}
        </div>
      </div>

      <div class={mobileNav.value ? "lg:hidden" : "hidden"}>
        <button class="flex mx-auto mt-20 mb-10 text-xl border-2 py-2 px-4 rounded-full border-blue-700 hover:border-blue-500 duration-300">
          <a href={props.linkToApp} target="_blank" rel="noreferrer">
            Launch App
          </a>
        </button>

        <div
          class="h-screen"
          style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;"
        >
          <div>
            {NavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                class="flex mx-auto justify-center pt-8"
                onClick$={() => (mobileNav.value = !mobileNav.value)}
              >
                <h2>{item.name}</h2>
              </a>
            ))}
          </div>

          <div class="flex justify-center mt-20 py-4 ">
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                class="px-6"
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
