import { client } from "@/sanity/lib/client"
import { STARTUPS_AUTHOR_QUERY } from "@/sanity/lib/queries"
import StartupCard, {StartupCardType} from "./StartupCard";

const UserStartups = async({id}:{id:string}) => {
    const startups = await client.fetch(STARTUPS_AUTHOR_QUERY,{id});
  return (
   <>
   {
   startups.length > 0 ?
    startups.map((startup:StartupCardType)=> {
    <StartupCard key={startup._id} post={startups} />
   })
   : <p className="no-result">
         No posts yet
   </p>
}
   </>
  )
}

export default UserStartups