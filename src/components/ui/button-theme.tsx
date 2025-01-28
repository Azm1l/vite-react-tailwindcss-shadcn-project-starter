import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "../theme-provider"

export function ButtonTheme() {
    const { theme, setTheme } = useTheme();

    const swicthTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <Button variant="outline" size="icon" onClick={swicthTheme}> {theme === 'dark' ? <Sun /> : <Moon />}</Button>
    )
}