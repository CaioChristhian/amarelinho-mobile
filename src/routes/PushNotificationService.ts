import PushNotification from 'react-native-push-notification';

class PushNotificationService {
  configure() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICAÇÃO:', notification);
      },
      senderID: 'YOUR GCM (OR FCM) SENDER ID',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
    });
  }

  localNotification() {
    PushNotification.localNotification({
      title: 'Minha Notificação',
      message: 'Você tem uma nova mensagem',
    });
  }
}

export default new PushNotificationService();