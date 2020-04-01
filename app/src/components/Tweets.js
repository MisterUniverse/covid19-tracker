import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';

const Tweets = () => {
  return (
    <div>
      {' '}
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='who'
        options={{ height: '77vh' }}
      />
    </div>
  );
};

export default Tweets;
