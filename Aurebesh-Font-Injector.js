// ==UserScript==
// @name         Aurebesh Font Injector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Inject the Aurebesh font into any website with fallback support
// @author       ZeroSploit
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL to the raw Aurebesh.ttf file hosted on GitHub
    const fontUrl = 'https://raw.githubusercontent.com/Zero-Sploit/Aurebesh-Font/main/Aurebesh.ttf';

    // Function to inject the font
    function injectAurebeshFont() {
        try {
            // Check if font is already injected to prevent duplicates
            if (document.querySelector('style#aurebesh-font')) {
                return;
            }

            // Create style element with an ID for reference
            const style = document.createElement('style');
            style.id = 'aurebesh-font';
            document.head.appendChild(style);

            // Define the @font-face rule with fallback
            const fontFaceRule = `
                @font-face {
                    font-family: 'Aurebesh';
                    src: url('${fontUrl}') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap; /* Improves loading behavior */
                }
            `;

            // Insert the font-face rule
            style.sheet.insertRule(fontFaceRule, 0);

            // Apply font with fallbacks and !important to override site styles
            const styleRule = `
                body, * {
                    font-family: 'Aurebesh', Arial, Helvetica, sans-serif !important;
                }
            `;
            style.sheet.insertRule(styleRule, 1);

            // Add loading confirmation
            fetch(fontUrl, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        console.warn('Aurebesh font might not have loaded correctly');
                    }
                })
                .catch(error => {
                    console.error('Error checking Aurebesh font availability:', error);
                });

        } catch (error) {
            console.error('Aurebesh Font Injector Error:', error);
        }
    }

    // Run when DOM is fully loaded instead of window.onload
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        injectAurebeshFont();
    } else {
        document.addEventListener('DOMContentLoaded', injectAurebeshFont);
    }
})();
