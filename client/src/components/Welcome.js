import React from 'react';

const Welcome = ({setWelcome, width}) => {



    return (
        <div>
            {width > 1500 ?
                <div className='welcomePageBackground'>
                    <div className='welcomePage'>
                        <h1 className='header'>
                            Welcome to Cities Patrol !
                            <button className='X' onClick={() => setWelcome(current => !current)}>X</button>
                        </h1>
                        <h2 className='rulesHeader'>
                            How to Play:
                        </h2>
                        <li className='rules'>Select a city you want to catch the criminals in</li>
                        <li className='rules'>Take a good look at the wanted posters and whenever you are ready press the CATCH! button</li>
                        <li className='rules'>If the information on the computer screen matches the criminal information, then press the CATCH! button</li>
                        <li className='rules'>If it's a civilian press NEXT</li>
                        <li className='rules'>Keep going until u catch all the criminals!</li>
                    </div>
                </div>
                :
                <>
                    {width > 800 ?
                    <div className='welcomePageBackground2'>
                        <div className='welcomePage2'>
                            <h1 className='header2'>
                                Welcome to Cities Patrol !
                                <button className='X2' onClick={() => setWelcome(current => !current)}>X</button>
                            </h1>
                            <h2 className='rulesHeader2'>
                                How to Play:
                            </h2>
                            <li className='rules2'>Select a city you want to catch the criminals in</li>
                            <li className='rules2'>Take a good look at the wanted posters and whenever you are ready press the CATCH! button</li>
                            <li className='rules2'>If the information on the computer screen matches the criminal information, then press the CATCH! button</li>
                            <li className='rules2'>If it's a civilian press NEXT</li>
                            <li className='rules2'>Keep going until u catch all the criminals!</li>
                        </div>
                    </div>
                    :
                    <>
                    {width < 800 ?
                    <div className='welcomePageBackground3'>
                        <div className='welcomePage3'>
                            <h1 className='header3'>
                                Welcome to Cities Patrol !
                                <button className='X3' onClick={() => setWelcome(current => !current)}>X</button>
                            </h1>
                            <h2 className='rulesHeader3'>
                                How to Play:
                            </h2>
                            <li className='rules3'>Select a city you want to catch the criminals in</li>
                            <li className='rules3'>Take a good look at the wanted posters and whenever you are ready press the CATCH! button</li>
                            <li className='rules3'>If the information on the computer screen matches the criminal information, then press the CATCH! button</li>
                            <li className='rules3'>If it's a civilian press NEXT</li>
                            <li className='rules3'>Keep going until u catch all the criminals!</li>
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
    );
}

export default Welcome;
