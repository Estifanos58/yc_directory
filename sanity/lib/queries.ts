import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type== "startup" && defined(slug.current)] | order(_createAt desc) {
    _id,
     title,
    slug,
    _createdAt,
    author -> {
        _id,
        name,
        image,
        bio
    },
    views,
    description,
    category,
    image
  
}`);