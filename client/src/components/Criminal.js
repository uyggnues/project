import React, { useState, useEffect }from 'react';



function useWindowSize () {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize', handleResize)
    }, [])
    
    return size
}

const Criminal = ({criminal}) => {
    const[height, width] = useWindowSize();
    const bounty = criminal.age + criminal.sentenced
    const criminalsHeight = Math.round(criminal.height * 10)/10

    return (
        <div className='padding'>
            <div>
                {width > 1500 && !criminal.in_jail ?
                    <div className='wantedPoster'>
                        <div className='card'>
                            <div className='front'>
                                <img className="image" src={criminal.image} alt="post"/>
                                <div className='bounty'>{(bounty * 10000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                            </div>
                            <div className='back'>
                                <div className='posterText'>Name: {criminal.name}</div>
                                <div className='posterText'>Age: {criminal.age}</div>
                                <div className='posterText'>Address: {criminal.address}</div>
                                <div className='posterText'>Birthday: {criminal.birthday}</div>
                                <div className='posterText'>Height: {criminalsHeight}ft</div>
                                <div className='posterText'>Weight: {criminal.weight}Ib</div>
                                <div className='posterText'>Sentenced: {criminal.sentenced}</div>
                            </div>
                            <button>Update a criminal</button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default Criminal;
