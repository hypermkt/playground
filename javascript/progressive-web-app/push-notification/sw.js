self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.pushManager.getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription.endpoint
        }
        throw new Error('User not subscribed')
    })
    .then(function(res) {
      return fetch('/notifications.json')
    })
    .then(function(res) {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error('notification api response error')
    })
    .then(function(res) {
      return self.registration.showNotification(res.title, {
        icon: '/icon.png',
        body: res.body
      })
    })
  )
})
