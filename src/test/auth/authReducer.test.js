import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    

    test('debe de retornar el estado por defecto', () => {
        const state= authReducer({logged:false},{});

        expect(state).toEqual({logged:false});

    });


    test('debe de autenticar y colocar el nombre del usaurio', () => {

        const action ={
            type:types.login,
            payload:{name:'fabricio'}
        }
        const state = authReducer({logged:false},action);
        expect(state).toEqual({logged:true,name:'fabricio'});
    });


    test('Debe de borrar el name del usuario y logged en false', () => {
        const action={
            type:types.logout
        }

        const state= authReducer({logged:true,name:'fabricio'},action);
        expect(state).toEqual({logged:false});
    });
    
    

});
