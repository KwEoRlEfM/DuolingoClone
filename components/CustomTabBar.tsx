import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_WIDTH = SCREEN_WIDTH / 5;
const CIRCLE_SIZE = 52;
const CONTENT_HEIGHT = 65;
const ACTIVE_COLOR = "#6c4ef5";
const INACTIVE_COLOR = "#9ca3af";

const TAB_CONFIG = [
  { route: "home", label: "Home", icon: "home-outline", iconActive: "home" },
  { route: "learn", label: "Learn", icon: "book-outline", iconActive: "book" },
  {
    route: "ai-teacher",
    label: "AI Teacher",
    icon: "sparkles-outline",
    iconActive: "sparkles",
  },
  {
    route: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    iconActive: "chatbubble",
  },
  {
    route: "profile",
    label: "Profile",
    icon: "person-outline",
    iconActive: "person",
  },
];

const CIRCLE_TOP = (CONTENT_HEIGHT - CIRCLE_SIZE) / 2;

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const circleX = useSharedValue(
    state.index * TAB_WIDTH + (TAB_WIDTH - CIRCLE_SIZE) / 2
  );

  useEffect(() => {
    circleX.value = withTiming(
      state.index * TAB_WIDTH + (TAB_WIDTH - CIRCLE_SIZE) / 2,
      { duration: 220, easing: Easing.out(Easing.cubic) }
    );
  }, [state.index]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View style={styles.wrapper}>
      {/* Fixed-height content row — circle is absolutely positioned inside here */}
      <View style={styles.content}>
        <Animated.View style={[styles.circle, animatedCircleStyle]} />

        {state.routes.map((route, index) => {
          const tabConfig = TAB_CONFIG[index];
          const isActive = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.7}
              onPress={onPress}
              style={styles.tabItem}
            >
              <Ionicons
                name={(isActive ? tabConfig.iconActive : tabConfig.icon) as any}
                size={24}
                color={isActive ? "#ffffff" : INACTIVE_COLOR}
              />
              {!isActive && (
                <Text style={styles.label} numberOfLines={1}>
                  {tabConfig.label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Safe area spacer — separate so it doesn't affect circle positioning */}
      <View style={[styles.safeArea, { height: insets.bottom }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    height: CONTENT_HEIGHT,
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: ACTIVE_COLOR,
    top: CIRCLE_TOP,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: CONTENT_HEIGHT,
    gap: 3,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: INACTIVE_COLOR,
  },
  safeArea: {
    backgroundColor: "#ffffff",
  },
});
