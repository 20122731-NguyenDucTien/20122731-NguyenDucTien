import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function App() {
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

    <View style={{  flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/9450/6742/84537f52002d52e74cd78ec1cc4f4b2e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cicihjlT-E-ir6yO3JYr0~qJ-SWqzUhmZbYshfHIQ2WGJe2VTcHCzzDJDMFmPG4dBvB-7eMnlhYFzZtRfOlLIEpOffZTrcxlyV23wC~w18A8j2E64RbrD6gofWjua12LUMI1JLYTQQj1j5r5CM7sCJIIpZZvmjrMiE2IXj75qteN1oN6CakuwHTb-nmfFmUNiBbm-IOQ8ye0lS2aIytc20xCIvBNEzj0rnrOkDMM3k~P-qj8Hq5N4hNCkYa3gyJindtBqlAQrTSN55lxBlhcqmf93BlQloiHghPb~nefS5A-hdu0v3seitkVTrGfy6eT9kew5yjAKIgvvNIafT9egg__' }}
          style={styles.image}
        />
        <View style={{flex: 1,justifyContent: 'flex-start'}}>
          <Text style={styles.title}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.subtitle}>Hàng chính hãng</Text>
          <Text style={styles.color}>Màu: đỏ</Text>
          <Text style={styles.provider}>Cung cấp bởi <Text style={styles.boldText}>Tiki Tradding</Text></Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>
      <View style ={{flex:1, backgroundColor: '#E0E0E0'}}>
      <Text style={{justifyContent:'flex-start'}}>Chọn một màu bên dưới:</Text>
      <View style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'center',width: '100%',}}>
      {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBox, { backgroundColor: color.hex }]}
              onPress={() => handleColorSelect(color.name)}
            />
          ))}
      </View>
      <View style={{ flex: 0.5, backgroundColor: '#E0E0E0', width: '100%', paddingHorizontal: 140 }}>
        <Button title="XONG" color="blue" onPress={() => alert(`Màu bạn đã chọn: ${selectedColor}`)} />
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 110,
    height: 130,
    marginRight: 10, 
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  color: {
    fontSize: 14,
    marginTop: 5,
  },
  provider: {
    fontSize: 14,
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
    colorBox: {
    width: 95,
    height: 85,
    marginVertical: 5,
    borderRadius: 1,
  },
});
