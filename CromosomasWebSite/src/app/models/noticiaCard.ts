export interface noticiaCard 
{
    titulo?: string;
    subtitulo?: string;
    contenido?: string;
    avatar: {
        url: string;
        alt: string;
    };
    imagen: {
        url: string;
        alt: string;
    };
}