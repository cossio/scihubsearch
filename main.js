searchSciHub = function(word, tab){
  var query = word.selectionText;
  if (query == undefined) {
    var tabURL = tab.url;
    chrome.tabs.update({url: "http://sci-hub.tw/" + tabURL});
  } else {
    chrome.tabs.update({url: "http://sci-hub.tw/" + query});
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabURL = tab.url;
  chrome.tabs.update({url: "http://sci-hub.tw/" + tabURL});
});

chrome.contextMenus.create({
  title: "Search DOI in sci-hub",
  contexts:["selection", "all"],
  onclick: searchSciHub
});
