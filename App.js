
import { StatusBar,StyleSheet, ImageBackground,ScrollView,Text, View } from 'react-native';
import {useState} from 'react';
import Contact from './Components';

export default function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <View style={styles.container}>
     <ImageBackground source={require("./assets/chopping.jpg")}
      style={{height:'100%',width:'100%',}}>
      <Text style={{fontSize:20,marginTop:100,fontWeight:"bold",alignSelf:"center"}}>Welcome to Wings Cafe</Text>
      <Text style={{fontSize: 15,marginStart:70 }}>The total Amount is {totalAmount}</Text>
      
      <ScrollView>
      <Contact name="coke" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={12} picture={require("./assets/cokes.png")}/>
      
      <Contact name="coffee" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={18} picture={require("./assets/coffee.jpg")}/>
      <Contact name="Bread" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={10} picture={require("./assets/bread.png")}/>
      <Contact name="rice" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={20} picture={require("./assets/rice.jpg")}/>
     
      <Contact name="Stew" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={22} picture={require("./assets/stew.png")}/>     
           
      <Contact name="marie" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={6} picture={require("./assets/marie.jpg")}/>     
      <Contact name="bananas" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={4} picture={require("./assets/bananas.jpg")}/>     
      <Contact name="peanuts" totalAmount={totalAmount} setTotalAmount={setTotalAmount} Amount={7} picture={require("./assets/peanuts.png")}/>  
      </ScrollView>
      </ImageBackground>
      
     <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
