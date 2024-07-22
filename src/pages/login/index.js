import Image from "next/image";
import umt from "/public/umt.png";
import Button from "@/components/Button";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen font-poppins">
        <div className="flex flex-row items-center justify-center w-full h-full p-10 bg-lightdark">
          <div className="flex min-[320px]:hidden max-[769px]: items-center justify-center w-1/4 ">
            <Image src={umt} width={250} height={250} quality={100} />
          </div>
          <form action="" className=" md:w-1/4 rounded-md p-6 bg-[#EEEEEE]">
            <h1 className="mb-10 text-2xl font-bold text-center">
              <strong>Login terlebih dahulu!</strong>
            </h1>

            <div className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="p-2 border-2 rounded-md border-b-lightdark"
                  maxLength={50}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="Password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukkan password"
                  className="p-2 border-2 rounded-md border-b-lightdark"
                  maxLength={20}
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Link href={"/"}>
                <Button
                  text={"Login"}
                  color={"bg-blue-600"}
                  hovercolor={"bg-blue-900"}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
