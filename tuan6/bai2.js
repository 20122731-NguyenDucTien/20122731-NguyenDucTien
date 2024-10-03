import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,TextInput } from 'react-native';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');
 
  return (
    <View style ={{flex :1}}>
      <View style={{ flex: 0.7, backgroundColor: 'blue', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=357&format=png&color=000000',
          }}
          style={styles.icon2}
        />
        <TextInput
          style={styles.input}
          placeholder="dây cáp usb"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=cIzsD9VTMVOe&format=png&color=000000',
          }}
          style={styles.icon2}/>
          <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=61873&format=png&color=000000',
          }}
          style={styles.icon2}
        />
      </View>

    <View style={{ flex :3, justifyContent:'space-around',alignItems:'center',backgroundColor:'#E0E0E0', flexDirection:'row'}}>
    <View style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPUdpuLzS80-MM84HwY~u2mENrmM~nCCE2A2BtNzaESQK6iXKWKdl0lcw1kmlOR30OlNgrp5HBFibXJvac5wSVK3uOX2Y-6r7l0DkHMWUVSgdaPNSzDFArklv3sRrCiq~tCaGCHR3Qt6DnfOBogpiBipAD3VOJiJeuworflAKM-AjzWh-HirOSwh8CIk2YRsee1F9W1XygMsPXTdvob8cwAIptindOpgPreHEiXr4vQAmB1Ny-Eg9GptT6OYU3mbn6vpGxemO7IT03ortKayB5KF7gYEaMoQELKphlyg39PF5ElNDUOuyK93yTrMf~dZp42gRurt8By18Uwus6doA__'}} style={styles.icon}
    
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
<View  style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
<Image 
  source ={{uri:'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHbU~rXUMQVRseFi5hGIRixsAWJMULzX1LYYUmkef6TaRDTA4e7U5iWMJtq16xd4EdMAWdZWe3qEKUiDZXY4mDgTld0Xxy7NAlHxpx0XUsuxO9PGSXYZgSne0zxTQMlv6VYy47ufb8jrX8oDkZmymGhCH6J37NUsF~e5BX2AOP5qPpPiXnae05-~4YiG~Db8bLinj6o4yMogK532nf4JZ7d1iqowADl89lW2mtd0igZjluiygofIcawBSVZjTTD~Gy4gPcUMOxKCZ1sZMSNhd0Ci3dgAWAssBIrTtKq2s-Knlc6FjC0XnV8id8BckoJsd9BuNroyzQb-5yiQIq8cxg__'}} style={styles.icon}
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
</View>
    <View style={{ flex :3, justifyContent:'space-around',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <View  style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0694xEnJTkXd7L4homxA1TUUyo7o6TbXhRG3bLedGxMSehJTPfGg~114-zx8F35PdYEDNOD~~nGit81na-Brku3t6CiKdDe30faj5~P9ffPzLYSPPsJ2wFBGTqtzM-XJNDlAqmUEQdZJ0e~PzB1TbxmX5g-E57rAIjZS8mPUjPfcwf9P-glY7Ygpiew5X2yS-Ls8KKb1AWu0HI26P0mLUr1jozwsFPwIXHxpZOaxSfDqSsQGAXqHNYxMj5qLykGUbgCb566rWE7yeoGrCl3cq-UV1EZVKAqnGcaMA3qpUMaqQZMf-PUKXQsa5otK9D8drV3iTPC55ijS2YNSCZ-Tg__'}} style={styles.icon}
    
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
<View  style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
<Image 
  source ={{uri:'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lXVFRKl423z69fbZsqWxsDSMw4tTdPwPdtnD0S9hb4gp9H5hmQ4EwMGjmCqqKI37fQmzVl37EPxHbpfaf83OFX1gOaIBJTTfBBwesdhk-H6YKCaNHRvjGB26lV7kAqp-UgZs5KUtmabdcPGe1bFc3WI1SX45M3j8XrUTLcuaXR5U37JMgmrbKTfWzKfxf0us3XJlLhtNqAZrOFW9cbFyOKyEDh6blIxB4YcK9K1KAW7IIPfZCLrII5qNbFOWvkW2rme5WZYG6YP1piZqJ7o4T3Ybbr~eA0yIgwT3chuvR3Bo8V7cZxxNtYnhiZylBpK~uRA6QLBqVTDqcHj6Q3A7dA__'}} style={styles.icon}
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
</View>
    <View style={{ flex :3, justifyContent:'space-around',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <View  style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmmaYeW5Ca360KDEXO5I0V6dNpRG9WXXYU4rmAduzblWlrWS0hCqUxES5bOuOig4OqthsJL1Ov-aSbGi8iDkE5rvVGHxcxi4JZjiEZtJ43Vk5CVvMAae~3jveF8~yyuHGgoSA4ApCWdc-tmMV95t49kmcklAJJnSQi8PUwu9ZpxZr7VtwyXm7G8JS0DHxDlh0ykcZJJq4Tvj2LAA~LsTE0XVuWz2S06s4KOLMvxV1G6OYKWh6nEw8ZwAt9Sn0XU~I6-D~q~54SD5toQsn9kzhl4yB3oF2mtispUnKs2aqIZT54WHkglqWsE~4MCb~1Tz5N-TQMohy2AAkd~kUq3myA__'}} style={styles.icon} 
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
<View style = {{flex:1, justifyContent:'flex-start',alignItems:'flex-start',}}>
<Image 
  source ={{uri:'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsIIMCjz3h8Wo~-6F4q5tS41EJc586dIEYsirApP4s9HgWhbOFs4JfR8Cz5rAB0pW8xGXZX7chIlzkBUWV6M6BLwQZGXHyQ7eLSurcFNnw7T8dheG4odi6Tjrff3yKXymY3DMwTAThEowurSB~oz940P6LBsfmBFv-wG-vmfpyq-4~5QmROFaGq0FrngdnDCjtyDH-hjVCRs6ymD4DCs8FP1IAiPi8lOBOn38hWdXcE7dsU~kn-TKeyz7Je4DA~XvsrHA56E-vdKo1grSt6nuqAmBb50GDWMxDBHAYr7a3cnJd~FlY8nTeNZDEXUSV~SAZrG3RaFF6myOiY3wAkkAg__'}} style={styles.icon}
/>
<Text>cáp chuyển từ cổng USB sang PS2...</Text>
<Text style ={styles.star}>★★★★★</Text>
<Text>69.900 đ</Text>

</View>
</View>

<View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
  <Image 
    source={{ uri: 'https://img.icons8.com/?size=100&id=3096&format=png&color=000000' }} 
    style={styles.icon2} 
  />
  <Image 
    source={{ uri: 'https://img.icons8.com/?size=100&id=14096&format=png&color=000000' }} 
    style={styles.icon2} 
  />
  <Image 
    source={{ uri: 'https://img.icons8.com/?size=100&id=14899&format=png&color=000000' }} 
    style={styles.icon2} 
  />
</View>




</View>
  )
}

const styles = StyleSheet.create({

  icon: {
    width: 74,
    height: 74,
    top :-2,
    left: 5,
  },

    icon2:{
    width: 30,
    height: 25,
    top :-2,
    left: 5,
    },
      input: {
    fontSize: 14,
    fontWeight:'bold',
    padding: 4,
  },
        star: {
    fontSize: 14,
    color :'yellow',
    padding: 4,
  },
  });

