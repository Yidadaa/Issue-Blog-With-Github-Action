<template>
  <div class="cv">
    <Header />
    <div class="page cv-content">
      <div class="cv-header cv-two-column cv-section">
        <div class="cv-info">
          <div class="cv-author">张义飞</div>
          <div class="cv-contact">电话：+86 13032883129</div>
          <div class="cv-contact">邮箱：flynn.zhang@foxmail.com</div>
          <div class="cv-contact">主页：blog.simplenaive.cn</div>
          <div class="cv-contact">Github：github.com/Yidadaa</div>
        </div>
        <div class="cv-sub-info cv-right-column">
          <div class="cv-research-interest">三维视觉</div>
          <div class="cv-dob">DOB: 1997/01/20</div>
          <div class="cv-city">Chengdu, China</div>
        </div>
      </div>

      <div class="cv-two-column">
        <div class="cv-section education cv-left-column">
          <div class="cv-section-title">教育背景</div>
          <div class="cv-two-column">
            <div class="cv-left-column cv-school">硕士，电子科技大学</div>
            <div class="cv-right-column cv-time-range">2018.09 - 2021.06</div>
          </div>
          <div class="cv-major">计算机科学与工程学院，计算机科学专业</div>

          <div class="cv-two-column">
            <div class="cv-left-column cv-school">硕士，电子科技大学</div>
            <div class="cv-right-column cv-time-range">2018.09 - 2021.06</div>
          </div>
          <div class="cv-major">计算机科学与工程学院，计算机科学专业</div>
        </div>

        <div class="cv-section honor cv-right-column">
          <div class="cv-section-title">荣誉 & 奖项</div>
          <div class="cv-two-column">
            <div class="cv-left-column cv-honor">研究生二等学业奖学金</div>
            <div class="cv-right-column cv-time-range">2019.10</div>
          </div>
          <div class="cv-two-column">
            <div class="cv-left-column cv-honor">OPPO AI 挑战赛人像分割任务 决赛优秀奖</div>
            <div class="cv-right-column cv-time-range">2019.04</div>
          </div>
          <div class="cv-two-column">
            <div class="cv-left-column cv-honor">研究生一等学业奖学金</div>
            <div class="cv-right-column cv-time-range">2018.10</div>
          </div>
        </div>
      </div>

      <div class="cv-section experience">
        <div class="cv-section-title">实习 & 研究经历</div>
        <ul class="cv-experience-list">
          <li class="cv-experience-item">
            <div class="cv-two-column cv-experience-header">
              <div class="cv-left-column cv-experience-title">三维视觉中的深度估计算法</div>
              <div class="cv-right-column cv-time-range">from 2019.04</div>
            </div>
            <ul class="cv-experience-sub-item">
              <li class="cv-li">研究⽅向是基于单目视频序列的无监督深度估计算法，基于深度神经⽹络的无监督训练流程可以很快地被迁移到全新环境中，并且训练时只需要单⽬摄像头视频数据，⾮常有应⽤前景。</li>
              <li class="cv-li">当前的想法：现有的无监督训练流程有着收敛过慢的缺点，尝试从以下⼏个⽅⾯改进：Co-attention 模块已被证明可以很好地挖掘相邻视频帧中具有较⾼相似度的特征区域，所以尝试在特征图层⾯对相邻帧的特征进⾏ attention，使得特征相似度较⾼的区域产⽣更相近的深度图；其次⽬前无监督流程中的 PoseNet 的⾃监督信号完全来⾃于与残差图估计⽹络联合建⽴的重建损失，所以提出尝试使⽤ SLAM 系统后端中的滤波⽅法对 PoseNet 的输出做约束，以期提升 PoseNet 的性能。</li>
            </ul>
          </li>

          <li class="cv-experience-item">
            <div class="cv-two-column cv-experience-header">
              <div class="cv-left-column cv-experience-title">基于 Unity 虚拟环境和强化学习的机械臂控制算法 @ 毕业设计</div>
              <div class="cv-right-column cv-time-range">2017.10 - 2018.06</div>
            </div>
            <ul class="cv-experience-sub-item">
              <li class="cv-li">强化学习算法在机械智能控制中愈发重要，然而强化学习算法往往需要在训练阶段通过大量地 exploration 与环境交互取得数据来优化策略，这种训练策略将会在真实世界带来极高的时间和物料成本，本文提出了一种架构，可以使得现有强化学习模型可以实时与 Unity 中的虚拟环境交互并获取训练数据，为迁移至真实环境提供预训练基础。</li>
              <li class="cv-li">本文主要工作如下：1) 构建了一个沟通 Unity 运行时和 Python 运行时的中间层，使得基于 Tensorflow 和 Pytorch 的构建的
				深度学习模型可以与 Unity 虚拟环境交互；2) 实现了强化学习中经典的 PPO 算法，并分别在二维和三维环境中设计对应的任务来验证算法和中间层的可用性；
				3) 基于本文提出的架构，探讨了多线程以及离屏或低分辨率渲染等手段对训练任务的加速能力。</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="cv-section coding">
        <div class="cv-section-title">开源项目 & 编程能力</div>
        <div class="cv-coding-item">
          <div class="cv-two-column">
            <div class="cv-left-column cv-coding-title">
              <a class="cv-coding-link" href="https://github.com/Yidadaa/Pytorch-Video-Classification">github.com/Yidadaa/Pytorch-Video-Classification</a>
              <span class="cv-coding-language">(Python / Pytorch) ~ 500 lines</span>
            </div>
            <div class="cv-right-column cv-time-range">2019.04</div>
          </div>
          <div class="cv-coding-desc">基于 CNN-RNN 架构的视频动作分类⽹络，在 UCF101 上达到 80% 的准确率。</div>
        </div>

        <div class="cv-coding-item">
          <div class="cv-two-column">
            <div class="cv-left-column cv-coding-title">
              <a class="cv-coding-link" href="https://github.com/Yidadaa/Pytorch-Video-Classification">github.com/Yidadaa/Pytorch-Video-Classification</a>
              <span class="cv-coding-language">(Python / Pytorch) ~ 500 lines</span>
            </div>
            <div class="cv-right-column cv-time-range">2019.04</div>
          </div>
          <div class="cv-coding-desc">基于 CNN-RNN 架构的视频动作分类⽹络，在 UCF101 上达到 80% 的准确率。</div>
        </div>

        <div class="cv-coding-item">
          <div class="cv-two-column">
            <div class="cv-left-column cv-coding-title">
              <a class="cv-coding-link" href="https://github.com/Yidadaa/Pytorch-Video-Classification">github.com/Yidadaa/Pytorch-Video-Classification</a>
              <span class="cv-coding-language">(Python / Pytorch) ~ 500 lines</span>
            </div>
            <div class="cv-right-column cv-time-range">2019.04</div>
          </div>
          <div class="cv-coding-desc">基于 CNN-RNN 架构的视频动作分类⽹络，在 UCF101 上达到 80% 的准确率。</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

