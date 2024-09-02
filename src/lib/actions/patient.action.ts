"use server"
import { ID } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils"

export const createUser = async (user:CreateUserParams) => {

    try {
        console.log("********start creating user********")
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        )
        console.log("********end creating user********")

        return parseStringify(newUser)
        
    }catch (error:any) {
        console.error("An error occurred while creating a new user:",error)
        if (error?.code === 409) {
            return {
                success: false,
                error: "User already exists",
            };
        }
    }

}

export const getUsers = async (id:string) => {
    try {
        const user =await  users.get(id)

        

        return parseStringify(user)
    }
    catch (error:any) {
        console.error("An error occurred while fetching users:", error)
        console.log(error?.code)
    }
}