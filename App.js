import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}>
        
        <Image
          style={styles.image}
          source={require('./pic.jpg')} 
         
        />
        <View style={styles.boxTextContainer}>
          <Text style={styles.boxText}>Mateke Mpholle</Text>
          <Text style={styles.subText}>This is My Facebook account created by me in  2017</Text>
          <Image
            style={styles.subImage}
            source={require('./photo.jpg')} 
            
            
          />
          <View style={styles.iconContainer}>
            <AntDesign name="like2" size={24} color="black" />
            <EvilIcons name="comment" size={24} color="black" />
            <FontAwesome name="share" size={24} color="black" />
          </View>
        </View>
      </View>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    position: 'relative', 
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    margin: 10,
    paddingLeft: 5, 
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  boxTextContainer: {
    justifyContent: 'center', 
  },
  boxText: {
    fontSize: 16, 
  },
  subText: {
    fontSize: 12,
    marginTop:0
  },
  subImage: {
    width: 280,
    height: 400,
    marginTop: 30, 
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 10, 
  },
  
});
