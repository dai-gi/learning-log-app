export const PrimaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick}>{ children }</button>
  )
}