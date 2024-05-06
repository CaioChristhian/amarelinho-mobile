import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { GiftedChat, IMessage as GiftedChatMessage, User } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';

interface IMessage extends GiftedChatMessage {
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
}

export function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Boa Tarde",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Dulce Vasconcelos",
          avatar: "",
        },
      },
      {
        _id: 2,
        text: "Oi",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "Dulce Vasconcelos",
          avatar: "",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderUsername = useCallback((user: User) => (
    <Text style={{ fontSize: 12, color: 'gray', textAlign: 'right', marginBottom: -15, fontWeight: '800' }}>
      {user.name}
    </Text>
  ), []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{ _id: 1, name: "Dulce Vasconcelos" }}
      renderUsername={renderUsername}
    />
  );
}
