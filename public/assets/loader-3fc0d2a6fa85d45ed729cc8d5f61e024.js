var flexynote={};loader={exec:function(t,e){var o=flexynote;e=void 0===e?"init":e,""!==t&&o[t]&&"function"==typeof o[t][e]&&o[t][e]()},init:function(){var t=document.body,e=t.getAttribute("data-controller"),o=t.getAttribute("data-action");loader.exec(e,o)}};