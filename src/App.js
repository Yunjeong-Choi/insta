import './App.css';
import { useEffect, useState } from 'react';

// Format on document(정렬하기)
//   - shift + cmd + p -> format document 엔터

//문제//
// 1. localStorage를 활용한 totalCount를 표시
// 2. 각 박스 클릭시 고유한 클릭 횟수를 컴포넌트 데이터로 표시하기(hooks)

//"컴포넌트 데이터로 표시"가 무슨의미 인가요?

const visitKey = 'total-visit';
const clickKey = 'block';
const likeKey = 'like';

const App = () => {

  const totalVisit = localStorage.getItem(visitKey) || '0';
  //setTotalVisit을 사용할 일이 없으면 이렇게 useState 없이 일반변수로 선언해도 상관없지요?

  useEffect(() => {
    const totalVisit = localStorage.getItem(visitKey) || '0'; 
    localStorage.setItem(visitKey, Number(totalVisit) + 1);
  }, []);

  const [click, setClick] = useState(localStorage.getItem(clickKey) || '0');

  const clickHandler = () => setClick(Number(click) + 1);

  useEffect(() => {
    localStorage.setItem(clickKey, click);
  }, [click]);
  
  const [like, setLike] = useState(localStorage.getItem(likeKey) || '0');
  
  const likeHandler = () => setLike(Number(like) + 1);

  useEffect(() => {
    localStorage.setItem(likeKey, like)
  }, [like]);

  return <div className="App">
    <h1>현재 상영 영화</h1>
    <span>누적 방문객: {totalVisit}</span>
    <ul className="flex-container">
      <li className="flex-item" onClick={clickHandler}>
        <img src=".movie_1.jpeg" alt="movie_1" />
        {/* 이미지 삽입 실패 */}
        <div>조회수: {click}</div>
        {/* "찜" 버튼의 영역과 분리해서 카운트하려면 어떻게 해야할까요?
        버튼을 바깥으로 빼는 수 밖에 없을까요? */}
        <div>
          <button onClick={likeHandler}>찜</button>: {like}
        </div>
      </li>
      <li className="flex-item" >1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
    </ul>
  </div>;
}

export default App;
