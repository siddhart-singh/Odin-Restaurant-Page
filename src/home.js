"use strict";
import createEl from "./elementCreator";
import "./input.css";
import HomeBG from "./image/homeBG.jpg";
import RedHomeBG from "./image/redHomeBG.jpg";
import BlueHomeBG from "./image/blueHomeBG.jpg";
import YellowHomeBG from "./image/yellowHomeBG.jpg";
import HomeBannerA from "./image/homeBannerA.jpg";
import HomeBannerB from "./image/homeBannerB.jpg";
import HomeBannerC from "./image/homeBannerC.jpg";

export default function home() {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === "home") {
      btn.classList.add("active");
    }
  });

  const content = document.querySelector("#content");
  content.classList.add("home-content");

  const pageBanner = createEl("div", ["page-banner"], "", content);

  const banner = createEl("div", ["banner"], "", pageBanner);

  const homeBannerA = createEl("img", ["banner-img"], "", banner, {
    src: HomeBannerA,
  });

  const homeBannerB = createEl("img", ["banner-img"], "", banner, {
    src: HomeBannerB,
  });

  const homeBannerC = createEl("img", ["banner-img"], "", banner, {
    src: HomeBannerC,
  });

  const pageRed = createEl("div", ["page"], "", pageBanner);
  const pageRedImg = createEl("img", ["page-img"], "", pageRed, {
    src: RedHomeBG,
  });

  const pageBlue = createEl("div", ["page"], "", pageBanner);
  const pageBlueImg = createEl("img", ["page-img"], "", pageBlue, {
    src: BlueHomeBG,
  });

  const pageYellow = createEl("div", ["page"], "", pageBanner);
  const pageYellowImg = createEl("img", ["page-img"], "", pageYellow, {
    src: YellowHomeBG,
  });

  return content;
}
