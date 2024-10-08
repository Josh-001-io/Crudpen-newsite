import { ThemeProvider, useTheme } from "@/components/theme-provider"
import Navbar from "./components/navbar"
import { Button } from '@/components/ui/button'

function App() {
    const {setTheme} = useTheme();
    const toggleTheme = () => {
        console.log ("click me")
        if (theme === "dark") {
            setTheme ("light")
        }
        setTheme ("dark")
    }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Navbar />
        <Button onClick={() => setTheme("light")}>toggle</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
