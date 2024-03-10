/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-06 15:14:17
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-20 12:59:57
 */
module.exports = [
  {
    title: "javascript",
    collapsable: true,
    children: [
      "./javascript",
      {
        title: "ECMAScript 6 入门",
        collapsable: true,
        children: [
          "./javascript/es6/1",
          "./javascript/es6/array",
          "./javascript/es6/class",
        ],
      },
      "./javascript/context",
      "./javascript/closure",
      "./javascript/this",
      "./javascript/event_loop",
      "./javascript/ajax",
      "./javascript/constructor",
    ],
  },
  {
    title: "javascript输出题，场景题",
    collapsable: true,
    children: ["./js_question/question", "./js_question/file_upload"],
  },
  {
    title: "leetcode",
    collapsable: true,
    children: [
      "./leetcode/quick_sort",
      "./leetcode/151",
      "./leetcode/445",
      "./leetcode/flatten-a-multilevel-doubly-linked-list",
      "./leetcode/1282",
      "./leetcode/560",
      "./leetcode/974",
      "./leetcode/long_array",
      "./leetcode/array_design",
      "./leetcode/temperature",
      "./leetcode/recover_ip",
    ],
  },
  {
    title: "HTML",
    collapsable: true,
    children: ["./html/doctype", "./html/seo"],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      "./css/flex",
      "./css/position",
      "./css/center",
      "./css/Semantization",
      "./css/selector",
      "./css/float",
      "./css/triangle",
      "./css/drag",
    ],
  },
  {
    title: "手写",
    collapsable: true,
    children: ["./handwriting/new", "./handwriting/bind"],
  },
  {
    title: "network",
    collapsable: true,
    children: ["./network/Cross_Domain"],
  },
  {
    title: "browser",
    collapsable: true,
    children: ["./browser/1", "./browser/2", "./browser/cache"],
  },
  {
    title: "React",
    collapsable: true,
    children: ["./React/life", "./React/summary"],
  },
  {
    title: "VUE",
    collapsable: true,
    children: ["./vue/life", "./vue/state_ban"],
  },
];
