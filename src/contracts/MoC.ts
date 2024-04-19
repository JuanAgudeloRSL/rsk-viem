export const MoCContract = {
    address: '0xE481663CB5E5C41CF528d146DC221D2489Fdc451',
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qACsent_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACNeeded_",
            "type": "uint256"
          }
        ],
        "name": "InsufficientQacSent",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTPsent_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPNeeded_",
            "type": "uint256"
          }
        ],
        "name": "InsufficientQtpSent",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tcAvailableToRedeem_",
            "type": "uint256"
          }
        ],
        "name": "InsufficientTCtoRedeem",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tpAvailableToMint_",
            "type": "uint256"
          }
        ],
        "name": "InsufficientTPtoMint",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tpAvailableToRedeem_",
            "type": "uint256"
          }
        ],
        "name": "InsufficientTPtoRedeem",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidFluxCapacitorOperation",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidValue",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "Liquidated",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "cglb_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "covThrld_",
            "type": "uint256"
          }
        ],
        "name": "LowCoverage",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "max_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "new_",
            "type": "uint256"
          }
        ],
        "name": "MaxFluxCapacitorOperationReached",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MissingBlocksToSettlement",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MissingBlocksToTCInterestPayment",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "dataProviderAddress_",
            "type": "address"
          }
        ],
        "name": "MissingProviderData",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "priceProviderAddress_",
            "type": "address"
          }
        ],
        "name": "MissingProviderPrice",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotAuthorizedChanger",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotWhenPaused",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OnlyPauser",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OnlyQueue",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OnlyWhenLiquidated",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OnlyWhilePaused",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PeggedTokenAlreadyAdded",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qACmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACtoRedeem_",
            "type": "uint256"
          }
        ],
        "name": "QacBelowMinimumRequired",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "QacNeededMustBeGreaterThanZero",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTCmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          }
        ],
        "name": "QtcBelowMinimumRequired",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTPmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          }
        ],
        "name": "QtpBelowMinimumRequired",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "TransferFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "Unstoppable",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "protocolAlreadyMigrated",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "previousAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "AdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "beacon",
            "type": "address"
          }
        ],
        "name": "BeaconUpgraded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "ContractLiquidated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "qAC_",
            "type": "uint256"
          }
        ],
        "name": "LiqTPRedeemed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "i_",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "tpTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "priceProviderAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tpCtarg",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpMintFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpRedeemFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEma",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEmaSf",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct PeggedTokenParams",
            "name": "peggedTokenParams_",
            "type": "tuple"
          }
        ],
        "name": "PeggedTokenChange",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "SettlementExecuted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mocGain_",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tpGain_",
            "type": "uint256[]"
          }
        ],
        "name": "SuccessFeeDistributed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "interestAmount_",
            "type": "uint256"
          }
        ],
        "name": "TCInterestPayment",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "i_",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldTPema_",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTPema_",
            "type": "uint256"
          }
        ],
        "name": "TPemaUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "implementation",
            "type": "address"
          }
        ],
        "name": "Upgraded",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "absoluteAccumulator",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "acToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tpTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "priceProviderAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tpCtarg",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpMintFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpRedeemFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEma",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEmaSf",
                "type": "uint256"
              }
            ],
            "internalType": "struct PeggedTokenParams",
            "name": "peggedTokenParams_",
            "type": "tuple"
          }
        ],
        "name": "addPeggedToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "appreciationFactor",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "bes",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "bns",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "calcCtargemaCA",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ctargemaCA",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IGovernor",
            "name": "newGovernor_",
            "type": "address"
          }
        ],
        "name": "changeGovernor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decayBlockSpan",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "differentialAccumulator",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tpTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "priceProviderAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tpCtarg",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpMintFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpRedeemFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEma",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tpEmaSf",
                "type": "uint256"
              }
            ],
            "internalType": "struct PeggedTokenParams",
            "name": "peggedTokenParams_",
            "type": "tuple"
          }
        ],
        "name": "editPeggedToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "emaCalculationBlockSpan",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "evalLiquidation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qTC",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCore.MintTCParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execMintTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtotalNeeded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.MintTCandTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execMintTCandTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtotalNeeded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTCMinted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCore.MintTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execMintTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtotalNeeded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qTC",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmin",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCore.RedeemTCParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execRedeemTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtoRedeem",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTC",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmin",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.RedeemTCandTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execRedeemTCandTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtoRedeem",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPRedeemed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmin",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.RedeemTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execRedeemTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACtoRedeem",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "execSettlement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTC",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qTPmin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.SwapTCforTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execSwapTCforTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACSurcharges",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPMinted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tp",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qTCmin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.SwapTPforTCParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execSwapTPforTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACSurcharges",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTCMinted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "tpFrom",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tpTo",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "qTP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qTPmin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACmax",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "vendor",
                "type": "address"
              }
            ],
            "internalType": "struct MocCommons.SwapTPforTPParams",
            "name": "params_",
            "type": "tuple"
          }
        ],
        "name": "execSwapTPforTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACSurcharges",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPMinted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qFeeTokenTotalNeeded",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qACFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qACVendorMarkup",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "qFeeTokenVendorMarkup",
                "type": "uint256"
              }
            ],
            "internalType": "struct MocCommons.FeeCalcs",
            "name": "feeCalcs",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeRetainer",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeTokenPct",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeTokenPriceProvider",
        "outputs": [
          {
            "internalType": "contract IPriceProvider",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getBts",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getCglb",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "cglob",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getLckAC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "lckAC",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getLeverageTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "leverageTC",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          }
        ],
        "name": "getPACtp",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPTCac",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "pTCac",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTCAvailableToRedeem",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "tcAvailableToRedeem",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          }
        ],
        "name": "getTPAvailableToMint",
        "outputs": [
          {
            "internalType": "int256",
            "name": "tpAvailableToMint",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalACavailable",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalACavailable",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTpAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "governor",
        "outputs": [
          {
            "internalType": "contract IGovernor",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "mocQueueAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "feeTokenAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "feeTokenPriceProviderAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "tcTokenAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "mocFeeFlowAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "mocAppreciationBeneficiaryAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "protThrld",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "liqThrld",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "feeRetainer",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tcMintFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tcRedeemFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "swapTPforTPFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "swapTPforTCFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "swapTCforTPFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "redeemTCandTPFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "mintTCandTPFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "feeTokenPct",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "successFee",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "appreciationFactor",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "bes",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address",
                        "name": "tcInterestCollectorAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tcInterestRate",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tcInterestPaymentBlockSpan",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address",
                        "name": "maxAbsoluteOpProviderAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "maxOpDiffProviderAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "decayBlockSpan",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct MocBaseBucket.InitializeBaseBucketParams",
                    "name": "initializeBaseBucketParams",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address",
                    "name": "governorAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "pauserAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "mocCoreExpansion",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "emaCalculationBlockSpan",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "mocVendors",
                    "type": "address"
                  }
                ],
                "internalType": "struct MocCore.InitializeCoreParams",
                "name": "initializeCoreParams",
                "type": "tuple"
              },
              {
                "internalType": "address",
                "name": "acTokenAddress",
                "type": "address"
              }
            ],
            "internalType": "struct MocCARC20.InitializeParams",
            "name": "initializeParams_",
            "type": "tuple"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isLiquidationReached",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "lastOperationBlockNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "liqEnabled",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          }
        ],
        "name": "liqRedeemTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "qACRedeemed",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "liqThrld",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "liquidated",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "makeStoppable",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "makeUnstoppable",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxAbsoluteOpProvider",
        "outputs": [
          {
            "internalType": "contract IDataProvider",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxOpDiffProvider",
        "outputs": [
          {
            "internalType": "contract IDataProvider",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxQACToMintTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "maxQAC",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxQACToRedeemTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "maxQAC",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "mintTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "mintTCandTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mintTCandTPFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "mintTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mocAppreciationBeneficiaryAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mocFeeFlowAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mocQueue",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mocVendors",
        "outputs": [
          {
            "internalType": "contract MocVendors",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nACcb",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nTCcb",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nextEmaCalculation",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nextTCInterestPayment",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pauser",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "pegContainer",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "nTP",
            "type": "uint256"
          },
          {
            "internalType": "contract IPriceProvider",
            "name": "priceProvider",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "peggedTokenIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "protThrld",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proxiableUUID",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "qACLockedInPending",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmin_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "redeemTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmin_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "redeemTCandTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "redeemTCandTPFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmin_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "redeemTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "refreshACBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "appreciationFactor_",
            "type": "uint256"
          }
        ],
        "name": "setAppreciationFactor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "bes_",
            "type": "uint256"
          }
        ],
        "name": "setBes",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "decayBlockSpan_",
            "type": "uint256"
          }
        ],
        "name": "setDecayBlockSpan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "blockSpan_",
            "type": "uint256"
          }
        ],
        "name": "setEmaCalculationBlockSpan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "feeRetainer_",
            "type": "uint256"
          }
        ],
        "name": "setFeeRetainer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocFeeTokenAddress_",
            "type": "address"
          }
        ],
        "name": "setFeeTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "feeTokenPct_",
            "type": "uint256"
          }
        ],
        "name": "setFeeTokenPct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocFeeTokenPriceProviderAddress_",
            "type": "address"
          }
        ],
        "name": "setFeeTokenPriceProviderAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "liqEnabled_",
            "type": "bool"
          }
        ],
        "name": "setLiqEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "liqThrld_",
            "type": "uint256"
          }
        ],
        "name": "setLiqThrld",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "maxAbsoluteOpProviderAddress_",
            "type": "address"
          }
        ],
        "name": "setMaxAbsoluteOpProviderAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "maxOpDiffProviderAddress_",
            "type": "address"
          }
        ],
        "name": "setMaxOpDiffProviderAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "mintTCandTPFee_",
            "type": "uint256"
          }
        ],
        "name": "setMintTCandTPFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocAppreciationBeneficiaryAddress_",
            "type": "address"
          }
        ],
        "name": "setMocAppreciationBeneficiaryAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocCoreExpansion_",
            "type": "address"
          }
        ],
        "name": "setMocCoreExpansion",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocFeeFlowAddress_",
            "type": "address"
          }
        ],
        "name": "setMocFeeFlowAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "mocQueueAddress_",
            "type": "address"
          }
        ],
        "name": "setMocQueue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "mocVendors_",
            "type": "address"
          }
        ],
        "name": "setMocVendors",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newPauser_",
            "type": "address"
          }
        ],
        "name": "setPauser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protThrld_",
            "type": "uint256"
          }
        ],
        "name": "setProtThrld",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemTCandTPFee_",
            "type": "uint256"
          }
        ],
        "name": "setRedeemTCandTPFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "successFee_",
            "type": "uint256"
          }
        ],
        "name": "setSuccessFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "swapTCforTPFee_",
            "type": "uint256"
          }
        ],
        "name": "setSwapTCforTPFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "swapTPforTCFee_",
            "type": "uint256"
          }
        ],
        "name": "setSwapTPforTCFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "swapTPforTPFee_",
            "type": "uint256"
          }
        ],
        "name": "setSwapTPforTPFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tcInterestCollectorAddress_",
            "type": "address"
          }
        ],
        "name": "setTCInterestCollectorAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tcInterestPaymentBlockSpan_",
            "type": "uint256"
          }
        ],
        "name": "setTCInterestPaymentBlockSpan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tcInterestRate_",
            "type": "uint256"
          }
        ],
        "name": "setTCInterestRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tcMintFee_",
            "type": "uint256"
          }
        ],
        "name": "setTcMintFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tcRedeemFee_",
            "type": "uint256"
          }
        ],
        "name": "setTcRedeemFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "shouldCalculateEma",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "stoppable",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "successFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTC_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "swapTCforTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "swapTCforTPFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tp_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTCmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "swapTPforTC",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "swapTPforTCFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tpFrom_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tpTo_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTP_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qTPmin_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qACmax_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "vendor_",
            "type": "address"
          }
        ],
        "name": "swapTPforTP",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "operId",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "swapTPforTPFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcHoldersInterestPayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcInterestCollectorAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcInterestPaymentBlockSpan",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcInterestRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcMintFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcRedeemFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tcToken",
        "outputs": [
          {
            "internalType": "contract MocTC",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tpCtarg",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tpEma",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ema",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sf",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tpLiqPrices",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "tpMintFees",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "tpRedeemFees",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tpTokens",
        "outputs": [
          {
            "internalType": "contract IMocRC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qACToUnlock_",
            "type": "uint256"
          }
        ],
        "name": "unlockACInPending",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTCToUnlock_",
            "type": "uint256"
          }
        ],
        "name": "unlockTCInPending",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "contract IERC20Upgradeable",
            "name": "tpToken_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qTPToUnlock_",
            "type": "uint256"
          }
        ],
        "name": "unlockTPInPending",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "updateEmas",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ]
  }