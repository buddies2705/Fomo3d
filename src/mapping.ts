import { onEndTx} from './types/Fomo3d/Fomo3d'
import { onEndTxParams} from './types/Fomo3d/Fomo3d'

export function handleOnEndTx(event: onEndTx): void {
  let onEndTxdata = new onEndTx()
  onEndTxdata.compressedData = event.params.compressedData
  onEndTxdata.compressedIDs = event.params.compressedIDs
  onEndTxdata.playerName = event.params.playerName
  onEndTxdata.playerAddress = event.params.playerAddress
  onEndTxdata.ethIn = event.params.ethIn
  onEndTxdata.keysBought = event.params.keysBought
  onEndTxdata.winnerAddr = event.params.winnerAddr
  onEndTxdata.winnerName = event.params.winnerName
  onEndTxdata.amountWon = event.params.amountWon
  onEndTxdata.newPot = event.params.newPot
  onEndTxdata.P3DAmount = event.params.P3DAmount
  onEndTxdata.genAmount = event.params.genAmount
  onEndTxdata.potAmount = event.params.potAmount
  onEndTxdata.airDropPot = event.params.airDropPot
  onEndTxdata.save()
}
