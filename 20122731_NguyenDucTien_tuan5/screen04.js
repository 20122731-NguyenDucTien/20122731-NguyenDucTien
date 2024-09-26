import React, { useState } from 'react';
import {View, Text, Image, Button, StyleSheet,TouchableOpacity } from 'react-native';

export default function ForgetPasswordScreen() {
  return (
    <View style = {{ flex: 1 }}>
      <Image
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/9450/6742/84537f52002d52e74cd78ec1cc4f4b2e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cicihjlT-E-ir6yO3JYr0~qJ-SWqzUhmZbYshfHIQ2WGJe2VTcHCzzDJDMFmPG4dBvB-7eMnlhYFzZtRfOlLIEpOffZTrcxlyV23wC~w18A8j2E64RbrD6gofWjua12LUMI1JLYTQQj1j5r5CM7sCJIIpZZvmjrMiE2IXj75qteN1oN6CakuwHTb-nmfFmUNiBbm-IOQ8ye0lS2aIytc20xCIvBNEzj0rnrOkDMM3k~P-qj8Hq5N4hNCkYa3gyJindtBqlAQrTSN55lxBlhcqmf93BlQloiHghPb~nefS5A-hdu0v3seitkVTrGfy6eT9kew5yjAKIgvvNIafT9egg__' }} 
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
