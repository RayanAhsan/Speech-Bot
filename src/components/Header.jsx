import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Speech<span className='text-blue-400 bold'>Bot</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New Audio</p>
                    <i className="fa-solid fa-circle-plus"></i>
                </a>
            </div>
        </header>
    )
}
