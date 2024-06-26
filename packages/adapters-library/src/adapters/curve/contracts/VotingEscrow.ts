/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface VotingEscrowInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "commit_transfer_ownership"
      | "apply_transfer_ownership"
      | "commit_smart_wallet_checker"
      | "apply_smart_wallet_checker"
      | "get_last_user_slope"
      | "user_point_history__ts"
      | "locked__end"
      | "checkpoint"
      | "deposit_for"
      | "create_lock"
      | "increase_amount"
      | "increase_unlock_time"
      | "withdraw"
      | "balanceOf(address)"
      | "balanceOf(address,uint256)"
      | "balanceOfAt"
      | "totalSupply()"
      | "totalSupply(uint256)"
      | "totalSupplyAt"
      | "changeController"
      | "token"
      | "supply"
      | "locked"
      | "epoch"
      | "point_history"
      | "user_point_history"
      | "user_point_epoch"
      | "slope_changes"
      | "controller"
      | "transfersEnabled"
      | "name"
      | "symbol"
      | "version"
      | "decimals"
      | "future_smart_wallet_checker"
      | "smart_wallet_checker"
      | "admin"
      | "future_admin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CommitOwnership"
      | "ApplyOwnership"
      | "Deposit"
      | "Withdraw"
      | "Supply"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "commit_transfer_ownership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "apply_transfer_ownership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commit_smart_wallet_checker",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "apply_smart_wallet_checker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_last_user_slope",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_history__ts",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "locked__end",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit_for",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "create_lock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increase_amount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increase_unlock_time",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf(address,uint256)",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeController",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "supply", values?: undefined): string;
  encodeFunctionData(functionFragment: "locked", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "point_history",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_history",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_epoch",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "slope_changes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfersEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "future_smart_wallet_checker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "smart_wallet_checker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "future_admin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "commit_transfer_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apply_transfer_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_smart_wallet_checker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apply_smart_wallet_checker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_last_user_slope",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_history__ts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "locked__end",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "create_lock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increase_amount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increase_unlock_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOf(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOf(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_epoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slope_changes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transfersEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "future_smart_wallet_checker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "smart_wallet_checker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "future_admin",
    data: BytesLike
  ): Result;
}

