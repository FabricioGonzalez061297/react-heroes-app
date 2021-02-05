// import {mount} from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoutes } from '../../routers/PrivateRoutes';

describe('pruebas en <PrivatesRoutes/>', () => {

    const props = {
        location: {
            pathname: '/dc'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe mostrar el componente si está autenticado y guardar en localstorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');

    });

    test('debe de bloquear el componente sino esta autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );


        expect(wrapper.html()).toBe('');

    });



});
