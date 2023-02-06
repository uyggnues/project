import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

    
const Criminal = ({criminal, width}) => {
    const params = useParams()
    const cityId = parseInt(params.city_id)
    const navigate = useNavigate()
    const bounty = criminal.age + criminal.sentenced
    const criminalsHeight = Math.round(criminal.height * 10)/10
    // console.log(width)

    const deleteCriminal = () => {
        fetch(`http://localhost:3000/cities/${cityId}/criminals`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        // .then(criminal =>             
        //     setCriminals(current => {
        //     const criminalId = current.findIndex(ele => ele.id === criminal.id)
        //     return [...current.slice(0, criminalId), ...current.slice(criminalId + 1)]
        // }))
    }

    return (
        <div className='padding'>
            <div>
                {width > 1500 && !criminal.in_jail ?
                    <div className='wantedPoster'>
                        <div>
                            <button className='updateButton' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal`)}>Update Info</button>
                            <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
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
                                    <div className='posterText'>Sentenced: {criminal.sentenced} years</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        {width >= 800 && !criminal.in_jail ?
                        <div className='wantedPoster2'>
                            <div>
                                <button className='updateButton2' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal`)}>Update Info</button>
                                <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
                                <div className='card2'>
                                    <div className='front2'>
                                        <img className="image2" src={criminal.image} alt="post"/>
                                        <div className='bounty2'>{(bounty * 10000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                                    </div>
                                    <div className='back2'>
                                        <div className='posterText2'>Name: {criminal.name}</div>
                                        <div className='posterText2'>Age: {criminal.age}</div>
                                        <div className='posterText2'>Address: {criminal.address}</div>
                                        <div className='posterText2'>Birthday: {criminal.birthday}</div>
                                        <div className='posterText2'>Height: {criminalsHeight}ft</div>
                                        <div className='posterText2'>Weight: {criminal.weight}Ib</div>
                                        <div className='posterText2'>Sentenced: {criminal.sentenced}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                        {width < 800 && !criminal.in_jail ?
                        <div className='wantedPoster3'>
                            <div>
                                <button className='updateButton3' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal`)}>Update Info</button>
                                <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
                                <div className='card3'>
                                    <div className='front3'>
                                        <img className="image3" src={criminal.image} alt="post"/>
                                        <div className='bounty3'>{(bounty * 10000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
                                    </div>
                                    <div className='back3'>
                                        <div className='posterText3'>Name: {criminal.name}</div>
                                        <div className='posterText3'>Age: {criminal.age}</div>
                                        <div className='posterText3'>Address: {criminal.address}</div>
                                        <div className='posterText3'>Birthday: {criminal.birthday}</div>
                                        <div className='posterText3'>Height: {criminalsHeight}ft</div>
                                        <div className='posterText3'>Weight: {criminal.weight}Ib</div>
                                        <div className='posterText3'>Sentenced: {criminal.sentenced}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                        }
                    </>
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Criminal;
