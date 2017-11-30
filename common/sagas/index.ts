import configSaga from './config';
import deterministicWallets from './deterministicWallets';
import notifications from './notifications';
import {
  bityTimeRemaining,
  pollBityOrderStatusSaga,
  postBityOrderSaga
} from './swap/orders';
import { getBityRatesSaga } from './swap/rates';
import wallet from './wallet';
import { estimateGas } from './gas';
import { signing } from './signing';
import { broadcast } from './broadcast';
import { from } from './from';
export default {
  from,
  broadcast,
  estimateGas,
  signing,
  bityTimeRemaining,
  configSaga,
  postBityOrderSaga,
  pollBityOrderStatusSaga,
  getBityRatesSaga,
  notifications,
  wallet,
  deterministicWallets
};
