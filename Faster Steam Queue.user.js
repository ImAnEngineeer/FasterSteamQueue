// ==UserScript==
// @name         Faster Steam Queue
// @namespace    https://steamcommunity.com/id/CozmoCozminsky/
// @version      0.1
// @description  Faster browsing through the queue for those who like to browse
// @author       gearuptowin@gmail.com
// @match        https://store.steampowered.com/app/*
// @match        https://store.steampowered.com/explore/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function(){
        // if we are on the page after we finished a queue
        // immidietly start a new one
        if(document.getElementById('refresh_queue_btn') != undefined){
            document.getElementById('refresh_queue_btn').click();
        }

        var addToWishlistButton =
        document
            .getElementById('add_to_wishlist_area')
            .querySelector('a');

        var nextInQueueButton =
            document.getElementsByClassName('btn_next_in_queue_trigger')[0];

        var followButton =
            document.getElementsByClassName('queue_btn_follow')[0];

        var ignoreButton =
            document.getElementsByClassName('queue_btn_ignore')[0];

        // take out the javascript from the href
        // to make sure code is executed in order
        var addToWishlistScript = addToWishlistButton.href;
        addToWishlistButton.href = '#';

        addToWishlistButton.addEventListener('click',function(){
           eval(addToWishlistScript);
           nextInQueueButton.click();
        });

        followButton.addEventListener('click',function(){
           nextInQueueButton.click();
        });

        ignoreButton.addEventListener('click',function(){
           nextInQueueButton.click();
        });


        var blockWithInfo = document.getElementsByClassName('game_meta_data')[0];

        // styling for the right side block with info
        // mostly being brought to the top-right so
        // you don't have to scroll down to see if a game is multiplayer etc.
        blockWithInfo.style =
            "position: absolute;" +
            "right: 0px;" +
            "width: 440px;" +
            "top: 90px;";
   });

})();