.cv-content
  border 1px solid $borderColor
  padding 50px
  min-height 200px
  margin-top 5vh
  margin-bottom 5vh
  font-size 15px
  font-song()

  .cv-two-column
    display flex
    justify-content space-between
    .cv-right-column
      margin-left 20px

  .cv-section
    width 100%
    margin-bottom 3em
    .cv-section-title
      font-size 1.4em
      margin-bottom 1em
      font-weight bolder
      margin-left -1px

  .cv-info
    .cv-author
      font-hei()
      color $accentColor
      font-size 2em
      font-weight bold
      margin-bottom 1.2em

  .cv-sub-info
    text-align right
    .cv-research-interest
      font-size 1.6em
      margin-top .4em
      margin-bottom 2.4em
      font-weight bolder
    .cv-dob
      margin-bottom 5px

  .education
    .cv-school
      font-weight bold
    .cv-major
      margin-bottom 10px

  .experience
    .cv-experience-item:not(:last-child)
      margin-bottom 15px
    .cv-experience-header
      margin-bottom 10px
      .cv-experience-title
        font-weight bolder
    ul
      padding-left 20px

  .coding
    .cv-coding-item
      margin-bottom 5px
      .cv-coding-title
        font-weight bold
      .cv-coding-link
        color #000
        text-decoration underline
        margin-right 5px

@media screen and (max-width $MQMobileNarrow)
  .cv-content
    padding 0
    border 0
    font-hei()

    .cv-two-column
      flex-wrap wrap
      align-items flex-end
      .cv-right-column
        margin-left 0

    .cv-section
      margin-bottom 20px
      .cv-section-title
        margin-bottom 5px

    .cv-sub-info
      text-align left
      .cv-research-interest
        margin-top 20px
        margin-bottom 20px

    .coding
      .cv-coding-item
        margin-bottom 20px
        .cv-coding-title
          margin-bottom 5px

@media print
  .header-wrap, .footer
    display none

  .cv-content
    border 0
    padding 0
    font-size 16px
</style>