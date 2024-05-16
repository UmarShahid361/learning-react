import { Account, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6645ef560019695fa92e");

export const account = new Account(client);
export { ID } from "appwrite";
