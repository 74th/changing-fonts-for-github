'use strict';

const b = document.getElementById("apply_button");
const t = document.getElementById("font_text");
b.addEventListener("click", (e) => {
  chrome.storage.sync.set({ font_name: t.value }, () => { });
});

chrome.storage.sync.get(['font_name'], (result) => {
  if (result.font_name) {
    t.value = result.font_name;
  }
});
