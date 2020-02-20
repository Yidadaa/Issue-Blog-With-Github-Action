---
layout: ResumeLayout

content:
  header:
    author: 'YiFei Zhang'
    contact:
      - 'Mail: flynn.zhang@foxmail.com'
      - 'Home Page: blog.simplenaive.cn'
      - 'Github: github.com/Yidadaa'
    interst: ''
    dob: '1997/01/20'
    city: 'Chengdu, China'
  education:
    name: 'Education'
    content:
      - degree: 'MSc.'
        school: 'UESTC'
        major: 'Computer Science, Dept. of Computer Science and Engineering'
        time: '2018.09 - 2021.06'
      - degree: 'B.Eng.'
        school: 'UESTC'
        major: 'Computer Science, Yincai Honors College of UESTC'
        time: '2014.09 - 2018.06'
  honor:
    name: 'Honor'
    content:
      - name: 'Second Prize for Postgraduate Scholarship'
        time: '2019.10'
      - name: 'OPPO AI Challenge Segmantation Track Excellence Prize'
        time: '2019.04'
      - name: 'First Prize for Postgraduate Scholarship'
        time: '2018.10'
      - name: 'MCM Honorable Mention'
        time: '2017.02'
  experience:
    name: 'Experience'
    content:
      - name: 'Real-Time 3D Reconstruction Intern @ Tencent Robotics X'
        time: 'from 2019.11'
        content:
          - In this project, there are a control client and a robot, human could control the robot remotely on the control client, the robot reconstructs the surrounding environment in real-time and sends the reconstructed data to the control client. Once the data is received, the control client will display the reconstructed environment in virtual reality as soon as possible, so the human can take further actions to interact with the environment, for example, to open a door.
          - My job is to ensure the network connection stability between the robot and the control client, I designed a robust data transmission algorithm for the project, it substantially reduced the transimission delay and packet loss rate. In addition, we adapts a 3D-reconstruction algorithm(KinectFusion) to make it work well in dynamic environments.
      - name: 'Accelerate reinforcement algorithm training in Unity @ Thesis'
        time: '2017.10 - 2018.06'
        content:
          - Reinforcement learning agent requires a large number of exploration data to optimize policy by interacting with the environment. It will take a high time and material cost in the real world. We propose a framework that allows existing  written-in-python algorithms to interact with Unity environment to collect data and optimize policy in real-time.
      - name: 'Front End Web Developer Intern @ Baidu'
        time: '2016.12 - 2017.05'
        content:
          - During this internship, I was responsible for implementing new features of Baidu advertisement system, I worked with UI/UC designer, PM, QA and backend developer and bridged the gap between graphical design and technical implementation, optimized application for maximum speed and scalability, and built reusable code for future use.
  coding:
    name: 'Projects & Skills'
    content:
      - name: 'github.com/Yidadaa/Issue-Blog-With-Github-Action'
        link: 'https://github.com/Yidadaa/Issue-Blog-With-Github-Action'
        info: '(JavaScript / Vue) ~ over 1000 lines'
        time: '2020.02'
        desc: 'A well-designed blog theme based on Vuepress and hosted on Github Actions.'
      - name: 'github.com/Yidadaa/Pytorch-Video-Classification'
        link: 'https://github.com/Yidadaa/Pytorch-Video-Classification'
        info: '(Python / Pytorch) ~ 500 lines'
        time: '2019.04'
        desc: 'Make Action Classification on Videos using CNN-RNN, achieves 80% accuracy on UCF101 Dataset.'
      - name: 'github.com/Yidadaa/Satellite-Imagery-Segmantation-Deeplab'
        link: 'https://github.com/Yidadaa/Satellite-Imagery-Segmantation-Deeplab'
        info: '(Python / Pytorch) ~ 1000 lines'
        time: '2019.05'
        desc: 'Satellite Imagery Segmantation using Deeplabv3.'
      - name: 'github.com/Yidadaa/Parallel-Programming-On-GPU'
        link: 'https://github.com/Yidadaa/Parallel-Programming-On-GPU'
        info: '(CUDA / C++) ~ 200 lines'
        desc: 'Accelerate simulation of n-body problem using CUDA, 3000x faster after accelerating.'
        time: '2018.11'
      - name: 'github.com/Yidadaa/Captcha-Deep-Learning'
        link: 'https://github.com/Yidadaa/Captcha-Deep-Learning'
        info: '(Python / Keras / Tensorflow) ~ 500 lines'
        desc: 'Recognize captcha using an End-to-End CNN pipeline, achieves 98% accuracy on custom Dataset.'
        time: '2018.01'
      - name: 'github.com/Yidadaa/OPPO-Human-Segmentation'
        link: 'https://github.com/Yidadaa/OPPO-Human-Segmentation'
        info: '(C++ / Dart) ~ 1000 lines'
        desc: 'Deploy deeplabv3 human segmantation model to mobile platform using Tencent NCNN framework.'
        time: '2019.03'
      - name: 'github.com/Yidadaa/HUAWEI-Codecraft-2019'
        link: 'https://github.com/Yidadaa/HUAWEI-Codecraft-2019'
        info: '(C++) ~ 1000 lines'
        desc: 'Code for HUAWEI Codecraft 2019, contains unit testing, following Google C++ Style Guide.'
        time: '2019.05'
---