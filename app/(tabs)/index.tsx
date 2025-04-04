import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
export default function HomeScreen() {
  return (
    <ScrollView  style = {{backgroundColor: '#A1CEDC'}}>
        <View><Text>Lil Mussi BIg NIgge</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
