import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState([
    '건대 분좋카 추천',
    '웹프웤 과제하는 방법',
    '벚꽃명소 추천',
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const [blank, setBlank] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>사자's blog</h4>
      </div>

      {title.map((todo, i) => (
        <div className="list" key={i}>
          <h4>
            {todo}
            <span
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}
            >
              👍
            </span>
            {like[i]}
          </h4>
          <p>2024-04-11</p>
          <hr />
        </div>
      ))}

      <div className="publish">
        <input
          value={blank}
          onChange={(e) => {
            setBlank(e.target.value);
          }}
        />

        <button
          onClick={() => {
            let copy = [blank, ...title];
            setTitle(copy);
            setLike([0, ...like]);
            setBlank('');
          }}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default App;
