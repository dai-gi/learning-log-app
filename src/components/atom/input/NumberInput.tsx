export const NumberInput = (props) => {
  const { content, onChange, prefixes="", suffixes="" } = props;
  return (
    <p>
      {prefixes}
      <span>
        <input type="nuber" value={content} onChange={onChange} />
      </span>
      {suffixes}
    </p>
  )
};

