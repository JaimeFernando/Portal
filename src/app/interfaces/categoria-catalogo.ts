export interface CategoriaCatalogo{
    idCategoriaCatalogo: number;
    nombre: string;
    descripcion: string;
    esActivo: boolean;
    created_at: Date;
    created_by: number;
    updated_at: Date;
    updated_by: number;
    deleted_at: Date;
    deleted_by: number;
    orden: number;
}