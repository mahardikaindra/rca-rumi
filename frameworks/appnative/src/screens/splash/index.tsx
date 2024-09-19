import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Splash: React.FC = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation.replace('Home');
    }, 3000);
  }, [props?.navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#0000ff',
  },
});

export default Splash;
