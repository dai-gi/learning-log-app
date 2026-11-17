export const TextInput = (props) => {
  const { content, onChange, prefixes = "", suffixes = "" } = props;
  return (
    <p>
      {prefixes}
      <span>
        <input value={content} onChange={onChange} />
      </span>
      {suffixes}
    </p>
  )
};

