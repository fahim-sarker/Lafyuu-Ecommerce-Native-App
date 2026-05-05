import Categories from "@/components/home/category";
import ProductSlider from "@/components/home/product-slider";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="bg-white h-screen">
      <View className="flex-row justify-between items-center border-b border-[#EBF0FF] p-4">
        <View className="relative">
          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 border-2 border-[#EBF0FF] rounded-md pl-9 py-3 text-sm font-poppins400 text-[#223263]"
            placeholderTextColor="#9098B1"
          />
          <TouchableOpacity className="absolute top-1/2 -translate-y-1/2 left-3">
            <FontAwesome name="search" size={16} color="#FF3B30" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-[#F0F5FF] p-3 rounded-md">
          <FontAwesome name="heart-o" size={20} color="#FF3B30" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#F0F5FF] p-3 rounded-md relative">
          <MaterialIcons name="notifications-none" size={20} color="#223263" />
          <View className="absolute top-1 right-1 bg-[#FF3B30] w-2 h-2 rounded-full" />
        </TouchableOpacity>
      </View>
      <ProductSlider />
      <Categories />
    </View>
  );
}
