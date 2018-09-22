import * as React from "react";
import { Web3Component } from "../Web3Component";
import { Layout } from "./CustomerLayout";

export class CreateWallet extends Web3Component {
  public constructor(props: any) {
    super(props);
    this.createWallet = this.createWallet.bind(this);
  }

  public async createWallet() {
    const accounts = await this.getAccounts();
    const account = accounts[0];
    const tx = await this.getWalletFactory()
      .methods.createWallet()
      .send({ from: account });
    window.console.log(tx);
  }

  public render() {
    return (
      <Layout>
        <button onClick={this.createWallet}>Create Customer Wallet</button>
      </Layout>
    );
  }
}
