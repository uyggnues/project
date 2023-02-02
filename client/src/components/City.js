import React from 'react';

const City = ({city, width}) => {
    console.log(width)
    return (
        <>
            {width > 1500 ?
                <div className='padding'>
                    <div className='cityCard'>
                        <div className='cityName'>{city.name}</div>
                        <button className='goButton'>Go Here!</button>
                        <div className='cityPopulation'>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                    </div>
                </div>
                :
                <>
                    {width >= 800 ?
                        <div className='city2'>
                            <div className='cityCard2'>
                                <div className='cityName2'>{city.name}</div>
                                <button className='goButton2'>Go Here!</button>
                                <div className='cityPopulation2'>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                            </div>
                        </div>
                        :
                        <>
                            {width < 800 ?

                                <div className='city3'>
                                    <div className='cityCard3'>
                                        <div className='cityName3'>{city.name}</div>
                                        <button className='goButton3'>Go Here!</button>
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
