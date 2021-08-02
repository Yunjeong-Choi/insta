import { useEffect, useState } from 'react';

function TotalVisit() {
    const VisitKey = 'total-visit';

    const [totalVisit, setTotalVisit] = useState(localStorage.getItem(VisitKey) || '0');
    //지금 당장은 set~을 쓰지 않더라도 언젠가 필요할 경우를 대비하여 useState를 사용한다.
    //그렇지 않으면 나중에 버그가 발생할 가능성이 있음.

    useEffect(() => {
        const totalVisit = localStorage.getItem(VisitKey) || '0';
        localStorage.setItem(VisitKey, Number(totalVisit) + 1);
        //Q. localStorage 내부에 VisitKey가 있다고 선언한 적이 없는데 어떻게 값을 업데이트 하지?
        //A. setItem & getItem의 정의 확인
    }, []);

    return (
        <span>누적 방문객: {totalVisit}</span>
    )
}

export default TotalVisit;