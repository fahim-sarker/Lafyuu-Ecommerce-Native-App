import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const categories = [
  { id: 1, name: "Man Shirt", icon: "shirt" },
  { id: 2, name: "Dress", icon: "female" },
  { id: 3, name: "Man Work Equipment", icon: "briefcase" },
  { id: 4, name: "Woman Bag", icon: "shopping-bag" },
  { id: 5, name: "Man Shoes", icon: "user" },
  { id: 6, name: "Woman Shoes", icon: "heart" },
  { id: 7, name: "Fashion", icon: "star" },
  { id: 8, name: "Gadget", icon: "mobile" },
];

export default function Explore() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <View className="relative">
          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => router.push({ pathname: "/search", params: { q: searchQuery } })}
            onFocus={() => router.push("/search")}
            className="border-2 border-[#EBF0FF] rounded-md pl-10 py-3 text-sm font-poppins400 text-[#223263]"
            placeholderTextColor="#9098B1"
          />
          <TouchableOpacity className="absolute top-1/2 -translate-y-1/2 left-3">
            <FontAwesome name="search" size={18} color="#40BFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 pt-4">
        <Text className="font-poppins700 text-[#223263] text-base mb-4">Man Fashion</Text>
        <View className="flex-row flex-wrap gap-4 justify-between">
          {categories.slice(0, 4).map(item => (
            <TouchableOpacity key={item.id} className="w-[22%] items-center mb-6">
              <View className="w-14 h-14 border border-[#EBF0FF] rounded-full items-center justify-center mb-2">
                <FontAwesome name={item.icon as any} size={24} color="#40BFFF" />
              </View>
              <Text className="text-[10px] font-poppins400 text-[#9098B1] text-center" numberOfLines={2}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="font-poppins700 text-[#223263] text-base mt-2 mb-4">Woman Fashion</Text>
        <View className="flex-row flex-wrap gap-4 justify-between">
          {categories.slice(4, 8).map(item => (
            <TouchableOpacity key={item.id} className="w-[22%] items-center mb-6">
              <View className="w-14 h-14 border border-[#EBF0FF] rounded-full items-center justify-center mb-2">
                <FontAwesome name={item.icon as any} size={24} color="#40BFFF" />
              </View>
              <Text className="text-[10px] font-poppins400 text-[#9098B1] text-center" numberOfLines={2}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
