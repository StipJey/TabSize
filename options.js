const selector = document.querySelector('#tabWidth');
selector.addEventListener('change', (event) => {
    const tabWidth = parseInt(event.target.value)
    chrome.storage.sync.set({tabWidth: tabWidth});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "changeTabWidth",
            tabWidth: tabWidth
        });
    });
});
chrome.storage.sync.get('tabWidth', (data) => {
    selector.value = data.tabWidth;
});
