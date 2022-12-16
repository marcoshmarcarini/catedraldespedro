import style from "../styles/Revista.module.css"
import Image from "next/image"
import Link from "next/link"

type style = {
    readonly [key: string] : string
}


export default function Revista(){

    return( 
        <div className={style.card}>
            <Link href={`revista`}>
                <p className={style.title}>
                    Revista: O Pescador 133 Edição Dezembro 2022
                </p>
                <p className={style.description}>
                    Fique por dentro das notícias da sua comunidade
                </p>
                <Image alt="news" src={`https://img.icons8.com/ios/50/null/news.png`} width={50} height={50}/>
            </Link>
        </div>
    )
}