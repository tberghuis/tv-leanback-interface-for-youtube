console.log('hello world');

let USER_AGENT_OVERRIDE = 'Mozilla/5.0 (SMART-TV; Linux; Tizen 4.0.0.2) AppleWebkit/605.1.15 (KHTML, like Gecko) SamsungBrowser/9.2 TV Safari/605.1.15';


function init() {
    bindOnBeforeSendHeaders();
}



function bindOnBeforeSendHeaders() {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        onBeforeSendHeadersCallback,
        { urls: ["*://*.youtube.com/tv*"] },
        ["blocking", "requestHeaders"]
    );
}



function onBeforeSendHeadersCallback(details) {

    for (let i = 0; i < details.requestHeaders.length; i++) {
        if (details.requestHeaders[i].name !== 'User-Agent') {
            continue;
        }
        console.log('override UA');
        details.requestHeaders[i].value = USER_AGENT_OVERRIDE;
        break;
    }

    return {
        requestHeaders: details.requestHeaders
    };
}




init();