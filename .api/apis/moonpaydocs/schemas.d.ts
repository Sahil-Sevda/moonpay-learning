declare const ExecuteSwapQuote: {
    readonly body: {
        readonly properties: {
            readonly signature: {
                readonly type: "string";
                readonly description: "Signature from the <a href=\"/reference/get_v4-swap-pair-quote\">GET quote</a> response.";
                readonly examples: readonly ["***"];
            };
            readonly externalTransactionId: {
                readonly type: "string";
                readonly description: "A valid Swap transaction ID from your backend. You can use this to associate your transaction with our transaction.";
                readonly examples: readonly ["6ec52bc3-236a-4570-a9e0-743e14818619"];
            };
            readonly walletAddresses: {
                readonly type: "object";
                readonly properties: {
                    readonly destinationWalletAddress: {
                        readonly type: "string";
                        readonly description: "The address where the quote currency is going to be sent to.";
                        readonly examples: readonly [7.55070758245981e+47];
                    };
                    readonly destinationWalletAddressTag: {
                        readonly type: "string";
                        readonly description: "The tag for `destinationWalletAddress`";
                        readonly examples: readonly ["tag"];
                    };
                    readonly refundWalletAddress: {
                        readonly type: "string";
                        readonly description: "The address where we will refund the crypto back to, in case the Swap transaction cannot be completed.";
                        readonly examples: readonly [7.55070758245981e+47];
                    };
                    readonly refundWalletAddressTag: {
                        readonly type: "string";
                        readonly description: "The tag for `refundWalletAddress`.";
                        readonly examples: readonly ["tag"];
                    };
                };
                readonly required: readonly ["destinationWalletAddress", "refundWalletAddress"];
            };
        };
        readonly required: readonly ["signature", "walletAddresses"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["***"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer authentication token in the format 'Bearer [auth token]'.";
                };
            };
            readonly required: readonly ["authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer wants to swap.";
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer will receive.";
                };
                readonly baseCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing how much crypto the user wants to swap.";
                    readonly examples: readonly ["1.123"];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing the amount of cryptocurrency the customer will receive. Set when the swap is executed.";
                    readonly examples: readonly ["0.0056"];
                };
                readonly extraFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction. It is added to baseCurrencyAmount, feeAmount and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.0000005"];
                };
                readonly networkFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.00039"];
                };
                readonly feeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly ["0.0002"];
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "A valid Swap transaction ID.";
                    readonly examples: readonly ["3ea41bef-cfd7-445c-91cc-853f417d4f1e"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status. Possible values are `completed`, `failed`, `waitingForDepositAddressGeneration`, `waitingForDeposit`, `executingSwap`, `reQuoteRequired`, `screeningWalletAddress`, `frozen`.\n\n`completed` `failed` `waitingForDepositAddressGeneration` `waitingForDeposit` `executingSwap` `reQuoteRequired` `screeningWalletAddress` `frozen`";
                    readonly enum: readonly ["completed", "failed", "waitingForDepositAddressGeneration", "waitingForDeposit", "executingSwap", "reQuoteRequired", "screeningWalletAddress", "frozen"];
                    readonly examples: readonly ["completed"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccount: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the account.";
                    readonly examples: readonly ["f65af778-f2b1-4bc3-a9e6-2ccc0724201b"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2021-11-10T07:53:21.551Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2021-11-10T07:53:21.551Z"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The account's name.";
                    readonly examples: readonly ["MoonPay App"];
                };
                readonly isVerified: {
                    readonly type: "boolean";
                    readonly description: "Whether this account is verified or not.";
                    readonly examples: readonly [true];
                };
                readonly cardFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the MoonPay fee percentage for buy transactions using a debit/credit card, Apple Pay, Google Pay or Samsung Pay.";
                    readonly examples: readonly [1];
                };
                readonly sepaFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the MoonPay fee percentage for buy transactions using a EUR or GBP bank account.";
                    readonly examples: readonly [1];
                };
                readonly sellBankTransferFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the MoonPay fee percentage for sell transactions using a EUR or GBP bank account.";
                    readonly examples: readonly [1];
                };
                readonly sellCardFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the MoonPay fee percentage for sell transactions using a debit/credit card.";
                    readonly examples: readonly [4.5];
                };
                readonly cardExtraFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the account's affiliate fee percentage for buy transactions using a debit/credit card, Apple Pay, Google Pay or Samsung Pay.";
                    readonly examples: readonly [0];
                };
                readonly sepaExtraFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the account's affiliate fee percentage for buy transactions using a EUR or GBP bank account.";
                    readonly examples: readonly [0];
                };
                readonly sellBankTransferExtraFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the account's affiliate fee percentage for sell transactions using a EUR or GBP bank account.";
                    readonly examples: readonly [0];
                };
                readonly sellCardExtraFeePercentage: {
                    readonly type: "number";
                    readonly description: "A positive number representing the account's affiliate fee percentage for sell transactions using a debit/credit card.";
                    readonly examples: readonly [0];
                };
                readonly cardMinimumFee: {
                    readonly type: "object";
                    readonly description: "MoonPay minimum fee per Currency Code for buy transactions using a debit/credit card, Apple Pay, Google Pay or Samsung Pay.";
                    readonly additionalProperties: {
                        readonly type: "number";
                    };
                };
                readonly bankTransferMinimumFee: {
                    readonly type: "object";
                    readonly description: "MoonPay minimum fee per Currency Code for buy transactions using a EUR or GBP bank account.";
                    readonly additionalProperties: {
                        readonly type: "number";
                    };
                };
                readonly sellBankTransferMinimumFee: {
                    readonly type: "object";
                    readonly description: "MoonPay minimum fee per Currency Code for sell transactions using a EUR or GBP bank account.";
                    readonly additionalProperties: {
                        readonly type: "number";
                    };
                };
                readonly sellCardMinimumFee: {
                    readonly type: "object";
                    readonly description: "MoonPay minimum fee per Currency Code for sell transactions using a debit/credit card.";
                    readonly additionalProperties: {
                        readonly type: "number";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBuyQuote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly currencyCode: {
                    readonly type: "string";
                    readonly examples: readonly ["eth"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The code of the cryptocurrency of interest from <a href=\"/reference/getcurrencies\">the currencies list</a> with `type=crypto`";
                };
            };
            readonly required: readonly ["currencyCode"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly baseCurrencyCode: {
                            readonly type: "string";
                            readonly description: "The code of the base currency used for the transaction from <a href=\"/reference/getcurrencies\">the currencies list</a> with `type=fiat`";
                            readonly examples: readonly ["usd"];
                        };
                        readonly quoteCurrencyAmount: {
                            readonly type: "number";
                            readonly description: "A positive number representing how much crypto the customer wants to buy. Best used together with the `currencyCode` parameter. Note that if you pass both `baseCurrencyAmount` and `quoteCurrencyAmount`, the quote currency amount will take precedence. REQUIRED if `baseCurrencyAmount` is not provided.";
                            readonly examples: readonly [3];
                        };
                        readonly baseCurrencyAmount: {
                            readonly type: "number";
                            readonly description: "A positive number representing how much fiat the user wants to spend. Note that if you give us a `baseCurrencyAmount` that is lower than the currency's minimum amount, we will return a quote based on the currency's minimum amount instead. REQUIRED if `quoteCurrencyAmount` is not provided.";
                            readonly examples: readonly [200];
                        };
                        readonly extraFeePercentage: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing your extra fee percentage for the transaction. The minimum is <span class=\"value\">0</span> and the maximum is <span class=\"value\">10</span>. If you don't provide it, we'll use the default value set to your account.";
                            readonly examples: readonly [1];
                        };
                        readonly paymentMethod: {
                            readonly type: "string";
                            readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                            readonly description: "The transaction's payment method.";
                            readonly examples: readonly ["credit_debit_card"];
                        };
                        readonly areFeesIncluded: {
                            readonly type: "boolean";
                            readonly description: "A boolean indicating whether `baseCurrencyAmount` should include extra fees. Defaults to <span class=\"value\">false</span>.";
                            readonly examples: readonly [false];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "ID of your business account";
                    readonly examples: readonly ["717a8a80-5c17-46f9-84f8-a5253c372f51"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                    readonly description: "The fiat currency the customer wants to use for the transaction.";
                };
                readonly baseCurrencyCode: {
                    readonly type: "string";
                    readonly examples: readonly ["usd"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to spend. The minimum amount is 20.";
                    readonly examples: readonly [288.37];
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "The cryptocurrency the customer wants to purchase.";
                };
                readonly quoteCurrencyCode: {
                    readonly type: "string";
                    readonly examples: readonly ["btc"];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly [0.0055];
                };
                readonly quoteCurrencyPrice: {
                    readonly type: "number";
                    readonly description: "The price of the crypto the customer will receive";
                    readonly examples: readonly [52474.5036];
                };
                readonly paymentMethod: {
                    readonly type: "string";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                    readonly description: "The transaction's payment method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `gbp_open_banking_payment` `pix_instant_payment` `sepa_bank_transfer`";
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly [3.99];
                };
                readonly extraFeePercentage: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly networkFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the customer's card is charged.";
                    readonly examples: readonly [7.64];
                };
                readonly networkFeeAmountNonRefundable: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly totalAmount: {
                    readonly type: "number";
                    readonly examples: readonly [300];
                };
                readonly externalId: {
                    readonly type: readonly ["string", "null"];
                };
                readonly externalCustomerId: {
                    readonly type: readonly ["string", "null"];
                };
                readonly signature: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The signature for executing the quote for fixed flow";
                    readonly examples: readonly ["really-long-string"];
                };
                readonly expiresIn: {
                    readonly type: readonly ["number", "null"];
                    readonly description: "The time in seconds until the quote expires.";
                    readonly examples: readonly [1800];
                };
                readonly expiresAt: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Time at which the quote expires. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBuyTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["a617e457-7ea6-4e29-9415-0be500d478cf"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Buy transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the transaction.";
                    readonly examples: readonly ["defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-17T18:24:45.206Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-17T18:24:45.206Z"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to spend. The minimum amount is 20.";
                    readonly examples: readonly [45.5];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly [0.0154];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction. It is added to baseCurrencyAmount, extraFeeAmount and networkFeeAmount when the customer's card is charged.";
                    readonly examples: readonly [1.7];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing your extra fee for the transaction. It is added to baseCurrencyAmount and feeAmount when the customer's card is charged.";
                    readonly examples: readonly [0.43];
                };
                readonly paymentMethod: {
                    readonly type: "string";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                    readonly description: "The transaction's payment method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `gbp_open_banking_payment` `pix_instant_payment` `sepa_bank_transfer`";
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly networkFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the customer's card is charged.";
                    readonly examples: readonly [2.37];
                };
                readonly areFeesIncluded: {
                    readonly type: "boolean";
                    readonly description: "A boolean indicating whether baseCurrencyAmount includes or excludes the feeAmount, extraFeeAmount and networkFeeAmount.";
                    readonly examples: readonly [true];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status.\nPossible values are `waitingPayment` (pending bank transfers where MoonPay is not in receipt), `pending` (transaction is in progress), `waitingAuthorization` (waiting for card approval, i.e. 3DS, bank side security), `failed` or `completed`.\n\n\n`waitingPayment` `pending` `waitingAuthorization` `failed` `completed`";
                    readonly enum: readonly ["waitingPayment", "pending", "waitingAuthorization", "failed", "completed"];
                    readonly examples: readonly ["completed"];
                };
                readonly failureReason: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The transaction's failure reason. Set when transaction's status is failed.\n- `card_not_supported`: The customer used an unsupported card brand or type.\n- `daily_purchase_limit_exceeded`: The customer reached their daily purchase limit or this transaction would put them over their limit.\n- `payment_authorization_declined`: The payment was declined by the issuing bank of the customer's credit card. The customer should try again with another payment method or contact the bank for more details.\n- `timeout_3d_secure`: The customer did not authorize their 3D Secure transaction in time. The customer should place a new order and enter the authorization code in time (usually arrives through SMS or banking app), or contact their bank if they don't receive a code.\n- `timeout_bank_transfer`: The transaction was cancelled. The bank transfer was not received within 7 days or the transfer can't be accepted due to a mismatch (e.g. incorrect amount, incorrect / missing reference, name mismatch).\n- `timeout_kyc_verification`: The customer's identity check timed out because they did not complete their KYC / Proof of Address / Proof of Income verification within 10 hours.\n- `timeout_card_verification`: The customer did not complete their card verification within 10 hours. This could be a verification code from a bank statement, micro-authorization where the customer needs to enter the last 2 digits of the micro-auth amount, or verification by selfie. This may also refer to timeouts caused by delays on MoonPay's side in reviewing the submitted photos.\n- `rejected_kyc`: The customer's KYC or Proof of Address documents were rejected and their account was closed for safety purposes.\n- `rejected_card`\n- `rejected_other`\n- `cancelled`: The transaction was cancelled by MoonPay's support team per the customer's request or engineering team because of a technical issue.\n- `refund`: The sell order was refunded by MoonPay. The order may have been rejected for safety purposes or fiat payout failure.\n- `failed_testnet_withdrawal`: For sandbox transactions only. The MoonPay testnet wallet doesn't have enough crypto for the test transaction and needs to be topped up before new transactions can be completed.\n- `error`: General message for an error not listed.\n";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "The cryptocurrency wallet address the purchased funds will be sent to.";
                    readonly examples: readonly [8.978072538997387e+47];
                };
                readonly walletAddressTag: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The secondary cryptocurrency wallet address identifier for coins such as EOS, XRP and XMR.";
                };
                readonly cryptoTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer to the customer's wallet. Set when the withdrawal has been executed.";
                    readonly examples: readonly [8.25717145014808e+75];
                };
                readonly redirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The URL provided to you, when required, to which to redirect the customer as part of a redirect authentication flow.";
                    readonly examples: readonly ["https://api.moonpay.com/secure/url?transactionId=defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly returnUrl: {
                    readonly type: "string";
                    readonly description: "The URL the customer is returned to after they authenticate or cancel their payment on the payment method's app or site. If you are using our widget implementation, this is always our transaction tracker page, which provides the customer with real-time information about their transaction.";
                    readonly examples: readonly ["https://buy.moonpay.com/transaction_receipt?transactionId=defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly widgetRedirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An optional URL used in a widget implementation. It is passed to us by you in the query parameters, and we include it as a link on the transaction tracker page.";
                };
                readonly eurRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and Euro at the time of the transaction.";
                    readonly examples: readonly [0.92432];
                };
                readonly usdRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and US Dollar at the time of the transaction.";
                    readonly examples: readonly [1];
                };
                readonly gbpRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and British Pound at the time of the transaction.";
                    readonly examples: readonly [0.79016];
                };
                readonly bankDepositInformation: {
                    readonly type: readonly ["object", "null"];
                    readonly description: "For bank transfer transactions, the information about our bank account to which the customer should make the transfer.";
                    readonly properties: {
                        readonly iban: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The IBAN of the bank account.";
                        };
                        readonly bic: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The BIC of the bank account.";
                        };
                        readonly accountNumber: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The account number of the bank account.";
                        };
                        readonly sortCode: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The sort code of the bank account.";
                        };
                        readonly bankName: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The name of the bank.";
                        };
                        readonly bankAddress: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The address of the bank.";
                        };
                        readonly accountName: {
                            readonly type: "string";
                            readonly description: "The account name of the bank account.";
                        };
                        readonly accountAddress: {
                            readonly type: "string";
                            readonly description: "The address of the bank account.";
                        };
                    };
                };
                readonly bankTransferReference: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For bank transfer transactions, the reference code the customer should cite when making the transfer.";
                };
                readonly currencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the cryptocurrency the customer wants to purchase.";
                    readonly examples: readonly ["8d305f63-1fd7-4e01-a220-8445e591aec4"];
                };
                readonly currency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                };
                readonly baseCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the fiat currency the customer wants to use for the transaction.";
                    readonly examples: readonly ["edd81f1f-f735-4692-b410-6def107f17d2"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly customerId: {
                    readonly type: "string";
                    readonly description: "The identifier of the customer the transaction is associated with.";
                    readonly examples: readonly ["77cc1309-0058-4177-b170-8e9657fe12eb"];
                };
                readonly cardId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For token or card transactions, the identifier of the payment card used for this transaction.";
                    readonly examples: readonly ["0a7e23d8-6a52-44c7-b189-91b37bd13796"];
                };
                readonly bankAccountId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For bank transfer transactions, the identifier of the bank account used for this transaction.";
                };
                readonly externalCustomerId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the customer, provided by you.";
                };
                readonly externalTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The customer's country. Returned as an ISO 3166-1 alpha-3 code.";
                    readonly examples: readonly ["GBR"];
                };
                readonly state: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The customer's state, if the customer is from the USA. Returned as a two-letter code.";
                };
                readonly cardType: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The card type used for the transaction.\n\n`apple_pay` `google_pay` `samsung_pay` `card`";
                    readonly enum: readonly ["apple_pay", "google_pay", "samsung_pay", "card"];
                };
                readonly cardPaymentType: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The card payment type used for the transaction.\n\n`credit` `debit` `unknown`";
                    readonly enum: readonly ["credit", "debit", "unknown"];
                };
                readonly stages: {
                    readonly type: "array";
                    readonly description: "An array of four objects, each representing one of the four stages of the purchase process.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stage: {
                                readonly type: "string";
                                readonly description: "Stage type\n\n`stage_one_ordering` `stage_two_verification` `stage_three_processing` `stage_four_delivery`";
                                readonly enum: readonly ["stage_one_ordering", "stage_two_verification", "stage_three_processing", "stage_four_delivery"];
                                readonly examples: readonly ["stage_one_ordering"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the stage\n\n`not_started` `in_progress` `success` `failed`";
                                readonly enum: readonly ["not_started", "in_progress", "success", "failed"];
                                readonly examples: readonly ["success"];
                            };
                            readonly failureReason: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The reason for the failure of the stage. Set when the stage's status is failed.\n\n`card_not_supported` `daily_purchase_limit_exceeded` `payment_authorization_declined` `timeout_3d_secure` `timeout_bank_transfer` `timeout_kyc_verification` `timeout_card_verification` `rejected_kyc` `rejected_card` `rejected_other` `cancelled` `refund` `failed_testnet_withdrawal` `error`";
                                readonly enum: readonly ["card_not_supported", "daily_purchase_limit_exceeded", "payment_authorization_declined", "timeout_3d_secure", "timeout_bank_transfer", "timeout_kyc_verification", "timeout_card_verification", "rejected_kyc", "rejected_card", "rejected_other", "cancelled", "refund", "failed_testnet_withdrawal", "error"];
                            };
                            readonly actions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "Sometimes, the customer is required to take an action or actions to further the purchase process, usually by submitting information at a provided URL. For each action, we pass an object with a type and a url. \nPossible types are `complete_bank_transfer`, `retry_kyc`, `verify_card_by_code`, `verify_card_by_file`. If no actions are required, this returns an empty array.\n";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBuyTransactionByExternalId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalTransactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["d228e63d-627e-4e3c-8dfb-b916a8950ff0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
            };
            readonly required: readonly ["externalTransactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the transaction.";
                    readonly examples: readonly ["defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-17T18:24:45.206Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-17T18:24:45.206Z"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to spend. The minimum amount is 20.";
                    readonly examples: readonly [45.5];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly [0.0154];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction. It is added to baseCurrencyAmount, extraFeeAmount and networkFeeAmount when the customer's card is charged.";
                    readonly examples: readonly [1.7];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing your extra fee for the transaction. It is added to baseCurrencyAmount and feeAmount when the customer's card is charged.";
                    readonly examples: readonly [0.43];
                };
                readonly paymentMethod: {
                    readonly type: "string";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                    readonly description: "The transaction's payment method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `gbp_open_banking_payment` `pix_instant_payment` `sepa_bank_transfer`";
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly networkFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the customer's card is charged.";
                    readonly examples: readonly [2.37];
                };
                readonly areFeesIncluded: {
                    readonly type: "boolean";
                    readonly description: "A boolean indicating whether baseCurrencyAmount includes or excludes the feeAmount, extraFeeAmount and networkFeeAmount.";
                    readonly examples: readonly [true];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status.\nPossible values are `waitingPayment` (pending bank transfers where MoonPay is not in receipt), `pending` (transaction is in progress), `waitingAuthorization` (waiting for card approval, i.e. 3DS, bank side security), `failed` or `completed`.\n\n\n`waitingPayment` `pending` `waitingAuthorization` `failed` `completed`";
                    readonly enum: readonly ["waitingPayment", "pending", "waitingAuthorization", "failed", "completed"];
                    readonly examples: readonly ["completed"];
                };
                readonly failureReason: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The transaction's failure reason. Set when transaction's status is failed.\n- `card_not_supported`: The customer used an unsupported card brand or type.\n- `daily_purchase_limit_exceeded`: The customer reached their daily purchase limit or this transaction would put them over their limit.\n- `payment_authorization_declined`: The payment was declined by the issuing bank of the customer's credit card. The customer should try again with another payment method or contact the bank for more details.\n- `timeout_3d_secure`: The customer did not authorize their 3D Secure transaction in time. The customer should place a new order and enter the authorization code in time (usually arrives through SMS or banking app), or contact their bank if they don't receive a code.\n- `timeout_bank_transfer`: The transaction was cancelled. The bank transfer was not received within 7 days or the transfer can't be accepted due to a mismatch (e.g. incorrect amount, incorrect / missing reference, name mismatch).\n- `timeout_kyc_verification`: The customer's identity check timed out because they did not complete their KYC / Proof of Address / Proof of Income verification within 10 hours.\n- `timeout_card_verification`: The customer did not complete their card verification within 10 hours. This could be a verification code from a bank statement, micro-authorization where the customer needs to enter the last 2 digits of the micro-auth amount, or verification by selfie. This may also refer to timeouts caused by delays on MoonPay's side in reviewing the submitted photos.\n- `rejected_kyc`: The customer's KYC or Proof of Address documents were rejected and their account was closed for safety purposes.\n- `rejected_card`\n- `rejected_other`\n- `cancelled`: The transaction was cancelled by MoonPay's support team per the customer's request or engineering team because of a technical issue.\n- `refund`: The sell order was refunded by MoonPay. The order may have been rejected for safety purposes or fiat payout failure.\n- `failed_testnet_withdrawal`: For sandbox transactions only. The MoonPay testnet wallet doesn't have enough crypto for the test transaction and needs to be topped up before new transactions can be completed.\n- `error`: General message for an error not listed.\n";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "The cryptocurrency wallet address the purchased funds will be sent to.";
                    readonly examples: readonly [8.978072538997387e+47];
                };
                readonly walletAddressTag: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The secondary cryptocurrency wallet address identifier for coins such as EOS, XRP and XMR.";
                };
                readonly cryptoTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer to the customer's wallet. Set when the withdrawal has been executed.";
                    readonly examples: readonly [8.25717145014808e+75];
                };
                readonly redirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The URL provided to you, when required, to which to redirect the customer as part of a redirect authentication flow.";
                    readonly examples: readonly ["https://api.moonpay.com/secure/url?transactionId=defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly returnUrl: {
                    readonly type: "string";
                    readonly description: "The URL the customer is returned to after they authenticate or cancel their payment on the payment method's app or site. If you are using our widget implementation, this is always our transaction tracker page, which provides the customer with real-time information about their transaction.";
                    readonly examples: readonly ["https://buy.moonpay.com/transaction_receipt?transactionId=defb7c52-7bd3-422b-9052-374df50cc51a"];
                };
                readonly widgetRedirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An optional URL used in a widget implementation. It is passed to us by you in the query parameters, and we include it as a link on the transaction tracker page.";
                };
                readonly eurRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and Euro at the time of the transaction.";
                    readonly examples: readonly [0.92432];
                };
                readonly usdRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and US Dollar at the time of the transaction.";
                    readonly examples: readonly [1];
                };
                readonly gbpRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and British Pound at the time of the transaction.";
                    readonly examples: readonly [0.79016];
                };
                readonly bankDepositInformation: {
                    readonly type: readonly ["object", "null"];
                    readonly description: "For bank transfer transactions, the information about our bank account to which the customer should make the transfer.";
                    readonly properties: {
                        readonly iban: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The IBAN of the bank account.";
                        };
                        readonly bic: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The BIC of the bank account.";
                        };
                        readonly accountNumber: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The account number of the bank account.";
                        };
                        readonly sortCode: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The sort code of the bank account.";
                        };
                        readonly bankName: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The name of the bank.";
                        };
                        readonly bankAddress: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "The address of the bank.";
                        };
                        readonly accountName: {
                            readonly type: "string";
                            readonly description: "The account name of the bank account.";
                        };
                        readonly accountAddress: {
                            readonly type: "string";
                            readonly description: "The address of the bank account.";
                        };
                    };
                };
                readonly bankTransferReference: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For bank transfer transactions, the reference code the customer should cite when making the transfer.";
                };
                readonly currencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the cryptocurrency the customer wants to purchase.";
                    readonly examples: readonly ["8d305f63-1fd7-4e01-a220-8445e591aec4"];
                };
                readonly currency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                };
                readonly baseCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the fiat currency the customer wants to use for the transaction.";
                    readonly examples: readonly ["edd81f1f-f735-4692-b410-6def107f17d2"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly customerId: {
                    readonly type: "string";
                    readonly description: "The identifier of the customer the transaction is associated with.";
                    readonly examples: readonly ["77cc1309-0058-4177-b170-8e9657fe12eb"];
                };
                readonly cardId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For token or card transactions, the identifier of the payment card used for this transaction.";
                    readonly examples: readonly ["0a7e23d8-6a52-44c7-b189-91b37bd13796"];
                };
                readonly bankAccountId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "For bank transfer transactions, the identifier of the bank account used for this transaction.";
                };
                readonly externalCustomerId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the customer, provided by you.";
                };
                readonly externalTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The customer's country. Returned as an ISO 3166-1 alpha-3 code.";
                    readonly examples: readonly ["GBR"];
                };
                readonly state: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The customer's state, if the customer is from the USA. Returned as a two-letter code.";
                };
                readonly cardType: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The card type used for the transaction.\n\n`apple_pay` `google_pay` `samsung_pay` `card`";
                    readonly enum: readonly ["apple_pay", "google_pay", "samsung_pay", "card"];
                };
                readonly cardPaymentType: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The card payment type used for the transaction.\n\n`credit` `debit` `unknown`";
                    readonly enum: readonly ["credit", "debit", "unknown"];
                };
                readonly stages: {
                    readonly type: "array";
                    readonly description: "An array of four objects, each representing one of the four stages of the purchase process.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stage: {
                                readonly type: "string";
                                readonly description: "Stage type\n\n`stage_one_ordering` `stage_two_verification` `stage_three_processing` `stage_four_delivery`";
                                readonly enum: readonly ["stage_one_ordering", "stage_two_verification", "stage_three_processing", "stage_four_delivery"];
                                readonly examples: readonly ["stage_one_ordering"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the stage\n\n`not_started` `in_progress` `success` `failed`";
                                readonly enum: readonly ["not_started", "in_progress", "success", "failed"];
                                readonly examples: readonly ["success"];
                            };
                            readonly failureReason: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The reason for the failure of the stage. Set when the stage's status is failed.\n\n`card_not_supported` `daily_purchase_limit_exceeded` `payment_authorization_declined` `timeout_3d_secure` `timeout_bank_transfer` `timeout_kyc_verification` `timeout_card_verification` `rejected_kyc` `rejected_card` `rejected_other` `cancelled` `refund` `failed_testnet_withdrawal` `error`";
                                readonly enum: readonly ["card_not_supported", "daily_purchase_limit_exceeded", "payment_authorization_declined", "timeout_3d_secure", "timeout_bank_transfer", "timeout_kyc_verification", "timeout_card_verification", "rejected_kyc", "rejected_card", "rejected_other", "cancelled", "refund", "failed_testnet_withdrawal", "error"];
                            };
                            readonly actions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "Sometimes, the customer is required to take an action or actions to further the purchase process, usually by submitting information at a provided URL. For each action, we pass an object with a type and a url. \nPossible types are `complete_bank_transfer`, `retry_kyc`, `verify_card_by_code`, `verify_card_by_file`. If no actions are required, this returns an empty array.\n";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCountries: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly alpha2: {
                        readonly type: "string";
                        readonly description: "The country's ISO 3166-1 alpha-2 code.";
                        readonly examples: readonly ["GB"];
                    };
                    readonly alpha3: {
                        readonly type: "string";
                        readonly description: "The country's ISO 3166-1 alpha-3 code.";
                        readonly examples: readonly ["GBR"];
                    };
                    readonly isAllowed: {
                        readonly type: "boolean";
                        readonly description: "Whether residents of this country can use the service.";
                        readonly examples: readonly [true];
                    };
                    readonly isBuyAllowed: {
                        readonly type: "boolean";
                        readonly description: "Whether residents of this country can buy cryptocurrencies.";
                        readonly examples: readonly [true];
                    };
                    readonly isSellAllowed: {
                        readonly type: "boolean";
                        readonly description: "Whether residents of this country can sell cryptocurrencies.";
                        readonly examples: readonly [true];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The country's name.";
                        readonly examples: readonly ["United Kingdom"];
                    };
                    readonly supportedDocuments: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["additional_proof_of_income", "driving_licence", "national_identity_card", "passport", "proof_of_address", "proof_of_income", "residence_permit", "selfie"];
                            readonly description: "`additional_proof_of_income` `driving_licence` `national_identity_card` `passport` `proof_of_address` `proof_of_income` `residence_permit` `selfie`";
                        };
                        readonly description: "A list of supported identity documents for the country.\n\nPossible values are: `additional_proof_of_income`, `driving_licence`, `national_identity_card`, `passport`, `proof_of_address`, `proof_of_income`, `residence_permit`, `selfie`\n";
                        readonly examples: readonly ["additional_proof_of_income", "driving_licence", "national_identity_card", "passport", "proof_of_address", "proof_of_income", "residence_permit", "selfie"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A list of supported currencies: both `type=fiat` and `type=crypto`\n";
            readonly items: {
                readonly anyOf: readonly [{
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                }];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCurrencyLimits: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly currencyCode: {
                    readonly type: "string";
                    readonly examples: readonly ["eth"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The code of the cryptocurrency of interest from <a href=\"/reference/getcurrencies\">the currencies list</a> with `type=crypto`\n";
                };
            };
            readonly required: readonly ["currencyCode"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly baseCurrencyCode: {
                            readonly type: "string";
                            readonly description: "The code of the fiat currency used for the transaction from <a href=\"/reference/getcurrencies\">the currencies list</a> with `type=fiat`";
                            readonly examples: readonly ["usd"];
                        };
                        readonly areFeesIncluded: {
                            readonly type: "boolean";
                            readonly description: "A boolean indicating whether `minBuyAmount` and `maxBuyAmount` should include extra fees. Defaults to <span class=\"value\">false</span>.";
                            readonly examples: readonly [false];
                        };
                        readonly paymentMethod: {
                            readonly type: "string";
                            readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                            readonly description: "The transaction's payment method.";
                            readonly examples: readonly ["credit_debit_card"];
                        };
                    };
                    readonly required: readonly ["baseCurrencyCode"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The code of the quote currency.";
                            readonly examples: readonly ["btc"];
                        };
                        readonly minBuyAmount: {
                            readonly type: "number";
                            readonly description: "The minimum transaction buy amount in quote currency.";
                            readonly examples: readonly [0.00056];
                        };
                        readonly maxBuyAmount: {
                            readonly type: "number";
                            readonly description: "The maximum transaction buy amount in quote currency.";
                            readonly examples: readonly [0.20994];
                        };
                    };
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The code of the base currency.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly minBuyAmount: {
                            readonly type: "number";
                            readonly description: "The minimum transaction buy amount in base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: "number";
                            readonly description: "The maximum transaction buy amount in base currency.";
                            readonly examples: readonly [9000];
                        };
                    };
                };
                readonly paymentMethod: {
                    readonly type: "string";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                    readonly description: "The transaction's payment method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `gbp_open_banking_payment` `pix_instant_payment` `sepa_bank_transfer`";
                    readonly examples: readonly ["credit_debit_card"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetIpAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly ipAddress: {
                            readonly type: "string";
                            readonly description: "The IP address to be checked.";
                            readonly examples: readonly ["71.183.124.141"];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly alpha2: {
                    readonly type: "string";
                    readonly description: "The country's ISO 3166-1 alpha-2 code.";
                    readonly examples: readonly ["GB"];
                };
                readonly alpha3: {
                    readonly type: "string";
                    readonly description: "The country's ISO 3166-1 alpha-3 code.";
                    readonly examples: readonly ["GBR"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The IP address country.";
                    readonly examples: readonly ["United Kingdom"];
                };
                readonly state: {
                    readonly type: "string";
                    readonly description: "The IP address state or region or empty if not applicable.";
                    readonly examples: readonly [""];
                };
                readonly ipAddress: {
                    readonly type: "string";
                    readonly description: "The IPv4 or IPv6 address of the caller";
                    readonly examples: readonly ["81.152.178.191"];
                };
                readonly isAllowed: {
                    readonly type: "boolean";
                    readonly description: "Whether residents of this country can use the service.";
                    readonly examples: readonly [true];
                };
                readonly isBuyAllowed: {
                    readonly type: "boolean";
                    readonly description: "Whether residents of this country can buy cryptocurrencies.";
                    readonly examples: readonly [true];
                };
                readonly isSellAllowed: {
                    readonly type: "boolean";
                    readonly description: "Whether residents of this country can sell cryptocurrencies.";
                    readonly examples: readonly [true];
                };
                readonly isNftAllowed: {
                    readonly type: "boolean";
                    readonly description: "Whether residents of this country can buy NFTs.";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNetworkFees: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly cryptoCurrencies: {
                            readonly type: "string";
                            readonly description: "The codes of the cryptocurrency codes from <a href=\"/reference/getcurrencies\">the currencies list</a>, separated by commas";
                            readonly examples: readonly ["eth,btc"];
                        };
                        readonly fiatCurrencies: {
                            readonly type: "string";
                            readonly description: "The codes of the fiat currency codes from <a href=\"/reference/getcurrencies\">the currencies list</a>, separated by commas.";
                            readonly examples: readonly ["usd,gbp"];
                        };
                    };
                    readonly required: readonly ["cryptoCurrencies", "fiatCurrencies"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The network fee for cryptocurrency for the `cryptoCurrencies` list in fiat from the `fiatCurrencies` list.\n";
            readonly additionalProperties: {
                readonly type: "object";
                readonly description: "Crypto currency from the `cryptoCurrencies` list.";
                readonly additionalProperties: {
                    readonly type: "number";
                    readonly description: "The network fee for cryptocurrency in the `cryptoCurrencies` list, in fiat in the `fiatCurrencies` list.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSellQuote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly currencyCode: {
                    readonly type: "string";
                    readonly examples: readonly ["eth"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The code of the cryptocurrency from <a href=\"/reference/getcurrencies\">the currencies list</a>";
                };
            };
            readonly required: readonly ["currencyCode"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly quoteCurrencyCode: {
                            readonly type: "string";
                            readonly description: "The code of the fiat currency from <a href=\"/reference/getcurrencies\">the currencies list</a>";
                            readonly examples: readonly ["usd"];
                        };
                        readonly baseCurrencyAmount: {
                            readonly type: "number";
                            readonly description: "A positive number representing how much crypto the user wants to sell. Up to 5 decimal digits are supported.";
                            readonly examples: readonly [3];
                        };
                        readonly extraFeePercentage: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing your extra fee percentage for the transaction. The minimum is <span class=\"value\">0</span> and the maximum is <span class=\"value\">10</span>. If you don't provide it, we'll use the default value set to your account.";
                            readonly examples: readonly [1];
                        };
                        readonly payoutMethod: {
                            readonly type: "string";
                            readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "pix_instant_payment", "sepa_bank_transfer"];
                            readonly description: "The transaction's payment method.";
                            readonly examples: readonly ["credit_debit_card"];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly quoteCurrencyCode: {
                    readonly type: "string";
                    readonly description: "Fiat currency the customer wants to get.";
                    readonly examples: readonly ["eur"];
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly baseCurrencyCode: {
                    readonly type: "string";
                    readonly description: "Crypto currency the customer wants to sell.";
                    readonly examples: readonly ["btc"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to sell.";
                    readonly examples: readonly [0.575];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive.";
                    readonly examples: readonly [1521.11];
                };
                readonly baseCurrencyPrice: {
                    readonly type: "number";
                    readonly description: "The price of the crypto the customer wants to sell";
                    readonly examples: readonly [45677.965840087985];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly [15.36];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing your extra fee for the transaction.";
                    readonly examples: readonly [0];
                };
                readonly payoutMethod: {
                    readonly type: "string";
                    readonly description: "The transaction's payout method. Possible values are `credit_debit_card`, `ach_bank_transfer`, `sepa_bank_transfer`, and `gbp_bank_transfer` .\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `sepa_bank_transfer`";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "sepa_bank_transfer"];
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly signature: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The signature for executing the quote for fixed flow";
                    readonly examples: readonly ["really-long-string"];
                };
                readonly expiresIn: {
                    readonly type: readonly ["number", "null"];
                    readonly description: "The time in seconds until the quote expires.";
                    readonly examples: readonly [1800];
                };
                readonly expiresAt: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Time at which the quote expires. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSellTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["dab3bdf4-e6ea-40a2-ad74-87536f9e8a7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sell transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object.";
                    readonly examples: readonly ["9020fd02-42ac-497f-8b5f-41fdf4dd0b1d"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to sell.";
                    readonly examples: readonly [0.575];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly [1521.11];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly [15.36];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing your extra fee for the transaction.";
                    readonly examples: readonly [0];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status.\n\n`waitingForDeposit` `pending` `failed` `completed`";
                    readonly enum: readonly ["waitingForDeposit", "pending", "failed", "completed"];
                    readonly examples: readonly ["completed"];
                };
                readonly failureReason: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The transaction's failure reason. Set when transaction's status is failed.";
                };
                readonly refundWalletAddress: {
                    readonly type: "string";
                    readonly description: "A wallet address at which the customer can receive cryptocurrency. In case we cannot process the sale of the customer's cryptocurrency, we will return the cryptocurrency to this wallet address. Might be empty";
                    readonly examples: readonly [""];
                };
                readonly depositHash: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer from the customer's wallet to MoonPay's wallet. Set when the deposit has been executed and received.";
                    readonly examples: readonly [8.377408903480862e+76];
                };
                readonly widgetRedirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An optional URL used in a widget implementation. It is passed to us by you in the query parameters, and we include it as a link on the transaction tracker page.";
                };
                readonly payoutMethod: {
                    readonly type: "string";
                    readonly description: "The transaction's payout method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `sepa_bank_transfer`";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "sepa_bank_transfer"];
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly eurRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and Euro at the time of the transaction.";
                    readonly examples: readonly [1];
                };
                readonly usdRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and US Dollar at the time of the transaction.";
                    readonly examples: readonly [1.08193];
                };
                readonly gbpRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and British Pound at the time of the transaction.";
                    readonly examples: readonly [0.85501];
                };
                readonly quoteCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the fiat the customer wants to get.";
                    readonly examples: readonly ["71435a8d-211c-4664-a59e-2a5361a6c5a7"];
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly baseCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the crypto currency the customer wants to sell.";
                    readonly examples: readonly ["8d305f63-1fd7-4e01-a220-8445e591aec4"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                };
                readonly customerId: {
                    readonly type: "string";
                    readonly description: "The identifier of the customer the transaction is associated with.";
                    readonly examples: readonly ["3b97352d-a9c2-4786-afe7-e7d74e0a8ad7"];
                };
                readonly bankAccountId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The identifier of the bank account used for this transaction.";
                    readonly examples: readonly ["ee0e649f-a072-4cdb-96ce-a1ea393eac1e"];
                };
                readonly externalCustomerId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the customer, provided by you.";
                };
                readonly externalTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
                readonly stages: {
                    readonly type: "array";
                    readonly description: "An array of four objects, each representing one of the four stages of the purchase process";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stage: {
                                readonly type: "string";
                                readonly description: "Stage type\n\n`sell_stage_one_verification` `sell_stage_two_waiting_for_deposit` `sell_stage_three_processing` `sell_stage_four_withdrawal`";
                                readonly enum: readonly ["sell_stage_one_verification", "sell_stage_two_waiting_for_deposit", "sell_stage_three_processing", "sell_stage_four_withdrawal"];
                                readonly examples: readonly ["sell_stage_one_verification"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Stage status.\n\n`not_started` `in_progress` `success` `failed`";
                                readonly enum: readonly ["not_started", "in_progress", "success", "failed"];
                                readonly examples: readonly ["success"];
                            };
                            readonly failureReason: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Possible values are:\n- `refund`: The crypto sent by the customer has been returned to them.\n- `timeout_deposit`: The customer did not send the crypto to MoonPay within 7 days of the transaction creation date.\n- `timeout_kyc_verification`: The customer's identity check timed out.\n- `cancelled`: The sell transaction has been cancelled by MoonPay.\n- `rejected_kyc`: The customer failed to pass the identity check.\n- `error`: General message for a more specific error.\n";
                            };
                            readonly actions: {
                                readonly type: "array";
                                readonly description: "Sometimes, the customer is required to take an action or actions to further the purchase process, usually by submitting information at a provided URL. For each action, we pass an object with a type and a url. If no actions are required, this returns an empty array.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["complete_deposit", "retry_kyc"];
                                            readonly description: "`complete_deposit` `retry_kyc`";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSellTransactionByExternalId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalTransactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["bc976ff6-c89d-4c35-9694-ae183758abf5"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
            };
            readonly required: readonly ["externalTransactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object.";
                    readonly examples: readonly ["9020fd02-42ac-497f-8b5f-41fdf4dd0b1d"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing how much the customer wants to sell.";
                    readonly examples: readonly [0.575];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly [1521.11];
                };
                readonly feeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly [15.36];
                };
                readonly extraFeeAmount: {
                    readonly type: "number";
                    readonly description: "A positive number representing your extra fee for the transaction.";
                    readonly examples: readonly [0];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status.\n\n`waitingForDeposit` `pending` `failed` `completed`";
                    readonly enum: readonly ["waitingForDeposit", "pending", "failed", "completed"];
                    readonly examples: readonly ["completed"];
                };
                readonly failureReason: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The transaction's failure reason. Set when transaction's status is failed.";
                };
                readonly refundWalletAddress: {
                    readonly type: "string";
                    readonly description: "A wallet address at which the customer can receive cryptocurrency. In case we cannot process the sale of the customer's cryptocurrency, we will return the cryptocurrency to this wallet address. Might be empty";
                    readonly examples: readonly [""];
                };
                readonly depositHash: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer from the customer's wallet to MoonPay's wallet. Set when the deposit has been executed and received.";
                    readonly examples: readonly [8.377408903480862e+76];
                };
                readonly widgetRedirectUrl: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An optional URL used in a widget implementation. It is passed to us by you in the query parameters, and we include it as a link on the transaction tracker page.";
                };
                readonly payoutMethod: {
                    readonly type: "string";
                    readonly description: "The transaction's payout method.\n\n`ach_bank_transfer` `credit_debit_card` `gbp_bank_transfer` `sepa_bank_transfer`";
                    readonly enum: readonly ["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "sepa_bank_transfer"];
                    readonly examples: readonly ["credit_debit_card"];
                };
                readonly eurRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and Euro at the time of the transaction.";
                    readonly examples: readonly [1];
                };
                readonly usdRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and US Dollar at the time of the transaction.";
                    readonly examples: readonly [1.08193];
                };
                readonly gbpRate: {
                    readonly type: "number";
                    readonly description: "The exchange rate between the transaction's base currency and British Pound at the time of the transaction.";
                    readonly examples: readonly [0.85501];
                };
                readonly quoteCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the fiat the customer wants to get.";
                    readonly examples: readonly ["71435a8d-211c-4664-a59e-2a5361a6c5a7"];
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["6f424585-8936-4eb1-b01e-443fb306d1f5"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["fiat"];
                            readonly description: "Always `fiat`\n\n`fiat`";
                            readonly examples: readonly ["fiat"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["Pound Sterling"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["gbp"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum transaction buy amount when using this currency as a base currency.";
                            readonly examples: readonly [9000];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly baseCurrencyId: {
                    readonly type: "string";
                    readonly description: "The identifier of the crypto currency the customer wants to sell.";
                    readonly examples: readonly ["8d305f63-1fd7-4e01-a220-8445e591aec4"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                };
                readonly customerId: {
                    readonly type: "string";
                    readonly description: "The identifier of the customer the transaction is associated with.";
                    readonly examples: readonly ["3b97352d-a9c2-4786-afe7-e7d74e0a8ad7"];
                };
                readonly bankAccountId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The identifier of the bank account used for this transaction.";
                    readonly examples: readonly ["ee0e649f-a072-4cdb-96ce-a1ea393eac1e"];
                };
                readonly externalCustomerId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the customer, provided by you.";
                };
                readonly externalTransactionId: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "An identifier associated with the transaction, provided by you.";
                };
                readonly stages: {
                    readonly type: "array";
                    readonly description: "An array of four objects, each representing one of the four stages of the purchase process";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stage: {
                                readonly type: "string";
                                readonly description: "Stage type\n\n`sell_stage_one_verification` `sell_stage_two_waiting_for_deposit` `sell_stage_three_processing` `sell_stage_four_withdrawal`";
                                readonly enum: readonly ["sell_stage_one_verification", "sell_stage_two_waiting_for_deposit", "sell_stage_three_processing", "sell_stage_four_withdrawal"];
                                readonly examples: readonly ["sell_stage_one_verification"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Stage status.\n\n`not_started` `in_progress` `success` `failed`";
                                readonly enum: readonly ["not_started", "in_progress", "success", "failed"];
                                readonly examples: readonly ["success"];
                            };
                            readonly failureReason: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Possible values are:\n- `refund`: The crypto sent by the customer has been returned to them.\n- `timeout_deposit`: The customer did not send the crypto to MoonPay within 7 days of the transaction creation date.\n- `timeout_kyc_verification`: The customer's identity check timed out.\n- `cancelled`: The sell transaction has been cancelled by MoonPay.\n- `rejected_kyc`: The customer failed to pass the identity check.\n- `error`: General message for a more specific error.\n";
                            };
                            readonly actions: {
                                readonly type: "array";
                                readonly description: "Sometimes, the customer is required to take an action or actions to further the purchase process, usually by submitting information at a provided URL. For each action, we pass an object with a type and a url. If no actions are required, this returns an empty array.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["complete_deposit", "retry_kyc"];
                                            readonly description: "`complete_deposit` `retry_kyc`";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSwapPairs: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly baseCurrencyCode: {
                        readonly type: "string";
                        readonly description: "The first cryptocurrency code for the pair.";
                        readonly examples: readonly ["eth"];
                    };
                    readonly baseCurrencyNetworkCode: {
                        readonly type: "string";
                        readonly description: "The first cryptocurrency network code for this pair.";
                        readonly examples: readonly ["ethereum"];
                    };
                    readonly quoteCurrencyCode: {
                        readonly type: "string";
                        readonly description: "The second cryptocurrency code for this pair.";
                        readonly examples: readonly ["btc"];
                    };
                    readonly quoteCurrencyNetworkCode: {
                        readonly type: "string";
                        readonly description: "The second cryptocurrency network code for this pair.";
                        readonly examples: readonly ["bitcoin"];
                    };
                    readonly minSwapAmount: {
                        readonly type: "string";
                        readonly description: "The minimum swapable amount.";
                        readonly examples: readonly ["0.0205"];
                    };
                    readonly maxSwapAmount: {
                        readonly type: "string";
                        readonly description: "The maximum swapable amount.";
                        readonly examples: readonly ["3.4079"];
                    };
                    readonly minSwapAmountQuote: {
                        readonly type: "string";
                        readonly description: "A positive integer representing the amount of `quoteCurrency` the customer will receive when swapping `minSwapAmount` of `baseCurrency`.";
                        readonly examples: readonly ["0.00080"];
                    };
                    readonly maxSwapAmountQuote: {
                        readonly type: "string";
                        readonly description: "A positive integer representing the amount of `quoteCurrency` the customer will receive when swapping `maxSwapAmount` of `baseCurrency`.";
                        readonly examples: readonly ["0.19581"];
                    };
                    readonly isSuspended: {
                        readonly type: "boolean";
                        readonly description: "Whether swap for this pair is suspended";
                        readonly examples: readonly [false];
                    };
                    readonly pairName: {
                        readonly type: "string";
                        readonly description: "The name of the cryptocurrency pair.";
                        readonly examples: readonly ["eth-btc"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSwapQuote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly PAIR: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-usdt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid swap pair `pairName` from <a href=\"/reference/getswappairs\">the pairs list</a>";
                };
            };
            readonly required: readonly ["PAIR"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly baseCurrencyAmount: {
                            readonly type: "number";
                            readonly description: "A positive number representing how much crypto the user wants to swap.";
                            readonly examples: readonly [200];
                        };
                    };
                    readonly required: readonly ["baseCurrencyAmount"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["Bearer hello.world.token"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer authentication token in the format 'Bearer [auth token]'.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object.";
                    readonly examples: readonly ["9b9d4036-bb99-4cb8-a61e-87d0750722d2"];
                };
                readonly expiresAt: {
                    readonly type: "string";
                    readonly description: "Time at which the quote expires. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly extraFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction. It is added to baseCurrencyAmount, feeAmount and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.0000005"];
                };
                readonly networkFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.00039"];
                };
                readonly extraFeeAmountInUSD: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction, in USD. It is added to baseCurrencyAmount, feeAmount and and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0"];
                };
                readonly networkFeeAmountInUSD: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction, in USD. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["20.049237585"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer wants to swap.";
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer will receive.";
                };
                readonly pairName: {
                    readonly type: "string";
                    readonly description: "The name of the cryptocurrency pair.";
                    readonly examples: readonly ["eth-btc"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing how much crypto the user wants to swap.";
                    readonly examples: readonly ["1.123"];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly ["0.0564"];
                };
                readonly feeCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Fee currency for this quote";
                };
                readonly baseCurrencyPriceInUsd: {
                    readonly type: "string";
                    readonly description: "The price of the crypto the customer wants to swap, in USD.";
                    readonly examples: readonly ["2946.441235"];
                };
                readonly quoteCurrencyPriceInUsd: {
                    readonly type: "string";
                    readonly description: "The price of the crypto the customer will receive, in USD.";
                    readonly examples: readonly ["51408.3015"];
                };
                readonly liveMode: {
                    readonly type: "boolean";
                    readonly description: "Whether live mode is enabled for this quote.";
                    readonly examples: readonly [true];
                };
                readonly exchangeRate: {
                    readonly type: "string";
                    readonly description: "The rate provided by the underlying exchange.";
                    readonly examples: readonly ["0.05731450269758475"];
                };
                readonly signature: {
                    readonly type: "string";
                    readonly description: "The signature for executing the quote";
                    readonly examples: readonly ["really-long-string"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSwapRequote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["779f7a4a-822b-40a1-a929-6d841af2d5d6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Swap transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["***"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer authentication token in the format 'Bearer [auth token]'.";
                };
            };
            readonly required: readonly ["authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object.";
                    readonly examples: readonly ["9b9d4036-bb99-4cb8-a61e-87d0750722d2"];
                };
                readonly expiresAt: {
                    readonly type: "string";
                    readonly description: "Time at which the quote expires. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly extraFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction. It is added to baseCurrencyAmount, feeAmount and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.0000005"];
                };
                readonly networkFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.00039"];
                };
                readonly extraFeeAmountInUSD: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction, in USD. It is added to baseCurrencyAmount, feeAmount and and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0"];
                };
                readonly networkFeeAmountInUSD: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction, in USD. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["20.049237585"];
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer wants to swap.";
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Details about the cryptocurrency the customer will receive.";
                };
                readonly pairName: {
                    readonly type: "string";
                    readonly description: "The name of the cryptocurrency pair.";
                    readonly examples: readonly ["eth-btc"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing how much crypto the user wants to swap.";
                    readonly examples: readonly ["1.123"];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing the amount of cryptocurrency the customer will receive. Set when the purchase of cryptocurrency has been executed.";
                    readonly examples: readonly ["0.0564"];
                };
                readonly feeCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Fee currency for this quote";
                };
                readonly baseCurrencyPriceInUsd: {
                    readonly type: "string";
                    readonly description: "The price of the crypto the customer wants to swap, in USD.";
                    readonly examples: readonly ["2946.441235"];
                };
                readonly quoteCurrencyPriceInUsd: {
                    readonly type: "string";
                    readonly description: "The price of the crypto the customer will receive, in USD.";
                    readonly examples: readonly ["51408.3015"];
                };
                readonly liveMode: {
                    readonly type: "boolean";
                    readonly description: "Whether live mode is enabled for this quote.";
                    readonly examples: readonly [true];
                };
                readonly exchangeRate: {
                    readonly type: "string";
                    readonly description: "The rate provided by the underlying exchange.";
                    readonly examples: readonly ["0.05731450269758475"];
                };
                readonly signature: {
                    readonly type: "string";
                    readonly description: "The signature for executing the quote";
                    readonly examples: readonly ["really-long-string"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSwapTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["bafaf3a5-24b1-4c2f-8d13-da8739722559"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Swap transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["Bearer hello.world.token"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer authentication token in the format 'Bearer [auth token]'.";
                };
            };
            readonly required: readonly ["authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object.";
                    readonly examples: readonly ["9020fd02-42ac-497f-8b5f-41fdf4dd0b1d"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                    readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                };
                readonly baseCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing how much crypto the user wants to swap.";
                    readonly examples: readonly ["1.123"];
                };
                readonly quoteCurrencyAmount: {
                    readonly type: "string";
                    readonly description: "A positive string number representing the amount of cryptocurrency the customer will receive.";
                    readonly examples: readonly ["0.0564"];
                };
                readonly feeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number representing the fee for the transaction.";
                    readonly examples: readonly ["0.0002"];
                };
                readonly quoteCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Crypto the customer wants to get.";
                };
                readonly baseCurrency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the currency.";
                            readonly examples: readonly ["aaefa32f-161b-42c8-8115-debcbf3d6a2d"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was created. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the object was last updated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2019-05-17T18:24:45.206Z"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["crypto"];
                            readonly description: "Always `crypto`\n\n`crypto`";
                            readonly examples: readonly ["crypto"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The currency's name.";
                            readonly examples: readonly ["USD Coin (ERC-20)"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly description: "The currency's code.";
                            readonly examples: readonly ["usdc"];
                        };
                        readonly precision: {
                            readonly type: "number";
                            readonly description: "The currency's precision (number of digits after decimal point).";
                            readonly examples: readonly [2];
                        };
                        readonly minBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the minimum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [30];
                        };
                        readonly maxBuyAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "Represents the maximum amount of cryptocurrency you can buy.";
                            readonly examples: readonly [1000];
                        };
                        readonly minSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The minimum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [15];
                        };
                        readonly maxSellAmount: {
                            readonly type: readonly ["number", "null"];
                            readonly description: "The maximum amount of cryptocurrency you can sell.";
                            readonly examples: readonly [100000];
                        };
                        readonly addressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly testnetAddressRegex: {
                            readonly type: "string";
                            readonly description: "A regular expression which you can test against your end user's testnet wallet addresses.";
                            readonly examples: readonly ["^(0x)[0-9A-Fa-f]{40}$"];
                        };
                        readonly supportsAddressTag: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports address tags.";
                            readonly examples: readonly [false];
                        };
                        readonly addressTagRegex: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "A regular expression which you can test against a wallet address tag. Defined only if the currency supports address tags.";
                        };
                        readonly supportsTestMode: {
                            readonly type: "boolean";
                            readonly description: "Whether the currency supports test mode.";
                            readonly examples: readonly [true];
                        };
                        readonly isSuspended: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are suspended. If the currency is suspended, exchange rates may not be available and it is not possible to create a transaction with this currency.";
                            readonly examples: readonly [false];
                        };
                        readonly isSupportedInUs: {
                            readonly type: "boolean";
                            readonly description: "Whether purchases for this currency are supported in the US.";
                            readonly examples: readonly [true];
                        };
                        readonly isSellSupported: {
                            readonly type: "boolean";
                            readonly description: "Whether sales for this currency are supported.";
                            readonly examples: readonly [true];
                        };
                        readonly notAllowedUSStates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NE", "NH", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
                                readonly description: "`AL` `AK` `AZ` `AR` `AS` `CA` `CO` `CT` `DC` `DE` `FL` `GA` `GU` `HI` `ID` `IL` `IN` `IA` `KS` `KY` `LA` `MA` `MD` `ME` `MI` `MN` `MO` `MP` `MS` `MT` `NE` `NH` `NV` `NJ` `NM` `NY` `NC` `ND` `OH` `OK` `OR` `PA` `PR` `RI` `SC` `SD` `TN` `TX` `TT` `UT` `VT` `VA` `VI` `WA` `WV` `WI` `WY`";
                            };
                            readonly description: "A list with all the US states for this currency that are not supported.";
                            readonly examples: readonly ["LA", "VI"];
                        };
                        readonly notAllowedCountries: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "A list with all the ISO 3166-1 alpha-2 country codes for this currency that are not supported.";
                            readonly examples: readonly ["CA"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Additional metadata for the currency.";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "Unique contract address where the token smart contract is hosted.";
                                    readonly examples: readonly [0];
                                };
                                readonly chainId: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "ID used to identify different EVM compatible chains.";
                                    readonly examples: readonly ["1"];
                                };
                                readonly networkCode: {
                                    readonly type: "string";
                                    readonly description: "Name of the cryptocurrency";
                                    readonly examples: readonly ["ethereum"];
                                };
                            };
                        };
                    };
                    readonly description: "Crypto currency the customer wants to swap.";
                };
                readonly customerId: {
                    readonly type: "string";
                    readonly description: "The identifier of the customer the transaction is associated with.";
                    readonly examples: readonly ["3b97352d-a9c2-4786-afe7-e7d74e0a8ad7"];
                };
                readonly extraFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing your extra fee for the transaction. It is added to baseCurrencyAmount, feeAmount and networkFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.0000005"];
                };
                readonly networkFeeAmount: {
                    readonly type: "string";
                    readonly description: "A positive number string representing the network fee for the transaction. It is added to baseCurrencyAmount, feeAmount and extraFeeAmount when the swap is executed.";
                    readonly examples: readonly ["0.00039"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The transaction's status.\n\n`completed` `failed` `waitingForDepositAddressGeneration` `waitingForDeposit` `executingSwap` `reQuoteRequired` `screeningWalletAddress` `frozen`";
                    readonly enum: readonly ["completed", "failed", "waitingForDepositAddressGeneration", "waitingForDeposit", "executingSwap", "reQuoteRequired", "screeningWalletAddress", "frozen"];
                    readonly examples: readonly ["completed"];
                };
                readonly depositWalletAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "The cryptocurrency wallet address the customer should send the funds to.";
                            readonly examples: readonly [8.97807189246089e+47];
                        };
                        readonly tag: {
                            readonly type: readonly ["string", "null"];
                        };
                    };
                };
                readonly destinationWalletAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "The cryptocurrency wallet address the customer will receive the funds to.";
                            readonly examples: readonly [8.97807189246089e+47];
                        };
                        readonly tag: {
                            readonly type: readonly ["string", "null"];
                        };
                    };
                };
                readonly refundWalletAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "The cryptocurrency wallet address the customer will receive the refund to.";
                            readonly examples: readonly [8.978070966892851e+47];
                        };
                        readonly tag: {
                            readonly type: readonly ["string", "null"];
                        };
                    };
                };
                readonly depositHash: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer from the customer's wallet to MoonPay's wallet. Set when the deposit has been executed and received.";
                    readonly examples: readonly [8.377408903480862e+76];
                };
                readonly transactionHash: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "The cryptocurrency transaction identifier representing the transfer from the MoonPay's wallet to the customer's wallet. Set when the deposit has been executed and sent.";
                    readonly examples: readonly [8.377408903480862e+76];
                };
                readonly refundTransactionHash: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Same for transactionHash but a refund.";
                    readonly examples: readonly [8.377408903480862e+76];
                };
                readonly blockExplorerLinkForDeposit: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "URL to the block explorer for the deposit transaction.";
                    readonly examples: readonly ["https://etherscan.io/tx/0xb936743f2956a108203ac1c3d2f0da90a5b990c896fcaab217c1cedf9ee60247"];
                };
                readonly blockExplorerLinkForTransaction: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "URL to the block explorer for the swap transaction.";
                    readonly examples: readonly ["https://etherscan.io/tx/0xb936743f2956a108203ac1c3d2f0da90a5b990c896fcaab217c1cedf9ee60247"];
                };
                readonly failureReason: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "If transaction fails, what is the reason.\n\n`customerLimitsExceeded` `depositAmountIncorrect` `depositAmountOutsideLimits` `walletGenerationFailed` `assetSwapFailed` `invalidQuote` `depositNotFound` `refundAddressNotSet` `invalidDepositAmount` `noDepositWithinTimeframe` `invalidTransaction`";
                    readonly enum: readonly ["customerLimitsExceeded", "depositAmountIncorrect", "depositAmountOutsideLimits", "walletGenerationFailed", "assetSwapFailed", "invalidQuote", "depositNotFound", "refundAddressNotSet", "invalidDepositAmount", "noDepositWithinTimeframe", "invalidTransaction"];
                };
                readonly failureReasonMessage: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Human-readable message for the failure reason.";
                };
                readonly integratedSwapDepositInfo: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly depositInitiatedAt: {
                            readonly type: "string";
                            readonly description: "Time at which the deposit was initiated. Returned as an ISO 8601 string.";
                            readonly examples: readonly ["2024-02-23T00:58:26.577Z"];
                        };
                        readonly depositId: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RejectSwapRequote: {
    readonly body: {
        readonly properties: {
            readonly signature: {
                readonly type: "string";
                readonly description: "Signature from the <a href=\"/reference/get_v4-swap-transaction-transactionid-requote\">GET requote</a> response.";
                readonly examples: readonly ["***"];
            };
            readonly externalTransactionId: {
                readonly type: "string";
                readonly description: "A valid Swap transaction ID from your backend. You can use this to associate your transaction with our transaction.";
                readonly examples: readonly ["dc2ddba2-9e81-45e9-a201-e8b6d69b5ad9"];
            };
            readonly walletAddresses: {
                readonly type: "object";
                readonly properties: {
                    readonly refundWalletAddress: {
                        readonly type: "string";
                        readonly description: "The address where we will refund the crypto back to, in case the Swap transaction cannot be completed.";
                        readonly examples: readonly [7.55070758245981e+47];
                    };
                    readonly refundWalletAddressTag: {
                        readonly type: "string";
                        readonly description: "The tag for `refundWalletAddress`";
                        readonly examples: readonly ["tag"];
                    };
                };
                readonly required: readonly ["refundWalletAddress"];
            };
        };
        readonly required: readonly ["signature", "walletAddresses"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["***"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer authentication token in the format 'Bearer [auth token]'.";
                };
            };
            readonly required: readonly ["authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly description: "True if the swap requote was successfully rejected.";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { ExecuteSwapQuote, GetAccount, GetBuyQuote, GetBuyTransaction, GetBuyTransactionByExternalId, GetCountries, GetCurrencies, GetCurrencyLimits, GetIpAddress, GetNetworkFees, GetSellQuote, GetSellTransaction, GetSellTransactionByExternalId, GetSwapPairs, GetSwapQuote, GetSwapRequote, GetSwapTransaction, RejectSwapRequote };
