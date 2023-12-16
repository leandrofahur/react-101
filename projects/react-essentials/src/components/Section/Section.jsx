export default function Section(props) {
  const { title, children, ...rest } = props;
  return (
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
