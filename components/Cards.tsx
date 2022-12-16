import styles from "../styles/Card.module.css"
import Image from "next/image"

export default function Cards(){
    return(
        <>
            <div className={styles.cardArea}>
                <div className={styles.txtArea}>
                    <p className={styles.title}>Paróquia São Pedro</p>
                    <p className={styles.subtitle}>Catedral</p>
                </div>
                <div className={styles.imageArea}>
                    <Image alt="Logo" src={`/logo.png`} width={150} height={150}/>
                </div>
            </div>
        </>
    )
}