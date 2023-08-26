import React from 'react';
import'../../styles/components/pages/NovedadesPage.css'

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body} = props;

    return (
        <div className='novedades'>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <img src={imagen} className='imgnov'/>
            <div dangerouslySetInnerHTML={{__html:
            body}} />
            <hr/>
        </div>
    );
}

export default NovedadItem;