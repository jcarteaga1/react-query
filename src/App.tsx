import reactLogo from "./assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useData } from "./hooks/useData";

import "./App.css";

function App() {
  const { dataQuery, prevPage, nextPage, page } = useData();

  const navegate = useNavigate();

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React Query - Example</h1>

      <h4>Page: {page}</h4>
      <button onClick={prevPage}>Next</button>
      <button onClick={() => navegate("/test")}>Test view</button>
      <button onClick={nextPage}>Prev</button>

      {(dataQuery.isLoading || dataQuery.isFetching) && !dataQuery.data && (
        <div>Loading...</div>
      )}

      {dataQuery.data?.map((data, index) => (
        <div className='card' key={index}>
          <div>
            <strong>Pokemon: </strong> {data.name}
          </div>
          <div>
            <strong>Url:</strong> {data.url}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
