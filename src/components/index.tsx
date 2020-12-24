import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";
import { useSelector } from 'react-redux';
import { selectors } from '../redux/selectors';
import { Footer, FooterTab, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

interface IconData {
  iconName: string;
  size: number;
  color: string;
}

export const IconFontAwesome: React.FC<IconData> = ({iconName, size, color}) => {
  return <Icon name={iconName} size={size} color={color} />
}

export const FooterTabar = () => {
  const listPages = useSelector(selectors.getPages);
  const { navigate } = useNavigation();

  return (
    <Footer>
      <FooterTab>
        {
          listPages.resultPages.length > 0 && listPages.resultPages.map((data:any, indice:string) => (
            <View key={indice} style={{ display: 'flex', alignItems: 'center' }}>
              <Button badge vertical onPress={()=>navigate('ContentHomePage', {content: data.content})}>
            <Icon name="home" size={20} color={'red'} />
                <Text style={{ fontSize: 7, textAlign: 'center' }}>{data.title}</Text>
                </Button>
            </View>
          ))
        }
      </FooterTab>
    </Footer>
  )
}
