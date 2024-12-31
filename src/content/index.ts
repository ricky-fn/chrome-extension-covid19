import { rank } from "../storage";

// Content scripts
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/

// Some global styles on the page
import "../tailwind.css";
import "./styles.css";

// Some JS on the page
rank.subscribe(console.log);