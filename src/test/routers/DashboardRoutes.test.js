import { mount, shallow } from "enzyme";
import React from 'react'
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";


describe('Pruebas en <DashboardRoutes/>', () => {

    const authContext={
        user:{name:'fabricio',logged:true},
        dispatch:jest.fn()
    }

    test('Debe mostrarse correctamente', () => {
            const wrapper= mount(
                <AuthContext.Provider value={authContext} >
                    <MemoryRouter>
                    <DashboardRoutes />
                    </MemoryRouter>
                </AuthContext.Provider>
            );
            
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('fabricio');
    });
    
})
