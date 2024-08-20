import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form";
import { FormFieldType } from './PatientForm';
import Image from 'next/image';
interface CustomProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType
    label?: string;
    placeholder?: string;
    iconSrc?: string
    iconAlt?: string
}

const CustomField = ({ field, props }: { field: any; props: CustomProps }) => {
    return (
        <div className=" flex rounded-md  border border-dark-500 bg-dark-400 ">
            {
                props.iconSrc && props.iconAlt &&
                <Image
                    src={props.iconSrc}
                    alt={props.iconAlt}
                    width={24}
                    height={24}
                />
            }

            <FormControl>
                <Input
                    placeholder={props.placeholder}
                    {...field}
                    className='border-0 input-style'
                />
            </FormControl>
        </div>
    )
}


const CustomInput = (props: CustomProps) => {
    const { control, name, label, placeholder, fieldType } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {
                        props.fieldType !== FormFieldType.CHECKBOX && label &&

                        <FormLabel>{label}</FormLabel>
                    }

                    <CustomField
                        field={field}
                        props={props}
                    />


                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomInput