import Router from 'next/router';

function Login()
{
    return (
        <div>
         <form>
         <h1>login form</h1>
            <div><input type="email" placeholder="email here"></input></div> 
            <div><input type="password" placeholder="password here"></input></div> 
            <button type="button" onClick={() => Router.push('/')} >login here</button>
         </form>

        </div>

    )

    
}
export default Login