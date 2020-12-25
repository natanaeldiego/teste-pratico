import React from 'react';
import { View, StyleSheet } from 'react-native';
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
            <Text style={styles.textTitle}>{route.params?.title}</Text>
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

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#5e5e5e',
    fontWeight: 'bold'
  }
});

export default Contents;
