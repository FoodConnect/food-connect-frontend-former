import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full ">
        <div className="relative">
          <Image
            className="absolute m-auto top-0 bottom-10 left-0 right-12 z-10 animate-bounce"
            src="/3.svg"
            alt="Food Connect Logo"
            width={175}
            height={100}
            priority
          />
          {/* <Image className="absolute z-10" src="/4.svg" alt="Food Connect Logo" width={500} height={100} priority /> */}

          <Image className="relative z-0" src="/5.svg" alt="Food Connect Logo" width={500} height={100} priority />
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        <p className="relative  flex w-full justify-center border-b">more exciting things coming soon...</p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/FoodConnect/food-connect-frontend"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Frontend Repo{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Check out this frontend&apos;s in-progress repo...</p>
        </a>
        <a
          href="https://github.com/FoodConnect/food-connect-api"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Backend API Repo{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Check out the API in progress...</p>
        </a>
      </div>
    </main>
  );
}
