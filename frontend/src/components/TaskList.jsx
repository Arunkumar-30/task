import React, { useEffect, useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((r) => r.json())
            .then((data) => {
                // attach local completed state
                const withLocal = (data || []).map(t => ({ ...t, localCompleted: t.completed }));
                setTasks(withLocal);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const toggle = (id) => {
        setTasks((prev) => prev.map(t => t.id === id ? { ...t, localCompleted: !t.localCompleted } : t));
    };

    if (loading) return <div>Loading tasks...</div>;

    return (
        <ul className="space-y-3">
            {tasks.map((t) => (
                <li key={t.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={!!t.localCompleted}
                            onChange={() => toggle(t.id)}
                            className="w-4 h-4"
                        />
                        <span className={t.localCompleted ? 'line-through text-gray-500' : ''}>{t.title || t.name}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        {t.localCompleted ? 'Completed' : 'Pending'}
                    </div>
                </li>
            ))}
        </ul>
    );
}
