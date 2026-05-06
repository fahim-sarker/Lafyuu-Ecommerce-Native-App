import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function ChangePassword() {
  const router = useRouter();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match.",
        position: "bottom",
      });
      return;
    }

    Toast.show({
      type: "success",
      text1: "Password Updated",
      text2: "Your password has been successfully updated.",
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
          Change Password
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 pt-6">
        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Old Password</Text>
          <View className="relative">
            <MaterialIcons name="lock-outline" size={20} color="#9098B1" className="absolute left-3 top-3" />
            <TextInput
              value={passwords.oldPassword}
              onChangeText={(text) => setPasswords({ ...passwords, oldPassword: text })}
              secureTextEntry
              placeholder="••••••••"
              className="border border-[#EBF0FF] rounded-md pl-10 pr-4 py-3 font-poppins400 text-xs text-[#223263]"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">New Password</Text>
          <View className="relative">
            <MaterialIcons name="lock-outline" size={20} color="#9098B1" className="absolute left-3 top-3" />
            <TextInput
              value={passwords.newPassword}
              onChangeText={(text) => setPasswords({ ...passwords, newPassword: text })}
              secureTextEntry
              placeholder="••••••••"
              className="border border-[#EBF0FF] rounded-md pl-10 pr-4 py-3 font-poppins400 text-xs text-[#223263]"
            />
          </View>
        </View>

        <View className="mb-8">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Confirm Password</Text>
          <View className="relative">
            <MaterialIcons name="lock-outline" size={20} color="#9098B1" className="absolute left-3 top-3" />
            <TextInput
              value={passwords.confirmPassword}
              onChangeText={(text) => setPasswords({ ...passwords, confirmPassword: text })}
              secureTextEntry
              placeholder="••••••••"
              className="border border-[#EBF0FF] rounded-md pl-10 pr-4 py-3 font-poppins400 text-xs text-[#223263]"
            />
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleSave}
          className="bg-[#40BFFF] py-4 rounded-md shadow-sm"
        >
          <Text className="text-center font-poppins700 text-white text-sm">Update Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
