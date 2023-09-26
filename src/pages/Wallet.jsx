import ICONS from "../assets/icons";

function Wallet() {
//   location.href = "https://youtube.com/live/o5Nxknf1r9M?feature=share";
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        color: "white",
      }}
    >
      <div>
        <h1>
          <img
            style={{
              marginRight: 10,
            }}
            src={ICONS.youtube}
            alt=""
          />
          Creating a virtual wallet with ExpressJS
          <img
            style={{
              marginLeft: 10,
            }}
            src={ICONS.wallet}
            alt=""
          />
        </h1>
        <h2>Do like and subscribe for more</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <span style={{marginRight: 10}}>Techstack: </span>
          <img width={30} src={ICONS.node} alt="" />
          <img width={30} src={ICONS.prisma} alt="" />
          <img width={30} src={ICONS.postgres} alt="" />
        </div>
        <p>👋 We are redirecting you now 😃</p>
      </div>
    </div>
  );
}

export default Wallet;
