import React from 'react';

import SampleCard from './SampleCard';

import MultyCard from './MultyCard';

// props => { country }

const Card = ({ reverceTab, country , stylesheetClass, inputForm, onClick }) => {
    const className = ["btn"];               
    const remoteClass = stylesheetClass;
    if (  remoteClass && remoteClass.length > 0 ){
            remoteClass.forEach(this_class => {
                    className.push(this_class);
            });
    }else{
            console.warn("CARD:\nattribute 'stylesheetClass' is empty...");
    }

    return (
        <>
            {reverceTab === 'default' ? <SampleCard country={country} /> : null}
            {reverceTab === 'search' ? <MultyCard inputForm={inputForm}
             onClick={onClick} country={country} /> : null}
        </>
    );
};

export default Card;