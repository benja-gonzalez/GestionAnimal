import { Observable, of } from "rxjs";
import { EErrorTitle, IConfigErrorData } from "../entities/config-error-data.interface";

const errors: ReadonlyArray<IConfigErrorData> = [
    /* {
        data: {
            title: EErrorTitle.SRV_ERROR,
            subtitle: 'subtitle-error',
            message: 'Se produjo un error en la coneccion al servidor.'
        },
        status: 500
    },
    {
        data: {
            title: EErrorTitle.DB_ERROR,
            subtitle: 'subtitle-error',
            message: 'Se produjo un error en la consulta a la base de datos.'
        },
        status: 501
    },
    {
        data: {
            title: EErrorTitle.ERROR,
            subtitle: 'subtitle-error',
            message: 'Se produjo un error al consultar los datos.'
        },
        status: 400
    },
    {
        data: {
            title: EErrorTitle.AUTH_ERROR,
            subtitle: 'subtitle-error',
            message: 'No esta autorizado para esa accion.'
        },
        status: 401
    },
    {
        data: {
            title: EErrorTitle.NOT_FOUND_ERROR,
            subtitle: 'subtitle-error',
            message: 'No se encontró la páguina buscada.'
        },
        status: 404
    },
    {
        data: {
            title: EErrorTitle.OK,
            subtitle: 'subtitle-ok',
            message: 'Se cargaron los animales correctamente.'
        },
        status: 200
    }, */
    
];

export const getMockDataError = (): Observable<ReadonlyArray<IConfigErrorData>> => of(errors);