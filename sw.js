/* CAW Mirror service worker — Web Push sign-on-tap.
   Receives push notifications from the eth-caw-mirror Worker and,
   on tap, focuses/opens the viewer at #/mirror (or #/mirror/<id>
   when the push payload carries an item id). It does nothing else:
   no fetch interception, no caching — normal page loads are
   completely unaffected. */
"use strict";

self.addEventListener("push", function (event) {
  var data = {};
  if (event.data) {
    try { data = event.data.json(); }
    catch (e) {
      try { data = { text: event.data.text() }; } catch (e2) { data = {}; }
    }
  }
  var title = data.title || "CAW Mirror";
  var body = data.body || data.text || "";
  var target = data.id != null ? "#/mirror/" + encodeURIComponent(data.id) : "#/mirror";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: "assets/logo.jpg",
      badge: "assets/logo.jpg",
      data: { target: target },
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var target = (event.notification.data && event.notification.data.target) || "#/mirror";
  var url = new URL(target, self.registration.scope).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        var client = list[i];
        if (client.url.indexOf(self.registration.scope) === 0 && "focus" in client) {
          var nav = client.navigate ? client.navigate(url).catch(function () { return null; }) : Promise.resolve(null);
          return nav.then(function () { return client.focus(); });
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
      return null;
    })
  );
});
