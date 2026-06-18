import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    if (!("startViewTransition" in document)) {
      setTheme(next);
      return;
    }
    (document as any).startViewTransition(() => setTheme(next));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Przełącz motyw"
      className="rounded-full"
    >
      <Sun className="size-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
