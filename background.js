/* global chrome */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'id':'fanqie',
    'frame':{
      'type': 'none'
    },
    'outerBounds': {
      'width': 320,
      'height': 320,
      'maxWidth':320,
      'minHeight':320
    },
    'resizable': false
  });
});