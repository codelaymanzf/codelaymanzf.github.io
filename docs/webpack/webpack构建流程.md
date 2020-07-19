## webpack 构建流程

## `entry-option`

初始化 option

## run

开始编译

## make

从`entry`开始递归地分析依赖，对每个依赖模块进行 build

## before-resolve

对模块位置进行解析

## build-module

开始构建某个模块

## normal-module-loader

将`loader`加载完成的`module`进行编译，生成`AST`树

## program

遍历`AST`,当遇到`require`等一些调用表达式时，收集依赖

## seal

所有依赖`build`完成，开始优化

## emit

输出到`dist`目录
