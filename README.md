# Aurebesh Font Injector

![Version](https://img.shields.io/badge/version-0.1-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

A Tampermonkey userscript that injects the Star Wars-inspired Aurebesh font into any website, transforming text into the iconic galactic script.

## Features

- Injects Aurebesh font across all HTTP/HTTPS websites
- Smart font loading with fallbacks (Arial, Helvetica, sans-serif)
- Error handling and duplicate injection prevention
- Optimized for performance with `font-display: swap`
- Applies font universally with CSS override

## Installation

1. **Install Tampermonkey**:
   - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Other browsers](https://www.tampermonkey.net/)

2. **Add the Script**:
   - Click [here](https://raw.githubusercontent.com/Zero-Sploit/Aurebesh-Font-Injector/main/AurebeshFontInjector.user.js) to install the script directly in Tampermonkey, or
   - Copy the script from `AurebeshFontInjector.user.js` and paste it into a new Tampermonkey script.

3. **Enable the Script**:
   - Ensure the script is enabled in Tampermonkey's dashboard.

## Usage

Once installed and enabled, the script automatically:
- Loads the Aurebesh font from the hosted source
- Applies it to all text on every HTTP/HTTPS webpage you visit
- Falls back to standard fonts if Aurebesh fails to load

No manual activation required—just browse as usual and enjoy the galactic transformation!
