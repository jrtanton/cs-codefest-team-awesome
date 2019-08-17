import { getActiveStates } from "./fakeStateService";

const activeStates = getActiveStates();
const lienCosts = activeStates.map(location => ({
  avgLienCostLiveAuction: location.avgLienCostLiveAuction,
  avgLienCostSecondary: location.avgLienCostSecondary
}));

const defaults = {
  investorInformation: {
    secondaryMarket: false,
    startDate: "",
    passiveIncomeGoal: 5000,
    investmentCapital: 25000,
    netRentBreakdown: {
      paydownDebtPct: 50,
      reinvestPct: 30,
      spendPct: 20
    },
    locations: [activeStates[1], activeStates[0], activeStates[0]],
    lienCosts: [lienCosts[1], lienCosts[0], lienCosts[0]],
    lienInterestRates: [
      activeStates[1].avgLienInterestRate,
      activeStates[0].avgLienInterestRate,
      activeStates[0].avgLienInterestRate
    ]
  },
  dealInformation: {
    redemptionRatio: 6,
    avgGrossRent: 650,
    expenses: {
      management: 10,
      vacancy: 12,
      repair: 8
    }
  },
  renoInformation: {
    avgRenoDuration: 2,
    avgRenoCost: 25000,
    loanRate: 7.0,
    loanTerm: 15
  },
  serviceType: {
    setup: true,
    recurring: false
  }
};

export function getDefaults() {
  return defaults;
}
