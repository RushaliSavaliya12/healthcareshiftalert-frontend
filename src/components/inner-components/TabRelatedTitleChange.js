import React, { useState, useEffect } from 'react';


const TabRelatedTitleChange = () => {
    const tabButton = document.querySelectorAll('.manage-tab-main .nav-link');
    const titleText = document.querySelector('.page-title');
    [].forEach.call(tabButton, function (item) {
        item.onclick = function () {
            const itemHTML =  item.innerHTML;
            titleText.innerHTML = "Manage" + " " + itemHTML;
        }
    });
}

export default TabRelatedTitleChange;