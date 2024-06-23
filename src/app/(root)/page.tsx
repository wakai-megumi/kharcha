import React from "react"
import HeaderBox from "../../../components/HeaderBox"
import TotalBalanceBox from "../../../components/TotalBalanceBox"

const Home = () => {
  const loggedin = { firstName: "tarun", lastName: "sharma" }
  return (
    <div className="home">
      <div className="header-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome "
            user={loggedin?.firstName || "Guest 0"}
            subtext="kharche ki tension chod, income badhane pe focus kar"
          />
        </div>
        {/* bank-balance box */}
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={43242.23}
        />
      </div>
    </div>
  )
}

export default Home
