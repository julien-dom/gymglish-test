import React from "react";
import { Button } from "react-native-paper";

export default function ButtonComponent({
  buttonText,
  isFavorite,
  onPress,
  icon,
}) {
  const buttonTextStyle = isFavorite
    ? { color: "#E9BE59", fontFamily: "NotoSansMono-Regular" }
    : { color: "black", fontFamily: "NotoSansMono-Regular" };
  const buttonIcon = icon === "heart" ? "heart" : "delete";

  return (
    <Button
      icon={buttonIcon}
      labelStyle={buttonTextStyle} // change couleur icone et texte
      mode="elevated"
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
}
