import './App.css';
import { useState } from 'react';
export const App = () => {
  const [learningContent, setLearningContent] = useState('');
  const [studyTime, setStudyTime] = useState('');
  const records = [
    { title: '勉強の記録1', time: 1 },
    { title: '勉強の記録2', time: 3 },
    { title: '勉強の記録3', time: 5 }
  ];

  const onChangeLearningContent = (e) => setLearningContent(e.target.value);
  const onChangeStudyTime = (e) => setStudyTime(e.target.value);

  return (
    <>
      <h1>学習記録一覧</h1>
      <p>
        学習内容
        <span>
          <input value={learningContent} onChange={onChangeLearningContent} />
        </span>
      </p>
      <p>
        学習時間
        <span>
          <input type="number" value={studyTime} onChange={onChangeStudyTime} />
        </span>
        <span>時間</span>
      </p>
      <p>{`入力されている学習：${learningContent}`}</p>
      <p>{`入力されている時間：${studyTime}時間`}</p>
      {records.map((record) => (
        <p>{`${record.title} ${record.time}時間`}</p>
      ))}
    </>
  );
};
