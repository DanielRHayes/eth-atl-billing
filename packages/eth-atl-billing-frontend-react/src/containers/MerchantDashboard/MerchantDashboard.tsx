import * as React from "react";
import { Web3Component } from "../../components/Web3Component";

import { ITableData } from "../../components/BaseTable/BaseTable";
import { MerchantDashboard } from "../../components/MerchantDashboard/MerchantDashboard";

interface IState {
  authorizations: ITableData;
  past: ITableData;
}
export class MerchantDashboardContainer extends Web3Component<any, IState> {
  public state: IState = {
    authorizations: {
      yguuyfuyt: ["Micah", "0x12djfasofiajidosfi", "$10.00", "monthly"]
    },
    past: {
      kughiuyui: ["August 1st, 2018 at 12pm", "Micah", "$9.95"],
      uihiuhiu: ["July 1st, 2018 at 12pm", "Micah", "$9.95"]
    }
  };
  // TODO: fix any
  public constructor(props: any) {
    super(props);
  }

  // TODO: fix any
  public submitBill(data: any) {
    console.log(data);
  }

  public render() {
    return (
      <div>
        <MerchantDashboard
          submitBill={this.submitBill}
          authorizedBillData={this.state.authorizations}
          pastBillData={this.state.past}
        />
      </div>
    );
  }
}
