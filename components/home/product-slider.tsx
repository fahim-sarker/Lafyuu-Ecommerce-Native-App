import React, { FC, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface SliderItem {
  id: number;
  title: string;
  image: any;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "Super Flash Sale 50% Off",
    image: require("../../assets/images/product.png"),
  },
  {
    id: 2,
    title: "Summer Collection - 40% Off",
    image: require("../../assets/images/product.png"),
  },
  {
    id: 3,
    title: "New Arrivals - Limited Time",
    image: require("../../assets/images/product.png"),
  },
];

const SLIDE_WIDTH = width - 32;
const SLIDE_GAP = 12;

const ProductSlider: FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 8,
    minutes: 34,
    seconds: 52,
  });

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % sliderData.length;
      setCurrentSlide(nextSlide);

      scrollViewRef.current?.scrollTo({
        x: nextSlide * (SLIDE_WIDTH + SLIDE_GAP),
        animated: true,
      });
    }, 4000); 

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev: TimeLeft) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 8;
          minutes = 34;
          seconds = 52;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const slide = Math.round(contentOffsetX / (SLIDE_WIDTH + SLIDE_GAP));
    setCurrentSlide(slide);
  };

  const formatTime = (num: number): string => String(num).padStart(2, "0");

  return (
    <View className="py-4">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        decelerationRate={0.9}
        snapToInterval={SLIDE_WIDTH + SLIDE_GAP}
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {sliderData.map((slide: SliderItem) => (
          <View key={slide.id} style={{ marginRight: SLIDE_GAP }}>
            <ImageBackground
              source={slide.image}
              className="rounded-lg overflow-hidden py-8 px-6"
              resizeMode="cover"
              style={{ width: SLIDE_WIDTH, height: 200 }}
            >
              <View className="bg-opacity-60 flex-1 justify-center">
                <Text className="text-white text-2xl font-poppins700 mb-2">
                  {slide.title}
                </Text>
                <View className="flex-row gap-3 items-center mt-7">
                  <View className="bg-white h-10 w-10 rounded-lg flex justify-center items-center">
                    <Text className="font-poppins700 text-black text-base">
                      {formatTime(timeLeft.hours)}
                    </Text>
                  </View>
                  <Text className="font-poppins700 text-white text-base">
                    :
                  </Text>
                  <View className="bg-white h-10 w-10 rounded-lg flex justify-center items-center">
                    <Text className="font-poppins700 text-black text-base">
                      {formatTime(timeLeft.minutes)}
                    </Text>
                  </View>
                  <Text className="font-poppins700 text-white text-base">
                    :
                  </Text>
                  <View className="bg-white h-10 w-10 rounded-lg flex justify-center items-center">
                    <Text className="font-poppins700 text-black text-base">
                      {formatTime(timeLeft.seconds)}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

      <View className="flex-row justify-center items-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <View
            key={index}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#40BFFF] w-2 h-2"
                : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductSlider;
