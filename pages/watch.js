
import {useRouter} from "next/router";
import HeaderTop from "../components/HeaderTop";
export default function watch(){

    const router = useRouter()
    const {id} = router.query

    return(
        <div>
            <HeaderTop />
        <div style={{width: '100vw', height: '80vh'}}>

            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} frameBorder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>

    )
}