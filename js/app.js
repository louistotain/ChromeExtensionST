chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {

        var time = 180;

        // Get a reference to the last interval + 1
        const interval_id = window.setInterval(function () {
        }, Number.MAX_SAFE_INTEGER);

        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }

        var interval = setInterval(function () {

            if (time === 0) {
                chrome.tabs.update(undefined, {url: "https://social.tremblaye-sa.fr/ecran-dynamique"});
                time = 180;
                clearInterval(interval);
            } else {
                time = time - 1;

                chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {data: time});
                });
            }

        }, 1000);

    }

});