import { mount } from "enzyme";
import { MemoryRouter,Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

describe('pruebas en <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen:jest.fn(),
        createHref:jest.fn(),
        replace:jest.fn()
    }

    const authContext = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'fabricio'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={authContext} >
            <MemoryRouter>
                <Router history={historyMock} >
                    <Navbar />
                </Router>

            </MemoryRouter>
        </AuthContext.Provider>
    );


    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('fabricio');
    });

    test('debe de llamar el logaout y llamar histori', () => {
        wrapper.find('button').prop('onClick')();

        expect(authContext.dispatch).toHaveBeenLastCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    });



});
