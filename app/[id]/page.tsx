import { db } from "@/lib/db"
interface Props{
    params:{
        id: string
    }
}
export default async function Page({params}: Props){

    const name = await db.account.findFirst({
        where:{
            password: params.id
        }
    })
    return(
        <div>
            {name.clubname}
        </div>
    )
}