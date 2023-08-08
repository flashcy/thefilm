import styles from '../styles/Header.module.css';
import React from 'react';
import Button from './Button';
import Login from './Login';

function Header () {
    const targetContainer = React.useRef();

    const [scrollColor, setScrollColor] = React.useState('black');

    const handleScroll = () => {
        if(window.scrollY > 20) {
            targetContainer.current.style.backgroundColor = 'rgba(30,30,30,1)';
            targetContainer.current.style.color = 'white';
            setScrollColor('white');
        }
        else {
            targetContainer.current.style.backgroundColor = 'rgba(0,0,0,0)';
            targetContainer.current.style.color = 'black';
            setScrollColor('black');
        }
    };
    React.useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // 모달창 상태
    const [isShowing, setIsShowing] = React.useState(false);

    const openModal = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div className={styles.container} ref={targetContainer}>
            <strong>The Film</strong>
            <div className={styles.buttons}>
                <span onClick={openModal}>
                    <Button link="#" name="LOGIN" color={scrollColor}/>
                    <Login isOpen={isShowing} onClose={setIsShowing}/>
                </span>
                <Button link="#" name="ABOUT" color={scrollColor}/>
            </div>
        </div>
    );
}

export default Header;