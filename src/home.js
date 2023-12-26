"use strict";
import createEl from "./elementCreator";
import switchTab from "./switchActiveTab";
import contentReset from "./contentReset";
import "./input.css";
import HomeBannerA from "./image/homeBannerA.jpg";
import HomeBannerB from "./image/homeBannerB.jpg";
import HomeBannerC from "./image/homeBannerC.jpg";
import pizza from "./image/pizza.jpg";
import pasta from "./image/pasta.jpg";
import burger from "./image/burger.jpg";

export default function home() {
  switchTab("home");

  const content = contentReset();

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
  const pageRedImgDiv = createEl(
    "div",
    ["page-img-div", "page-red"],
    "",
    pageRed,
    {},
  );
  const pageRedImg = createEl(
    "img",
    ["page-img", "pasta-img"],
    "",
    pageRedImgDiv,
    { src: pasta },
  );
  const pageRedP = createEl(
    "p",
    ["page-para", "pasta"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore esse ex blanditiis repellat itaque!",
    pageRedImgDiv,
  );

  const pageBlue = createEl("div", ["page"], "", pageBanner);
  const pageBlueImgDiv = createEl(
    "div",
    ["page-img-div", "page-blue"],
    "",
    pageBlue,
    {},
  );
  const pageBlueImg = createEl(
    "img",
    ["page-img", "burger-img"],
    "",
    pageBlueImgDiv,
    { src: burger },
  );
  const pageBlueP = createEl(
    "p",
    ["page-para", "burger"],
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laboriosam quaerat perferendis quam maiores possimus?",
    pageBlueImgDiv,
  );

  const pageYellow = createEl("div", ["page"], "", pageBanner);
  const pageYellowImgDiv = createEl(
    "div",
    ["page-img-div", "page-yellow"],
    "",
    pageYellow,
    {},
  );
  const pageYellowImg = createEl(
    "img",
    ["page-img", "pizza-img"],
    "",
    pageYellowImgDiv,
    { src: pizza },
  );
  const pageYellowP = createEl(
    "p",
    ["page-para", "pizza"],
    "Lorem ipsum dolor sit amet.",
    pageYellowImgDiv,
  );

  return [pageBanner, pageRed, pageBlue, pageYellow];
}
