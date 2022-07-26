import "./style.scss";

export const FromMobile = ({ children }) => {
  return <div className="item desktop">{children}</div>;
};

export const Mobile = ({ children }) => {
  return <div className="item mobile">{children}</div>;
};
