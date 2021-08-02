import { useEffect, useState } from 'react';
import imageSource from './movie_1.jpeg';

function BlockClick({ blockIndex, children }) {
  //함수의 매개변수 부분에서 바로 구조분해할당(destructuring assignment)을 할 수 있다.
  const ClickKey = `block_${blockIndex}`;

  const [click, setClick] = useState(localStorage.getItem(ClickKey) || '0');

  const clickHandler = () => setClick(Number(click) + 1);
  //useState의 return 값들은 string 타입

  useEffect(() => {
    localStorage.setItem(ClickKey, click);
  }, [click]);
  //[click] 발생시에 useEffect가 실행되도록

  return (
    <li className="flex-item" onClick={clickHandler}>
      <div>조회수: {click}</div>
      <div>
        <button>찜</button>
        {children}
        {/* <h3>Coming Soon ...</h3> 를 이 위치에 넣는것과 동일!!!
        하지만 이 위치에 세부항목을 두면 상위 로직을 타고 내려올때에 
        세부항목이 무엇인지 내부를 까봐야지만 알 수 있으니,
        바깥에 내용을 두고 children으로 가지고 내려옴*/}
      </div>
      {/* 대충 이런 느낌... 옳은 방식은 아닙니다 */}
      <img width="100%" height="70%" src={imageSource} alt="movie_1" />
    </li>
  );
}

export default BlockClick;
