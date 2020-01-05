---
layout: PostLayout
---

# Xavier 配置记录
> `@author: folezhang`

## 构建工具及依赖项
``` bash
# catkin
sudo apt-get install -y python-catkin-tools

# glog
sudo apt install -y libgoogle-glog-dev

# gflags
sudo apt-get install -y libgflags-dev

# zlib
sudo apt install -y zlib1g

# qt5.0+
sudo apt install -y qtcreator qt5-default

# ffmpeg
sudo apt install -y ffmpeg

# Pangolin
sudo apt install -y libgl1-mesa-dev
sudo apt install -y libglew-dev
sudo apt install -y cmake
git clone https://github.com/stevenlovegrove/Pangolin.git
cd Pangolin
mkdir build
cd build
cmake ..
cmake --build .

# ceres
sudo apt-get install -y cmake
sudo apt-get install -y libgoogle-glog-dev
sudo apt-get install -y libatlas-base-dev
sudo apt-get install -y libeigen3-dev
sudo apt-get install -y libsuitesparse-dev
git clone https://ceres-solver.googlesource.com/ceres-solver
cd ceres-solver && mkdir build
cd build && camke ..
make -j4 && sudo make install
```

## 硬件驱动
### RealSense
驱动安装参考链接：[librealsense installation jetson](https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_jetson.md)
```bash
# 安装命令
sudo apt-key adv --keyserver keys.gnupg.net --recv-key F6E65AC044F831AC80A06380C8B3A55A6F3EFCDE || sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-key F6E65AC044F831AC80A06380C8B3A55A6F3EFCDE
sudo add-apt-repository "deb http://realsense-hw-public.s3.amazonaws.com/Debian/apt-repo bionic main" -u
sudo apt-get install -y librealsense2-utils
sudo apt-get install -y librealsense2-dev
```

验证状态：成功。
```bash
# 验证指令
realsense-viewer
```

### RealSense ros
``` bash
# 1. 依赖项
sudo apt-get install ros-melodic-ddynamic-reconfigure

# 2. 下载源码并使用 catkin 编译
git clone https://github.com/IntelRealSense/realsense-ros.git
```

验证状态：成功。
```bash
# 验证指令
roslaunch realsense2_camera rs_camera.launch
```

### Kinect [仅支持一代和二代]
```bash
# 参考链接：https://www.ncnynl.com/archives/201912/3484.html
# libfreenect2 安装：https://github.com/OpenKinect/libfreenect2/blob/master/README.md#linux
git clone https://github.com/OpenKinect/libfreenect2
cd libfreenect2

# 下载并安装依赖
cd depends
./download_debs_trusty.sh
sudo apt-get install build-essential cmake pkg-config
sudo dpkg -i debs/libusb*deb
sudo apt-get install libturbojpeg libjpeg-turbo8-dev
sudo dpkg -i debs/libglfw3*deb

# 编译
cd ..
mkdir build && cd build
cmake .. -DCMAKE_INSTALL_PREFIX=$HOME/freenect2  -DENABLE_CXX11=ON
make -j4
sudo make install

# 配置 usb 权限
cd ..
sudo cp platform/linux/udev/90-kinect2.rules /etc/udev/rules.d/
echo "安装完成，请重启 xavier 后验证"
```

1. 如果出现 `libGL.so` 错误，请按以下步骤安装 `libglvnd` 并修复链接:
```bash
# 参考链接：https://devtalk.nvidia.com/default/topic/1044109/jetson-agx-xavier/no-usr-lib-aarch64-linux-gnu-tegra-libgl-so-0-with-jetpack-4-4-1/
# 依赖
sudo apt-get install libxext-dev libx11-dev x11proto-gl-dev
git clone https://github.com/NVIDIA/libglvnd.git
cd libglvnd
sh ./autogen.sh
./configure
make -j4
sudo make install
# 默认安装路径为 /usr/local/lib/aarch64-linux-gnu/libGL.so
# 然后删除掉原来的 libGL.so，重新建立链接
# rm /usr/lib/aarch64-linux-gnu/libGL.so
# ln -s /usr/local/lib/aarch64-linux-gnu/libGL.so /usr/lib/aarch64-linux-gnu/libGL.so
```

验证状态：该驱动仅适用于 kinect 一代和二代，不支持 kinect for azure 。

说明：kinect for xavier 目前不支持 arm 平台，官方计划在近期加入，进度见：`https://github.com/microsoft/Azure-Kinect-Sensor-SDK/issues/871`

### Velodyne
```bash
# 下载源码并用 catkin build 编译即可
git clone https://github.com/ros-drivers/velodyne.git
```

1. 报错 `fatal error: pcap.h: No such file or directory`，需要安装 `pcap` 依赖库：`sudo apt install libpcap-dev`

验证状态：成功。

```bash
# 验证指令
roslaunch velodyne_pointcloud laserscan_nodelet.launch
```

## 系统
### ORB SLAM 2

```bash
# 1. 依赖库
sudo apt-get install -y libeigen3-dev

# 2. 下载源码
git clone https://github.com/raulmur/ORB_SLAM2.git

# 3. 编译
cd ORB_SLAM2
chmod +x build.sh
./build.sh
```

