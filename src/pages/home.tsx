import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {View} from 'react-native';
import { selectors } from '../redux/selectors';
import { apiServer } from '../services/api';
import { Container, Content, List, ListItem, Text, Left, Body } from 'native-base';
import {
  StyleSheet
} from 'react-native';
import { FooterTabar, IconAplication } from '../components';
import { Loading } from '../components';

interface PostsApi {

  title: string,

  category: string,

  content: string,
}

interface PagesApi {

  type: string,

  title: string,

  properties: {
    categories: Array<string>
  }
}

const Home: React.FC = ({route}:any) => {
  const { navigate } = useNavigation();
  const listPages = useSelector(selectors.getPages);
  const [resultData, setResultData] = useState([]);
  const [noticiasPosts, setNoticiasPosts] = useState([]);
  const [iconPosts, setIconPosts] = useState('');
  const [tabbarName, setTabbarName] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  useFocusEffect(
    React.useCallback(() => {

      let contentData = Array<never>();
      if (route.params?.content.length > 0) {
        contentData = route.params?.content;
        setIconPosts(route.params?.icon)
        setTabbarName(route.params?.tabbarName);
      } else {
        contentData = listPages.resultPages[0]?.content;
        setIconPosts(listPages.resultPages[0]?.icon)
        setTabbarName(listPages.resultPages[0]?.title);
      }

      if (contentData?.length > 0) {
        let noticiaDataPosts = Array<string>();
        setResultData(contentData);
        let appData = {}
        async function getPosts() {
          let i = 0;
          const promises = contentData.map(async (value: PagesApi) => {

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

            if (i === contentData.length) {
              setNoticiasPosts(noticiaDataPosts);
            }
          })
          await Promise.all(promises);
        }
        getPosts();
      }
    }, [route.params?.content])
  );

  return (
      <Container>
        <Content style={styles.marginTop}>
          <List>
            {
              resultData.map((data: PagesApi, indice) => (
                <View key={indice}>
                  <ListItem key={indice} itemDivider style={styles.titleInfo}>
                    <Text style={styles.fontTextTitle}>{data.title}</Text>
                  </ListItem>
                  {
                    Object.keys(noticiasPosts).length > 0 ? noticiasPosts.map((dataPosts, idx) => {
                      return (
                        <View key={idx}>
                          {
                            dataPosts.map((value: PostsApi, indx: string) => {
                              if (noticiasPosts[idx][indx] && data.properties.categories.includes(noticiasPosts[idx][indx]['category'])) {
                                return (
                                  <ListItem key={indx} icon onPress={()=>navigate('Detalhes',{content: value.content, title: value.title})}>
                                    <Left>
                                      <IconAplication iconName={iconPosts} size={20} color={'#262626'} tabbarName={tabbarName} />
                                    </Left>
                                    <Body>
                                      <Text>{value.title}</Text>
                                    </Body>
                                  </ListItem>
                                )
                              }
                            })
                          }
                        </View>
                      )
                    }) : Loading()
                  }
                </View>
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
  fontTextTitle: {
    fontWeight: '900',
    fontSize: 18
  },
  marginTop: {
    marginTop: 10
  }
});

export default Home;
