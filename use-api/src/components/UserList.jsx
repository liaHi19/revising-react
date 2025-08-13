import { use } from "react";
import { getUsersPromise } from "../api";

function UserList() {
  const users = use(getUsersPromise());
  return (
    <div>
      <h1 className="text-center py-5 text-2xl font-bold">Users List</h1>
      <ul className="grid grid-cols-5 gap-5">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-500 py-10 text-center rounded-[5px]  text-gray-200"
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
