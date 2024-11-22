import Nav from "./nav";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
