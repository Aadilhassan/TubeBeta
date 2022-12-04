import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../pages/staticFiles/logo.png";
import SearchBar from "./SearchBar";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";




export default function HeaderTop(props) {
    const [catagories, setCatagories] = useState(null);

    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const handleSearch = () => {
        router.push(`/search?q=${search}`);
    }
    const fetchCatagories = async () => {
        fetch('/api/catagories')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCatagories(data)
            })
    }


    useEffect(() => {
        fetchCatagories();
    },[])
    return (
<div>
            <div className={styles.header}>
                <Image src={logo} alt="Picture of the author"
                       width={200}
                       height={80} />
                <div className={styles.SearchGroup}>
                    <div>
                        <input type="search" value={search} onChange={handleSearchChange} className={styles.searchBar} placeholder="Search" />
                    </div>
                    <button className={styles.SearchButton} onClick={handleSearch}>Search</button></div>



            </div>

    <div className={styles.catagoryContainer}>
        {
            catagories && catagories.map((catagory) => {
                return <div key={catagory.id} className={styles.catagory} onClick={() => router.push(`/?catagory=${catagory.id}`)}>{catagory.snippet.title.replace(/ /g,'')}</div>
            })
        }
    </div>
</div>



    )
}