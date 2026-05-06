import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function OrderComplete() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center items-center px-10">
      <View className="w-24 h-24 bg-[#40BFFF] rounded-full justify-center items-center mb-6">
        <MaterialIcons name="check" size={50} color="white" />
      </View>
      
      <Text className="font-poppins700 text-2xl text-[#223263] mb-3">Success</Text>
      <Text className="font-poppins400 text-sm text-[#9098B1] text-center mb-10">
        Thank you for shopping with Lafyuu. Your order has been placed successfully.
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/tabs/home")}
        className="bg-[#40BFFF] w-full py-4 rounded-md shadow-sm"
      >
        <Text className="text-center font-poppins700 text-white text-sm">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
