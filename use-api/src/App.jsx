import { Suspense } from "react";
import UserList from "./components/UserList";
import ErrorBoundary from "./ErrorBoundary";

const FallbackLoader = () => (
  <div className="p-10 text-center font-bold">Loading users...</div>
);

function App() {
  return (
    <div className="App bg bg-gray-200 h-screen w-screen flex flex-col items-center justify-center px-5">
      <main>
        <ErrorBoundary>
          <Suspense fallback={<FallbackLoader />}>
            <UserList />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}
export default App;
