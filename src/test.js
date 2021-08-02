import './App.css';
import TotalVisit from './totalVisit';
import BlockClick from './blockClick';

const blockCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <div className="App">
      <h1>현재 상영 영화</h1>
      <TotalVisit />
      <ul className="flex-container">
        {blockCount.map((block) => (
          <BlockClick key={block} blockIndex={block}>
            {/* key값은 BlockClick의 argument로 사용할 수 없다. */}
            <h3>Coming soon ...</h3>
            {/* BlockClick의 props로 정의하지 않았지만 이렇게 세부항목으로 작성한 것을 {children}이라고 함 */}
          </BlockClick>
        ))}
      </ul>
    </div>
  );
};

export default App;
