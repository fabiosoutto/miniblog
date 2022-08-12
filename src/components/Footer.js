import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>MiniBlog &copy; 2022 | <a href="https://fabiosouttodev.vercel.app" target="_blank">Fabio Soutto Dev</a> "in code we trust"</p>
    </footer>
  );
};

export default Footer;