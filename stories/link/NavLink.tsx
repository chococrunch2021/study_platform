import Link from 'next/link'

export interface NavLinkProps{
    url:string;
    font?:string;
}

export const NavLink = ({url="/",font="Montserrat"}) => {
    return (
        <Link href={`${url}`}>
            
        </Link>
    )
}
