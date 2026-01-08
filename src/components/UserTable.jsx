export default function UserTable({ users, onDelete }) {
return (
<table className="table table-bordered">
<thead className="table-success">
<tr>
<th>Name</th>
<th>Email</th>
<th>City</th>
<th>Company</th>
<th>Actions</th>
</tr>
</thead>

      <tbody>
  {users.length === 0 ? (
    <tr>
      <td colSpan="5" className="text-center">
        No users found
      </td>
    </tr>
  ) : (
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {/* <td>{user.city}</td> */}
        <td>{user.address?.city}</td>

        <td>{user.company?.name}</td> 
        <td>
          <button
            className="btn btn-success btn-sm"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

    </table>

);
}