import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, ScrollView, StatusBar } from "react-native";

const KeyboardAvoidingContainer = ({ children, style }) => {
    return <SafeAreaView style={styles.safeAreaContainer}>
            <KeyboardAvoidingView style={styles.keyboardContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={55}
            >
                <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollViewContainer, style]}
                >
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
}

export default KeyboardAvoidingContainer;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    keyboardContainer: {
        flex: 1,
    },
    scrollViewContainer: {
        paddingTop: Platform.OS === "android" ? statusbar + 20 : 20,
    }
})