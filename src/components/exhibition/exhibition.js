import React from 'react'
//import './exhibition.css';

const Paragrafo = ({children, ink, big}) => {
    return (
        <div style={{ color: ink, textTransform: big}}>
            {children}
        </div>
    )
}

Paragrafo.defaultProps = {
    ink: '#B7245C',
    big: 'uppercase'
}

export default Paragrafo