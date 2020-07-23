import React from 'react';

import Icon from './core/Icon';

// props => { stylesheetClass }

const SimpleCard = ({ country, stylesheetClass}) => {
        const className = ["btn"];               
        const remoteClass = stylesheetClass;
        if (  remoteClass && remoteClass.length > 0 ){
                remoteClass.forEach(this_class => {
                        className.push(this_class);
                });
        }else{
                console.warn("MultiCard:\nattribute 'stylesheetClass' is empty...");
        }

        return (
            <div className="card w-25 mx-auto mt-3">
            <img src={country.flag} className="card-img-top" alt={country.name} />
            <div className="card-body">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th colSpan="2" scope="row">Country</th>
                            <td className="w-50">{country.name}</td>
                        </tr>
                        <tr>
                            <td><Icon name="location_city"/></td>
                            <th scope="row">Capital</th>
                            <td className="w-50">{country.capital}</td>
                        </tr>
                        <tr>
                            <td><Icon name="filter_hdr"/></td>
                            <th scope="row">Region</th>
                            <td className="w-50">{country.region}</td>                           
                        </tr>
                        <tr>
                            <td><Icon name="group"/></td>
                            <th scope="row">Populaton</th>
                            <td className="w-50">{new Intl.NumberFormat('de-DE').format(country.population)}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
};

export default SimpleCard;