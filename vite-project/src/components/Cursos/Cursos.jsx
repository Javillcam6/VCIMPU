import React from 'react';
import CursoCard from '../Cards/CursoCard';
import Sidebar from '../SideBar/CursoSideBar.jsx'
const Cursos = () =>{
    return (
        <section>
            <div className='curso-container'>
                <div className='sidebarCurso'>
                    <Sidebar/>
                </div>
                <div className='curso-card1'>
                    <CursoCard />
                </div>
            </div>
        </section>
    )
}

export default Cursos

