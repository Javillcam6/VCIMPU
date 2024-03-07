import { useRef, useState } from 'react'
import { BsCaretDown } from "react-icons/bs";
import './CursoSideBar.css'

const menuItems = [
    { 
        name: "Cursos",
        items: [
            "Cursos online",
            "Cursos Nuevos",
            "Cursos gratis",
            "Cursos en oferta"
        ]
    },
    {
        name:"Coaches"
    },
    {
        name: "Categorias",
        items: [
            "Finanzas",
            "Fortalezas",
            "Proyectos",
            "Deportivo",
        ]
    },
    {
        name: "Niveles",
        items: [
            "Introductorio",
            "Intermedio",
            "Avanzado",
            "Completo",
        ]
    }
]

const Icon = ({ icon }) => (    
    <span             
        className='material-symbols-outlined'>
        {icon}
    </span>
)

const NavHeader = () => (
    <header className='sidebar-header'>
        <span>Cursos</span>
    </header>
)

const NavButton = ({
    onClick,
    name,
    icon,
    isActive,
    hasSubNav,
}) => (
    <button
        type="button"
        onClick={() => onClick(name)}
        className={isActive ? "active" : ""}
    >
        {icon && <Icon icon={icon} />}
        <span>{name}</span>
        {hasSubNav && <Icon icon={<BsCaretDown />}/>}
     </button>   
)

const SubMenu = ({
    item, activeItem, handleClick
}) => {
    const navRef = 
        useRef<HTMLDivElement>(null);
    const isSubNavOpen = (item, items) =>
        items.some(
            i => i === activeItem) ||
            item === activeItem;
        const { name, items } = item;

        return (
            <div 
                className={
                    `sub-nav ${isSubNavOpen(name, items)
                    ? "open"
                    : ""}`}
                style={{
                    height: !isSubNavOpen(name, items)
                    ? 0
                    : navRef.current?.clientHeight,
                }}
            >
                <div useRef={navRef} className='sub-nav-inner'>
                    {item?.items.map(subItem => (
                        <NavButton
                        onClick={handleClick}
                        name={subItem}
                        isActive={activeItem === subItem}
                        />
                    ))}
                </div>
            </div>
        )
}

export const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("");
    const handleClick = (item) => 
        setActiveItem(
            item !== activeItem ? item : ""
            );
    return (
        <aside className='sidebar'>
            <NavHeader />
            {menuItems.map((item) => (
                <div>
                    <>
                        <NavButton
                        onClick={handleClick}
                        name={item.name}
                        icon={item.icon}
                        isActive={activeItem === item.name}
                        hasSubNav={!!item.items}
                        />
                        {item.items && (
                            <SubMenu
                                activeItem={activeItem}
                                handleClick={handleClick}
                                item={item}
                            />
                        )}
                    </>
                </div>
            ))}
        </aside>
    )
}

export default Sidebar;
