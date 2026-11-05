import {useState} from 'react';
import { useNavigate } from 'react-router';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            console.log(email, password);
            navigate('/home');
        }}>
            <h3>Login:</h3>
            <label htmlFor="email">Email:</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <label htmlFor="password">Senha:</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Senha"  
           />
           <button type="submit">Entrar</button>
        </form>
    )
};

export default Login