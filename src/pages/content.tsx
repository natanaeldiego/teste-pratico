import React from 'react';
import {
  View,
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from "native-base";

const Contents = ({ route }: any) => {

  if (!route.params?.content) {
    return <View />
  }

  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>{route.params?.title}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
            <Text>{route.params?.content}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Contents;
