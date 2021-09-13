import Router from 'next/router';

function Login()
{
    return (
        <div>
         <form>
            <div><input type="email" placeholder="email here"></input></div> 
            <div><input type="password" placeholder="password here"></input></div> 
            <button type="button" onClick={() => Router.push('/')} >login</button>
         </form>

        </div>

    )

    
}
export default Login