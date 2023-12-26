/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/redHomeBG.jpg */ "./src/image/redHomeBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/blueHomeBG.jpg */ "./src/image/blueHomeBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/yellowHomeBG.jpg */ "./src/image/yellowHomeBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/menu/bigSpicyWrap.jpg */ "./src/image/menu/bigSpicyWrap.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kalnia:wght@500&family=Lilita+One&family=Mukta:wght@500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.0 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.left-4 {
  left: 1rem;
}
.top-4 {
  top: 1rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.flex {
  display: flex;
}
.h-96 {
  height: 24rem;
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.w-96 {
  width: 24rem;
}
.w-full {
  width: 100%;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border-4 {
  border-width: 4px;
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(34, 197, 94, 1);
  background-color: rgba(34, 197, 94, var(--tw-bg-opacity));
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.font-mukta {
  font-family: 'Mukta', sans-serif;
}
.font-lilitaOne {
  font-family: 'Lilita One', sans-serif;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.font-extrabold {
  font-weight: 800;
}
.font-bold {
  font-weight: 700;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.body {
  width: 100vw;
  overflow-x: hidden;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 251, 235, 1);
  background-color: rgba(255, 251, 235, var(--tw-bg-opacity));
}

.nav {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1280px;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem;
}

.logo {
  font-family: 'Kalnia', serif;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.navigation {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  border-width: 1px;
  border-left-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: 'Mukta', sans-serif;
  font-weight: 700;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.nav-btn:hover {
  --tw-shadow: 5px 5px rgba(0, 0, 0);
  --tw-shadow-colored: 5px 5px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 5px 5px rgba(0, 0, 0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}

.active-home {
  --tw-shadow: 4px 4px rgb(34, 197, 94),4.75px 4.75px rgb(0,0,0);
  --tw-shadow-colored: 4px 4px var(--tw-shadow-color), 4.75px 4.75px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 4px 4px rgb(34, 197, 94),4.75px 4.75px rgb(0,0,0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}

.active-menu {
  --tw-shadow: 0px 0px rgb(0,0,0);
  --tw-shadow-colored: 0px 0px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0px 0px rgb(0,0,0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.active-contact {
  --tw-shadow: 0px 0px rgb(0,0,0);
  --tw-shadow-colored: 0px 0px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0px 0px rgb(0,0,0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}

.content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}

.page-banner {
  width: 100%;
}

.banner {
  display: grid;
  border-collapse: collapse;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}

.banner-img {
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}

.page {
  position: sticky;
  top: 0px;
  height: 100vh;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.page-img-div {
  position: relative;
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  background-size: cover;
  background-position: center;
}

.page-img {
  position: absolute;
  width: 100%;
}

.burger-img {
  opacity: 0.9;
}
.pizza-img {
  opacity: 0.7;
}
.pasta-img {
  opacity: 0.8;
}

.page-red {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.page-blue {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.page-yellow {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.page-para {
  position: absolute;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  font-family: 'Lilita One', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  text-shadow: 4px 4px #000;
}

.pizza {
  top: 33.333333%;
  font-size: 8rem;
  line-height: 1;
}
.burger {
  top: 3.5rem;
  font-size: 3rem;
  line-height: 1;
}
.pasta {
  top: 3.5rem;
  font-size: 3rem;
  line-height: 1;
}

.card {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: 100%;
}

.card:hover {
  background-size: 110%;
}

.description {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(69, 69, 69, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.group:hover .group-hover\\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.group:hover .group-hover\\:font-mukta {
  font-family: 'Mukta', sans-serif;
}

.group:hover .group-hover\\:text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
`, "",{"version":3,"sources":["webpack://./src/input.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@import url(\"https://fonts.googleapis.com/css2?family=Kalnia:wght@500&family=Lilita+One&family=Mukta:wght@500;600;700;800&display=swap\");\n\n.body {\n  @apply w-screen overflow-x-hidden bg-amber-50;\n}\n\n.nav {\n  @apply mx-auto flex max-w-screen-xl items-center justify-between p-3.5;\n}\n\n.logo {\n  @apply font-kalnia text-4xl;\n}\n\n.navigation {\n  @apply flex gap-4;\n}\n\n.nav-btn {\n  @apply border border-s border-black px-6 py-2 font-mukta font-bold transition-shadow hover:shadow-nav;\n}\n\n.active-home {\n  @apply shadow-btnHome;\n}\n\n.active-menu {\n  @apply shadow-btnMenu;\n}\n.active-contact {\n  @apply shadow-btnContact;\n}\n\n.content {\n  @apply mx-auto max-w-screen-xl px-3.5;\n}\n\n.page-banner {\n  @apply w-full;\n}\n\n.banner {\n  @apply grid border-collapse grid-cols-3 grid-rows-1 border border-4 border-black;\n}\n\n.banner-img {\n  @apply h-full w-full border-collapse border border-4 border-black;\n}\n\n.page {\n  @apply sticky top-0 h-screen w-full py-8;\n}\n\n.page-img-div {\n  @apply relative h-full w-full border-collapse overflow-hidden border border-4 border-black bg-cover bg-center;\n}\n\n.page-img {\n  @apply absolute w-full;\n}\n\n.burger-img {\n  @apply opacity-90;\n}\n.pizza-img {\n  @apply opacity-70;\n}\n.pasta-img {\n  @apply opacity-80;\n}\n\n.page-red {\n  background-image: url(\"./image/redHomeBG.jpg\");\n}\n\n.page-blue {\n  background-image: url(\"./image/blueHomeBG.jpg\");\n}\n\n.page-yellow {\n  background-image: url(\"./image/yellowHomeBG.jpg\");\n}\n\n.page-para {\n  @apply absolute px-4  text-center font-lilitaOne font-bold tracking-wider text-white;\n  text-shadow: 4px 4px #000;\n}\n\n.pizza {\n  @apply top-1/3 text-9xl;\n}\n.burger {\n  @apply top-14 text-5xl;\n}\n.pasta {\n  @apply top-14 text-5xl;\n}\n\n.card {\n  background-image: url(./image/menu/bigSpicyWrap.jpg);\n  background-size: 100%;\n}\n\n.card:hover {\n  background-size: 110%;\n}\n\n.description {\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(69, 69, 69, 1) 50%,\n    rgba(255, 255, 255, 0) 100%\n  );\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contentReset.js":
/*!*****************************!*\
  !*** ./src/contentReset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contentReset)
/* harmony export */ });
function contentReset() {
  const content = document.querySelector("#content");
  content.innerText = "";
  return content;
}


/***/ }),

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEl)
/* harmony export */ });


function createEl(
  type,
  classes,
  content,
  parentEl,
  attributes = {},
) {
  const el = document.createElement(type);
  el.classList.add(...classes);
  el.textContent = content;
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
  }

  if (parentEl instanceof Element) {
    parentEl.appendChild(el);
  }
  return el;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _switchActiveTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switchActiveTab */ "./src/switchActiveTab.js");
/* harmony import */ var _contentReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentReset */ "./src/contentReset.js");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _image_homeBannerA_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/homeBannerA.jpg */ "./src/image/homeBannerA.jpg");
/* harmony import */ var _image_homeBannerB_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/homeBannerB.jpg */ "./src/image/homeBannerB.jpg");
/* harmony import */ var _image_homeBannerC_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/homeBannerC.jpg */ "./src/image/homeBannerC.jpg");
/* harmony import */ var _image_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/pizza.jpg */ "./src/image/pizza.jpg");
/* harmony import */ var _image_pasta_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/pasta.jpg */ "./src/image/pasta.jpg");
/* harmony import */ var _image_burger_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image/burger.jpg */ "./src/image/burger.jpg");












function home() {
  (0,_switchActiveTab__WEBPACK_IMPORTED_MODULE_1__["default"])("home");

  const content = (0,_contentReset__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const pageBanner = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["page-banner"], "", content);

  const banner = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["banner"], "", pageBanner);

  const homeBannerA = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("img", ["banner-img"], "", banner, {
    src: _image_homeBannerA_jpg__WEBPACK_IMPORTED_MODULE_4__,
  });

  const homeBannerB = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("img", ["banner-img"], "", banner, {
    src: _image_homeBannerB_jpg__WEBPACK_IMPORTED_MODULE_5__,
  });

  const homeBannerC = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("img", ["banner-img"], "", banner, {
    src: _image_homeBannerC_jpg__WEBPACK_IMPORTED_MODULE_6__,
  });

  const pageRed = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["page"], "", pageBanner);
  const pageRedImgDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    ["page-img-div", "page-red"],
    "",
    pageRed,
    {},
  );
  const pageRedImg = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "img",
    ["page-img", "pasta-img"],
    "",
    pageRedImgDiv,
    { src: _image_pasta_jpg__WEBPACK_IMPORTED_MODULE_8__ },
  );
  const pageRedP = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    ["page-para", "pasta"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore esse ex blanditiis repellat itaque!",
    pageRedImgDiv,
  );

  const pageBlue = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["page"], "", pageBanner);
  const pageBlueImgDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    ["page-img-div", "page-blue"],
    "",
    pageBlue,
    {},
  );
  const pageBlueImg = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "img",
    ["page-img", "burger-img"],
    "",
    pageBlueImgDiv,
    { src: _image_burger_jpg__WEBPACK_IMPORTED_MODULE_9__ },
  );
  const pageBlueP = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    ["page-para", "burger"],
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laboriosam quaerat perferendis quam maiores possimus?",
    pageBlueImgDiv,
  );

  const pageYellow = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["page"], "", pageBanner);
  const pageYellowImgDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    ["page-img-div", "page-yellow"],
    "",
    pageYellow,
    {},
  );
  const pageYellowImg = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "img",
    ["page-img", "pizza-img"],
    "",
    pageYellowImgDiv,
    { src: _image_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__ },
  );
  const pageYellowP = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    ["page-para", "pizza"],
    "Lorem ipsum dolor sit amet.",
    pageYellowImgDiv,
  );

  return [pageBanner, pageRed, pageBlue, pageYellow];
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettier */ "./node_modules/prettier/standalone.mjs");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");




function homepage() {
  const nav = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("nav", ["nav"], "", "", {});

  const logo = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("div", ["logo"], "Lorem", nav, {});

  const navigation = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("div", ["navigation"], "", nav, {});

  const homeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("button", ["nav-btn"], "Home", navigation, {
    "data-id": "home",
  });
  const menuBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("button", ["nav-btn"], "Menu", navigation, {
    "data-id": "menu",
  });
  const contactBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("button", ["nav-btn"], "Contact", navigation, {
    "data-id": "contact",
  });

  const content = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__["default"])("div", [], "", "", { id: "content" });

  return [nav, content];
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _contentReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentReset */ "./src/contentReset.js");




function menu() {
  (0,_contentReset__WEBPACK_IMPORTED_MODULE_1__["default"])();

  return [];
}


/***/ }),

/***/ "./src/switchActiveTab.js":
/*!********************************!*\
  !*** ./src/switchActiveTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchTab)
/* harmony export */ });
function switchTab(tab) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === `${tab}`) {
      console.log(btn);
      btn.classList.add(`active-${tab}`);
    }
  });
}


/***/ }),

/***/ "./src/image/blueHomeBG.jpg":
/*!**********************************!*\
  !*** ./src/image/blueHomeBG.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11523a022ffa86aee910.jpg";

/***/ }),

/***/ "./src/image/burger.jpg":
/*!******************************!*\
  !*** ./src/image/burger.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9df433e0f41a68d44c4.jpg";

/***/ }),

/***/ "./src/image/homeBannerA.jpg":
/*!***********************************!*\
  !*** ./src/image/homeBannerA.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5af5366ce03f03dc797e.jpg";

/***/ }),

/***/ "./src/image/homeBannerB.jpg":
/*!***********************************!*\
  !*** ./src/image/homeBannerB.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "781dcdf71ab35590e3e6.jpg";

/***/ }),

/***/ "./src/image/homeBannerC.jpg":
/*!***********************************!*\
  !*** ./src/image/homeBannerC.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60a9ed22e6a6e721e9b2.jpg";

/***/ }),

/***/ "./src/image/menu/bigSpicyWrap.jpg":
/*!*****************************************!*\
  !*** ./src/image/menu/bigSpicyWrap.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c50518d0573761077b.jpg";

/***/ }),

/***/ "./src/image/pasta.jpg":
/*!*****************************!*\
  !*** ./src/image/pasta.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9605294e653df3aae4c7.jpg";

/***/ }),

/***/ "./src/image/pizza.jpg":
/*!*****************************!*\
  !*** ./src/image/pizza.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f06622ae2b0705d34ac3.jpg";

/***/ }),

/***/ "./src/image/redHomeBG.jpg":
/*!*********************************!*\
  !*** ./src/image/redHomeBG.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7afe27618008c00262f3.jpg";

/***/ }),

/***/ "./src/image/yellowHomeBG.jpg":
/*!************************************!*\
  !*** ./src/image/yellowHomeBG.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4101f538e4d9b3941615.jpg";

/***/ }),

/***/ "./node_modules/prettier/standalone.mjs":
/*!**********************************************!*\
  !*** ./node_modules/prettier/standalone.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __debug: () => (/* binding */ ri),
/* harmony export */   check: () => (/* binding */ ei),
/* harmony export */   "default": () => (/* binding */ qc),
/* harmony export */   doc: () => (/* binding */ er),
/* harmony export */   format: () => (/* binding */ cu),
/* harmony export */   formatWithCursor: () => (/* binding */ au),
/* harmony export */   getSupportInfo: () => (/* binding */ ti),
/* harmony export */   util: () => (/* binding */ Qt),
/* harmony export */   version: () => (/* binding */ Du)
/* harmony export */ });
var lu=Object.create;var $e=Object.defineProperty;var fu=Object.getOwnPropertyDescriptor;var Fu=Object.getOwnPropertyNames;var pu=Object.getPrototypeOf,du=Object.prototype.hasOwnProperty;var mu=(e,t)=>()=>(e&&(t=e(e=0)),t);var Me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),We=(e,t)=>{for(var r in t)$e(e,r,{get:t[r],enumerable:!0})},nr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Fu(t))!du.call(e,o)&&o!==r&&$e(e,o,{get:()=>t[o],enumerable:!(n=fu(t,o))||n.enumerable});return e};var he=(e,t,r)=>(r=e!=null?lu(pu(e)):{},nr(t||!e||!e.__esModule?$e(r,"default",{value:e,enumerable:!0}):r,e)),Eu=e=>nr($e({},"__esModule",{value:!0}),e);var Cu=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var ht=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};var ce=(e,t,r)=>(Cu(e,t,"access private method"),r);var or=Me(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.default=ur;function ur(){}ur.prototype={diff:function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.callback;typeof n=="function"&&(o=n,n={}),this.options=n;var u=this;function i(F){return o?(setTimeout(function(){o(void 0,F)},0),!0):F}t=this.castInput(t),r=this.castInput(r),t=this.removeEmpty(this.tokenize(t)),r=this.removeEmpty(this.tokenize(r));var s=r.length,D=t.length,a=1,c=s+D;n.maxEditLength&&(c=Math.min(c,n.maxEditLength));var d=[{newPos:-1,components:[]}],f=this.extractCommon(d[0],r,t,0);if(d[0].newPos+1>=s&&f+1>=D)return i([{value:this.join(r),count:r.length}]);function p(){for(var F=-1*a;F<=a;F+=2){var m=void 0,E=d[F-1],C=d[F+1],g=(C?C.newPos:0)-F;E&&(d[F-1]=void 0);var h=E&&E.newPos+1<s,B=C&&0<=g&&g<D;if(!h&&!B){d[F]=void 0;continue}if(!h||B&&E.newPos<C.newPos?(m=yu(C),u.pushComponent(m.components,void 0,!0)):(m=E,m.newPos++,u.pushComponent(m.components,!0,void 0)),g=u.extractCommon(m,r,t,F),m.newPos+1>=s&&g+1>=D)return i(gu(u,m.components,r,t,u.useLongestToken));d[F]=m}a++}if(o)(function F(){setTimeout(function(){if(a>c)return o();p()||F()},0)})();else for(;a<=c;){var l=p();if(l)return l}},pushComponent:function(t,r,n){var o=t[t.length-1];o&&o.added===r&&o.removed===n?t[t.length-1]={count:o.count+1,added:r,removed:n}:t.push({count:1,added:r,removed:n})},extractCommon:function(t,r,n,o){for(var u=r.length,i=n.length,s=t.newPos,D=s-o,a=0;s+1<u&&D+1<i&&this.equals(r[s+1],n[D+1]);)s++,D++,a++;return a&&t.components.push({count:a}),t.newPos=s,D},equals:function(t,r){return this.options.comparator?this.options.comparator(t,r):t===r||this.options.ignoreCase&&t.toLowerCase()===r.toLowerCase()},removeEmpty:function(t){for(var r=[],n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r},castInput:function(t){return t},tokenize:function(t){return t.split("")},join:function(t){return t.join("")}};function gu(e,t,r,n,o){for(var u=0,i=t.length,s=0,D=0;u<i;u++){var a=t[u];if(a.removed){if(a.value=e.join(n.slice(D,D+a.count)),D+=a.count,u&&t[u-1].added){var d=t[u-1];t[u-1]=t[u],t[u]=d}}else{if(!a.added&&o){var c=r.slice(s,s+a.count);c=c.map(function(p,l){var F=n[D+l];return F.length>p.length?F:p}),a.value=e.join(c)}else a.value=e.join(r.slice(s,s+a.count));s+=a.count,a.added||(D+=a.count)}}var f=t[i-1];return i>1&&typeof f.value=="string"&&(f.added||f.removed)&&e.equals("",f.value)&&(t[i-2].value+=f.value,t.pop()),t}function yu(e){return{newPos:e.newPos,components:e.components.slice(0)}}});var ir=Me(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.diffArrays=_u;ye.arrayDiff=void 0;var Au=Bu(or());function Bu(e){return e&&e.__esModule?e:{default:e}}var ge=new Au.default;ye.arrayDiff=ge;ge.tokenize=function(e){return e.slice()};ge.join=ge.removeEmpty=function(e){return e};function _u(e,t,r){return ge.diff(e,t,r)}});var Pe=Me((ps,jr)=>{"use strict";var Yr=new Proxy(String,{get:()=>Yr});jr.exports=Yr});var Fn={};We(Fn,{default:()=>uo,shouldHighlight:()=>no});var no,uo,pn=mu(()=>{no=()=>!1,uo=String});var yn=Me(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.codeFrameColumns=gn;Ft.default=ao;var dn=(pn(),Eu(Fn)),mn=oo(Pe(),!0);function hn(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(hn=function(n){return n?r:t})(e)}function oo(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=hn(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}var jt;function io(e){if(e){var t;return(t=jt)!=null||(jt=new mn.default.constructor({enabled:!0,level:1})),jt}return mn.default}var En=!1;function so(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var Cn=/\r\n|[\n\r\u2028\u2029]/;function Do(e,t,r){let n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),{linesAbove:u=2,linesBelow:i=3}=r||{},s=n.line,D=n.column,a=o.line,c=o.column,d=Math.max(s-(u+1),0),f=Math.min(t.length,a+i);s===-1&&(d=0),a===-1&&(f=t.length);let p=a-s,l={};if(p)for(let F=0;F<=p;F++){let m=F+s;if(!D)l[m]=!0;else if(F===0){let E=t[m-1].length;l[m]=[D,E-D+1]}else if(F===p)l[m]=[0,c];else{let E=t[m-F].length;l[m]=[0,E]}}else D===c?D?l[s]=[D,0]:l[s]=!0:l[s]=[D,c-D];return{start:d,end:f,markerLines:l}}function gn(e,t,r={}){let n=(r.highlightCode||r.forceColor)&&(0,dn.shouldHighlight)(r),o=io(r.forceColor),u=so(o),i=(F,m)=>n?F(m):m,s=e.split(Cn),{start:D,end:a,markerLines:c}=Do(t,s,r),d=t.start&&typeof t.start.column=="number",f=String(a).length,l=(n?(0,dn.default)(e,r):e).split(Cn,a).slice(D,a).map((F,m)=>{let E=D+1+m,g=` ${` ${E}`.slice(-f)} |`,h=c[E],B=!c[E+1];if(h){let Z="";if(Array.isArray(h)){let $=F.slice(0,Math.max(h[0]-1,0)).replace(/[^\t]/g," "),Q=h[1]||1;Z=[`
 `,i(u.gutter,g.replace(/\d/g," "))," ",$,i(u.marker,"^").repeat(Q)].join(""),B&&r.message&&(Z+=" "+i(u.message,r.message))}return[i(u.marker,">"),i(u.gutter,g),F.length>0?` ${F}`:"",Z].join("")}else return` ${i(u.gutter,g)}${F.length>0?` ${F}`:""}`}).join(`
`);return r.message&&!d&&(l=`${" ".repeat(f+1)}${r.message}
${l}`),n?o.reset(l):l}function ao(e,t,r,n={}){if(!En){En=!0;let u="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";{let i=new Error(u);i.name="DeprecationWarning",console.warn(new Error(u))}}return r=Math.max(r,0),gn(e,{start:{column:r,line:t}},n)}});var tr={};We(tr,{__debug:()=>ri,check:()=>ei,doc:()=>er,format:()=>cu,formatWithCursor:()=>au,getSupportInfo:()=>ti,util:()=>Qt,version:()=>Du});var hu=(e,t,r,n)=>{if(!(e&&t==null))return t.replaceAll?t.replaceAll(r,n):r.global?t.replace(r,n):t.split(r).join(n)},ee=hu;var Kn=he(ir(),1);var M="string",j="array",W="cursor",T="indent",S="align",v="trim",_="group",k="fill",x="if-break",P="indent-if-break",L="line-suffix",I="line-suffix-boundary",A="line",O="label",b="break-parent",Ue=new Set([W,T,S,v,_,k,x,P,L,I,A,O,b]);function xu(e){if(typeof e=="string")return M;if(Array.isArray(e))return j;if(!e)return;let{type:t}=e;if(Ue.has(t))return t}var U=xu;var ku=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e);function bu(e){let t=e===null?"null":typeof e;if(t!=="string"&&t!=="object")return`Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;if(U(e))throw new Error("doc is valid.");let r=Object.prototype.toString.call(e);if(r!=="[object Object]")return`Unexpected doc '${r}'.`;let n=ku([...Ue].map(o=>`'${o}'`));return`Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`}var yt=class extends Error{name="InvalidDocError";constructor(t){super(bu(t)),this.doc=t}},q=yt;var sr={};function wu(e,t,r,n){let o=[e];for(;o.length>0;){let u=o.pop();if(u===sr){r(o.pop());continue}r&&o.push(u,sr);let i=U(u);if(!i)throw new q(u);if((t==null?void 0:t(u))!==!1)switch(i){case j:case k:{let s=i===j?u:u.parts;for(let D=s.length,a=D-1;a>=0;--a)o.push(s[a]);break}case x:o.push(u.flatContents,u.breakContents);break;case _:if(n&&u.expandedStates)for(let s=u.expandedStates.length,D=s-1;D>=0;--D)o.push(u.expandedStates[D]);else o.push(u.contents);break;case S:case T:case P:case O:case L:o.push(u.contents);break;case M:case W:case v:case I:case A:case b:break;default:throw new q(u)}}}var Ae=wu;var Dr=()=>{},z=Dr,ze=Dr;function ie(e){return z(e),{type:T,contents:e}}function oe(e,t){return z(t),{type:S,contents:t,n:e}}function At(e,t={}){return z(e),ze(t.expandedStates,!0),{type:_,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function ar(e){return oe(Number.NEGATIVE_INFINITY,e)}function cr(e){return oe({type:"root"},e)}function lr(e){return oe(-1,e)}function fr(e,t){return At(e[0],{...t,expandedStates:e})}function Ge(e){return ze(e),{type:k,parts:e}}function Fr(e,t="",r={}){return z(e),t!==""&&z(t),{type:x,breakContents:e,flatContents:t,groupId:r.groupId}}function pr(e,t){return z(e),{type:P,contents:e,groupId:t.groupId,negate:t.negate}}function Be(e){return z(e),{type:L,contents:e}}var dr={type:I},le={type:b},mr={type:v},_e={type:A,hard:!0},Bt={type:A,hard:!0,literal:!0},Ke={type:A},Er={type:A,soft:!0},G=[_e,le],He=[Bt,le],xe={type:W};function ke(e,t){z(e),ze(t);let r=[];for(let n=0;n<t.length;n++)n!==0&&r.push(e),r.push(t[n]);return r}function qe(e,t,r){z(e);let n=e;if(t>0){for(let o=0;o<Math.floor(t/r);++o)n=ie(n);n=oe(t%r,n),n=oe(Number.NEGATIVE_INFINITY,n)}return n}function Cr(e,t){return z(t),e?{type:O,label:e,contents:t}:t}var Ou=(e,t,r)=>{if(!(e&&t==null))return Array.isArray(t)||typeof t=="string"?t[r<0?t.length+r:r]:t.at(r)},y=Ou;function hr(e){let t=e.indexOf("\r");return t>=0?e.charAt(t+1)===`
`?"crlf":"cr":"lf"}function be(e){switch(e){case"cr":return"\r";case"crlf":return`\r
`;default:return`
`}}function _t(e,t){let r;switch(t){case`
`:r=/\n/g;break;case"\r":r=/\r/g;break;case`\r
`:r=/\r\n/g;break;default:throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)}let n=e.match(r);return n?n.length:0}function gr(e){return ee(!1,e,/\r\n?/g,`
`)}var yr=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;function Ar(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function Br(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9800&&e<=9811||e===9855||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}var _r=e=>!(Ar(e)||Br(e));var Nu=/[^\x20-\x7F]/;function Tu(e){if(!e)return 0;if(!Nu.test(e))return e.length;e=e.replace(yr(),"  ");let t=0;for(let r of e){let n=r.codePointAt(0);n<=31||n>=127&&n<=159||n>=768&&n<=879||(t+=_r(n)?1:2)}return t}var we=Tu;var br=e=>{if(Array.isArray(e))return e;if(e.type!==k)throw new Error(`Expect doc to be 'array' or '${k}'.`);return e.parts};function Ne(e,t){if(typeof e=="string")return t(e);let r=new Map;return n(e);function n(u){if(r.has(u))return r.get(u);let i=o(u);return r.set(u,i),i}function o(u){switch(U(u)){case j:return t(u.map(n));case k:return t({...u,parts:u.parts.map(n)});case x:return t({...u,breakContents:n(u.breakContents),flatContents:n(u.flatContents)});case _:{let{expandedStates:i,contents:s}=u;return i?(i=i.map(n),s=i[0]):s=n(s),t({...u,contents:s,expandedStates:i})}case S:case T:case P:case O:case L:return t({...u,contents:n(u.contents)});case M:case W:case v:case I:case A:case b:return t(u);default:throw new q(u)}}}function Je(e,t,r){let n=r,o=!1;function u(i){if(o)return!1;let s=t(i);s!==void 0&&(o=!0,n=s)}return Ae(e,u),n}function Su(e){if(e.type===_&&e.break||e.type===A&&e.hard||e.type===b)return!0}function wr(e){return Je(e,Su,!1)}function xr(e){if(e.length>0){let t=y(!1,e,-1);!t.expandedStates&&!t.break&&(t.break="propagated")}return null}function Or(e){let t=new Set,r=[];function n(u){if(u.type===b&&xr(r),u.type===_){if(r.push(u),t.has(u))return!1;t.add(u)}}function o(u){u.type===_&&r.pop().break&&xr(r)}Ae(e,n,o,!0)}function vu(e){return e.type===A&&!e.hard?e.soft?"":" ":e.type===x?e.flatContents:e}function Nr(e){return Ne(e,vu)}function kr(e){for(e=[...e];e.length>=2&&y(!1,e,-2).type===A&&y(!1,e,-1).type===b;)e.length-=2;if(e.length>0){let t=Oe(y(!1,e,-1));e[e.length-1]=t}return e}function Oe(e){switch(U(e)){case S:case T:case P:case _:case L:case O:{let t=Oe(e.contents);return{...e,contents:t}}case x:return{...e,breakContents:Oe(e.breakContents),flatContents:Oe(e.flatContents)};case k:return{...e,parts:kr(e.parts)};case j:return kr(e);case M:return e.replace(/[\n\r]*$/,"");case W:case v:case I:case A:case b:break;default:throw new q(e)}return e}function Xe(e){return Oe(Lu(e))}function Pu(e){switch(U(e)){case k:if(e.parts.every(t=>t===""))return"";break;case _:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===_&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case S:case T:case P:case L:if(!e.contents)return"";break;case x:if(!e.flatContents&&!e.breakContents)return"";break;case j:{let t=[];for(let r of e){if(!r)continue;let[n,...o]=Array.isArray(r)?r:[r];typeof n=="string"&&typeof y(!1,t,-1)=="string"?t[t.length-1]+=n:t.push(n),t.push(...o)}return t.length===0?"":t.length===1?t[0]:t}case M:case W:case v:case I:case A:case O:case b:break;default:throw new q(e)}return e}function Lu(e){return Ne(e,t=>Pu(t))}function Tr(e,t=He){return Ne(e,r=>typeof r=="string"?ke(t,r.split(`
`)):r)}function Iu(e){if(e.type===A)return!0}function Sr(e){return Je(e,Iu,!1)}function Ze(e,t){return e.type===O?{...e,contents:t(e.contents)}:t(e)}var R=Symbol("MODE_BREAK"),K=Symbol("MODE_FLAT"),Te=Symbol("cursor");function vr(){return{value:"",length:0,queue:[]}}function Ru(e,t){return xt(e,{type:"indent"},t)}function Yu(e,t,r){return t===Number.NEGATIVE_INFINITY?e.root||vr():t<0?xt(e,{type:"dedent"},r):t?t.type==="root"?{...e,root:e}:xt(e,{type:typeof t=="string"?"stringAlign":"numberAlign",n:t},r):e}function xt(e,t,r){let n=t.type==="dedent"?e.queue.slice(0,-1):[...e.queue,t],o="",u=0,i=0,s=0;for(let l of n)switch(l.type){case"indent":c(),r.useTabs?D(1):a(r.tabWidth);break;case"stringAlign":c(),o+=l.n,u+=l.n.length;break;case"numberAlign":i+=1,s+=l.n;break;default:throw new Error(`Unexpected type '${l.type}'`)}return f(),{...e,value:o,length:u,queue:n};function D(l){o+="	".repeat(l),u+=r.tabWidth*l}function a(l){o+=" ".repeat(l),u+=l}function c(){r.useTabs?d():f()}function d(){i>0&&D(i),p()}function f(){s>0&&a(s),p()}function p(){i=0,s=0}}function kt(e){let t=0,r=0,n=e.length;e:for(;n--;){let o=e[n];if(o===Te){r++;continue}for(let u=o.length-1;u>=0;u--){let i=o[u];if(i===" "||i==="	")t++;else{e[n]=o.slice(0,u+1);break e}}}if(t>0||r>0)for(e.length=n+1;r-- >0;)e.push(Te);return t}function Qe(e,t,r,n,o,u){if(r===Number.POSITIVE_INFINITY)return!0;let i=t.length,s=[e],D=[];for(;r>=0;){if(s.length===0){if(i===0)return!0;s.push(t[--i]);continue}let{mode:a,doc:c}=s.pop();switch(U(c)){case M:D.push(c),r-=we(c);break;case j:case k:{let d=br(c);for(let f=d.length-1;f>=0;f--)s.push({mode:a,doc:d[f]});break}case T:case S:case P:case O:s.push({mode:a,doc:c.contents});break;case v:r+=kt(D);break;case _:{if(u&&c.break)return!1;let d=c.break?R:a,f=c.expandedStates&&d===R?y(!1,c.expandedStates,-1):c.contents;s.push({mode:d,doc:f});break}case x:{let f=(c.groupId?o[c.groupId]||K:a)===R?c.breakContents:c.flatContents;f&&s.push({mode:a,doc:f});break}case A:if(a===R||c.hard)return!0;c.soft||(D.push(" "),r--);break;case L:n=!0;break;case I:if(n)return!1;break}}return!1}function fe(e,t){let r={},n=t.printWidth,o=be(t.endOfLine),u=0,i=[{ind:vr(),mode:R,doc:e}],s=[],D=!1,a=[],c=0;for(Or(e);i.length>0;){let{ind:f,mode:p,doc:l}=i.pop();switch(U(l)){case M:{let F=o!==`
`?ee(!1,l,`
`,o):l;s.push(F),i.length>0&&(u+=we(F));break}case j:for(let F=l.length-1;F>=0;F--)i.push({ind:f,mode:p,doc:l[F]});break;case W:if(c>=2)throw new Error("There are too many 'cursor' in doc.");s.push(Te),c++;break;case T:i.push({ind:Ru(f,t),mode:p,doc:l.contents});break;case S:i.push({ind:Yu(f,l.n,t),mode:p,doc:l.contents});break;case v:u-=kt(s);break;case _:switch(p){case K:if(!D){i.push({ind:f,mode:l.break?R:K,doc:l.contents});break}case R:{D=!1;let F={ind:f,mode:K,doc:l.contents},m=n-u,E=a.length>0;if(!l.break&&Qe(F,i,m,E,r))i.push(F);else if(l.expandedStates){let C=y(!1,l.expandedStates,-1);if(l.break){i.push({ind:f,mode:R,doc:C});break}else for(let g=1;g<l.expandedStates.length+1;g++)if(g>=l.expandedStates.length){i.push({ind:f,mode:R,doc:C});break}else{let h=l.expandedStates[g],B={ind:f,mode:K,doc:h};if(Qe(B,i,m,E,r)){i.push(B);break}}}else i.push({ind:f,mode:R,doc:l.contents});break}}l.id&&(r[l.id]=y(!1,i,-1).mode);break;case k:{let F=n-u,{parts:m}=l;if(m.length===0)break;let[E,C]=m,g={ind:f,mode:K,doc:E},h={ind:f,mode:R,doc:E},B=Qe(g,[],F,a.length>0,r,!0);if(m.length===1){B?i.push(g):i.push(h);break}let Z={ind:f,mode:K,doc:C},$={ind:f,mode:R,doc:C};if(m.length===2){B?i.push(Z,g):i.push($,h);break}m.splice(0,2);let Q={ind:f,mode:p,doc:Ge(m)},rr=m[0];Qe({ind:f,mode:K,doc:[E,C,rr]},[],F,a.length>0,r,!0)?i.push(Q,Z,g):B?i.push(Q,$,g):i.push(Q,$,h);break}case x:case P:{let F=l.groupId?r[l.groupId]:p;if(F===R){let m=l.type===x?l.breakContents:l.negate?l.contents:ie(l.contents);m&&i.push({ind:f,mode:p,doc:m})}if(F===K){let m=l.type===x?l.flatContents:l.negate?ie(l.contents):l.contents;m&&i.push({ind:f,mode:p,doc:m})}break}case L:a.push({ind:f,mode:p,doc:l.contents});break;case I:a.length>0&&i.push({ind:f,mode:p,doc:_e});break;case A:switch(p){case K:if(l.hard)D=!0;else{l.soft||(s.push(" "),u+=1);break}case R:if(a.length>0){i.push({ind:f,mode:p,doc:l},...a.reverse()),a.length=0;break}l.literal?f.root?(s.push(o,f.root.value),u=f.root.length):(s.push(o),u=0):(u-=kt(s),s.push(o+f.value),u=f.length);break}break;case O:i.push({ind:f,mode:p,doc:l.contents});break;case b:break;default:throw new q(l)}i.length===0&&a.length>0&&(i.push(...a.reverse()),a.length=0)}let d=s.indexOf(Te);if(d!==-1){let f=s.indexOf(Te,d+1),p=s.slice(0,d).join(""),l=s.slice(d+1,f).join(""),F=s.slice(f+1).join("");return{formatted:p+l+F,cursorNodeStart:p.length,cursorNodeText:l}}return{formatted:s.join("")}}function J(e){var t;if(!e)return"";if(Array.isArray(e)){let r=[];for(let n of e)if(Array.isArray(n))r.push(...J(n));else{let o=J(n);o!==""&&r.push(o)}return r}return e.type===x?{...e,breakContents:J(e.breakContents),flatContents:J(e.flatContents)}:e.type===_?{...e,contents:J(e.contents),expandedStates:(t=e.expandedStates)==null?void 0:t.map(J)}:e.type===k?{type:"fill",parts:e.parts.map(J)}:e.contents?{...e,contents:J(e.contents)}:e}function Pr(e){let t=Object.create(null),r=new Set;return n(J(e));function n(u,i,s){var D,a;if(typeof u=="string")return JSON.stringify(u);if(Array.isArray(u)){let c=u.map(n).filter(Boolean);return c.length===1?c[0]:`[${c.join(", ")}]`}if(u.type===A){let c=((D=s==null?void 0:s[i+1])==null?void 0:D.type)===b;return u.literal?c?"literalline":"literallineWithoutBreakParent":u.hard?c?"hardline":"hardlineWithoutBreakParent":u.soft?"softline":"line"}if(u.type===b)return((a=s==null?void 0:s[i-1])==null?void 0:a.type)===A&&s[i-1].hard?void 0:"breakParent";if(u.type===v)return"trim";if(u.type===T)return"indent("+n(u.contents)+")";if(u.type===S)return u.n===Number.NEGATIVE_INFINITY?"dedentToRoot("+n(u.contents)+")":u.n<0?"dedent("+n(u.contents)+")":u.n.type==="root"?"markAsRoot("+n(u.contents)+")":"align("+JSON.stringify(u.n)+", "+n(u.contents)+")";if(u.type===x)return"ifBreak("+n(u.breakContents)+(u.flatContents?", "+n(u.flatContents):"")+(u.groupId?(u.flatContents?"":', ""')+`, { groupId: ${o(u.groupId)} }`:"")+")";if(u.type===P){let c=[];u.negate&&c.push("negate: true"),u.groupId&&c.push(`groupId: ${o(u.groupId)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return`indentIfBreak(${n(u.contents)}${d})`}if(u.type===_){let c=[];u.break&&u.break!=="propagated"&&c.push("shouldBreak: true"),u.id&&c.push(`id: ${o(u.id)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return u.expandedStates?`conditionalGroup([${u.expandedStates.map(f=>n(f)).join(",")}]${d})`:`group(${n(u.contents)}${d})`}if(u.type===k)return`fill([${u.parts.map(c=>n(c)).join(", ")}])`;if(u.type===L)return"lineSuffix("+n(u.contents)+")";if(u.type===I)return"lineSuffixBoundary";if(u.type===O)return`label(${JSON.stringify(u.label)}, ${n(u.contents)})`;throw new Error("Unknown doc type "+u.type)}function o(u){if(typeof u!="symbol")return JSON.stringify(String(u));if(u in t)return t[u];let i=u.description||"symbol";for(let s=0;;s++){let D=i+(s>0?` #${s}`:"");if(!r.has(D))return r.add(D),t[u]=`Symbol.for(${JSON.stringify(D)})`}}}function ju(e,t,r=0){let n=0;for(let o=r;o<e.length;++o)e[o]==="	"?n=n+t-n%t:n++;return n}var Fe=ju;var Se=class extends Error{name="ConfigError"},ve=class extends Error{name="UndefinedParserError"};var Lr={cursorOffset:{category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:"Print (to stderr) where a cursor at the given position would move to after formatting.",cliCategory:"Editor"},endOfLine:{category:"Global",type:"choice",default:"lf",description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:`Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`}]},filepath:{category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{category:"Global",type:"choice",default:void 0,description:"Which parser to use.",exception:e=>typeof e=="string"||typeof e=="function",choices:[{value:"flow",description:"Flow"},{value:"babel",description:"JavaScript"},{value:"babel-flow",description:"Flow"},{value:"babel-ts",description:"TypeScript"},{value:"typescript",description:"TypeScript"},{value:"acorn",description:"JavaScript"},{value:"espree",description:"JavaScript"},{value:"meriyah",description:"JavaScript"},{value:"css",description:"CSS"},{value:"less",description:"Less"},{value:"scss",description:"SCSS"},{value:"json",description:"JSON"},{value:"json5",description:"JSON5"},{value:"json-stringify",description:"JSON.stringify"},{value:"graphql",description:"GraphQL"},{value:"markdown",description:"Markdown"},{value:"mdx",description:"MDX"},{value:"vue",description:"Vue"},{value:"yaml",description:"YAML"},{value:"glimmer",description:"Ember / Handlebars"},{value:"html",description:"HTML"},{value:"angular",description:"Angular"},{value:"lwc",description:"Lightning Web Components"}]},plugins:{type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>typeof e=="string"||typeof e=="object",cliName:"plugin",cliCategory:"Config"},printWidth:{category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:`Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,cliCategory:"Editor"},rangeStart:{category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:`Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,cliCategory:"Editor"},requirePragma:{category:"Special",type:"boolean",default:!1,description:`Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{category:"Global",type:"choice",default:"auto",description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}};function et({plugins:e=[],showDeprecated:t=!1}={}){let r=e.flatMap(o=>o.languages??[]),n=[];for(let o of $u(Object.assign({},...e.map(({options:u})=>u),Lr)))!t&&o.deprecated||(Array.isArray(o.choices)&&(t||(o.choices=o.choices.filter(u=>!u.deprecated)),o.name==="parser"&&(o.choices=[...o.choices,...Vu(o.choices,r,e)])),o.pluginDefaults=Object.fromEntries(e.filter(u=>{var i;return((i=u.defaultOptions)==null?void 0:i[o.name])!==void 0}).map(u=>[u.name,u.defaultOptions[o.name]])),n.push(o));return{languages:r,options:n}}function*Vu(e,t,r){let n=new Set(e.map(o=>o.value));for(let o of t)if(o.parsers){for(let u of o.parsers)if(!n.has(u)){n.add(u);let i=r.find(D=>D.parsers&&Object.prototype.hasOwnProperty.call(D.parsers,u)),s=o.name;i!=null&&i.name&&(s+=` (plugin: ${i.name})`),yield{value:u,description:s}}}}function $u(e){let t=[];for(let[r,n]of Object.entries(e)){let o={name:r,...n};Array.isArray(o.default)&&(o.default=y(!1,o.default,-1).value),t.push(o)}return t}var Mu=e=>String(e).split(/[/\\]/).pop();function Ir(e,t){if(!t)return;let r=Mu(t).toLowerCase();return e.find(n=>{var o,u;return((o=n.extensions)==null?void 0:o.some(i=>r.endsWith(i)))||((u=n.filenames)==null?void 0:u.some(i=>i.toLowerCase()===r))})}function Wu(e,t){if(t)return e.find(({name:r})=>r.toLowerCase()===t)??e.find(({aliases:r})=>r==null?void 0:r.includes(t))??e.find(({extensions:r})=>r==null?void 0:r.includes(`.${t}`))}function Uu(e,t){let r=e.plugins.flatMap(o=>o.languages??[]),n=Wu(r,t.language)??Ir(r,t.physicalFile)??Ir(r,t.file)??(t.physicalFile,void 0);return n==null?void 0:n.parsers[0]}var Rr=Uu;var te={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(e===null||typeof e!="object")return JSON.stringify(e);if(Array.isArray(e))return`[${e.map(r=>te.value(r)).join(", ")}]`;let t=Object.keys(e);return t.length===0?"{}":`{ ${t.map(r=>`${te.key(r)}: ${te.value(e[r])}`).join(", ")} }`},pair:({key:e,value:t})=>te.value({[e]:t})};var bt=he(Pe(),1),Vr=(e,t,{descriptor:r})=>{let n=[`${bt.default.yellow(typeof e=="string"?r.key(e):r.pair(e))} is deprecated`];return t&&n.push(`we now treat it as ${bt.default.blue(typeof t=="string"?r.key(t):r.pair(t))}`),n.join("; ")+"."};var se=he(Pe(),1);var tt=Symbol.for("vnopts.VALUE_NOT_EXIST"),pe=Symbol.for("vnopts.VALUE_UNCHANGED");var $r=" ".repeat(2),Wr=(e,t,r)=>{let{text:n,list:o}=r.normalizeExpectedResult(r.schemas[e].expected(r)),u=[];return n&&u.push(Mr(e,t,n,r.descriptor)),o&&u.push([Mr(e,t,o.title,r.descriptor)].concat(o.values.map(i=>Ur(i,r.loggerPrintWidth))).join(`
`)),zr(u,r.loggerPrintWidth)};function Mr(e,t,r,n){return[`Invalid ${se.default.red(n.key(e))} value.`,`Expected ${se.default.blue(r)},`,`but received ${t===tt?se.default.gray("nothing"):se.default.red(n.value(t))}.`].join(" ")}function Ur({text:e,list:t},r){let n=[];return e&&n.push(`- ${se.default.blue(e)}`),t&&n.push([`- ${se.default.blue(t.title)}:`].concat(t.values.map(o=>Ur(o,r-$r.length).replace(/^|\n/g,`$&${$r}`))).join(`
`)),zr(n,r)}function zr(e,t){if(e.length===1)return e[0];let[r,n]=e,[o,u]=e.map(i=>i.split(`
`,1)[0].length);return o>t&&o>u?n:r}var Nt=he(Pe(),1);var wt=[],Gr=[];function Ot(e,t){if(e===t)return 0;let r=e;e.length>t.length&&(e=t,t=r);let n=e.length,o=t.length;for(;n>0&&e.charCodeAt(~-n)===t.charCodeAt(~-o);)n--,o--;let u=0;for(;u<n&&e.charCodeAt(u)===t.charCodeAt(u);)u++;if(n-=u,o-=u,n===0)return o;let i,s,D,a,c=0,d=0;for(;c<n;)Gr[c]=e.charCodeAt(u+c),wt[c]=++c;for(;d<o;)for(i=t.charCodeAt(u+d),D=d++,s=d,c=0;c<n;c++)a=i===Gr[c]?D:D+1,D=wt[c],s=wt[c]=D>s?a>s?s+1:a:a>D?D+1:a;return s}var rt=(e,t,{descriptor:r,logger:n,schemas:o})=>{let u=[`Ignored unknown option ${Nt.default.yellow(r.pair({key:e,value:t}))}.`],i=Object.keys(o).sort().find(s=>Ot(e,s)<3);i&&u.push(`Did you mean ${Nt.default.blue(r.key(i))}?`),n.warn(u.join(" "))};var zu=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"];function Gu(e,t){let r=new e(t),n=Object.create(r);for(let o of zu)o in t&&(n[o]=Ku(t[o],r,w.prototype[o].length));return n}var w=class{static create(t){return Gu(this,t)}constructor(t){this.name=t.name}default(t){}expected(t){return"nothing"}validate(t,r){return!1}deprecated(t,r){return!1}forward(t,r){}redirect(t,r){}overlap(t,r,n){return t}preprocess(t,r){return t}postprocess(t,r){return pe}};function Ku(e,t,r){return typeof e=="function"?(...n)=>e(...n.slice(0,r-1),t,...n.slice(r-1)):()=>e}var nt=class extends w{constructor(t){super(t),this._sourceName=t.sourceName}expected(t){return t.schemas[this._sourceName].expected(t)}validate(t,r){return r.schemas[this._sourceName].validate(t,r)}redirect(t,r){return this._sourceName}};var ut=class extends w{expected(){return"anything"}validate(){return!0}};var ot=class extends w{constructor({valueSchema:t,name:r=t.name,...n}){super({...n,name:r}),this._valueSchema=t}expected(t){let{text:r,list:n}=t.normalizeExpectedResult(this._valueSchema.expected(t));return{text:r&&`an array of ${r}`,list:n&&{title:"an array of the following values",values:[{list:n}]}}}validate(t,r){if(!Array.isArray(t))return!1;let n=[];for(let o of t){let u=r.normalizeValidateResult(this._valueSchema.validate(o,r),o);u!==!0&&n.push(u.value)}return n.length===0?!0:{value:n}}deprecated(t,r){let n=[];for(let o of t){let u=r.normalizeDeprecatedResult(this._valueSchema.deprecated(o,r),o);u!==!1&&n.push(...u.map(({value:i})=>({value:[i]})))}return n}forward(t,r){let n=[];for(let o of t){let u=r.normalizeForwardResult(this._valueSchema.forward(o,r),o);n.push(...u.map(Kr))}return n}redirect(t,r){let n=[],o=[];for(let u of t){let i=r.normalizeRedirectResult(this._valueSchema.redirect(u,r),u);"remain"in i&&n.push(i.remain),o.push(...i.redirect.map(Kr))}return n.length===0?{redirect:o}:{redirect:o,remain:n}}overlap(t,r){return t.concat(r)}};function Kr({from:e,to:t}){return{from:[e],to:t}}var it=class extends w{expected(){return"true or false"}validate(t){return typeof t=="boolean"}};function qr(e,t){let r=Object.create(null);for(let n of e){let o=n[t];if(r[o])throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r[o]=n}return r}function Jr(e,t){let r=new Map;for(let n of e){let o=n[t];if(r.has(o))throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r.set(o,n)}return r}function Xr(){let e=Object.create(null);return t=>{let r=JSON.stringify(t);return e[r]?!0:(e[r]=!0,!1)}}function Zr(e,t){let r=[],n=[];for(let o of e)t(o)?r.push(o):n.push(o);return[r,n]}function Qr(e){return e===Math.floor(e)}function en(e,t){if(e===t)return 0;let r=typeof e,n=typeof t,o=["undefined","object","boolean","number","string"];return r!==n?o.indexOf(r)-o.indexOf(n):r!=="string"?Number(e)-Number(t):e.localeCompare(t)}function tn(e){return(...t)=>{let r=e(...t);return typeof r=="string"?new Error(r):r}}function Tt(e){return e===void 0?{}:e}function St(e){if(typeof e=="string")return{text:e};let{text:t,list:r}=e;return Hu((t||r)!==void 0,"Unexpected `expected` result, there should be at least one field."),r?{text:t,list:{title:r.title,values:r.values.map(St)}}:{text:t}}function vt(e,t){return e===!0?!0:e===!1?{value:t}:e}function Pt(e,t,r=!1){return e===!1?!1:e===!0?r?!0:[{value:t}]:"value"in e?[e]:e.length===0?!1:e}function Hr(e,t){return typeof e=="string"||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function st(e,t){return e===void 0?[]:Array.isArray(e)?e.map(r=>Hr(r,t)):[Hr(e,t)]}function Lt(e,t){let r=st(typeof e=="object"&&"redirect"in e?e.redirect:e,t);return r.length===0?{remain:t,redirect:r}:typeof e=="object"&&"remain"in e?{remain:e.remain,redirect:r}:{redirect:r}}function Hu(e,t){if(!e)throw new Error(t)}var Dt=class extends w{constructor(t){super(t),this._choices=Jr(t.choices.map(r=>r&&typeof r=="object"?r:{value:r}),"value")}expected({descriptor:t}){let r=Array.from(this._choices.keys()).map(i=>this._choices.get(i)).filter(({hidden:i})=>!i).map(i=>i.value).sort(en).map(t.value),n=r.slice(0,-2),o=r.slice(-2);return{text:n.concat(o.join(" or ")).join(", "),list:{title:"one of the following values",values:r}}}validate(t){return this._choices.has(t)}deprecated(t){let r=this._choices.get(t);return r&&r.deprecated?{value:t}:!1}forward(t){let r=this._choices.get(t);return r?r.forward:void 0}redirect(t){let r=this._choices.get(t);return r?r.redirect:void 0}};var at=class extends w{expected(){return"a number"}validate(t,r){return typeof t=="number"}};var ct=class extends at{expected(){return"an integer"}validate(t,r){return r.normalizeValidateResult(super.validate(t,r),t)===!0&&Qr(t)}};var Le=class extends w{expected(){return"a string"}validate(t){return typeof t=="string"}};var rn=te,nn=rt,un=Wr,on=Vr;var lt=class{constructor(t,r){let{logger:n=console,loggerPrintWidth:o=80,descriptor:u=rn,unknown:i=nn,invalid:s=un,deprecated:D=on,missing:a=()=>!1,required:c=()=>!1,preprocess:d=p=>p,postprocess:f=()=>pe}=r||{};this._utils={descriptor:u,logger:n||{warn:()=>{}},loggerPrintWidth:o,schemas:qr(t,"name"),normalizeDefaultResult:Tt,normalizeExpectedResult:St,normalizeDeprecatedResult:Pt,normalizeForwardResult:st,normalizeRedirectResult:Lt,normalizeValidateResult:vt},this._unknownHandler=i,this._invalidHandler=tn(s),this._deprecatedHandler=D,this._identifyMissing=(p,l)=>!(p in l)||a(p,l),this._identifyRequired=c,this._preprocess=d,this._postprocess=f,this.cleanHistory()}cleanHistory(){this._hasDeprecationWarned=Xr()}normalize(t){let r={},o=[this._preprocess(t,this._utils)],u=()=>{for(;o.length!==0;){let i=o.shift(),s=this._applyNormalization(i,r);o.push(...s)}};u();for(let i of Object.keys(this._utils.schemas)){let s=this._utils.schemas[i];if(!(i in r)){let D=Tt(s.default(this._utils));"value"in D&&o.push({[i]:D.value})}}u();for(let i of Object.keys(this._utils.schemas)){if(!(i in r))continue;let s=this._utils.schemas[i],D=r[i],a=s.postprocess(D,this._utils);a!==pe&&(this._applyValidation(a,i,s),r[i]=a)}return this._applyPostprocess(r),this._applyRequiredCheck(r),r}_applyNormalization(t,r){let n=[],{knownKeys:o,unknownKeys:u}=this._partitionOptionKeys(t);for(let i of o){let s=this._utils.schemas[i],D=s.preprocess(t[i],this._utils);this._applyValidation(D,i,s);let a=({from:p,to:l})=>{n.push(typeof l=="string"?{[l]:p}:{[l.key]:l.value})},c=({value:p,redirectTo:l})=>{let F=Pt(s.deprecated(p,this._utils),D,!0);if(F!==!1)if(F===!0)this._hasDeprecationWarned(i)||this._utils.logger.warn(this._deprecatedHandler(i,l,this._utils));else for(let{value:m}of F){let E={key:i,value:m};if(!this._hasDeprecationWarned(E)){let C=typeof l=="string"?{key:l,value:m}:l;this._utils.logger.warn(this._deprecatedHandler(E,C,this._utils))}}};st(s.forward(D,this._utils),D).forEach(a);let f=Lt(s.redirect(D,this._utils),D);if(f.redirect.forEach(a),"remain"in f){let p=f.remain;r[i]=i in r?s.overlap(r[i],p,this._utils):p,c({value:p})}for(let{from:p,to:l}of f.redirect)c({value:p,redirectTo:l})}for(let i of u){let s=t[i];this._applyUnknownHandler(i,s,r,(D,a)=>{n.push({[D]:a})})}return n}_applyRequiredCheck(t){for(let r of Object.keys(this._utils.schemas))if(this._identifyMissing(r,t)&&this._identifyRequired(r))throw this._invalidHandler(r,tt,this._utils)}_partitionOptionKeys(t){let[r,n]=Zr(Object.keys(t).filter(o=>!this._identifyMissing(o,t)),o=>o in this._utils.schemas);return{knownKeys:r,unknownKeys:n}}_applyValidation(t,r,n){let o=vt(n.validate(t,this._utils),t);if(o!==!0)throw this._invalidHandler(r,o.value,this._utils)}_applyUnknownHandler(t,r,n,o){let u=this._unknownHandler(t,r,this._utils);if(u)for(let i of Object.keys(u)){if(this._identifyMissing(i,u))continue;let s=u[i];i in this._utils.schemas?o(i,s):n[i]=s}}_applyPostprocess(t){let r=this._postprocess(t,this._utils);if(r!==pe){if(r.delete)for(let n of r.delete)delete t[n];if(r.override){let{knownKeys:n,unknownKeys:o}=this._partitionOptionKeys(r.override);for(let u of n){let i=r.override[u];this._applyValidation(i,u,this._utils.schemas[u]),t[u]=i}for(let u of o){let i=r.override[u];this._applyUnknownHandler(u,i,t,(s,D)=>{let a=this._utils.schemas[s];this._applyValidation(D,s,a),t[s]=D})}}}}};var It;function Ju(e,t,{logger:r=!1,isCLI:n=!1,passThrough:o=!1,FlagSchema:u,descriptor:i}={}){if(n){if(!u)throw new Error("'FlagSchema' option is required.");if(!i)throw new Error("'descriptor' option is required.")}else i=te;let s=o?Array.isArray(o)?(f,p)=>o.includes(f)?{[f]:p}:void 0:(f,p)=>({[f]:p}):(f,p,l)=>{let{_:F,...m}=l.schemas;return rt(f,p,{...l,schemas:m})},D=Xu(t,{isCLI:n,FlagSchema:u}),a=new lt(D,{logger:r,unknown:s,descriptor:i}),c=r!==!1;c&&It&&(a._hasDeprecationWarned=It);let d=a.normalize(e);return c&&(It=a._hasDeprecationWarned),d}function Xu(e,{isCLI:t,FlagSchema:r}){let n=[];t&&n.push(ut.create({name:"_"}));for(let o of e)n.push(Zu(o,{isCLI:t,optionInfos:e,FlagSchema:r})),o.alias&&t&&n.push(nt.create({name:o.alias,sourceName:o.name}));return n}function Zu(e,{isCLI:t,optionInfos:r,FlagSchema:n}){let{name:o}=e,u={name:o},i,s={};switch(e.type){case"int":i=ct,t&&(u.preprocess=Number);break;case"string":i=Le;break;case"choice":i=Dt,u.choices=e.choices.map(D=>D!=null&&D.redirect?{...D,redirect:{to:{key:e.name,value:D.redirect}}}:D);break;case"boolean":i=it;break;case"flag":i=n,u.flags=r.flatMap(D=>[D.alias,D.description&&D.name,D.oppositeDescription&&`no-${D.name}`].filter(Boolean));break;case"path":i=Le;break;default:throw new Error(`Unexpected type ${e.type}`)}if(e.exception?u.validate=(D,a,c)=>e.exception(D)||a.validate(D,c):u.validate=(D,a,c)=>D===void 0||a.validate(D,c),e.redirect&&(s.redirect=D=>D?{to:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(s.deprecated=!0),t&&!e.array){let D=u.preprocess||(a=>a);u.preprocess=(a,c,d)=>c.preprocess(D(Array.isArray(a)?y(!1,a,-1):a),d)}return e.array?ot.create({...t?{preprocess:D=>Array.isArray(D)?D:[D]}:{},...s,valueSchema:i.create(u)}):i.create({...u,...s})}var sn=Ju;function Rt(e,t){if(!t)throw new Error("parserName is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.parsers&&Object.prototype.hasOwnProperty.call(o.parsers,t))return o}let r=`Couldn't resolve parser "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function Dn(e,t){if(!t)throw new Error("astFormat is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.printers&&Object.prototype.hasOwnProperty.call(o.printers,t))return o}let r=`Couldn't find plugin for AST format "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function ft({plugins:e,parser:t}){let r=Rt(e,t);return Yt(r,t)}function Yt(e,t){let r=e.parsers[t];return typeof r=="function"?r():r}function an(e,t){let r=e.printers[t];return typeof r=="function"?r():r}var cn={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null};async function Qu(e,t={}){var d;let r={...e};if(!r.parser)if(r.filepath){if(r.parser=Rr(r,{physicalFile:r.filepath}),!r.parser)throw new ve(`No parser could be inferred for file "${r.filepath}".`)}else throw new ve("No parser and no file path given, couldn't infer a parser.");let n=et({plugins:e.plugins,showDeprecated:!0}).options,o={...cn,...Object.fromEntries(n.filter(f=>f.default!==void 0).map(f=>[f.name,f.default]))},u=Rt(r.plugins,r.parser),i=await Yt(u,r.parser);r.astFormat=i.astFormat,r.locEnd=i.locEnd,r.locStart=i.locStart;let s=(d=u.printers)!=null&&d[i.astFormat]?u:Dn(r.plugins,i.astFormat),D=await an(s,i.astFormat);r.printer=D;let a=s.defaultOptions?Object.fromEntries(Object.entries(s.defaultOptions).filter(([,f])=>f!==void 0)):{},c={...o,...a};for(let[f,p]of Object.entries(c))(r[f]===null||r[f]===void 0)&&(r[f]=p);return r.parser==="json"&&(r.trailingComma="none"),sn(r,n,{passThrough:Object.keys(cn),...t})}var re=Qu;var ln=new Set(["tokens","comments","parent","enclosingNode","precedingNode","followingNode"]),eo=e=>Object.keys(e).filter(t=>!ln.has(t));function to(e){return e?t=>e(t,ln):eo}var H=to;function ro(e,t){let{printer:{massageAstNode:r,getVisitorKeys:n}}=t;if(!r)return e;let o=H(n),u=r.ignoredProperties??new Set;return i(e);function i(s,D){if(!(s!==null&&typeof s=="object"))return s;if(Array.isArray(s))return s.map(f=>i(f,D)).filter(Boolean);let a={},c=new Set(o(s));for(let f in s)!Object.prototype.hasOwnProperty.call(s,f)||u.has(f)||(c.has(f)?a[f]=i(s[f],s):a[f]=s[f]);let d=r(s,a,D);if(d!==null)return d??a}}var fn=ro;var An=he(yn(),1);async function co(e,t){let r=await ft(t),n=r.preprocess?r.preprocess(e,t):e;t.originalText=n;let o;try{o=await r.parse(n,t,t)}catch(u){lo(u,e)}return{text:n,ast:o}}function lo(e,t){let{loc:r}=e;if(r){let n=(0,An.codeFrameColumns)(t,r,{highlightCode:!0});throw e.message+=`
`+n,e.codeFrame=n,e}throw e}var De=co;var Ie,$t,de,pt,Vt=class{constructor(t){ht(this,Ie);ht(this,de);this.stack=[t]}get key(){let{stack:t,siblings:r}=this;return y(!1,t,r===null?-2:-4)??null}get index(){return this.siblings===null?null:y(!1,this.stack,-2)}get node(){return y(!1,this.stack,-1)}get parent(){return this.getNode(1)}get grandparent(){return this.getNode(2)}get isInArray(){return this.siblings!==null}get siblings(){let{stack:t}=this,r=y(!1,t,-3);return Array.isArray(r)?r:null}get next(){let{siblings:t}=this;return t===null?null:t[this.index+1]}get previous(){let{siblings:t}=this;return t===null?null:t[this.index-1]}get isFirst(){return this.index===0}get isLast(){let{siblings:t,index:r}=this;return t!==null&&r===t.length-1}get isRoot(){return this.stack.length===1}get root(){return this.stack[0]}get ancestors(){return[...ce(this,de,pt).call(this)]}getName(){let{stack:t}=this,{length:r}=t;return r>1?y(!1,t,-2):null}getValue(){return y(!1,this.stack,-1)}getNode(t=0){let r=ce(this,Ie,$t).call(this,t);return r===-1?null:this.stack[r]}getParentNode(t=0){return this.getNode(t+1)}call(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{return t(this)}finally{n.length=o}}callParent(t,r=0){let n=ce(this,Ie,$t).call(this,r+1),o=this.stack.splice(n+1);try{return t(this)}finally{this.stack.push(...o)}}each(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{for(let i=0;i<u.length;++i)n.push(i,u[i]),t(this,i,u),n.length-=2}finally{n.length=o}}map(t,...r){let n=[];return this.each((o,u,i)=>{n[u]=t(o,u,i)},...r),n}match(...t){let r=this.stack.length-1,n=null,o=this.stack[r--];for(let u of t){if(o===void 0)return!1;let i=null;if(typeof n=="number"&&(i=n,n=this.stack[r--],o=this.stack[r--]),u&&!u(o,n,i))return!1;n=this.stack[r--],o=this.stack[r--]}return!0}findAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return r}hasAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return!0;return!1}};Ie=new WeakSet,$t=function(t){let{stack:r}=this;for(let n=r.length-1;n>=0;n-=2)if(!Array.isArray(r[n])&&--t<0)return n;return-1},de=new WeakSet,pt=function*(){let{stack:t}=this;for(let r=t.length-3;r>=0;r-=2){let n=t[r];Array.isArray(n)||(yield n)}};var Bn=Vt;var _n=new Proxy(()=>{},{get:()=>_n}),Re=_n;function me(e){return(t,r,n)=>{let o=!!(n!=null&&n.backwards);if(r===!1)return!1;let{length:u}=t,i=r;for(;i>=0&&i<u;){let s=t.charAt(i);if(e instanceof RegExp){if(!e.test(s))return i}else if(!e.includes(s))return i;o?i--:i++}return i===-1||i===u?i:!1}}var xn=me(/\s/),N=me(" 	"),dt=me(",; 	"),mt=me(/[^\n\r]/);function fo(e,t,r){let n=!!(r!=null&&r.backwards);if(t===!1)return!1;let o=e.charAt(t);if(n){if(e.charAt(t-1)==="\r"&&o===`
`)return t-2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t-1}else{if(o==="\r"&&e.charAt(t+1)===`
`)return t+2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t+1}return t}var Y=fo;function Fo(e,t,r={}){let n=N(e,r.backwards?t-1:t,r),o=Y(e,n,r);return n!==o}var V=Fo;function po(e){return Array.isArray(e)&&e.length>0}var Mt=po;function mo(e){return e!==null&&typeof e=="object"}var kn=mo;function*Wt(e,t){let{getVisitorKeys:r,filter:n=()=>!0}=t,o=u=>kn(u)&&n(u);for(let u of r(e)){let i=e[u];if(Array.isArray(i))for(let s of i)o(s)&&(yield s);else o(i)&&(yield i)}}function*bn(e,t){let r=[e];for(let n=0;n<r.length;n++){let o=r[n];for(let u of Wt(o,t))yield u,r.push(u)}}function Eo(e){let t=e.type||e.kind||"(unknown type)",r=String(e.name||e.id&&(typeof e.id=="object"?e.id.name:e.id)||e.key&&(typeof e.key=="object"?e.key.name:e.key)||e.value&&(typeof e.value=="object"?"":String(e.value))||e.operator||"");return r.length>20&&(r=r.slice(0,19)+"\u2026"),t+(r?" "+r:"")}function Ut(e,t){(e.comments??(e.comments=[])).push(t),t.printed=!1,t.nodeDescription=Eo(e)}function ne(e,t){t.leading=!0,t.trailing=!1,Ut(e,t)}function X(e,t,r){t.leading=!1,t.trailing=!1,r&&(t.marker=r),Ut(e,t)}function ue(e,t){t.leading=!1,t.trailing=!0,Ut(e,t)}var zt=new WeakMap;function Et(e,t){if(zt.has(e))return zt.get(e);let{printer:{getCommentChildNodes:r,canAttachComment:n,getVisitorKeys:o},locStart:u,locEnd:i}=t;if(!n)return[];let s=((r==null?void 0:r(e,t))??[...Wt(e,{getVisitorKeys:H(o)})]).flatMap(D=>n(D)?[D]:Et(D,t));return s.sort((D,a)=>u(D)-u(a)||i(D)-i(a)),zt.set(e,s),s}function On(e,t,r,n){let{locStart:o,locEnd:u}=r,i=o(t),s=u(t),D=Et(e,r),a,c,d=0,f=D.length;for(;d<f;){let p=d+f>>1,l=D[p],F=o(l),m=u(l);if(F<=i&&s<=m)return On(l,t,r,l);if(m<=i){a=l,d=p+1;continue}if(s<=F){c=l,f=p;continue}throw new Error("Comment location overlaps with node location")}if((n==null?void 0:n.type)==="TemplateLiteral"){let{quasis:p}=n,l=Kt(p,t,r);a&&Kt(p,a,r)!==l&&(a=null),c&&Kt(p,c,r)!==l&&(c=null)}return{enclosingNode:n,precedingNode:a,followingNode:c}}var Gt=()=>!1;function Nn(e,t){let{comments:r}=e;if(delete e.comments,!Mt(r)||!t.printer.canAttachComment)return;let n=[],{locStart:o,locEnd:u,printer:{experimentalFeatures:{avoidAstMutation:i=!1}={},handleComments:s={}},originalText:D}=t,{ownLine:a=Gt,endOfLine:c=Gt,remaining:d=Gt}=s,f=r.map((p,l)=>({...On(e,p,t),comment:p,text:D,options:t,ast:e,isLastComment:r.length-1===l}));for(let[p,l]of f.entries()){let{comment:F,precedingNode:m,enclosingNode:E,followingNode:C,text:g,options:h,ast:B,isLastComment:Z}=l;if(h.parser==="json"||h.parser==="json5"||h.parser==="__js_expression"||h.parser==="__ts_expression"||h.parser==="__vue_expression"||h.parser==="__vue_ts_expression"){if(o(F)-o(B)<=0){ne(B,F);continue}if(u(F)-u(B)>=0){ue(B,F);continue}}let $;if(i?$=[l]:(F.enclosingNode=E,F.precedingNode=m,F.followingNode=C,$=[F,g,h,B,Z]),Co(g,h,f,p))F.placement="ownLine",a(...$)||(C?ne(C,F):m?ue(m,F):E?X(E,F):X(B,F));else if(ho(g,h,f,p))F.placement="endOfLine",c(...$)||(m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F));else if(F.placement="remaining",!d(...$))if(m&&C){let Q=n.length;Q>0&&n[Q-1].followingNode!==C&&wn(n,h),n.push(l)}else m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F)}if(wn(n,t),!i)for(let p of r)delete p.precedingNode,delete p.enclosingNode,delete p.followingNode}var Tn=e=>!/[\S\n\u2028\u2029]/.test(e);function Co(e,t,r,n){let{comment:o,precedingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=i(o);if(u)for(let a=n-1;a>=0;a--){let{comment:c,precedingNode:d}=r[a];if(d!==u||!Tn(e.slice(s(c),D)))break;D=i(c)}return V(e,D,{backwards:!0})}function ho(e,t,r,n){let{comment:o,followingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=s(o);if(u)for(let a=n+1;a<r.length;a++){let{comment:c,followingNode:d}=r[a];if(d!==u||!Tn(e.slice(D,i(c))))break;D=s(c)}return V(e,D)}function wn(e,t){var s,D;let r=e.length;if(r===0)return;let{precedingNode:n,followingNode:o}=e[0],u=t.locStart(o),i;for(i=r;i>0;--i){let{comment:a,precedingNode:c,followingNode:d}=e[i-1];Re.strictEqual(c,n),Re.strictEqual(d,o);let f=t.originalText.slice(t.locEnd(a),u);if(((D=(s=t.printer).isGap)==null?void 0:D.call(s,f,t))??/^[\s(]*$/.test(f))u=t.locStart(a);else break}for(let[a,{comment:c}]of e.entries())a<i?ue(n,c):ne(o,c);for(let a of[n,o])a.comments&&a.comments.length>1&&a.comments.sort((c,d)=>t.locStart(c)-t.locStart(d));e.length=0}function Kt(e,t,r){let n=r.locStart(t)-1;for(let o=1;o<e.length;++o)if(n<r.locStart(e[o]))return o-1;return 0}function go(e,t){let r=t-1;r=N(e,r,{backwards:!0}),r=Y(e,r,{backwards:!0}),r=N(e,r,{backwards:!0});let n=Y(e,r,{backwards:!0});return r!==n}var Ye=go;function Sn(e,t){let r=e.node;return r.printed=!0,t.printer.printComment(e,t)}function yo(e,t){var c;let r=e.node,n=[Sn(e,t)],{printer:o,originalText:u,locStart:i,locEnd:s}=t;if((c=o.isBlockComment)==null?void 0:c.call(o,r)){let d=V(u,s(r))?V(u,i(r),{backwards:!0})?G:Ke:" ";n.push(d)}else n.push(G);let a=Y(u,N(u,s(r)));return a!==!1&&V(u,a)&&n.push(G),n}function Ao(e,t,r){var a;let n=e.node,o=Sn(e,t),{printer:u,originalText:i,locStart:s}=t,D=(a=u.isBlockComment)==null?void 0:a.call(u,n);if(r!=null&&r.hasLineSuffix&&!(r!=null&&r.isBlock)||V(i,s(n),{backwards:!0})){let c=Ye(i,s(n));return{doc:Be([G,c?G:"",o]),isBlock:D,hasLineSuffix:!0}}return!D||r!=null&&r.hasLineSuffix?{doc:[Be([" ",o]),le],isBlock:D,hasLineSuffix:!0}:{doc:[" ",o],isBlock:D,hasLineSuffix:!1}}function Bo(e,t){let r=e.node;if(!r)return{};let n=t[Symbol.for("printedComments")];if((r.comments||[]).filter(D=>!n.has(D)).length===0)return{leading:"",trailing:""};let u=[],i=[],s;return e.each(()=>{let D=e.node;if(n!=null&&n.has(D))return;let{leading:a,trailing:c}=D;a?u.push(yo(e,t)):c&&(s=Ao(e,t,s),i.push(s.doc))},"comments"),{leading:u,trailing:i}}function vn(e,t,r){let{leading:n,trailing:o}=Bo(e,r);return!n&&!o?t:Ze(t,u=>[n,u,o])}function Pn(e){let{[Symbol.for("comments")]:t,[Symbol.for("printedComments")]:r}=e;for(let n of t){if(!n.printed&&!r.has(n))throw new Error('Comment "'+n.value.trim()+'" was not printed. Please report this error!');delete n.printed}}async function Ln(e,t,r,n,o){let{embeddedLanguageFormatting:u,printer:{embed:i,hasPrettierIgnore:s=()=>!1,getVisitorKeys:D}}=r;if(!i||u!=="auto")return;if(i.length>2)throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");let a=H(i.getVisitorKeys??D),c=[];p();let d=e.stack;for(let{print:l,node:F,pathStack:m}of c)try{e.stack=m;let E=await l(f,t,e,r);E&&o.set(F,E)}catch(E){if(globalThis.PRETTIER_DEBUG)throw E}e.stack=d;function f(l,F){return _o(l,F,r,n)}function p(){let{node:l}=e;if(l===null||typeof l!="object"||s(e))return;for(let m of a(l))Array.isArray(l[m])?e.each(p,m):e.call(p,m);let F=i(e,r);if(F){if(typeof F=="function"){c.push({print:F,node:l,pathStack:[...e.stack]});return}o.set(l,F)}}}async function _o(e,t,r,n){let o=await re({...r,...t,parentParser:r.parser,originalText:e},{passThrough:!0}),{ast:u}=await De(e,o),i=await n(u,o);return Xe(i)}function xo(e){return()=>{}}var In=xo;function ko(e,t){let{originalText:r,[Symbol.for("comments")]:n,locStart:o,locEnd:u,[Symbol.for("printedComments")]:i}=t,{node:s}=e,D=o(s),a=u(s);for(let c of n)o(c)>=D&&u(c)<=a&&i.add(c);return r.slice(D,a)}var Rn=ko;async function je(e,t){({ast:e}=await Ht(e,t));let r=new Map,n=new Bn(e),o=In(t),u=new Map;await Ln(n,s,t,je,u);let i=await Yn(n,t,s,void 0,u);return Pn(t),i;function s(a,c){return a===void 0||a===n?D(c):Array.isArray(a)?n.call(()=>D(c),...a):n.call(()=>D(c),a)}function D(a){o(n);let c=n.node;if(c==null)return"";let d=c&&typeof c=="object"&&a===void 0;if(d&&r.has(c))return r.get(c);let f=Yn(n,t,s,a,u);return d&&r.set(c,f),f}}function Yn(e,t,r,n,o){var D;let{node:u}=e,{printer:i}=t,s;return(D=i.hasPrettierIgnore)!=null&&D.call(i,e)?s=Rn(e,t):o.has(u)?s=o.get(u):s=i.print(e,t,r,n),u===t.cursorNode&&(s=Ze(s,a=>[xe,a,xe])),i.printComment&&(!i.willPrintOwnComments||!i.willPrintOwnComments(e,t))&&(s=vn(e,s,t)),s}async function Ht(e,t){let r=e.comments??[];t[Symbol.for("comments")]=r,t[Symbol.for("tokens")]=e.tokens??[],t[Symbol.for("printedComments")]=new Set,Nn(e,t);let{printer:{preprocess:n}}=t;return e=n?await n(e,t):e,{ast:e,comments:r}}var bo=({parser:e})=>e==="json"||e==="json5"||e==="json-stringify";function wo(e,t){let r=[e.node,...e.parentNodes],n=new Set([t.node,...t.parentNodes]);return r.find(o=>$n.has(o.type)&&n.has(o))}function jn(e){let t=e.length-1;for(;;){let r=e[t];if((r==null?void 0:r.type)==="Program"||(r==null?void 0:r.type)==="File")t--;else break}return e.slice(0,t+1)}function Oo(e,t,{locStart:r,locEnd:n}){let o=e.node,u=t.node;if(o===u)return{startNode:o,endNode:u};let i=r(e.node);for(let D of jn(t.parentNodes))if(r(D)>=i)u=D;else break;let s=n(t.node);for(let D of jn(e.parentNodes)){if(n(D)<=s)o=D;else break;if(o===u)break}return{startNode:o,endNode:u}}function qt(e,t,r,n,o=[],u){let{locStart:i,locEnd:s}=r,D=i(e),a=s(e);if(!(t>a||t<D||u==="rangeEnd"&&t===D||u==="rangeStart"&&t===a)){for(let c of Et(e,r)){let d=qt(c,t,r,n,[e,...o],u);if(d)return d}if(!n||n(e,o[0]))return{node:e,parentNodes:o}}}function No(e,t){return t!=="DeclareExportDeclaration"&&e!=="TypeParameterDeclaration"&&(e==="Directive"||e==="TypeAlias"||e==="TSExportAssignment"||e.startsWith("Declare")||e.startsWith("TSDeclare")||e.endsWith("Statement")||e.endsWith("Declaration"))}var $n=new Set(["JsonRoot","ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral","UnaryExpression","TemplateLiteral"]),To=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function Vn(e,t,r){if(!t)return!1;switch(e.parser){case"flow":case"babel":case"babel-flow":case"babel-ts":case"typescript":case"acorn":case"espree":case"meriyah":case"__babel_estree":return No(t.type,r==null?void 0:r.type);case"json":case"json5":case"json-stringify":return $n.has(t.type);case"graphql":return To.has(t.kind);case"vue":return t.tag!=="root"}return!1}function Mn(e,t,r){let{rangeStart:n,rangeEnd:o,locStart:u,locEnd:i}=t;Re.ok(o>n);let s=e.slice(n,o).search(/\S/),D=s===-1;if(!D)for(n+=s;o>n&&!/\S/.test(e[o-1]);--o);let a=qt(r,n,t,(p,l)=>Vn(t,p,l),[],"rangeStart"),c=D?a:qt(r,o,t,p=>Vn(t,p),[],"rangeEnd");if(!a||!c)return{rangeStart:0,rangeEnd:0};let d,f;if(bo(t)){let p=wo(a,c);d=p,f=p}else({startNode:d,endNode:f}=Oo(a,c,t));return{rangeStart:Math.min(u(d),u(f)),rangeEnd:Math.max(i(d),i(f))}}function So(e,t){let{cursorOffset:r,locStart:n,locEnd:o}=t,u=H(t.printer.getVisitorKeys),i=D=>n(D)<=r&&o(D)>=r,s=e;for(let D of bn(e,{getVisitorKeys:u,filter:i}))s=D;return s}var Wn=So;var Hn="\uFEFF",Un=Symbol("cursor");async function qn(e,t,r=0){if(!e||e.trim().length===0)return{formatted:"",cursorOffset:-1,comments:[]};let{ast:n,text:o}=await De(e,t);t.cursorOffset>=0&&(t.cursorNode=Wn(n,t));let u=await je(n,t,r);r>0&&(u=qe([G,u],r,t.tabWidth));let i=fe(u,t);if(r>0){let D=i.formatted.trim();i.cursorNodeStart!==void 0&&(i.cursorNodeStart-=i.formatted.indexOf(D)),i.formatted=D+be(t.endOfLine)}let s=t[Symbol.for("comments")];if(t.cursorOffset>=0){let D,a,c,d,f;if(t.cursorNode&&i.cursorNodeText?(D=t.locStart(t.cursorNode),a=o.slice(D,t.locEnd(t.cursorNode)),c=t.cursorOffset-D,d=i.cursorNodeStart,f=i.cursorNodeText):(D=0,a=o,c=t.cursorOffset,d=0,f=i.formatted),a===f)return{formatted:i.formatted,cursorOffset:d+c,comments:s};let p=a.split("");p.splice(c,0,Un);let l=f.split(""),F=(0,Kn.diffArrays)(p,l),m=d;for(let E of F)if(E.removed){if(E.value.includes(Un))break}else m+=E.count;return{formatted:i.formatted,cursorOffset:m,comments:s}}return{formatted:i.formatted,cursorOffset:-1,comments:s}}async function vo(e,t){let{ast:r,text:n}=await De(e,t),{rangeStart:o,rangeEnd:u}=Mn(n,t,r),i=n.slice(o,u),s=Math.min(o,n.lastIndexOf(`
`,o)+1),D=n.slice(s,o).match(/^\s*/)[0],a=Fe(D,t.tabWidth),c=await qn(i,{...t,rangeStart:0,rangeEnd:Number.POSITIVE_INFINITY,cursorOffset:t.cursorOffset>o&&t.cursorOffset<=u?t.cursorOffset-o:-1,endOfLine:"lf"},a),d=c.formatted.trimEnd(),{cursorOffset:f}=t;f>u?f+=d.length-i.length:c.cursorOffset>=0&&(f=c.cursorOffset+o);let p=n.slice(0,o)+d+n.slice(u);if(t.endOfLine!=="lf"){let l=be(t.endOfLine);f>=0&&l===`\r
`&&(f+=_t(p.slice(0,f),`
`)),p=ee(!1,p,`
`,l)}return{formatted:p,cursorOffset:f,comments:c.comments}}function Jt(e,t,r){return typeof t!="number"||Number.isNaN(t)||t<0||t>e.length?r:t}function zn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o}=t;return r=Jt(e,r,-1),n=Jt(e,n,0),o=Jt(e,o,e.length),{...t,cursorOffset:r,rangeStart:n,rangeEnd:o}}function Jn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u}=zn(e,t),i=e.charAt(0)===Hn;if(i&&(e=e.slice(1),r--,n--,o--),u==="auto"&&(u=hr(e)),e.includes("\r")){let s=D=>_t(e.slice(0,Math.max(D,0)),`\r
`);r-=s(r),n-=s(n),o-=s(o),e=gr(e)}return{hasBOM:i,text:e,options:zn(e,{...t,cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u})}}async function Gn(e,t){let r=await ft(t);return!r.hasPragma||r.hasPragma(e)}async function Xt(e,t){let{hasBOM:r,text:n,options:o}=Jn(e,await re(t));if(o.rangeStart>=o.rangeEnd&&n!==""||o.requirePragma&&!await Gn(n,o))return{formatted:e,cursorOffset:t.cursorOffset,comments:[]};let u;return o.rangeStart>0||o.rangeEnd<n.length?u=await vo(n,o):(!o.requirePragma&&o.insertPragma&&o.printer.insertPragma&&!await Gn(n,o)&&(n=o.printer.insertPragma(n)),u=await qn(n,o)),r&&(u.formatted=Hn+u.formatted,u.cursorOffset>=0&&u.cursorOffset++),u}async function Xn(e,t,r){let{text:n,options:o}=Jn(e,await re(t)),u=await De(n,o);return r&&(r.preprocessForPrint&&(u.ast=await Ht(u.ast,o)),r.massage&&(u.ast=fn(u.ast,o))),u}async function Zn(e,t){t=await re(t);let r=await je(e,t);return fe(r,t)}async function Qn(e,t){let r=Pr(e),{formatted:n}=await Xt(r,{...t,parser:"__js_expression"});return n}async function eu(e,t){t=await re(t);let{ast:r}=await De(e,t);return je(r,t)}async function tu(e,t){return fe(e,await re(t))}var Qt={};We(Qt,{addDanglingComment:()=>X,addLeadingComment:()=>ne,addTrailingComment:()=>ue,getAlignmentSize:()=>Fe,getIndentSize:()=>nu,getMaxContinuousCount:()=>ru,getNextNonSpaceNonCommentCharacter:()=>iu,getNextNonSpaceNonCommentCharacterIndex:()=>Go,getStringWidth:()=>we,hasNewline:()=>V,hasNewlineInRange:()=>uu,hasSpaces:()=>ou,isNextLineEmpty:()=>Jo,isNextLineEmptyAfterIndex:()=>Ct,isPreviousLineEmpty:()=>Ho,makeString:()=>su,skip:()=>me,skipEverythingButNewLine:()=>mt,skipInlineComment:()=>Ee,skipNewline:()=>Y,skipSpaces:()=>N,skipToLineEnd:()=>dt,skipTrailingComment:()=>Ce,skipWhitespace:()=>xn});function Lo(e,t){if(t===!1)return!1;if(e.charAt(t)==="/"&&e.charAt(t+1)==="*"){for(let r=t+2;r<e.length;++r)if(e.charAt(r)==="*"&&e.charAt(r+1)==="/")return r+2}return t}var Ee=Lo;function Io(e,t){return t===!1?!1:e.charAt(t)==="/"&&e.charAt(t+1)==="/"?mt(e,t):t}var Ce=Io;function Ro(e,t){let r=null,n=t;for(;n!==r;)r=n,n=N(e,n),n=Ee(e,n),n=Ce(e,n),n=Y(e,n);return n}var Ve=Ro;function Yo(e,t){let r=null,n=t;for(;n!==r;)r=n,n=dt(e,n),n=Ee(e,n),n=N(e,n);return n=Ce(e,n),n=Y(e,n),n!==!1&&V(e,n)}var Ct=Yo;function Zt(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function jo(e,t){let r=e.match(new RegExp(`(${Zt(t)})+`,"g"));return r===null?0:r.reduce((n,o)=>Math.max(n,o.length/t.length),0)}var ru=jo;function Vo(e,t){let r=e.lastIndexOf(`
`);return r===-1?0:Fe(e.slice(r+1).match(/^[\t ]*/)[0],t)}var nu=Vo;function $o(e,t,r){for(let n=t;n<r;++n)if(e.charAt(n)===`
`)return!0;return!1}var uu=$o;function Mo(e,t,r={}){return N(e,r.backwards?t-1:t,r)!==t}var ou=Mo;function Wo(e,t){let r=Ve(e,t);return r===!1?"":e.charAt(r)}var iu=Wo;function Uo(e,t,r){let n=t==='"'?"'":'"',u=ee(!1,e,/\\(.)|(["'])/gs,(i,s,D)=>s===n?s:D===t?"\\"+D:D||(r&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s)?s:"\\"+s));return t+u+t}var su=Uo;function zo(e,t,r){return Ve(e,r(t))}function Go(e,t){return arguments.length===2||typeof t=="number"?Ve(e,t):zo(...arguments)}function Ko(e,t,r){return Ye(e,r(t))}function Ho(e,t){return arguments.length===2||typeof t=="number"?Ye(e,t):Ko(...arguments)}function qo(e,t,r){return Ct(e,r(t))}function Jo(e,t){return arguments.length===2||typeof t=="number"?Ct(e,t):qo(...arguments)}var er={};We(er,{builders:()=>Xo,printer:()=>Zo,utils:()=>Qo});var Xo={join:ke,line:Ke,softline:Er,hardline:G,literalline:He,group:At,conditionalGroup:fr,fill:Ge,lineSuffix:Be,lineSuffixBoundary:dr,cursor:xe,breakParent:le,ifBreak:Fr,trim:mr,indent:ie,indentIfBreak:pr,align:oe,addAlignmentToDoc:qe,markAsRoot:cr,dedentToRoot:ar,dedent:lr,hardlineWithoutBreakParent:_e,literallineWithoutBreakParent:Bt,label:Cr,concat:e=>e},Zo={printDocToString:fe},Qo={willBreak:wr,traverseDoc:Ae,findInDoc:Je,mapDoc:Ne,removeLines:Nr,stripTrailingHardline:Xe,replaceEndOfLine:Tr,canBreak:Sr};var Du="3.1.1";function ae(e,t=1){return async(...r)=>{let n=r[t]??{},o=n.plugins??[];return r[t]={...n,plugins:Array.isArray(o)?o:Object.values(o)},e(...r)}}var au=ae(Xt);async function cu(e,t){let{formatted:r}=await au(e,{...t,cursorOffset:-1});return r}async function ei(e,t){return await cu(e,t)===e}var ti=ae(et,0),ri={parse:ae(Xn),formatAST:ae(Zn),formatDoc:ae(Qn),printToDoc:ae(eu),printDocToString:ae(tu)};var qc=tr;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.css */ "./src/input.css");





window.addEventListener("load", (e) => {
  let body = document.querySelector("body");
  body.classList.add("body");
  body.append(...(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

  let content = document.querySelector("#content");
  content.classList.add("content");

  content.append(...(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLG1IQUFtSCxJ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RCxVQUFVLGNBQWMsdUJBQXVCLElBQUksWUFBWSxhQUFhLHFCQUFxQixFQUFFLFNBQVMsdUJBQXVCLHlCQUF5QixvQkFBb0IsMEZBQTBGLFVBQXNKOzs7Ozs7O1VDakNwMUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ1I7QUFDQTtBQUNSOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQVE7O0FBRXpCO0FBQ0E7O0FBRUEsb0JBQW9CLG9EQUFJO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2lucHV0LmNzcz9kNzhhIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGVudFJlc2V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zd2l0Y2hBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvcHJldHRpZXIvc3RhbmRhbG9uZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS9yZWRIb21lQkcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS9ibHVlSG9tZUJHLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2UveWVsbG93SG9tZUJHLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2UvbWVudS9iaWdTcGljeVdyYXAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxuaWE6d2dodEA1MDAmZmFtaWx5PUxpbGl0YStPbmUmZmFtaWx5PU11a3RhOndnaHRANTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4hIHRhaWx3aW5kY3NzIHYzLjQuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cbiovLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxlZnQtNCB7XG4gIGxlZnQ6IDFyZW07XG59XG4udG9wLTQge1xuICB0b3A6IDFyZW07XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaC05NiB7XG4gIGhlaWdodDogMjRyZW07XG59XG4uaC1maXQge1xuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4udy05NiB7XG4gIHdpZHRoOiAyNHJlbTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdhcC01IHtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuLmdhcC02IHtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucm91bmRlZC1mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLmJvcmRlci00IHtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG59XG4uYm9yZGVyLWJsYWNrIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1ncmVlbi01MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDE5NywgOTQsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxOTcsIDk0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctY292ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJnLWNlbnRlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5iZy1uby1yZXBlYXQge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnB4LTQge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4ucHgtNiB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG4ucHktMSB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuLmZvbnQtbXVrdGEge1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cbi5mb250LWxpbGl0YU9uZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZScsIHNhbnMtc2VyaWY7XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuLnRleHQtNXhsIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZXh0LTZ4bCB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9udC1leHRyYWJvbGQge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGV4dC13aGl0ZSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udHJhbnNpdGlvbi1hbGwge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjUxLCAyMzUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjUxLCAyMzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLm5hdiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuODc1cmVtO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtZmFtaWx5OiAnS2FsbmlhJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5cbi5uYXYtYnRuIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi5uYXYtYnRuOmhvdmVyIHtcbiAgLS10dy1zaGFkb3c6IDVweCA1cHggcmdiYSgwLCAwLCAwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogNXB4IDVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDVweCA1cHggcmdiYSgwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbi5hY3RpdmUtaG9tZSB7XG4gIC0tdHctc2hhZG93OiA0cHggNHB4IHJnYigzNCwgMTk3LCA5NCksNC43NXB4IDQuNzVweCByZ2IoMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiA0cHggNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDQuNzVweCA0Ljc1cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCA0cHggNHB4IHJnYigzNCwgMTk3LCA5NCksNC43NXB4IDQuNzVweCByZ2IoMCwwLDApO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cblxuLmFjdGl2ZS1tZW51IHtcbiAgLS10dy1zaGFkb3c6IDBweCAwcHggcmdiKDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDBweCAwcHggcmdiKDAsMCwwKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG59XG4uYWN0aXZlLWNvbnRhY3Qge1xuICAtLXR3LXNoYWRvdzogMHB4IDBweCByZ2IoMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMHB4IDBweCByZ2IoMCwwLDApO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjg3NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC44NzVyZW07XG59XG5cbi5wYWdlLWJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuXG4uYmFubmVyLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ucGFnZS1pbWctZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ucGFnZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnVyZ2VyLWltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5waXp6YS1pbWcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ucGFzdGEtaW1nIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ucGFnZS1yZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5wYWdlLWJsdWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5wYWdlLXllbGxvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnBhZ2UtcGFyYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4ICMwMDA7XG59XG5cbi5waXp6YSB7XG4gIHRvcDogMzMuMzMzMzMzJTtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5idXJnZXIge1xuICB0b3A6IDMuNXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5wYXN0YSB7XG4gIHRvcDogMy41cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDAsIDAsIDAsIDEpIDAlLFxuICAgIHJnYmEoNjksIDY5LCA2OSwgMSkgNTAlLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxuICApO1xufVxuXG4uZ3JvdXA6aG92ZXIgLmdyb3VwLWhvdmVyXFxcXDpzY2FsZS0xMTAge1xuICAtLXR3LXNjYWxlLXg6IDEuMTtcbiAgLS10dy1zY2FsZS15OiAxLjE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEuMSkgc2NhbGVZKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuXG4uZ3JvdXA6aG92ZXIgLmdyb3VwLWhvdmVyXFxcXDpzY2FsZS0xMDUge1xuICAtLXR3LXNjYWxlLXg6IDEuMDU7XG4gIC0tdHctc2NhbGUteTogMS4wNTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMS4wNSkgc2NhbGVZKDEuMDUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6cHktNiB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG5cbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOmZvbnQtbXVrdGEge1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6dGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVB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K0M7QUFDakQ7O0FBRUE7RUFDRSx5REFBaUQ7QUFDbkQ7O0FBR0U7RUFBQSxrQkFBb0Y7RUFBcEYsa0JBQW9GO0VBQXBGLG1CQUFvRjtFQUFwRixrQkFBb0Y7RUFBcEYscUNBQW9GO0VBQXBGLGdCQUFvRjtFQUFwRixzQkFBb0Y7RUFBcEYsb0JBQW9GO0VBQXBGLDZCQUFvRjtFQUFwRixrREFBb0Y7RUFDcEY7QUFEb0Y7O0FBS3BGO0VBQUEsZUFBdUI7RUFBdkIsZUFBdUI7RUFBdkI7QUFBdUI7QUFHdkI7RUFBQSxXQUFzQjtFQUF0QixlQUFzQjtFQUF0QjtBQUFzQjtBQUd0QjtFQUFBLFdBQXNCO0VBQXRCLGVBQXNCO0VBQXRCO0FBQXNCOztBQUd4QjtFQUNFLHlEQUFvRDtFQUNwRCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEI7Ozs7O0dBS0M7QUFDSDs7QUF2SEE7RUFBQSxpQkF3SEE7RUF4SEEsaUJBd0hBO0VBeEhBLG1LQXdIQTtFQXhIQTtBQXdIQTs7QUF4SEE7RUFBQSxrQkF3SEE7RUF4SEEsa0JBd0hBO0VBeEhBLHFLQXdIQTtFQXhIQTtBQXdIQTs7QUF4SEE7RUFBQSxtQkF3SEE7RUF4SEE7QUF3SEE7O0FBeEhBO0VBQUE7QUF3SEE7O0FBeEhBO0VBQUEsa0JBd0hBO0VBeEhBO0FBd0hBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsbmlhOndnaHRANTAwJmZhbWlseT1MaWxpdGErT25lJmZhbWlseT1NdWt0YTp3Z2h0QDUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4uYm9keSB7XFxuICBAYXBwbHkgdy1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4gYmctYW1iZXItNTA7XFxufVxcblxcbi5uYXYge1xcbiAgQGFwcGx5IG14LWF1dG8gZmxleCBtYXgtdy1zY3JlZW4teGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTMuNTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgQGFwcGx5IGZvbnQta2FsbmlhIHRleHQtNHhsO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBAYXBwbHkgZmxleCBnYXAtNDtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItcyBib3JkZXItYmxhY2sgcHgtNiBweS0yIGZvbnQtbXVrdGEgZm9udC1ib2xkIHRyYW5zaXRpb24tc2hhZG93IGhvdmVyOnNoYWRvdy1uYXY7XFxufVxcblxcbi5hY3RpdmUtaG9tZSB7XFxuICBAYXBwbHkgc2hhZG93LWJ0bkhvbWU7XFxufVxcblxcbi5hY3RpdmUtbWVudSB7XFxuICBAYXBwbHkgc2hhZG93LWJ0bk1lbnU7XFxufVxcbi5hY3RpdmUtY29udGFjdCB7XFxuICBAYXBwbHkgc2hhZG93LWJ0bkNvbnRhY3Q7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIEBhcHBseSBteC1hdXRvIG1heC13LXNjcmVlbi14bCBweC0zLjU7XFxufVxcblxcbi5wYWdlLWJhbm5lciB7XFxuICBAYXBwbHkgdy1mdWxsO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gIEBhcHBseSBncmlkIGJvcmRlci1jb2xsYXBzZSBncmlkLWNvbHMtMyBncmlkLXJvd3MtMSBib3JkZXIgYm9yZGVyLTQgYm9yZGVyLWJsYWNrO1xcbn1cXG5cXG4uYmFubmVyLWltZyB7XFxuICBAYXBwbHkgaC1mdWxsIHctZnVsbCBib3JkZXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci00IGJvcmRlci1ibGFjaztcXG59XFxuXFxuLnBhZ2Uge1xcbiAgQGFwcGx5IHN0aWNreSB0b3AtMCBoLXNjcmVlbiB3LWZ1bGwgcHktODtcXG59XFxuXFxuLnBhZ2UtaW1nLWRpdiB7XFxuICBAYXBwbHkgcmVsYXRpdmUgaC1mdWxsIHctZnVsbCBib3JkZXItY29sbGFwc2Ugb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItNCBib3JkZXItYmxhY2sgYmctY292ZXIgYmctY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1pbWcge1xcbiAgQGFwcGx5IGFic29sdXRlIHctZnVsbDtcXG59XFxuXFxuLmJ1cmdlci1pbWcge1xcbiAgQGFwcGx5IG9wYWNpdHktOTA7XFxufVxcbi5waXp6YS1pbWcge1xcbiAgQGFwcGx5IG9wYWNpdHktNzA7XFxufVxcbi5wYXN0YS1pbWcge1xcbiAgQGFwcGx5IG9wYWNpdHktODA7XFxufVxcblxcbi5wYWdlLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2UvcmVkSG9tZUJHLmpwZ1xcXCIpO1xcbn1cXG5cXG4ucGFnZS1ibHVlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZS9ibHVlSG9tZUJHLmpwZ1xcXCIpO1xcbn1cXG5cXG4ucGFnZS15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlL3llbGxvd0hvbWVCRy5qcGdcXFwiKTtcXG59XFxuXFxuLnBhZ2UtcGFyYSB7XFxuICBAYXBwbHkgYWJzb2x1dGUgcHgtNCAgdGV4dC1jZW50ZXIgZm9udC1saWxpdGFPbmUgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAjMDAwO1xcbn1cXG5cXG4ucGl6emEge1xcbiAgQGFwcGx5IHRvcC0xLzMgdGV4dC05eGw7XFxufVxcbi5idXJnZXIge1xcbiAgQGFwcGx5IHRvcC0xNCB0ZXh0LTV4bDtcXG59XFxuLnBhc3RhIHtcXG4gIEBhcHBseSB0b3AtMTQgdGV4dC01eGw7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlL21lbnUvYmlnU3BpY3lXcmFwLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcXG4gICAgcmdiYSg2OSwgNjksIDY5LCAxKSA1MCUsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxcbiAgKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRSZXNldCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lclRleHQgPSBcIlwiO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbChcbiAgdHlwZSxcbiAgY2xhc3NlcyxcbiAgY29udGVudCxcbiAgcGFyZW50RWwsXG4gIGF0dHJpYnV0ZXMgPSB7fSxcbikge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJlbnRFbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgY3JlYXRlRWwgZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCBzd2l0Y2hUYWIgZnJvbSBcIi4vc3dpdGNoQWN0aXZlVGFiXCI7XG5pbXBvcnQgY29udGVudFJlc2V0IGZyb20gXCIuL2NvbnRlbnRSZXNldFwiO1xuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcbmltcG9ydCBIb21lQmFubmVyQSBmcm9tIFwiLi9pbWFnZS9ob21lQmFubmVyQS5qcGdcIjtcbmltcG9ydCBIb21lQmFubmVyQiBmcm9tIFwiLi9pbWFnZS9ob21lQmFubmVyQi5qcGdcIjtcbmltcG9ydCBIb21lQmFubmVyQyBmcm9tIFwiLi9pbWFnZS9ob21lQmFubmVyQy5qcGdcIjtcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi9pbWFnZS9waXp6YS5qcGdcIjtcbmltcG9ydCBwYXN0YSBmcm9tIFwiLi9pbWFnZS9wYXN0YS5qcGdcIjtcbmltcG9ydCBidXJnZXIgZnJvbSBcIi4vaW1hZ2UvYnVyZ2VyLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBzd2l0Y2hUYWIoXCJob21lXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVzZXQoKTtcblxuICBjb25zdCBwYWdlQmFubmVyID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wicGFnZS1iYW5uZXJcIl0sIFwiXCIsIGNvbnRlbnQpO1xuXG4gIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcImJhbm5lclwiXSwgXCJcIiwgcGFnZUJhbm5lcik7XG5cbiAgY29uc3QgaG9tZUJhbm5lckEgPSBjcmVhdGVFbChcImltZ1wiLCBbXCJiYW5uZXItaW1nXCJdLCBcIlwiLCBiYW5uZXIsIHtcbiAgICBzcmM6IEhvbWVCYW5uZXJBLFxuICB9KTtcblxuICBjb25zdCBob21lQmFubmVyQiA9IGNyZWF0ZUVsKFwiaW1nXCIsIFtcImJhbm5lci1pbWdcIl0sIFwiXCIsIGJhbm5lciwge1xuICAgIHNyYzogSG9tZUJhbm5lckIsXG4gIH0pO1xuXG4gIGNvbnN0IGhvbWVCYW5uZXJDID0gY3JlYXRlRWwoXCJpbWdcIiwgW1wiYmFubmVyLWltZ1wiXSwgXCJcIiwgYmFubmVyLCB7XG4gICAgc3JjOiBIb21lQmFubmVyQyxcbiAgfSk7XG5cbiAgY29uc3QgcGFnZVJlZCA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInBhZ2VcIl0sIFwiXCIsIHBhZ2VCYW5uZXIpO1xuICBjb25zdCBwYWdlUmVkSW1nRGl2ID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJwYWdlLWltZy1kaXZcIiwgXCJwYWdlLXJlZFwiXSxcbiAgICBcIlwiLFxuICAgIHBhZ2VSZWQsXG4gICAge30sXG4gICk7XG4gIGNvbnN0IHBhZ2VSZWRJbWcgPSBjcmVhdGVFbChcbiAgICBcImltZ1wiLFxuICAgIFtcInBhZ2UtaW1nXCIsIFwicGFzdGEtaW1nXCJdLFxuICAgIFwiXCIsXG4gICAgcGFnZVJlZEltZ0RpdixcbiAgICB7IHNyYzogcGFzdGEgfSxcbiAgKTtcbiAgY29uc3QgcGFnZVJlZFAgPSBjcmVhdGVFbChcbiAgICBcInBcIixcbiAgICBbXCJwYWdlLXBhcmFcIiwgXCJwYXN0YVwiXSxcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZW1xdWUgaW52ZW50b3JlIGVzc2UgZXggYmxhbmRpdGlpcyByZXBlbGxhdCBpdGFxdWUhXCIsXG4gICAgcGFnZVJlZEltZ0RpdixcbiAgKTtcblxuICBjb25zdCBwYWdlQmx1ZSA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInBhZ2VcIl0sIFwiXCIsIHBhZ2VCYW5uZXIpO1xuICBjb25zdCBwYWdlQmx1ZUltZ0RpdiA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wicGFnZS1pbWctZGl2XCIsIFwicGFnZS1ibHVlXCJdLFxuICAgIFwiXCIsXG4gICAgcGFnZUJsdWUsXG4gICAge30sXG4gICk7XG4gIGNvbnN0IHBhZ2VCbHVlSW1nID0gY3JlYXRlRWwoXG4gICAgXCJpbWdcIixcbiAgICBbXCJwYWdlLWltZ1wiLCBcImJ1cmdlci1pbWdcIl0sXG4gICAgXCJcIixcbiAgICBwYWdlQmx1ZUltZ0RpdixcbiAgICB7IHNyYzogYnVyZ2VyIH0sXG4gICk7XG4gIGNvbnN0IHBhZ2VCbHVlUCA9IGNyZWF0ZUVsKFxuICAgIFwicFwiLFxuICAgIFtcInBhZ2UtcGFyYVwiLCBcImJ1cmdlclwiXSxcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWb2x1cHRhdHVtIGxhYm9yaW9zYW0gcXVhZXJhdCBwZXJmZXJlbmRpcyBxdWFtIG1haW9yZXMgcG9zc2ltdXM/XCIsXG4gICAgcGFnZUJsdWVJbWdEaXYsXG4gICk7XG5cbiAgY29uc3QgcGFnZVllbGxvdyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInBhZ2VcIl0sIFwiXCIsIHBhZ2VCYW5uZXIpO1xuICBjb25zdCBwYWdlWWVsbG93SW1nRGl2ID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJwYWdlLWltZy1kaXZcIiwgXCJwYWdlLXllbGxvd1wiXSxcbiAgICBcIlwiLFxuICAgIHBhZ2VZZWxsb3csXG4gICAge30sXG4gICk7XG4gIGNvbnN0IHBhZ2VZZWxsb3dJbWcgPSBjcmVhdGVFbChcbiAgICBcImltZ1wiLFxuICAgIFtcInBhZ2UtaW1nXCIsIFwicGl6emEtaW1nXCJdLFxuICAgIFwiXCIsXG4gICAgcGFnZVllbGxvd0ltZ0RpdixcbiAgICB7IHNyYzogcGl6emEgfSxcbiAgKTtcbiAgY29uc3QgcGFnZVllbGxvd1AgPSBjcmVhdGVFbChcbiAgICBcInBcIixcbiAgICBbXCJwYWdlLXBhcmFcIiwgXCJwaXp6YVwiXSxcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LlwiLFxuICAgIHBhZ2VZZWxsb3dJbWdEaXYsXG4gICk7XG5cbiAgcmV0dXJuIFtwYWdlQmFubmVyLCBwYWdlUmVkLCBwYWdlQmx1ZSwgcGFnZVllbGxvd107XG59XG4iLCJpbXBvcnQgeyBkb2MgfSBmcm9tIFwicHJldHRpZXJcIjtcbmltcG9ydCBcIi4vaW5wdXQuY3NzXCI7XG5pbXBvcnQgY3JlYXRlRWwgZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZUVsKFwibmF2XCIsIFtcIm5hdlwiXSwgXCJcIiwgXCJcIiwge30pO1xuXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbChcImRpdlwiLCBbXCJsb2dvXCJdLCBcIkxvcmVtXCIsIG5hdiwge30pO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBjcmVhdGVFbChcImRpdlwiLCBbXCJuYXZpZ2F0aW9uXCJdLCBcIlwiLCBuYXYsIHt9KTtcblxuICBjb25zdCBob21lQnRuID0gY3JlYXRlRWwoXCJidXR0b25cIiwgW1wibmF2LWJ0blwiXSwgXCJIb21lXCIsIG5hdmlnYXRpb24sIHtcbiAgICBcImRhdGEtaWRcIjogXCJob21lXCIsXG4gIH0pO1xuICBjb25zdCBtZW51QnRuID0gY3JlYXRlRWwoXCJidXR0b25cIiwgW1wibmF2LWJ0blwiXSwgXCJNZW51XCIsIG5hdmlnYXRpb24sIHtcbiAgICBcImRhdGEtaWRcIjogXCJtZW51XCIsXG4gIH0pO1xuICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlRWwoXCJidXR0b25cIiwgW1wibmF2LWJ0blwiXSwgXCJDb250YWN0XCIsIG5hdmlnYXRpb24sIHtcbiAgICBcImRhdGEtaWRcIjogXCJjb250YWN0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBbXSwgXCJcIiwgXCJcIiwgeyBpZDogXCJjb250ZW50XCIgfSk7XG5cbiAgcmV0dXJuIFtuYXYsIGNvbnRlbnRdO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgXCIuL2lucHV0LmNzc1wiO1xuaW1wb3J0IGNvbnRlbnRSZXNldCBmcm9tIFwiLi9jb250ZW50UmVzZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgY29udGVudFJlc2V0KCk7XG5cbiAgcmV0dXJuIFtdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dpdGNoVGFiKHRhYikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idG5cIikuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09PSBgJHt0YWJ9YCkge1xuICAgICAgY29uc29sZS5sb2coYnRuKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBhY3RpdmUtJHt0YWJ9YCk7XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciBsdT1PYmplY3QuY3JlYXRlO3ZhciAkZT1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGZ1PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEZ1PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBwdT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsZHU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgbXU9KGUsdCk9PigpPT4oZSYmKHQ9ZShlPTApKSx0KTt2YXIgTWU9KGUsdCk9PigpPT4odHx8ZSgodD17ZXhwb3J0czp7fX0pLmV4cG9ydHMsdCksdC5leHBvcnRzKSxXZT0oZSx0KT0+e2Zvcih2YXIgciBpbiB0KSRlKGUscix7Z2V0OnRbcl0sZW51bWVyYWJsZTohMH0pfSxucj0oZSx0LHIsbik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG8gb2YgRnUodCkpIWR1LmNhbGwoZSxvKSYmbyE9PXImJiRlKGUsbyx7Z2V0OigpPT50W29dLGVudW1lcmFibGU6IShuPWZ1KHQsbykpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIGhlPShlLHQscik9PihyPWUhPW51bGw/bHUocHUoZSkpOnt9LG5yKHR8fCFlfHwhZS5fX2VzTW9kdWxlPyRlKHIsXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOnIsZSkpLEV1PWU9Pm5yKCRlKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUpO3ZhciBDdT0oZSx0LHIpPT57aWYoIXQuaGFzKGUpKXRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBcIityKX07dmFyIGh0PShlLHQscik9PntpZih0LmhhcyhlKSl0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIHRoZSBzYW1lIHByaXZhdGUgbWVtYmVyIG1vcmUgdGhhbiBvbmNlXCIpO3QgaW5zdGFuY2VvZiBXZWFrU2V0P3QuYWRkKGUpOnQuc2V0KGUscil9O3ZhciBjZT0oZSx0LHIpPT4oQ3UoZSx0LFwiYWNjZXNzIHByaXZhdGUgbWV0aG9kXCIpLHIpO3ZhciBvcj1NZShndD0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShndCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtndC5kZWZhdWx0PXVyO2Z1bmN0aW9uIHVyKCl7fXVyLnByb3RvdHlwZT17ZGlmZjpmdW5jdGlvbih0LHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTp7fSxvPW4uY2FsbGJhY2s7dHlwZW9mIG49PVwiZnVuY3Rpb25cIiYmKG89bixuPXt9KSx0aGlzLm9wdGlvbnM9bjt2YXIgdT10aGlzO2Z1bmN0aW9uIGkoRil7cmV0dXJuIG8/KHNldFRpbWVvdXQoZnVuY3Rpb24oKXtvKHZvaWQgMCxGKX0sMCksITApOkZ9dD10aGlzLmNhc3RJbnB1dCh0KSxyPXRoaXMuY2FzdElucHV0KHIpLHQ9dGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKHQpKSxyPXRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShyKSk7dmFyIHM9ci5sZW5ndGgsRD10Lmxlbmd0aCxhPTEsYz1zK0Q7bi5tYXhFZGl0TGVuZ3RoJiYoYz1NYXRoLm1pbihjLG4ubWF4RWRpdExlbmd0aCkpO3ZhciBkPVt7bmV3UG9zOi0xLGNvbXBvbmVudHM6W119XSxmPXRoaXMuZXh0cmFjdENvbW1vbihkWzBdLHIsdCwwKTtpZihkWzBdLm5ld1BvcysxPj1zJiZmKzE+PUQpcmV0dXJuIGkoW3t2YWx1ZTp0aGlzLmpvaW4ociksY291bnQ6ci5sZW5ndGh9XSk7ZnVuY3Rpb24gcCgpe2Zvcih2YXIgRj0tMSphO0Y8PWE7Ris9Mil7dmFyIG09dm9pZCAwLEU9ZFtGLTFdLEM9ZFtGKzFdLGc9KEM/Qy5uZXdQb3M6MCktRjtFJiYoZFtGLTFdPXZvaWQgMCk7dmFyIGg9RSYmRS5uZXdQb3MrMTxzLEI9QyYmMDw9ZyYmZzxEO2lmKCFoJiYhQil7ZFtGXT12b2lkIDA7Y29udGludWV9aWYoIWh8fEImJkUubmV3UG9zPEMubmV3UG9zPyhtPXl1KEMpLHUucHVzaENvbXBvbmVudChtLmNvbXBvbmVudHMsdm9pZCAwLCEwKSk6KG09RSxtLm5ld1BvcysrLHUucHVzaENvbXBvbmVudChtLmNvbXBvbmVudHMsITAsdm9pZCAwKSksZz11LmV4dHJhY3RDb21tb24obSxyLHQsRiksbS5uZXdQb3MrMT49cyYmZysxPj1EKXJldHVybiBpKGd1KHUsbS5jb21wb25lbnRzLHIsdCx1LnVzZUxvbmdlc3RUb2tlbikpO2RbRl09bX1hKyt9aWYobykoZnVuY3Rpb24gRigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtpZihhPmMpcmV0dXJuIG8oKTtwKCl8fEYoKX0sMCl9KSgpO2Vsc2UgZm9yKDthPD1jOyl7dmFyIGw9cCgpO2lmKGwpcmV0dXJuIGx9fSxwdXNoQ29tcG9uZW50OmZ1bmN0aW9uKHQscixuKXt2YXIgbz10W3QubGVuZ3RoLTFdO28mJm8uYWRkZWQ9PT1yJiZvLnJlbW92ZWQ9PT1uP3RbdC5sZW5ndGgtMV09e2NvdW50Om8uY291bnQrMSxhZGRlZDpyLHJlbW92ZWQ6bn06dC5wdXNoKHtjb3VudDoxLGFkZGVkOnIscmVtb3ZlZDpufSl9LGV4dHJhY3RDb21tb246ZnVuY3Rpb24odCxyLG4sbyl7Zm9yKHZhciB1PXIubGVuZ3RoLGk9bi5sZW5ndGgscz10Lm5ld1BvcyxEPXMtbyxhPTA7cysxPHUmJkQrMTxpJiZ0aGlzLmVxdWFscyhyW3MrMV0sbltEKzFdKTspcysrLEQrKyxhKys7cmV0dXJuIGEmJnQuY29tcG9uZW50cy5wdXNoKHtjb3VudDphfSksdC5uZXdQb3M9cyxEfSxlcXVhbHM6ZnVuY3Rpb24odCxyKXtyZXR1cm4gdGhpcy5vcHRpb25zLmNvbXBhcmF0b3I/dGhpcy5vcHRpb25zLmNvbXBhcmF0b3IodCxyKTp0PT09cnx8dGhpcy5vcHRpb25zLmlnbm9yZUNhc2UmJnQudG9Mb3dlckNhc2UoKT09PXIudG9Mb3dlckNhc2UoKX0scmVtb3ZlRW1wdHk6ZnVuY3Rpb24odCl7Zm9yKHZhciByPVtdLG49MDtuPHQubGVuZ3RoO24rKyl0W25dJiZyLnB1c2godFtuXSk7cmV0dXJuIHJ9LGNhc3RJbnB1dDpmdW5jdGlvbih0KXtyZXR1cm4gdH0sdG9rZW5pemU6ZnVuY3Rpb24odCl7cmV0dXJuIHQuc3BsaXQoXCJcIil9LGpvaW46ZnVuY3Rpb24odCl7cmV0dXJuIHQuam9pbihcIlwiKX19O2Z1bmN0aW9uIGd1KGUsdCxyLG4sbyl7Zm9yKHZhciB1PTAsaT10Lmxlbmd0aCxzPTAsRD0wO3U8aTt1Kyspe3ZhciBhPXRbdV07aWYoYS5yZW1vdmVkKXtpZihhLnZhbHVlPWUuam9pbihuLnNsaWNlKEQsRCthLmNvdW50KSksRCs9YS5jb3VudCx1JiZ0W3UtMV0uYWRkZWQpe3ZhciBkPXRbdS0xXTt0W3UtMV09dFt1XSx0W3VdPWR9fWVsc2V7aWYoIWEuYWRkZWQmJm8pe3ZhciBjPXIuc2xpY2UocyxzK2EuY291bnQpO2M9Yy5tYXAoZnVuY3Rpb24ocCxsKXt2YXIgRj1uW0QrbF07cmV0dXJuIEYubGVuZ3RoPnAubGVuZ3RoP0Y6cH0pLGEudmFsdWU9ZS5qb2luKGMpfWVsc2UgYS52YWx1ZT1lLmpvaW4oci5zbGljZShzLHMrYS5jb3VudCkpO3MrPWEuY291bnQsYS5hZGRlZHx8KEQrPWEuY291bnQpfX12YXIgZj10W2ktMV07cmV0dXJuIGk+MSYmdHlwZW9mIGYudmFsdWU9PVwic3RyaW5nXCImJihmLmFkZGVkfHxmLnJlbW92ZWQpJiZlLmVxdWFscyhcIlwiLGYudmFsdWUpJiYodFtpLTJdLnZhbHVlKz1mLnZhbHVlLHQucG9wKCkpLHR9ZnVuY3Rpb24geXUoZSl7cmV0dXJue25ld1BvczplLm5ld1Bvcyxjb21wb25lbnRzOmUuY29tcG9uZW50cy5zbGljZSgwKX19fSk7dmFyIGlyPU1lKHllPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHllLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3llLmRpZmZBcnJheXM9X3U7eWUuYXJyYXlEaWZmPXZvaWQgMDt2YXIgQXU9QnUob3IoKSk7ZnVuY3Rpb24gQnUoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBnZT1uZXcgQXUuZGVmYXVsdDt5ZS5hcnJheURpZmY9Z2U7Z2UudG9rZW5pemU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2xpY2UoKX07Z2Uuam9pbj1nZS5yZW1vdmVFbXB0eT1mdW5jdGlvbihlKXtyZXR1cm4gZX07ZnVuY3Rpb24gX3UoZSx0LHIpe3JldHVybiBnZS5kaWZmKGUsdCxyKX19KTt2YXIgUGU9TWUoKHBzLGpyKT0+e1widXNlIHN0cmljdFwiO3ZhciBZcj1uZXcgUHJveHkoU3RyaW5nLHtnZXQ6KCk9PllyfSk7anIuZXhwb3J0cz1Zcn0pO3ZhciBGbj17fTtXZShGbix7ZGVmYXVsdDooKT0+dW8sc2hvdWxkSGlnaGxpZ2h0OigpPT5ub30pO3ZhciBubyx1byxwbj1tdSgoKT0+e25vPSgpPT4hMSx1bz1TdHJpbmd9KTt2YXIgeW49TWUoRnQ9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoRnQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7RnQuY29kZUZyYW1lQ29sdW1ucz1nbjtGdC5kZWZhdWx0PWFvO3ZhciBkbj0ocG4oKSxFdShGbikpLG1uPW9vKFBlKCksITApO2Z1bmN0aW9uIGhuKGUpe2lmKHR5cGVvZiBXZWFrTWFwIT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIHQ9bmV3IFdlYWtNYXAscj1uZXcgV2Vha01hcDtyZXR1cm4oaG49ZnVuY3Rpb24obil7cmV0dXJuIG4/cjp0fSkoZSl9ZnVuY3Rpb24gb28oZSx0KXtpZighdCYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJvYmplY3RcIiYmdHlwZW9mIGUhPVwiZnVuY3Rpb25cIilyZXR1cm57ZGVmYXVsdDplfTt2YXIgcj1obih0KTtpZihyJiZyLmhhcyhlKSlyZXR1cm4gci5nZXQoZSk7dmFyIG49e19fcHJvdG9fXzpudWxsfSxvPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIHUgaW4gZSlpZih1IT09XCJkZWZhdWx0XCImJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHUpKXt2YXIgaT1vP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx1KTpudWxsO2kmJihpLmdldHx8aS5zZXQpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLHUsaSk6blt1XT1lW3VdfXJldHVybiBuLmRlZmF1bHQ9ZSxyJiZyLnNldChlLG4pLG59dmFyIGp0O2Z1bmN0aW9uIGlvKGUpe2lmKGUpe3ZhciB0O3JldHVybih0PWp0KSE9bnVsbHx8KGp0PW5ldyBtbi5kZWZhdWx0LmNvbnN0cnVjdG9yKHtlbmFibGVkOiEwLGxldmVsOjF9KSksanR9cmV0dXJuIG1uLmRlZmF1bHR9dmFyIEVuPSExO2Z1bmN0aW9uIHNvKGUpe3JldHVybntndXR0ZXI6ZS5ncmV5LG1hcmtlcjplLnJlZC5ib2xkLG1lc3NhZ2U6ZS5yZWQuYm9sZH19dmFyIENuPS9cXHJcXG58W1xcblxcclxcdTIwMjhcXHUyMDI5XS87ZnVuY3Rpb24gRG8oZSx0LHIpe2xldCBuPU9iamVjdC5hc3NpZ24oe2NvbHVtbjowLGxpbmU6LTF9LGUuc3RhcnQpLG89T2JqZWN0LmFzc2lnbih7fSxuLGUuZW5kKSx7bGluZXNBYm92ZTp1PTIsbGluZXNCZWxvdzppPTN9PXJ8fHt9LHM9bi5saW5lLEQ9bi5jb2x1bW4sYT1vLmxpbmUsYz1vLmNvbHVtbixkPU1hdGgubWF4KHMtKHUrMSksMCksZj1NYXRoLm1pbih0Lmxlbmd0aCxhK2kpO3M9PT0tMSYmKGQ9MCksYT09PS0xJiYoZj10Lmxlbmd0aCk7bGV0IHA9YS1zLGw9e307aWYocClmb3IobGV0IEY9MDtGPD1wO0YrKyl7bGV0IG09RitzO2lmKCFEKWxbbV09ITA7ZWxzZSBpZihGPT09MCl7bGV0IEU9dFttLTFdLmxlbmd0aDtsW21dPVtELEUtRCsxXX1lbHNlIGlmKEY9PT1wKWxbbV09WzAsY107ZWxzZXtsZXQgRT10W20tRl0ubGVuZ3RoO2xbbV09WzAsRV19fWVsc2UgRD09PWM/RD9sW3NdPVtELDBdOmxbc109ITA6bFtzXT1bRCxjLURdO3JldHVybntzdGFydDpkLGVuZDpmLG1hcmtlckxpbmVzOmx9fWZ1bmN0aW9uIGduKGUsdCxyPXt9KXtsZXQgbj0oci5oaWdobGlnaHRDb2RlfHxyLmZvcmNlQ29sb3IpJiYoMCxkbi5zaG91bGRIaWdobGlnaHQpKHIpLG89aW8oci5mb3JjZUNvbG9yKSx1PXNvKG8pLGk9KEYsbSk9Pm4/RihtKTptLHM9ZS5zcGxpdChDbikse3N0YXJ0OkQsZW5kOmEsbWFya2VyTGluZXM6Y309RG8odCxzLHIpLGQ9dC5zdGFydCYmdHlwZW9mIHQuc3RhcnQuY29sdW1uPT1cIm51bWJlclwiLGY9U3RyaW5nKGEpLmxlbmd0aCxsPShuPygwLGRuLmRlZmF1bHQpKGUscik6ZSkuc3BsaXQoQ24sYSkuc2xpY2UoRCxhKS5tYXAoKEYsbSk9PntsZXQgRT1EKzErbSxnPWAgJHtgICR7RX1gLnNsaWNlKC1mKX0gfGAsaD1jW0VdLEI9IWNbRSsxXTtpZihoKXtsZXQgWj1cIlwiO2lmKEFycmF5LmlzQXJyYXkoaCkpe2xldCAkPUYuc2xpY2UoMCxNYXRoLm1heChoWzBdLTEsMCkpLnJlcGxhY2UoL1teXFx0XS9nLFwiIFwiKSxRPWhbMV18fDE7Wj1bYFxuIGAsaSh1Lmd1dHRlcixnLnJlcGxhY2UoL1xcZC9nLFwiIFwiKSksXCIgXCIsJCxpKHUubWFya2VyLFwiXlwiKS5yZXBlYXQoUSldLmpvaW4oXCJcIiksQiYmci5tZXNzYWdlJiYoWis9XCIgXCIraSh1Lm1lc3NhZ2Usci5tZXNzYWdlKSl9cmV0dXJuW2kodS5tYXJrZXIsXCI+XCIpLGkodS5ndXR0ZXIsZyksRi5sZW5ndGg+MD9gICR7Rn1gOlwiXCIsWl0uam9pbihcIlwiKX1lbHNlIHJldHVybmAgJHtpKHUuZ3V0dGVyLGcpfSR7Ri5sZW5ndGg+MD9gICR7Rn1gOlwiXCJ9YH0pLmpvaW4oYFxuYCk7cmV0dXJuIHIubWVzc2FnZSYmIWQmJihsPWAke1wiIFwiLnJlcGVhdChmKzEpfSR7ci5tZXNzYWdlfVxuJHtsfWApLG4/by5yZXNldChsKTpsfWZ1bmN0aW9uIGFvKGUsdCxyLG49e30pe2lmKCFFbil7RW49ITA7bGV0IHU9XCJQYXNzaW5nIGxpbmVOdW1iZXIgYW5kIGNvbE51bWJlciBpcyBkZXByZWNhdGVkIHRvIEBiYWJlbC9jb2RlLWZyYW1lLiBQbGVhc2UgdXNlIGBjb2RlRnJhbWVDb2x1bW5zYC5cIjt7bGV0IGk9bmV3IEVycm9yKHUpO2kubmFtZT1cIkRlcHJlY2F0aW9uV2FybmluZ1wiLGNvbnNvbGUud2FybihuZXcgRXJyb3IodSkpfX1yZXR1cm4gcj1NYXRoLm1heChyLDApLGduKGUse3N0YXJ0Ontjb2x1bW46cixsaW5lOnR9fSxuKX19KTt2YXIgdHI9e307V2UodHIse19fZGVidWc6KCk9PnJpLGNoZWNrOigpPT5laSxkb2M6KCk9PmVyLGZvcm1hdDooKT0+Y3UsZm9ybWF0V2l0aEN1cnNvcjooKT0+YXUsZ2V0U3VwcG9ydEluZm86KCk9PnRpLHV0aWw6KCk9PlF0LHZlcnNpb246KCk9PkR1fSk7dmFyIGh1PShlLHQscixuKT0+e2lmKCEoZSYmdD09bnVsbCkpcmV0dXJuIHQucmVwbGFjZUFsbD90LnJlcGxhY2VBbGwocixuKTpyLmdsb2JhbD90LnJlcGxhY2UocixuKTp0LnNwbGl0KHIpLmpvaW4obil9LGVlPWh1O3ZhciBLbj1oZShpcigpLDEpO3ZhciBNPVwic3RyaW5nXCIsaj1cImFycmF5XCIsVz1cImN1cnNvclwiLFQ9XCJpbmRlbnRcIixTPVwiYWxpZ25cIix2PVwidHJpbVwiLF89XCJncm91cFwiLGs9XCJmaWxsXCIseD1cImlmLWJyZWFrXCIsUD1cImluZGVudC1pZi1icmVha1wiLEw9XCJsaW5lLXN1ZmZpeFwiLEk9XCJsaW5lLXN1ZmZpeC1ib3VuZGFyeVwiLEE9XCJsaW5lXCIsTz1cImxhYmVsXCIsYj1cImJyZWFrLXBhcmVudFwiLFVlPW5ldyBTZXQoW1csVCxTLHYsXyxrLHgsUCxMLEksQSxPLGJdKTtmdW5jdGlvbiB4dShlKXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIilyZXR1cm4gTTtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBqO2lmKCFlKXJldHVybjtsZXR7dHlwZTp0fT1lO2lmKFVlLmhhcyh0KSlyZXR1cm4gdH12YXIgVT14dTt2YXIga3U9ZT0+bmV3IEludGwuTGlzdEZvcm1hdChcImVuLVVTXCIse3R5cGU6XCJkaXNqdW5jdGlvblwifSkuZm9ybWF0KGUpO2Z1bmN0aW9uIGJ1KGUpe2xldCB0PWU9PT1udWxsP1wibnVsbFwiOnR5cGVvZiBlO2lmKHQhPT1cInN0cmluZ1wiJiZ0IT09XCJvYmplY3RcIilyZXR1cm5gVW5leHBlY3RlZCBkb2MgJyR7dH0nLCBcbkV4cGVjdGVkIGl0IHRvIGJlICdzdHJpbmcnIG9yICdvYmplY3QnLmA7aWYoVShlKSl0aHJvdyBuZXcgRXJyb3IoXCJkb2MgaXMgdmFsaWQuXCIpO2xldCByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKTtpZihyIT09XCJbb2JqZWN0IE9iamVjdF1cIilyZXR1cm5gVW5leHBlY3RlZCBkb2MgJyR7cn0nLmA7bGV0IG49a3UoWy4uLlVlXS5tYXAobz0+YCcke299J2ApKTtyZXR1cm5gVW5leHBlY3RlZCBkb2MudHlwZSAnJHtlLnR5cGV9Jy5cbkV4cGVjdGVkIGl0IHRvIGJlICR7bn0uYH12YXIgeXQ9Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiSW52YWxpZERvY0Vycm9yXCI7Y29uc3RydWN0b3IodCl7c3VwZXIoYnUodCkpLHRoaXMuZG9jPXR9fSxxPXl0O3ZhciBzcj17fTtmdW5jdGlvbiB3dShlLHQscixuKXtsZXQgbz1bZV07Zm9yKDtvLmxlbmd0aD4wOyl7bGV0IHU9by5wb3AoKTtpZih1PT09c3Ipe3Ioby5wb3AoKSk7Y29udGludWV9ciYmby5wdXNoKHUsc3IpO2xldCBpPVUodSk7aWYoIWkpdGhyb3cgbmV3IHEodSk7aWYoKHQ9PW51bGw/dm9pZCAwOnQodSkpIT09ITEpc3dpdGNoKGkpe2Nhc2UgajpjYXNlIGs6e2xldCBzPWk9PT1qP3U6dS5wYXJ0cztmb3IobGV0IEQ9cy5sZW5ndGgsYT1ELTE7YT49MDstLWEpby5wdXNoKHNbYV0pO2JyZWFrfWNhc2UgeDpvLnB1c2godS5mbGF0Q29udGVudHMsdS5icmVha0NvbnRlbnRzKTticmVhaztjYXNlIF86aWYobiYmdS5leHBhbmRlZFN0YXRlcylmb3IobGV0IHM9dS5leHBhbmRlZFN0YXRlcy5sZW5ndGgsRD1zLTE7RD49MDstLUQpby5wdXNoKHUuZXhwYW5kZWRTdGF0ZXNbRF0pO2Vsc2Ugby5wdXNoKHUuY29udGVudHMpO2JyZWFrO2Nhc2UgUzpjYXNlIFQ6Y2FzZSBQOmNhc2UgTzpjYXNlIEw6by5wdXNoKHUuY29udGVudHMpO2JyZWFrO2Nhc2UgTTpjYXNlIFc6Y2FzZSB2OmNhc2UgSTpjYXNlIEE6Y2FzZSBiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IHEodSl9fX12YXIgQWU9d3U7dmFyIERyPSgpPT57fSx6PURyLHplPURyO2Z1bmN0aW9uIGllKGUpe3JldHVybiB6KGUpLHt0eXBlOlQsY29udGVudHM6ZX19ZnVuY3Rpb24gb2UoZSx0KXtyZXR1cm4geih0KSx7dHlwZTpTLGNvbnRlbnRzOnQsbjplfX1mdW5jdGlvbiBBdChlLHQ9e30pe3JldHVybiB6KGUpLHplKHQuZXhwYW5kZWRTdGF0ZXMsITApLHt0eXBlOl8saWQ6dC5pZCxjb250ZW50czplLGJyZWFrOiEhdC5zaG91bGRCcmVhayxleHBhbmRlZFN0YXRlczp0LmV4cGFuZGVkU3RhdGVzfX1mdW5jdGlvbiBhcihlKXtyZXR1cm4gb2UoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLGUpfWZ1bmN0aW9uIGNyKGUpe3JldHVybiBvZSh7dHlwZTpcInJvb3RcIn0sZSl9ZnVuY3Rpb24gbHIoZSl7cmV0dXJuIG9lKC0xLGUpfWZ1bmN0aW9uIGZyKGUsdCl7cmV0dXJuIEF0KGVbMF0sey4uLnQsZXhwYW5kZWRTdGF0ZXM6ZX0pfWZ1bmN0aW9uIEdlKGUpe3JldHVybiB6ZShlKSx7dHlwZTprLHBhcnRzOmV9fWZ1bmN0aW9uIEZyKGUsdD1cIlwiLHI9e30pe3JldHVybiB6KGUpLHQhPT1cIlwiJiZ6KHQpLHt0eXBlOngsYnJlYWtDb250ZW50czplLGZsYXRDb250ZW50czp0LGdyb3VwSWQ6ci5ncm91cElkfX1mdW5jdGlvbiBwcihlLHQpe3JldHVybiB6KGUpLHt0eXBlOlAsY29udGVudHM6ZSxncm91cElkOnQuZ3JvdXBJZCxuZWdhdGU6dC5uZWdhdGV9fWZ1bmN0aW9uIEJlKGUpe3JldHVybiB6KGUpLHt0eXBlOkwsY29udGVudHM6ZX19dmFyIGRyPXt0eXBlOkl9LGxlPXt0eXBlOmJ9LG1yPXt0eXBlOnZ9LF9lPXt0eXBlOkEsaGFyZDohMH0sQnQ9e3R5cGU6QSxoYXJkOiEwLGxpdGVyYWw6ITB9LEtlPXt0eXBlOkF9LEVyPXt0eXBlOkEsc29mdDohMH0sRz1bX2UsbGVdLEhlPVtCdCxsZV0seGU9e3R5cGU6V307ZnVuY3Rpb24ga2UoZSx0KXt6KGUpLHplKHQpO2xldCByPVtdO2ZvcihsZXQgbj0wO248dC5sZW5ndGg7bisrKW4hPT0wJiZyLnB1c2goZSksci5wdXNoKHRbbl0pO3JldHVybiByfWZ1bmN0aW9uIHFlKGUsdCxyKXt6KGUpO2xldCBuPWU7aWYodD4wKXtmb3IobGV0IG89MDtvPE1hdGguZmxvb3IodC9yKTsrK28pbj1pZShuKTtuPW9lKHQlcixuKSxuPW9lKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxuKX1yZXR1cm4gbn1mdW5jdGlvbiBDcihlLHQpe3JldHVybiB6KHQpLGU/e3R5cGU6TyxsYWJlbDplLGNvbnRlbnRzOnR9OnR9dmFyIE91PShlLHQscik9PntpZighKGUmJnQ9PW51bGwpKXJldHVybiBBcnJheS5pc0FycmF5KHQpfHx0eXBlb2YgdD09XCJzdHJpbmdcIj90W3I8MD90Lmxlbmd0aCtyOnJdOnQuYXQocil9LHk9T3U7ZnVuY3Rpb24gaHIoZSl7bGV0IHQ9ZS5pbmRleE9mKFwiXFxyXCIpO3JldHVybiB0Pj0wP2UuY2hhckF0KHQrMSk9PT1gXG5gP1wiY3JsZlwiOlwiY3JcIjpcImxmXCJ9ZnVuY3Rpb24gYmUoZSl7c3dpdGNoKGUpe2Nhc2VcImNyXCI6cmV0dXJuXCJcXHJcIjtjYXNlXCJjcmxmXCI6cmV0dXJuYFxcclxuYDtkZWZhdWx0OnJldHVybmBcbmB9fWZ1bmN0aW9uIF90KGUsdCl7bGV0IHI7c3dpdGNoKHQpe2Nhc2VgXG5gOnI9L1xcbi9nO2JyZWFrO2Nhc2VcIlxcclwiOnI9L1xcci9nO2JyZWFrO2Nhc2VgXFxyXG5gOnI9L1xcclxcbi9nO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIFwiZW9sXCIgJHtKU09OLnN0cmluZ2lmeSh0KX0uYCl9bGV0IG49ZS5tYXRjaChyKTtyZXR1cm4gbj9uLmxlbmd0aDowfWZ1bmN0aW9uIGdyKGUpe3JldHVybiBlZSghMSxlLC9cXHJcXG4/L2csYFxuYCl9dmFyIHlyPSgpPT4vWyMqMC05XVxcdUZFMEY/XFx1MjBFM3xbXFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0VELVxcdTIzRUZcXHUyM0YxXFx1MjNGMlxcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQlxcdTI1RkNcXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjVGXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NjhcXHUyNjdCXFx1MjY3RVxcdTI2N0ZcXHUyNjkyXFx1MjY5NC1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTdcXHUyNkFBXFx1MjZCMFxcdTI2QjFcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM4XFx1MjZDRlxcdTI2RDFcXHUyNkU5XFx1MjZGMC1cXHUyNkY1XFx1MjZGN1xcdTI2RjhcXHUyNkZBXFx1MjcwMlxcdTI3MDhcXHUyNzA5XFx1MjcwRlxcdTI3MTJcXHUyNzE0XFx1MjcxNlxcdTI3MURcXHUyNzIxXFx1MjczM1xcdTI3MzRcXHUyNzQ0XFx1Mjc0N1xcdTI3NTdcXHUyNzYzXFx1MjdBMVxcdTI5MzRcXHUyOTM1XFx1MkIwNS1cXHUyQjA3XFx1MkIxQlxcdTJCMUNcXHUyQjU1XFx1MzAzMFxcdTMwM0RcXHUzMjk3XFx1MzI5OV1cXHVGRTBGP3xbXFx1MjYxRFxcdTI3MENcXHUyNzBEXSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTI3MEFcXHUyNzBCXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNjkzXFx1MjZBMVxcdTI2QUJcXHUyNkM1XFx1MjZDRVxcdTI2RDRcXHUyNkVBXFx1MjZGRFxcdTI3MDVcXHUyNzI4XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzk1LVxcdTI3OTdcXHUyN0IwXFx1MjdCRlxcdTJCNTBdfFxcdTI2RDNcXHVGRTBGPyg/OlxcdTIwMERcXHVEODNEXFx1RENBNSk/fFxcdTI2RjkoPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdTI3NjRcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHVEODNEXFx1REQyNXxcXHVEODNFXFx1REU3OSkpP3xcXHVEODNDKD86W1xcdURDMDRcXHVERDcwXFx1REQ3MVxcdUREN0VcXHVERDdGXFx1REUwMlxcdURFMzdcXHVERjIxXFx1REYyNC1cXHVERjJDXFx1REYzNlxcdURGN0RcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUVcXHVERjlGXFx1REZDRFxcdURGQ0VcXHVERkQ0LVxcdURGREZcXHVERkY1XFx1REZGN11cXHVGRTBGP3xbXFx1REY4NVxcdURGQzJcXHVERkM3XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVERkM0XFx1REZDQV0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REZDQlxcdURGQ0NdKD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY0M1xcdURGNDUtXFx1REY0QVxcdURGNEMtXFx1REY3Q1xcdURGN0UtXFx1REY4NFxcdURGODYtXFx1REY5M1xcdURGQTAtXFx1REZDMVxcdURGQzVcXHVERkM2XFx1REZDOFxcdURGQzlcXHVERkNGLVxcdURGRDNcXHVERkUwLVxcdURGRjBcXHVERkY4LVxcdURGRkZdfFxcdURERTZcXHVEODNDW1xcdURERTgtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGMlxcdURERjRcXHVEREY2LVxcdURERkFcXHVEREZDXFx1RERGRFxcdURERkZdfFxcdURERTdcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVGXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERFOFxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY1XFx1RERGN1xcdURERkEtXFx1RERGRl18XFx1RERFOVxcdUQ4M0NbXFx1RERFQVxcdURERUNcXHVEREVGXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGRl18XFx1RERFQVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdfFxcdURERUJcXHVEODNDW1xcdURERUUtXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGN118XFx1RERFQ1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUVcXHVEREYxLVxcdURERjNcXHVEREY1LVxcdURERkFcXHVEREZDXFx1RERGRV18XFx1RERFRFxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXXxcXHVEREVFXFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldfFxcdURERUZcXHVEODNDW1xcdURERUFcXHVEREYyXFx1RERGNFxcdURERjVdfFxcdURERjBcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREYxXFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdfFxcdURERjJcXHVEODNDW1xcdURERTZcXHVEREU4LVxcdURERURcXHVEREYwLVxcdURERkZdfFxcdURERjNcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQS1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREY0XFx1RERGNVxcdURERjdcXHVEREZBXFx1RERGRl18XFx1RERGNFxcdUQ4M0NcXHVEREYyfFxcdURERjVcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV18XFx1RERGNlxcdUQ4M0NcXHVEREU2fFxcdURERjdcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXXxcXHVEREY4XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXXxcXHVEREY5XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl18XFx1RERGQVxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl18XFx1RERGQlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV18XFx1RERGQ1xcdUQ4M0NbXFx1RERFQlxcdURERjhdfFxcdURERkRcXHVEODNDXFx1RERGMHxcXHVEREZFXFx1RDgzQ1tcXHVEREVBXFx1RERGOV18XFx1RERGRlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXXxcXHVERjQ0KD86XFx1MjAwRFxcdUQ4M0RcXHVERkVCKT98XFx1REY0Qig/OlxcdTIwMERcXHVEODNEXFx1REZFOSk/fFxcdURGQzMoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURGRjNcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHUyNkE3XFx1RkUwRj98XFx1RDgzQ1xcdURGMDgpKT98XFx1REZGNCg/OlxcdTIwMERcXHUyNjIwXFx1RkUwRj98XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2MlxcdURCNDAoPzpcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3Rik/KXxcXHVEODNEKD86W1xcdURDM0ZcXHVEQ0ZEXFx1REQ0OVxcdURENEFcXHVERDZGXFx1REQ3MFxcdURENzNcXHVERDc2LVxcdURENzlcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkFcXHVERUNCXFx1REVDRC1cXHVERUNGXFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRjBcXHVERUYzXVxcdUZFMEY/fFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzZFXFx1REM3MFxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNFxcdURFQjVdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURENzRcXHVERDkwXSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURDMDAtXFx1REMwN1xcdURDMDktXFx1REMxNFxcdURDMTYtXFx1REMyNVxcdURDMjctXFx1REMzQVxcdURDM0MtXFx1REMzRVxcdURDNDBcXHVEQzQ0XFx1REM0NVxcdURDNTEtXFx1REM2NVxcdURDNkFcXHVEQzc5LVxcdURDN0JcXHVEQzdELVxcdURDODBcXHVEQzg0XFx1REM4OC1cXHVEQzhFXFx1REM5MFxcdURDOTItXFx1RENBOVxcdURDQUItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREQTRcXHVEREZCLVxcdURFMkRcXHVERTJGLVxcdURFMzRcXHVERTM3LVxcdURFNDFcXHVERTQzXFx1REU0NFxcdURFNDgtXFx1REU0QVxcdURFODAtXFx1REVBMlxcdURFQTQtXFx1REVCM1xcdURFQjctXFx1REVCRlxcdURFQzEtXFx1REVDNVxcdURFRDAtXFx1REVEMlxcdURFRDUtXFx1REVEN1xcdURFREMtXFx1REVERlxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZDXFx1REZFMC1cXHVERkVCXFx1REZGMF18XFx1REMwOCg/OlxcdTIwMERcXHUyQjFCKT98XFx1REMxNSg/OlxcdTIwMERcXHVEODNFXFx1RERCQSk/fFxcdURDMjYoPzpcXHUyMDBEKD86XFx1MkIxQnxcXHVEODNEXFx1REQyNSkpP3xcXHVEQzNCKD86XFx1MjAwRFxcdTI3NDRcXHVGRTBGPyk/fFxcdURDNDFcXHVGRTBGPyg/OlxcdTIwMERcXHVEODNEXFx1RERFOFxcdUZFMEY/KT98XFx1REM2OCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4fFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldXFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2OSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9bXFx1REM2OFxcdURDNjldfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/fFxcdURDNjlcXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKSkpPykpP3xcXHVEQzZGKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURENzUoPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURFMkUoPzpcXHUyMDBEXFx1RDgzRFxcdURDQTgpP3xcXHVERTM1KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0FCKT98XFx1REUzNig/OlxcdTIwMERcXHVEODNDXFx1REYyQlxcdUZFMEY/KT98XFx1REU0Mig/OlxcdTIwMERbXFx1MjE5NFxcdTIxOTVdXFx1RkUwRj8pP3xcXHVERUI2KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpPyl8XFx1RDgzRSg/OltcXHVERDBDXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XFx1REVDMy1cXHVERUM1XFx1REVGMFxcdURFRjItXFx1REVGOF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REQyNlxcdUREMzVcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRFxcdUREQ0ZcXHVEREQ0XFx1RERENi1cXHVEREREXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERERFXFx1RERERl0oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdUREMERcXHVERDBFXFx1REQxMC1cXHVERDE3XFx1REQyMC1cXHVERDI1XFx1REQyNy1cXHVERDJGXFx1REQzQVxcdUREM0YtXFx1REQ0NVxcdURENDctXFx1REQ3NlxcdURENzgtXFx1RERCNFxcdUREQjdcXHVEREJBXFx1RERCQy1cXHVERENDXFx1REREMFxcdURERTAtXFx1RERGRlxcdURFNzAtXFx1REU3Q1xcdURFODAtXFx1REU4OFxcdURFOTAtXFx1REVCRFxcdURFQkYtXFx1REVDMlxcdURFQ0UtXFx1REVEQlxcdURFRTAtXFx1REVFOF18XFx1REQzQyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj98XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98XFx1RERDRSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT98XFx1REREMSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1REREMVxcdTIwMERcXHVEODNFXFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/fFxcdURERDIoPzpcXHUyMDBEXFx1RDgzRVxcdURERDIpPykpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkMtXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkUoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/KSk/fFxcdURFRjEoPzpcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSk/fFxcdURGRkMoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKT98XFx1REZGRCg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pP3xcXHVERkZFKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSk/fFxcdURGRkYoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRV0pPykpPykvZztmdW5jdGlvbiBBcihlKXtyZXR1cm4gZT09PTEyMjg4fHxlPj02NTI4MSYmZTw9NjUzNzZ8fGU+PTY1NTA0JiZlPD02NTUxMH1mdW5jdGlvbiBCcihlKXtyZXR1cm4gZT49NDM1MiYmZTw9NDQ0N3x8ZT09PTg5ODZ8fGU9PT04OTg3fHxlPT09OTAwMXx8ZT09PTkwMDJ8fGU+PTkxOTMmJmU8PTkxOTZ8fGU9PT05MjAwfHxlPT09OTIwM3x8ZT09PTk3MjV8fGU9PT05NzI2fHxlPT09OTc0OHx8ZT09PTk3NDl8fGU+PTk4MDAmJmU8PTk4MTF8fGU9PT05ODU1fHxlPT09OTg3NXx8ZT09PTk4ODl8fGU9PT05ODk4fHxlPT09OTg5OXx8ZT09PTk5MTd8fGU9PT05OTE4fHxlPT09OTkyNHx8ZT09PTk5MjV8fGU9PT05OTM0fHxlPT09OTk0MHx8ZT09PTk5NjJ8fGU9PT05OTcwfHxlPT09OTk3MXx8ZT09PTk5NzN8fGU9PT05OTc4fHxlPT09OTk4MXx8ZT09PTk5ODl8fGU9PT05OTk0fHxlPT09OTk5NXx8ZT09PTEwMDI0fHxlPT09MTAwNjB8fGU9PT0xMDA2Mnx8ZT49MTAwNjcmJmU8PTEwMDY5fHxlPT09MTAwNzF8fGU+PTEwMTMzJiZlPD0xMDEzNXx8ZT09PTEwMTYwfHxlPT09MTAxNzV8fGU9PT0xMTAzNXx8ZT09PTExMDM2fHxlPT09MTEwODh8fGU9PT0xMTA5M3x8ZT49MTE5MDQmJmU8PTExOTI5fHxlPj0xMTkzMSYmZTw9MTIwMTl8fGU+PTEyMDMyJiZlPD0xMjI0NXx8ZT49MTIyNzImJmU8PTEyMjg3fHxlPj0xMjI4OSYmZTw9MTIzNTB8fGU+PTEyMzUzJiZlPD0xMjQzOHx8ZT49MTI0NDEmJmU8PTEyNTQzfHxlPj0xMjU0OSYmZTw9MTI1OTF8fGU+PTEyNTkzJiZlPD0xMjY4Nnx8ZT49MTI2ODgmJmU8PTEyNzcxfHxlPj0xMjc4MyYmZTw9MTI4MzB8fGU+PTEyODMyJiZlPD0xMjg3MXx8ZT49MTI4ODAmJmU8PTE5OTAzfHxlPj0xOTk2OCYmZTw9NDIxMjR8fGU+PTQyMTI4JiZlPD00MjE4Mnx8ZT49NDMzNjAmJmU8PTQzMzg4fHxlPj00NDAzMiYmZTw9NTUyMDN8fGU+PTYzNzQ0JiZlPD02NDI1NXx8ZT49NjUwNDAmJmU8PTY1MDQ5fHxlPj02NTA3MiYmZTw9NjUxMDZ8fGU+PTY1MTA4JiZlPD02NTEyNnx8ZT49NjUxMjgmJmU8PTY1MTMxfHxlPj05NDE3NiYmZTw9OTQxODB8fGU9PT05NDE5Mnx8ZT09PTk0MTkzfHxlPj05NDIwOCYmZTw9MTAwMzQzfHxlPj0xMDAzNTImJmU8PTEwMTU4OXx8ZT49MTAxNjMyJiZlPD0xMDE2NDB8fGU+PTExMDU3NiYmZTw9MTEwNTc5fHxlPj0xMTA1ODEmJmU8PTExMDU4N3x8ZT09PTExMDU4OXx8ZT09PTExMDU5MHx8ZT49MTEwNTkyJiZlPD0xMTA4ODJ8fGU9PT0xMTA4OTh8fGU+PTExMDkyOCYmZTw9MTEwOTMwfHxlPT09MTEwOTMzfHxlPj0xMTA5NDgmJmU8PTExMDk1MXx8ZT49MTEwOTYwJiZlPD0xMTEzNTV8fGU9PT0xMjY5ODB8fGU9PT0xMjcxODN8fGU9PT0xMjczNzR8fGU+PTEyNzM3NyYmZTw9MTI3Mzg2fHxlPj0xMjc0ODgmJmU8PTEyNzQ5MHx8ZT49MTI3NTA0JiZlPD0xMjc1NDd8fGU+PTEyNzU1MiYmZTw9MTI3NTYwfHxlPT09MTI3NTY4fHxlPT09MTI3NTY5fHxlPj0xMjc1ODQmJmU8PTEyNzU4OXx8ZT49MTI3NzQ0JiZlPD0xMjc3NzZ8fGU+PTEyNzc4OSYmZTw9MTI3Nzk3fHxlPj0xMjc3OTkmJmU8PTEyNzg2OHx8ZT49MTI3ODcwJiZlPD0xMjc4OTF8fGU+PTEyNzkwNCYmZTw9MTI3OTQ2fHxlPj0xMjc5NTEmJmU8PTEyNzk1NXx8ZT49MTI3OTY4JiZlPD0xMjc5ODR8fGU9PT0xMjc5ODh8fGU+PTEyNzk5MiYmZTw9MTI4MDYyfHxlPT09MTI4MDY0fHxlPj0xMjgwNjYmJmU8PTEyODI1Mnx8ZT49MTI4MjU1JiZlPD0xMjgzMTd8fGU+PTEyODMzMSYmZTw9MTI4MzM0fHxlPj0xMjgzMzYmJmU8PTEyODM1OXx8ZT09PTEyODM3OHx8ZT09PTEyODQwNXx8ZT09PTEyODQwNnx8ZT09PTEyODQyMHx8ZT49MTI4NTA3JiZlPD0xMjg1OTF8fGU+PTEyODY0MCYmZTw9MTI4NzA5fHxlPT09MTI4NzE2fHxlPj0xMjg3MjAmJmU8PTEyODcyMnx8ZT49MTI4NzI1JiZlPD0xMjg3Mjd8fGU+PTEyODczMiYmZTw9MTI4NzM1fHxlPT09MTI4NzQ3fHxlPT09MTI4NzQ4fHxlPj0xMjg3NTYmJmU8PTEyODc2NHx8ZT49MTI4OTkyJiZlPD0xMjkwMDN8fGU9PT0xMjkwMDh8fGU+PTEyOTI5MiYmZTw9MTI5MzM4fHxlPj0xMjkzNDAmJmU8PTEyOTM0OXx8ZT49MTI5MzUxJiZlPD0xMjk1MzV8fGU+PTEyOTY0OCYmZTw9MTI5NjYwfHxlPj0xMjk2NjQmJmU8PTEyOTY3Mnx8ZT49MTI5NjgwJiZlPD0xMjk3MjV8fGU+PTEyOTcyNyYmZTw9MTI5NzMzfHxlPj0xMjk3NDImJmU8PTEyOTc1NXx8ZT49MTI5NzYwJiZlPD0xMjk3Njh8fGU+PTEyOTc3NiYmZTw9MTI5Nzg0fHxlPj0xMzEwNzImJmU8PTE5NjYwNXx8ZT49MTk2NjA4JiZlPD0yNjIxNDF9dmFyIF9yPWU9PiEoQXIoZSl8fEJyKGUpKTt2YXIgTnU9L1teXFx4MjAtXFx4N0ZdLztmdW5jdGlvbiBUdShlKXtpZighZSlyZXR1cm4gMDtpZighTnUudGVzdChlKSlyZXR1cm4gZS5sZW5ndGg7ZT1lLnJlcGxhY2UoeXIoKSxcIiAgXCIpO2xldCB0PTA7Zm9yKGxldCByIG9mIGUpe2xldCBuPXIuY29kZVBvaW50QXQoMCk7bjw9MzF8fG4+PTEyNyYmbjw9MTU5fHxuPj03NjgmJm48PTg3OXx8KHQrPV9yKG4pPzE6Mil9cmV0dXJuIHR9dmFyIHdlPVR1O3ZhciBicj1lPT57aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZTtpZihlLnR5cGUhPT1rKXRocm93IG5ldyBFcnJvcihgRXhwZWN0IGRvYyB0byBiZSAnYXJyYXknIG9yICcke2t9Jy5gKTtyZXR1cm4gZS5wYXJ0c307ZnVuY3Rpb24gTmUoZSx0KXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIilyZXR1cm4gdChlKTtsZXQgcj1uZXcgTWFwO3JldHVybiBuKGUpO2Z1bmN0aW9uIG4odSl7aWYoci5oYXModSkpcmV0dXJuIHIuZ2V0KHUpO2xldCBpPW8odSk7cmV0dXJuIHIuc2V0KHUsaSksaX1mdW5jdGlvbiBvKHUpe3N3aXRjaChVKHUpKXtjYXNlIGo6cmV0dXJuIHQodS5tYXAobikpO2Nhc2UgazpyZXR1cm4gdCh7Li4udSxwYXJ0czp1LnBhcnRzLm1hcChuKX0pO2Nhc2UgeDpyZXR1cm4gdCh7Li4udSxicmVha0NvbnRlbnRzOm4odS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6bih1LmZsYXRDb250ZW50cyl9KTtjYXNlIF86e2xldHtleHBhbmRlZFN0YXRlczppLGNvbnRlbnRzOnN9PXU7cmV0dXJuIGk/KGk9aS5tYXAobikscz1pWzBdKTpzPW4ocyksdCh7Li4udSxjb250ZW50czpzLGV4cGFuZGVkU3RhdGVzOml9KX1jYXNlIFM6Y2FzZSBUOmNhc2UgUDpjYXNlIE86Y2FzZSBMOnJldHVybiB0KHsuLi51LGNvbnRlbnRzOm4odS5jb250ZW50cyl9KTtjYXNlIE06Y2FzZSBXOmNhc2UgdjpjYXNlIEk6Y2FzZSBBOmNhc2UgYjpyZXR1cm4gdCh1KTtkZWZhdWx0OnRocm93IG5ldyBxKHUpfX19ZnVuY3Rpb24gSmUoZSx0LHIpe2xldCBuPXIsbz0hMTtmdW5jdGlvbiB1KGkpe2lmKG8pcmV0dXJuITE7bGV0IHM9dChpKTtzIT09dm9pZCAwJiYobz0hMCxuPXMpfXJldHVybiBBZShlLHUpLG59ZnVuY3Rpb24gU3UoZSl7aWYoZS50eXBlPT09XyYmZS5icmVha3x8ZS50eXBlPT09QSYmZS5oYXJkfHxlLnR5cGU9PT1iKXJldHVybiEwfWZ1bmN0aW9uIHdyKGUpe3JldHVybiBKZShlLFN1LCExKX1mdW5jdGlvbiB4cihlKXtpZihlLmxlbmd0aD4wKXtsZXQgdD15KCExLGUsLTEpOyF0LmV4cGFuZGVkU3RhdGVzJiYhdC5icmVhayYmKHQuYnJlYWs9XCJwcm9wYWdhdGVkXCIpfXJldHVybiBudWxsfWZ1bmN0aW9uIE9yKGUpe2xldCB0PW5ldyBTZXQscj1bXTtmdW5jdGlvbiBuKHUpe2lmKHUudHlwZT09PWImJnhyKHIpLHUudHlwZT09PV8pe2lmKHIucHVzaCh1KSx0Lmhhcyh1KSlyZXR1cm4hMTt0LmFkZCh1KX19ZnVuY3Rpb24gbyh1KXt1LnR5cGU9PT1fJiZyLnBvcCgpLmJyZWFrJiZ4cihyKX1BZShlLG4sbywhMCl9ZnVuY3Rpb24gdnUoZSl7cmV0dXJuIGUudHlwZT09PUEmJiFlLmhhcmQ/ZS5zb2Z0P1wiXCI6XCIgXCI6ZS50eXBlPT09eD9lLmZsYXRDb250ZW50czplfWZ1bmN0aW9uIE5yKGUpe3JldHVybiBOZShlLHZ1KX1mdW5jdGlvbiBrcihlKXtmb3IoZT1bLi4uZV07ZS5sZW5ndGg+PTImJnkoITEsZSwtMikudHlwZT09PUEmJnkoITEsZSwtMSkudHlwZT09PWI7KWUubGVuZ3RoLT0yO2lmKGUubGVuZ3RoPjApe2xldCB0PU9lKHkoITEsZSwtMSkpO2VbZS5sZW5ndGgtMV09dH1yZXR1cm4gZX1mdW5jdGlvbiBPZShlKXtzd2l0Y2goVShlKSl7Y2FzZSBTOmNhc2UgVDpjYXNlIFA6Y2FzZSBfOmNhc2UgTDpjYXNlIE86e2xldCB0PU9lKGUuY29udGVudHMpO3JldHVybnsuLi5lLGNvbnRlbnRzOnR9fWNhc2UgeDpyZXR1cm57Li4uZSxicmVha0NvbnRlbnRzOk9lKGUuYnJlYWtDb250ZW50cyksZmxhdENvbnRlbnRzOk9lKGUuZmxhdENvbnRlbnRzKX07Y2FzZSBrOnJldHVybnsuLi5lLHBhcnRzOmtyKGUucGFydHMpfTtjYXNlIGo6cmV0dXJuIGtyKGUpO2Nhc2UgTTpyZXR1cm4gZS5yZXBsYWNlKC9bXFxuXFxyXSokLyxcIlwiKTtjYXNlIFc6Y2FzZSB2OmNhc2UgSTpjYXNlIEE6Y2FzZSBiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IHEoZSl9cmV0dXJuIGV9ZnVuY3Rpb24gWGUoZSl7cmV0dXJuIE9lKEx1KGUpKX1mdW5jdGlvbiBQdShlKXtzd2l0Y2goVShlKSl7Y2FzZSBrOmlmKGUucGFydHMuZXZlcnkodD0+dD09PVwiXCIpKXJldHVyblwiXCI7YnJlYWs7Y2FzZSBfOmlmKCFlLmNvbnRlbnRzJiYhZS5pZCYmIWUuYnJlYWsmJiFlLmV4cGFuZGVkU3RhdGVzKXJldHVyblwiXCI7aWYoZS5jb250ZW50cy50eXBlPT09XyYmZS5jb250ZW50cy5pZD09PWUuaWQmJmUuY29udGVudHMuYnJlYWs9PT1lLmJyZWFrJiZlLmNvbnRlbnRzLmV4cGFuZGVkU3RhdGVzPT09ZS5leHBhbmRlZFN0YXRlcylyZXR1cm4gZS5jb250ZW50czticmVhaztjYXNlIFM6Y2FzZSBUOmNhc2UgUDpjYXNlIEw6aWYoIWUuY29udGVudHMpcmV0dXJuXCJcIjticmVhaztjYXNlIHg6aWYoIWUuZmxhdENvbnRlbnRzJiYhZS5icmVha0NvbnRlbnRzKXJldHVyblwiXCI7YnJlYWs7Y2FzZSBqOntsZXQgdD1bXTtmb3IobGV0IHIgb2YgZSl7aWYoIXIpY29udGludWU7bGV0W24sLi4ub109QXJyYXkuaXNBcnJheShyKT9yOltyXTt0eXBlb2Ygbj09XCJzdHJpbmdcIiYmdHlwZW9mIHkoITEsdCwtMSk9PVwic3RyaW5nXCI/dFt0Lmxlbmd0aC0xXSs9bjp0LnB1c2gobiksdC5wdXNoKC4uLm8pfXJldHVybiB0Lmxlbmd0aD09PTA/XCJcIjp0Lmxlbmd0aD09PTE/dFswXTp0fWNhc2UgTTpjYXNlIFc6Y2FzZSB2OmNhc2UgSTpjYXNlIEE6Y2FzZSBPOmNhc2UgYjpicmVhaztkZWZhdWx0OnRocm93IG5ldyBxKGUpfXJldHVybiBlfWZ1bmN0aW9uIEx1KGUpe3JldHVybiBOZShlLHQ9PlB1KHQpKX1mdW5jdGlvbiBUcihlLHQ9SGUpe3JldHVybiBOZShlLHI9PnR5cGVvZiByPT1cInN0cmluZ1wiP2tlKHQsci5zcGxpdChgXG5gKSk6cil9ZnVuY3Rpb24gSXUoZSl7aWYoZS50eXBlPT09QSlyZXR1cm4hMH1mdW5jdGlvbiBTcihlKXtyZXR1cm4gSmUoZSxJdSwhMSl9ZnVuY3Rpb24gWmUoZSx0KXtyZXR1cm4gZS50eXBlPT09Tz97Li4uZSxjb250ZW50czp0KGUuY29udGVudHMpfTp0KGUpfXZhciBSPVN5bWJvbChcIk1PREVfQlJFQUtcIiksSz1TeW1ib2woXCJNT0RFX0ZMQVRcIiksVGU9U3ltYm9sKFwiY3Vyc29yXCIpO2Z1bmN0aW9uIHZyKCl7cmV0dXJue3ZhbHVlOlwiXCIsbGVuZ3RoOjAscXVldWU6W119fWZ1bmN0aW9uIFJ1KGUsdCl7cmV0dXJuIHh0KGUse3R5cGU6XCJpbmRlbnRcIn0sdCl9ZnVuY3Rpb24gWXUoZSx0LHIpe3JldHVybiB0PT09TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZP2Uucm9vdHx8dnIoKTp0PDA/eHQoZSx7dHlwZTpcImRlZGVudFwifSxyKTp0P3QudHlwZT09PVwicm9vdFwiP3suLi5lLHJvb3Q6ZX06eHQoZSx7dHlwZTp0eXBlb2YgdD09XCJzdHJpbmdcIj9cInN0cmluZ0FsaWduXCI6XCJudW1iZXJBbGlnblwiLG46dH0scik6ZX1mdW5jdGlvbiB4dChlLHQscil7bGV0IG49dC50eXBlPT09XCJkZWRlbnRcIj9lLnF1ZXVlLnNsaWNlKDAsLTEpOlsuLi5lLnF1ZXVlLHRdLG89XCJcIix1PTAsaT0wLHM9MDtmb3IobGV0IGwgb2Ygbilzd2l0Y2gobC50eXBlKXtjYXNlXCJpbmRlbnRcIjpjKCksci51c2VUYWJzP0QoMSk6YShyLnRhYldpZHRoKTticmVhaztjYXNlXCJzdHJpbmdBbGlnblwiOmMoKSxvKz1sLm4sdSs9bC5uLmxlbmd0aDticmVhaztjYXNlXCJudW1iZXJBbGlnblwiOmkrPTEscys9bC5uO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHR5cGUgJyR7bC50eXBlfSdgKX1yZXR1cm4gZigpLHsuLi5lLHZhbHVlOm8sbGVuZ3RoOnUscXVldWU6bn07ZnVuY3Rpb24gRChsKXtvKz1cIlx0XCIucmVwZWF0KGwpLHUrPXIudGFiV2lkdGgqbH1mdW5jdGlvbiBhKGwpe28rPVwiIFwiLnJlcGVhdChsKSx1Kz1sfWZ1bmN0aW9uIGMoKXtyLnVzZVRhYnM/ZCgpOmYoKX1mdW5jdGlvbiBkKCl7aT4wJiZEKGkpLHAoKX1mdW5jdGlvbiBmKCl7cz4wJiZhKHMpLHAoKX1mdW5jdGlvbiBwKCl7aT0wLHM9MH19ZnVuY3Rpb24ga3QoZSl7bGV0IHQ9MCxyPTAsbj1lLmxlbmd0aDtlOmZvcig7bi0tOyl7bGV0IG89ZVtuXTtpZihvPT09VGUpe3IrKztjb250aW51ZX1mb3IobGV0IHU9by5sZW5ndGgtMTt1Pj0wO3UtLSl7bGV0IGk9b1t1XTtpZihpPT09XCIgXCJ8fGk9PT1cIlx0XCIpdCsrO2Vsc2V7ZVtuXT1vLnNsaWNlKDAsdSsxKTticmVhayBlfX19aWYodD4wfHxyPjApZm9yKGUubGVuZ3RoPW4rMTtyLS0gPjA7KWUucHVzaChUZSk7cmV0dXJuIHR9ZnVuY3Rpb24gUWUoZSx0LHIsbixvLHUpe2lmKHI9PT1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpcmV0dXJuITA7bGV0IGk9dC5sZW5ndGgscz1bZV0sRD1bXTtmb3IoO3I+PTA7KXtpZihzLmxlbmd0aD09PTApe2lmKGk9PT0wKXJldHVybiEwO3MucHVzaCh0Wy0taV0pO2NvbnRpbnVlfWxldHttb2RlOmEsZG9jOmN9PXMucG9wKCk7c3dpdGNoKFUoYykpe2Nhc2UgTTpELnB1c2goYyksci09d2UoYyk7YnJlYWs7Y2FzZSBqOmNhc2Ugazp7bGV0IGQ9YnIoYyk7Zm9yKGxldCBmPWQubGVuZ3RoLTE7Zj49MDtmLS0pcy5wdXNoKHttb2RlOmEsZG9jOmRbZl19KTticmVha31jYXNlIFQ6Y2FzZSBTOmNhc2UgUDpjYXNlIE86cy5wdXNoKHttb2RlOmEsZG9jOmMuY29udGVudHN9KTticmVhaztjYXNlIHY6cis9a3QoRCk7YnJlYWs7Y2FzZSBfOntpZih1JiZjLmJyZWFrKXJldHVybiExO2xldCBkPWMuYnJlYWs/UjphLGY9Yy5leHBhbmRlZFN0YXRlcyYmZD09PVI/eSghMSxjLmV4cGFuZGVkU3RhdGVzLC0xKTpjLmNvbnRlbnRzO3MucHVzaCh7bW9kZTpkLGRvYzpmfSk7YnJlYWt9Y2FzZSB4OntsZXQgZj0oYy5ncm91cElkP29bYy5ncm91cElkXXx8SzphKT09PVI/Yy5icmVha0NvbnRlbnRzOmMuZmxhdENvbnRlbnRzO2YmJnMucHVzaCh7bW9kZTphLGRvYzpmfSk7YnJlYWt9Y2FzZSBBOmlmKGE9PT1SfHxjLmhhcmQpcmV0dXJuITA7Yy5zb2Z0fHwoRC5wdXNoKFwiIFwiKSxyLS0pO2JyZWFrO2Nhc2UgTDpuPSEwO2JyZWFrO2Nhc2UgSTppZihuKXJldHVybiExO2JyZWFrfX1yZXR1cm4hMX1mdW5jdGlvbiBmZShlLHQpe2xldCByPXt9LG49dC5wcmludFdpZHRoLG89YmUodC5lbmRPZkxpbmUpLHU9MCxpPVt7aW5kOnZyKCksbW9kZTpSLGRvYzplfV0scz1bXSxEPSExLGE9W10sYz0wO2ZvcihPcihlKTtpLmxlbmd0aD4wOyl7bGV0e2luZDpmLG1vZGU6cCxkb2M6bH09aS5wb3AoKTtzd2l0Y2goVShsKSl7Y2FzZSBNOntsZXQgRj1vIT09YFxuYD9lZSghMSxsLGBcbmAsbyk6bDtzLnB1c2goRiksaS5sZW5ndGg+MCYmKHUrPXdlKEYpKTticmVha31jYXNlIGo6Zm9yKGxldCBGPWwubGVuZ3RoLTE7Rj49MDtGLS0paS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOmxbRl19KTticmVhaztjYXNlIFc6aWYoYz49Mil0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhcmUgdG9vIG1hbnkgJ2N1cnNvcicgaW4gZG9jLlwiKTtzLnB1c2goVGUpLGMrKzticmVhaztjYXNlIFQ6aS5wdXNoKHtpbmQ6UnUoZix0KSxtb2RlOnAsZG9jOmwuY29udGVudHN9KTticmVhaztjYXNlIFM6aS5wdXNoKHtpbmQ6WXUoZixsLm4sdCksbW9kZTpwLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWs7Y2FzZSB2OnUtPWt0KHMpO2JyZWFrO2Nhc2UgXzpzd2l0Y2gocCl7Y2FzZSBLOmlmKCFEKXtpLnB1c2goe2luZDpmLG1vZGU6bC5icmVhaz9SOkssZG9jOmwuY29udGVudHN9KTticmVha31jYXNlIFI6e0Q9ITE7bGV0IEY9e2luZDpmLG1vZGU6Syxkb2M6bC5jb250ZW50c30sbT1uLXUsRT1hLmxlbmd0aD4wO2lmKCFsLmJyZWFrJiZRZShGLGksbSxFLHIpKWkucHVzaChGKTtlbHNlIGlmKGwuZXhwYW5kZWRTdGF0ZXMpe2xldCBDPXkoITEsbC5leHBhbmRlZFN0YXRlcywtMSk7aWYobC5icmVhayl7aS5wdXNoKHtpbmQ6Zixtb2RlOlIsZG9jOkN9KTticmVha31lbHNlIGZvcihsZXQgZz0xO2c8bC5leHBhbmRlZFN0YXRlcy5sZW5ndGgrMTtnKyspaWYoZz49bC5leHBhbmRlZFN0YXRlcy5sZW5ndGgpe2kucHVzaCh7aW5kOmYsbW9kZTpSLGRvYzpDfSk7YnJlYWt9ZWxzZXtsZXQgaD1sLmV4cGFuZGVkU3RhdGVzW2ddLEI9e2luZDpmLG1vZGU6Syxkb2M6aH07aWYoUWUoQixpLG0sRSxyKSl7aS5wdXNoKEIpO2JyZWFrfX19ZWxzZSBpLnB1c2goe2luZDpmLG1vZGU6Uixkb2M6bC5jb250ZW50c30pO2JyZWFrfX1sLmlkJiYocltsLmlkXT15KCExLGksLTEpLm1vZGUpO2JyZWFrO2Nhc2Ugazp7bGV0IEY9bi11LHtwYXJ0czptfT1sO2lmKG0ubGVuZ3RoPT09MClicmVhaztsZXRbRSxDXT1tLGc9e2luZDpmLG1vZGU6Syxkb2M6RX0saD17aW5kOmYsbW9kZTpSLGRvYzpFfSxCPVFlKGcsW10sRixhLmxlbmd0aD4wLHIsITApO2lmKG0ubGVuZ3RoPT09MSl7Qj9pLnB1c2goZyk6aS5wdXNoKGgpO2JyZWFrfWxldCBaPXtpbmQ6Zixtb2RlOkssZG9jOkN9LCQ9e2luZDpmLG1vZGU6Uixkb2M6Q307aWYobS5sZW5ndGg9PT0yKXtCP2kucHVzaChaLGcpOmkucHVzaCgkLGgpO2JyZWFrfW0uc3BsaWNlKDAsMik7bGV0IFE9e2luZDpmLG1vZGU6cCxkb2M6R2UobSl9LHJyPW1bMF07UWUoe2luZDpmLG1vZGU6Syxkb2M6W0UsQyxycl19LFtdLEYsYS5sZW5ndGg+MCxyLCEwKT9pLnB1c2goUSxaLGcpOkI/aS5wdXNoKFEsJCxnKTppLnB1c2goUSwkLGgpO2JyZWFrfWNhc2UgeDpjYXNlIFA6e2xldCBGPWwuZ3JvdXBJZD9yW2wuZ3JvdXBJZF06cDtpZihGPT09Uil7bGV0IG09bC50eXBlPT09eD9sLmJyZWFrQ29udGVudHM6bC5uZWdhdGU/bC5jb250ZW50czppZShsLmNvbnRlbnRzKTttJiZpLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bX0pfWlmKEY9PT1LKXtsZXQgbT1sLnR5cGU9PT14P2wuZmxhdENvbnRlbnRzOmwubmVnYXRlP2llKGwuY29udGVudHMpOmwuY29udGVudHM7bSYmaS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOm19KX1icmVha31jYXNlIEw6YS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOmwuY29udGVudHN9KTticmVhaztjYXNlIEk6YS5sZW5ndGg+MCYmaS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOl9lfSk7YnJlYWs7Y2FzZSBBOnN3aXRjaChwKXtjYXNlIEs6aWYobC5oYXJkKUQ9ITA7ZWxzZXtsLnNvZnR8fChzLnB1c2goXCIgXCIpLHUrPTEpO2JyZWFrfWNhc2UgUjppZihhLmxlbmd0aD4wKXtpLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bH0sLi4uYS5yZXZlcnNlKCkpLGEubGVuZ3RoPTA7YnJlYWt9bC5saXRlcmFsP2Yucm9vdD8ocy5wdXNoKG8sZi5yb290LnZhbHVlKSx1PWYucm9vdC5sZW5ndGgpOihzLnB1c2gobyksdT0wKToodS09a3Qocykscy5wdXNoKG8rZi52YWx1ZSksdT1mLmxlbmd0aCk7YnJlYWt9YnJlYWs7Y2FzZSBPOmkucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWs7Y2FzZSBiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IHEobCl9aS5sZW5ndGg9PT0wJiZhLmxlbmd0aD4wJiYoaS5wdXNoKC4uLmEucmV2ZXJzZSgpKSxhLmxlbmd0aD0wKX1sZXQgZD1zLmluZGV4T2YoVGUpO2lmKGQhPT0tMSl7bGV0IGY9cy5pbmRleE9mKFRlLGQrMSkscD1zLnNsaWNlKDAsZCkuam9pbihcIlwiKSxsPXMuc2xpY2UoZCsxLGYpLmpvaW4oXCJcIiksRj1zLnNsaWNlKGYrMSkuam9pbihcIlwiKTtyZXR1cm57Zm9ybWF0dGVkOnArbCtGLGN1cnNvck5vZGVTdGFydDpwLmxlbmd0aCxjdXJzb3JOb2RlVGV4dDpsfX1yZXR1cm57Zm9ybWF0dGVkOnMuam9pbihcIlwiKX19ZnVuY3Rpb24gSihlKXt2YXIgdDtpZighZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSkpe2xldCByPVtdO2ZvcihsZXQgbiBvZiBlKWlmKEFycmF5LmlzQXJyYXkobikpci5wdXNoKC4uLkoobikpO2Vsc2V7bGV0IG89SihuKTtvIT09XCJcIiYmci5wdXNoKG8pfXJldHVybiByfXJldHVybiBlLnR5cGU9PT14P3suLi5lLGJyZWFrQ29udGVudHM6SihlLmJyZWFrQ29udGVudHMpLGZsYXRDb250ZW50czpKKGUuZmxhdENvbnRlbnRzKX06ZS50eXBlPT09Xz97Li4uZSxjb250ZW50czpKKGUuY29udGVudHMpLGV4cGFuZGVkU3RhdGVzOih0PWUuZXhwYW5kZWRTdGF0ZXMpPT1udWxsP3ZvaWQgMDp0Lm1hcChKKX06ZS50eXBlPT09az97dHlwZTpcImZpbGxcIixwYXJ0czplLnBhcnRzLm1hcChKKX06ZS5jb250ZW50cz97Li4uZSxjb250ZW50czpKKGUuY29udGVudHMpfTplfWZ1bmN0aW9uIFByKGUpe2xldCB0PU9iamVjdC5jcmVhdGUobnVsbCkscj1uZXcgU2V0O3JldHVybiBuKEooZSkpO2Z1bmN0aW9uIG4odSxpLHMpe3ZhciBELGE7aWYodHlwZW9mIHU9PVwic3RyaW5nXCIpcmV0dXJuIEpTT04uc3RyaW5naWZ5KHUpO2lmKEFycmF5LmlzQXJyYXkodSkpe2xldCBjPXUubWFwKG4pLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gYy5sZW5ndGg9PT0xP2NbMF06YFske2Muam9pbihcIiwgXCIpfV1gfWlmKHUudHlwZT09PUEpe2xldCBjPSgoRD1zPT1udWxsP3ZvaWQgMDpzW2krMV0pPT1udWxsP3ZvaWQgMDpELnR5cGUpPT09YjtyZXR1cm4gdS5saXRlcmFsP2M/XCJsaXRlcmFsbGluZVwiOlwibGl0ZXJhbGxpbmVXaXRob3V0QnJlYWtQYXJlbnRcIjp1LmhhcmQ/Yz9cImhhcmRsaW5lXCI6XCJoYXJkbGluZVdpdGhvdXRCcmVha1BhcmVudFwiOnUuc29mdD9cInNvZnRsaW5lXCI6XCJsaW5lXCJ9aWYodS50eXBlPT09YilyZXR1cm4oKGE9cz09bnVsbD92b2lkIDA6c1tpLTFdKT09bnVsbD92b2lkIDA6YS50eXBlKT09PUEmJnNbaS0xXS5oYXJkP3ZvaWQgMDpcImJyZWFrUGFyZW50XCI7aWYodS50eXBlPT09dilyZXR1cm5cInRyaW1cIjtpZih1LnR5cGU9PT1UKXJldHVyblwiaW5kZW50KFwiK24odS5jb250ZW50cykrXCIpXCI7aWYodS50eXBlPT09UylyZXR1cm4gdS5uPT09TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZP1wiZGVkZW50VG9Sb290KFwiK24odS5jb250ZW50cykrXCIpXCI6dS5uPDA/XCJkZWRlbnQoXCIrbih1LmNvbnRlbnRzKStcIilcIjp1Lm4udHlwZT09PVwicm9vdFwiP1wibWFya0FzUm9vdChcIituKHUuY29udGVudHMpK1wiKVwiOlwiYWxpZ24oXCIrSlNPTi5zdHJpbmdpZnkodS5uKStcIiwgXCIrbih1LmNvbnRlbnRzKStcIilcIjtpZih1LnR5cGU9PT14KXJldHVyblwiaWZCcmVhayhcIituKHUuYnJlYWtDb250ZW50cykrKHUuZmxhdENvbnRlbnRzP1wiLCBcIituKHUuZmxhdENvbnRlbnRzKTpcIlwiKSsodS5ncm91cElkPyh1LmZsYXRDb250ZW50cz9cIlwiOicsIFwiXCInKStgLCB7IGdyb3VwSWQ6ICR7byh1Lmdyb3VwSWQpfSB9YDpcIlwiKStcIilcIjtpZih1LnR5cGU9PT1QKXtsZXQgYz1bXTt1Lm5lZ2F0ZSYmYy5wdXNoKFwibmVnYXRlOiB0cnVlXCIpLHUuZ3JvdXBJZCYmYy5wdXNoKGBncm91cElkOiAke28odS5ncm91cElkKX1gKTtsZXQgZD1jLmxlbmd0aD4wP2AsIHsgJHtjLmpvaW4oXCIsIFwiKX0gfWA6XCJcIjtyZXR1cm5gaW5kZW50SWZCcmVhaygke24odS5jb250ZW50cyl9JHtkfSlgfWlmKHUudHlwZT09PV8pe2xldCBjPVtdO3UuYnJlYWsmJnUuYnJlYWshPT1cInByb3BhZ2F0ZWRcIiYmYy5wdXNoKFwic2hvdWxkQnJlYWs6IHRydWVcIiksdS5pZCYmYy5wdXNoKGBpZDogJHtvKHUuaWQpfWApO2xldCBkPWMubGVuZ3RoPjA/YCwgeyAke2Muam9pbihcIiwgXCIpfSB9YDpcIlwiO3JldHVybiB1LmV4cGFuZGVkU3RhdGVzP2Bjb25kaXRpb25hbEdyb3VwKFske3UuZXhwYW5kZWRTdGF0ZXMubWFwKGY9Pm4oZikpLmpvaW4oXCIsXCIpfV0ke2R9KWA6YGdyb3VwKCR7bih1LmNvbnRlbnRzKX0ke2R9KWB9aWYodS50eXBlPT09aylyZXR1cm5gZmlsbChbJHt1LnBhcnRzLm1hcChjPT5uKGMpKS5qb2luKFwiLCBcIil9XSlgO2lmKHUudHlwZT09PUwpcmV0dXJuXCJsaW5lU3VmZml4KFwiK24odS5jb250ZW50cykrXCIpXCI7aWYodS50eXBlPT09SSlyZXR1cm5cImxpbmVTdWZmaXhCb3VuZGFyeVwiO2lmKHUudHlwZT09PU8pcmV0dXJuYGxhYmVsKCR7SlNPTi5zdHJpbmdpZnkodS5sYWJlbCl9LCAke24odS5jb250ZW50cyl9KWA7dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBkb2MgdHlwZSBcIit1LnR5cGUpfWZ1bmN0aW9uIG8odSl7aWYodHlwZW9mIHUhPVwic3ltYm9sXCIpcmV0dXJuIEpTT04uc3RyaW5naWZ5KFN0cmluZyh1KSk7aWYodSBpbiB0KXJldHVybiB0W3VdO2xldCBpPXUuZGVzY3JpcHRpb258fFwic3ltYm9sXCI7Zm9yKGxldCBzPTA7O3MrKyl7bGV0IEQ9aSsocz4wP2AgIyR7c31gOlwiXCIpO2lmKCFyLmhhcyhEKSlyZXR1cm4gci5hZGQoRCksdFt1XT1gU3ltYm9sLmZvcigke0pTT04uc3RyaW5naWZ5KEQpfSlgfX19ZnVuY3Rpb24ganUoZSx0LHI9MCl7bGV0IG49MDtmb3IobGV0IG89cjtvPGUubGVuZ3RoOysrbyllW29dPT09XCJcdFwiP249bit0LW4ldDpuKys7cmV0dXJuIG59dmFyIEZlPWp1O3ZhciBTZT1jbGFzcyBleHRlbmRzIEVycm9ye25hbWU9XCJDb25maWdFcnJvclwifSx2ZT1jbGFzcyBleHRlbmRzIEVycm9ye25hbWU9XCJVbmRlZmluZWRQYXJzZXJFcnJvclwifTt2YXIgTHI9e2N1cnNvck9mZnNldDp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcImludFwiLGRlZmF1bHQ6LTEscmFuZ2U6e3N0YXJ0Oi0xLGVuZDoxLzAsc3RlcDoxfSxkZXNjcmlwdGlvbjpcIlByaW50ICh0byBzdGRlcnIpIHdoZXJlIGEgY3Vyc29yIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiB3b3VsZCBtb3ZlIHRvIGFmdGVyIGZvcm1hdHRpbmcuXCIsY2xpQ2F0ZWdvcnk6XCJFZGl0b3JcIn0sZW5kT2ZMaW5lOntjYXRlZ29yeTpcIkdsb2JhbFwiLHR5cGU6XCJjaG9pY2VcIixkZWZhdWx0OlwibGZcIixkZXNjcmlwdGlvbjpcIldoaWNoIGVuZCBvZiBsaW5lIGNoYXJhY3RlcnMgdG8gYXBwbHkuXCIsY2hvaWNlczpbe3ZhbHVlOlwibGZcIixkZXNjcmlwdGlvbjpcIkxpbmUgRmVlZCBvbmx5IChcXFxcbiksIGNvbW1vbiBvbiBMaW51eCBhbmQgbWFjT1MgYXMgd2VsbCBhcyBpbnNpZGUgZ2l0IHJlcG9zXCJ9LHt2YWx1ZTpcImNybGZcIixkZXNjcmlwdGlvbjpcIkNhcnJpYWdlIFJldHVybiArIExpbmUgRmVlZCBjaGFyYWN0ZXJzIChcXFxcclxcXFxuKSwgY29tbW9uIG9uIFdpbmRvd3NcIn0se3ZhbHVlOlwiY3JcIixkZXNjcmlwdGlvbjpcIkNhcnJpYWdlIFJldHVybiBjaGFyYWN0ZXIgb25seSAoXFxcXHIpLCB1c2VkIHZlcnkgcmFyZWx5XCJ9LHt2YWx1ZTpcImF1dG9cIixkZXNjcmlwdGlvbjpgTWFpbnRhaW4gZXhpc3RpbmdcbihtaXhlZCB2YWx1ZXMgd2l0aGluIG9uZSBmaWxlIGFyZSBub3JtYWxpc2VkIGJ5IGxvb2tpbmcgYXQgd2hhdCdzIHVzZWQgYWZ0ZXIgdGhlIGZpcnN0IGxpbmUpYH1dfSxmaWxlcGF0aDp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcInBhdGhcIixkZXNjcmlwdGlvbjpcIlNwZWNpZnkgdGhlIGlucHV0IGZpbGVwYXRoLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBkbyBwYXJzZXIgaW5mZXJlbmNlLlwiLGNsaU5hbWU6XCJzdGRpbi1maWxlcGF0aFwiLGNsaUNhdGVnb3J5OlwiT3RoZXJcIixjbGlEZXNjcmlwdGlvbjpcIlBhdGggdG8gdGhlIGZpbGUgdG8gcHJldGVuZCB0aGF0IHN0ZGluIGNvbWVzIGZyb20uXCJ9LGluc2VydFByYWdtYTp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiExLGRlc2NyaXB0aW9uOlwiSW5zZXJ0IEBmb3JtYXQgcHJhZ21hIGludG8gZmlsZSdzIGZpcnN0IGRvY2Jsb2NrIGNvbW1lbnQuXCIsY2xpQ2F0ZWdvcnk6XCJPdGhlclwifSxwYXJzZXI6e2NhdGVnb3J5OlwiR2xvYmFsXCIsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6dm9pZCAwLGRlc2NyaXB0aW9uOlwiV2hpY2ggcGFyc2VyIHRvIHVzZS5cIixleGNlcHRpb246ZT0+dHlwZW9mIGU9PVwic3RyaW5nXCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIsY2hvaWNlczpbe3ZhbHVlOlwiZmxvd1wiLGRlc2NyaXB0aW9uOlwiRmxvd1wifSx7dmFsdWU6XCJiYWJlbFwiLGRlc2NyaXB0aW9uOlwiSmF2YVNjcmlwdFwifSx7dmFsdWU6XCJiYWJlbC1mbG93XCIsZGVzY3JpcHRpb246XCJGbG93XCJ9LHt2YWx1ZTpcImJhYmVsLXRzXCIsZGVzY3JpcHRpb246XCJUeXBlU2NyaXB0XCJ9LHt2YWx1ZTpcInR5cGVzY3JpcHRcIixkZXNjcmlwdGlvbjpcIlR5cGVTY3JpcHRcIn0se3ZhbHVlOlwiYWNvcm5cIixkZXNjcmlwdGlvbjpcIkphdmFTY3JpcHRcIn0se3ZhbHVlOlwiZXNwcmVlXCIsZGVzY3JpcHRpb246XCJKYXZhU2NyaXB0XCJ9LHt2YWx1ZTpcIm1lcml5YWhcIixkZXNjcmlwdGlvbjpcIkphdmFTY3JpcHRcIn0se3ZhbHVlOlwiY3NzXCIsZGVzY3JpcHRpb246XCJDU1NcIn0se3ZhbHVlOlwibGVzc1wiLGRlc2NyaXB0aW9uOlwiTGVzc1wifSx7dmFsdWU6XCJzY3NzXCIsZGVzY3JpcHRpb246XCJTQ1NTXCJ9LHt2YWx1ZTpcImpzb25cIixkZXNjcmlwdGlvbjpcIkpTT05cIn0se3ZhbHVlOlwianNvbjVcIixkZXNjcmlwdGlvbjpcIkpTT041XCJ9LHt2YWx1ZTpcImpzb24tc3RyaW5naWZ5XCIsZGVzY3JpcHRpb246XCJKU09OLnN0cmluZ2lmeVwifSx7dmFsdWU6XCJncmFwaHFsXCIsZGVzY3JpcHRpb246XCJHcmFwaFFMXCJ9LHt2YWx1ZTpcIm1hcmtkb3duXCIsZGVzY3JpcHRpb246XCJNYXJrZG93blwifSx7dmFsdWU6XCJtZHhcIixkZXNjcmlwdGlvbjpcIk1EWFwifSx7dmFsdWU6XCJ2dWVcIixkZXNjcmlwdGlvbjpcIlZ1ZVwifSx7dmFsdWU6XCJ5YW1sXCIsZGVzY3JpcHRpb246XCJZQU1MXCJ9LHt2YWx1ZTpcImdsaW1tZXJcIixkZXNjcmlwdGlvbjpcIkVtYmVyIC8gSGFuZGxlYmFyc1wifSx7dmFsdWU6XCJodG1sXCIsZGVzY3JpcHRpb246XCJIVE1MXCJ9LHt2YWx1ZTpcImFuZ3VsYXJcIixkZXNjcmlwdGlvbjpcIkFuZ3VsYXJcIn0se3ZhbHVlOlwibHdjXCIsZGVzY3JpcHRpb246XCJMaWdodG5pbmcgV2ViIENvbXBvbmVudHNcIn1dfSxwbHVnaW5zOnt0eXBlOlwicGF0aFwiLGFycmF5OiEwLGRlZmF1bHQ6W3t2YWx1ZTpbXX1dLGNhdGVnb3J5OlwiR2xvYmFsXCIsZGVzY3JpcHRpb246XCJBZGQgYSBwbHVnaW4uIE11bHRpcGxlIHBsdWdpbnMgY2FuIGJlIHBhc3NlZCBhcyBzZXBhcmF0ZSBgLS1wbHVnaW5gcy5cIixleGNlcHRpb246ZT0+dHlwZW9mIGU9PVwic3RyaW5nXCJ8fHR5cGVvZiBlPT1cIm9iamVjdFwiLGNsaU5hbWU6XCJwbHVnaW5cIixjbGlDYXRlZ29yeTpcIkNvbmZpZ1wifSxwcmludFdpZHRoOntjYXRlZ29yeTpcIkdsb2JhbFwiLHR5cGU6XCJpbnRcIixkZWZhdWx0OjgwLGRlc2NyaXB0aW9uOlwiVGhlIGxpbmUgbGVuZ3RoIHdoZXJlIFByZXR0aWVyIHdpbGwgdHJ5IHdyYXAuXCIscmFuZ2U6e3N0YXJ0OjAsZW5kOjEvMCxzdGVwOjF9fSxyYW5nZUVuZDp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcImludFwiLGRlZmF1bHQ6MS8wLHJhbmdlOntzdGFydDowLGVuZDoxLzAsc3RlcDoxfSxkZXNjcmlwdGlvbjpgRm9ybWF0IGNvZGUgZW5kaW5nIGF0IGEgZ2l2ZW4gY2hhcmFjdGVyIG9mZnNldCAoZXhjbHVzaXZlKS5cblRoZSByYW5nZSB3aWxsIGV4dGVuZCBmb3J3YXJkcyB0byB0aGUgZW5kIG9mIHRoZSBzZWxlY3RlZCBzdGF0ZW1lbnQuYCxjbGlDYXRlZ29yeTpcIkVkaXRvclwifSxyYW5nZVN0YXJ0OntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwiaW50XCIsZGVmYXVsdDowLHJhbmdlOntzdGFydDowLGVuZDoxLzAsc3RlcDoxfSxkZXNjcmlwdGlvbjpgRm9ybWF0IGNvZGUgc3RhcnRpbmcgYXQgYSBnaXZlbiBjaGFyYWN0ZXIgb2Zmc2V0LlxuVGhlIHJhbmdlIHdpbGwgZXh0ZW5kIGJhY2t3YXJkcyB0byB0aGUgc3RhcnQgb2YgdGhlIGZpcnN0IGxpbmUgY29udGFpbmluZyB0aGUgc2VsZWN0ZWQgc3RhdGVtZW50LmAsY2xpQ2F0ZWdvcnk6XCJFZGl0b3JcIn0scmVxdWlyZVByYWdtYTp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiExLGRlc2NyaXB0aW9uOmBSZXF1aXJlIGVpdGhlciAnQHByZXR0aWVyJyBvciAnQGZvcm1hdCcgdG8gYmUgcHJlc2VudCBpbiB0aGUgZmlsZSdzIGZpcnN0IGRvY2Jsb2NrIGNvbW1lbnRcbmluIG9yZGVyIGZvciBpdCB0byBiZSBmb3JtYXR0ZWQuYCxjbGlDYXRlZ29yeTpcIk90aGVyXCJ9LHRhYldpZHRoOnt0eXBlOlwiaW50XCIsY2F0ZWdvcnk6XCJHbG9iYWxcIixkZWZhdWx0OjIsZGVzY3JpcHRpb246XCJOdW1iZXIgb2Ygc3BhY2VzIHBlciBpbmRlbnRhdGlvbiBsZXZlbC5cIixyYW5nZTp7c3RhcnQ6MCxlbmQ6MS8wLHN0ZXA6MX19LHVzZVRhYnM6e2NhdGVnb3J5OlwiR2xvYmFsXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiExLGRlc2NyaXB0aW9uOlwiSW5kZW50IHdpdGggdGFicyBpbnN0ZWFkIG9mIHNwYWNlcy5cIn0sZW1iZWRkZWRMYW5ndWFnZUZvcm1hdHRpbmc6e2NhdGVnb3J5OlwiR2xvYmFsXCIsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6XCJhdXRvXCIsZGVzY3JpcHRpb246XCJDb250cm9sIGhvdyBQcmV0dGllciBmb3JtYXRzIHF1b3RlZCBjb2RlIGVtYmVkZGVkIGluIHRoZSBmaWxlLlwiLGNob2ljZXM6W3t2YWx1ZTpcImF1dG9cIixkZXNjcmlwdGlvbjpcIkZvcm1hdCBlbWJlZGRlZCBjb2RlIGlmIFByZXR0aWVyIGNhbiBhdXRvbWF0aWNhbGx5IGlkZW50aWZ5IGl0LlwifSx7dmFsdWU6XCJvZmZcIixkZXNjcmlwdGlvbjpcIk5ldmVyIGF1dG9tYXRpY2FsbHkgZm9ybWF0IGVtYmVkZGVkIGNvZGUuXCJ9XX19O2Z1bmN0aW9uIGV0KHtwbHVnaW5zOmU9W10sc2hvd0RlcHJlY2F0ZWQ6dD0hMX09e30pe2xldCByPWUuZmxhdE1hcChvPT5vLmxhbmd1YWdlcz8/W10pLG49W107Zm9yKGxldCBvIG9mICR1KE9iamVjdC5hc3NpZ24oe30sLi4uZS5tYXAoKHtvcHRpb25zOnV9KT0+dSksTHIpKSkhdCYmby5kZXByZWNhdGVkfHwoQXJyYXkuaXNBcnJheShvLmNob2ljZXMpJiYodHx8KG8uY2hvaWNlcz1vLmNob2ljZXMuZmlsdGVyKHU9PiF1LmRlcHJlY2F0ZWQpKSxvLm5hbWU9PT1cInBhcnNlclwiJiYoby5jaG9pY2VzPVsuLi5vLmNob2ljZXMsLi4uVnUoby5jaG9pY2VzLHIsZSldKSksby5wbHVnaW5EZWZhdWx0cz1PYmplY3QuZnJvbUVudHJpZXMoZS5maWx0ZXIodT0+e3ZhciBpO3JldHVybigoaT11LmRlZmF1bHRPcHRpb25zKT09bnVsbD92b2lkIDA6aVtvLm5hbWVdKSE9PXZvaWQgMH0pLm1hcCh1PT5bdS5uYW1lLHUuZGVmYXVsdE9wdGlvbnNbby5uYW1lXV0pKSxuLnB1c2gobykpO3JldHVybntsYW5ndWFnZXM6cixvcHRpb25zOm59fWZ1bmN0aW9uKlZ1KGUsdCxyKXtsZXQgbj1uZXcgU2V0KGUubWFwKG89Pm8udmFsdWUpKTtmb3IobGV0IG8gb2YgdClpZihvLnBhcnNlcnMpe2ZvcihsZXQgdSBvZiBvLnBhcnNlcnMpaWYoIW4uaGFzKHUpKXtuLmFkZCh1KTtsZXQgaT1yLmZpbmQoRD0+RC5wYXJzZXJzJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoRC5wYXJzZXJzLHUpKSxzPW8ubmFtZTtpIT1udWxsJiZpLm5hbWUmJihzKz1gIChwbHVnaW46ICR7aS5uYW1lfSlgKSx5aWVsZHt2YWx1ZTp1LGRlc2NyaXB0aW9uOnN9fX19ZnVuY3Rpb24gJHUoZSl7bGV0IHQ9W107Zm9yKGxldFtyLG5db2YgT2JqZWN0LmVudHJpZXMoZSkpe2xldCBvPXtuYW1lOnIsLi4ubn07QXJyYXkuaXNBcnJheShvLmRlZmF1bHQpJiYoby5kZWZhdWx0PXkoITEsby5kZWZhdWx0LC0xKS52YWx1ZSksdC5wdXNoKG8pfXJldHVybiB0fXZhciBNdT1lPT5TdHJpbmcoZSkuc3BsaXQoL1svXFxcXF0vKS5wb3AoKTtmdW5jdGlvbiBJcihlLHQpe2lmKCF0KXJldHVybjtsZXQgcj1NdSh0KS50b0xvd2VyQ2FzZSgpO3JldHVybiBlLmZpbmQobj0+e3ZhciBvLHU7cmV0dXJuKChvPW4uZXh0ZW5zaW9ucyk9PW51bGw/dm9pZCAwOm8uc29tZShpPT5yLmVuZHNXaXRoKGkpKSl8fCgodT1uLmZpbGVuYW1lcyk9PW51bGw/dm9pZCAwOnUuc29tZShpPT5pLnRvTG93ZXJDYXNlKCk9PT1yKSl9KX1mdW5jdGlvbiBXdShlLHQpe2lmKHQpcmV0dXJuIGUuZmluZCgoe25hbWU6cn0pPT5yLnRvTG93ZXJDYXNlKCk9PT10KT8/ZS5maW5kKCh7YWxpYXNlczpyfSk9PnI9PW51bGw/dm9pZCAwOnIuaW5jbHVkZXModCkpPz9lLmZpbmQoKHtleHRlbnNpb25zOnJ9KT0+cj09bnVsbD92b2lkIDA6ci5pbmNsdWRlcyhgLiR7dH1gKSl9ZnVuY3Rpb24gVXUoZSx0KXtsZXQgcj1lLnBsdWdpbnMuZmxhdE1hcChvPT5vLmxhbmd1YWdlcz8/W10pLG49V3Uocix0Lmxhbmd1YWdlKT8/SXIocix0LnBoeXNpY2FsRmlsZSk/P0lyKHIsdC5maWxlKT8/KHQucGh5c2ljYWxGaWxlLHZvaWQgMCk7cmV0dXJuIG49PW51bGw/dm9pZCAwOm4ucGFyc2Vyc1swXX12YXIgUnI9VXU7dmFyIHRlPXtrZXk6ZT0+L15bJF9hLXpBLVpdWyRfYS16QS1aMC05XSokLy50ZXN0KGUpP2U6SlNPTi5zdHJpbmdpZnkoZSksdmFsdWUoZSl7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cIm9iamVjdFwiKXJldHVybiBKU09OLnN0cmluZ2lmeShlKTtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybmBbJHtlLm1hcChyPT50ZS52YWx1ZShyKSkuam9pbihcIiwgXCIpfV1gO2xldCB0PU9iamVjdC5rZXlzKGUpO3JldHVybiB0Lmxlbmd0aD09PTA/XCJ7fVwiOmB7ICR7dC5tYXAocj0+YCR7dGUua2V5KHIpfTogJHt0ZS52YWx1ZShlW3JdKX1gKS5qb2luKFwiLCBcIil9IH1gfSxwYWlyOih7a2V5OmUsdmFsdWU6dH0pPT50ZS52YWx1ZSh7W2VdOnR9KX07dmFyIGJ0PWhlKFBlKCksMSksVnI9KGUsdCx7ZGVzY3JpcHRvcjpyfSk9PntsZXQgbj1bYCR7YnQuZGVmYXVsdC55ZWxsb3codHlwZW9mIGU9PVwic3RyaW5nXCI/ci5rZXkoZSk6ci5wYWlyKGUpKX0gaXMgZGVwcmVjYXRlZGBdO3JldHVybiB0JiZuLnB1c2goYHdlIG5vdyB0cmVhdCBpdCBhcyAke2J0LmRlZmF1bHQuYmx1ZSh0eXBlb2YgdD09XCJzdHJpbmdcIj9yLmtleSh0KTpyLnBhaXIodCkpfWApLG4uam9pbihcIjsgXCIpK1wiLlwifTt2YXIgc2U9aGUoUGUoKSwxKTt2YXIgdHQ9U3ltYm9sLmZvcihcInZub3B0cy5WQUxVRV9OT1RfRVhJU1RcIikscGU9U3ltYm9sLmZvcihcInZub3B0cy5WQUxVRV9VTkNIQU5HRURcIik7dmFyICRyPVwiIFwiLnJlcGVhdCgyKSxXcj0oZSx0LHIpPT57bGV0e3RleHQ6bixsaXN0Om99PXIubm9ybWFsaXplRXhwZWN0ZWRSZXN1bHQoci5zY2hlbWFzW2VdLmV4cGVjdGVkKHIpKSx1PVtdO3JldHVybiBuJiZ1LnB1c2goTXIoZSx0LG4sci5kZXNjcmlwdG9yKSksbyYmdS5wdXNoKFtNcihlLHQsby50aXRsZSxyLmRlc2NyaXB0b3IpXS5jb25jYXQoby52YWx1ZXMubWFwKGk9PlVyKGksci5sb2dnZXJQcmludFdpZHRoKSkpLmpvaW4oYFxuYCkpLHpyKHUsci5sb2dnZXJQcmludFdpZHRoKX07ZnVuY3Rpb24gTXIoZSx0LHIsbil7cmV0dXJuW2BJbnZhbGlkICR7c2UuZGVmYXVsdC5yZWQobi5rZXkoZSkpfSB2YWx1ZS5gLGBFeHBlY3RlZCAke3NlLmRlZmF1bHQuYmx1ZShyKX0sYCxgYnV0IHJlY2VpdmVkICR7dD09PXR0P3NlLmRlZmF1bHQuZ3JheShcIm5vdGhpbmdcIik6c2UuZGVmYXVsdC5yZWQobi52YWx1ZSh0KSl9LmBdLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIFVyKHt0ZXh0OmUsbGlzdDp0fSxyKXtsZXQgbj1bXTtyZXR1cm4gZSYmbi5wdXNoKGAtICR7c2UuZGVmYXVsdC5ibHVlKGUpfWApLHQmJm4ucHVzaChbYC0gJHtzZS5kZWZhdWx0LmJsdWUodC50aXRsZSl9OmBdLmNvbmNhdCh0LnZhbHVlcy5tYXAobz0+VXIobyxyLSRyLmxlbmd0aCkucmVwbGFjZSgvXnxcXG4vZyxgJCYkeyRyfWApKSkuam9pbihgXG5gKSksenIobixyKX1mdW5jdGlvbiB6cihlLHQpe2lmKGUubGVuZ3RoPT09MSlyZXR1cm4gZVswXTtsZXRbcixuXT1lLFtvLHVdPWUubWFwKGk9Pmkuc3BsaXQoYFxuYCwxKVswXS5sZW5ndGgpO3JldHVybiBvPnQmJm8+dT9uOnJ9dmFyIE50PWhlKFBlKCksMSk7dmFyIHd0PVtdLEdyPVtdO2Z1bmN0aW9uIE90KGUsdCl7aWYoZT09PXQpcmV0dXJuIDA7bGV0IHI9ZTtlLmxlbmd0aD50Lmxlbmd0aCYmKGU9dCx0PXIpO2xldCBuPWUubGVuZ3RoLG89dC5sZW5ndGg7Zm9yKDtuPjAmJmUuY2hhckNvZGVBdCh+LW4pPT09dC5jaGFyQ29kZUF0KH4tbyk7KW4tLSxvLS07bGV0IHU9MDtmb3IoO3U8biYmZS5jaGFyQ29kZUF0KHUpPT09dC5jaGFyQ29kZUF0KHUpOyl1Kys7aWYobi09dSxvLT11LG49PT0wKXJldHVybiBvO2xldCBpLHMsRCxhLGM9MCxkPTA7Zm9yKDtjPG47KUdyW2NdPWUuY2hhckNvZGVBdCh1K2MpLHd0W2NdPSsrYztmb3IoO2Q8bzspZm9yKGk9dC5jaGFyQ29kZUF0KHUrZCksRD1kKysscz1kLGM9MDtjPG47YysrKWE9aT09PUdyW2NdP0Q6RCsxLEQ9d3RbY10scz13dFtjXT1EPnM/YT5zP3MrMTphOmE+RD9EKzE6YTtyZXR1cm4gc312YXIgcnQ9KGUsdCx7ZGVzY3JpcHRvcjpyLGxvZ2dlcjpuLHNjaGVtYXM6b30pPT57bGV0IHU9W2BJZ25vcmVkIHVua25vd24gb3B0aW9uICR7TnQuZGVmYXVsdC55ZWxsb3coci5wYWlyKHtrZXk6ZSx2YWx1ZTp0fSkpfS5gXSxpPU9iamVjdC5rZXlzKG8pLnNvcnQoKS5maW5kKHM9Pk90KGUscyk8Myk7aSYmdS5wdXNoKGBEaWQgeW91IG1lYW4gJHtOdC5kZWZhdWx0LmJsdWUoci5rZXkoaSkpfT9gKSxuLndhcm4odS5qb2luKFwiIFwiKSl9O3ZhciB6dT1bXCJkZWZhdWx0XCIsXCJleHBlY3RlZFwiLFwidmFsaWRhdGVcIixcImRlcHJlY2F0ZWRcIixcImZvcndhcmRcIixcInJlZGlyZWN0XCIsXCJvdmVybGFwXCIsXCJwcmVwcm9jZXNzXCIsXCJwb3N0cHJvY2Vzc1wiXTtmdW5jdGlvbiBHdShlLHQpe2xldCByPW5ldyBlKHQpLG49T2JqZWN0LmNyZWF0ZShyKTtmb3IobGV0IG8gb2YgenUpbyBpbiB0JiYobltvXT1LdSh0W29dLHIsdy5wcm90b3R5cGVbb10ubGVuZ3RoKSk7cmV0dXJuIG59dmFyIHc9Y2xhc3N7c3RhdGljIGNyZWF0ZSh0KXtyZXR1cm4gR3UodGhpcyx0KX1jb25zdHJ1Y3Rvcih0KXt0aGlzLm5hbWU9dC5uYW1lfWRlZmF1bHQodCl7fWV4cGVjdGVkKHQpe3JldHVyblwibm90aGluZ1wifXZhbGlkYXRlKHQscil7cmV0dXJuITF9ZGVwcmVjYXRlZCh0LHIpe3JldHVybiExfWZvcndhcmQodCxyKXt9cmVkaXJlY3QodCxyKXt9b3ZlcmxhcCh0LHIsbil7cmV0dXJuIHR9cHJlcHJvY2Vzcyh0LHIpe3JldHVybiB0fXBvc3Rwcm9jZXNzKHQscil7cmV0dXJuIHBlfX07ZnVuY3Rpb24gS3UoZSx0LHIpe3JldHVybiB0eXBlb2YgZT09XCJmdW5jdGlvblwiPyguLi5uKT0+ZSguLi5uLnNsaWNlKDAsci0xKSx0LC4uLm4uc2xpY2Uoci0xKSk6KCk9PmV9dmFyIG50PWNsYXNzIGV4dGVuZHMgd3tjb25zdHJ1Y3Rvcih0KXtzdXBlcih0KSx0aGlzLl9zb3VyY2VOYW1lPXQuc291cmNlTmFtZX1leHBlY3RlZCh0KXtyZXR1cm4gdC5zY2hlbWFzW3RoaXMuX3NvdXJjZU5hbWVdLmV4cGVjdGVkKHQpfXZhbGlkYXRlKHQscil7cmV0dXJuIHIuc2NoZW1hc1t0aGlzLl9zb3VyY2VOYW1lXS52YWxpZGF0ZSh0LHIpfXJlZGlyZWN0KHQscil7cmV0dXJuIHRoaXMuX3NvdXJjZU5hbWV9fTt2YXIgdXQ9Y2xhc3MgZXh0ZW5kcyB3e2V4cGVjdGVkKCl7cmV0dXJuXCJhbnl0aGluZ1wifXZhbGlkYXRlKCl7cmV0dXJuITB9fTt2YXIgb3Q9Y2xhc3MgZXh0ZW5kcyB3e2NvbnN0cnVjdG9yKHt2YWx1ZVNjaGVtYTp0LG5hbWU6cj10Lm5hbWUsLi4ubn0pe3N1cGVyKHsuLi5uLG5hbWU6cn0pLHRoaXMuX3ZhbHVlU2NoZW1hPXR9ZXhwZWN0ZWQodCl7bGV0e3RleHQ6cixsaXN0Om59PXQubm9ybWFsaXplRXhwZWN0ZWRSZXN1bHQodGhpcy5fdmFsdWVTY2hlbWEuZXhwZWN0ZWQodCkpO3JldHVybnt0ZXh0OnImJmBhbiBhcnJheSBvZiAke3J9YCxsaXN0Om4mJnt0aXRsZTpcImFuIGFycmF5IG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzXCIsdmFsdWVzOlt7bGlzdDpufV19fX12YWxpZGF0ZSh0LHIpe2lmKCFBcnJheS5pc0FycmF5KHQpKXJldHVybiExO2xldCBuPVtdO2ZvcihsZXQgbyBvZiB0KXtsZXQgdT1yLm5vcm1hbGl6ZVZhbGlkYXRlUmVzdWx0KHRoaXMuX3ZhbHVlU2NoZW1hLnZhbGlkYXRlKG8sciksbyk7dSE9PSEwJiZuLnB1c2godS52YWx1ZSl9cmV0dXJuIG4ubGVuZ3RoPT09MD8hMDp7dmFsdWU6bn19ZGVwcmVjYXRlZCh0LHIpe2xldCBuPVtdO2ZvcihsZXQgbyBvZiB0KXtsZXQgdT1yLm5vcm1hbGl6ZURlcHJlY2F0ZWRSZXN1bHQodGhpcy5fdmFsdWVTY2hlbWEuZGVwcmVjYXRlZChvLHIpLG8pO3UhPT0hMSYmbi5wdXNoKC4uLnUubWFwKCh7dmFsdWU6aX0pPT4oe3ZhbHVlOltpXX0pKSl9cmV0dXJuIG59Zm9yd2FyZCh0LHIpe2xldCBuPVtdO2ZvcihsZXQgbyBvZiB0KXtsZXQgdT1yLm5vcm1hbGl6ZUZvcndhcmRSZXN1bHQodGhpcy5fdmFsdWVTY2hlbWEuZm9yd2FyZChvLHIpLG8pO24ucHVzaCguLi51Lm1hcChLcikpfXJldHVybiBufXJlZGlyZWN0KHQscil7bGV0IG49W10sbz1bXTtmb3IobGV0IHUgb2YgdCl7bGV0IGk9ci5ub3JtYWxpemVSZWRpcmVjdFJlc3VsdCh0aGlzLl92YWx1ZVNjaGVtYS5yZWRpcmVjdCh1LHIpLHUpO1wicmVtYWluXCJpbiBpJiZuLnB1c2goaS5yZW1haW4pLG8ucHVzaCguLi5pLnJlZGlyZWN0Lm1hcChLcikpfXJldHVybiBuLmxlbmd0aD09PTA/e3JlZGlyZWN0Om99OntyZWRpcmVjdDpvLHJlbWFpbjpufX1vdmVybGFwKHQscil7cmV0dXJuIHQuY29uY2F0KHIpfX07ZnVuY3Rpb24gS3Ioe2Zyb206ZSx0bzp0fSl7cmV0dXJue2Zyb206W2VdLHRvOnR9fXZhciBpdD1jbGFzcyBleHRlbmRzIHd7ZXhwZWN0ZWQoKXtyZXR1cm5cInRydWUgb3IgZmFsc2VcIn12YWxpZGF0ZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwiYm9vbGVhblwifX07ZnVuY3Rpb24gcXIoZSx0KXtsZXQgcj1PYmplY3QuY3JlYXRlKG51bGwpO2ZvcihsZXQgbiBvZiBlKXtsZXQgbz1uW3RdO2lmKHJbb10pdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgJHt0fSAke0pTT04uc3RyaW5naWZ5KG8pfWApO3Jbb109bn1yZXR1cm4gcn1mdW5jdGlvbiBKcihlLHQpe2xldCByPW5ldyBNYXA7Zm9yKGxldCBuIG9mIGUpe2xldCBvPW5bdF07aWYoci5oYXMobykpdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgJHt0fSAke0pTT04uc3RyaW5naWZ5KG8pfWApO3Iuc2V0KG8sbil9cmV0dXJuIHJ9ZnVuY3Rpb24gWHIoKXtsZXQgZT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiB0PT57bGV0IHI9SlNPTi5zdHJpbmdpZnkodCk7cmV0dXJuIGVbcl0/ITA6KGVbcl09ITAsITEpfX1mdW5jdGlvbiBacihlLHQpe2xldCByPVtdLG49W107Zm9yKGxldCBvIG9mIGUpdChvKT9yLnB1c2gobyk6bi5wdXNoKG8pO3JldHVybltyLG5dfWZ1bmN0aW9uIFFyKGUpe3JldHVybiBlPT09TWF0aC5mbG9vcihlKX1mdW5jdGlvbiBlbihlLHQpe2lmKGU9PT10KXJldHVybiAwO2xldCByPXR5cGVvZiBlLG49dHlwZW9mIHQsbz1bXCJ1bmRlZmluZWRcIixcIm9iamVjdFwiLFwiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl07cmV0dXJuIHIhPT1uP28uaW5kZXhPZihyKS1vLmluZGV4T2Yobik6ciE9PVwic3RyaW5nXCI/TnVtYmVyKGUpLU51bWJlcih0KTplLmxvY2FsZUNvbXBhcmUodCl9ZnVuY3Rpb24gdG4oZSl7cmV0dXJuKC4uLnQpPT57bGV0IHI9ZSguLi50KTtyZXR1cm4gdHlwZW9mIHI9PVwic3RyaW5nXCI/bmV3IEVycm9yKHIpOnJ9fWZ1bmN0aW9uIFR0KGUpe3JldHVybiBlPT09dm9pZCAwP3t9OmV9ZnVuY3Rpb24gU3QoZSl7aWYodHlwZW9mIGU9PVwic3RyaW5nXCIpcmV0dXJue3RleHQ6ZX07bGV0e3RleHQ6dCxsaXN0OnJ9PWU7cmV0dXJuIEh1KCh0fHxyKSE9PXZvaWQgMCxcIlVuZXhwZWN0ZWQgYGV4cGVjdGVkYCByZXN1bHQsIHRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgZmllbGQuXCIpLHI/e3RleHQ6dCxsaXN0Ont0aXRsZTpyLnRpdGxlLHZhbHVlczpyLnZhbHVlcy5tYXAoU3QpfX06e3RleHQ6dH19ZnVuY3Rpb24gdnQoZSx0KXtyZXR1cm4gZT09PSEwPyEwOmU9PT0hMT97dmFsdWU6dH06ZX1mdW5jdGlvbiBQdChlLHQscj0hMSl7cmV0dXJuIGU9PT0hMT8hMTplPT09ITA/cj8hMDpbe3ZhbHVlOnR9XTpcInZhbHVlXCJpbiBlP1tlXTplLmxlbmd0aD09PTA/ITE6ZX1mdW5jdGlvbiBIcihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcInx8XCJrZXlcImluIGU/e2Zyb206dCx0bzplfTpcImZyb21cImluIGU/e2Zyb206ZS5mcm9tLHRvOmUudG99Ontmcm9tOnQsdG86ZS50b319ZnVuY3Rpb24gc3QoZSx0KXtyZXR1cm4gZT09PXZvaWQgMD9bXTpBcnJheS5pc0FycmF5KGUpP2UubWFwKHI9PkhyKHIsdCkpOltIcihlLHQpXX1mdW5jdGlvbiBMdChlLHQpe2xldCByPXN0KHR5cGVvZiBlPT1cIm9iamVjdFwiJiZcInJlZGlyZWN0XCJpbiBlP2UucmVkaXJlY3Q6ZSx0KTtyZXR1cm4gci5sZW5ndGg9PT0wP3tyZW1haW46dCxyZWRpcmVjdDpyfTp0eXBlb2YgZT09XCJvYmplY3RcIiYmXCJyZW1haW5cImluIGU/e3JlbWFpbjplLnJlbWFpbixyZWRpcmVjdDpyfTp7cmVkaXJlY3Q6cn19ZnVuY3Rpb24gSHUoZSx0KXtpZighZSl0aHJvdyBuZXcgRXJyb3IodCl9dmFyIER0PWNsYXNzIGV4dGVuZHMgd3tjb25zdHJ1Y3Rvcih0KXtzdXBlcih0KSx0aGlzLl9jaG9pY2VzPUpyKHQuY2hvaWNlcy5tYXAocj0+ciYmdHlwZW9mIHI9PVwib2JqZWN0XCI/cjp7dmFsdWU6cn0pLFwidmFsdWVcIil9ZXhwZWN0ZWQoe2Rlc2NyaXB0b3I6dH0pe2xldCByPUFycmF5LmZyb20odGhpcy5fY2hvaWNlcy5rZXlzKCkpLm1hcChpPT50aGlzLl9jaG9pY2VzLmdldChpKSkuZmlsdGVyKCh7aGlkZGVuOml9KT0+IWkpLm1hcChpPT5pLnZhbHVlKS5zb3J0KGVuKS5tYXAodC52YWx1ZSksbj1yLnNsaWNlKDAsLTIpLG89ci5zbGljZSgtMik7cmV0dXJue3RleHQ6bi5jb25jYXQoby5qb2luKFwiIG9yIFwiKSkuam9pbihcIiwgXCIpLGxpc3Q6e3RpdGxlOlwib25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzXCIsdmFsdWVzOnJ9fX12YWxpZGF0ZSh0KXtyZXR1cm4gdGhpcy5fY2hvaWNlcy5oYXModCl9ZGVwcmVjYXRlZCh0KXtsZXQgcj10aGlzLl9jaG9pY2VzLmdldCh0KTtyZXR1cm4gciYmci5kZXByZWNhdGVkP3t2YWx1ZTp0fTohMX1mb3J3YXJkKHQpe2xldCByPXRoaXMuX2Nob2ljZXMuZ2V0KHQpO3JldHVybiByP3IuZm9yd2FyZDp2b2lkIDB9cmVkaXJlY3QodCl7bGV0IHI9dGhpcy5fY2hvaWNlcy5nZXQodCk7cmV0dXJuIHI/ci5yZWRpcmVjdDp2b2lkIDB9fTt2YXIgYXQ9Y2xhc3MgZXh0ZW5kcyB3e2V4cGVjdGVkKCl7cmV0dXJuXCJhIG51bWJlclwifXZhbGlkYXRlKHQscil7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwifX07dmFyIGN0PWNsYXNzIGV4dGVuZHMgYXR7ZXhwZWN0ZWQoKXtyZXR1cm5cImFuIGludGVnZXJcIn12YWxpZGF0ZSh0LHIpe3JldHVybiByLm5vcm1hbGl6ZVZhbGlkYXRlUmVzdWx0KHN1cGVyLnZhbGlkYXRlKHQsciksdCk9PT0hMCYmUXIodCl9fTt2YXIgTGU9Y2xhc3MgZXh0ZW5kcyB3e2V4cGVjdGVkKCl7cmV0dXJuXCJhIHN0cmluZ1wifXZhbGlkYXRlKHQpe3JldHVybiB0eXBlb2YgdD09XCJzdHJpbmdcIn19O3ZhciBybj10ZSxubj1ydCx1bj1Xcixvbj1Wcjt2YXIgbHQ9Y2xhc3N7Y29uc3RydWN0b3IodCxyKXtsZXR7bG9nZ2VyOm49Y29uc29sZSxsb2dnZXJQcmludFdpZHRoOm89ODAsZGVzY3JpcHRvcjp1PXJuLHVua25vd246aT1ubixpbnZhbGlkOnM9dW4sZGVwcmVjYXRlZDpEPW9uLG1pc3Npbmc6YT0oKT0+ITEscmVxdWlyZWQ6Yz0oKT0+ITEscHJlcHJvY2VzczpkPXA9PnAscG9zdHByb2Nlc3M6Zj0oKT0+cGV9PXJ8fHt9O3RoaXMuX3V0aWxzPXtkZXNjcmlwdG9yOnUsbG9nZ2VyOm58fHt3YXJuOigpPT57fX0sbG9nZ2VyUHJpbnRXaWR0aDpvLHNjaGVtYXM6cXIodCxcIm5hbWVcIiksbm9ybWFsaXplRGVmYXVsdFJlc3VsdDpUdCxub3JtYWxpemVFeHBlY3RlZFJlc3VsdDpTdCxub3JtYWxpemVEZXByZWNhdGVkUmVzdWx0OlB0LG5vcm1hbGl6ZUZvcndhcmRSZXN1bHQ6c3Qsbm9ybWFsaXplUmVkaXJlY3RSZXN1bHQ6THQsbm9ybWFsaXplVmFsaWRhdGVSZXN1bHQ6dnR9LHRoaXMuX3Vua25vd25IYW5kbGVyPWksdGhpcy5faW52YWxpZEhhbmRsZXI9dG4ocyksdGhpcy5fZGVwcmVjYXRlZEhhbmRsZXI9RCx0aGlzLl9pZGVudGlmeU1pc3Npbmc9KHAsbCk9PiEocCBpbiBsKXx8YShwLGwpLHRoaXMuX2lkZW50aWZ5UmVxdWlyZWQ9Yyx0aGlzLl9wcmVwcm9jZXNzPWQsdGhpcy5fcG9zdHByb2Nlc3M9Zix0aGlzLmNsZWFuSGlzdG9yeSgpfWNsZWFuSGlzdG9yeSgpe3RoaXMuX2hhc0RlcHJlY2F0aW9uV2FybmVkPVhyKCl9bm9ybWFsaXplKHQpe2xldCByPXt9LG89W3RoaXMuX3ByZXByb2Nlc3ModCx0aGlzLl91dGlscyldLHU9KCk9Pntmb3IoO28ubGVuZ3RoIT09MDspe2xldCBpPW8uc2hpZnQoKSxzPXRoaXMuX2FwcGx5Tm9ybWFsaXphdGlvbihpLHIpO28ucHVzaCguLi5zKX19O3UoKTtmb3IobGV0IGkgb2YgT2JqZWN0LmtleXModGhpcy5fdXRpbHMuc2NoZW1hcykpe2xldCBzPXRoaXMuX3V0aWxzLnNjaGVtYXNbaV07aWYoIShpIGluIHIpKXtsZXQgRD1UdChzLmRlZmF1bHQodGhpcy5fdXRpbHMpKTtcInZhbHVlXCJpbiBEJiZvLnB1c2goe1tpXTpELnZhbHVlfSl9fXUoKTtmb3IobGV0IGkgb2YgT2JqZWN0LmtleXModGhpcy5fdXRpbHMuc2NoZW1hcykpe2lmKCEoaSBpbiByKSljb250aW51ZTtsZXQgcz10aGlzLl91dGlscy5zY2hlbWFzW2ldLEQ9cltpXSxhPXMucG9zdHByb2Nlc3MoRCx0aGlzLl91dGlscyk7YSE9PXBlJiYodGhpcy5fYXBwbHlWYWxpZGF0aW9uKGEsaSxzKSxyW2ldPWEpfXJldHVybiB0aGlzLl9hcHBseVBvc3Rwcm9jZXNzKHIpLHRoaXMuX2FwcGx5UmVxdWlyZWRDaGVjayhyKSxyfV9hcHBseU5vcm1hbGl6YXRpb24odCxyKXtsZXQgbj1bXSx7a25vd25LZXlzOm8sdW5rbm93bktleXM6dX09dGhpcy5fcGFydGl0aW9uT3B0aW9uS2V5cyh0KTtmb3IobGV0IGkgb2Ygbyl7bGV0IHM9dGhpcy5fdXRpbHMuc2NoZW1hc1tpXSxEPXMucHJlcHJvY2Vzcyh0W2ldLHRoaXMuX3V0aWxzKTt0aGlzLl9hcHBseVZhbGlkYXRpb24oRCxpLHMpO2xldCBhPSh7ZnJvbTpwLHRvOmx9KT0+e24ucHVzaCh0eXBlb2YgbD09XCJzdHJpbmdcIj97W2xdOnB9OntbbC5rZXldOmwudmFsdWV9KX0sYz0oe3ZhbHVlOnAscmVkaXJlY3RUbzpsfSk9PntsZXQgRj1QdChzLmRlcHJlY2F0ZWQocCx0aGlzLl91dGlscyksRCwhMCk7aWYoRiE9PSExKWlmKEY9PT0hMCl0aGlzLl9oYXNEZXByZWNhdGlvbldhcm5lZChpKXx8dGhpcy5fdXRpbHMubG9nZ2VyLndhcm4odGhpcy5fZGVwcmVjYXRlZEhhbmRsZXIoaSxsLHRoaXMuX3V0aWxzKSk7ZWxzZSBmb3IobGV0e3ZhbHVlOm19b2YgRil7bGV0IEU9e2tleTppLHZhbHVlOm19O2lmKCF0aGlzLl9oYXNEZXByZWNhdGlvbldhcm5lZChFKSl7bGV0IEM9dHlwZW9mIGw9PVwic3RyaW5nXCI/e2tleTpsLHZhbHVlOm19Omw7dGhpcy5fdXRpbHMubG9nZ2VyLndhcm4odGhpcy5fZGVwcmVjYXRlZEhhbmRsZXIoRSxDLHRoaXMuX3V0aWxzKSl9fX07c3Qocy5mb3J3YXJkKEQsdGhpcy5fdXRpbHMpLEQpLmZvckVhY2goYSk7bGV0IGY9THQocy5yZWRpcmVjdChELHRoaXMuX3V0aWxzKSxEKTtpZihmLnJlZGlyZWN0LmZvckVhY2goYSksXCJyZW1haW5cImluIGYpe2xldCBwPWYucmVtYWluO3JbaV09aSBpbiByP3Mub3ZlcmxhcChyW2ldLHAsdGhpcy5fdXRpbHMpOnAsYyh7dmFsdWU6cH0pfWZvcihsZXR7ZnJvbTpwLHRvOmx9b2YgZi5yZWRpcmVjdCljKHt2YWx1ZTpwLHJlZGlyZWN0VG86bH0pfWZvcihsZXQgaSBvZiB1KXtsZXQgcz10W2ldO3RoaXMuX2FwcGx5VW5rbm93bkhhbmRsZXIoaSxzLHIsKEQsYSk9PntuLnB1c2goe1tEXTphfSl9KX1yZXR1cm4gbn1fYXBwbHlSZXF1aXJlZENoZWNrKHQpe2ZvcihsZXQgciBvZiBPYmplY3Qua2V5cyh0aGlzLl91dGlscy5zY2hlbWFzKSlpZih0aGlzLl9pZGVudGlmeU1pc3Npbmcocix0KSYmdGhpcy5faWRlbnRpZnlSZXF1aXJlZChyKSl0aHJvdyB0aGlzLl9pbnZhbGlkSGFuZGxlcihyLHR0LHRoaXMuX3V0aWxzKX1fcGFydGl0aW9uT3B0aW9uS2V5cyh0KXtsZXRbcixuXT1acihPYmplY3Qua2V5cyh0KS5maWx0ZXIobz0+IXRoaXMuX2lkZW50aWZ5TWlzc2luZyhvLHQpKSxvPT5vIGluIHRoaXMuX3V0aWxzLnNjaGVtYXMpO3JldHVybntrbm93bktleXM6cix1bmtub3duS2V5czpufX1fYXBwbHlWYWxpZGF0aW9uKHQscixuKXtsZXQgbz12dChuLnZhbGlkYXRlKHQsdGhpcy5fdXRpbHMpLHQpO2lmKG8hPT0hMCl0aHJvdyB0aGlzLl9pbnZhbGlkSGFuZGxlcihyLG8udmFsdWUsdGhpcy5fdXRpbHMpfV9hcHBseVVua25vd25IYW5kbGVyKHQscixuLG8pe2xldCB1PXRoaXMuX3Vua25vd25IYW5kbGVyKHQscix0aGlzLl91dGlscyk7aWYodSlmb3IobGV0IGkgb2YgT2JqZWN0LmtleXModSkpe2lmKHRoaXMuX2lkZW50aWZ5TWlzc2luZyhpLHUpKWNvbnRpbnVlO2xldCBzPXVbaV07aSBpbiB0aGlzLl91dGlscy5zY2hlbWFzP28oaSxzKTpuW2ldPXN9fV9hcHBseVBvc3Rwcm9jZXNzKHQpe2xldCByPXRoaXMuX3Bvc3Rwcm9jZXNzKHQsdGhpcy5fdXRpbHMpO2lmKHIhPT1wZSl7aWYoci5kZWxldGUpZm9yKGxldCBuIG9mIHIuZGVsZXRlKWRlbGV0ZSB0W25dO2lmKHIub3ZlcnJpZGUpe2xldHtrbm93bktleXM6bix1bmtub3duS2V5czpvfT10aGlzLl9wYXJ0aXRpb25PcHRpb25LZXlzKHIub3ZlcnJpZGUpO2ZvcihsZXQgdSBvZiBuKXtsZXQgaT1yLm92ZXJyaWRlW3VdO3RoaXMuX2FwcGx5VmFsaWRhdGlvbihpLHUsdGhpcy5fdXRpbHMuc2NoZW1hc1t1XSksdFt1XT1pfWZvcihsZXQgdSBvZiBvKXtsZXQgaT1yLm92ZXJyaWRlW3VdO3RoaXMuX2FwcGx5VW5rbm93bkhhbmRsZXIodSxpLHQsKHMsRCk9PntsZXQgYT10aGlzLl91dGlscy5zY2hlbWFzW3NdO3RoaXMuX2FwcGx5VmFsaWRhdGlvbihELHMsYSksdFtzXT1EfSl9fX19fTt2YXIgSXQ7ZnVuY3Rpb24gSnUoZSx0LHtsb2dnZXI6cj0hMSxpc0NMSTpuPSExLHBhc3NUaHJvdWdoOm89ITEsRmxhZ1NjaGVtYTp1LGRlc2NyaXB0b3I6aX09e30pe2lmKG4pe2lmKCF1KXRocm93IG5ldyBFcnJvcihcIidGbGFnU2NoZW1hJyBvcHRpb24gaXMgcmVxdWlyZWQuXCIpO2lmKCFpKXRocm93IG5ldyBFcnJvcihcIidkZXNjcmlwdG9yJyBvcHRpb24gaXMgcmVxdWlyZWQuXCIpfWVsc2UgaT10ZTtsZXQgcz1vP0FycmF5LmlzQXJyYXkobyk/KGYscCk9Pm8uaW5jbHVkZXMoZik/e1tmXTpwfTp2b2lkIDA6KGYscCk9Pih7W2ZdOnB9KTooZixwLGwpPT57bGV0e186RiwuLi5tfT1sLnNjaGVtYXM7cmV0dXJuIHJ0KGYscCx7Li4ubCxzY2hlbWFzOm19KX0sRD1YdSh0LHtpc0NMSTpuLEZsYWdTY2hlbWE6dX0pLGE9bmV3IGx0KEQse2xvZ2dlcjpyLHVua25vd246cyxkZXNjcmlwdG9yOml9KSxjPXIhPT0hMTtjJiZJdCYmKGEuX2hhc0RlcHJlY2F0aW9uV2FybmVkPUl0KTtsZXQgZD1hLm5vcm1hbGl6ZShlKTtyZXR1cm4gYyYmKEl0PWEuX2hhc0RlcHJlY2F0aW9uV2FybmVkKSxkfWZ1bmN0aW9uIFh1KGUse2lzQ0xJOnQsRmxhZ1NjaGVtYTpyfSl7bGV0IG49W107dCYmbi5wdXNoKHV0LmNyZWF0ZSh7bmFtZTpcIl9cIn0pKTtmb3IobGV0IG8gb2YgZSluLnB1c2goWnUobyx7aXNDTEk6dCxvcHRpb25JbmZvczplLEZsYWdTY2hlbWE6cn0pKSxvLmFsaWFzJiZ0JiZuLnB1c2gobnQuY3JlYXRlKHtuYW1lOm8uYWxpYXMsc291cmNlTmFtZTpvLm5hbWV9KSk7cmV0dXJuIG59ZnVuY3Rpb24gWnUoZSx7aXNDTEk6dCxvcHRpb25JbmZvczpyLEZsYWdTY2hlbWE6bn0pe2xldHtuYW1lOm99PWUsdT17bmFtZTpvfSxpLHM9e307c3dpdGNoKGUudHlwZSl7Y2FzZVwiaW50XCI6aT1jdCx0JiYodS5wcmVwcm9jZXNzPU51bWJlcik7YnJlYWs7Y2FzZVwic3RyaW5nXCI6aT1MZTticmVhaztjYXNlXCJjaG9pY2VcIjppPUR0LHUuY2hvaWNlcz1lLmNob2ljZXMubWFwKEQ9PkQhPW51bGwmJkQucmVkaXJlY3Q/ey4uLkQscmVkaXJlY3Q6e3RvOntrZXk6ZS5uYW1lLHZhbHVlOkQucmVkaXJlY3R9fX06RCk7YnJlYWs7Y2FzZVwiYm9vbGVhblwiOmk9aXQ7YnJlYWs7Y2FzZVwiZmxhZ1wiOmk9bix1LmZsYWdzPXIuZmxhdE1hcChEPT5bRC5hbGlhcyxELmRlc2NyaXB0aW9uJiZELm5hbWUsRC5vcHBvc2l0ZURlc2NyaXB0aW9uJiZgbm8tJHtELm5hbWV9YF0uZmlsdGVyKEJvb2xlYW4pKTticmVhaztjYXNlXCJwYXRoXCI6aT1MZTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB0eXBlICR7ZS50eXBlfWApfWlmKGUuZXhjZXB0aW9uP3UudmFsaWRhdGU9KEQsYSxjKT0+ZS5leGNlcHRpb24oRCl8fGEudmFsaWRhdGUoRCxjKTp1LnZhbGlkYXRlPShELGEsYyk9PkQ9PT12b2lkIDB8fGEudmFsaWRhdGUoRCxjKSxlLnJlZGlyZWN0JiYocy5yZWRpcmVjdD1EPT5EP3t0bzp7a2V5OmUucmVkaXJlY3Qub3B0aW9uLHZhbHVlOmUucmVkaXJlY3QudmFsdWV9fTp2b2lkIDApLGUuZGVwcmVjYXRlZCYmKHMuZGVwcmVjYXRlZD0hMCksdCYmIWUuYXJyYXkpe2xldCBEPXUucHJlcHJvY2Vzc3x8KGE9PmEpO3UucHJlcHJvY2Vzcz0oYSxjLGQpPT5jLnByZXByb2Nlc3MoRChBcnJheS5pc0FycmF5KGEpP3koITEsYSwtMSk6YSksZCl9cmV0dXJuIGUuYXJyYXk/b3QuY3JlYXRlKHsuLi50P3twcmVwcm9jZXNzOkQ9PkFycmF5LmlzQXJyYXkoRCk/RDpbRF19Ont9LC4uLnMsdmFsdWVTY2hlbWE6aS5jcmVhdGUodSl9KTppLmNyZWF0ZSh7Li4udSwuLi5zfSl9dmFyIHNuPUp1O2Z1bmN0aW9uIFJ0KGUsdCl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwicGFyc2VyTmFtZSBpcyByZXF1aXJlZC5cIik7Zm9yKGxldCBuPWUubGVuZ3RoLTE7bj49MDtuLS0pe2xldCBvPWVbbl07aWYoby5wYXJzZXJzJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoby5wYXJzZXJzLHQpKXJldHVybiBvfWxldCByPWBDb3VsZG4ndCByZXNvbHZlIHBhcnNlciBcIiR7dH1cIi5gO3Rocm93IHIrPVwiIFBsdWdpbnMgbXVzdCBiZSBleHBsaWNpdGx5IGFkZGVkIHRvIHRoZSBzdGFuZGFsb25lIGJ1bmRsZS5cIixuZXcgU2Uocil9ZnVuY3Rpb24gRG4oZSx0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJhc3RGb3JtYXQgaXMgcmVxdWlyZWQuXCIpO2ZvcihsZXQgbj1lLmxlbmd0aC0xO24+PTA7bi0tKXtsZXQgbz1lW25dO2lmKG8ucHJpbnRlcnMmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLnByaW50ZXJzLHQpKXJldHVybiBvfWxldCByPWBDb3VsZG4ndCBmaW5kIHBsdWdpbiBmb3IgQVNUIGZvcm1hdCBcIiR7dH1cIi5gO3Rocm93IHIrPVwiIFBsdWdpbnMgbXVzdCBiZSBleHBsaWNpdGx5IGFkZGVkIHRvIHRoZSBzdGFuZGFsb25lIGJ1bmRsZS5cIixuZXcgU2Uocil9ZnVuY3Rpb24gZnQoe3BsdWdpbnM6ZSxwYXJzZXI6dH0pe2xldCByPVJ0KGUsdCk7cmV0dXJuIFl0KHIsdCl9ZnVuY3Rpb24gWXQoZSx0KXtsZXQgcj1lLnBhcnNlcnNbdF07cmV0dXJuIHR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cigpOnJ9ZnVuY3Rpb24gYW4oZSx0KXtsZXQgcj1lLnByaW50ZXJzW3RdO3JldHVybiB0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3IoKTpyfXZhciBjbj17YXN0Rm9ybWF0OlwiZXN0cmVlXCIscHJpbnRlcjp7fSxvcmlnaW5hbFRleHQ6dm9pZCAwLGxvY1N0YXJ0Om51bGwsbG9jRW5kOm51bGx9O2FzeW5jIGZ1bmN0aW9uIFF1KGUsdD17fSl7dmFyIGQ7bGV0IHI9ey4uLmV9O2lmKCFyLnBhcnNlcilpZihyLmZpbGVwYXRoKXtpZihyLnBhcnNlcj1ScihyLHtwaHlzaWNhbEZpbGU6ci5maWxlcGF0aH0pLCFyLnBhcnNlcil0aHJvdyBuZXcgdmUoYE5vIHBhcnNlciBjb3VsZCBiZSBpbmZlcnJlZCBmb3IgZmlsZSBcIiR7ci5maWxlcGF0aH1cIi5gKX1lbHNlIHRocm93IG5ldyB2ZShcIk5vIHBhcnNlciBhbmQgbm8gZmlsZSBwYXRoIGdpdmVuLCBjb3VsZG4ndCBpbmZlciBhIHBhcnNlci5cIik7bGV0IG49ZXQoe3BsdWdpbnM6ZS5wbHVnaW5zLHNob3dEZXByZWNhdGVkOiEwfSkub3B0aW9ucyxvPXsuLi5jbiwuLi5PYmplY3QuZnJvbUVudHJpZXMobi5maWx0ZXIoZj0+Zi5kZWZhdWx0IT09dm9pZCAwKS5tYXAoZj0+W2YubmFtZSxmLmRlZmF1bHRdKSl9LHU9UnQoci5wbHVnaW5zLHIucGFyc2VyKSxpPWF3YWl0IFl0KHUsci5wYXJzZXIpO3IuYXN0Rm9ybWF0PWkuYXN0Rm9ybWF0LHIubG9jRW5kPWkubG9jRW5kLHIubG9jU3RhcnQ9aS5sb2NTdGFydDtsZXQgcz0oZD11LnByaW50ZXJzKSE9bnVsbCYmZFtpLmFzdEZvcm1hdF0/dTpEbihyLnBsdWdpbnMsaS5hc3RGb3JtYXQpLEQ9YXdhaXQgYW4ocyxpLmFzdEZvcm1hdCk7ci5wcmludGVyPUQ7bGV0IGE9cy5kZWZhdWx0T3B0aW9ucz9PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocy5kZWZhdWx0T3B0aW9ucykuZmlsdGVyKChbLGZdKT0+ZiE9PXZvaWQgMCkpOnt9LGM9ey4uLm8sLi4uYX07Zm9yKGxldFtmLHBdb2YgT2JqZWN0LmVudHJpZXMoYykpKHJbZl09PT1udWxsfHxyW2ZdPT09dm9pZCAwKSYmKHJbZl09cCk7cmV0dXJuIHIucGFyc2VyPT09XCJqc29uXCImJihyLnRyYWlsaW5nQ29tbWE9XCJub25lXCIpLHNuKHIsbix7cGFzc1Rocm91Z2g6T2JqZWN0LmtleXMoY24pLC4uLnR9KX12YXIgcmU9UXU7dmFyIGxuPW5ldyBTZXQoW1widG9rZW5zXCIsXCJjb21tZW50c1wiLFwicGFyZW50XCIsXCJlbmNsb3NpbmdOb2RlXCIsXCJwcmVjZWRpbmdOb2RlXCIsXCJmb2xsb3dpbmdOb2RlXCJdKSxlbz1lPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIodD0+IWxuLmhhcyh0KSk7ZnVuY3Rpb24gdG8oZSl7cmV0dXJuIGU/dD0+ZSh0LGxuKTplb312YXIgSD10bztmdW5jdGlvbiBybyhlLHQpe2xldHtwcmludGVyOnttYXNzYWdlQXN0Tm9kZTpyLGdldFZpc2l0b3JLZXlzOm59fT10O2lmKCFyKXJldHVybiBlO2xldCBvPUgobiksdT1yLmlnbm9yZWRQcm9wZXJ0aWVzPz9uZXcgU2V0O3JldHVybiBpKGUpO2Z1bmN0aW9uIGkocyxEKXtpZighKHMhPT1udWxsJiZ0eXBlb2Ygcz09XCJvYmplY3RcIikpcmV0dXJuIHM7aWYoQXJyYXkuaXNBcnJheShzKSlyZXR1cm4gcy5tYXAoZj0+aShmLEQpKS5maWx0ZXIoQm9vbGVhbik7bGV0IGE9e30sYz1uZXcgU2V0KG8ocykpO2ZvcihsZXQgZiBpbiBzKSFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocyxmKXx8dS5oYXMoZil8fChjLmhhcyhmKT9hW2ZdPWkoc1tmXSxzKTphW2ZdPXNbZl0pO2xldCBkPXIocyxhLEQpO2lmKGQhPT1udWxsKXJldHVybiBkPz9hfX12YXIgZm49cm87dmFyIEFuPWhlKHluKCksMSk7YXN5bmMgZnVuY3Rpb24gY28oZSx0KXtsZXQgcj1hd2FpdCBmdCh0KSxuPXIucHJlcHJvY2Vzcz9yLnByZXByb2Nlc3MoZSx0KTplO3Qub3JpZ2luYWxUZXh0PW47bGV0IG87dHJ5e289YXdhaXQgci5wYXJzZShuLHQsdCl9Y2F0Y2godSl7bG8odSxlKX1yZXR1cm57dGV4dDpuLGFzdDpvfX1mdW5jdGlvbiBsbyhlLHQpe2xldHtsb2M6cn09ZTtpZihyKXtsZXQgbj0oMCxBbi5jb2RlRnJhbWVDb2x1bW5zKSh0LHIse2hpZ2hsaWdodENvZGU6ITB9KTt0aHJvdyBlLm1lc3NhZ2UrPWBcbmArbixlLmNvZGVGcmFtZT1uLGV9dGhyb3cgZX12YXIgRGU9Y287dmFyIEllLCR0LGRlLHB0LFZ0PWNsYXNze2NvbnN0cnVjdG9yKHQpe2h0KHRoaXMsSWUpO2h0KHRoaXMsZGUpO3RoaXMuc3RhY2s9W3RdfWdldCBrZXkoKXtsZXR7c3RhY2s6dCxzaWJsaW5nczpyfT10aGlzO3JldHVybiB5KCExLHQscj09PW51bGw/LTI6LTQpPz9udWxsfWdldCBpbmRleCgpe3JldHVybiB0aGlzLnNpYmxpbmdzPT09bnVsbD9udWxsOnkoITEsdGhpcy5zdGFjaywtMil9Z2V0IG5vZGUoKXtyZXR1cm4geSghMSx0aGlzLnN0YWNrLC0xKX1nZXQgcGFyZW50KCl7cmV0dXJuIHRoaXMuZ2V0Tm9kZSgxKX1nZXQgZ3JhbmRwYXJlbnQoKXtyZXR1cm4gdGhpcy5nZXROb2RlKDIpfWdldCBpc0luQXJyYXkoKXtyZXR1cm4gdGhpcy5zaWJsaW5ncyE9PW51bGx9Z2V0IHNpYmxpbmdzKCl7bGV0e3N0YWNrOnR9PXRoaXMscj15KCExLHQsLTMpO3JldHVybiBBcnJheS5pc0FycmF5KHIpP3I6bnVsbH1nZXQgbmV4dCgpe2xldHtzaWJsaW5nczp0fT10aGlzO3JldHVybiB0PT09bnVsbD9udWxsOnRbdGhpcy5pbmRleCsxXX1nZXQgcHJldmlvdXMoKXtsZXR7c2libGluZ3M6dH09dGhpcztyZXR1cm4gdD09PW51bGw/bnVsbDp0W3RoaXMuaW5kZXgtMV19Z2V0IGlzRmlyc3QoKXtyZXR1cm4gdGhpcy5pbmRleD09PTB9Z2V0IGlzTGFzdCgpe2xldHtzaWJsaW5nczp0LGluZGV4OnJ9PXRoaXM7cmV0dXJuIHQhPT1udWxsJiZyPT09dC5sZW5ndGgtMX1nZXQgaXNSb290KCl7cmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoPT09MX1nZXQgcm9vdCgpe3JldHVybiB0aGlzLnN0YWNrWzBdfWdldCBhbmNlc3RvcnMoKXtyZXR1cm5bLi4uY2UodGhpcyxkZSxwdCkuY2FsbCh0aGlzKV19Z2V0TmFtZSgpe2xldHtzdGFjazp0fT10aGlzLHtsZW5ndGg6cn09dDtyZXR1cm4gcj4xP3koITEsdCwtMik6bnVsbH1nZXRWYWx1ZSgpe3JldHVybiB5KCExLHRoaXMuc3RhY2ssLTEpfWdldE5vZGUodD0wKXtsZXQgcj1jZSh0aGlzLEllLCR0KS5jYWxsKHRoaXMsdCk7cmV0dXJuIHI9PT0tMT9udWxsOnRoaXMuc3RhY2tbcl19Z2V0UGFyZW50Tm9kZSh0PTApe3JldHVybiB0aGlzLmdldE5vZGUodCsxKX1jYWxsKHQsLi4ucil7bGV0e3N0YWNrOm59PXRoaXMse2xlbmd0aDpvfT1uLHU9eSghMSxuLC0xKTtmb3IobGV0IGkgb2Ygcil1PXVbaV0sbi5wdXNoKGksdSk7dHJ5e3JldHVybiB0KHRoaXMpfWZpbmFsbHl7bi5sZW5ndGg9b319Y2FsbFBhcmVudCh0LHI9MCl7bGV0IG49Y2UodGhpcyxJZSwkdCkuY2FsbCh0aGlzLHIrMSksbz10aGlzLnN0YWNrLnNwbGljZShuKzEpO3RyeXtyZXR1cm4gdCh0aGlzKX1maW5hbGx5e3RoaXMuc3RhY2sucHVzaCguLi5vKX19ZWFjaCh0LC4uLnIpe2xldHtzdGFjazpufT10aGlzLHtsZW5ndGg6b309bix1PXkoITEsbiwtMSk7Zm9yKGxldCBpIG9mIHIpdT11W2ldLG4ucHVzaChpLHUpO3RyeXtmb3IobGV0IGk9MDtpPHUubGVuZ3RoOysraSluLnB1c2goaSx1W2ldKSx0KHRoaXMsaSx1KSxuLmxlbmd0aC09Mn1maW5hbGx5e24ubGVuZ3RoPW99fW1hcCh0LC4uLnIpe2xldCBuPVtdO3JldHVybiB0aGlzLmVhY2goKG8sdSxpKT0+e25bdV09dChvLHUsaSl9LC4uLnIpLG59bWF0Y2goLi4udCl7bGV0IHI9dGhpcy5zdGFjay5sZW5ndGgtMSxuPW51bGwsbz10aGlzLnN0YWNrW3ItLV07Zm9yKGxldCB1IG9mIHQpe2lmKG89PT12b2lkIDApcmV0dXJuITE7bGV0IGk9bnVsbDtpZih0eXBlb2Ygbj09XCJudW1iZXJcIiYmKGk9bixuPXRoaXMuc3RhY2tbci0tXSxvPXRoaXMuc3RhY2tbci0tXSksdSYmIXUobyxuLGkpKXJldHVybiExO249dGhpcy5zdGFja1tyLS1dLG89dGhpcy5zdGFja1tyLS1dfXJldHVybiEwfWZpbmRBbmNlc3Rvcih0KXtmb3IobGV0IHIgb2YgY2UodGhpcyxkZSxwdCkuY2FsbCh0aGlzKSlpZih0KHIpKXJldHVybiByfWhhc0FuY2VzdG9yKHQpe2ZvcihsZXQgciBvZiBjZSh0aGlzLGRlLHB0KS5jYWxsKHRoaXMpKWlmKHQocikpcmV0dXJuITA7cmV0dXJuITF9fTtJZT1uZXcgV2Vha1NldCwkdD1mdW5jdGlvbih0KXtsZXR7c3RhY2s6cn09dGhpcztmb3IobGV0IG49ci5sZW5ndGgtMTtuPj0wO24tPTIpaWYoIUFycmF5LmlzQXJyYXkocltuXSkmJi0tdDwwKXJldHVybiBuO3JldHVybi0xfSxkZT1uZXcgV2Vha1NldCxwdD1mdW5jdGlvbiooKXtsZXR7c3RhY2s6dH09dGhpcztmb3IobGV0IHI9dC5sZW5ndGgtMztyPj0wO3ItPTIpe2xldCBuPXRbcl07QXJyYXkuaXNBcnJheShuKXx8KHlpZWxkIG4pfX07dmFyIEJuPVZ0O3ZhciBfbj1uZXcgUHJveHkoKCk9Pnt9LHtnZXQ6KCk9Pl9ufSksUmU9X247ZnVuY3Rpb24gbWUoZSl7cmV0dXJuKHQscixuKT0+e2xldCBvPSEhKG4hPW51bGwmJm4uYmFja3dhcmRzKTtpZihyPT09ITEpcmV0dXJuITE7bGV0e2xlbmd0aDp1fT10LGk9cjtmb3IoO2k+PTAmJmk8dTspe2xldCBzPXQuY2hhckF0KGkpO2lmKGUgaW5zdGFuY2VvZiBSZWdFeHApe2lmKCFlLnRlc3QocykpcmV0dXJuIGl9ZWxzZSBpZighZS5pbmNsdWRlcyhzKSlyZXR1cm4gaTtvP2ktLTppKyt9cmV0dXJuIGk9PT0tMXx8aT09PXU/aTohMX19dmFyIHhuPW1lKC9cXHMvKSxOPW1lKFwiIFx0XCIpLGR0PW1lKFwiLDsgXHRcIiksbXQ9bWUoL1teXFxuXFxyXS8pO2Z1bmN0aW9uIGZvKGUsdCxyKXtsZXQgbj0hIShyIT1udWxsJiZyLmJhY2t3YXJkcyk7aWYodD09PSExKXJldHVybiExO2xldCBvPWUuY2hhckF0KHQpO2lmKG4pe2lmKGUuY2hhckF0KHQtMSk9PT1cIlxcclwiJiZvPT09YFxuYClyZXR1cm4gdC0yO2lmKG89PT1gXG5gfHxvPT09XCJcXHJcInx8bz09PVwiXFx1MjAyOFwifHxvPT09XCJcXHUyMDI5XCIpcmV0dXJuIHQtMX1lbHNle2lmKG89PT1cIlxcclwiJiZlLmNoYXJBdCh0KzEpPT09YFxuYClyZXR1cm4gdCsyO2lmKG89PT1gXG5gfHxvPT09XCJcXHJcInx8bz09PVwiXFx1MjAyOFwifHxvPT09XCJcXHUyMDI5XCIpcmV0dXJuIHQrMX1yZXR1cm4gdH12YXIgWT1mbztmdW5jdGlvbiBGbyhlLHQscj17fSl7bGV0IG49TihlLHIuYmFja3dhcmRzP3QtMTp0LHIpLG89WShlLG4scik7cmV0dXJuIG4hPT1vfXZhciBWPUZvO2Z1bmN0aW9uIHBvKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wfXZhciBNdD1wbztmdW5jdGlvbiBtbyhlKXtyZXR1cm4gZSE9PW51bGwmJnR5cGVvZiBlPT1cIm9iamVjdFwifXZhciBrbj1tbztmdW5jdGlvbipXdChlLHQpe2xldHtnZXRWaXNpdG9yS2V5czpyLGZpbHRlcjpuPSgpPT4hMH09dCxvPXU9PmtuKHUpJiZuKHUpO2ZvcihsZXQgdSBvZiByKGUpKXtsZXQgaT1lW3VdO2lmKEFycmF5LmlzQXJyYXkoaSkpZm9yKGxldCBzIG9mIGkpbyhzKSYmKHlpZWxkIHMpO2Vsc2UgbyhpKSYmKHlpZWxkIGkpfX1mdW5jdGlvbipibihlLHQpe2xldCByPVtlXTtmb3IobGV0IG49MDtuPHIubGVuZ3RoO24rKyl7bGV0IG89cltuXTtmb3IobGV0IHUgb2YgV3Qobyx0KSl5aWVsZCB1LHIucHVzaCh1KX19ZnVuY3Rpb24gRW8oZSl7bGV0IHQ9ZS50eXBlfHxlLmtpbmR8fFwiKHVua25vd24gdHlwZSlcIixyPVN0cmluZyhlLm5hbWV8fGUuaWQmJih0eXBlb2YgZS5pZD09XCJvYmplY3RcIj9lLmlkLm5hbWU6ZS5pZCl8fGUua2V5JiYodHlwZW9mIGUua2V5PT1cIm9iamVjdFwiP2Uua2V5Lm5hbWU6ZS5rZXkpfHxlLnZhbHVlJiYodHlwZW9mIGUudmFsdWU9PVwib2JqZWN0XCI/XCJcIjpTdHJpbmcoZS52YWx1ZSkpfHxlLm9wZXJhdG9yfHxcIlwiKTtyZXR1cm4gci5sZW5ndGg+MjAmJihyPXIuc2xpY2UoMCwxOSkrXCJcXHUyMDI2XCIpLHQrKHI/XCIgXCIrcjpcIlwiKX1mdW5jdGlvbiBVdChlLHQpeyhlLmNvbW1lbnRzPz8oZS5jb21tZW50cz1bXSkpLnB1c2godCksdC5wcmludGVkPSExLHQubm9kZURlc2NyaXB0aW9uPUVvKGUpfWZ1bmN0aW9uIG5lKGUsdCl7dC5sZWFkaW5nPSEwLHQudHJhaWxpbmc9ITEsVXQoZSx0KX1mdW5jdGlvbiBYKGUsdCxyKXt0LmxlYWRpbmc9ITEsdC50cmFpbGluZz0hMSxyJiYodC5tYXJrZXI9ciksVXQoZSx0KX1mdW5jdGlvbiB1ZShlLHQpe3QubGVhZGluZz0hMSx0LnRyYWlsaW5nPSEwLFV0KGUsdCl9dmFyIHp0PW5ldyBXZWFrTWFwO2Z1bmN0aW9uIEV0KGUsdCl7aWYoenQuaGFzKGUpKXJldHVybiB6dC5nZXQoZSk7bGV0e3ByaW50ZXI6e2dldENvbW1lbnRDaGlsZE5vZGVzOnIsY2FuQXR0YWNoQ29tbWVudDpuLGdldFZpc2l0b3JLZXlzOm99LGxvY1N0YXJ0OnUsbG9jRW5kOml9PXQ7aWYoIW4pcmV0dXJuW107bGV0IHM9KChyPT1udWxsP3ZvaWQgMDpyKGUsdCkpPz9bLi4uV3QoZSx7Z2V0VmlzaXRvcktleXM6SChvKX0pXSkuZmxhdE1hcChEPT5uKEQpP1tEXTpFdChELHQpKTtyZXR1cm4gcy5zb3J0KChELGEpPT51KEQpLXUoYSl8fGkoRCktaShhKSksenQuc2V0KGUscyksc31mdW5jdGlvbiBPbihlLHQscixuKXtsZXR7bG9jU3RhcnQ6byxsb2NFbmQ6dX09cixpPW8odCkscz11KHQpLEQ9RXQoZSxyKSxhLGMsZD0wLGY9RC5sZW5ndGg7Zm9yKDtkPGY7KXtsZXQgcD1kK2Y+PjEsbD1EW3BdLEY9byhsKSxtPXUobCk7aWYoRjw9aSYmczw9bSlyZXR1cm4gT24obCx0LHIsbCk7aWYobTw9aSl7YT1sLGQ9cCsxO2NvbnRpbnVlfWlmKHM8PUYpe2M9bCxmPXA7Y29udGludWV9dGhyb3cgbmV3IEVycm9yKFwiQ29tbWVudCBsb2NhdGlvbiBvdmVybGFwcyB3aXRoIG5vZGUgbG9jYXRpb25cIil9aWYoKG49PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cIlRlbXBsYXRlTGl0ZXJhbFwiKXtsZXR7cXVhc2lzOnB9PW4sbD1LdChwLHQscik7YSYmS3QocCxhLHIpIT09bCYmKGE9bnVsbCksYyYmS3QocCxjLHIpIT09bCYmKGM9bnVsbCl9cmV0dXJue2VuY2xvc2luZ05vZGU6bixwcmVjZWRpbmdOb2RlOmEsZm9sbG93aW5nTm9kZTpjfX12YXIgR3Q9KCk9PiExO2Z1bmN0aW9uIE5uKGUsdCl7bGV0e2NvbW1lbnRzOnJ9PWU7aWYoZGVsZXRlIGUuY29tbWVudHMsIU10KHIpfHwhdC5wcmludGVyLmNhbkF0dGFjaENvbW1lbnQpcmV0dXJuO2xldCBuPVtdLHtsb2NTdGFydDpvLGxvY0VuZDp1LHByaW50ZXI6e2V4cGVyaW1lbnRhbEZlYXR1cmVzOnthdm9pZEFzdE11dGF0aW9uOmk9ITF9PXt9LGhhbmRsZUNvbW1lbnRzOnM9e319LG9yaWdpbmFsVGV4dDpEfT10LHtvd25MaW5lOmE9R3QsZW5kT2ZMaW5lOmM9R3QscmVtYWluaW5nOmQ9R3R9PXMsZj1yLm1hcCgocCxsKT0+KHsuLi5PbihlLHAsdCksY29tbWVudDpwLHRleHQ6RCxvcHRpb25zOnQsYXN0OmUsaXNMYXN0Q29tbWVudDpyLmxlbmd0aC0xPT09bH0pKTtmb3IobGV0W3AsbF1vZiBmLmVudHJpZXMoKSl7bGV0e2NvbW1lbnQ6RixwcmVjZWRpbmdOb2RlOm0sZW5jbG9zaW5nTm9kZTpFLGZvbGxvd2luZ05vZGU6Qyx0ZXh0Omcsb3B0aW9uczpoLGFzdDpCLGlzTGFzdENvbW1lbnQ6Wn09bDtpZihoLnBhcnNlcj09PVwianNvblwifHxoLnBhcnNlcj09PVwianNvbjVcInx8aC5wYXJzZXI9PT1cIl9fanNfZXhwcmVzc2lvblwifHxoLnBhcnNlcj09PVwiX190c19leHByZXNzaW9uXCJ8fGgucGFyc2VyPT09XCJfX3Z1ZV9leHByZXNzaW9uXCJ8fGgucGFyc2VyPT09XCJfX3Z1ZV90c19leHByZXNzaW9uXCIpe2lmKG8oRiktbyhCKTw9MCl7bmUoQixGKTtjb250aW51ZX1pZih1KEYpLXUoQik+PTApe3VlKEIsRik7Y29udGludWV9fWxldCAkO2lmKGk/JD1bbF06KEYuZW5jbG9zaW5nTm9kZT1FLEYucHJlY2VkaW5nTm9kZT1tLEYuZm9sbG93aW5nTm9kZT1DLCQ9W0YsZyxoLEIsWl0pLENvKGcsaCxmLHApKUYucGxhY2VtZW50PVwib3duTGluZVwiLGEoLi4uJCl8fChDP25lKEMsRik6bT91ZShtLEYpOkU/WChFLEYpOlgoQixGKSk7ZWxzZSBpZihobyhnLGgsZixwKSlGLnBsYWNlbWVudD1cImVuZE9mTGluZVwiLGMoLi4uJCl8fChtP3VlKG0sRik6Qz9uZShDLEYpOkU/WChFLEYpOlgoQixGKSk7ZWxzZSBpZihGLnBsYWNlbWVudD1cInJlbWFpbmluZ1wiLCFkKC4uLiQpKWlmKG0mJkMpe2xldCBRPW4ubGVuZ3RoO1E+MCYmbltRLTFdLmZvbGxvd2luZ05vZGUhPT1DJiZ3bihuLGgpLG4ucHVzaChsKX1lbHNlIG0/dWUobSxGKTpDP25lKEMsRik6RT9YKEUsRik6WChCLEYpfWlmKHduKG4sdCksIWkpZm9yKGxldCBwIG9mIHIpZGVsZXRlIHAucHJlY2VkaW5nTm9kZSxkZWxldGUgcC5lbmNsb3NpbmdOb2RlLGRlbGV0ZSBwLmZvbGxvd2luZ05vZGV9dmFyIFRuPWU9PiEvW1xcU1xcblxcdTIwMjhcXHUyMDI5XS8udGVzdChlKTtmdW5jdGlvbiBDbyhlLHQscixuKXtsZXR7Y29tbWVudDpvLHByZWNlZGluZ05vZGU6dX09cltuXSx7bG9jU3RhcnQ6aSxsb2NFbmQ6c309dCxEPWkobyk7aWYodSlmb3IobGV0IGE9bi0xO2E+PTA7YS0tKXtsZXR7Y29tbWVudDpjLHByZWNlZGluZ05vZGU6ZH09clthXTtpZihkIT09dXx8IVRuKGUuc2xpY2UocyhjKSxEKSkpYnJlYWs7RD1pKGMpfXJldHVybiBWKGUsRCx7YmFja3dhcmRzOiEwfSl9ZnVuY3Rpb24gaG8oZSx0LHIsbil7bGV0e2NvbW1lbnQ6byxmb2xsb3dpbmdOb2RlOnV9PXJbbl0se2xvY1N0YXJ0OmksbG9jRW5kOnN9PXQsRD1zKG8pO2lmKHUpZm9yKGxldCBhPW4rMTthPHIubGVuZ3RoO2ErKyl7bGV0e2NvbW1lbnQ6Yyxmb2xsb3dpbmdOb2RlOmR9PXJbYV07aWYoZCE9PXV8fCFUbihlLnNsaWNlKEQsaShjKSkpKWJyZWFrO0Q9cyhjKX1yZXR1cm4gVihlLEQpfWZ1bmN0aW9uIHduKGUsdCl7dmFyIHMsRDtsZXQgcj1lLmxlbmd0aDtpZihyPT09MClyZXR1cm47bGV0e3ByZWNlZGluZ05vZGU6bixmb2xsb3dpbmdOb2RlOm99PWVbMF0sdT10LmxvY1N0YXJ0KG8pLGk7Zm9yKGk9cjtpPjA7LS1pKXtsZXR7Y29tbWVudDphLHByZWNlZGluZ05vZGU6Yyxmb2xsb3dpbmdOb2RlOmR9PWVbaS0xXTtSZS5zdHJpY3RFcXVhbChjLG4pLFJlLnN0cmljdEVxdWFsKGQsbyk7bGV0IGY9dC5vcmlnaW5hbFRleHQuc2xpY2UodC5sb2NFbmQoYSksdSk7aWYoKChEPShzPXQucHJpbnRlcikuaXNHYXApPT1udWxsP3ZvaWQgMDpELmNhbGwocyxmLHQpKT8/L15bXFxzKF0qJC8udGVzdChmKSl1PXQubG9jU3RhcnQoYSk7ZWxzZSBicmVha31mb3IobGV0W2Ese2NvbW1lbnQ6Y31db2YgZS5lbnRyaWVzKCkpYTxpP3VlKG4sYyk6bmUobyxjKTtmb3IobGV0IGEgb2ZbbixvXSlhLmNvbW1lbnRzJiZhLmNvbW1lbnRzLmxlbmd0aD4xJiZhLmNvbW1lbnRzLnNvcnQoKGMsZCk9PnQubG9jU3RhcnQoYyktdC5sb2NTdGFydChkKSk7ZS5sZW5ndGg9MH1mdW5jdGlvbiBLdChlLHQscil7bGV0IG49ci5sb2NTdGFydCh0KS0xO2ZvcihsZXQgbz0xO288ZS5sZW5ndGg7KytvKWlmKG48ci5sb2NTdGFydChlW29dKSlyZXR1cm4gby0xO3JldHVybiAwfWZ1bmN0aW9uIGdvKGUsdCl7bGV0IHI9dC0xO3I9TihlLHIse2JhY2t3YXJkczohMH0pLHI9WShlLHIse2JhY2t3YXJkczohMH0pLHI9TihlLHIse2JhY2t3YXJkczohMH0pO2xldCBuPVkoZSxyLHtiYWNrd2FyZHM6ITB9KTtyZXR1cm4gciE9PW59dmFyIFllPWdvO2Z1bmN0aW9uIFNuKGUsdCl7bGV0IHI9ZS5ub2RlO3JldHVybiByLnByaW50ZWQ9ITAsdC5wcmludGVyLnByaW50Q29tbWVudChlLHQpfWZ1bmN0aW9uIHlvKGUsdCl7dmFyIGM7bGV0IHI9ZS5ub2RlLG49W1NuKGUsdCldLHtwcmludGVyOm8sb3JpZ2luYWxUZXh0OnUsbG9jU3RhcnQ6aSxsb2NFbmQ6c309dDtpZigoYz1vLmlzQmxvY2tDb21tZW50KT09bnVsbD92b2lkIDA6Yy5jYWxsKG8scikpe2xldCBkPVYodSxzKHIpKT9WKHUsaShyKSx7YmFja3dhcmRzOiEwfSk/RzpLZTpcIiBcIjtuLnB1c2goZCl9ZWxzZSBuLnB1c2goRyk7bGV0IGE9WSh1LE4odSxzKHIpKSk7cmV0dXJuIGEhPT0hMSYmVih1LGEpJiZuLnB1c2goRyksbn1mdW5jdGlvbiBBbyhlLHQscil7dmFyIGE7bGV0IG49ZS5ub2RlLG89U24oZSx0KSx7cHJpbnRlcjp1LG9yaWdpbmFsVGV4dDppLGxvY1N0YXJ0OnN9PXQsRD0oYT11LmlzQmxvY2tDb21tZW50KT09bnVsbD92b2lkIDA6YS5jYWxsKHUsbik7aWYociE9bnVsbCYmci5oYXNMaW5lU3VmZml4JiYhKHIhPW51bGwmJnIuaXNCbG9jayl8fFYoaSxzKG4pLHtiYWNrd2FyZHM6ITB9KSl7bGV0IGM9WWUoaSxzKG4pKTtyZXR1cm57ZG9jOkJlKFtHLGM/RzpcIlwiLG9dKSxpc0Jsb2NrOkQsaGFzTGluZVN1ZmZpeDohMH19cmV0dXJuIUR8fHIhPW51bGwmJnIuaGFzTGluZVN1ZmZpeD97ZG9jOltCZShbXCIgXCIsb10pLGxlXSxpc0Jsb2NrOkQsaGFzTGluZVN1ZmZpeDohMH06e2RvYzpbXCIgXCIsb10saXNCbG9jazpELGhhc0xpbmVTdWZmaXg6ITF9fWZ1bmN0aW9uIEJvKGUsdCl7bGV0IHI9ZS5ub2RlO2lmKCFyKXJldHVybnt9O2xldCBuPXRbU3ltYm9sLmZvcihcInByaW50ZWRDb21tZW50c1wiKV07aWYoKHIuY29tbWVudHN8fFtdKS5maWx0ZXIoRD0+IW4uaGFzKEQpKS5sZW5ndGg9PT0wKXJldHVybntsZWFkaW5nOlwiXCIsdHJhaWxpbmc6XCJcIn07bGV0IHU9W10saT1bXSxzO3JldHVybiBlLmVhY2goKCk9PntsZXQgRD1lLm5vZGU7aWYobiE9bnVsbCYmbi5oYXMoRCkpcmV0dXJuO2xldHtsZWFkaW5nOmEsdHJhaWxpbmc6Y309RDthP3UucHVzaCh5byhlLHQpKTpjJiYocz1BbyhlLHQscyksaS5wdXNoKHMuZG9jKSl9LFwiY29tbWVudHNcIikse2xlYWRpbmc6dSx0cmFpbGluZzppfX1mdW5jdGlvbiB2bihlLHQscil7bGV0e2xlYWRpbmc6bix0cmFpbGluZzpvfT1CbyhlLHIpO3JldHVybiFuJiYhbz90OlplKHQsdT0+W24sdSxvXSl9ZnVuY3Rpb24gUG4oZSl7bGV0e1tTeW1ib2wuZm9yKFwiY29tbWVudHNcIildOnQsW1N5bWJvbC5mb3IoXCJwcmludGVkQ29tbWVudHNcIildOnJ9PWU7Zm9yKGxldCBuIG9mIHQpe2lmKCFuLnByaW50ZWQmJiFyLmhhcyhuKSl0aHJvdyBuZXcgRXJyb3IoJ0NvbW1lbnQgXCInK24udmFsdWUudHJpbSgpKydcIiB3YXMgbm90IHByaW50ZWQuIFBsZWFzZSByZXBvcnQgdGhpcyBlcnJvciEnKTtkZWxldGUgbi5wcmludGVkfX1hc3luYyBmdW5jdGlvbiBMbihlLHQscixuLG8pe2xldHtlbWJlZGRlZExhbmd1YWdlRm9ybWF0dGluZzp1LHByaW50ZXI6e2VtYmVkOmksaGFzUHJldHRpZXJJZ25vcmU6cz0oKT0+ITEsZ2V0VmlzaXRvcktleXM6RH19PXI7aWYoIWl8fHUhPT1cImF1dG9cIilyZXR1cm47aWYoaS5sZW5ndGg+Mil0aHJvdyBuZXcgRXJyb3IoXCJwcmludGVyLmVtYmVkIGhhcyB0b28gbWFueSBwYXJhbWV0ZXJzLiBUaGUgQVBJIGNoYW5nZWQgaW4gUHJldHRpZXIgdjMuIFBsZWFzZSB1cGRhdGUgeW91ciBwbHVnaW4uIFNlZSBodHRwczovL3ByZXR0aWVyLmlvL2RvY3MvZW4vcGx1Z2lucy5odG1sI29wdGlvbmFsLWVtYmVkXCIpO2xldCBhPUgoaS5nZXRWaXNpdG9yS2V5cz8/RCksYz1bXTtwKCk7bGV0IGQ9ZS5zdGFjaztmb3IobGV0e3ByaW50Omwsbm9kZTpGLHBhdGhTdGFjazptfW9mIGMpdHJ5e2Uuc3RhY2s9bTtsZXQgRT1hd2FpdCBsKGYsdCxlLHIpO0UmJm8uc2V0KEYsRSl9Y2F0Y2goRSl7aWYoZ2xvYmFsVGhpcy5QUkVUVElFUl9ERUJVRyl0aHJvdyBFfWUuc3RhY2s9ZDtmdW5jdGlvbiBmKGwsRil7cmV0dXJuIF9vKGwsRixyLG4pfWZ1bmN0aW9uIHAoKXtsZXR7bm9kZTpsfT1lO2lmKGw9PT1udWxsfHx0eXBlb2YgbCE9XCJvYmplY3RcInx8cyhlKSlyZXR1cm47Zm9yKGxldCBtIG9mIGEobCkpQXJyYXkuaXNBcnJheShsW21dKT9lLmVhY2gocCxtKTplLmNhbGwocCxtKTtsZXQgRj1pKGUscik7aWYoRil7aWYodHlwZW9mIEY9PVwiZnVuY3Rpb25cIil7Yy5wdXNoKHtwcmludDpGLG5vZGU6bCxwYXRoU3RhY2s6Wy4uLmUuc3RhY2tdfSk7cmV0dXJufW8uc2V0KGwsRil9fX1hc3luYyBmdW5jdGlvbiBfbyhlLHQscixuKXtsZXQgbz1hd2FpdCByZSh7Li4uciwuLi50LHBhcmVudFBhcnNlcjpyLnBhcnNlcixvcmlnaW5hbFRleHQ6ZX0se3Bhc3NUaHJvdWdoOiEwfSkse2FzdDp1fT1hd2FpdCBEZShlLG8pLGk9YXdhaXQgbih1LG8pO3JldHVybiBYZShpKX1mdW5jdGlvbiB4byhlKXtyZXR1cm4oKT0+e319dmFyIEluPXhvO2Z1bmN0aW9uIGtvKGUsdCl7bGV0e29yaWdpbmFsVGV4dDpyLFtTeW1ib2wuZm9yKFwiY29tbWVudHNcIildOm4sbG9jU3RhcnQ6byxsb2NFbmQ6dSxbU3ltYm9sLmZvcihcInByaW50ZWRDb21tZW50c1wiKV06aX09dCx7bm9kZTpzfT1lLEQ9byhzKSxhPXUocyk7Zm9yKGxldCBjIG9mIG4pbyhjKT49RCYmdShjKTw9YSYmaS5hZGQoYyk7cmV0dXJuIHIuc2xpY2UoRCxhKX12YXIgUm49a287YXN5bmMgZnVuY3Rpb24gamUoZSx0KXsoe2FzdDplfT1hd2FpdCBIdChlLHQpKTtsZXQgcj1uZXcgTWFwLG49bmV3IEJuKGUpLG89SW4odCksdT1uZXcgTWFwO2F3YWl0IExuKG4scyx0LGplLHUpO2xldCBpPWF3YWl0IFluKG4sdCxzLHZvaWQgMCx1KTtyZXR1cm4gUG4odCksaTtmdW5jdGlvbiBzKGEsYyl7cmV0dXJuIGE9PT12b2lkIDB8fGE9PT1uP0QoYyk6QXJyYXkuaXNBcnJheShhKT9uLmNhbGwoKCk9PkQoYyksLi4uYSk6bi5jYWxsKCgpPT5EKGMpLGEpfWZ1bmN0aW9uIEQoYSl7byhuKTtsZXQgYz1uLm5vZGU7aWYoYz09bnVsbClyZXR1cm5cIlwiO2xldCBkPWMmJnR5cGVvZiBjPT1cIm9iamVjdFwiJiZhPT09dm9pZCAwO2lmKGQmJnIuaGFzKGMpKXJldHVybiByLmdldChjKTtsZXQgZj1ZbihuLHQscyxhLHUpO3JldHVybiBkJiZyLnNldChjLGYpLGZ9fWZ1bmN0aW9uIFluKGUsdCxyLG4sbyl7dmFyIEQ7bGV0e25vZGU6dX09ZSx7cHJpbnRlcjppfT10LHM7cmV0dXJuKEQ9aS5oYXNQcmV0dGllcklnbm9yZSkhPW51bGwmJkQuY2FsbChpLGUpP3M9Um4oZSx0KTpvLmhhcyh1KT9zPW8uZ2V0KHUpOnM9aS5wcmludChlLHQscixuKSx1PT09dC5jdXJzb3JOb2RlJiYocz1aZShzLGE9Plt4ZSxhLHhlXSkpLGkucHJpbnRDb21tZW50JiYoIWkud2lsbFByaW50T3duQ29tbWVudHN8fCFpLndpbGxQcmludE93bkNvbW1lbnRzKGUsdCkpJiYocz12bihlLHMsdCkpLHN9YXN5bmMgZnVuY3Rpb24gSHQoZSx0KXtsZXQgcj1lLmNvbW1lbnRzPz9bXTt0W1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV09cix0W1N5bWJvbC5mb3IoXCJ0b2tlbnNcIildPWUudG9rZW5zPz9bXSx0W1N5bWJvbC5mb3IoXCJwcmludGVkQ29tbWVudHNcIildPW5ldyBTZXQsTm4oZSx0KTtsZXR7cHJpbnRlcjp7cHJlcHJvY2VzczpufX09dDtyZXR1cm4gZT1uP2F3YWl0IG4oZSx0KTplLHthc3Q6ZSxjb21tZW50czpyfX12YXIgYm89KHtwYXJzZXI6ZX0pPT5lPT09XCJqc29uXCJ8fGU9PT1cImpzb241XCJ8fGU9PT1cImpzb24tc3RyaW5naWZ5XCI7ZnVuY3Rpb24gd28oZSx0KXtsZXQgcj1bZS5ub2RlLC4uLmUucGFyZW50Tm9kZXNdLG49bmV3IFNldChbdC5ub2RlLC4uLnQucGFyZW50Tm9kZXNdKTtyZXR1cm4gci5maW5kKG89PiRuLmhhcyhvLnR5cGUpJiZuLmhhcyhvKSl9ZnVuY3Rpb24gam4oZSl7bGV0IHQ9ZS5sZW5ndGgtMTtmb3IoOzspe2xldCByPWVbdF07aWYoKHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIlByb2dyYW1cInx8KHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkZpbGVcIil0LS07ZWxzZSBicmVha31yZXR1cm4gZS5zbGljZSgwLHQrMSl9ZnVuY3Rpb24gT28oZSx0LHtsb2NTdGFydDpyLGxvY0VuZDpufSl7bGV0IG89ZS5ub2RlLHU9dC5ub2RlO2lmKG89PT11KXJldHVybntzdGFydE5vZGU6byxlbmROb2RlOnV9O2xldCBpPXIoZS5ub2RlKTtmb3IobGV0IEQgb2Ygam4odC5wYXJlbnROb2RlcykpaWYocihEKT49aSl1PUQ7ZWxzZSBicmVhaztsZXQgcz1uKHQubm9kZSk7Zm9yKGxldCBEIG9mIGpuKGUucGFyZW50Tm9kZXMpKXtpZihuKEQpPD1zKW89RDtlbHNlIGJyZWFrO2lmKG89PT11KWJyZWFrfXJldHVybntzdGFydE5vZGU6byxlbmROb2RlOnV9fWZ1bmN0aW9uIHF0KGUsdCxyLG4sbz1bXSx1KXtsZXR7bG9jU3RhcnQ6aSxsb2NFbmQ6c309cixEPWkoZSksYT1zKGUpO2lmKCEodD5hfHx0PER8fHU9PT1cInJhbmdlRW5kXCImJnQ9PT1EfHx1PT09XCJyYW5nZVN0YXJ0XCImJnQ9PT1hKSl7Zm9yKGxldCBjIG9mIEV0KGUscikpe2xldCBkPXF0KGMsdCxyLG4sW2UsLi4ub10sdSk7aWYoZClyZXR1cm4gZH1pZighbnx8bihlLG9bMF0pKXJldHVybntub2RlOmUscGFyZW50Tm9kZXM6b319fWZ1bmN0aW9uIE5vKGUsdCl7cmV0dXJuIHQhPT1cIkRlY2xhcmVFeHBvcnREZWNsYXJhdGlvblwiJiZlIT09XCJUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb25cIiYmKGU9PT1cIkRpcmVjdGl2ZVwifHxlPT09XCJUeXBlQWxpYXNcInx8ZT09PVwiVFNFeHBvcnRBc3NpZ25tZW50XCJ8fGUuc3RhcnRzV2l0aChcIkRlY2xhcmVcIil8fGUuc3RhcnRzV2l0aChcIlRTRGVjbGFyZVwiKXx8ZS5lbmRzV2l0aChcIlN0YXRlbWVudFwiKXx8ZS5lbmRzV2l0aChcIkRlY2xhcmF0aW9uXCIpKX12YXIgJG49bmV3IFNldChbXCJKc29uUm9vdFwiLFwiT2JqZWN0RXhwcmVzc2lvblwiLFwiQXJyYXlFeHByZXNzaW9uXCIsXCJTdHJpbmdMaXRlcmFsXCIsXCJOdW1lcmljTGl0ZXJhbFwiLFwiQm9vbGVhbkxpdGVyYWxcIixcIk51bGxMaXRlcmFsXCIsXCJVbmFyeUV4cHJlc3Npb25cIixcIlRlbXBsYXRlTGl0ZXJhbFwiXSksVG89bmV3IFNldChbXCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJGcmFnbWVudERlZmluaXRpb25cIixcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwiVHlwZUV4dGVuc2lvbkRlZmluaXRpb25cIixcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJGaWVsZERlZmluaXRpb25cIixcIkRpcmVjdGl2ZURlZmluaXRpb25cIixcIkVudW1UeXBlRGVmaW5pdGlvblwiLFwiRW51bVZhbHVlRGVmaW5pdGlvblwiLFwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIlNjaGVtYURlZmluaXRpb25cIixcIk9wZXJhdGlvblR5cGVEZWZpbml0aW9uXCIsXCJJbnRlcmZhY2VUeXBlRGVmaW5pdGlvblwiLFwiVW5pb25UeXBlRGVmaW5pdGlvblwiLFwiU2NhbGFyVHlwZURlZmluaXRpb25cIl0pO2Z1bmN0aW9uIFZuKGUsdCxyKXtpZighdClyZXR1cm4hMTtzd2l0Y2goZS5wYXJzZXIpe2Nhc2VcImZsb3dcIjpjYXNlXCJiYWJlbFwiOmNhc2VcImJhYmVsLWZsb3dcIjpjYXNlXCJiYWJlbC10c1wiOmNhc2VcInR5cGVzY3JpcHRcIjpjYXNlXCJhY29yblwiOmNhc2VcImVzcHJlZVwiOmNhc2VcIm1lcml5YWhcIjpjYXNlXCJfX2JhYmVsX2VzdHJlZVwiOnJldHVybiBObyh0LnR5cGUscj09bnVsbD92b2lkIDA6ci50eXBlKTtjYXNlXCJqc29uXCI6Y2FzZVwianNvbjVcIjpjYXNlXCJqc29uLXN0cmluZ2lmeVwiOnJldHVybiAkbi5oYXModC50eXBlKTtjYXNlXCJncmFwaHFsXCI6cmV0dXJuIFRvLmhhcyh0LmtpbmQpO2Nhc2VcInZ1ZVwiOnJldHVybiB0LnRhZyE9PVwicm9vdFwifXJldHVybiExfWZ1bmN0aW9uIE1uKGUsdCxyKXtsZXR7cmFuZ2VTdGFydDpuLHJhbmdlRW5kOm8sbG9jU3RhcnQ6dSxsb2NFbmQ6aX09dDtSZS5vayhvPm4pO2xldCBzPWUuc2xpY2UobixvKS5zZWFyY2goL1xcUy8pLEQ9cz09PS0xO2lmKCFEKWZvcihuKz1zO28+biYmIS9cXFMvLnRlc3QoZVtvLTFdKTstLW8pO2xldCBhPXF0KHIsbix0LChwLGwpPT5Wbih0LHAsbCksW10sXCJyYW5nZVN0YXJ0XCIpLGM9RD9hOnF0KHIsbyx0LHA9PlZuKHQscCksW10sXCJyYW5nZUVuZFwiKTtpZighYXx8IWMpcmV0dXJue3JhbmdlU3RhcnQ6MCxyYW5nZUVuZDowfTtsZXQgZCxmO2lmKGJvKHQpKXtsZXQgcD13byhhLGMpO2Q9cCxmPXB9ZWxzZSh7c3RhcnROb2RlOmQsZW5kTm9kZTpmfT1PbyhhLGMsdCkpO3JldHVybntyYW5nZVN0YXJ0Ok1hdGgubWluKHUoZCksdShmKSkscmFuZ2VFbmQ6TWF0aC5tYXgoaShkKSxpKGYpKX19ZnVuY3Rpb24gU28oZSx0KXtsZXR7Y3Vyc29yT2Zmc2V0OnIsbG9jU3RhcnQ6bixsb2NFbmQ6b309dCx1PUgodC5wcmludGVyLmdldFZpc2l0b3JLZXlzKSxpPUQ9Pm4oRCk8PXImJm8oRCk+PXIscz1lO2ZvcihsZXQgRCBvZiBibihlLHtnZXRWaXNpdG9yS2V5czp1LGZpbHRlcjppfSkpcz1EO3JldHVybiBzfXZhciBXbj1Tbzt2YXIgSG49XCJcXHVGRUZGXCIsVW49U3ltYm9sKFwiY3Vyc29yXCIpO2FzeW5jIGZ1bmN0aW9uIHFuKGUsdCxyPTApe2lmKCFlfHxlLnRyaW0oKS5sZW5ndGg9PT0wKXJldHVybntmb3JtYXR0ZWQ6XCJcIixjdXJzb3JPZmZzZXQ6LTEsY29tbWVudHM6W119O2xldHthc3Q6bix0ZXh0Om99PWF3YWl0IERlKGUsdCk7dC5jdXJzb3JPZmZzZXQ+PTAmJih0LmN1cnNvck5vZGU9V24obix0KSk7bGV0IHU9YXdhaXQgamUobix0LHIpO3I+MCYmKHU9cWUoW0csdV0scix0LnRhYldpZHRoKSk7bGV0IGk9ZmUodSx0KTtpZihyPjApe2xldCBEPWkuZm9ybWF0dGVkLnRyaW0oKTtpLmN1cnNvck5vZGVTdGFydCE9PXZvaWQgMCYmKGkuY3Vyc29yTm9kZVN0YXJ0LT1pLmZvcm1hdHRlZC5pbmRleE9mKEQpKSxpLmZvcm1hdHRlZD1EK2JlKHQuZW5kT2ZMaW5lKX1sZXQgcz10W1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV07aWYodC5jdXJzb3JPZmZzZXQ+PTApe2xldCBELGEsYyxkLGY7aWYodC5jdXJzb3JOb2RlJiZpLmN1cnNvck5vZGVUZXh0PyhEPXQubG9jU3RhcnQodC5jdXJzb3JOb2RlKSxhPW8uc2xpY2UoRCx0LmxvY0VuZCh0LmN1cnNvck5vZGUpKSxjPXQuY3Vyc29yT2Zmc2V0LUQsZD1pLmN1cnNvck5vZGVTdGFydCxmPWkuY3Vyc29yTm9kZVRleHQpOihEPTAsYT1vLGM9dC5jdXJzb3JPZmZzZXQsZD0wLGY9aS5mb3JtYXR0ZWQpLGE9PT1mKXJldHVybntmb3JtYXR0ZWQ6aS5mb3JtYXR0ZWQsY3Vyc29yT2Zmc2V0OmQrYyxjb21tZW50czpzfTtsZXQgcD1hLnNwbGl0KFwiXCIpO3Auc3BsaWNlKGMsMCxVbik7bGV0IGw9Zi5zcGxpdChcIlwiKSxGPSgwLEtuLmRpZmZBcnJheXMpKHAsbCksbT1kO2ZvcihsZXQgRSBvZiBGKWlmKEUucmVtb3ZlZCl7aWYoRS52YWx1ZS5pbmNsdWRlcyhVbikpYnJlYWt9ZWxzZSBtKz1FLmNvdW50O3JldHVybntmb3JtYXR0ZWQ6aS5mb3JtYXR0ZWQsY3Vyc29yT2Zmc2V0Om0sY29tbWVudHM6c319cmV0dXJue2Zvcm1hdHRlZDppLmZvcm1hdHRlZCxjdXJzb3JPZmZzZXQ6LTEsY29tbWVudHM6c319YXN5bmMgZnVuY3Rpb24gdm8oZSx0KXtsZXR7YXN0OnIsdGV4dDpufT1hd2FpdCBEZShlLHQpLHtyYW5nZVN0YXJ0Om8scmFuZ2VFbmQ6dX09TW4obix0LHIpLGk9bi5zbGljZShvLHUpLHM9TWF0aC5taW4obyxuLmxhc3RJbmRleE9mKGBcbmAsbykrMSksRD1uLnNsaWNlKHMsbykubWF0Y2goL15cXHMqLylbMF0sYT1GZShELHQudGFiV2lkdGgpLGM9YXdhaXQgcW4oaSx7Li4udCxyYW5nZVN0YXJ0OjAscmFuZ2VFbmQ6TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLGN1cnNvck9mZnNldDp0LmN1cnNvck9mZnNldD5vJiZ0LmN1cnNvck9mZnNldDw9dT90LmN1cnNvck9mZnNldC1vOi0xLGVuZE9mTGluZTpcImxmXCJ9LGEpLGQ9Yy5mb3JtYXR0ZWQudHJpbUVuZCgpLHtjdXJzb3JPZmZzZXQ6Zn09dDtmPnU/Zis9ZC5sZW5ndGgtaS5sZW5ndGg6Yy5jdXJzb3JPZmZzZXQ+PTAmJihmPWMuY3Vyc29yT2Zmc2V0K28pO2xldCBwPW4uc2xpY2UoMCxvKStkK24uc2xpY2UodSk7aWYodC5lbmRPZkxpbmUhPT1cImxmXCIpe2xldCBsPWJlKHQuZW5kT2ZMaW5lKTtmPj0wJiZsPT09YFxcclxuYCYmKGYrPV90KHAuc2xpY2UoMCxmKSxgXG5gKSkscD1lZSghMSxwLGBcbmAsbCl9cmV0dXJue2Zvcm1hdHRlZDpwLGN1cnNvck9mZnNldDpmLGNvbW1lbnRzOmMuY29tbWVudHN9fWZ1bmN0aW9uIEp0KGUsdCxyKXtyZXR1cm4gdHlwZW9mIHQhPVwibnVtYmVyXCJ8fE51bWJlci5pc05hTih0KXx8dDwwfHx0PmUubGVuZ3RoP3I6dH1mdW5jdGlvbiB6bihlLHQpe2xldHtjdXJzb3JPZmZzZXQ6cixyYW5nZVN0YXJ0Om4scmFuZ2VFbmQ6b309dDtyZXR1cm4gcj1KdChlLHIsLTEpLG49SnQoZSxuLDApLG89SnQoZSxvLGUubGVuZ3RoKSx7Li4udCxjdXJzb3JPZmZzZXQ6cixyYW5nZVN0YXJ0Om4scmFuZ2VFbmQ6b319ZnVuY3Rpb24gSm4oZSx0KXtsZXR7Y3Vyc29yT2Zmc2V0OnIscmFuZ2VTdGFydDpuLHJhbmdlRW5kOm8sZW5kT2ZMaW5lOnV9PXpuKGUsdCksaT1lLmNoYXJBdCgwKT09PUhuO2lmKGkmJihlPWUuc2xpY2UoMSksci0tLG4tLSxvLS0pLHU9PT1cImF1dG9cIiYmKHU9aHIoZSkpLGUuaW5jbHVkZXMoXCJcXHJcIikpe2xldCBzPUQ9Pl90KGUuc2xpY2UoMCxNYXRoLm1heChELDApKSxgXFxyXG5gKTtyLT1zKHIpLG4tPXMobiksby09cyhvKSxlPWdyKGUpfXJldHVybntoYXNCT006aSx0ZXh0OmUsb3B0aW9uczp6bihlLHsuLi50LGN1cnNvck9mZnNldDpyLHJhbmdlU3RhcnQ6bixyYW5nZUVuZDpvLGVuZE9mTGluZTp1fSl9fWFzeW5jIGZ1bmN0aW9uIEduKGUsdCl7bGV0IHI9YXdhaXQgZnQodCk7cmV0dXJuIXIuaGFzUHJhZ21hfHxyLmhhc1ByYWdtYShlKX1hc3luYyBmdW5jdGlvbiBYdChlLHQpe2xldHtoYXNCT006cix0ZXh0Om4sb3B0aW9uczpvfT1KbihlLGF3YWl0IHJlKHQpKTtpZihvLnJhbmdlU3RhcnQ+PW8ucmFuZ2VFbmQmJm4hPT1cIlwifHxvLnJlcXVpcmVQcmFnbWEmJiFhd2FpdCBHbihuLG8pKXJldHVybntmb3JtYXR0ZWQ6ZSxjdXJzb3JPZmZzZXQ6dC5jdXJzb3JPZmZzZXQsY29tbWVudHM6W119O2xldCB1O3JldHVybiBvLnJhbmdlU3RhcnQ+MHx8by5yYW5nZUVuZDxuLmxlbmd0aD91PWF3YWl0IHZvKG4sbyk6KCFvLnJlcXVpcmVQcmFnbWEmJm8uaW5zZXJ0UHJhZ21hJiZvLnByaW50ZXIuaW5zZXJ0UHJhZ21hJiYhYXdhaXQgR24obixvKSYmKG49by5wcmludGVyLmluc2VydFByYWdtYShuKSksdT1hd2FpdCBxbihuLG8pKSxyJiYodS5mb3JtYXR0ZWQ9SG4rdS5mb3JtYXR0ZWQsdS5jdXJzb3JPZmZzZXQ+PTAmJnUuY3Vyc29yT2Zmc2V0KyspLHV9YXN5bmMgZnVuY3Rpb24gWG4oZSx0LHIpe2xldHt0ZXh0Om4sb3B0aW9uczpvfT1KbihlLGF3YWl0IHJlKHQpKSx1PWF3YWl0IERlKG4sbyk7cmV0dXJuIHImJihyLnByZXByb2Nlc3NGb3JQcmludCYmKHUuYXN0PWF3YWl0IEh0KHUuYXN0LG8pKSxyLm1hc3NhZ2UmJih1LmFzdD1mbih1LmFzdCxvKSkpLHV9YXN5bmMgZnVuY3Rpb24gWm4oZSx0KXt0PWF3YWl0IHJlKHQpO2xldCByPWF3YWl0IGplKGUsdCk7cmV0dXJuIGZlKHIsdCl9YXN5bmMgZnVuY3Rpb24gUW4oZSx0KXtsZXQgcj1QcihlKSx7Zm9ybWF0dGVkOm59PWF3YWl0IFh0KHIsey4uLnQscGFyc2VyOlwiX19qc19leHByZXNzaW9uXCJ9KTtyZXR1cm4gbn1hc3luYyBmdW5jdGlvbiBldShlLHQpe3Q9YXdhaXQgcmUodCk7bGV0e2FzdDpyfT1hd2FpdCBEZShlLHQpO3JldHVybiBqZShyLHQpfWFzeW5jIGZ1bmN0aW9uIHR1KGUsdCl7cmV0dXJuIGZlKGUsYXdhaXQgcmUodCkpfXZhciBRdD17fTtXZShRdCx7YWRkRGFuZ2xpbmdDb21tZW50OigpPT5YLGFkZExlYWRpbmdDb21tZW50OigpPT5uZSxhZGRUcmFpbGluZ0NvbW1lbnQ6KCk9PnVlLGdldEFsaWdubWVudFNpemU6KCk9PkZlLGdldEluZGVudFNpemU6KCk9Pm51LGdldE1heENvbnRpbnVvdXNDb3VudDooKT0+cnUsZ2V0TmV4dE5vblNwYWNlTm9uQ29tbWVudENoYXJhY3RlcjooKT0+aXUsZ2V0TmV4dE5vblNwYWNlTm9uQ29tbWVudENoYXJhY3RlckluZGV4OigpPT5HbyxnZXRTdHJpbmdXaWR0aDooKT0+d2UsaGFzTmV3bGluZTooKT0+VixoYXNOZXdsaW5lSW5SYW5nZTooKT0+dXUsaGFzU3BhY2VzOigpPT5vdSxpc05leHRMaW5lRW1wdHk6KCk9PkpvLGlzTmV4dExpbmVFbXB0eUFmdGVySW5kZXg6KCk9PkN0LGlzUHJldmlvdXNMaW5lRW1wdHk6KCk9PkhvLG1ha2VTdHJpbmc6KCk9PnN1LHNraXA6KCk9Pm1lLHNraXBFdmVyeXRoaW5nQnV0TmV3TGluZTooKT0+bXQsc2tpcElubGluZUNvbW1lbnQ6KCk9PkVlLHNraXBOZXdsaW5lOigpPT5ZLHNraXBTcGFjZXM6KCk9Pk4sc2tpcFRvTGluZUVuZDooKT0+ZHQsc2tpcFRyYWlsaW5nQ29tbWVudDooKT0+Q2Usc2tpcFdoaXRlc3BhY2U6KCk9PnhufSk7ZnVuY3Rpb24gTG8oZSx0KXtpZih0PT09ITEpcmV0dXJuITE7aWYoZS5jaGFyQXQodCk9PT1cIi9cIiYmZS5jaGFyQXQodCsxKT09PVwiKlwiKXtmb3IobGV0IHI9dCsyO3I8ZS5sZW5ndGg7KytyKWlmKGUuY2hhckF0KHIpPT09XCIqXCImJmUuY2hhckF0KHIrMSk9PT1cIi9cIilyZXR1cm4gcisyfXJldHVybiB0fXZhciBFZT1MbztmdW5jdGlvbiBJbyhlLHQpe3JldHVybiB0PT09ITE/ITE6ZS5jaGFyQXQodCk9PT1cIi9cIiYmZS5jaGFyQXQodCsxKT09PVwiL1wiP210KGUsdCk6dH12YXIgQ2U9SW87ZnVuY3Rpb24gUm8oZSx0KXtsZXQgcj1udWxsLG49dDtmb3IoO24hPT1yOylyPW4sbj1OKGUsbiksbj1FZShlLG4pLG49Q2UoZSxuKSxuPVkoZSxuKTtyZXR1cm4gbn12YXIgVmU9Um87ZnVuY3Rpb24gWW8oZSx0KXtsZXQgcj1udWxsLG49dDtmb3IoO24hPT1yOylyPW4sbj1kdChlLG4pLG49RWUoZSxuKSxuPU4oZSxuKTtyZXR1cm4gbj1DZShlLG4pLG49WShlLG4pLG4hPT0hMSYmVihlLG4pfXZhciBDdD1ZbztmdW5jdGlvbiBadChlKXtpZih0eXBlb2YgZSE9XCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmdcIik7cmV0dXJuIGUucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csXCJcXFxcJCZcIikucmVwbGFjZSgvLS9nLFwiXFxcXHgyZFwiKX1mdW5jdGlvbiBqbyhlLHQpe2xldCByPWUubWF0Y2gobmV3IFJlZ0V4cChgKCR7WnQodCl9KStgLFwiZ1wiKSk7cmV0dXJuIHI9PT1udWxsPzA6ci5yZWR1Y2UoKG4sbyk9Pk1hdGgubWF4KG4sby5sZW5ndGgvdC5sZW5ndGgpLDApfXZhciBydT1qbztmdW5jdGlvbiBWbyhlLHQpe2xldCByPWUubGFzdEluZGV4T2YoYFxuYCk7cmV0dXJuIHI9PT0tMT8wOkZlKGUuc2xpY2UocisxKS5tYXRjaCgvXltcXHQgXSovKVswXSx0KX12YXIgbnU9Vm87ZnVuY3Rpb24gJG8oZSx0LHIpe2ZvcihsZXQgbj10O248cjsrK24paWYoZS5jaGFyQXQobik9PT1gXG5gKXJldHVybiEwO3JldHVybiExfXZhciB1dT0kbztmdW5jdGlvbiBNbyhlLHQscj17fSl7cmV0dXJuIE4oZSxyLmJhY2t3YXJkcz90LTE6dCxyKSE9PXR9dmFyIG91PU1vO2Z1bmN0aW9uIFdvKGUsdCl7bGV0IHI9VmUoZSx0KTtyZXR1cm4gcj09PSExP1wiXCI6ZS5jaGFyQXQocil9dmFyIGl1PVdvO2Z1bmN0aW9uIFVvKGUsdCxyKXtsZXQgbj10PT09J1wiJz9cIidcIjonXCInLHU9ZWUoITEsZSwvXFxcXCguKXwoW1wiJ10pL2dzLChpLHMsRCk9PnM9PT1uP3M6RD09PXQ/XCJcXFxcXCIrRDpEfHwociYmL15bXlxcblxcclwiJzAtN1xcXFxiZm5ydC12eFxcdTIwMjhcXHUyMDI5XSQvLnRlc3Qocyk/czpcIlxcXFxcIitzKSk7cmV0dXJuIHQrdSt0fXZhciBzdT1VbztmdW5jdGlvbiB6byhlLHQscil7cmV0dXJuIFZlKGUscih0KSl9ZnVuY3Rpb24gR28oZSx0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD09PTJ8fHR5cGVvZiB0PT1cIm51bWJlclwiP1ZlKGUsdCk6em8oLi4uYXJndW1lbnRzKX1mdW5jdGlvbiBLbyhlLHQscil7cmV0dXJuIFllKGUscih0KSl9ZnVuY3Rpb24gSG8oZSx0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD09PTJ8fHR5cGVvZiB0PT1cIm51bWJlclwiP1llKGUsdCk6S28oLi4uYXJndW1lbnRzKX1mdW5jdGlvbiBxbyhlLHQscil7cmV0dXJuIEN0KGUscih0KSl9ZnVuY3Rpb24gSm8oZSx0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD09PTJ8fHR5cGVvZiB0PT1cIm51bWJlclwiP0N0KGUsdCk6cW8oLi4uYXJndW1lbnRzKX12YXIgZXI9e307V2UoZXIse2J1aWxkZXJzOigpPT5YbyxwcmludGVyOigpPT5abyx1dGlsczooKT0+UW99KTt2YXIgWG89e2pvaW46a2UsbGluZTpLZSxzb2Z0bGluZTpFcixoYXJkbGluZTpHLGxpdGVyYWxsaW5lOkhlLGdyb3VwOkF0LGNvbmRpdGlvbmFsR3JvdXA6ZnIsZmlsbDpHZSxsaW5lU3VmZml4OkJlLGxpbmVTdWZmaXhCb3VuZGFyeTpkcixjdXJzb3I6eGUsYnJlYWtQYXJlbnQ6bGUsaWZCcmVhazpGcix0cmltOm1yLGluZGVudDppZSxpbmRlbnRJZkJyZWFrOnByLGFsaWduOm9lLGFkZEFsaWdubWVudFRvRG9jOnFlLG1hcmtBc1Jvb3Q6Y3IsZGVkZW50VG9Sb290OmFyLGRlZGVudDpscixoYXJkbGluZVdpdGhvdXRCcmVha1BhcmVudDpfZSxsaXRlcmFsbGluZVdpdGhvdXRCcmVha1BhcmVudDpCdCxsYWJlbDpDcixjb25jYXQ6ZT0+ZX0sWm89e3ByaW50RG9jVG9TdHJpbmc6ZmV9LFFvPXt3aWxsQnJlYWs6d3IsdHJhdmVyc2VEb2M6QWUsZmluZEluRG9jOkplLG1hcERvYzpOZSxyZW1vdmVMaW5lczpOcixzdHJpcFRyYWlsaW5nSGFyZGxpbmU6WGUscmVwbGFjZUVuZE9mTGluZTpUcixjYW5CcmVhazpTcn07dmFyIER1PVwiMy4xLjFcIjtmdW5jdGlvbiBhZShlLHQ9MSl7cmV0dXJuIGFzeW5jKC4uLnIpPT57bGV0IG49clt0XT8/e30sbz1uLnBsdWdpbnM/P1tdO3JldHVybiByW3RdPXsuLi5uLHBsdWdpbnM6QXJyYXkuaXNBcnJheShvKT9vOk9iamVjdC52YWx1ZXMobyl9LGUoLi4ucil9fXZhciBhdT1hZShYdCk7YXN5bmMgZnVuY3Rpb24gY3UoZSx0KXtsZXR7Zm9ybWF0dGVkOnJ9PWF3YWl0IGF1KGUsey4uLnQsY3Vyc29yT2Zmc2V0Oi0xfSk7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gZWkoZSx0KXtyZXR1cm4gYXdhaXQgY3UoZSx0KT09PWV9dmFyIHRpPWFlKGV0LDApLHJpPXtwYXJzZTphZShYbiksZm9ybWF0QVNUOmFlKFpuKSxmb3JtYXREb2M6YWUoUW4pLHByaW50VG9Eb2M6YWUoZXUpLHByaW50RG9jVG9TdHJpbmc6YWUodHUpfTt2YXIgcWM9dHI7ZXhwb3J0e3JpIGFzIF9fZGVidWcsZWkgYXMgY2hlY2sscWMgYXMgZGVmYXVsdCxlciBhcyBkb2MsY3UgYXMgZm9ybWF0LGF1IGFzIGZvcm1hdFdpdGhDdXJzb3IsdGkgYXMgZ2V0U3VwcG9ydEluZm8sUXQgYXMgdXRpbCxEdSBhcyB2ZXJzaW9ufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgXCIuL2lucHV0LmNzc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGUpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keVwiKTtcbiAgYm9keS5hcHBlbmQoLi4uaG9tZXBhZ2UoKSk7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmQoLi4ubWVudSgpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9