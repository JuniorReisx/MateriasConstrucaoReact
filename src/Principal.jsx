import style from './Principal.module.css'
import PropTypes from 'prop-types';

export function Principal({src}){
    return(
        <main className={style.main}>
  <div className={style.card}>
  <div className={style.card2}>
    <img className={style.img} src={src} alt="" />
  </div>
</div>
        </main>
    )
}


Principal.propTypes = {
    src: PropTypes.string.isRequired
};
