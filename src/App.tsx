import reactLogo from "./assets/react.svg";
import { useData } from "./hooks/useData";

import "./App.css";

function App() {
  const { dataQuery } = useData();

  if (dataQuery.isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React Query - Example</h1>

      {dataQuery.data?.map((data) => (
        <div className='card'>
          <div>
            <strong>Id:</strong> {data.id}
          </div>
          <div>
            <strong>UserId:</strong> {data.userId}
          </div>
          <div>
            <strong>Title:</strong> {data.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
