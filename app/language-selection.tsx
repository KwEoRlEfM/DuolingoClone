import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LanguageSelection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { setSelectedLanguage } = useLanguageStore();

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={26} color="#001132" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose a language</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Search */}
      <View className="px-4 mb-2">
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#6b7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search languages"
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Language list */}
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12 }}
      >
        <Text style={styles.sectionLabel}>Popular</Text>

        {filtered.map((lang) => {
          const isSelected = selectedId === lang.id;
          return (
            <TouchableOpacity
              key={lang.id}
              onPress={() => setSelectedId(lang.id)}
              activeOpacity={0.7}
              style={[styles.langRow, isSelected && styles.langRowSelected]}
            >
              <View style={styles.flagCircle}>
                <Image
                  source={{ uri: lang.flag }}
                  style={styles.flagImage}
                  resizeMode="cover"
                  accessibilityLabel={lang.name}
                />
              </View>

              <View style={styles.langInfo}>
                <Text style={styles.langName}>{lang.name}</Text>
                {lang.learnerCount ? (
                  <Text style={styles.langLearners}>{lang.learnerCount}</Text>
                ) : null}
              </View>

              {isSelected ? (
                <View style={styles.checkCircle}>
                  <Ionicons name="checkmark" size={14} color="#ffffff" />
                </View>
              ) : (
                <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Confirm button */}
      <View className="px-4 pt-2 pb-3">
        <TouchableOpacity
          style={[styles.confirmBtn, !selectedId && styles.confirmBtnDisabled]}
          activeOpacity={0.85}
          disabled={!selectedId}
          onPress={() => {
            const lang = languages.find((l) => l.id === selectedId);
            if (lang) setSelectedLanguage(lang);
            router.replace("/");
          }}
        >
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Earth illustration */}
      <View style={styles.earthContainer}>
        <Image source={images.earth} style={styles.earthImage} resizeMode="cover" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#001132",
  },
  headerSpacer: {
    width: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f7fb",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001132",
    padding: 0,
  },
  sectionLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001132",
    marginTop: 12,
    marginBottom: 8,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  langRowSelected: {
    borderColor: "#6c4ef5",
    backgroundColor: "#faf8ff",
  },
  flagCircle: {
    width: 52,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#f6f7fb",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  flagImage: {
    width: "100%",
    height: "100%",
  },
  langInfo: {
    flex: 1,
    marginLeft: 12,
  },
  langName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001132",
  },
  langLearners: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
    marginTop: 1,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#6c4ef5",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBtn: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  confirmBtnDisabled: {
    backgroundColor: "#c4b5f9",
  },
  confirmBtnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#ffffff",
  },
  earthContainer: {
    height: 130,
    overflow: "hidden",
  },
  earthImage: {
    width: "100%",
    height: 130,
  },
});
