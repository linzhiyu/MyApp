import React, { Component } from 'react';
import { Text } from 'react-native';
import get from 'lodash/get';
import PushNotification from 'react-native-push-notification';

type Props = {
  changeNotification: Function
};

export default class PushHandler extends Component {
  props: Props;

  componentDidMount() {
    console.log('-----111---');
    const { changeNotification } = this.props;
    PushNotification.configure({
      onRegister(data) {
        console.log('TOKEN:', data);
      },
      onNotification: function(notification) {
        console.log('点击NOTIFICATION了！！！');
        console.log('NOTIFICATION:', notification);
        changeNotification(notification.message);
      }
    });
  }

  render() {
    return null;
  }
}
