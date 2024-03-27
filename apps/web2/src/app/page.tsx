"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1>Web2</h1>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log("clicked");
          router.push("/first");
        }}
        className="px-3 py-2 rounded-none bg-white hover:bg-purple-500 active:bg-purple-800 shadow-lg shadow-white"
      >
        home
      </button>
    </main>
  );
}
