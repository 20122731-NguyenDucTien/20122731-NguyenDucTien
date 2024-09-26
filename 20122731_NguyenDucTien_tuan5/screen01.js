import React, { useState } from 'react';
import {View, Text, Image, Button, StyleSheet,TouchableOpacity } from 'react-native';

export default function ForgetPasswordScreen() {
  return (
    <View style = {{ flex: 1 }}>
      <Image
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWRZ~YtrBuLiBI8gQGFfdPiLGihgjfsMQetW1RgxxWX8YIucyxXvnO8AC773C04bo~8taNUfm8K530XFpasyPrvwqyeqNeZkxN5U5KABYhLcRIxnFUUnLnd5M6X932V5VEAYSrJgLeUWcxpoVLsH8G3nAmoS3xfCZrr5LNZKd1El9L5HypPoHNMjwQy~PzHcVh94Skwmg7ZTtZlaUDVA60VCvbeY8YNYa6KumgYMOhEyjaviihhdrKhMPOQGSBD18dluOxt9bITAoyxuAGh3xcsMzCuLlVpAE5v02m2Zb9-xFsLOYA7UxZdGe8e4x61liBoFH567TgDZYYMQXDx0YQ__' }} 
        style={styles.icon}
      />
      <View>
      <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.rating}>★★★★★ (Xem 828 đánh giá)</Text>
      <Text style={styles.price}>1.790.000 đ</Text>
      <Text style={styles.oldPrice}>1.790.000 đ</Text>
      <Text style={{color: 'red'}}>ở đâu rẻ hơn hoàn tiền </Text>      
      </View>
    <View style={{ flex: 1 , width: '100%' , paddingHorizontal :10, alignItems: 'center'}}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Chọn Màu')}>
        <Text style={styles.text}>
          4 MÀU - CHỌN MÀU
        <Text style={styles.arrow}>{'>'}</Text>


        </Text>

      </TouchableOpacity>
    </View>

      <View style={{ flex: 1 , width: '100%' , paddingHorizontal :10}}>
        <Button title="CHỌN MUA" color="red"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  icon: {
    width: 301,
    height: 361,
    top :-2,
    left: 5,
  },

});
