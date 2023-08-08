import { createPortal } from "react-dom";
import styles from '../styles/Login.module.css';

function Login({isOpen, onClose}) {
    if(!isOpen) {
        return null;
    }

    const onClick = (e) => {
        e.stopPropagation();
        console.log("Clicked!");
    }

    return createPortal(
        <>
            <div className={styles.modalOverlay}>
            </div>
            <span className={styles.modalClose} onClick={() => onClose(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <div className={styles.modalBody}>
            <h1 className={styles.title}>Social Hackathon 구현 연습중입니다!</h1>
            <p className={styles.desc}>로그인을 통해</p>
            <p className={styles.desc}>더 자유롭게 웹사이트를 둘러보세요!</p>
            <button onClick={onClick} className={styles.google}>Google 계정으로 로그인</button>
            <p className={styles.desc2}>로그인시 서비스 이용약관과 개인정보 처리방침에 동의하게 됩니다. </p>
            </div>
        </>,
        document.getElementById('modal-root')
    );
};

export default Login;