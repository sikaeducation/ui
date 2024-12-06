import Git from "./git.svg?react";
import GitHub from "./github.svg?react";
import TypeScript from "./typescript.svg?react";
import React from "./react.svg?react";
import JavaScript from "./javascript.svg?react";
import Java from "./java.svg?react";

export default {
  git: {
    name: "Git",
    Svg: Git,
  },
  github: {
    name: "GitHub",
    Svg: GitHub,
  },
  typescript: {
    name: "TypeScript",
    Svg: TypeScript,
  },
  react: {
    name: "React",
    Svg: React,
  },
  javascript: {
    name: "JavaScript",
    Svg: JavaScript,
  },
  java: {
    name: "java",
    Svg: Java,
  },
} as const;
