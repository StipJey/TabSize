const DEFAULT_TAB_WIDTH = 4;
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get('tabWidth', function(data) {
        if (!data.tabWidth) {
            chrome.storage.sync.set({tabWidth: DEFAULT_TAB_WIDTH});
        }
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({})],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
