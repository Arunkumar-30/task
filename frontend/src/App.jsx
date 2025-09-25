import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import UsersTable from './components/UsersTable';
import TaskList from './components/TaskList';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoadingUsers(true);
        const resp = await fetch('http://localhost:5000/api/users');
        const data = await resp.json();
        setUsers(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingUsers(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <Header />
      <div className="my-6">
        <StatsCards totalUsers={users.length} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-semibold mb-4">Users</h3>
          <UsersTable users={users} loading={loadingUsers} />
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Tasks</h3>
          <TaskList />
        </div>
      </div>
    </div>
  );
}
