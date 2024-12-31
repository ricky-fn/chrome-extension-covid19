import { get } from "svelte/store";
import { rank } from "../storage";
import { isOneHourLater } from "../utils/time";
import type { ApiResponse } from "../types";

// Background service workers
// https://developer.chrome.com/docs/extensions/mv3/service_workers/

chrome.runtime.onInstalled.addListener(() => {
    rank.subscribe(console.log);
});

chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
    if (message.type === "rank") {
        const _rank = get(rank);
        if (_rank && !isOneHourLater(_rank.timestamp)) {
            senderResponse(_rank);
            return;
        }

        fetch('https://fyo2kjynpe.execute-api.us-east-1.amazonaws.com/dev/api', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then((res: ApiResponse) => {
            rank.set(res);
            senderResponse(res);
        })
    }
    if (message.type === "url") {
        chrome.tabs.create({ url: message.url });
    }
    return true
});

// NOTE: If you want to toggle the side panel from the extension's action button,
// you can use the following code:
// chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
//    .catch((error) => console.error(error));
