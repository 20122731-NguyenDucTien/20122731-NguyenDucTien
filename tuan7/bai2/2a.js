import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button, TextInput } from 'react-native';




export default function App() {
 

 
  const [food, setfood] = useState('');


  return (
    <View style ={{flex :1}}>
    <View>
    <Text>Welcome,Jala</Text>
    <Text>Choice you Best food</Text>
                <TextInput
              style={styles.input}
              placeholder="search food"
              keyboardType="food"
              value={food}
              onChangeText={setfood}
            />
    </View>

    <View style={{ flex:1  ,justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>

    <Button title="DONUT " color="#F1B000" />
     <Button title="Pink donut " color="#C4C4C4"  />
    
    <Button title="floating " color="#C4C4C4"  />

</View>
    
    <View style={{ flex :2, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'pink', flexDirection:'row'}}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/c9d1/39c5/85ab3ff232f0393dadc123479bf3e593?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVaPekJXeqC09g0ZzT3SuEwX74bJgt8ULvWWHXIVY7VPcWXh5JOF~mojTqNSXezdgUukWp5pvT78xcHtXuaHwMPonS6jmf3TVMiZccynLTcIofNoEpCIT1AZd1EVkhEOvvUx4vuLGx-BzjZtOzKefQ9gg~fSRieFYEEoebG2a~r-DyKTmL9in8q6kDd2BOnAddbpj6c5CoGfY0j49DoFbLs6BlGhyTMV5XZHMK~j4LDsxSs1uFD7xH5I0CPfMMS0e1z41KVjiylzQ8h9m-gSRy-MnEpGFVEvL8LXuxRgcwgP6jEY4OhCUKil6O6oXFomRbW8gFXrU9sZG8cJ83t7Qw__'}} style={styles.icon}
    
/>

<View>
<Text style={styles.productTitle}>Tasty Donut</Text>
<Text style={styles.hight}>Spicy tasty donut family</Text>
<Text style={styles.productTitle}>$10.00</Text>


</View>
</View>
    <View style={{ flex :2, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'pink',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/8774/97c9/b8e5d462310f9e9e7306b875da0066c1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMvnQA5pYwZpYOq4vEqZ6tEcRXraCxede6gde7xsXtjbcaWkE6rzjGgGYmNCrqSk~0vEzhWPBkyCqkBspf74aufUGA7mIqoOTYHG~LdgZif0nZKRFKqRZtLgHFp~AZFIj9pKJz5Ti94wtSt1~aXom0kxVzetTf1FgY3y86JCA9lcrb1-RYIsGlYOvhPkSoefKyfUf1FxyY~ZczB1DHHa5SOzLLLwvEgxDTNpnpKNCOyThE0za4a0AIlElV8OQ0Jb1GLZcbJ6u9hffv2NPAvdG-ggjd6SbqlF1Qoo~fRz1R4WZAH1bBjV2FN731iYMU6reNVNu1qI0Tyzoyd6WwGPrg__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>Pink Donut</Text>
<Text style={styles.hight}>Spicy tasty donut family</Text>
<Text style={styles.productTitle}>$20.00</Text>

</View>
</View>
    <View style={{ flex :2, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'pink',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/066f/14c6/d5a5c8550fa84d066faa5ca6925eee5d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6rrUk8AA9D9KA3-v5lXuea74cupX2zbNNZfC8E875hB6BJ1tES2DY0lt~ud9Sk9AbHYDFHIuNiSKGu7cWepkfuYhpfbn8r2r0kIsVGeTVufQQE99VWy4tYXDZluJmzF8SHLp-btjMau3~XbHeasUElBEdHtebE~VqvvSoo7Gpz3NNe2NBC5KU2S4sj6NCKHM2A1gif2zr663XBnUA0Aj0t3-fna1FmOSrCScVijVJy5-7K3olTD~lkfWWfh9hQzlJpGDYEDmloqmtVkkDj9i7r16eHXdkVLP6AL3YdAXSbZJV-rrKikGYFW9axtSkuaZWkn83ox69Ag45Nb-~6E0A__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>Floating Donut</Text>
<Text style={styles.hight}>Spicy tasty donut family</Text>
<Text style={styles.productTitle}>$30.00</Text>


</View></View>
    <View style={{ flex :2, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'pink',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/7464/ccf2/7b800e338cacb2d4fca887f25a0eb423?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyIlCYRNmcHi3jRBTUh4MS5wgmx~O2yLBQW-wszJy0oXfGTfujeONEfeo5XPp8PMzw2D03TBAstQ09-wT5pX3NeOnRRdVget38W3BDoyJhplB3nRsw4cJIoAM~1hrPnDjEJ7iDwGByxM2rl1BvpF~ez1hVAAH27hA3XuTsunJ7vr~lDl4-QWkN3uMKyCZGfjVnrx24OWDpjeLnpdNYHzJ~MHq4EYd1jjloK~Hl9AogppCWmeDa47iZzFxDhnk5DRfPF6rCfIPKRu0JukUqtVSwLBoFGc~x~TEiNsV0dZh6n-bhZzfHhDtVbGYDwDKOecw0Ba-F22WBeuRPbDWDHC3Q__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>Tasty Donut</Text>



</View></View>

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
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
    hight: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
    color:'red',
  },

      input: {
    fontSize: 14,
    padding: 4,
    color: 'gray',
  },
  });

