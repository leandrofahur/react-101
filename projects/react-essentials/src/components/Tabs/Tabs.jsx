export default function Tabs(props) {
  const { children, buttons } = props;
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
