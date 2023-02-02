import React from 'react';

const City = ({city, width}) => {
    return (
        <>
            {width > 1500 ?
                <div className='padding'>
                    <div className='cityCard'>
                        <span className='cityName'>{city.name}</span>
                        <span className='cityPopulation'>{city.population}</span>
                    </div>
                </div>
                :
                <>
                    {width > 800 ?

                        <div className='city2'>
                            <img className="image2" src={city.image} alt="post"/>
                            <span className='cityName2'>{city.name}</span>
                            <span className='cityPopulation2'>{city.population}</span>
                        </div>
                        :
                        <>
                            {width <= 400 || width < 800 ?

                                <div className='city3'>
                                    <img className="image3" src={city.image} alt="post"/>
                                    <span className='cityName3'>{city.name}</span>
                                    <span className='cityPopulation3'>{city.population}</span>
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
