import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = {
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 299.43,
    rating: 4.5,
    reviews: 128,
    description: "The Nike Air Zoom Pegasus 36 Miami comes with a more perforated mesh upper for better breathability. A slimmer heel collar and tongue reduce bulk without compromising comfort, while exposed Flywire cables give you a snug fit at higher speeds.",
    colors: ["#FF3B30", "#40BFFF", "#FB923C", "#223263"],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5],
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between p-4 border-b border-[#EBF0FF]">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#9098B1" />
        </TouchableOpacity>
        <Text className="font-poppins700 text-[#223263] text-base flex-1 ml-4" numberOfLines={1}>
          {product.name}
        </Text>
        <TouchableOpacity>
          <FontAwesome name="search" size={20} color="#9098B1" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="w-full h-80 overflow-hidden bg-[#F6F6F6]">
          <Image 
            source={require("../../assets/images/product.png")} 
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover" 
          />
        </View>

        <View className="p-4">
          <View className="flex-row justify-between items-start">
            <Text className="font-poppins700 text-[#223263] text-xl flex-1 mr-4">{product.name}</Text>
            <TouchableOpacity>
               <FontAwesome name="heart-o" size={24} color="#9098B1" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center mt-2">
            {[1, 2, 3, 4, 5].map(star => (
              <FontAwesome key={star} name={star <= 4 ? "star" : "star-o"} size={16} color="#FFC833" style={{marginRight: 2}} />
            ))}
          </View>

          <Text className="font-poppins700 text-[#40BFFF] text-xl mt-4">${product.price}</Text>

          <View className="mt-6">
            <Text className="font-poppins700 text-[#223263] text-sm mb-3">Select Size</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              {product.sizes.map(size => (
                <TouchableOpacity key={size} className="w-12 h-12 rounded-full border border-[#EBF0FF] items-center justify-center mr-3">
                  <Text className="font-poppins700 text-[#223263] text-xs">{size}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View className="mt-6">
            <Text className="font-poppins700 text-[#223263] text-sm mb-3">Select Color</Text>
            <View className="flex-row">
              {product.colors.map(color => (
                <TouchableOpacity key={color} style={{backgroundColor: color}} className="w-8 h-8 rounded-full mr-4 border border-[#EBF0FF]" />
              ))}
            </View>
          </View>

          <View className="mt-6">
            <Text className="font-poppins700 text-[#223263] text-sm mb-2">Specification</Text>
            <Text className="font-poppins400 text-[#9098B1] text-xs leading-5">
              {product.description}
            </Text>
          </View>
        </View>
        <View className="h-20" />
      </ScrollView>

      <View className="p-4 border-t border-[#EBF0FF]">
        <TouchableOpacity className="bg-[#40BFFF] py-4 rounded-md shadow-sm">
          <Text className="text-center font-poppins700 text-white text-sm">Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
