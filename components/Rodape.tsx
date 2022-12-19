import Link from "next/link"
import style from "../styles/Rodape.module.css"

export default function Rodape(){
    return(
        <div className={style.rodape}>
            <p>Desenvolvido por </p>
            <Link href={`http://comconteudo.com.br/novo/`} className={style.link}>
                Agência Conteúdo.
            </Link>
            
        </div>
    )
}