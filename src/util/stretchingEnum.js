const mainBodyEnum = {
  1: '전신',
  2: '상체',
  3: '하체',
  4: '코어',
};

const mainBodyArr = ['전신', '상체', '하체', '코어'];

const subBodyEnum = {
  1: '얼굴 / 머리',
  2: '목 / 어깨',
  3: '팔 / 손목 / 손',
  4: '등 / 허리',
  5: '골반 / 엉덩이',
  6: '무릎 / 다리',
  7: '발목 / 발',
};

const subBodyArr = [
  [],
  [
    ['얼굴 / 머리', 1],
    ['목 / 어깨', 2],
    ['팔 / 손목 / 손', 3],
    ['등 / 허리', 4],
  ],
  [
    ['무릎 / 다리', 6],
    ['발목 / 발', 7],
  ],
  [
    ['골반 / 엉덩이', 5],
  ],
];

const postureEnum = {
  1: '앉아서',
  2: '의자에 앉아서',
  3: '일어서서',
  4: '누워서',
  5: '엎드려서',
};

const postureArr = ['앉아서', '의자에 앉아서', '일어서서', '누워서', '엎드려서'];

const effectEnum = {
  1: '근이완',
  2: '근강화',
  3: '바른 자세',
  4: '통증 완화',
  5: '혈액 순환 촉진',
  6: '거북목 개선',
  7: '라운드숄더 개선',
};

const effectArr = ['근이완', '근강화', '바른 자세', '통증 완화', '혈액 순환 촉진', '거북목 개선', '라운드숄더 개선'];

const toolEnum = {
  1: '폼롤러',
  2: '마사지볼',
  3: '라텍스 밴드',
  4: '요가링',
  5: '짐볼',
};

const tagArr = [
  ['전신'],
  ['상체', '얼굴 / 머리', '목 / 어깨', '팔 / 손목 / 손'],
  ['코어', '등 / 허리', '골반 / 엉덩이'],
  ['하체', '무릎 / 다리', '발목 / 발'],
  ['앉아서', '의자에 앉아서', '일어서서', '누워서', '엎드려서'],
  ['근이완', '근강화', '바른 자세', '통증 완화', '혈액 순환 촉진', '거북목 개선', '라운드숄더 개선'],
  ['폼롤러', '마사지볼', '라텍스 밴드', '요가링', '짐볼'],
];

const tagSet = {
  전신: {
    type: 'mainBody',
    value: 1,
  },
  상체: {
    type: 'mainBody',
    value: 2,
  },
  하체: {
    type: 'mainBody',
    value: 3,
  },
  코어: {
    type: 'mainBody',
    value: 4,
  },
  '얼굴 / 머리': {
    type: 'subBody',
    value: 1,
  },
  '목 / 어깨': {
    type: 'subBody',
    value: 2,
  },
  '팔 / 손목 / 손': {
    type: 'subBody',
    value: 3,
  },
  '등 / 허리': {
    type: 'subBody',
    value: 4,
  },
  '골반 / 엉덩이': {
    type: 'subBody',
    value: 5,
  },
  '무릎 / 다리': {
    type: 'subBody',
    value: 6,
  },
  '발목 / 발': {
    type: 'subBody',
    value: 7,
  },
  앉아서: {
    type: 'posture',
    value: 1,
  },
  '의자에 앉아서': {
    type: 'posture',
    value: 2,
  },
  일어서서: {
    type: 'posture',
    value: 3,
  },
  누워서: {
    type: 'posture',
    value: 4,
  },
  엎드려서: {
    type: 'posture',
    value: 5,
  },
  근이완: {
    type: 'effect',
    value: 1,
  },
  근강화: {
    type: 'effect',
    value: 2,
  },
  '바른 자세': {
    type: 'effect',
    value: 3,
  },
  '통증 완화': {
    type: 'effect',
    value: 4,
  },
  '혈액 순환 촉진': {
    type: 'effect',
    value: 5,
  },
  '거북목 개선': {
    type: 'effect',
    value: 6,
  },
  '라운드숄더 개선': {
    type: 'effect',
    value: 7,
  },
  폼롤러: {
    type: 'tool',
    value: 1,
  },
  마사지볼: {
    type: 'tool',
    value: 2,
  },
  '라텍스 밴드': {
    type: 'tool',
    value: 3,
  },
  요가링: {
    type: 'tool',
    value: 4,
  },
  짐볼: {
    type: 'tool',
    value: 5,
  },
};
export {
  mainBodyEnum,
  mainBodyArr,
  subBodyEnum,
  subBodyArr,
  postureEnum,
  postureArr,
  effectEnum,
  effectArr,
  toolEnum,
  tagArr,
  tagSet,
};
