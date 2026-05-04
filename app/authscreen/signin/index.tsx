import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="px-4 pt-16 pb-10"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={require("../../../assets/images/Icon (1).png")}
        className="mb-4 mx-auto w-16 h-16"
        resizeMode="contain"
      />

      <Text className="text-center font-poppins700 text-base text-[#223263]">
        Lets Get Started
      </Text>
      <Text className="text-center font-poppins400 text-sm text-[#9098B1] mt-1">
        Create an new account
      </Text>

      <View className="mt-7 space-y-4">
        <View className="relative">
          <TextInput
            placeholder="Your Email"
            className="pl-12 py-3 border border-[#EBF0FF] rounded-md text-[#223263] text-sm font-poppins400"
          />
          <MaterialIcons
            name="email"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
        </View>

        <View className="relative">
          <TextInput
            placeholder="Your Email"
            className="pl-12 py-3 border border-[#EBF0FF] rounded-md text-[#223263] text-sm font-poppins400"
          />
          <MaterialIcons
            name="email"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
        </View>

        <View className="relative">
          <TextInput
            placeholder="Your Email"
            className="pl-12 py-3 border border-[#EBF0FF] rounded-md text-[#223263] text-sm font-poppins400"
          />
          <MaterialIcons
            name="email"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
        </View>

        <View className="relative">
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="pl-12 py-3 border border-[#EBF0FF] rounded-md text-[#223263] text-sm font-poppins400"
          />
          <MaterialIcons
            name="lock"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
        </View>
      </View>

      <TouchableOpacity className="mt-6 bg-[#40BFFF] py-3 rounded-md">
        <Text className="text-center font-poppins600 text-white text-sm">
          Sign In
        </Text>
      </TouchableOpacity>

      <Text className="text-center font-poppins400 text-sm text-[#9098B1] mt-4">
        OR
      </Text>

      <View className="mt-4 space-y-3">
        <TouchableOpacity className="flex-row items-center justify-center border border-[#EBF0FF] py-3 rounded-md">
          <AntDesign name="google" size={20} color="#FF3B30" className="mr-2" />
          <Text className="font-poppins400 text-sm text-[#223263]">
            Login with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center border border-[#EBF0FF] py-3 rounded-md">
          <FontAwesome
            name="facebook"
            size={20}
            color="#1877F2"
            className="mr-2"
          />
          <Text className="font-poppins400 text-sm text-[#223263]">
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4 flex-row justify-center space-x-1">
        <Text className="text-sm font-poppins400 text-[#9098B1]">
          Forgot Password?
        </Text>
        <Link href="/authscreen/signup">
          <Text className="text-sm font-poppins600 text-[#40BFFF]">
            Register
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
}
