chrome.storage.sync.get(['font_name'], (result) => {
	if (result.font_name && result.font_name.length > 0) {
		document.getElementsByTagName('head').item(0).appendChild( document.createElement('style'));
		css = document.styleSheets.item(document.styleSheets.length - 1);
		css.insertRule(".blob-code-inner { font-family: Source Code Pro; }")
	}
});