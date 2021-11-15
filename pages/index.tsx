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
        <footer className="">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Willo04WF
          </a>
        </footer>
      </div>
      <script>var hostUrl = `assets/`;</script>
      <script src="assets/plugins/global/plugins.bundle.js"></script>
      <script src="assets/js/scripts.bundle.js"></script>
    </>
  );
}
