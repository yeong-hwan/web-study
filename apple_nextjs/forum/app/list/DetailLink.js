"use client";
import { useRouter, usePathname } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname();

  return (
    <button
      onClick={() => {
        router.push("/");
        // router.prefetch("/");
      }}
    >
      Button
    </button>
  );
}
