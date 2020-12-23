import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconData {
  iconName: string;
  size: number;
  color: string;
}

export const IconFontAwesome: React.FC<IconData> = ({iconName, size, color}) => {
  return <Icon name={iconName} size={size} color={color} />
}