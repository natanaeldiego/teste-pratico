import React from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { selectors } from '../redux/selectors';
import { Footer, FooterTab, Text, Button, Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { IconMaterialIcons } from './materialIcons';
import {IconFontAwesome} from './fontAwesomeIcons';

interface IconData {
  iconName: string;
  size: number;
  color: string;
  tabbarName: string;
}

export const IconAplication: React.FC<IconData> = ({ iconName, size, color, tabbarName }) => {
  if (tabbarName === 'Proteção civil' || tabbarName === 'Camara') {
    return <IconFontAwesome iconName={iconName} size={size} color={color} />
  }
  return <IconMaterialIcons iconName={iconName} size={size} color={color} />
}

export const FooterTabar = () => {
  const listPages = useSelector(selectors.getPages);
  const { navigate } = useNavigation();

  return (
    <Footer>
      <FooterTab style={styles.footerTab}>
        {
          listPages.resultPages.length > 0 && listPages.resultPages.map((data:any, indice:string) => (
            <View key={indice} style={{ display: 'flex', alignItems: 'center' }}>
              <Button badge vertical onPress={() => navigate('ContentHomePage', { content: data.content, icon: data.icon, tabbarName: data.title })}>
                {(data.title === 'Proteção civil' || data.title === 'Camara') ? (
                  <>
                    <Badge style={{backgroundColor: 'unset'}} />
                    <IconAplication iconName={data.icon} size={20} color={'#262626'} tabbarName={data.title} />
                  </>
                ) : (
                    <>
                      {data.title === 'Comunicar' ? (<Badge><Text>1</Text></Badge>) : (<Badge style={{backgroundColor: 'unset'}} />)}
                      <IconAplication iconName={data.icon} size={20} color={'#262626'} tabbarName={data.title} />
                      </>
                )}

                <Text style={styles.textTabBar}>{data.title}</Text>
                </Button>
            </View>
          ))
        }
      </FooterTab>
    </Footer>
  )
}

export const Loading = () => {
  return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0973c8" />
      </View>
    )
}

const styles = StyleSheet.create({
  textTabBar: {
    fontSize: 8,
    textAlign: 'center',
    color: '#8c8c8c',
    fontWeight: 'bold'
  },
  footerTab: {
    backgroundColor: '#f0f0f0'
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  }
});
