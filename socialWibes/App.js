import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.comments}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Comments</Text>
            <Text style={styles.close}>X</Text> 
          </View>
        
        <View style={styles.messageContainer}>
        <Image
          source={require('./assets/images/me.jpg')} // Replace 'your-image.png' with the actual image file name
          style={styles.image}
        />
        
          <View style={styles.messageDetails}>
            
            <View style={styles.messageTime}>
              <Text style={styles.messagePerson}>Martin</Text>
              <Text style={styles.timeStamp}>20 min ago</Text>
            </View>
            
            <Text style={styles.messageText}>Hello how are you</Text>
      
              <View style={styles.reply}>
                <Image
                  source={require('./assets/icons/back.png')} // Replace 'your-image.png' with the actual image file name
                  style={styles.icon}
                />
                <Text >Reply</Text>
            </View>
          </View>
        </View>

        <View style={styles.messageContainer}>
        <Image
          source={require('./assets/images/klaudia.png')} // Replace 'your-image.png' with the actual image file name
          style={styles.image}
        />
        
          <View style={styles.messageDetails}>
            
            <View style={styles.messageTime}>
              <Text style={styles.messagePerson}>Klaudia</Text>
              <Text style={styles.timeStamp2}>10 min ago</Text>
            </View>
            
            <Text style={styles.messageText}>I'm good thank, you?</Text>
      
              <View style={styles.reply}>
                <Image
                  source={require('./assets/icons/back.png')} // Replace 'your-image.png' with the actual image file name
                  style={styles.icon}
                />
                <Text >Reply</Text>
            </View>
          </View>
        </View>
       
        
      
        
        <TextInput style={styles.textInput} placeholder='Add a comment'></TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  comments: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  text: {

  },
  textInput: {
    marginTop: 20,
    borderColor: 'black',
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    padding: 5
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'relative', 
  },
  header: {
    fontSize: 30,
  },
  close: {
    fontSize: 30,
    position: 'absolute',
    right: 0, 
    top: 0, 
  },
  messageContainer: {
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageDetails: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  messageTime: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStamp: {
    fontSize: 10,
    position: 'absolute',
    right: -100,
    top: 0, 
  },
  timeStamp2: {
    fontSize: 10,
    position: 'absolute',
    right: -80,
    top: 0, 
  },
  messagePerson: {
    fontSize: 25,
    color: '#3eb8c1',
  },
  messageText: {
    marginLeft: 10,
    fontSize: 15,
  },
  reply: {
    marginLeft: 10,
    flexDirection: 'row'
  },
  image: {
    width: 50, 
    height: 50,  
    borderRadius: 25,
    borderWidth: 2, 
    borderColor: '#3eb8c1'
  },
  icon: {
    width: 10, 
    height: 10,
    marginRight: 10  
  },
});
