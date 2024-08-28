"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.action"
import { useRouter } from "next/navigation"

import { FormFieldType } from "./PatientForm"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { genderOptions } from "../../../constans"


const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        console.log(values)

    }

    return (
        <section className="w-[100%]  ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                    <CustomInput control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name={"name"}
                        label="Username"
                        placeholder="Enter your username"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />

                    {/*start  Email and Phone  */}
                    <div className=" flex gap-4 justify-between max-lg:flex-col">
                        <div className=" flex-1">
                            <CustomInput control={form.control}
                                fieldType={FormFieldType.INPUT}
                                name={"email"}
                                label="Email"
                                placeholder="Enter your Email"
                                iconSrc="/assets/icons/email.svg"
                                iconAlt="email"
                            />
                        </div>
                        <div className="flex-1">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.PHONE}
                                name="phone"
                                label="Phone"
                                placeholder="(555) 123-4567"
                            />
                        </div>


                    </div>
                    {/*end   Email and Phone  */}

                    {/* start  Birth Date and gender  */}
                    <div className=" max-sm:items-start flex gap-4 justify-between items-center  max-lg:flex-col">
                        <div className=" flex-1 max-lg:w-full">
                            <CustomInput control={form.control}
                                fieldType={FormFieldType.DATE_PICKER}
                                name={"birthDate"}
                                label="Birth Date"
                                placeholder="Select Birth Date"
                                iconSrc="/assets/icons/calendar.svg"
                                iconAlt="birth date"
                                showTimeSelect={true}
                            />
                        </div>

                        <div className="flex-1 ">
                            <CustomInput control={form.control}
                                fieldType={FormFieldType.SKELETON}
                                name={"gender"}
                                label="Gender"
                                renderSkeleton={
                                    (field) =>
                                        <div className="">
                                            {/* apply skeleton */}
                                            <RadioGroup
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <div className=" flex gap-2  max-sm:flex-col">
                                                    {
                                                        genderOptions.map((option, i) => (
                                                            <div className=" flex gap-2  p-2 rounded-md
                                                            border-2 border-dark-500 bg-dark-400
                                                            border-dashed
                                                            "
                                                                key={option.value}
                                                            >
                                                                <RadioGroupItem value={option.value} id={option.value} />

                                                                <Label htmlFor={option.value}>{option.label}</Label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </RadioGroup>
                                        </div>}
                            />

                        </div>
                    </div>
                    {/* end   Birth Date and gender  */}

                    <SubmitButton
                        isLoading={isLoading}
                    >
                        Get Started
                    </SubmitButton>

                </form>
            </Form>
        </section>
    )
}

export default RegisterForm