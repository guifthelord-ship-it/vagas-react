import { useState } from "react";
function News() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('');
    
    

    function handleOnClick(e) {
        e.preventDefault();

        if (!email.includes('@')){
            setError('Por favor, insira um email valido');
            setSuccess('')
            return;
        }else{
            setError('');
            setSuccess('Obrigado por assinar nossa newsletter!')
            setEmail('');
        }
        
    }

    return(
        <form>
            <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form__input" 
                type="email" 
                placeholder="seu@email.com"
            />
            
            <button 
                className="btn" 
                type="submit"
                onClick={handleOnClick}
            >
                Assinar
            </button>
        {error && <p style={{color: "red"}}>{error}</p>}
        {success &&<p style={{color: "green"}}>{success}</p>}


        </form>
    )
};

export default News;