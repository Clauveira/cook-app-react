import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        lineHeight: 44,
        marginTop: 42,
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.bold,
    },
    subtitle: {
        fontFamily: theme.fonts.family.regular,
    },
    message: {
      marginTop: 12,
      marginBottom: 38,
      fontSize: theme.fonts.size.body.md,
      fontFamily: theme.fonts.family.regular,
      color: theme.colors.gray_400,
    },
})