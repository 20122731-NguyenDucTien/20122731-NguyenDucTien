import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ForgetPasswordScreen() {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { name: 'Light Blue', hex: '#B3E5FC' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#1E3A8A' },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWRZ~YtrBuLiBI8gQGFfdPiLGihgjfsMQetW1RgxxWX8YIucyxXvnO8AC773C04bo~8taNUfm8K530XFpasyPrvwqyeqNeZkxN5U5KABYhLcRIxnFUUnLnd5M6X932V5VEAYSrJgLeUWcxpoVLsH8G3nAmoS3xfCZrr5LNZKd1El9L5HypPoHNMjwQy~PzHcVh94Skwmg7ZTtZlaUDVA60VCvbeY8YNYa6KumgYMOhEyjaviihhdrKhMPOQGSBD18dluOxt9bITAoyxuAGh3xcsMzCuLlVpAE5v02m2Zb9-xFsLOYA7UxZdGe8e4x61liBoFH567TgDZYYMQXDx0YQ__',
          }}
          style={styles.icon}
        />
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={{ flex: 5.5, backgroundColor: '#E0E0E0' }}>
        <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
              onPress={() => handleColorSelect(color.name)}
            />
          ))}
        </View>
      </View>

      <View style={{ flex: 0.5, backgroundColor: '#E0E0E0', width: '100%', paddingHorizontal: 10 }}>
        <Button title="XONG" color="blue" onPress={() => alert(`Màu bạn đã chọn: ${selectedColor}`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 100,
    marginLeft: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  chooseColorText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  colorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  colorBox: {
    width: 85,
    height: 80,
    marginVertical: 5,
    borderRadius: 1,
  },
});
