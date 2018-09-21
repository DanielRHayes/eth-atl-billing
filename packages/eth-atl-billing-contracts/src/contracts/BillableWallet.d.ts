/* Generated by ts-generator ver. 0.0.5 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class BillableWallet {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  options: contractOptions;
  methods: {
    paidBills(
      arg0: number | string
    ): TransactionObject<{ 0: string; 1: string; 2: string }>;

    pendingBills(
      arg0: number | string
    ): TransactionObject<{ 0: string; 1: string; 2: string }>;

    authorizedFor(
      amount: number | string,
      biller: string
    ): TransactionObject<boolean>;

    bill(amount: number | string): TransactionObject<boolean>;

    approve(pendingBillIndex: number | string): TransactionObject<void>;

    authorize(
      biller: string,
      amount: number | string,
      waitTime: number | string
    ): TransactionObject<void>;

    send(amount: number | string, to: string): TransactionObject<void>;

    owner(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: string[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: string[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
}