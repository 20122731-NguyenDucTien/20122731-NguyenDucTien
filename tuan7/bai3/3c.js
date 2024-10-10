import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button, TextInput } from 'react-native';

  const colors = [
    { name: 'gray', hex: '#D9D9D9' },

  ];


export default function App() {
 

  return (
  <View style ={{flex :1}}>
<View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
  <Image
  source = {{uri:'https://img.icons8.com/?size=100&id=1806&format=png&color=000000'}}style={styles.icon}
  >
  </Image>
      <View>
      <Text style ={styles.productTitle}>Drinks</Text>

  </View>
  </View>

  <View>
  <Image
  source = {{uri:'https://img.icons8.com/?size=100&id=7695&format=png&color=737373'}}style={styles.icon}
  >
  </Image>
  </View>
  </View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View >
          <Image
          source={{uri:'https://s3-alpha-sig.figma.com/img/b7f5/1b9a/6f7b8014cb2b6b0bf6f93c0f05192848?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D22-DJgyB~KLTlUDJSrI8mTJ5V2W8B-KveFKLC6Kz5gCqAeqqNA4T3T~jZ4Qo5N-OJQzZ1VUoiOJsGhBfnO-sCNe44rnLo5b6vrdxAcYI-Jrw4fMWefd~fXkV6R9DXKZehpLYvB~vG2s77e9AQdnLFxhP5r4eY9UhL3WGHx9KiFfDrhlOI357vfEgmSV4Lw8wurTdNWOXpOyP6~WYV0~b19QuRkLNzyazdabAONbKP3fhcxe3hDhcotftQE1JU8LLYE2PBa4A8H8ROA8RlmxMzY5pOryLWOmJ77K6hDlIEgyLliDcjs3NMBJmdIKVibLpCZkqMEr1ufTeaPJwdx7~w__'}}style={styles.icon5}
          ></Image>
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View style={styles.icon4}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
            />
          ))}
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>



<View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>



        <View>
                  <Image
          source={{uri:'https://s3-alpha-sig.figma.com/img/5a2f/9f03/c0fb9391db5c9ec676eb05c330384587?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muuDsP3T-QXGnDIu66XP45E23G7ITiu9t3QXx1aS3Wx0Mzl9tBcq3Q5TWH6nwJMv6KgjGcKO4deE2EdgOna8KQc6o1kdZw6dnbX1zQVNLLpS7vjcAAlSHeYU9LWaG5fi~S1TGOQsBAZhGIBBu9CQzJVsKOwICTfRqeVpICrlKc0TIFCDJQLXLYpnt9zeQI100OKr6mvKnlamDP0QmeVegVzAbypn64eZOl8Q45JPglAn2zGCdlKY14agYjnGI4TWR262gHUICS7p9w39pfVUPg5Qjm~nUdkFiBAdRhZChA2xYxXGnwbWEJyON8LKoCBV36FitD~t7D9xR8dXmPdlHA__'}}style={styles.icon5}
          ></Image>
    </View> 

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'center' }}>

    <View>
    <Text> Milk</Text>
    </View>

    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
    <View>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=398&format=png&color=000000'}}style={styles.icon3}></Image></View>
        <View>
    <Text style={styles.productTitle2}>$20</Text>
    </View>
</View>

</View>


<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/29e9/d670/8976505b51b59b051cc3638f73dee3ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-96Epg4Bi587N23PUwStn9b8ibzwFH~SNXM5d6wMNV1vhc1eZcZDORgJ3KQwHYbv9n25gKM0Mt8tmiXvEQUjvBFm39W2cHF9eUp1I~53txqSpeO-7X1WbRqLWacjS82KggH7PvAbkcO2S9LPbvYZYAm~GwCzGlprpr1NMYzBUZyNO3TDE3D0AhdeQmPPT6bVvgas9HZA5ZOanYe~Dls1jItQ22kIwg8DaXHBmFhYXOgdCqjSFR0G4ZJQoK18mqOxLgeMa~VPCZnWIfz~HqGROztSI8RjlPHb~FmDR6YdtPIXDzQa5hPuKAT0pJx8nenGJt~5PDzKXsqxmc5Vjj5vg__'}}style={styles.icon3}
></Image>
</View>

<View>
<Image
source={{uri:'https://s3-alpha-sig.figma.com/img/b72b/6a60/bdbd9c152ad3824b8e54a8e2e853d973?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aahbZwRvHH7ZQnwaavPfQS0Q3GZv9zq218TVkuR0ZkOVjreBfHqnuxO6XGAYEqnzGZEasRX0oy57KzdTSyz62Sl3r97NsqjvJlE8~yn3yjFBoqyO~BurwZl13XFRqEilV~pWTpSwqfjI4HjFnOfeegjm-Gx-lHujmfCPMI0Ihd9sU7kUR0~WG-u43MevULeOkHjIH460TMMY7hLGeyQWWZiLYmD1RtqK537UMqnBgAx0nKUJlRFhOerZe-T7WWFjCTRjUFJg2pb2z1taHjJ37rEW5MFb34d8G195t~OAXgSgiceFwEJO8ceGbordUXTUatoki9~qlPRpuekFKCZRxA__'}}style={styles.icon3}
></Image>
</View>
</View>

</View>


<View>
    <Button title="GO TO CART" color="#EFB034" />
</View>


</View>



  )
}

const styles = StyleSheet.create({

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
    marginLeft: 12,
    color:'gray'

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
    width: 60 ,
    height: 60,
    marginVertical: 5,
    borderRadius: 1,
    left :11
  },



  colorBox: {
    width: 60 ,
    height: 60,
    marginVertical: 5,
    borderRadius: 1,
  },

  });

