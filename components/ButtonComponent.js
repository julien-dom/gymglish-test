import React from "react";
import { Button } from "react-native-paper";

export default function ButtonComponent({
  buttonText,
  isFavorite,
  onPress,
  icon,
}) {
  // changer texte, style et icone grance aux props
  const buttonTextStyle = isFavorite
    ? { color: "#2F9599", fontFamily: "NotoSansMono-Regular" }
    : { color: "black", fontFamily: "NotoSansMono-Regular" };
  const buttonIcon = icon === "heart" ? "heart" : "delete";

  return (
    <Button
      icon={buttonIcon}
      labelStyle={buttonTextStyle}
      mode="elevated"
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
}
