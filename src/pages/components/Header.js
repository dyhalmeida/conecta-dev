import React from 'react'

export default function Header(props) {
    return (
        <header className="header">
            <div className="toolbar">
                <div className="">
                    <span>Conecta-dev</span>
                </div>
                <div className="">
                    <button>New Post</button>
                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    )
}