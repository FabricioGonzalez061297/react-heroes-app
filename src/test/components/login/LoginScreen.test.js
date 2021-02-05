import { mount } from 'enzyme';
import React from 'react'
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Pruebas en <LoginScreen/>', () => {
    

    const history={
        replace:jest.fn()
    }

    const authContext={
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    const wrapper=mount(
        <AuthContext.Provider value={authContext} >
                <LoginScreen history={history} />
        </AuthContext.Provider>
    );

    test('debe de mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        
       const handleClick= wrapper.find('button').prop('onClick');

       handleClick();

        expect(authContext.dispatch).toHaveBeenCalledWith({type:types.login,payload:{name:'Fabricio'}});
        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();

        expect(history.replace).toHaveBeenCalledWith('/dc');

    });
    
    
})
