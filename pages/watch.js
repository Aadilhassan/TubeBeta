
import {useRouter} from "next/router";
export default function watch(){

    const router = useRouter()
    const {id} = router.query

    return(
        <div>
            <h1>Watch{id}</h1>
        </div>
    )
}