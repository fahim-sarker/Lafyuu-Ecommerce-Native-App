import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter your email.",
        position: "bottom",
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Email Sent",
      text2: "A password reset link has been sent to your email.",
      position: "bottom",
    });
    router.back();
  };

  return (
    <View className="flex-1 bg-white p-4 justify-center">
      <View className="items-center mb-10">
        <View className="w-20 h-20 bg-[#40BFFF] rounded-md justify-center items-center mb-4">
          <MaterialIcons name="lock-reset" size={40} color="white" />
        </View>
        <Text className="font-poppins700 text-xl text-[#223263]">Forgot Password?</Text>
        <Text className="font-poppins400 text-xs text-[#9098B1] mt-2">
          Enter your email to receive a password reset link.
        </Text>
      </View>

      <View className="mb-6">
        <View className="relative">
          <MaterialIcons name="email" size={20} color="#9098B1" className="absolute left-3 top-3" />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Your Email"
            keyboardType="email-address"
            className="border border-[#EBF0FF] rounded-md pl-10 pr-4 py-3 font-poppins400 text-xs text-[#223263]"
          />
        </View>
      </View>

      <TouchableOpacity 
        onPress={handleReset}
        className="bg-[#40BFFF] py-4 rounded-md shadow-sm mb-4"
      >
        <Text className="text-center font-poppins700 text-white text-sm">Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} className="items-center">
        <Text className="font-poppins700 text-[#40BFFF] text-xs">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
