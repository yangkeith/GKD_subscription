import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.reyou.hh',
  name: '昊昊听书',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      rules: [
        {
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches:
            'FrameLayout[id="com.reyou.hh:id/ksad_tk_view"] >5 ViewGroup > ViewGroup[index=2] > ViewGroup',
          snapshotUrls: 'https://i.gkd.li/i/16556907',
        },
        {
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches:
            'FrameLayout[id="android:id/content"] >4 FrameLayout[index=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/16745234',
        },
        {
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches:
            'FrameLayout[id="android:id/content"] >4 FrameLayout[index=2] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/16745831',
        },
      ],
    },
  ],
});
