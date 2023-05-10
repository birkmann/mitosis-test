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

  return (
    <View>
      <View value={name} onChange={(event) => setName(event.target.value)} />

      <View>
        <View>
          <Text>{props.text}</Text>
        </View>

        <View>
          <Text>{name}</Text>
        </View>
      </View>
    </View>
  );
}

export default Button;
