import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Index() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<SignUpForm> = data => {
    console.log("Form Data:", data);
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="px-4 pb-10 flex-1 justify-center"
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

      <View className="mt-7 flex flex-col gap-3">
        <View className="relative">
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Your Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                className={`pl-12 py-3 border ${
                  errors.name ? "border-red-500" : "border-[#EBF0FF]"
                } rounded-md text-[#223263] text-sm font-poppins400`}
              />
            )}
          />
          <MaterialIcons
            name="person"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
          {errors.name && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </Text>
          )}
        </View>

        <View className="relative">
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Your Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                className={`pl-12 py-3 border ${
                  errors.email ? "border-red-500" : "border-[#EBF0FF]"
                } rounded-md text-[#223263] text-sm font-poppins400`}
              />
            )}
          />
          <MaterialIcons
            name="email"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
          {errors.email && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </Text>
          )}
        </View>

        <View className="relative">
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                className={`pl-12 py-3 border ${
                  errors.password ? "border-red-500" : "border-[#EBF0FF]"
                } rounded-md text-[#223263] text-sm font-poppins400`}
              />
            )}
          />
          <MaterialIcons
            name="lock"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
          {errors.password && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </Text>
          )}
        </View>

        <View className="relative">
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your password",
              validate: value => value === password || "Passwords do not match",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirm Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                className={`pl-12 py-3 border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#EBF0FF]"
                } rounded-md text-[#223263] text-sm font-poppins400`}
              />
            )}
          />
          <MaterialIcons
            name="lock"
            size={20}
            color="#9098B1"
            className="absolute left-3 top-3"
          />
          {errors.confirmPassword && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity
        className="mt-6 bg-[#40BFFF] py-3 rounded-md"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-center font-poppins600 text-white text-sm">
          Create Account
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
        <Link href="/">
          <Text className="text-sm font-poppins600 text-[#40BFFF]">Signin</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
