export const headerLinks = [
  {
    id: 1,
    title: '发现音乐',
    link: '/discover',
  },
  {
    id: 2,
    title: '我的音乐',
    link: '/mine',
  },
  {
    id: 3,
    title: '朋友',
    link: '/friend',
  },
  {
    id: 4,
    title: '商城',
    link: 'https://item.taobao.com/item.htm?spm=a230r.1.14.11.7ade5ed1mtltq2&id=654671949849&ns=1&abbucket=17&mt=',
  },
  {
    id: 5,
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/',
  },
  {
    id: 6,
    title: '下载客户端',
    link: 'https://music.163.com/#/download',
  },
];
export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service',
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy',
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children',
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html',
  },
  {
    title: '意见反馈',
    link: '#',
  },
];

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth',
    title: '用户认证',
  },
  {
    link: 'https://music.163.com/recruit',
    title: '独立音乐人',
  },
  {
    link: 'https://music.163.com/web/reward',
    title: '赞赏',
  },
  {
    link: 'https://music.163.com/uservideo#/plan',
    title: '视频奖励',
  },
];
// discover中的数据
export const discoverMenu = [
  {
    title: '推荐',
    link: '/discover/recommend',
  },
  {
    title: '排行榜',
    link: '/discover/ranking',
  },
  {
    title: '歌单',
    link: '/discover/catlist',
  },
  {
    title: '主播电台',
    link: '/discover/djradio',
  },
  {
    title: '歌手',
    link: '/discover/artist',
  },
  {
    title: '新碟上架',
    link: '/discover/album',
  },
];
export const searchLink = [
  {
    id: 1,
    title: '单曲',
    link: '/search/songs',
  },
  {
    id: 2,
    title: '歌手',
    link: '/search/artists',
  },
  {
    id: 3,
    title: '专辑',
    link: '/search/albums',
  },
  {
    id: 4,
    title: '视频',
    link: '/search/videos',
  },
  {
    id: 5,
    title: '歌词',
    link: '/search/lyrics',
  },
  {
    id: 6,
    title: '歌单',
    link: '/search/songswrap',
  },
  {
    id: 7,
    title: '声音主播',
    link: '/search/dj',
  },
  {
    id: 8,
    title: '用户',
    link: '/search/user',
  },
];
// 歌手类别
export const artistCategories = [
  {
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: 1,
        dataPath: '/top/artists?limit=100',
        id: 0,
      },
      {
        name: '入驻歌手',
        type: 2,
        url: '/discover/artist?cat=5001',
        dataPath: '/artist/list?cat=5001',
        id: 1,
      },
    ],
  },
  {
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/artist?id=1001',
        type: 1,
        id: 2,
      },
      {
        name: '华语女歌手',
        url: '/discover/artist?id=1002',
        type: 2,
        id: 3,
      },
      {
        name: '华语组合/乐队',
        url: '/discover/artist?id=1003',
        type: 3,
        id: 4,
      },
    ],
  },
  {
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/artist?id=2001',
        type: 1,
        id: 5,
      },
      {
        name: '欧美女歌手',
        url: '/discover/artist?id=2002',
        type: 2,
        id: 6,
      },
      {
        name: '欧美组合乐队',
        url: '/discover/artist?id=2003',
        type: 3,
        id: 7,
      },
    ],
  },
  {
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/artist?id=6001',
        type: 1,
        id: 8,
      },
      {
        name: '日本女歌手',
        url: '/discover/artist?id=6002',
        type: 2,
        id: 9,
      },
      {
        name: '日本组合/乐队',
        url: '/discover/artist?id=6003',
        type: 3,
        id: 10,
      },
    ],
  },
  {
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/artist?id=7001',
        type: 1,
        id: 11,
      },
      {
        name: '韩国女歌手',
        url: '/discover/artist?id=7002',
        type: 2,
        id: 12,
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/artist?id=7003',
        type: 3,
        id: 13,
      },
    ],
  },
  {
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/artist?id=4001',
        type: 1,
        id: 14,
      },
      {
        name: '其他女歌手',
        url: '/discover/artist?id=4002',
        type: 2,
        id: 15,
      },
      {
        name: '其他组合乐队',
        url: '/discover/artist?id=4003',
        type: 3,
        id: 16,
      },
    ],
  },
];
