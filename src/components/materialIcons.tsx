import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconData {
  iconName: string;
  size: number;
  color: string;
}

export const IconMaterialIcons: React.FC<IconData> = ({ iconName, size, color }) => {
  return <Icon name={iconName} size={size} color={color} />
}
