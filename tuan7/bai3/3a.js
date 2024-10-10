import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button, TextInput } from 'react-native';

  const colors = [
    { name: 'gray', hex: '#D9D9D9' },

  ];


export default function App() {
 

  return (
    <View style ={{flex :1, backgroundColor:'#DEE1E6'}}>
    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
    <Text style ={styles.productTitle}>Welcome to Cafe world</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/d676/cb1a/cf7473f16b029a5683363d6a96c8daeb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YY~IVCPJhzhLbb-3NgAJI57WvStL7B8WlhoQM3r3xLfUgdKH1iyE~hcyxPcKydDjs3vxUDPnHPQsBkRVIuu3IWAERzgTA660gpRNfEMNZ0m9b6LqC7JLZqLaykiyL9lt3MmxuYrgdN0A7CAjknM-Y5ZB-ly7-ksx9THOH30DHBf7hNb9U0fARzsmmFcGdqVJauVLoEcOrFjRsUUjwA0LfOladwK7TbNJCXCUjQh6GI0tYBwiz857iplQ2Krxqf8b4URqO6DD7Xu8EhF6Mfsqv8gytZ1SJunjcGzuyB8x0foLAkLcEZlgo05WY-AEi0kWPycJ2eKs~XBAm-xUHM~nbA__'}} style={styles.icon}
    ></Image>
    </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/c2ce/a278/dfbb52e32e73fb31128ce70ef7e29ff5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkM4r2X5l9JIR6ttzTcwcRBHK2dYwhjRiZvNAe7UUtuDWy9rFuj5HWcYnfBRZON04OEoREts3HlD~ZGuDcsz-xf4TJqAX0qiyG2~BdWfH5EhAgJqTbZf-n0PjvSwgUzOW9nsMwxOa3vaVtGffn2DIdI3Eon46NUzHf74FIH8wzfix99x4q-ClqOAw9gmN8RsjZA-NKjZQU52KGKgQ9xe7fD6iPMN8uoSjzn15gpIjCAM3TCjjwJLQmd1iRwyU17QoClX785FD2l4I7AnlHPBmHBZnj1sJi2X3eKKBe3TnPTogcy3OJP4MxaEAvCEW8ezuapU-WYqzgaIWsmPPWUgYQ__'}} style={styles.icon}
    ></Image>
    </View>

        <View style={styles.icon2}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
              onPress={() => handleColorSelect(color.name)}
            />
          ))}
    </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'center' , }}>
    <Button title="GET STARTED " color="#00BDD6"  />

    </View>
</View>


  )
}

const styles = StyleSheet.create({

  icon: {
    width: 200,
    height: 62,
    top :-2,
    left: 5,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,

  },
    icon2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  colorBox: {
    width: 200  ,
    height: 76,
    marginVertical: 5,
    borderRadius: 1,
  },

  });

