import { useEffect, useState } from 'react';

function BlockClick() {
    const ClickKey = 'block';

    const [click, setClick] = useState(localStorage.getItem(ClickKey) || '0');

    const clickHandler = () => setClick(Number(click) + 1);

    useEffect(() => {
        localStorage.setItem(ClickKey, click);
    }, [click])

    //Can't resolve 오류 해결되고 반복이 가능해지면 "찜"도 모듈로 만들어버리기
    
    return (
        <li className="flex-item" onClick={clickHandler}>
            <div>조회수: {click}</div>
            <div>
            <button>찜</button>: { }
            </div>
        </li>
      
    )
}

