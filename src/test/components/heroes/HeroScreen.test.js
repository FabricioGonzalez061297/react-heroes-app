import { mount } from 'enzyme';
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('pruebas en <HeroScreen/>', () => {
   
    const history={
        length:10,
        goBack:jest.fn(),
        push:jest.fn()
    }


    
    test('debe de mostrar el componente redirect si no hay argumentos en el url', () => {
        
        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen
                    history={history}
                />
            </MemoryRouter>
                
        );    
        expect(wrapper.find('Redirect').exists()).toBe(true);
    
    });
    
    test('debe de mostrar un  herro si el parametro existe y se encuenta', () => {
        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
                
        );  

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('debe de regresar a la pantalla anterior con push', () => {
        const history={
            length:1,
            goBack:jest.fn(),
            push:jest.fn()
        }

        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId"  component={()=> <HeroScreen history={history} />}
                 />
            </MemoryRouter>
                
        ); 
        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();


    })

    test('debe de regresar a la pantalla anterior con go back', () => {
        const history={
            length:50,
            goBack:jest.fn(),
            push:jest.fn()
        }

        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId"  component={()=> <HeroScreen history={history} />}
                 />
            </MemoryRouter>
                
        ); 
        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();


    });

    test('debe de llamar el redirect si el hero no existe', () => {
        const history={
            length:50,
            goBack:jest.fn(),
            push:jest.fn()
        }

        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1234']}>
                <Route path="/hero/:heroeId"  component={()=> <HeroScreen history={history} />}
                 />
            </MemoryRouter>
                
        ); 
        
        expect(wrapper.text()).toBe('');
    })
    
    
    

});
