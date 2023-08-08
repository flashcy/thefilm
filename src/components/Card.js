import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from '../styles/Card.module.css';

function Card({id, title, coverImg, summary, year}) {
    const observer = new IntersectionObserver((e) => {
        e.forEach((item) => {
            if(item.isIntersecting){
                item.target.style.opacity = '1';
                item.target.style.transform = 'translateY(-50px)';
            }
        });
    });

    const observeTarget = useRef();
    useEffect(() => {
        observer.observe(observeTarget.current);
    }, []);

    return (
        <div className={styles.card} key={id} ref={observeTarget}>
            <img className={styles.cardImg} src={coverImg}/>
            <div className={styles.cardBody}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.year}>{year}</h3>
                <p>{(summary.length > 150 ? summary.slice(0, 150) + "..." : summary)}</p>
            </div>
        </div>
    );
}

export default Card;
