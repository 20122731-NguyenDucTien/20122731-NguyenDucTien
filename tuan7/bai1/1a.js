import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,TextInput, Button } from 'react-native';






export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');
 
  return (
    <View style={{flex:1}}>

    <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
    <Text style ={styles.productTitle}>9:41</Text>
    </View>
    <View  style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
    <Image
    source={{ uri:'https://img.icons8.com/?size=100&id=86261&format=png&color=000000'}}style ={styles.icon}
    ></Image>
    <Image
    source={{ uri:'https://img.icons8.com/?size=100&id=GipX25zpk6Sw&format=png&color=000000'}}style ={styles.icon}
    ></Image>
        <Image
    source={{ uri:'https://img.icons8.com/?size=100&id=RWI7FmaJwq3A&format=png&color=000000'}}style ={styles.icon}
    ></Image>
    </View>



    </View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
    <Image
    source={{ uri:'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiPvQeynV6joYyVajxEkRP~XIRFb8DmujZUYD6U3Yi5lWQq3KxIfiDmToqmlRli3C4CwfMdl9LauuGnKk7u~4JnK1RKP12GP7CLXko3QQTPO7~vM4YTwcmjmQFQt2RHGq0EmB8fs-jZ9noOg200dAA3rQTQ70XoIm91v1zOH~q7ybIr14ZA7as~yPXsUkpLV4TMN~reSmCpbnPu~Vl93qnV-VWpF8BJh0ohOSUaDVl5zpdZLRyEqtw9i0rfvokru~uHO-0LabmaTRIzd3dhkhAeyQsfWZ5nbPIyU9nLZxvuUi8bO6OSWjma-aatpk0DjDRcaqa2LxsrlrTPR4YVmww__'}} style={styles.icon2}
    ></Image> </View>
    <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'center'}}>
    <Text style={styles.hight}>MANAGE YOUR</Text>
    <Text style={styles.hight}>TASK</Text></View>
    <View style={{flex:1 , justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'flex-start'}}>
    <View>
<Image source={{uri:'https://img.icons8.com/?size=100&id=12580&format=png&color=000000'}}style={styles.icon3}></Image>
</View>
<View>    <TextInput
          style={styles.input}
          placeholder="enter your name"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
</View>
    </View>
    <Button title="GET STARTED" color="blue" onPress={() => alert(`Login attempt with email: ${email}`)} />
    </View>



  )
}

const styles = StyleSheet.create({

  icon: {
    width: 12,
    height: 12,
    top :2,
    left: -3,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
    hight: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
    color:'#660099',
  },
    icon2:{
    width: 271,
    height: 271,
    top :1,
    left: 1,
    },
    input: {
    
    fontSize: 14,
    fontWeight:'bold',
    padding: 4,
    color:'#DDDDDD',
  },
    icon3: {
    width: 12,
    height: 12,
    top :2,
    left: -3,
    color:'#DDDDDD'
  },
  });

