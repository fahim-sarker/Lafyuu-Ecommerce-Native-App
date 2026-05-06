import React from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const NOTIFICATIONS = [
  {
    id: "1",
    title: "New Product Alert!",
    description: "Check out the latest Nike collection just arrived in store.",
    time: "2 hours ago",
    icon: "new-releases",
    color: "#40BFFF",
  },
  {
    id: "2",
    title: "Mega Sale is Live",
    description: "Get up to 50% off on all sports shoes today only!",
    time: "5 hours ago",
    icon: "local-offer",
    color: "#FB6340",
  },
  {
    id: "3",
    title: "Order Delivered",
    description: "Your order #LA-123456 has been successfully delivered.",
    time: "1 day ago",
    icon: "check-circle",
    color: "#2DCE89",
  },
  {
    id: "4",
    title: "Payment Successful",
    description: "We have received payment for your order #LA-123456.",
    time: "2 days ago",
    icon: "payment",
    color: "#11CDEF",
  },
];

export default function Notifications() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#EBF0FF] p-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <MaterialIcons name="arrow-back" size={24} color="#9098B1" />
        </TouchableOpacity>
        <Text className="font-poppins700 text-lg text-[#223263] flex-1">
          Notifications
        </Text>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row p-4 border-b border-[#EBF0FF] items-start">
            <View 
              className="w-10 h-10 rounded-full justify-center items-center mr-4"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <MaterialIcons name={item.icon as any} size={20} color={item.color} />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="font-poppins700 text-sm text-[#223263]">
                  {item.title}
                </Text>
                <Text className="font-poppins400 text-[10px] text-[#9098B1]">
                  {item.time}
                </Text>
              </View>
              <Text className="font-poppins400 text-xs text-[#9098B1] leading-5">
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
