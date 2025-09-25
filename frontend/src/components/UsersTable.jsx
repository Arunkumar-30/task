import React from 'react';

export default function UsersTable({ users = [], loading = false }) {
    if (loading) return <div>Loading users...</div>;
    if (!users || users.length === 0) return <div>No users found.</div>;

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="text-left text-sm text-gray-600">
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Email</th>
                        <th className="pb-3">Phone</th>
                        <th className="pb-3">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id} className="border-t">
                            <td className="py-3">{u.name}</td>
                            <td className="py-3">{u.email}</td>
                            <td className="py-3">{u.phone}</td>
                            <td className="py-3">{u.company?.name || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
