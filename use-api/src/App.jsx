import { Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import UserList from "./components/UserList";
import ErrorBoundary from "./ErrorBoundary";
import ThemeToggle from "./components/ThemeToggle";

const FallbackLoader = () => (
  <div className="p-10 text-center font-bold">Loading users...</div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen flex flex-col items-center justify-center px-5 relative bg-white dark:bg-gray-800">
        <ThemeToggle />
        <main className="w-full max-w-6xl p-5 rounded-lg shadow-xl transition-colors duration-300">
          <ErrorBoundary>
            <Suspense fallback={<FallbackLoader />}>
              <UserList />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
