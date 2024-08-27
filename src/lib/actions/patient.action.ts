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
        
    }catch (error) {
        console.error("An error occurred while creating a new user:",error)
    }

}