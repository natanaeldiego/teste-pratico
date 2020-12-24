import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectors } from '../redux/selectors';
import { apiServer } from '../services/api';
import { Container, Content, List, ListItem, Icon, Text, Left, Button, Body } from 'native-base';
import {
  StyleSheet
} from 'react-native';
import { FooterTabar } from '../components';

const Home = ({route}:any) => {
  const { navigate } = useNavigation();
  const listPages = useSelector(selectors.getPages);
  const [resultData, setResultData] = useState([]);
  const [noticiasPosts, setNoticiasPosts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {

      let contentData;
      if (route.params?.content.length > 0) {
        contentData = route.params?.content;
      } else {
        contentData = listPages.resultPages[0]?.content;
      }

      if (contentData.length > 0) {
        let noticiaDataPosts = [];

        setResultData(contentData);
        let appData = {}
        async function getPosts() {
          let i = 0;
          const promises = Promise.all(contentData.map(async (value) => {

            appData = {
              "category": value.properties.categories
            }

            await apiServer.post(`posts`, appData)
            .then(
              response => {
                i++
                noticiaDataPosts.push(response.data);
              }
            ).catch(error => {
              console.log({ errorMessage: error.message });
              console.error('There was an error!', error);
            });

            if (i === 4) {
              setNoticiasPosts(noticiaDataPosts);
            }
          }))
          await Promise.all(promises);
        }
        getPosts();
      }
    }, [route.params?.content])
  );

  return (
      <Container>
        <Content>
          <List>
            {
              resultData.map((data, indice) => (
                <>
                  <ListItem key={indice} itemDivider style={styles.titleInfo}>
                    <Text>{data.title}</Text>
                  </ListItem>
                  {
                    noticiasPosts.map((dataPosts) => {
                      return (
                        <>
                          {
                            dataPosts.map((value, indx) => {
                              if (dataPosts[indx] && data.properties.categories.includes(dataPosts[indx].category)) {
                                return (
                                  <ListItem key={indx} icon onPress={()=>navigate('Detalhes',{content: value.content, title: value.title})}>
                                    <Left>
                                      <Button style={{ backgroundColor: "#FF9501" }}>
                                        <Icon active name="airplane" />
                                      </Button>
                                    </Left>
                                    <Body>
                                      <Text>{value.title}</Text>
                                    </Body>
                                  </ListItem>
                                )
                              }
                            })
                          }
                        </>
                      )
                    })
                  }
                </>
              ))
            }
          </List>
      </Content>
      {FooterTabar()}
    </Container>
  );
};

const styles = StyleSheet.create({
  titleInfo: {
    justifyContent: 'center',
  },
});

export default Home;
