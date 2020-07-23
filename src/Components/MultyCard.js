import React from 'react';

import Icon from './core/Icon';

import Button from './core/Button';

// props => { stylesheetClass }

const MultyCard = ({ country, stylesheetClass, inputForm, onClick}) => {
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
            <>
                <div className="input-group my-3">
                    <input onChange={inputForm} type="text" className="form-control" />
                    <div className="input-group-append">
                        <Button onClick={onClick} name="Search" stylesheetClass={["btn-primary"]} />
                    </div>   
                </div>           
                <div className="row mx-0 mt-4 row-cols-1 row-cols-md-4">
{            country.map((item,i)=> {    return (
                <div key={i} className="col mb-4">
                    <div className="card h-100">
                        <img src={item.flag} className="card-img-top" alt={item.name} />
                        <div className="card-body" style={{backgroundColor: "#d5d6d8"}}>
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th colSpan="2" scope="row">Country</th>
                                        <td className="w-50">{item.name}</td>
                                    </tr>
                                    <tr>
                                        <td><Icon name="location_city"/></td>
                                        <th scope="row">Capital</th>
                                        <td className="w-50">{item.capital}</td>
                                    </tr>
                                    <tr>
                                        <td><Icon name="filter_hdr"/></td>
                                        <th scope="row">Region</th>
                                        <td className="w-50">{item.region}</td>                           
                                    </tr>
                                    <tr>
                                        <td><Icon name="group"/></td>
                                        <th scope="row">Populaton</th>
                                        <td className="w-50">{new Intl.NumberFormat('de-DE').format(item.population)}</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)
                }
            )}


                </div>
  
            </>
            );
};

export default MultyCard;