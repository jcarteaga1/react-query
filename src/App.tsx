import reactLogo from "./assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useData } from "./hooks/useData";

import "./App.css";

function App() {
  const { dataQuery } = useData();

  const navegate = useNavigate();
  if ((dataQuery.isLoading || dataQuery.isFetching) && !dataQuery.data) {
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

      <button onClick={() => navegate("/test")}>Test view</button>

      {dataQuery.data?.map((data, index) => (
        <div className='card' key={index}>
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
