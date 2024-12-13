/** @ts-ignore */
import typingSpeedContract from "../../typing-speed-contract.json";
import suiWalrusXContract from "../../sui-walrusx-contract.json";

export const CONSTANTS = {
  SUI_WALRUSX_CONTRACT: {
    TARGET_MINT_PROFILE: `${suiWalrusXContract.packageId}::walrusx::mint_profile`,
    TARGET_CREATE_TWEET: `${suiWalrusXContract.packageId}::walrusx::create_tweet`,
    TARGET_X_PASS_NFT_MINT: `${suiWalrusXContract.packageId}::x_pass_nft::mint`,
    WALRUSX_SHARED_OBJECT_ID: suiWalrusXContract.walrusxSharedObjectId,
    WALRUSX_PROFILE_OBJECT_TYPE: `${suiWalrusXContract.packageId}::walrusx::Profile`,
    WALRUSX_PASSPORT_NFT_OBJECT_TYPE: `${suiWalrusXContract.packageId}::x_pass_nft::XPassNFT`,
  },
  WALRUS: {
    PUBLISHER_URL: "https://walrus-testnet-publisher.nodes.guru",
    AGGREGATOR_URL: "https://walrus-testnet-aggregator.nodes.guru",
  },
  PINATA: {
    API_KEY: import.meta.env.VITE_PINATA_API_KEY,
    API_SECRET: import.meta.env.VITE_PINATA_API_SECRET,
  },
};