export namespace CommitOwnershipEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApplyOwnershipEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    provider: AddressLike,
    value: BigNumberish,
    locktime: BigNumberish,
    type_: BigNumberish,
    ts: BigNumberish
  ];
  export type OutputTuple = [
    provider: string,
    value: bigint,
    locktime: bigint,
    type_: bigint,
    ts: bigint
  ];
  export interface OutputObject {
    provider: string;
    value: bigint;
    locktime: bigint;
    type: bigint;
    ts: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    provider: AddressLike,
    value: BigNumberish,
    ts: BigNumberish
  ];
  export type OutputTuple = [provider: string, value: bigint, ts: bigint];
  export interface OutputObject {
    provider: string;
    value: bigint;
    ts: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SupplyEvent {
  export type InputTuple = [prevSupply: BigNumberish, supply: BigNumberish];
  export type OutputTuple = [prevSupply: bigint, supply: bigint];
  export interface OutputObject {
    prevSupply: bigint;
    supply: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VotingEscrow extends BaseContract {
  connect(runner?: ContractRunner | null): VotingEscrow;
  waitForDeployment(): Promise<this>;

  interface: VotingEscrowInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  commit_transfer_ownership: TypedContractMethod<
    [addr: AddressLike],
    [void],
    "nonpayable"
  >;

  apply_transfer_ownership: TypedContractMethod<[], [void], "nonpayable">;

  commit_smart_wallet_checker: TypedContractMethod<
    [addr: AddressLike],
    [void],
    "nonpayable"
  >;

  apply_smart_wallet_checker: TypedContractMethod<[], [void], "nonpayable">;

  get_last_user_slope: TypedContractMethod<
    [addr: AddressLike],
    [bigint],
    "view"
  >;

  user_point_history__ts: TypedContractMethod<
    [_addr: AddressLike, _idx: BigNumberish],
    [bigint],
    "view"
  >;

  locked__end: TypedContractMethod<[_addr: AddressLike], [bigint], "view">;

  checkpoint: TypedContractMethod<[], [void], "nonpayable">;

  deposit_for: TypedContractMethod<
    [_addr: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;

  create_lock: TypedContractMethod<
    [_value: BigNumberish, _unlock_time: BigNumberish],
    [void],
    "nonpayable"
  >;

  increase_amount: TypedContractMethod<
    [_value: BigNumberish],
    [void],
    "nonpayable"
  >;

  increase_unlock_time: TypedContractMethod<
    [_unlock_time: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  "balanceOf(address)": TypedContractMethod<
    [addr: AddressLike],
    [bigint],
    "view"
  >;

  "balanceOf(address,uint256)": TypedContractMethod<
    [addr: AddressLike, _t: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfAt: TypedContractMethod<
    [addr: AddressLike, _block: BigNumberish],
    [bigint],
    "view"
  >;

  "totalSupply()": TypedContractMethod<[], [bigint], "view">;

  "totalSupply(uint256)": TypedContractMethod<
    [t: BigNumberish],
    [bigint],
    "view"
  >;

  totalSupplyAt: TypedContractMethod<[_block: BigNumberish], [bigint], "view">;

  changeController: TypedContractMethod<
    [_newController: AddressLike],
    [void],
    "nonpayable"
  >;

  token: TypedContractMethod<[], [string], "view">;

  supply: TypedContractMethod<[], [bigint], "view">;

  locked: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { amount: bigint; end: bigint }],
    "view"
  >;

  epoch: TypedContractMethod<[], [bigint], "view">;

  point_history: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        bias: bigint;
        slope: bigint;
        ts: bigint;
        blk: bigint;
      }
    ],
    "view"
  >;

  user_point_history: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        bias: bigint;
        slope: bigint;
        ts: bigint;
        blk: bigint;
      }
    ],
    "view"
  >;

  user_point_epoch: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  slope_changes: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  controller: TypedContractMethod<[], [string], "view">;

  transfersEnabled: TypedContractMethod<[], [boolean], "view">;

  name: TypedContractMethod<[], [string], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  version: TypedContractMethod<[], [string], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  future_smart_wallet_checker: TypedContractMethod<[], [string], "view">;

  smart_wallet_checker: TypedContractMethod<[], [string], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  future_admin: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "commit_transfer_ownership"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "apply_transfer_ownership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "commit_smart_wallet_checker"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "apply_smart_wallet_checker"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "get_last_user_slope"
  ): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "user_point_history__ts"
  ): TypedContractMethod<
    [_addr: AddressLike, _idx: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "locked__end"
  ): TypedContractMethod<[_addr: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "checkpoint"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit_for"
  ): TypedContractMethod<
    [_addr: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "create_lock"
  ): TypedContractMethod<
    [_value: BigNumberish, _unlock_time: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increase_amount"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "increase_unlock_time"
  ): TypedContractMethod<[_unlock_time: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balanceOf(address)"
  ): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf(address,uint256)"
  ): TypedContractMethod<
    [addr: AddressLike, _t: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfAt"
  ): TypedContractMethod<
    [addr: AddressLike, _block: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalSupply()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply(uint256)"
  ): TypedContractMethod<[t: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupplyAt"
  ): TypedContractMethod<[_block: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeController"
  ): TypedContractMethod<[_newController: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "locked"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { amount: bigint; end: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "epoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "point_history"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        bias: bigint;
        slope: bigint;
        ts: bigint;
        blk: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "user_point_history"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        bias: bigint;
        slope: bigint;
        ts: bigint;
        blk: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "user_point_epoch"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "slope_changes"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "controller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transfersEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "future_smart_wallet_checker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "smart_wallet_checker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "future_admin"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "CommitOwnership"
  ): TypedContractEvent<
    CommitOwnershipEvent.InputTuple,
    CommitOwnershipEvent.OutputTuple,
    CommitOwnershipEvent.OutputObject
  >;
  getEvent(
    key: "ApplyOwnership"
  ): TypedContractEvent<
    ApplyOwnershipEvent.InputTuple,
    ApplyOwnershipEvent.OutputTuple,
    ApplyOwnershipEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;
  getEvent(
    key: "Supply"
  ): TypedContractEvent<
    SupplyEvent.InputTuple,
    SupplyEvent.OutputTuple,
    SupplyEvent.OutputObject
  >;

  filters: {
    "CommitOwnership(address)": TypedContractEvent<
      CommitOwnershipEvent.InputTuple,
      CommitOwnershipEvent.OutputTuple,
      CommitOwnershipEvent.OutputObject
    >;
    CommitOwnership: TypedContractEvent<
      CommitOwnershipEvent.InputTuple,
      CommitOwnershipEvent.OutputTuple,
      CommitOwnershipEvent.OutputObject
    >;

    "ApplyOwnership(address)": TypedContractEvent<
      ApplyOwnershipEvent.InputTuple,
      ApplyOwnershipEvent.OutputTuple,
      ApplyOwnershipEvent.OutputObject
    >;
    ApplyOwnership: TypedContractEvent<
      ApplyOwnershipEvent.InputTuple,
      ApplyOwnershipEvent.OutputTuple,
      ApplyOwnershipEvent.OutputObject
    >;

    "Deposit(address,uint256,uint256,int128,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Withdraw(address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;

    "Supply(uint256,uint256)": TypedContractEvent<
      SupplyEvent.InputTuple,
      SupplyEvent.OutputTuple,
      SupplyEvent.OutputObject
    >;
    Supply: TypedContractEvent<
      SupplyEvent.InputTuple,
      SupplyEvent.OutputTuple,
      SupplyEvent.OutputObject
    >;
  };
}
