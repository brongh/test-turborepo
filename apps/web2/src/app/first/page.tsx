"use client";
import { useRouter } from "next/navigation";

export default function FirstPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1>Web2 - First Page</h1>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log("clicked");
          router.push("/web2");
        }}
      >
        home
      </button>
    </main>
  );
}
