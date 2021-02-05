import { mount } from "enzyme";
import React from 'react'
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";


describe('pruebas en <AppRouter/>', () => {

        const authContext={
            user:{logged:false},
            dispatch:jest.fn()
        }

        test('debe de mostrar login sino esta autenticado', () => {
            const wrapper=mount(
                <AuthContext.Provider value={authContext} >
                    <AppRouter/>
                </AuthContext.Provider>
            );

            expect(wrapper).toMatchSnapshot();
        });

        test('Debe de mostrar el componente inicial si esta autenticado', () => {

            
            const authContext={
                user:{logged:true,name:'fabricio'},
                dispatch:jest.fn()
            }
            const wrapper=mount(
                <AuthContext.Provider value={authContext} >
                    <AppRouter/>
                </AuthContext.Provider>
            );

            expect(wrapper.find('.navbar').exists()).toBe(true);

        });
        
        
})
