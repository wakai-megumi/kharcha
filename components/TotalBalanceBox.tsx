import React from "react"
import AnimateCounter from "./AnimateCounter"

const TotalBalanceBox = ({
  accounts: [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <div className="total-balance">
      <div className="total-balance-chart">{/* doughnut chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2"> Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance:</p>
          <p className="total-balance-amount flex-center gap-2">
            <AnimateCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default TotalBalanceBox
