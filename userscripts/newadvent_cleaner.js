// ==UserScript==
// @name         New Advent Cleaner
// @namespace    http://tampermonkey.net/
// @version      2025-07-09
// @description  Clean up authors I don't want to see.
// @author       ajz
// @require      https://code.jquery.com/jquery-3.7.1.slim.min.js
// @match        https://www.newadvent.org
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    var $ = jQuery;

    $(document).ready(function() {
        $('span.newsbyline:contains("Kathryn Jean Lopez")').parent().remove();
    });

})();
