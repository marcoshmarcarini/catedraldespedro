import Image from "next/image";
import Link from "next/link";
import style from "../styles/Social.module.css"

const Facebook = `https://www.facebook.com/paroquisaopedrocachoeiro`
const Instagram = `https://www.instagram.com/catedraldes.pedro/`

export default function Social(){
    return(
        <div className={style.social}>
            <Link href={Facebook} target={`_blank`} className={style.sociaLink}>
                <Image alt={`Acesse nosso Facebook`} src={`https://img.icons8.com/ios-glyphs/40/2980b9/facebook.png`} width={40} height={40}/>
            </Link>
            <Link href={Instagram} target={`_blank`} className={style.sociaLink}>
                <Image alt={`Acesse nosso Instagram`} src={`https://img.icons8.com/ios-glyphs/40/c44569/instagram.png`} width={40} height={40}/>
            </Link>
        </div>
    )
}