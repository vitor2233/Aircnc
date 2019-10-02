import React, { useState} from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();
  
      const response = await api.post('sessions', { email });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');
    }
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para desenvolvedores e encontre <strong>promessas</strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" value={email} placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)} />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}