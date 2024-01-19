import { Account, Client, Databases, Storage, ID } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject("");

export const account = new Account(client)
export const DB = new Databases(client)
export const storage = new Storage(client)
