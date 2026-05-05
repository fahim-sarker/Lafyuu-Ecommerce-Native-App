import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const cartItems = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 299.43,
    image: require("../../assets/images/product.png"),
    quantity: 1,
  },
  {
    id: 2,
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 299.43,
    image: require("../../assets/images/product1.png"),
    quantity: 1,
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 40.0;
  const importDuty = 128.0;
  const total = subtotal + shipping + importDuty;

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-[#223263] text-base">Your Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        <View className="mt-4 gap-4">
          {cartItems.map(item => (
            <View key={item.id} className="flex-row border border-[#EBF0FF] p-4 rounded-md items-center">
              <View className="w-20 h-20 rounded-md overflow-hidden">
                <Image 
                  source={item.image} 
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover" 
                />
              </View>
              <View className="flex-1 ml-4 h-20 justify-between">
                <View className="flex-row justify-between items-start">
                  <Text className="font-poppins700 text-[#223263] text-[12px] flex-1 mr-2" numberOfLines={2}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <MaterialIcons name="delete-outline" size={20} color="#9098B1" />
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text className="font-poppins700 text-[#40BFFF] text-xs">${item.price}</Text>
                  <View className="flex-row items-center border border-[#EBF0FF] rounded-md">
                    <TouchableOpacity className="px-2 py-1">
                      <FontAwesome name="minus" size={10} color="#9098B1" />
                    </TouchableOpacity>
                    <Text className="px-3 font-poppins400 text-xs text-[#223263]">{item.quantity}</Text>
                    <TouchableOpacity className="px-2 py-1 bg-[#EBF0FF] rounded-r-md">
                      <FontAwesome name="plus" size={10} color="#9098B1" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View className="mt-8 border border-[#EBF0FF] p-4 rounded-md mb-8">
          <View className="flex-row justify-between mb-3">
            <Text className="font-poppins400 text-[#9098B1] text-xs">Items ({cartItems.length})</Text>
            <Text className="font-poppins400 text-[#223263] text-xs">${subtotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="font-poppins400 text-[#9098B1] text-xs">Shipping</Text>
            <Text className="font-poppins400 text-[#223263] text-xs">${shipping.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="font-poppins400 text-[#9098B1] text-xs">Import Duty</Text>
            <Text className="font-poppins400 text-[#223263] text-xs">${importDuty.toFixed(2)}</Text>
          </View>
          <View className="border-t border-[#EBF0FF] pt-3 flex-row justify-between">
            <Text className="font-poppins700 text-[#223263] text-xs">Total Price</Text>
            <Text className="font-poppins700 text-[#40BFFF] text-xs">${total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-[#40BFFF] py-4 rounded-md mb-8 shadow-sm">
          <Text className="text-center font-poppins700 text-white text-sm">Check Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
