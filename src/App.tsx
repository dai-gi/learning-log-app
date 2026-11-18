import './App.css';
import { useState } from 'react';
import { calcTotalTime } from './utils/calcTotalTime.js';
import { PrimaryButton } from './components/atom/button/PrimaryButton.tsx';
import { TextInput } from './components/atom/input/TextInput.tsx';
import { NumberInput } from './components/atom/input/NumberInput.tsx';
import { Inform } from './components/molecules/Inform.tsx';

export const App = () => {
  const [learningContent, setLearningContent] = useState('');
  const [studyTime, setStudyTime] = useState('');
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');
  const totalTime = calcTotalTime(records);

  const onChangeLearningContent = (e) => setLearningContent(e.target.value);
  const onChangeStudyTime = (e) => setStudyTime(parseInt(e.target.value));
  const onClickAdd = () => {
    if (!learningContent || !studyTime) {
      setError('入力されていない項目があります');
      setLearningContent('');
      setStudyTime('');
      return;
    }

    if (error) {
      setError('');
    }

    const newRecords = [
      ...records,
      { title: learningContent, time: studyTime }
    ];

    setRecords(newRecords);
    setLearningContent('');
    setStudyTime('');
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <TextInput
        content={learningContent}
        onChange={onChangeLearningContent}
        prefixes={"学習内容"}
      />
      <NumberInput
        content={studyTime}
        onChange={onChangeStudyTime}
        prefixes={"学習時間"}
        suffixes={"時間"}
      />
      <p>{`入力されている学習内容：${learningContent}`}</p>
      <p>{`入力されている時間：${studyTime}時間`}</p>
      <ul>
        {records.map((record) => (
          <li key={record}>{`${record.title} ${record.time}時間`}</li>
        ))}
      </ul>
      <PrimaryButton onClick={onClickAdd}>登録</PrimaryButton>
      <Inform message={error} totalTime={totalTime}/>
    </>
  );
};
