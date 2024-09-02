"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { PatientFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.action"
import { useRouter } from "next/navigation"
import { FormFieldType } from "./PatientForm"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { Doctors, genderOptions } from "../../../constans"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"


const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof PatientFormValidation>>({
        resolver: zodResolver(PatientFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
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

                    {/* start selection  */}

                    <CustomInput
                        control={form.control}
                        fieldType={FormFieldType.SELECT}
                        name={"primaryPhyisician"}
                        label="Primary care physician"
                        placeholder="EX: Dr. John Doe"
                    >
                        {
                            Doctors.map((doctor, i) => (
                                <SelectItem key={i} value={doctor.name}
                                >
                                    <div className=" flex gap-2 items-center">
                                        <Image src={doctor.image} alt={doctor.name} width={20} height={20} />
                                        {doctor.name}
                                    </div>
                                </SelectItem>
                            ))
                        }
                    </CustomInput>

                    {/* end selcetion  */}

                    {/* start insurance section  */}
                    <div className=" flex gap-4 justify-between max-lg:flex-col">
                        <div className=" flex-1 max-lg:w-full">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.INPUT}
                                name={"insuranceProvider"}
                                label="insurance Provider"
                                placeholder="ex: BlueCross"
                            />
                        </div>
                        <div className=" flex-1">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.INPUT}
                                name={"insurancePolicyNumber"}
                                label="Insurance policy number"
                                placeholder="ex: ABC1234567"
                            />
                        </div>

                    </div>
                    {/* end insurance section  */}

                    {/* start Allergies and  Current medications */}
                    <div className=" flex gap-4 justify-between max-lg:flex-col">
                        <div className=" flex-1 max-lg:w-full">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.TEXTAREA}
                                name={"allergies"}
                                label="Allergies (if any )"
                                placeholder="ex: Peanuts, Penicillin, Pollen"
                            />
                        </div>
                        <div className=" flex-1">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.TEXTAREA}
                                name={"currentMedication"}
                                label="Current medications"
                                placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                            />
                        </div>
                    </div>
                    {/* end Allergies and  Current medications */}

                    {/*start family  and medical history  */}
                    <div className=" flex gap-4 justify-between max-lg:flex-col">
                        <div className=" flex-1 max-lg:w-full">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.TEXTAREA}
                                name={"familyMedicalHistory"}
                                label="Family history"
                                placeholder="ex: Diabetes, Heart disease"
                            />
                        </div>
                        <div className=" flex-1">
                            <CustomInput
                                control={form.control}
                                fieldType={FormFieldType.TEXTAREA}
                                name={"pastMedicalHistory"}
                                label="Medical history"
                                placeholder="ex: Cancer, Stroke"
                            />
                        </div>
                    </div>
                    {/* end family  and medical history  */}
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