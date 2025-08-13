import { use } from "react";
import { getUsersPromise } from "../api";

function UserList() {
  const users = use(getUsersPromise());

  return (
    <div>
      <h1 className="text-center py-5 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Users List
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {users.map((user) => (
          <li
            key={user.id}
            className="py-10 text-center rounded-[5px] shadow-md
                       bg-gray-500 text-gray-200
                       dark:bg-gray-700 dark:text-gray-100
                       transition-colors duration-300 ease-in-out"
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
