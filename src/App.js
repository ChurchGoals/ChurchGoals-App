import React from 'react';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import Button from './components/button';
import Styles from './App.style';

function App() {
  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <Text style={Styles.title}>Church</Text>
        <Text style={Styles.title}>Goals</Text>
        <Button>Login</Button>
        <Text>OR</Text>
        <Button type="secondary">Signup</Button>
        <Text style={Styles.notChurch}>This is NOT a church run application.</Text>
        <Text style={Styles.churchLink} onPress={() => Linking.openURL('https://www.churchofjesuschrist.org/youth/childrenandyouth')}>Find out more about the Church of Jesus Christ of Latter-day Saints Personal Development Program</Text>
      </SafeAreaView>
    </View>
  );
}

export default App;
