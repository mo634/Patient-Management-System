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

export enum FormFieldType {
    INPUT = "input",
    CHECKBOX = "checkbox",
    PHONE = "phone",
    DATE_PICKER = "datePicker",
    SKELETON="skeleton"
}
const PatientForm = () => {
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

    const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
        try {

            console.log(name, email, phone)

            setIsLoading(true)

            const userData = { name, email, phone }

            const newUser = await createUser(userData)

            console.log(newUser)

            if (newUser) {
                router.push(`/patients/${newUser.$id}/register`)
            }


        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
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

                    <CustomInput control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name={"email"}
                        label="Email"
                        placeholder="Enter your Email"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />

                    <CustomInput
                        control={form.control}
                        fieldType={FormFieldType.PHONE}
                        name="phone"
                        label="Phone"
                        placeholder="(555) 123-4567"
                    />

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

export default PatientForm