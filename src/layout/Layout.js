import Header from "../components/Header";

const Layout = (props) => {
  return (
    <div className="main">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
