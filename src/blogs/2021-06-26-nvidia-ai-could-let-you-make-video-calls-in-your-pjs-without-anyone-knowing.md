---
title: Nvidia AI could let you make video calls in your PJs without anyone knowing
date: 2021-06-26T17:55:37.832Z
thumbnail: ../images/blog4.jpg
readTime: 2
---
Nvidia has unveiled an AI model that converts a single 2D image of a person into a “talking head” video.

Known as Vid2Vid Cameo, the deep learning model is designed to improve the experience of videoconferencing.

If you’re running late for a call, you could roll out of bed in your pajamas and disheveled hair,  upload a photo of you dressed to impress, and the AI will map your facial movements to the reference image — leaving the other attendees unaware of the chaos behind the camera. That could be a boon for the chronically unkempt, but you should probably test the technique before you turn up in your birthday suit.

The system can also adjust your talking head’s viewpoint to show you looking straight at the screen, when secretly your eyes are fixed on a TV in the background.

They sound like nifty features for those of us who dread video calls, but the most useful aspect of the model may be bandwidth reduction. Nvidia says the technique can cut the bandwidth needed for video conferences by up to 10x.

## GANimated video

Vid2Vid Cameo is powered by generative adversarial networks (GANs), which produce the videos by pitting two neural networks against each other: a generator that tries to create realistic-looking samples, and a discriminator that attempts to work out whether they’re real or fake.

This enables the two networks to synthesize realistic videos from a single image of the user, which could be a real photo or a cartoon avatar. During the video call, the model will capture their real-time motion and apply it to the uploaded image.