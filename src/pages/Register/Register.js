import styles from './Register.module.css';

import { useState, useEffect } from 'react'; 
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    };

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {

    if(authError) {
      setError(authError);
    }

  }, [authError]);

  return (
    <div className={styles.register}>
        <h1>Cadastre-se no Blog</h1>
        <p>Crie sua conta e compartilhe suas histórias!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
              <input 
              type="text"
              name="displayName"
              required
              placeholder='Digite seu nome'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              />
          </label>
          <label>
            <span>Email:</span>
              <input 
              type="email"
              name="email"
              required
              placeholder='Digite seu email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <label>
            <span>Senha:</span>
              <input 
              type="password"
              name="password"
              required
              placeholder='Digite uma senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              />
          </label>
          <label>
            <span>Confirmação de Senha:</span>
              <input 
              type="password"
              name="confirmPassword"
              required
              placeholder='Confirme sua senha' 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </label>
          {!loading && <button className='btn'>Cadastrar</button>}
          {loading && <button className='btn' disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p> }
        </form>
    </div>
  );
};

export default Register;