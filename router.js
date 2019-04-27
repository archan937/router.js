var

// *
// * router.js 0.1.0 (Uncompressed)
// * An easy to use Javascript library for one-page routing.
// *
// * (c) 2019 Paul Engel
// * router.js is licensed under MIT license
// *
// * $Date: 2019-04-27 18:23:42 +0100 (Sat, 27 April 2019) $
// *

Router = (function() {
  'use strict';

  var
    routes = [],

  init = function() {
    document.addEventListener('click', intercept);
    if ((document.readyState == 'interactive') || (document.readyState == 'complete')) {
      load();
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        load();
      });
    }
  },

  intercept = function(event) {
    if (!modifierActive(event)) {
      var target = eventTarget(event);
      if (target.tagName == 'A') {
        load(target.href);
      }
    }
  },

  modifierActive = function(event) {
    return event.metaKey || event.shiftKey || event.ctrlKey || event.altKey;
  },

  eventTarget = function(event) {
    return event.target || event.srcElement || window.event.target || window.event.srcElement;
  },

  load = function(url) {
    var match = matchURL(url || window.location.href);
    match && setTimeout(match, 0);
    return !!match;
  },

  matchURL = function(url) {
    var
      location = window.location,
      link = document.createElement('a'),
      i, match;

    link.href = url;

    if (
      (link.href.indexOf('#') == -1) ||
      (link.host != location.host) ||
      (normalizePath(link.pathname) != normalizePath(location.pathname))) {
      return;
    }

    for (i = 0; i < routes.length; i++) {
      if (match = matchHash(link.hash, routes[i])) {
        return match;
      }
    }
  },

  normalizePath = function(path) {
    return path.replace(/(^\/|\/$)/g, '');
  },

  matchHash = function(hash, route) {
    var match = route.regexp.exec(hash.replace('#', ''));

    if (match) {
      return function() {
        route.func.apply(null, match.slice(1, match.length));
      };
    }
  },

  route = function() {
    var i, hash;

    for (i = 0; i < arguments.length; i += 2) {
      hash =
        arguments[i]
          .replace(/:([^\/]+)/g, function() {
            return '([^\\/]+)';
          })
          .replace(/\*([^\/]+)/g, function() {
            return '(.*?)';
          });

      routes.push({
        regexp: new RegExp('^' + hash + '$'),
        func: arguments[i + 1]
      });
    }
  };

  init();

  return {add: route};

}());

window.route = Router.add;
