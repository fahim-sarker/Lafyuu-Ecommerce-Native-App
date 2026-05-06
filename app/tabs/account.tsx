import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
  { id: 1, name: "Profile", icon: "person-outline", route: "/profile/edit" },
  { id: 2, name: "Order", icon: "shopping-bag", route: "/tabs/cart" },
  { id: 3, name: "Address", icon: "location-on", route: "/checkout" },
  { id: 4, name: "Payment", icon: "credit-card", route: "/checkout" },
  { id: 5, name: "Change Password", icon: "lock-outline", route: "/profile/change-password" },
];

export default function Account() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-[#223263] text-base">Account</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* User Info Header */}
        <View className="flex-row items-center p-4 border-b border-[#F6F6F6]">
           <View className="w-16 h-16 rounded-full bg-[#F0F5FF] items-center justify-center">
              <MaterialIcons name="person" size={40} color="#40BFFF" />
           </View>
           <View className="ml-4">
              <Text className="font-poppins700 text-[#223263] text-sm">Fahim Sarker</Text>
              <Text className="font-poppins400 text-[#9098B1] text-[10px]">@fahimsarker</Text>
           </View>
        </View>

        <View className="mt-2">
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(item.route as any)}
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

        <TouchableOpacity 
          onPress={() => router.push("/")}
          className="mt-8 flex-row items-center p-4"
        >
          <MaterialIcons name="logout" size={24} color="#FF3B30" />
          <Text className="ml-4 font-poppins700 text-[#FF3B30] text-xs">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
