import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
// import { heading } from "@/tailwind-utils";


export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);


  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br /> Connect with Enterpreneurs</h1>

      <p className="sub-heading !max-w-3xl"> Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>

      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p  className="text-30-semibold">
        {query ? `Search results for "${query}"`:"All Startups"}
      </p>

      <ul className="mt-7 card_grid">
        {
          posts.length > 0 ?  posts.map((post:StartupCardType, index:number)=>(
            <StartupCard post={post} key={post._id}/>
          )) :(
            <p className="no-results">No startups found</p>
          )
        }
      </ul>

    </section>
    
    </>
  );
}


export type StartupCardType =  {
  _createdAt: Date,
    views: number,
    author: {_id: number, name: string},
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string,
}