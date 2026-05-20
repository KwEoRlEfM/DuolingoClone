import { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerified: () => void;
}

export default function VerificationModal({
  visible,
  email,
  onClose,
  onVerified,
}: Props) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [visible]);

  const handleCodeChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(digits);
    if (digits.length === 6) {
      setTimeout(() => onVerified(), 300);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <TouchableOpacity
            style={styles.closeBtn}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Ionicons name="close" size={22} color="#6b7280" />
          </TouchableOpacity>

          <Ionicons
            name="mail-outline"
            size={48}
            color="#6c4ef5"
            style={styles.mailIcon}
          />

          <Text style={styles.title}>Check your email!</Text>
          <Text style={styles.subtitle}>
            We sent a 6-digit code to{"\n"}
            <Text style={styles.emailText}>{email || "your email"}</Text>
          </Text>

          {/* Hidden input captures keyboard */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Visible digit boxes */}
          <TouchableOpacity
            style={styles.codeRow}
            onPress={() => inputRef.current?.focus()}
            activeOpacity={1}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.codeBox,
                    i < code.length && styles.codeBoxFilled,
                    i === code.length && styles.codeBoxActive,
                  ]}
                >
                  <Text style={styles.codeDigit}>{code[i] ?? ""}</Text>
                </View>
              ))}
          </TouchableOpacity>

          <View style={styles.resendRow}>
            <Text style={styles.resendText}>Didn't receive it? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.resendLink}>Resend code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  sheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 52,
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e5e7eb",
    marginBottom: 24,
  },
  closeBtn: {
    position: "absolute",
    top: 16,
    right: 20,
    padding: 6,
  },
  mailIcon: {
    marginBottom: 16,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#001132",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  emailText: {
    fontFamily: "Poppins-SemiBold",
    color: "#001132",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 32,
  },
  codeBox: {
    width: 46,
    height: 56,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f7fb",
  },
  codeBoxFilled: {
    borderColor: "#6c4ef5",
    backgroundColor: "#ffffff",
  },
  codeBoxActive: {
    borderColor: "#6c4ef5",
    backgroundColor: "#ffffff",
    shadowColor: "#6c4ef5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  codeDigit: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#001132",
  },
  resendRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6c4ef5",
  },
});
