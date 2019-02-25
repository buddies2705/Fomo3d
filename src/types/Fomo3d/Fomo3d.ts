import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class onNewName extends EthereumEvent {
  get params(): onNewNameParams {
    return new onNewNameParams(this);
  }
}

export class onNewNameParams {
  _event: onNewName;

  constructor(event: onNewName) {
    this._event = event;
  }

  get playerID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get playerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get playerName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get isNewPlayer(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get affiliateID(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get affiliateAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get affiliateName(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get amountPaid(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get timeStamp(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class onEndTx extends EthereumEvent {
  get params(): onEndTxParams {
    return new onEndTxParams(this);
  }
}

export class onEndTxParams {
  _event: onEndTx;

  constructor(event: onEndTx) {
    this._event = event;
  }

  get compressedData(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get compressedIDs(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get playerName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get playerAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get ethIn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get keysBought(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get winnerAddr(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get winnerName(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }

  get amountWon(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get newPot(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get P3DAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get genAmount(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }

  get potAmount(): BigInt {
    return this._event.parameters[12].value.toBigInt();
  }

  get airDropPot(): BigInt {
    return this._event.parameters[13].value.toBigInt();
  }
}

export class onWithdraw extends EthereumEvent {
  get params(): onWithdrawParams {
    return new onWithdrawParams(this);
  }
}

export class onWithdrawParams {
  _event: onWithdraw;

  constructor(event: onWithdraw) {
    this._event = event;
  }

  get playerID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get playerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get playerName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get ethOut(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get timeStamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class onWithdrawAndDistribute extends EthereumEvent {
  get params(): onWithdrawAndDistributeParams {
    return new onWithdrawAndDistributeParams(this);
  }
}

export class onWithdrawAndDistributeParams {
  _event: onWithdrawAndDistribute;

  constructor(event: onWithdrawAndDistribute) {
    this._event = event;
  }

  get playerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playerName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get ethOut(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get compressedData(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get compressedIDs(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get winnerAddr(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get winnerName(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get amountWon(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get newPot(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get P3DAmount(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get genAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }
}

export class onBuyAndDistribute extends EthereumEvent {
  get params(): onBuyAndDistributeParams {
    return new onBuyAndDistributeParams(this);
  }
}

export class onBuyAndDistributeParams {
  _event: onBuyAndDistribute;

  constructor(event: onBuyAndDistribute) {
    this._event = event;
  }

  get playerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playerName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get ethIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get compressedData(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get compressedIDs(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get winnerAddr(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get winnerName(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get amountWon(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get newPot(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get P3DAmount(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get genAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }
}

export class onReLoadAndDistribute extends EthereumEvent {
  get params(): onReLoadAndDistributeParams {
    return new onReLoadAndDistributeParams(this);
  }
}

export class onReLoadAndDistributeParams {
  _event: onReLoadAndDistribute;

  constructor(event: onReLoadAndDistribute) {
    this._event = event;
  }

  get playerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playerName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get compressedData(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get compressedIDs(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get winnerAddr(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get winnerName(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get amountWon(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get newPot(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get P3DAmount(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get genAmount(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class onAffiliatePayout extends EthereumEvent {
  get params(): onAffiliatePayoutParams {
    return new onAffiliatePayoutParams(this);
  }
}

export class onAffiliatePayoutParams {
  _event: onAffiliatePayout;

  constructor(event: onAffiliatePayout) {
    this._event = event;
  }

  get affiliateID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get affiliateAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get affiliateName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get roundID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyerID(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timeStamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class onPotSwapDeposit extends EthereumEvent {
  get params(): onPotSwapDepositParams {
    return new onPotSwapDepositParams(this);
  }
}

export class onPotSwapDepositParams {
  _event: onPotSwapDeposit;

  constructor(event: onPotSwapDeposit) {
    this._event = event;
  }

  get roundID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountAddedToPot(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Fomo3d__round_Result {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: boolean,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromBoolean(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    map.set("value10", EthereumValue.fromUnsignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromUnsignedBigInt(this.value11));
    return map;
  }
}

export class Fomo3d__fees_Result {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Fomo3d__getPlayerVaultsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Fomo3d__getCurrentRoundInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: Bytes;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;
  value12: BigInt;
  value13: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: Bytes,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt,
    value12: BigInt,
    value13: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
    this.value12 = value12;
    this.value13 = value13;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromAddress(this.value7));
    map.set("value8", EthereumValue.fromFixedBytes(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    map.set("value10", EthereumValue.fromUnsignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromUnsignedBigInt(this.value11));
    map.set("value12", EthereumValue.fromUnsignedBigInt(this.value12));
    map.set("value13", EthereumValue.fromUnsignedBigInt(this.value13));
    return map;
  }
}

export class Fomo3d__plyrRnds_Result {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Fomo3d__potSplit_Result {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Fomo3d__plyr_Result {
  value0: Address;
  value1: Bytes;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: Address,
    value1: Bytes,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Fomo3d__getPlayerInfoByAddressResult {
  value0: BigInt;
  value1: Bytes;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: Bytes,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Fomo3d extends SmartContract {
  static bind(address: Address): Fomo3d {
    return new Fomo3d("Fomo3d", address);
  }

  getBuyPrice(): BigInt {
    let result = super.call("getBuyPrice", []);
    return result[0].toBigInt();
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  pIDxAddr_(param0: Address): BigInt {
    let result = super.call("pIDxAddr_", [EthereumValue.fromAddress(param0)]);
    return result[0].toBigInt();
  }

  airDropTracker_(): BigInt {
    let result = super.call("airDropTracker_", []);
    return result[0].toBigInt();
  }

  round_(param0: BigInt): Fomo3d__round_Result {
    let result = super.call("round_", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Fomo3d__round_Result(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  plyrNames_(param0: BigInt, param1: Bytes): boolean {
    let result = super.call("plyrNames_", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromFixedBytes(param1)
    ]);
    return result[0].toBoolean();
  }

  fees_(param0: BigInt): Fomo3d__fees_Result {
    let result = super.call("fees_", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Fomo3d__fees_Result(result[0].toBigInt(), result[1].toBigInt());
  }

  pIDxName_(param0: Bytes): BigInt {
    let result = super.call("pIDxName_", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    return result[0].toBigInt();
  }

  rndTmEth_(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call("rndTmEth_", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    return result[0].toBigInt();
  }

  rID_(): BigInt {
    let result = super.call("rID_", []);
    return result[0].toBigInt();
  }

  getPlayerVaults(_pID: BigInt): Fomo3d__getPlayerVaultsResult {
    let result = super.call("getPlayerVaults", [
      EthereumValue.fromUnsignedBigInt(_pID)
    ]);
    return new Fomo3d__getPlayerVaultsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  getCurrentRoundInfo(): Fomo3d__getCurrentRoundInfoResult {
    let result = super.call("getCurrentRoundInfo", []);
    return new Fomo3d__getCurrentRoundInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toBytes(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt(),
      result[12].toBigInt(),
      result[13].toBigInt()
    );
  }

  symbol(): string {
    let result = super.call("symbol", []);
    return result[0].toString();
  }

  plyrRnds_(param0: BigInt, param1: BigInt): Fomo3d__plyrRnds_Result {
    let result = super.call("plyrRnds_", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    return new Fomo3d__plyrRnds_Result(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  potSplit_(param0: BigInt): Fomo3d__potSplit_Result {
    let result = super.call("potSplit_", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Fomo3d__potSplit_Result(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  getTimeLeft(): BigInt {
    let result = super.call("getTimeLeft", []);
    return result[0].toBigInt();
  }

  calcKeysReceived(_rID: BigInt, _eth: BigInt): BigInt {
    let result = super.call("calcKeysReceived", [
      EthereumValue.fromUnsignedBigInt(_rID),
      EthereumValue.fromUnsignedBigInt(_eth)
    ]);
    return result[0].toBigInt();
  }

  iWantXKeys(_keys: BigInt): BigInt {
    let result = super.call("iWantXKeys", [
      EthereumValue.fromUnsignedBigInt(_keys)
    ]);
    return result[0].toBigInt();
  }

  activated_(): boolean {
    let result = super.call("activated_", []);
    return result[0].toBoolean();
  }

  airDropPot_(): BigInt {
    let result = super.call("airDropPot_", []);
    return result[0].toBigInt();
  }

  plyr_(param0: BigInt): Fomo3d__plyr_Result {
    let result = super.call("plyr_", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Fomo3d__plyr_Result(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  getPlayerInfoByAddress(_addr: Address): Fomo3d__getPlayerInfoByAddressResult {
    let result = super.call("getPlayerInfoByAddress", [
      EthereumValue.fromAddress(_addr)
    ]);
    return new Fomo3d__getPlayerInfoByAddressResult(
      result[0].toBigInt(),
      result[1].toBytes(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }
}
