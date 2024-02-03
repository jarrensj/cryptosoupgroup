import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">crypto soup group</h1>
      <p>Join the conversation on X with the&nbsp;
        <Link href="https://twitter.com/search?q=%23cryptosoupgroup" className="text-blue-500 hover:underline" target="_blank">
          #cryptosoupgroup
        </Link>
      </p>
    </main>
  );
}
