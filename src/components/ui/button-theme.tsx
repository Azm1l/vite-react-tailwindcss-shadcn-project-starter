import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "../theme-provider";

export function ButtonTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
