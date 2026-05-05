import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

interface SignInForm {
  email: string;
  password: string;
}

export default function Index() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignInForm> = data => {
    console.log("Form Data:", data);
    router.push("/tabs/home");
  };

  return (
    <View className="flex-1 bg-white px-4 justify-center items-center">
      <View className="w-full">
        <Image
          source={require("../assets/images/Icon (1).png")}
          className="mb-4 mx-auto w-16 h-16"
          resizeMode="contain"
        />

        <Text className="text-center font-poppins700 text-base text-[#223263]">
          Welcome to Lafyuu
        </Text>
        <Text className="text-center font-poppins400 text-sm text-[#9098B1] mt-1">
          Sign in to continue
        </Text>

        <View className="mt-7 flex flex-col gap-3">
          {/* Email */}
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
                  autoCapitalize="none"
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
              style={{ position: "absolute", left: 12, top: 12 }}
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
              style={{ position: "absolute", left: 12, top: 12 }}
            />
            {errors.password && (
              <Text className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          className="mt-6 bg-[#40BFFF] py-3 rounded-md shrink-0 w-full"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-center font-poppins600 text-white text-sm">
            Sign In
          </Text>
        </TouchableOpacity>

        <Text className="text-center font-poppins400 text-sm text-[#9098B1] mt-4">
          OR
        </Text>

        <View className="mt-4 flex flex-col gap-3">
          <TouchableOpacity className="flex-row items-center justify-center border border-[#EBF0FF] py-3 rounded-md gap-2">
            <AntDesign name="google" size={20} color="#FF3B30" />
            <Text className="font-poppins400 text-sm text-[#223263]">
              Login with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center border border-[#EBF0FF] py-3 rounded-md gap-2">
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            <Text className="font-poppins400 text-sm text-[#223263]">
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex-row justify-center gap-1">
          <Text className="text-sm font-poppins400 text-[#9098B1]">
            Dont have an account?
          </Text>
          <Link href="/authscreen/signup">
            <Text className="text-sm font-poppins600 text-[#40BFFF]">
              Register
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
