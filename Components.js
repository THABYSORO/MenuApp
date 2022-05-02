import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Contact({name, totalAmount, setTotalAmount, Amount, picture}) {
  let price=Amount  
  const [count, setcount] = useState(0);
  function increase(){
    setcount(count + 1)
    price=price+Amount;
    setTotalAmount(totalAmount + Amount);
  }
  function decrease(){
    setcount(count - 1)
    price=price-Amount;
    setTotalAmount(totalAmount - Amount);
  }
  return (
    <View style={styles.contact}>
      <Image style={styles.image}
        source={picture} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text>Price: {Amount}</Text>
        <Button title="Add" onPress={increase} />
        <Text>Quantity: {count}</Text>
        <Button title="Remove" onPress={decrease} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    padding: 5,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 5,
    
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});