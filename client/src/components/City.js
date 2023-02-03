import React from 'react';
import {useNavigate} from 'react-router-dom'

const City = ({city, width}) => {


    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/cities/${city.id}/criminals`)
        // debugger
    }
    // console.log(width)
    return (
        <>
            {width > 1500 ?
                <div className='padding'>
                    <div className='cityCard'>
                        <div className='cityName'>{city.name}</div>
                        <button className='goButton' onClick={handleClick}>Go Here!</button>
                        <div className='cityPopulation'>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                    </div>
                </div>
                :
                <>
                    {width >= 800 ?
                        <div className='city2'>
                            <div className='cityCard2'>
                                <div className='cityName2'>{city.name}</div>
                                <button className='goButton2' onClick={handleClick}>Go Here!</button>
                                <div className='cityPopulation2'>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                            </div>
                        </div>
                        :
                        <>
                            {width < 800 ?

                                <div className='city3'>
                                    <div className='cityCard3'>
                                        <div className='cityName3'>{city.name}</div>
                                        <button className='goButton3' onClick={handleClick}>Go Here!</button>
                                        <div className='cityPopulation3'>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </>
                    }
                </>
            }
        </>
    );
}

export default City;
