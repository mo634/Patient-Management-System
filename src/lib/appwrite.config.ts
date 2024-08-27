import * as sdk from "node-appwrite"

// extract env variables 

export const {
    PROJECT_ID,
    DATABASE_ID,
    API_KEY,
    PATIENT_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT,
    PROJECT_STORAGE,
}= process.env
console.log("dasdas",    PROJECT_ID,
    DATABASE_ID,
    API_KEY,
    PATIENT_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT,
    PROJECT_STORAGE,)
// connect project  with appwrite 

const client = new sdk.Client();

client
    .setEndpoint(NEXT_PUBLIC_ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);
console.log("connected")
// connect with database ,users , messaging , storage 

export const database = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
