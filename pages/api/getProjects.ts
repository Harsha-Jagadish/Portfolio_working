// app/api/projects.tsx
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity/sanity";
import { Project } from '../../typings';
import { NextApiRequest, NextApiResponse } from 'next';

const query = groq`
*[_type == "project"]{
    ...,
    technologies[]->
}
`;

type Data={
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
){
    const projects: Project[] = await sanityClient.fetch(query);
    res.status(200).json({projects})
}