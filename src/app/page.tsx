import ThemeButton from "~/components/ThemeButton";

export default function Home() {
  return (
    <div className="h-screen dark:bg-[#1b1b1f] bg-white transition-all duration-300 w-full flex justify-center items-center">
      <ThemeButton />
    </div>
  )
}