1. 编译时缺少 `Pangolin`，从[源码](https://github.com/stevenlovegrove/Pangolin)编译安装 `Pangolin` 即可，安装脚本见前文。

2. `usleep` 语句报错，参考这条 [issue](https://github.com/raulmur/ORB_SLAM2/issues/337) 解决，为 `include/System.h` 添加 `include
<unistd.h>` 头文件即可。

### VINS Fusion
``` bash
# 1. 下载源码
git clone https://github.com/HKUST-Aerial-Robotics/VINS-Fusion

# 2. 编译安装
mkdir -p ~/vins-workspace/src
mv VINS-Fusion ~/vins-workspace/src
cd ~/vins-workspace
catkin build
echo 'source ~/vins-workspace/devel/setup.bash' >> ~/.bashrc
source ~/.bashrc
```

1. 提示缺少 `ceres`，从源码编译安装即可，安装脚本见前文。

验证状态：成功。

```bash
# 验证指令
roslaunch vins vins_rviz.launch
```

### Elastic Fusion
``` bash
# 安装依赖
sudo apt-get install -y cmake-qt-gui git build-essential libusb-1.0-0-dev libudev-dev freeglut3-dev libglew-dev libsuitesparse-dev libeigen3-dev zlib1g-dev libjpeg-dev openjdk-8-jdk

# 安装 OpenNI2: https://github.com/occipital/OpenNI2
sudo apt-get install g++ libusb-1.0-0-dev libudev-dev freeglut3-dev doxygen graphviz
cd ~
git clone https://github.com/mikeh9/OpenNI2-TX1.git
cd OpenNI2-TX1/OpenNI2
make -j4

# 安装 Elastic Fusion
git clone https://github.com/mp3guy/ElasticFusion.git

cd ElasticFusion
# 修复 cmake 文件，自带的 cmake 无法正确找到 suite sparse 库
curl https://raw.githubusercontent.com/ceres-solver/ceres-solver/master/cmake/FindSuiteSparse.cmake > ./Core/src/FindSuiteSparse.cmake
cp ./Core/src/FindSuiteSparse.cmake ./GPUTest/src
cp ./Core/src/FindSuiteSparse.cmake ./GUI/src

# 删除 msse 指令优化，arm 平台无法应用此优化
sed -i -e 's/\-msse2\ \-msse3\ //g' ./Core/src/CMakeLists.txt
sed -i -e 's/\-msse2\ \-msse3\ //g' ./GPUTest/src/CMakeLists.txt
sed -i -e 's/\-msse2\ \-msse3\ //g' ./GUI/src/CMakeLists.txt

# 修复 CMakeList.txt 错误
sed -i '4 a set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_CURRENT_SOURCE_DIR}")' ./GPUTest/src/CMakeLists.txt
sed -i '8 a find_package(SuiteSparse REQUIRED)' ./GPUTest/src/CMakeLists.txt
sed -i -e 's/\/usr\/include\/suitesparse\//${SUITESPARSE_INCLUDE_DIRS})/g' ./GPUTest/src/CMakeLists.txt

cd ./Core
mkdir build
cd build
cmake ../src
make -j8
cd ../../GPUTest
mkdir build
cd build
cmake ../src
make -j8
cd ../../GUI
mkdir build
cd build
cmake ../src
make -j8
```
1. 如果运行时报错：`0:19(10): error: GLSL 3.30 is not supported. Supported versions are: 1.10, 1.20, 1.30, 1.40, 1.00 ES, and 3.00 ES`，在命令行中加入 `export MESA_GL_VERSION_OVERRIDE=3.3`。
2. 如果运行时报错：`Error: invalid texture reference:`，参考这条 [issue](https://github.com/mp3guy/ElasticFusion/issues/193) 解决。

验证状态：成功。

### surfelmeshing
```bash
git clone https://github.com/puzzlepaint/surfelmeshing.git
# 删除 msse 优化
cd surfelmeshing
sed -i '/msse/d' CMakeLists.txt
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_CUDA_FLAGS="-arch=sm_61" ..
make -j4
```
验证状态：存在兼容性问题，GLEW 引用出错。

### libvisensor
``` bash
# 依赖项
sudo apt-get install libeigen3-dev libboost-dev

# 源码安装
mkdir -p ~/visensor-workspace/src
cd ~/visensor-workspace/src
git clone https://github.com/ethz-asl/libvisensor.git
cd ~/visensor-workspace
catkin build

# 安装为全局依赖，方便 ok_vis 使用
cd ~/visensor-workspace/src/libvisensor
sh ./install_libvisensor.sh
```
验证状态：编译成功。

### ok_vis ros
``` bash
# 依赖项
sudo apt-get install ros-melodic-pcl-ros libgoogle-glog-dev
sudo apt-get install libatlas-base-dev libeigen3-dev libsuitesparse-dev
sudo apt-get install libopencv-dev libboost-dev libboost-filesystem-dev

# 源码安装
mkdir -p ~/okvis-workspace/src
cd ~/okvis-workspace/src
git clone https://github.com/ethz-asl/okvis_ros.git
cd okvis_ros
git clone https://github.com/gwli/okvis.git # 官方版本不支持 arm64 架构，使用别人修改的版本
cd ~/okvis-workspace
catkin build
```
验证状态：代码无法编译通过，存在语法问题。

1. 如果报错 `libvisensor not found`，请先按照前文脚本安装 `libvisensor`。