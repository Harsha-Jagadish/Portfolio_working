import{ createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url/";

export const config = {

    dataset:'production',
    projectId:'st8z0yhc',
    apiVersion: '2023-11-07',
    useCdn:false, //process.env.NODE_ENV === "production",
    token: 'skXxSI8cTOLBkHZRFqfAWKA3rPU9xxXgOSSKRWVQVD6ycr8WnxuGuGvNobUu5c3k5GaykN2QgPbPKHF5aJWozqQFqJgyXPdvaA3WvE3SXnyzE7v0DUkR4amDmJ7ihFklvEO2liisLJMzhHhWHBqmXCyu62dLVGdy0swkDXmsSjqOkV8wNPoJ',

};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);

   