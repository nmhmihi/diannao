export interface SubLink {
  label: string;
  url: string;
}

export interface LessonItem {
  id: string;
  title: string;
  url?: string;
  subLinks?: SubLink[];
}

export interface TopicGroup {
  id: string;
  title: string;
  items: LessonItem[];
}

export const INITIAL_TOPICS: TopicGroup[] = [
  {
    id: 't6',
    title: '題組六',
    items: [
      {
        id: 't6-access-1',
        title: 'Access 建立資料庫',
        url: 'https://youtu.be/uvn3PN-3aZU?si=zGtrt1E-R-zXmHCP',
      },
      {
        id: 't6-access-2',
        title: 'Access 資料整合',
        url: 'https://youtu.be/hzAHK6pbxeM?si=GSFlurDwXRkowFHm',
      },
      {
        id: 't6-excel-0',
        title: 'Excel 資料整理',
        url: 'https://youtu.be/-geZqrqdw2U?si=Wgbyepl4JI6wHyG-',
      },
      {
        id: 't6-excel-1',
        title: 'Excel 附件一',
        url: 'https://youtu.be/fnBADxqtk98?si=CXADVlJjR5aveSgO',
      },
      {
        id: 't6-excel-2',
        title: 'Excel 附件二',
        url: 'https://youtu.be/xv0Y4r5Wx_s?si=EERbfzF5x7hL5T5q',
      },
      {
        id: 't6-excel-3',
        title: 'Excel 附件三',
        url: 'https://youtu.be/jsA1UOA8cRU?si=5TtLqqcLfLOdCLEX',
      },
      {
        id: 't6-excel-4',
        title: 'Excel 附件四',
        url: 'https://youtu.be/939mHE2kE40?si=E8bU99TtcMycYIe6',
      },
      {
        id: 't6-excel-5',
        title: 'Excel 附件五',
        url: '',
      },
      {
        id: 't6-word-1',
        title: 'Word 附件一',
        url: 'https://youtu.be/4XfgSoE1GpY?si=sR8rvYZrHzL3dEyv',
      },
      {
        id: 't6-word-2',
        title: 'Word 附件二',
        url: 'https://youtu.be/WojjY5Batew?si=nZjFugILj2fMn6sq',
      },
      {
        id: 't6-word-3',
        title: 'Word 附件三',
        url: 'https://youtu.be/Ah6xZ2erxR0?si=9G5gWlJe7-cv04iV',
      },
      {
        id: 't6-word-4',
        title: 'Word 附件四',
        url: 'https://youtu.be/zjPccGgMVyU?si=TT2vgrOEGnNeJozf',
      },
      {
        id: 't6-word-5',
        title: 'Word 附件五',
        url: 'https://youtu.be/6X1L4_b3Cpo?si=AbIiy9RkrZ8Vubts',
      },
    ],
  },
  {
    id: 't5',
    title: '題組五',
    items: [
      {
        id: 't5-access-1',
        title: 'Access 建立資料庫',
        url: 'https://youtu.be/tCCcBmKck7Y',
      },
      {
        id: 't5-access-2',
        title: 'Access 資料整合',
        url: 'https://youtu.be/a1nNhV3lFhw',
      },
      {
        id: 't5-excel-0',
        title: 'Excel 資料整理',
        url: 'https://youtu.be/rIlLY94ENbE',
      },
      {
        id: 't5-excel-1',
        title: 'Excel 附件一',
        url: 'https://youtu.be/qM7VXN4NwPU',
      },
      {
        id: 't5-excel-2',
        title: 'Excel 附件二',
        url: 'https://youtu.be/wDqxrnRMQ7A',
      },
      {
        id: 't5-excel-3',
        title: 'Excel 附件三',
        url: 'https://youtu.be/gxJgJcerKxM',
      },
      {
        id: 't5-excel-4',
        title: 'Excel 附件四',
        url: 'https://youtu.be/UdnMmlc9Rjk',
      },
      {
        id: 't5-excel-5',
        title: 'Excel 附件五',
        url: '',
      },
      {
        id: 't5-word-1',
        title: 'Word 附件一',
        url: 'https://youtu.be/MTnaIE9HjzY',
      },
      {
        id: 't5-word-2',
        title: 'Word 附件二',
        url: 'https://youtu.be/4atU8MBPGnE',
      },
      {
        id: 't5-word-3',
        title: 'Word 附件三',
        url: 'https://youtu.be/mSXp1Dwpa5M',
      },
      {
        id: 't5-word-4',
        title: 'Word 附件四',
        url: 'https://youtu.be/d4ZHyWehRyQ',
      },
      {
        id: 't5-word-5',
        title: 'Word 附件五',
        url: 'https://youtu.be/GL2qN2NcbOw',
      },
    ],
  },
  {
    id: 't4',
    title: '題組四',
    items: [
      {
        id: 't4-access-1',
        title: 'Access 建立資料庫',
        url: 'https://youtu.be/kKteWeVgItU',
      },
      {
        id: 't4-access-2',
        title: 'Access 資料整合',
        subLinks: [
          { label: '1', url: 'https://youtu.be/f-et-6EDBOI' },
          { label: '2', url: 'https://youtu.be/etOJG9gA-IA' },
        ],
      },
      {
        id: 't4-excel-0',
        title: 'Excel 資料整理',
        url: 'https://youtu.be/lQLCzwtD9bM',
      },
      {
        id: 't4-excel-1',
        title: 'Excel 附件一',
        url: 'https://youtu.be/l6RSsb6jmLU',
      },
      {
        id: 't4-excel-2',
        title: 'Excel 附件二',
        url: 'https://youtu.be/4DSQC-Zt9NQ',
      },
      {
        id: 't4-excel-3',
        title: 'Excel 附件三',
        url: 'https://youtu.be/xWA6nvdeBIM',
      },
      {
        id: 't4-excel-4',
        title: 'Excel 附件四',
        url: 'https://youtu.be/rEdOgV7vTww',
      },
      {
        id: 't4-excel-5',
        title: 'Excel 附件五',
        url: 'https://youtu.be/vXQ19gJjMZc',
      },
      {
        id: 't4-word-1',
        title: 'Word 附件一',
        url: 'https://youtu.be/9_0A3rlja_4',
      },
      {
        id: 't4-word-2',
        title: 'Word 附件二',
        url: 'https://youtu.be/_Lr1LwlvUZg',
      },
      {
        id: 't4-word-3',
        title: 'Word 附件三',
        url: 'https://youtu.be/6iLz_LrVOzs',
      },
      {
        id: 't4-word-4',
        title: 'Word 附件四',
        url: 'https://youtu.be/45zNenY8Ui4',
      },
      {
        id: 't4-word-5',
        title: 'Word 附件五',
        url: 'https://youtu.be/3Nk9ZVvzcG4',
      },
    ],
  },
  {
    id: 't3',
    title: '題組三',
    items: [
      {
        id: 't3-access-1',
        title: 'Access 建立資料庫',
        url: 'https://youtu.be/SaWD2AMK0bk',
      },
      {
        id: 't3-access-2',
        title: 'Access 資料整合',
        subLinks: [
          { label: '1', url: 'https://youtu.be/jyLwPHprsBM' },
          { label: '2', url: 'https://youtu.be/OCOZ4WJYCjM' },
        ],
      },
      {
        id: 't3-excel-0',
        title: 'Excel 資料整理',
        url: 'https://youtu.be/q1MH7vBh3kM',
      },
      {
        id: 't3-excel-1',
        title: 'Excel 附件一',
        url: 'https://youtu.be/l6ItIUBlfvs',
      },
      {
        id: 't3-excel-2',
        title: 'Excel 附件二',
        url: 'https://youtu.be/ri-wUZImq-I',
      },
      {
        id: 't3-excel-3',
        title: 'Excel 附件三',
        url: 'https://youtu.be/rEW8DSHe4NM',
      },
      {
        id: 't3-excel-4',
        title: 'Excel 附件四',
        url: 'https://youtu.be/Depnl-6-HvE',
      },
      {
        id: 't3-excel-5',
        title: 'Excel 附件五',
        url: '',
      },
      {
        id: 't3-word-1',
        title: 'Word 附件一',
        url: 'https://youtu.be/ucAZVhcxvlU',
      },
      {
        id: 't3-word-2',
        title: 'Word 附件二',
        url: 'https://youtu.be/i7QlCVVLZiw',
      },
      {
        id: 't3-word-3',
        title: 'Word 附件三',
        url: 'https://youtu.be/8rqrx43o3xo',
      },
      {
        id: 't3-word-4',
        title: 'Word 附件四',
        url: 'https://youtu.be/a-Ik9PoWwbI',
      },
      {
        id: 't3-word-5',
        title: 'Word 附件五',
        url: 'https://youtu.be/XskqDJkPcHc',
      },
    ],
  },
  {
    id: 't2',
    title: '題組二',
    items: [
      { id: 't2-access-1', title: 'Access 建立資料庫', url: '' },
      { id: 't2-access-2', title: 'Access 資料整合', url: '' },
      { id: 't2-excel-0', title: 'Excel 資料整理', url: '' },
      { id: 't2-excel-1', title: 'Excel 附件一', url: '' },
      { id: 't2-excel-2', title: 'Excel 附件二', url: '' },
      { id: 't2-excel-3', title: 'Excel 附件三', url: '' },
      { id: 't2-excel-4', title: 'Excel 附件四', url: '' },
      { id: 't2-excel-5', title: 'Excel 附件五', url: '' },
      { id: 't2-word-1', title: 'Word 附件一', url: '' },
      { id: 't2-word-2', title: 'Word 附件二', url: '' },
      { id: 't2-word-3', title: 'Word 附件三', url: '' },
      { id: 't2-word-4', title: 'Word 附件四', url: '' },
      { id: 't2-word-5', title: 'Word 附件五', url: '' },
    ],
  },
  {
    id: 't1',
    title: '題組一',
    items: [
      { id: 't1-access-1', title: 'Access 建立資料庫', url: '' },
      { id: 't1-access-2', title: 'Access 資料整合', url: '' },
      { id: 't1-excel-0', title: 'Excel 資料整理', url: '' },
      { id: 't1-excel-1', title: 'Excel 附件一', url: '' },
      { id: 't1-excel-2', title: 'Excel 附件二', url: '' },
      { id: 't1-excel-3', title: 'Excel 附件三', url: '' },
      { id: 't1-excel-4', title: 'Excel 附件四', url: '' },
      { id: 't1-excel-5', title: 'Excel 附件五', url: '' },
      { id: 't1-word-1', title: 'Word 附件一', url: '' },
      { id: 't1-word-2', title: 'Word 附件二', url: '' },
      { id: 't1-word-3', title: 'Word 附件三', url: '' },
      { id: 't1-word-4', title: 'Word 附件四', url: '' },
      { id: 't1-word-5', title: 'Word 附件五', url: '' },
    ],
  },
];
