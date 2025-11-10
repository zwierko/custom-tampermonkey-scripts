// ==UserScript==
// @name         American Greatness Cleaner
// @namespace    http://tampermonkey.net/
// @version      2025-11-10
// @description  Clean up articles I don't want to see (orig. 31-May-2025)
// @author       ajz
// @require      https://code.jquery.com/jquery-3.7.1.slim.min.js
// @match        https://amgreatness.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  var $ = jQuery;

  $(document).ready(function () {
    $('a[href*="axios"]').parent("p").remove();
  });
})();
