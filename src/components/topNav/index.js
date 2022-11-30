import { Route, Routes, Link } from "react-router-dom";
import routers from "../../router";
import './index.less'

const TopNav = (props) => {
  return (
    <>
      <div className="top-nav">
        {routers.map((item, index) => {
          return (
            <Link to={item.path} key={item.path}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <Routes>
        {routers.map((item, index) => (
          <Route
            path={item.path}
            key={index}
            element={<item.components />}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default TopNav;
