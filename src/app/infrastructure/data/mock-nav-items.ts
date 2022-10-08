import { Link } from "../entities/navigation.interface";

// DATA NAVIGATION DEFAULT
export const navItems: ReadonlyArray<Link> = [
    /* { view: 'Cerdas', link: 'cerdas' },
    { view: 'Madres', link: 'madres' },
    { view: 'Padrillos', link: 'padrillos' },*/
    { view: 'Inicio', link: 'home/inicio' },
    { view: 'Animales', link: 'home/animales' },
    { view: 'Server Error', link: 'error/server-error' },
    { view: 'Not Found Error', link: 'error/not-found-error' },
    { view: 'Unauthorized', link: 'error/unauthorized' }
];