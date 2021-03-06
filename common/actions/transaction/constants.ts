export enum TypeKeys {
  ESTIMATE_GAS_REQUESTED = 'ESTIMATE_GAS_REQUESTED',
  ESTIMATE_GAS_SUCCEEDED = 'ESTIMATE_GAS_SUCCEEDED',
  ESTIMATE_GAS_FAILED = 'ESTIMATE_GAS_FAILED',
  ESTIMATE_GAS_TIMEDOUT = 'ESTIMATE_GAS_TIMEDOUT',

  GET_FROM_REQUESTED = 'GET_FROM_REQUESTED',
  GET_FROM_SUCCEEDED = 'GET_FROM_SUCCEEDED',
  GET_FROM_FAILED = 'GET_FROM_FAILED',

  GET_NONCE_REQUESTED = 'GET_NONCE_REQUESTED',
  GET_NONCE_SUCCEEDED = 'GET_NONCE_SUCCEEDED',
  GET_NONCE_FAILED = 'GET_NONCE_FAILED',

  SIGN_WEB3_TRANSACTION_REQUESTED = 'SIGN_WEB3_TRANSACTION_REQUESTED',
  SIGN_WEB3_TRANSACTION_SUCCEEDED = 'SIGN_WEB3_TRANSACTION_SUCCEEDED',
  SIGN_LOCAL_TRANSACTION_REQUESTED = 'SIGN_LOCAL_TRANSACTION_REQUESTED',
  SIGN_LOCAL_TRANSACTION_SUCCEEDED = 'SIGN_LOCAL_TRANSACTION_SUCCEEDED',
  SIGN_TRANSACTION_FAILED = 'SIGN_TRANSACTION_FAILED',

  BROADCAST_WEB3_TRANSACTION_REQUESTED = 'BROADCAST_WEB3_TRANSACTION_REQUESTED',
  BROADCAST_TRANSACTION_SUCCEEDED = 'BROADCAST_TRANSACTION_SUCCEEDED',
  BROADCAST_LOCAL_TRANSACTION_REQUESTED = 'BROADCAST_LOCAL_TRANSACTION_REQUESTED',
  BROADCAST_TRANSACTION_QUEUED = 'BROADCAST_TRANSACTION_QUEUED',
  BROADCAST_TRASACTION_FAILED = 'BROADCAST_TRASACTION_FAILED',

  CURRENT_VALUE_SET = 'CURRENT_VALUE_SET',
  CURRENT_TO_SET = 'CURRENT_TO_SET',

  DATA_FIELD_INPUT = 'DATA_FIELD_INPUT',
  GAS_LIMIT_INPUT = 'GAS_LIMIT_INPUT',
  GAS_PRICE_INPUT = 'GAS_PRICE_INPUT',
  NONCE_INPUT = 'NONCE_INPUT',

  DATA_FIELD_SET = 'DATA_FIELD_SET',
  GAS_LIMIT_FIELD_SET = 'GAS_LIMIT_FIELD_SET',
  TO_FIELD_SET = 'TO_FIELD_SET',
  VALUE_FIELD_SET = 'VALUE_FIELD_SET',
  NONCE_FIELD_SET = 'NONCE_FIELD_SET',
  GAS_PRICE_FIELD_SET = 'GAS_PRICE_FIELD_SET',

  TOKEN_TO_META_SET = 'TOKEN_TO_META_SET',
  UNIT_META_SET = 'UNIT_META_SET',
  TOKEN_VALUE_META_SET = 'TOKEN_VALUE_META_SET',

  TOKEN_TO_ETHER_SWAP = 'TOKEN_TO_ETHER_SWAP',
  ETHER_TO_TOKEN_SWAP = 'ETHER_TO_TOKEN_SWAP',
  TOKEN_TO_TOKEN_SWAP = 'TOKEN_TO_TOKEN_SWAP',

  SEND_EVERYTHING_REQUESTED = 'SEND_EVERYTHING_REQUESTED',
  SEND_EVERYTHING_SUCCEEDED = 'SEND_EVERYTHING_SUCCEEDED',
  SEND_EVERYTHING_FAILED = 'SEND_EVERYTHING_FAILED',

  RESET = 'RESET'
}
