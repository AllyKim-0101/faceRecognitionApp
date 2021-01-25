import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    const title = <h1>Face Recognition App</h1>;
    if (isSignedIn) {
        return (<>
            {title}
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
            </nav>
        </>
        )
    } else {
        return (<>
            {title}
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'> Register</p>
            </nav>
        </>
        );
    }
}

export default Navigation;
