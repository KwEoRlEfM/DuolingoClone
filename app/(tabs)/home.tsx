import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/useLanguageStore";
import { images } from "@/constants/images";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";

const MOCK_STREAK = 12;
const CURRENT_XP = 15;
const GOAL_XP = 20;
const AI_TEACHER_AVATAR = "https://picsum.photos/seed/teacher/200/200";

function getGreeting(languageId?: string): string {
  switch (languageId) {
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour";
    case "ja":
      return "こんにちは";
    case "de":
      return "Hallo";
    default:
      return "Hello";
  }
}

type PlanItemProps = {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  iconBgColor: string;
  iconColor: string;
  title: string;
  subtitle: string;
  completed: boolean;
  isLast?: boolean;
};

function PlanItem({
  iconName,
  iconBgColor,
  iconColor,
  title,
  subtitle,
  completed,
  isLast,
}: PlanItemProps) {
  return (
    <View>
      <View className="flex-row items-center px-4 py-3.5">
        <View
          className="w-[46px] h-[46px] rounded-[13px] items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Ionicons name={iconName} size={20} color={iconColor} />
        </View>
        <View className="flex-1 ml-3">
          <Text className="font-poppins-semibold text-sm text-foreground">
            {title}
          </Text>
          <Text className="font-poppins-regular text-xs text-muted mt-0.5">
            {subtitle}
          </Text>
        </View>
        {completed ? (
          <View className="w-[26px] h-[26px] rounded-full bg-success items-center justify-center">
            <Ionicons name="checkmark" size={14} color="white" />
          </View>
        ) : (
          <View className="w-[26px] h-[26px] rounded-full border-2 border-border" />
        )}
      </View>
      {!isLast && <View className="h-px bg-border mx-4" />}
    </View>
  );
}

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();

  const firstName = user?.firstName ?? "there";
  const greeting = getGreeting(selectedLanguage?.id);

  const currentUnit = units.find(
    (u) => u.languageId === selectedLanguage?.id && u.order === 1
  );
  const currentLesson = lessons.find(
    (l) => l.unitId === currentUnit?.id && l.order === 1
  );
  const vocabCount = currentLesson?.vocabulary?.length ?? 10;

  const progressFlex = CURRENT_XP / GOAL_XP;
  const remainFlex = 1 - progressFlex;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1">
        {/* ─── Header ─────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
          <View className="flex-row items-center gap-2.5">
            {selectedLanguage?.flag ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                className="w-9 h-[26px] rounded-[6px]"
              />
            ) : (
              <View className="w-9 h-[26px] rounded-[6px] bg-border" />
            )}
            <Text className="font-poppins-semibold text-lg text-foreground">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                className="w-[22px] h-[22px]"
                resizeMode="contain"
              />
              <Text className="font-poppins-bold text-xl text-streak">
                {MOCK_STREAK}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#001132" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ─── Daily Goal Card ─────────────────────────────────── */}
        <View className="bg-[#fff5eb] rounded-[20px] p-4 mx-5 mt-3 flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="font-poppins-regular text-xs text-muted">
              Daily goal
            </Text>
            <View className="flex-row items-end mt-0.5">
              <Text className="font-poppins-bold text-2xl text-foreground">
                {CURRENT_XP}
              </Text>
              <Text className="font-poppins-regular text-lg text-muted">
                {" "}/ {GOAL_XP} XP
              </Text>
            </View>
            <View className="h-2 bg-[#ffd9b0] rounded overflow-hidden mt-2.5 flex-row">
              <View
                className="h-2 bg-streak rounded"
                style={{ flex: progressFlex }}
              />
              <View style={{ flex: remainFlex }} />
            </View>
          </View>
          <Image
            source={images.treasure}
            className="w-[82px] h-[82px]"
            resizeMode="contain"
          />
        </View>

        {/* ─── Continue Learning Card ──────────────────────────── */}
        <View className="bg-[#4535c9] rounded-[20px] pl-5 py-5 mx-5 mt-3 flex-row items-center overflow-hidden min-h-[150px]">
          <View className="flex-1 pr-3">
            <Text className="font-poppins-regular text-xs text-white/65">
              Continue learning
            </Text>
            <Text className="font-poppins-bold text-[26px] text-white mt-0.5">
              {selectedLanguage?.name ?? "Spanish"}
            </Text>
            <Text className="font-poppins-regular text-[13px] text-white/65 mt-0.5">
              A1 · {currentUnit ? `Unit ${currentUnit.order}` : "Unit 1"}
            </Text>
            <TouchableOpacity className="bg-white rounded-xl px-[22px] py-[9px] self-start mt-3.5">
              <Text className="font-poppins-semibold text-sm text-lingua-purple">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={images.palace}
            className="w-[120px] h-[140px] self-end"
            resizeMode="contain"
          />
        </View>

        {/* ─── Today's Plan ────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 mt-[22px] mb-3">
          <Text className="font-poppins-semibold text-base text-foreground">
            Today's plan
          </Text>
          <TouchableOpacity>
            <Text className="font-poppins-medium text-sm text-lingua-purple">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-[20px] border border-border mx-5 overflow-hidden">
          <PlanItem
            iconName="book-outline"
            iconBgColor="#ede9ff"
            iconColor="#6c4ef5"
            title="Lesson"
            subtitle={currentLesson?.title ?? "At the café"}
            completed
          />
          <PlanItem
            iconName="headset-outline"
            iconBgColor="#e0eeff"
            iconColor="#4d88ff"
            title="AI Conversation"
            subtitle="Talk about your day"
            completed={false}
          />
          <PlanItem
            iconName="chatbubble-ellipses-outline"
            iconBgColor="#ffecec"
            iconColor="#ff4d4f"
            title="New words"
            subtitle={`${vocabCount} words`}
            completed={false}
            isLast
          />
        </View>

        {/* ─── Next Up Card ────────────────────────────────────── */}
        <View className="bg-[#f0fdf8] rounded-[20px] p-4 mx-5 mt-3 flex-row items-center">
          <View className="flex-1">
            <Text className="font-poppins-regular text-xs text-muted">
              Next up
            </Text>
            <Text className="font-poppins-semibold text-base text-foreground mt-0.5">
              AI Video Call
            </Text>
            <Text className="font-poppins-regular text-sm text-muted">
              Practice speaking
            </Text>
          </View>
          <View className="flex-row items-center gap-2.5">
            <Image
              source={{ uri: AI_TEACHER_AVATAR }}
              className="w-[52px] h-[52px] rounded-full"
            />
            <TouchableOpacity className="w-11 h-11 rounded-full bg-success items-center justify-center">
              <Ionicons name="videocam" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
