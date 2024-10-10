import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button, TextInput } from 'react-native';




export default function App() {
 

 
  const [food, setfood] = useState('');


  return (
    <View style ={{flex :1}}>
      <View style={{ flex :5, justifyContent:'center',alignItems:'center', flexDirection:'center'}}>
      <Image
      source = {{uri:'https://s3-alpha-sig.figma.com/img/f4bb/d8bb/1ccc70a10e0c339f3ab84785895ebb7f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=it2555NJS5E0nFokJ2XrN-qm2If9XoZ-YZa1S3fK3crL-hFuQZtHBB43KJsaS1O4Ayfn45Dx1k4SQDXNviNxphxMuysCg5Ccs25a2BjF-HKRdZdEko93YK38tI7jelZgiUGrzDDgmsqEb~6cM5eb40DWdxg-tltVCQltw00vmsAu47~8~JbWQdDOtv3VspQsAOPdq3GFVuz0skNzQQ~K36hH79UbH1XwChd2yv2B9sJA4agZ1JP9T1HIffXEie99Ewtk-0OV7qF4UAIMpeQkSa8EF1RJg-UBfwipisyWLxTQ7xEjGcnPAlXEx26p6tQkIacV6Lcj8rnWFuHEtuSNkw__'}} style={styles.icon} />
      </View>

      <View style ={{flex:1}}>
      <Text style ={styles.productTitle}>Pink Donut</Text>
</View>
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row'}}>
    <View>
          <Text style ={{color:'gray'}}>Spicy tasty donut family</Text>
    </View>
    <View>
          <Text style ={styles.productTitle}>$20.00</Text>
    </View>
    </View>
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row'}}>
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
        <View>
      <Image
      source = {{uri:'https://img.icons8.com/?size=100&id=ljkZKAqMoIYA&format=png&color=000000'}} style={styles.icon2} />
    </View>
    <View>
          <Text>Delivery in</Text>
          <Text>30 min</Text>
    </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row'}}>
    <View>
    <Button title="-"></Button>
    </View>
    <View>
    <Text>1</Text>
    </View>
    <View>
    <Button title="+"></Button>
    </View>
    </View>
    </View>

    </View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start', flexDirection:'flex-start'}}>
    <Text style ={styles.productTitle2}>Restaurants info</Text>
      </View>
          <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start', flexDirection:'flex-start'}}>
    <Text>
Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
      </View>
      <View style={{ flex :2, justifyContent:'center',alignItems:'center', flexDirection:'center'}}>
      <Button title="Add to cart " color="#F1B000" />
      </View>

</View>


  )
}

const styles = StyleSheet.create({

  icon: {
    width: 232,
    height: 238,
    top :-2,
    left: 5,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,

  },
    icon2: {
      width:20,
      height:20,
      marginLeft:5

  },
  productTitle2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 12,

  },

  });

