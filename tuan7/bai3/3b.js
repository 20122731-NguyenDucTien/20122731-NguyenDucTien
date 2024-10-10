import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button, TextInput } from 'react-native';

  const colors = [
    { name: 'gray', hex: '#D9D9D9' },

  ];


export default function App() {
 

  return (
  <View style ={{flex :1, backgroundColor:'#F3F4F6'}}>
<View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
  <Image
  source = {{uri:'https://img.icons8.com/?size=100&id=1806&format=png&color=000000'}}style={styles.icon}
  >
  </Image>
  </View>
    <View>
      <Text style ={styles.productTitle}>Shops Near Me</Text>

  </View>
  <View>
  <Image
  source = {{uri:'https://img.icons8.com/?size=100&id=7695&format=png&color=737373'}}style={styles.icon}
  >
  </Image>
  </View>
  </View>

<View style={{flex: 1,justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>


  <View style={{flex: 1}}>
  <View>
          <View style={styles.icon2}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
              onPress={() => handleColorSelect(color.name)}
            />
          ))}
    </View>
  </View>


  <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://img.icons8.com/?size=100&id=3061&format=png&color=000000'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle2}>Accepting Orders</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://img.icons8.com/?size=100&id=16153&format=png&color=000000'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle3}>5-10 minutes</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/91d6/b868/7d6ce3fa602609825eb32b2b2fd3d65e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipEFwknDPwcfmR~DazwjhtuM4QUSac537GzXnXKhVI5tcEawdb05SqHApVSuWVNcD4IHPpqpkxsy9vDkGSetyyK1LjUG5P98DnevNU7mO3Pr1cUAJdwkf-lO6QL~JqHogUpoTJ~fP4WdRKRlVltDOn1al3xMui1yQt9UM~QwJXk5oJuAdsOPCAkOhFiq7sZxUNlOIqVE8rIeT3afnBo3P9Rx2k5aFvkFc7mCYBVdg-TBtu3sM3s~NS8HYEYVGQoYj9sDy44gG3Ga~Z1h6eTaORIe5PfieZ-3GLEgwvsoqM2PXy3aZTyOKpk08JeC21ebGG8XhzvN4nNgy~b-CO1EYQ__'}}style={styles.icon3}
  ></Image>
  </View>
  </View>
  </View>
  <View style={{flex:1}}>
        <Text style ={styles.icon4}>Kitanda Espresso & Acai-U District</Text>
  </View>
    <View style={{flex:1}}>
        <Text style ={styles.icon5}>1121 NE 45 St</Text>
  </View>
  </View>
</View>



<View style={{flex: 1,justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
  <View style={{flex: 1 }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/d676/cb1a/cf7473f16b029a5683363d6a96c8daeb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YY~IVCPJhzhLbb-3NgAJI57WvStL7B8WlhoQM3r3xLfUgdKH1iyE~hcyxPcKydDjs3vxUDPnHPQsBkRVIuu3IWAERzgTA660gpRNfEMNZ0m9b6LqC7JLZqLaykiyL9lt3MmxuYrgdN0A7CAjknM-Y5ZB-ly7-ksx9THOH30DHBf7hNb9U0fARzsmmFcGdqVJauVLoEcOrFjRsUUjwA0LfOladwK7TbNJCXCUjQh6GI0tYBwiz857iplQ2Krxqf8b4URqO6DD7Xu8EhF6Mfsqv8gytZ1SJunjcGzuyB8x0foLAkLcEZlgo05WY-AEi0kWPycJ2eKs~XBAm-xUHM~nbA__'}}style={styles.image}
  ></Image>
  </View>


  <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/e4f4/1fb3/2803c67a3dd00a6bec53b45c7edf87f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fpo7SAtFPyR0R~oKEB22FWl9ubEca-~CdtEV3d~tuUgZ0e7SS1eYpvhetEo-hokIYzfWcdNoR9dnhQk-TK3SCof2jFwvv1qN7zznKCqqP0HoSDs2GSj7IexVYffqkq3vB1gjmIhQapxxm7Jy2JEMbwh1HC3UMxOrqTwZxi6lLtrt6CORdCtP~xvF1qRG3SdPnd3ghOsDsgpDNJh9sOPUjfAo-~YKvFGdINBdAvagaBy0fEAyYhQkEbxmrU695w3xuAlgNFqqW6WJv0UzgvbP4IAlIbEI~2AeA18IkUw1biv6nx3z2qOVqbxAkzTmtoheAGHkWezAFnIcP0GaCLtE8Q__'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle2}>Tempory Unavailable</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://img.icons8.com/?size=100&id=16153&format=png&color=000000'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle3}>10-15 minutes</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/91d6/b868/7d6ce3fa602609825eb32b2b2fd3d65e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipEFwknDPwcfmR~DazwjhtuM4QUSac537GzXnXKhVI5tcEawdb05SqHApVSuWVNcD4IHPpqpkxsy9vDkGSetyyK1LjUG5P98DnevNU7mO3Pr1cUAJdwkf-lO6QL~JqHogUpoTJ~fP4WdRKRlVltDOn1al3xMui1yQt9UM~QwJXk5oJuAdsOPCAkOhFiq7sZxUNlOIqVE8rIeT3afnBo3P9Rx2k5aFvkFc7mCYBVdg-TBtu3sM3s~NS8HYEYVGQoYj9sDy44gG3Ga~Z1h6eTaORIe5PfieZ-3GLEgwvsoqM2PXy3aZTyOKpk08JeC21ebGG8XhzvN4nNgy~b-CO1EYQ__'}}style={styles.icon3}
  ></Image>
  </View>
  </View>
  </View>
  <View style={{flex:1}}>
        <Text style ={styles.icon4}>Jewel Box Cafe</Text>
  </View>
    <View style={{flex:1}}>
        <Text style ={styles.icon5}>1145 GE 54 St</Text>
  </View>
  </View>
  </View>
  
  
  
<View style={{flex: 1,justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
  <View style={{flex: 1 }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/c2ce/a278/dfbb52e32e73fb31128ce70ef7e29ff5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkM4r2X5l9JIR6ttzTcwcRBHK2dYwhjRiZvNAe7UUtuDWy9rFuj5HWcYnfBRZON04OEoREts3HlD~ZGuDcsz-xf4TJqAX0qiyG2~BdWfH5EhAgJqTbZf-n0PjvSwgUzOW9nsMwxOa3vaVtGffn2DIdI3Eon46NUzHf74FIH8wzfix99x4q-ClqOAw9gmN8RsjZA-NKjZQU52KGKgQ9xe7fD6iPMN8uoSjzn15gpIjCAM3TCjjwJLQmd1iRwyU17QoClX785FD2l4I7AnlHPBmHBZnj1sJi2X3eKKBe3TnPTogcy3OJP4MxaEAvCEW8ezuapU-WYqzgaIWsmPPWUgYQ__'}}style={styles.image}
  ></Image>
  </View>


  <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/e4f4/1fb3/2803c67a3dd00a6bec53b45c7edf87f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fpo7SAtFPyR0R~oKEB22FWl9ubEca-~CdtEV3d~tuUgZ0e7SS1eYpvhetEo-hokIYzfWcdNoR9dnhQk-TK3SCof2jFwvv1qN7zznKCqqP0HoSDs2GSj7IexVYffqkq3vB1gjmIhQapxxm7Jy2JEMbwh1HC3UMxOrqTwZxi6lLtrt6CORdCtP~xvF1qRG3SdPnd3ghOsDsgpDNJh9sOPUjfAo-~YKvFGdINBdAvagaBy0fEAyYhQkEbxmrU695w3xuAlgNFqqW6WJv0UzgvbP4IAlIbEI~2AeA18IkUw1biv6nx3z2qOVqbxAkzTmtoheAGHkWezAFnIcP0GaCLtE8Q__'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle2}>Tempory Unavailable</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://img.icons8.com/?size=100&id=16153&format=png&color=000000'}}style={styles.icon3}
  ></Image>
  </View>
  <View>
        <Text style ={styles.productTitle3}>15-20 minutes</Text>
  </View>
  </View>



  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
  <View>
  <Image
  source={{uri:'https://s3-alpha-sig.figma.com/img/91d6/b868/7d6ce3fa602609825eb32b2b2fd3d65e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipEFwknDPwcfmR~DazwjhtuM4QUSac537GzXnXKhVI5tcEawdb05SqHApVSuWVNcD4IHPpqpkxsy9vDkGSetyyK1LjUG5P98DnevNU7mO3Pr1cUAJdwkf-lO6QL~JqHogUpoTJ~fP4WdRKRlVltDOn1al3xMui1yQt9UM~QwJXk5oJuAdsOPCAkOhFiq7sZxUNlOIqVE8rIeT3afnBo3P9Rx2k5aFvkFc7mCYBVdg-TBtu3sM3s~NS8HYEYVGQoYj9sDy44gG3Ga~Z1h6eTaORIe5PfieZ-3GLEgwvsoqM2PXy3aZTyOKpk08JeC21ebGG8XhzvN4nNgy~b-CO1EYQ__'}}style={styles.icon3}
  ></Image>
  </View>
  </View>
  </View>
  <View style={{flex:1}}>
        <Text style ={styles.icon4}>Javasti Cafe</Text>
  </View>
    <View style={{flex:1}}>
        <Text style ={styles.icon5}>1167 GE 54 St</Text>
  </View>
  </View>
  </View>
  
  <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center', flexDirection: 'center' }}>
  <Image 
  source={{uri:'https://s3-alpha-sig.figma.com/img/ea72/590f/9955a70f3be365090f35e5aab062048d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hJ41quwqkSech4HBXU3IMEtQRnit6lm2Zhl6CXatQ0iu0evwLmcPaKt3jPE8jMmeVr2YMr4DeCb12MSQTA9WOXiMa0zPROZYHP~2n1Y7A0YMv6GHvBJEwgJeYCszdTB5IKWQqrXbYOG6EX6VuOyUOO7Wxmr4YmWGRWna0UPt8y5o3j4ZkWBsneHxGXYMPku~OgZ-VCRjkl~0RgSJ5Q2HK~MIOw1duElQuB7d7OG3s9XK26o4kx~prV1gU~vKOcl-rgi3J1Mp7QoG2NpB8S0aCHrAH3K7QeErGeqRKVfCFFM08Vj~jZAXq1ax0Y~-60Isr~ym70yu7OJtSOepmzrmcg__'}} style={styles.image}></Image>
  </View>
  
  </View>



  )
}

const styles = StyleSheet.create({
    image: {
    width: 220,
    height: 76,
    top :2,
    left: 5,
  },
  icon: {
    width: 30,
    height: 30,
    top :2,
    left: 5,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,

  },
    productTitle2: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 12,
    color:'#1DD75B'

  },
      productTitle3: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 12,
    color:'red'

  },
    icon3: {
    width: 14,
    height: 14,
    top :2,
    left: 5,
    color:'#1DD75B'

  },
      icon4: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 12,
    color:'black'


  },
        icon5: {
    fontSize: 12,

    marginLeft: 12,
    color:'gray'


  },
    icon2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  colorBox: {
    width: 220  ,
    height: 76,
    marginVertical: 5,
    borderRadius: 1,
  },

  });

