const assignments = {
  '1afc4ee4-431c-43a8-a5f4-d8953e222dce': {
    name: 'Homework 6',
    classCode: 'cst334',
    dueDate: '2017-10-09',
    visible: true,
    partIds: [
      '1ba3487a-78ed-4962-bf6e-f49c686aead6',
      'a8191213-dd94-44b2-ba17-3b6f698d1263',
      'fe43dbbd-4621-433e-8447-43f97ed74a46',
      'ba7c4959-5df3-45a5-8807-29b041508a54',
      '44dc9665-7dd4-40b6-96eb-aaea098faaeb',
    ],
  },
  '42763461-7d62-4228-8f06-21d58e4296c8': {
    name: 'Homework 8',
    classCode: 'cst334',
    dueDate: '2017-10-16',
    visible: true,
    partIds: [
      '5170e444-7f63-467f-88cc-b859bd437591',
    ],
  },
};

const assignmentIds = [
  '1afc4ee4-431c-43a8-a5f4-d8953e222dce',
  '42763461-7d62-4228-8f06-21d58e4296c8',
];

const editors = {
  '4b9bddef-77f9-47d5-a88f-87e30764fc86': {
    title: false,
    filename: 'freesize.awk',
    code: 'freesize.awk',
    type: 'sh',
  },
  '26a95a09-484b-4240-b7c6-f8d99ff2e3fb': {
    title: false,
    filename: 'count_allocs.awk',
    code: 'count_allocs.awk',
    type: 'sh',
  },
  '677c6bc7-8e9f-40c2-869d-360472475224': {
    title: false,
    filename: 'num_bytes.awk',
    code: 'num_bytes.awk',
    type: 'sh',
  },
  '1ed19707-b057-42f8-a080-4ead9d5fa6ba': {
    title: false,
    filename: 'succ_reqs.awk',
    code: 'succ_reqs.awk',
    type: 'sh',
  },
  'c5f50d2b-14e9-483b-8a48-278692881b7e': {
    title: false,
    filename: 'list_sizes.awk',
    code: 'list_sizes.awk',
    type: 'sh',
  },
  '27a62a64-e9d9-41f0-885c-ee621ca46247': {
    title: true,
    filename: 'lru_cache.h',
    code: 'lru_cache.h',
    type: 'c/c++',
  },
  'f474a2fe-b253-4e37-8413-2c2c18910001': {
    title: true,
    filename: 'lru_cache.c',
    code: 'lru_cache.c',
    type: 'c/c++',
  },
};

const parts = {
  '1ba3487a-78ed-4962-bf6e-f49c686aead6': {
    name: 'freesize',
    attempts: 5,
    editorIds: ['4b9bddef-77f9-47d5-a88f-87e30764fc86'],
  },
  'a8191213-dd94-44b2-ba17-3b6f698d1263': {
    name: 'count_allocs',
    attempts: 5,
    editorIds: ['26a95a09-484b-4240-b7c6-f8d99ff2e3fb'],
  },
  'fe43dbbd-4621-433e-8447-43f97ed74a46': {
    name: 'num_bytes',
    attempts: 5,
    editorIds: ['677c6bc7-8e9f-40c2-869d-360472475224'],
  },
  'ba7c4959-5df3-45a5-8807-29b041508a54': {
    name: 'succ_reqs',
    attempts: 5,
    editorIds: ['1ed19707-b057-42f8-a080-4ead9d5fa6ba'],
  },
  '44dc9665-7dd4-40b6-96eb-aaea098faaeb': {
    name: 'list_sizes',
    attempts: 5,
    editorIds: ['c5f50d2b-14e9-483b-8a48-278692881b7e'],
  },
  '5170e444-7f63-467f-88cc-b859bd437591': {
    name: 'caching',
    attempts: 4,
    editorIds: [
      'f474a2fe-b253-4e37-8413-2c2c18910001',
      '27a62a64-e9d9-41f0-885c-ee621ca46247',
    ],
  },
};

module.exports = {
  assignments,
  assignmentIds,
  editors,
  parts,
};
