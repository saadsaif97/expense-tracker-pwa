importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var firebaseConfig = {
  apiKey: 'AIzaSyAcgN9pvK55Ubwti1lE-X1zv-cyVnup9bY',
  authDomain: 'saadsaif-expense-tracker-pwa.firebaseapp.com',
  projectId: 'saadsaif-expense-tracker-pwa',
  storageBucket: 'saadsaif-expense-tracker-pwa.appspot.com',
  messagingSenderId: '85405428000',
  appId: '1:85405428000:web:a3db5c2b72ed9594574f45',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/itwonders-web-logo.png',
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
