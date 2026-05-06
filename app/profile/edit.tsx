import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function EditProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "Fahim",
    lastName: "Sarker",
    email: "fahim@example.com",
    phoneNumber: "+1 123-456-7890",
  });

  const handleSave = () => {
    Toast.show({
      type: "success",
      text1: "Profile Updated",
      text2: "Your profile information has been successfully updated.",
      position: "bottom",
    });
    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#EBF0FF] p-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <MaterialIcons name="arrow-back" size={24} color="#9098B1" />
        </TouchableOpacity>
        <Text className="font-poppins700 text-lg text-[#223263] flex-1">
          Edit Profile
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 pt-6">
        {/* Profile Picture */}
        <View className="items-center mb-8">
          <View className="relative">
            <View className="w-24 h-24 rounded-full bg-[#F0F5FF] overflow-hidden">
               <MaterialIcons name="person" size={60} color="#40BFFF" style={{ alignSelf: 'center', marginTop: 10 }} />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-[#EBF0FF]">
              <MaterialIcons name="photo-camera" size={16} color="#9098B1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form */}
        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">First Name</Text>
          <TextInput
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            className="border border-[#EBF0FF] rounded-md px-4 py-3 font-poppins400 text-xs text-[#223263]"
          />
        </View>

        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Last Name</Text>
          <TextInput
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            className="border border-[#EBF0FF] rounded-md px-4 py-3 font-poppins400 text-xs text-[#223263]"
          />
        </View>

        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Email</Text>
          <TextInput
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            className="border border-[#EBF0FF] rounded-md px-4 py-3 font-poppins400 text-xs text-[#223263]"
          />
        </View>

        <View className="mb-8">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Phone Number</Text>
          <TextInput
            value={formData.phoneNumber}
            onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
            keyboardType="phone-pad"
            className="border border-[#EBF0FF] rounded-md px-4 py-3 font-poppins400 text-xs text-[#223263]"
          />
        </View>

        <TouchableOpacity 
          onPress={handleSave}
          className="bg-[#40BFFF] py-4 rounded-md mb-12 shadow-sm"
        >
          <Text className="text-center font-poppins700 text-white text-sm">Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
