//CSS
import styles from './About.module.css';

//React
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto foi criando durante meu curso de React.JS em 2022,<br></br> com as seguintes tecnologias; Front-end: React.JS e no Back-end: Firebase.</p>
        <p>possui todas as funcionalidades de cadastro, login, criação e edição de posts<br></br> com as devidas validações configuradas na aplicação e no back-end.</p>
        <p>Fique a vontade para testar ou navegar e ler os posts de exemplo, se assim desejar.</p>
        <p>Fabio Soutto Dev</p>
        <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  );
};

export default About;