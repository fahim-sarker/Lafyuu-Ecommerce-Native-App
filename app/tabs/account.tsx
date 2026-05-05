import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
  { id: 1, name: "Profile", icon: "person-outline" },
  { id: 2, name: "Order", icon: "shopping-bag" },
  { id: 3, name: "Address", icon: "location-on" },
  { id: 4, name: "Payment", icon: "credit-card" },
];

export default function Account() {
  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-[#223263] text-base">Account</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="mt-4">
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center justify-between p-4 bg-white"
            >
              <View className="flex-row items-center">
                <MaterialIcons name={item.icon as any} size={24} color="#40BFFF" />
                <Text className="ml-4 font-poppins700 text-[#223263] text-xs">{item.name}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#9098B1" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity className="mt-8 flex-row items-center p-4">
          <MaterialIcons name="logout" size={24} color="#FF3B30" />
          <Text className="ml-4 font-poppins700 text-[#FF3B30] text-xs">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
