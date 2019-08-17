import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";

class Home extends Component {
  state = {};

  componentDidMount() {}

  validateProperty = input => {
    if (input.name === "investorInformation.passiveIncomeGoal") {
      if (input.value < 1) return "Passive Income Goal is required.";
      // ...
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hellow World</h1>
      </React.Fragment>
    );
  }
}

export default Home;

// Outputs
// Should be a schedule that can be viewed as years (aggregated values) or months
// Should last 24 Months after Investment Goal is hit
// PHase 2 Consideration --- people can pick fields to add to output.

// Period
// Date
// Invetment Capital
// Liens Purchased
// Housed Acquired
// Outstanding Debt
// Passive Rental Income

// *****************************
// General Comments
// *****************************
// (1) Limiting Location Options: Instead of letting users pick any state
// we will reduce this to a managed system where
// iWealthRE's subject matter expertise is.

// (2) Buying Location Preference: We should let users pick
// their top three states.

// (3) Research Time: If I get money in July, I can't spend it at a
// live auction until August. This is because I need a minimum of
// 1 month to do research on properties. (make this a variable)

// (4) Lien cost on Secondary Market: Typical lien cost on the
// secondary market is 1 year tax plus some premium. This is the
// average redemptive value. Essentially, secondary buyers have to pay extra
// for not having to wait for the lien to mature. An important note here,
// when a person buys a lien on the seondary market timport Investor from './../../models/investor';

// will not be on the redemptive value, rather it will be on the original
// lien cost (which will be less than the redemptive cost).

// (5) Tool should assume live auction.
// -In which case we will show only the live auction lien vlaue
// -next to state option drop down
// -
// -If user toggles secondary
// -then we will only show them the secondary lien costs
