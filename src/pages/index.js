import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex items-center w-full min-h-screen p-7 md:p-20 font-poppins">
        <div className="md:w-1/2 md:p-4">
          <div className="mb-4 space-y-4 font-semibold">
            <p className="text-4xl md:text-6xl">
              <strong>Welcome to my personal website!</strong>
            </p>
            <p className="text-md md:text-2xl">
              I'm Azed, Feel free to explore and learn more about me and my
              work.
            </p>
          </div>
          <Link
            href={"/login"}
            className="p-2 px-6 text-sm text-white bg-blue-600 rounded-md md:text-xl hover:bg-blue-900"
          >
            {"Get Started >"}
          </Link>
        </div>
      </main>
    </>
  );
}
