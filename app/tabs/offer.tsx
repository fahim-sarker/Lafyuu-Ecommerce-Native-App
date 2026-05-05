import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Offer() {
  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-[#223263] text-base">Offer</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        <View className="bg-[#40BFFF] p-6 rounded-md mt-4">
          <Text className="font-poppins700 text-white text-xl w-2/3">Use "MEGASALE" Coupon for 90% off</Text>
        </View>

        <View className="mt-4">
          <View className="bg-[#FB923C] p-6 rounded-md relative overflow-hidden">
             <Text className="font-poppins700 text-white text-2xl mb-4">Super Flash Sale 50% Off</Text>
             <View className="flex-row gap-2">
                <View className="bg-white px-2 py-1 rounded-sm"><Text className="font-poppins700 text-[#223263]">08</Text></View>
                <Text className="font-poppins700 text-white">:</Text>
                <View className="bg-white px-2 py-1 rounded-sm"><Text className="font-poppins700 text-[#223263]">34</Text></View>
                <Text className="font-poppins700 text-white">:</Text>
                <View className="bg-white px-2 py-1 rounded-sm"><Text className="font-poppins700 text-[#223263]">52</Text></View>
             </View>
          </View>
        </View>

        <View className="bg-[#223263] p-6 rounded-md mt-4">
          <Text className="font-poppins700 text-white text-xl">Special Summer Sale</Text>
          <Text className="font-poppins400 text-white text-xs mt-2">Up to 70% off on all items</Text>
        </View>
        <View className="bg-[#15B5FF] p-6 rounded-md mt-4">
          <Text className="font-poppins700 text-white text-xl">Flat 50% off</Text>
          <Text className="font-poppins400 text-white text-xs mt-2">Use Code : FLAT50</Text>
        </View>
      </ScrollView>
    </View>
  );
}
