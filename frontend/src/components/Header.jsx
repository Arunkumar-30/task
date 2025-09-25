import React from 'react';

export default function Header() {
    const today = new Date();
    const formatted = today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">My Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome — today is {formatted}</p>
            </div>

        </header>
    );
}
