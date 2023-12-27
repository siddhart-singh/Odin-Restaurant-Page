"use strict";
import "./input.css";
import contentReset from "./contentReset";
import switchTab from "./switchActiveTab";
import createEl from "./elementCreator.js";
import MenuBannerA from "./image/menuBannerA.jpg";
import MenuBannerB from "./image/menuBannerB.jpg";
import MenuBannerC from "./image/menuBannerC.jpg";

export default function menu() {
  const content = contentReset();
  switchTab("menu");

  const pageBanner = createEl("div", ["page-banner"], "", content);

  const banner = createEl("div", ["banner"], "", pageBanner);

  const homeBannerA = createEl("img", ["banner-img"], "", banner, {
    src: MenuBannerA,
  });

  const homeBannerB = createEl("img", ["banner-img"], "", banner, {
    src: MenuBannerB,
  });

  const homeBannerC = createEl("img", ["banner-img"], "", banner, {
    src: MenuBannerC,
  });

  const menuContainer = createEl("div", ["menu-container"], "", content, {});

  const menuHeading = createEl("h2", ["menu-heading"], "Menu", menuContainer);

  const menuCard = createEl("div", ["menu-card"], "", menuContainer);

  const periPeriMushroomPizza = menuItem(
    menuCard,
    "periPeriMushroomPepperoni",
    ["NON-VEG", "SPICY"],
    "Peri Peri Mushroom Pepperoni",
    "16",
  );

  const bigSpicyWrap = menuItem(
    menuCard,
    "bigSpicyWrap",
    ["VEG"],
    "Big Spicy Panner Wrap",
    "10",
  );

  const farmFreshWrap = menuItem(
    menuCard,
    "farmFreshWrap",
    ["NON-VEG"],
    "Farm Fresh Chicken Wrap",
    "12",
  );

  const crispyBurger = menuItem(
    menuCard,
    "crispyBurger",
    ["VEG"],
    "Veg Cirspy Burger",
    "8",
  );

  const supremeBurger = menuItem(
    menuCard,
    "supremeBurger",
    ["NON-VEG"],
    "Supreme Burger",
    "10",
  );

  const fieryTaco = menuItem(
    menuCard,
    "fieryTaco",
    ["VEG", "SPICY"],
    "Fiery Taco",
    "6",
  );

  const loadedTaco = menuItem(
    menuCard,
    "loadedTaco",
    ["NON-VEG"],
    "Loaded Taco",
    "8",
  );

  const pickleTickle = menuItem(
    menuCard,
    "pickleTickle",
    ["VEG"],
    "Pickle Tickle",
    "4",
  );

  return [pageBanner, menuContainer];
}

function menuItem(menuCard, cardClass, tags = [], mealName, mealPrice) {
  const card = createEl("div", ["card", `${cardClass}`], "", menuCard);

  const tagContainer = createEl("div", ["tag-container"], "", card);

  tags.forEach((tag) => {
    const tagEl = createEl(
      "p",
      ["tag", `${tag.toLowerCase()}`],
      tag.toUpperCase(),
      tagContainer,
    );
  });

  const description = createEl("div", ["description"], "", card);

  const mealNameEl = createEl("p", ["meal-name"], mealName, description);

  const mealPriceEl = createEl(
    "p",
    ["meal-price"],
    `${mealPrice} `,
    description,
  );

  const mealPriceSpanEl = createEl(
    "span",
    ["meal-price-span"],
    "Stones",
    mealPriceEl,
  );
}
