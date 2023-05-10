import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { useState } from "react";

type Props = {
  text: string;
};
import s from "./Button.module.scss";

function Button(props: Props) {
  const [name, setName] = useState(() => "Alex");

  const [clicked, setClicked] = useState(() => 0);

  return (
    <View>
      <View value={name} onChange={(event) => setName(event.target.value)} />

      <View
        onClick={(event) => {
          setClicked(clicked + 1);
        }}
      >
        <View>
          <Text>{props.text}</Text>
        </View>

        <View>
          <Text>{name}</Text>
        </View>
      </View>

      <View>
        <Text>Clicked: </Text>
        <Text>{clicked}</Text>
      </View>
    </View>
  );
}

export default Button;
