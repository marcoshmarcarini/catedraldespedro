import style from "../styles/Revista.module.css"
import Image from "next/image"
import Link from "next/link"

type style = {
    readonly [key: string] : string
}


export default function Revista(){

    return( 
        <div className={style.card}>
            <Link href={`revistas/Revista_O_Pescador_135.pdf`} className={style.link}>
                <div>
                    <p className={style.title}>
                        Revista: O Pescador 135 Edição Fevereiro 2023
                    </p>
                    <p className={style.description}>
                        Fique por dentro das notícias da sua comunidade
                    </p>
                </div>
                <Image alt="news" src={`https://img.icons8.com/ios/50/6c5ce7/news.png`} width={50} height={50}/>
            </Link>
        </div>
    )
}