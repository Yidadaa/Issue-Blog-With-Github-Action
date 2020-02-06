---
layout: ResumeLayout

content:
  header:
    author: '张义飞'
    contact:
      - 邮箱：flynn.zhang@foxmail.com
      - 主页：blog.simplenaive.cn
      - Github：github.com/Yidadaa
    interst: '三维视觉'
    dob: '1997/01/20'
    city: 'Chengdu, China'
  education:
    name: '教育背景'
    content:
      - degree: '硕士'
        school: '电子科技大学'
        major: '计算机科学与工程学院，计算机科学专业'
        time: '2018.09 - 2021.06'
      - degree: '学士'
        school: '电子科技大学'
        major: '英才实验学院，计算机科学专业'
        time: '2014.09 - 2018.06'
  honor:
    name: '荣誉奖项'
    content:
      - name: '研究生二等学业奖学金'
        time: '2019.10'
      - name: 'OPPO AI 挑战赛人像分割任务 决赛优秀奖'
        time: '2019.04'
      - name: '研究生一等学业奖学金'
        time: '2018.10'
  experience:
    name: '实习 & 研究经历'
    content:
      - name: '单目深度估计算法 @ 未来媒体研究中心'
        time: 'from 2019.04'
        content:
          - 研究⽅向是基于单目视频序列的无监督深度估计算法，基于深度神经⽹络的无监督训练流程可以很快地被迁移到全新环境中，并且训练时只需要单⽬摄像头视频数据，⾮常有应⽤前景。
          - 当前的想法：现有的无监督训练流程有着收敛过慢的缺点，尝试从以下⼏个⽅⾯改进：Co-attention 模块已被证明可以很好地挖掘相邻视频帧中具有较⾼相似度的特征区域，所以尝试在特征图层⾯对相邻帧的特征进⾏ attention，使得特征相似度较⾼的区域产⽣更相近的深度图；其次⽬前无监督流程中的 PoseNet 的⾃监督信号完全来⾃于与残差图估计⽹络联合建⽴的重建损失，所以提出尝试使⽤ SLAM 系统后端中的滤波⽅法对 PoseNet 的输出做约束，以期提升 PoseNet 的性能。
      - name: '基于 Unity 虚拟环境和强化学习的机械臂控制算法 @ 毕业设计'
        time: '2017.10 - 2018.06'
        content:
          - 强化学习算法在机械智能控制中愈发重要，然而强化学习算法往往需要在训练阶段通过大量地 exploration 与环境交互取得数据来优化策略，这种训练策略将会在真实世界带来极高的时间和物料成本，本文提出了一种架构，可以使得现有强化学习模型可以实时与 Unity 中的虚拟环境交互并获取训练数据，为迁移至真实环境提供预训练基础。
          - 本文主要工作如下：1) 构建了一个沟通 Unity 运行时和 Python 运行时的中间层，使得基于 Tensorflow 和 Pytorch 的构建的深度学习模型可以与 Unity 虚拟环境交互；2) 实现了强化学习中经典的 PPO 算法，并分别在二维和三维环境中设计对应的任务来验证算法和中间层的可用性；3) 基于本文提出的架构，探讨了多线程以及离屏或低分辨率渲染等手段对训练任务的加速能力。
      - name: '前端开发实习生 @ 百度'
        time: '2016.12 - 2017.05'
        content:
          - 在实习期间负责了广告智能推荐前端界面的开发，并参与了该需求的正式上线和后续维护工作，工作期间与其他部门紧密合作，对 Bug 响应迅速，产出的代码可维护性强且十分健壮，受到 mentor 的一致好评。
  coding:
    name: '开源项目 & 编程能力'
    content:
      - name: 'github.com/Yidadaa/Pytorch-Video-Classification'
        link: 'https://github.com/Yidadaa/Pytorch-Video-Classification'
        info: '(Python / Pytorch) ~ 500 lines'
        time: '2019.04'
        desc: '基于 CNN-RNN 架构的视频动作分类⽹络，在 UCF101 上达到 80% 的准确率。'
      - name: 'github.com/Yidadaa/Satellite-Imagery-Segmantation-Deeplab'
        link: 'https://github.com/Yidadaa/Satellite-Imagery-Segmantation-Deeplab'
        info: '(Python / Pytorch) ~ 1000 lines'
        time: '2019.05'
        desc: '阿里天池比赛代码，使用 Deeplabv3 对超大卫星图做分割。'
      - name: 'github.com/Yidadaa/Parallel-Programming-On-GPU'
        link: 'https://github.com/Yidadaa/Parallel-Programming-On-GPU'
        info: '(CUDA / C++) ~ 200 lines'
        desc: '使用 CUDA 加速 n-body 模拟程序，成功加速到原来的 3000 多倍。'
        time: '2018.11'
      - name: 'github.com/Yidadaa/Captcha-Deep-Learning'
        link: 'https://github.com/Yidadaa/Captcha-Deep-Learning'
        info: '(Python / Keras / Tensorflow) ~ 500 lines'
        desc: '搭建端到端的验证码识别网络，分别使用 Keras 和 Tensorflow 实现，在验证集上达到 98% 的准确率。'
        time: '2018.01'
      - name: 'github.com/Yidadaa/OPPO-Human-Segmentation'
        link: 'https://github.com/Yidadaa/OPPO-Human-Segmentation'
        info: '(C++ / Dart) ~ 1000 lines'
        desc: 'OPPO AI 挑战赛 Demo 源码，将人像语义分割网络经过腾讯开源的 ncnn 框架转换后部署到移动端。'
        time: '2019.03'
      - name: 'github.com/Yidadaa/HUAWEI-Codecraft-2019'
        link: 'https://github.com/Yidadaa/HUAWEI-Codecraft-2019'
        info: '(C++) ~ 1000 lines'
        desc: '华为软件精英挑战赛代码，车辆路径智能规划，包含完整的单元测试，严格遵循 Google C++ Style Guide 规范。'
        time: '2019.05'
---