const StyledJSX = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJSX</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx>{`
        .container {
          border: solid 2px #382eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
        .button:hover {
          background-color: #40916c;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default StyledJSX;
