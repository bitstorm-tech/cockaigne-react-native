import { Text, View } from 'react-native';

export function Navbar() {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>My Navbar</Text>
    </View>
  );
}
