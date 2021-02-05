import React,{useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import './LoginScreen.css';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

  

    const handleLogin=()=>{
        // history.push('/');
        const user={name:'Fabricio'};
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({type:types.login,payload:user });
       


        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            {/* <h2>Login</h2>
            <hr></hr>

            <button type="button" onClick={handleLogin} className="btn btn-primary">
                Ingresar
            </button> */}
            <form>

                <div className="imgcontainer">
                    <img src="https://img.icons8.com/bubbles/2x/user-male.png" alt="user" className="avatar" />
                </div>

                <div className="container_app">
                        <label htmlFor="uname"  > <b>Usuario</b></label>
                        <input type="text" placeholder="Ingrese su usuario" name="uname" />

                        <label htmlFor="pwd"> <b>Contraseña</b> </label>
                        <input type="password" placeholder="Ingrese su contraseña" name="pwd" />
                        

                        <button className="login" onClick={handleLogin} type="button" >  Ingresar</button>
                        <label style={{marginBottom:'20px'}} > <input  type="checkbox"  name="remenber" /> Recordarme </label>
                
                </div>

                <div >

                </div>

            </form>


        </div>
    )
}
