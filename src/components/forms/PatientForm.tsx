"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import SubmitButton from "../SubmitButton"
import { useState } from "react"


const formSchema = z.object({
    username: z.string().min(2).max(50),
})
export enum FormFieldType {
    INPUT = "input",
    CHECKBOX = "checkbox",
    PHONE = "phone"
}
const PatientForm = () => {
const [isLoading ,setIsLoading]=useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <section className="w-[100%]  ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">

                    <CustomInput control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name={"username"}
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