import { DynamicFieldName } from "@mysten/sui/client";
import Post from "./Post";
import { useGetDynamicFieldObject } from "@/hooks/useGetDynamicFieldObject";
import useGetProfile from "@/hooks/useGetProfile";

interface Tweet {
  content: string;
  created_at: string;
  id: string;
  is_retweet: boolean;
  likes: string;
  media_blob_id: string;
  original_tweet_id: string;
  owner: string;
  retweets: string;
}

interface TweetItemProps {
  dynamic_field_name: DynamicFieldName;
  tweetsTableId: string;
}

const style = {
  feedContainer: `divide-y divide-[#38444d]`,
};

export function XFeedItem({ dynamic_field_name, tweetsTableId }: TweetItemProps) {
  const tweetData = useGetDynamicFieldObject({ dynamic_field_name, tableId: tweetsTableId });
  const tweetContent = tweetData?.data?.content ? (tweetData.data.content as any).fields?.value?.fields as Tweet : undefined;
  const profile = useGetProfile(tweetContent?.owner);

  if (!tweetData?.data?.content) {
    return <div className="text-center p-4">暂无数据</div>;
  }

  if (!tweetContent) {
    return <div className="text-center p-4">数据格式错误</div>;
  }

  const fields = profile?.data?.content?.dataType === "moveObject"
    ? (profile.data.content.fields as any)
    : undefined;

  const ipfsUrl = fields?.value?.fields?.ipfs_nft_url;
  const walletAddress = tweetContent.owner;
  const timestamp = new Date(parseInt(tweetContent.created_at)).toLocaleString();
  const image_blob_id = fields?.value?.fields?.image_blob_id;


  return (
    <div className={style.feedContainer}>
      <Post
        displayName={fields?.value?.fields?.nickname}
        userName={`${walletAddress.slice(0, 5)}...${walletAddress.slice(-4)}`}
        text={tweetContent.content}
        avatar={ipfsUrl ? ipfsUrl.replace('ipfs://', 'https://ipfs.io/ipfs/') : `https://avatars.dicebear.com/api/pixel-art/${walletAddress}.svg`}
        isProfileImageNft={!!ipfsUrl}
        timestamp={timestamp}
        image_blob_id={image_blob_id}
      />
    </div>
  );
}