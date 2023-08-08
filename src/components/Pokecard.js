import styles from '../styles/Pokemon.module.css';

function Pokecard({name, id, img}) {
    return (
        <div className={styles.pokecard} key={id}>
            <img src={img}/>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    )
}

export default Pokecard;