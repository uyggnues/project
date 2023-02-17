import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

    
const Criminal = ({criminal, width, setCriminals, user}) => {
    // debugger
    const params = useParams()
    const cityId = parseInt(params.city_id)
    const navigate = useNavigate()
    const bounty = criminal.age + criminal.sentenced
    const criminalsHeight = Math.round(criminal.height * 10)/10
    const [favor, setFavor] = useState([])
    const [favorite, setFavorite] = useState({
        criminal_id: criminal.id,
        player_id: user.id
    })
    // debugger
    const heartItem = user.fav_criminals.find(c => c.id === criminal.id) ? '💗' : '🖤'
    const [heart, setHeart] = useState(heartItem)
    // console.log(user)

    const deleteCriminal = () => {
        fetch(`http://localhost:4000/criminals/${criminal.id}`, {
            method: 'DELETE',
        })
        .then(resp =>             
            setCriminals(current => {
            const updated_criminals = current.filter(ele => ele.id !== criminal.id)
            return updated_criminals
        }))
    }

    const fav = () => {
        if (heart === '🖤') {
            fetch('http://localhost:4000/favorites', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(favorite)
            })
            .then(resp => {
                if (resp.status === 201) {
                    setHeart('💗')
                    resp.json().then(data => setFavor(data))
                } 
            })
        } else if (heart === '💗') {
            fetch(`http://localhost:4000/players/${user.id}/favorites/${criminal.id}`, {
                method: 'DELETE',
            })
            .then(resp => {
                if (resp.status === 204) {
                    setHeart('🖤')
                }
            })
        }
    }
    // console.log(favor)
    // debugger
    return (
        <div>
            <div>
                {width > 1500 && !criminal.in_jail ?
                <>
                            <button className='updateButton' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal/${criminal.id}`, {state: {criminal: criminal}})}>Update Info</button>
                            <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
                    <div className='wantedPoster'>
                        <div>
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
                    <button className='likeBut' onClick={fav}>{heart}</button>
                </>
                    :
                    <>
                        {width >= 800 && !criminal.in_jail ?
                            <>
                                <button className='updateButton2' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal/${criminal.id}`, {state: {criminal: criminal}})}>Update Info</button>
                                <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
                                <div className='wantedPoster2'>
                                    <div>
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
                                                <div className='posterText2'>Sentenced: {criminal.sentenced} years</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='likeBut2'>{heart}</button>
                            </>
                        :
                        <>
                        {width < 800 && !criminal.in_jail ?
                            <>
                            <button className='updateButton3' onClick={() => navigate(`/cities/${cityId}/UpdateCriminal/${criminal.id}`, {state: {criminal: criminal}})}>Update Info</button>
                            <button className='deleteButton' onClick={deleteCriminal}>Delete</button>
                            <div className='wantedPoster3'>
                                <div>
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
                                            <div className='posterText3'>Sentenced: {criminal.sentenced} years</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='likeBut3'>{heart}</button>
                        </>
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
