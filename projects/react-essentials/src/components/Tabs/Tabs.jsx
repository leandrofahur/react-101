export default function Tabs(props) {
  const { children, buttons, ButtonsContainer = "menu" } = props;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
