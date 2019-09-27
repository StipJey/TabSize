chrome.storage.sync.get('tabWidth', function(data) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = '__TabSize__';
    style.innerText = `* { tab-size: ${data.tabWidth}; }`;
    document.body.appendChild(style);
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "changeTabWidth"){
        const style = document.getElementById('__TabSize__')
        style.innerText = `* { tab-size: ${message.tabWidth}; }`;
    }
});
