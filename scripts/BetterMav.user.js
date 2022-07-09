// ==UserScript==
// @name         BetterMav
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Zenrac
// @match        http://www.mavanimes.co/*
// @match        https://www.mavanimes.co/*
// @downloadURL  https://raw.githubusercontent.com/Zenrac/Zenrac.github.io/main/scripts/BetterMav.user.js
// @updateURL    https://raw.githubusercontent.com/Zenrac/Zenrac.github.io/main/scripts/BetterMav.user.js
// @homepageURL  https://github.com/zenrac/Zenrac.github.io
// @supportURL   https://github.com/zenrac/Zenrac.github.io/issues
// @icon         https://www.google.com/s2/favicons?domain=mavanimes.co
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var btnNext = document.createElement("button");
    btnNext.innerText = "Episode suivant >";

    var btnPrevious = document.createElement("button");
    btnPrevious.innerText = "< Episode précedent";
    btnPrevious.style = "background: #181a1b;";
    btnNext.style = "margin: 10px; background: #181a1b;";

    btnNext.onclick = function () {
        var ep = window.location.href.match(/(\d+)-v/)[1];
        var url = window.location.href.replace(ep, ((parseInt(ep) + 1 < 10) ? "0" : "") + ((parseInt(ep) + 1).toString()));
        window.location = url;
    };

    btnPrevious.onclick = function () {
        var ep = window.location.href.match(/(\d+)-v/)[1];
        var url = window.location.href.replace(ep, ((parseInt(ep) - 1 < 10) ? "0" : "") + ((parseInt(ep) - 1).toString()));
        if ((parseInt(ep) - 1) > 0) {
            window.location = url;
        }
    };

    document.getElementsByClassName("entry-title")[0].appendChild(document.createElement("br"));
    document.getElementsByClassName("entry-title")[0].appendChild(btnPrevious);
    document.getElementsByClassName("entry-title")[0].appendChild(btnNext);
})();
