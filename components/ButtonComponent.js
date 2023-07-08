import React from 'react';
import { Button } from 'react-native-paper';

export default function ButtonComponent ({ buttonText, isFavorite, onPress }) {
  const buttonTextStyle = isFavorite ? { color: '#E9BE59', fontFamily:'NotoSansMono-Regular' } : { color: 'black', fontFamily:'NotoSansMono-Regular' };
  return (
    <Button
      icon="heart"
      labelStyle={buttonTextStyle} // change couleur icone et texte
      mode="elevated"
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
};

