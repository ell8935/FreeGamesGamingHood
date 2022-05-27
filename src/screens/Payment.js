import React from "react"
import { View, StyleSheet, Text } from "react-native"
import {CustomButton} from '../components';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.msg, color: "green" }}>
        This message will show when app has been purchased successfully
      </Text>
      <CustomButton title="Purchase" />
      <Text style={{ ...styles.msg, color: "red" }}>
        Error message will go here
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "lightblue",
    padding: 16,
  },
  msg: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 16,
  },
})
export default Payment