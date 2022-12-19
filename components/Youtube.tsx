import style from "../styles/Youtube.module.css"
import Image from "next/image"
import Link from "next/link"

type style = {
    readonly [key: string] : string
}

const CanalYoutube = `https://www.youtube.com/channel/UCWCfyTJ_plL0x_ZZDy3EQoA`

export default function Youtube(){
    return( 
        <div className={style.card}>
            <Link href={CanalYoutube} target={`_blank`} className={style.link}>
                <div>
                    <p className={style.title}>
                        Inscreva-se em nosso canal do Youtube
                    </p>
                    <p className={style.description}>
                        Acompanhe nossas Missas ao vivo.
                    </p>
                </div>
                <Image alt="news" src={`https://img.icons8.com/ios-filled/50/e74c3c/youtube-play.png`} width={50} height={50}/>
            </Link>
        </div>
    )
}