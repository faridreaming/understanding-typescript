/* 
data:
initial amount
annual contribution
expected return
duration
*/

type InvestmentData = {
  initialAmount: number
  annualContribution: number
  expectedReturn: number
  yearDuration: number
}

type Result = {
  year: number
  amount: number
  expectedReturn: number
}

function calculateInvestment(data: InvestmentData): Result[] {
  const { initialAmount, annualContribution, expectedReturn, yearDuration } = data
  const results: Result[] = [
    {
      year: 0,
      amount: initialAmount,
      expectedReturn: expectedReturn,
    },
  ]

  for (let i = 1; i <= yearDuration; i++) {
    results.push({
      year: i,
      amount: annualContribution * i,
      expectedReturn,
    })
  }

  return results
} // => result[]

function printResults(results: Result[]): void {
  // print (output) the result data
  results.forEach((r) => {
    console.table(r)
  })
}

const investmentData: InvestmentData = {
  initialAmount: 10_000_000,
  annualContribution: 2_000_000,
  expectedReturn: 8,
  yearDuration: 10,
}
const results = calculateInvestment(investmentData)
printResults(results)
