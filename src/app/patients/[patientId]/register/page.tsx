import RegisterForm from "@/components/forms/RegisterForm"
import { getUsers } from "@/lib/actions/patient.action"
import Image from "next/image"
import Link from "next/link"


const Registeration = async ({ params: { patientId } }: SearchParamProps) => {
    const user = await getUsers(patientId)
    console.log("######################", user.name, "*********************")
    return (
        <section className="min-h-screen flex justify-between w-full">
            {/*start  left side  */}
            <div className="flex-1 ">
                <div className=" flex p-4 h-full flex-1 ">
                    <div className=" flex flex-col w-[60%] justify-center  mx-auto max-md:w-full">
                        <Image
                            alt="logo"
                            height={32}
                            width={161}
                            src={"/assets/icons/logo-full.svg"}
                            className="mb-12"
                        />

                        <p className=" mb-3 font-bold text-xl capitalize">Welcome <span className=" text-green-400">{user.name}</span> </p>

                        <p className="mb-2 max-sm:text-[0.8rem]" >Let us know more about yourself</p>

                        <RegisterForm />

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
                src="/assets/images/register-img.png"
                alt="onboarding-img"
                width={1000}
                height={1000}
                className="max-w-[350px]  max-md:hidden h-screen object-cover rounded-md"
            />
            {/*end   right side  */}
        </section>
    )
}

export default Registeration