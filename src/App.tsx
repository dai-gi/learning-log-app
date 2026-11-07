import './App.css';
import { useState } from 'react';
export const App = () => {
  const [learningContent, setLearningContent] = useState('');
  const [studyTime, setStudyTime] = useState('');
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');

  const onChangeLearningContent = (e) => setLearningContent(e.target.value);
  const onChangeStudyTime = (e) => setStudyTime(e.target.value);
  const onClickAdd = () => {
    const newRecords = [
      ...records,
      { title: learningContent, time: studyTime }
    ];
    if (!learningContent || !studyTime) {
      setError('入力されていない項目があります');
    } else {
      setError('');
      setRecords(newRecords);
    }
    setLearningContent('');
    setStudyTime('');
  };

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
      <p>{`入力されている学習内容：${learningContent}`}</p>
      <p>{`入力されている時間：${studyTime}時間`}</p>
      <button onClick={onClickAdd}>登録</button>
      <p>{error}</p>
      {records.map((record) => (
        <p>{`${record.title} ${record.time}時間`}</p>
      ))}
    </>
  );
};
