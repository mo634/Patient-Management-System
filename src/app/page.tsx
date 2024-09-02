import PatientForm from "@/components/forms/PatientForm"

import Image from "next/image"
import Link from "next/link"


const Home = () => {
  return (
    <section className="h-screen flex justify-between w-full">
      {/*start  left side  */}
      <div className="flex-1">
        <div className=" flex justify-center items-center  h-full flex-1">
          <div className=" flex flex-col w-[60%]">
            <Image
              alt="logo"
              height={32}
              width={161}
              src={"/assets/icons/logo-full.svg"}
              className="mb-12"
            />


            <PatientForm />
            <div className="mt-10 flex gap-2 items-center">

              <p className="text-dark-600 "> © 2024 CarePluse</p>

              <Link href={"/?admin=true"}
                className="text-green-500"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*end  left side  */}

      {/*start  right side  */}
      <Image
        src="/assets/images/onboarding-img.png"
        alt="onboarding-img"
        width={1000}
        height={1000}
        className="w-[50%]  max-md:hidden"
      />
      {/*end   right side  */}
    </section>
  )
}

export default Home