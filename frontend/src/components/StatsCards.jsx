import React from 'react';

export default function StatsCards({ totalUsers = 0 }) {
    // Completed & Pending are static as requested
    const completed = 12;
    const pending = 5;

    const cards = [
        { title: 'Total Users', value: totalUsers },
        { title: 'Completed Tasks', value: completed },
        { title: 'Pending Tasks', value: pending }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((c) => (
                <div key={c.title} className="card">
                    <p className="text-sm text-gray-500">{c.title}</p>
                    <p className="text-2xl font-semibold">{c.value}</p>
                </div>
            ))}
        </div>
    );
}
