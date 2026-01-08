import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";

export default function Home() {
const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
loadUsers();
}, []);

const loadUsers = async () => {
  try {
    const response = await fetchUsers();
    setUsers(response.data); 
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


const handleDelete = (id) => {
setUsers(users.filter((user) => user.id !== id));
};

const filteredUsers = users.filter((user) =>
user.name.toLowerCase().includes(search.toLowerCase())
);

if (loading) return <Loader />;
if (error) return <p className="text-danger text-center">{error}</p>;

return (
<div className="container mt-5">
<h3 className="mb-4 text-success">User Management Dashboard</h3>
<SearchBar search={search} setSearch={setSearch} />
<UserTable users={filteredUsers} onDelete={handleDelete} />
</div>
);
}