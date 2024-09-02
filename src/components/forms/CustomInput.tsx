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
import { E164Number } from "libphonenumber-js/core";
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form";
import { FormFieldType } from './PatientForm';
import Image from 'next/image';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
interface CustomProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType
    label?: string;
    placeholder?: string;
    iconSrc?: string
    iconAlt?: string
    showTimeSelect?: boolean
    renderSkeleton?: (field: any) => React.ReactNode
    children?: React.ReactNode
}

const CustomField = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className=" flex rounded-md   border border-dark-500 bg-dark-400 ">
                    {
                        props.iconSrc && props.iconAlt &&
                        <Image
                            src={props.iconSrc}
                            alt={props.iconAlt}
                            width={24}
                            height={24}
                        />
                    }

                    <FormControl
                        className=' '
                    >
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className='border-0 input-style'
                        />
                    </FormControl>
                </div>
            )

        case FormFieldType.PHONE:
            return (
                <div>
                    <FormControl>
                        <PhoneInput
                            defaultCountry="US"
                            placeholder={props.placeholder}
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            onChange={field.onChange}
                            className='phone-input'
                        />
                    </FormControl >
                </div>
            )
        case FormFieldType.DATE_PICKER:
            return (
                <div className=" flex rounded-md   border border-dark-500 bg-dark-400">
                    {
                        props.iconSrc && props.iconAlt &&
                        <Image
                            src={props.iconSrc}
                            alt={props.iconAlt}
                            width={24}
                            height={24}
                            className='ml-2'
                        />
                    }
                    <FormControl>
                        <DatePicker
                            showTimeSelect={props.showTimeSelect ?? false}
                            selected={field.value}
                            onChange={(date: Date | null) => field.onChange(date)}
                            timeInputLabel="Time:"
                            placeholderText={"MM/dd/yyyy"}
                            dateFormat="MM/dd/yyyy h:mm aa"
                            className=' p-2 placeholder:text-dark-600 w-full'
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.SKELETON:
            return props.renderSkeleton ? props.renderSkeleton(field) : null
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={props.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {props.children}
                        </SelectContent>
                    </Select>
                </FormControl>
            )
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className='border-0 bg-dark-400  focus-visible:ring-0 focus-visible:ring-offset-0'
                    />
                </FormControl>
            )
        default:
            return null
    }
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