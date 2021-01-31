import React from 'react';
import Header from '../components/Header';

import './index.css';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="navbar">Navbar</div>
                <div className="feed">Feed</div>
            </main>
        </div>
    )
}