#!/bin/bash

# Parameter 1: Input video format
# Parameter 2: Relative input folder.
# Parameter 3: Relative output folder.
# Example use: "./video4web.sh mov src/".

for i in $2*.$1
do
  of=${i#$2}
  of=$3${of%$1}
  of=${of%"."}
  # webm 720
  ffmpeg -i $i -y -c:v libvpx-vp9 -pass 1 -b:v 0 -crf 43 -threads 8 -speed 4 -vf scale=1280:-2 -tile-columns 6 -frame-parallel 1 -an -f webm /dev/null && \
  ffmpeg -i $i -y -c:v libvpx-vp9 -pass 2 -b:v 0 -crf 43 -threads 8 -speed 2 -vf scale=1280:-2 -tile-columns 6 -frame-parallel 1 -auto-alt-ref 1 -lag-in-frames 25 -an -f webm $of.webm

  # mp4 720
  ffmpeg -i $i -y -c:v libx264 -vf scale=1280:-2 -preset veryslow -pix_fmt yuv420p -profile:v baseline -level 3.0 -movflags +faststart -crf 28 -threads 8 -speed 0 -an $of.mp4

  # poster 720
  ffmpeg -i $i -y -vframes 1 -vf scale=1280:-2 -q:v 1 $of.jpg

  # poster 36
  ffmpeg -i $i -y -vframes 1 -vf scale=64:-2 -q:v 1 $of-36.jpg
done
rm ffmpeg2pass-*.log