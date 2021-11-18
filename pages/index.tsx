/* eslint-disable @next/next/no-sync-scripts */

import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="">
        <main className="">
          <h1 className="">
            HispanoSoluciones.Com <br />
            <a href="https://nextjs.org"> Next.js & TypeScript</a>
          </h1>
          <span className="">
            <Image
              src="/HispanoSoluciones-icons.ico"
              alt="Vercel Logo"
              width={400}
              height={400}
            />
          </span>
        </main>
      </div>
    </>
  );
}
