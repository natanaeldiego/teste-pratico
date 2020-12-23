/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, List, ListItem, Icon, Text, Left, Button, Body } from 'native-base';
import {
  StyleSheet
} from 'react-native';

//onPress={() => navigate('ContentPage')}
const Home = () => {

  const { navigate } = useNavigation();

  return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider style={styles.titleInfo}>
            <Text>Messagens do Presidente</Text>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
          </ListItem>

            <ListItem itemDivider style={styles.titleInfo}>
              <Text>Notícias</Text>
            </ListItem>
            <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
          </ListItem>

            <ListItem itemDivider style={styles.titleInfo}>
              <Text>Horários e Serviços</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider style={styles.titleInfo}>
              <Text>Taxas e Tarifários</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
          </ListItem>
          </List>
        </Content>
      </Container>
  );
};

const styles = StyleSheet.create({
  titleInfo: {
    justifyContent: 'center',
  },
});

export default Home;
