import React from 'react';

function Layout({children}) {
    return (
        <div dir='rtl' className='font-laleh'>
            <header></header>
            <main>
                {children}
            </main>
            <footer></footer>
        </div>
    );
}

export default Layout;