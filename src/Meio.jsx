import style from './Meio.module.css'
import { Principal } from './Principal.jsx'
import martelo from './assets/martelo.jpeg'
import furadeira from './assets/furadeira.jpeg'
import tijolos from './assets/tijolos.jpeg'
import pregos from './assets/pregos.jpg'
import alicate from './assets/alicate.webp'
import trena from './assets/trena.webp'
export function Meio(){
    return(
        <main className={style.main}>
       <Principal src={martelo} />
       <Principal src={alicate}/>
       <Principal src={pregos}/>
       <Principal src={furadeira}/>
       <Principal src={trena}/>
       <Principal src={tijolos}/>
        </main>
    )
}