import Nav from './components/Nav';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-black">
      <h1 className="text-indigo-500 dark:text-white text-5xl">
        Click to Change
      </h1>
      <Nav />
    </div>
  );
}
