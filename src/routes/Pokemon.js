import {useEffect, useState} from 'react';
import Pokecard from '../components/Pokecard';
import styles from '../styles/Pokemon.module.css';

const fetchPokemon = async (len) => {
    const promiseArr = [];
    for(let i = len; i < len + 20; i++) {
        promiseArr.push(
            (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
        );
    }
    const resolvedData = await Promise.all(promiseArr);
    return resolvedData.map((item, index) => {
        return {
            name: item.name,
            id: index + 1,
            sprite: item.sprites.front_default
        };
    });
};

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const resp = await fetchPokemon(1);
            setPokemon(resp);
            setLoading(false);
        };
        fetchData();
    }, []);


    const handleScroll = () => {
        if(pokemon.length > 151) {
            return;
        }

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.offsetHeight;
    
        // 페이지 끝에 도달했는지 확인
        const reachedBottom = Math.ceil(scrollTop + windowHeight) >= docHeight;
    
        if (reachedBottom) {
            setLoading(true);
            fetchPokemon(pokemon.length).then((newPokemons) => {
                setPokemon([...pokemon, ...newPokemons]);
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트 될 때, 이벤트 리스너를 정리
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={styles.pokemons}>
            {pokemon.map((item) => (
                <Pokecard name={item.name} id={item.id} img={item.sprite}/>
            ))}
        </div>
    )
}

export default Pokemon;