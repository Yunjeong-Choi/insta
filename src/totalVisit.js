import { useEffect, useState } from '.node_modules/react';

function TotalVisit() {
    const VisitKey = 'total-visit';

    const [totalVisit, setTotalVisit] = useState(localStorage.getItem(VisitKey) || '0');

    useEffect(() => {
        const totalVisit = localStorage.getItem(VisitKey) || '0';
        localStorage.setItem(VisitKey, Number(totalVisit) + 1);
    }, []);

    return (
        <span>누적 방문객: {totalVisit}</span>
    )
}

export default TotalVisit;