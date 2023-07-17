export interface Catalogo{
    idcatalogo: number;
    nombre: string;
    descripcion: string;
    iddependencia: string;
    idcategoriacatalogo: string;
    idnivelconfidencialidad: string;
    areaatribucion: string;
    fundamentojuridico: string;
    tabledata: string;
    pathinstructivo: string | null;
    apidata: any;
    pathinstructivoapidata: string | null;
    orden: number;
    nombrecustodio: string | null;
    puestocustodio: string | null;
    nombreduenio: string | null;
    puestoduenio: string | null;
    esactivo: boolean;
    updated_at: string | null;
}