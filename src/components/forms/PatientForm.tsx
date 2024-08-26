"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomInput from "./CustomInput"
const formSchema = z.object({
    username: z.string().min(2).max(50),
})
export enum FormFieldType {
    INPUT = "input",
    CHECKBOX = "checkbox",
}
const PatientForm = () => {

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
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

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default PatientForm