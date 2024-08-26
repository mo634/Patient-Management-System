import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Image from "next/image"

interface SubmitButtonProps {
    children: React.ReactNode,
    className?: string,
    isLoading:boolean
}
const SubmitButton = ({ children, className,isLoading }: SubmitButtonProps) => {
    return (
        <Button type="submit"
            disabled={isLoading}
            className={cn(" bg-green-500 hover:bg-green-500 submit-btn",className)}
        >
            {
                isLoading ?
                <div className=" flex gap-4 items-center">
                    <Image
                    src={"/assets/icons/loader.svg"}
                    width={24}
                    height={24}
                    alt="loader"
                    className="animate-spin"
                    />
                    Loading...
                </div> 
                :
                  children
            }
           
        
        </Button>
    )
}

export default SubmitButton