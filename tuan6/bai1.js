import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,Button } from 'react-native';


const DATA ={

}

export default function App() {
 
  return (
    <View style ={{flex :1}}>
      <View style={{ flex: 0.7, backgroundColor: 'blue', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=357&format=png&color=000000',
          }}
          style={styles.icon2}
        />
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Chat</Text>
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=cIzsD9VTMVOe&format=png&color=000000',
          }}
          style={styles.icon2}
        />
      </View>
    <View style={{ flex:1 ,justifyContent: 'center', alignItems: 'center', backgroundColor:'#E0E0E0'}}>
    <Text>bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text></View>
    
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0', flexDirection:'row'}}>
    <Image 
    source ={{uri:'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__'}} style={styles.icon}
    
/>

<View>
<Text style={styles.productTitle}>ca nấu lẩu, nấu mì mini...</Text>
<Text style={styles.hight}>SHOP DEVANG</Text>
</View>
</View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGSVCRBM-OyR5ykjE0~Jz6EwVb65SzPI9Yzn6LEgzHCOThAvjOOfReEgYW1hiv0MzzYMpYm3m~KURCx0OdveAsj2mhnnOz1C-yuSNAz-JFpaAHvAOiFMy7oil98VudQWNR60YvwOaJBmnaQEepxcUwCC4efWXypp5YldhE8RzeIWUlr4MgrcSADBtEmjxFcQvAMTP18o7MNQenlfK9aSryPmm1tg0kqgDUFXq~VSl5QX1hLx5pVSM4Rja9X7Q22lhpEo832yWox~M6C6Y2j8PN6BEmsvtWQ~TTb0eE0TwKw2FtrsVu6CL5NljJ0WgLvqt394jxGCSH92~zAfYcSUUg__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>1kg KHÔ GÀ BƠ TỎI... </Text>
<Text style ={styles.hight}>SHOP LTD FOOD </Text>
</View>
</View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngVv61KvYLuwfDqXVB~9pWl3vzTyjSk5qqO9BW73xl-zTYkL7d73C1-QF5bw5zQqU0d-MJGpt7iXezrH0sgqWVRXYN-RtR5ELhWh5DzdC8xkvMFJ7ReNyyNeU-xwfF3r-x-tQ-8NkI9nBDeqrKcQUuTwpyJODimt6Eyd-jyp9M9cew92UjtBNmXH85t1zbNX~HPfHTr643qx6KT1IPRtQH-Q1kGOQdFjjML71A9EKqKR3ncFmK-JrPXANbkP9Itn9laAg0qm8oUUqGPuvXWYZbbLSCoG~EeObFOSSzbxl5S3QMqb0Lnuv2TtFWmT7pC-hg2D-4ZoTiCqoqJdAR97vQ__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}> Xe cần cẩu đa năng </Text>
<Text style={styles.hight}> SHOP THẾ GIỚI ĐỒ CHƠI</Text>

</View></View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1vzvKjBJRPkyPrN~d7yaEUl~XfmwH4SFswQm0XlPNmVE77MOQ~ZVJUf3QJzq6F6elJFtXf6GjQUdjFeYJA0PS4XdfkIfdxcKj5zSt-Isf6JItVjMbZzP0OEuk9Yk4TpYRN-tsrKk6VmT8mQ0I7ywPb2HSoVOrR4X-3SFzhuxc2Rz0egnk~CAZRdKBuE5QqYGdbNNL3-g8WhxZvZGwg99Jj9AcpiiglSgfy~FXZCBGNPSq-QGMTr5ndu1jSscTYmpIqs3rvFrOUsVjI~KIeiquMkBxlMN9hU-m7abQ4Of5c8Pi1VExqwQpqhlBbja~dBq47-Ku~Qrb0p6-nQhPnpQw__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>đồ chơi dạng mô hình </Text>
<Text style={styles.hight}>SHOP THẾ GIỚI ĐỒ CHƠI</Text>

</View></View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXbqaFt2pvUo5DNAia~PINg5s8BE2xrLD6p~zeMjjD8zvAw-eo~B71pJ1ToMIsHdcSwpmGFetI2FgvbVGZEjZrd~FQ2ePhkWzHloW5G2HE8f3vW6s6TeTo~ZbHIf8ElbQr2H~4-MOutqwmYfz9zPnHKLtnNiJEipmN9KYo1b9rIlK3o3cc16k9wm-FaRWHHPrSzyAkQ-DFwOdOVAfi~gfpvSnr6hkywxrP9De~Oux9EPmlyU9RcvqPE9uO8O6RVgxg02Y4I4PkEowXW0xJWQpeUGDRuBeH~YDZe9BVC~TODvuG3lVMiTVLfP8l9cPArA0YNZVzhtfHnAY1NsCk6pPA__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>Lãnh đạo đơn giản</Text>
<Text style={styles.hight}>SHOP MINH LONG BOOK</Text>
</View>
</View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jAXIrKI2oXPQjv1QPcrPEouZAfPVHPeu~F69yN71iTvuT3AvfDZeRIC1WhIayK5lUt7bd6b3a-h7cROoLIQnZdDRacmbCQUVTiAP9loC5hZRatZ9muLcPs5YUN0Kfj9QTcwq8l-oFnIkT4PwXW97B-z8BDOcMDBnRBHTiY3C31XWXi5AhJcu~3znYWEHqd63Kfg8PYmQjjz4jPvu6y3fmnod-TaIFrSfEvn0cmMWSUjMpS2w2-3HCq29fTZ0Rq9QxmlL4ucY~pMJQgMvXX~cvp980ka~zOLmpvYmeOUR0MFdeyBmq9YvMoJLyHhHbI4v8Ymke9PNxxdY25ErPXJQDQ__'}} style={styles.icon}
/>
<View>
<Text style={styles.productTitle}>HIỂU LÒNG CON TRẺ</Text>
<Text style={styles.hight}>SHOP MINH LONG BOOK</Text>
</View>

</View>
    <View style={{ flex :1, justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#E0E0E0',flexDirection:'row'}}>
    <Image
    source ={{uri:'https://s3-alpha-sig.figma.com/img/2b9d/ea9b/4d819d9ee3f8aa713e6c7da6f9a8cbab?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhuOBpz78ffYuG4OITPKtG7nWoqZMVstPwArPmdMS8CgwwdH1cTx~BXkcauKF8QFTh~QEBbSEcwhOOjSKwdswFiB~E1AC3GABQJyqCMIuySpu08SIUEs90xj2~sb61gWdk716XeNrOiBiV52BMVeH6HK9~XpmwWVMM1QSKFF7a95QzYmJZjYjXHdwXMnw3Py4fv-zZfJLQIEkquN87zVFtDNnB6iXDUIGLSrkOJhn95fQ-Emp~IwA~esUHzPYv7izEHNrN7qtEaI90XcmVUu1-dWym~toWbMN5a5Z9CZXQOIPVsKSg6u94k-3ESPdafgViIkWBtQDLjItiFngP0KsQ__'}} style={styles.icon}
/>
<Text style={styles.productTitle}>DONAL TRUMP THIÊN TÀI LÃNH ĐẠO</Text>


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
    icon2:{
    width: 40,
    height: 35,
    top :-2,
    left: 5,
    },
  });

