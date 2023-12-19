import styles from './style/footer.module.css';

function Footer({content}){
    return(
    <footer className={styles.Footer}>
      <p className={styles.FooterText}>{content}</p>
    </footer>
    )
}

export default Footer;