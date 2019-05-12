# wemic
Junction X Seoul 2019
MEMIC, ZEPETO In-app mini game to earn coins

## Inspiration
### Strong needs from teenagers
     1. Mobile trendsetter: Teenagers, Catch what they want
     2. Social media has changed to Contents based media, so Play the Concept
We made Game contents which is fun(FUNCEPT), enable to take selfie with various concepts(SHOWCEPT) and satisfy challenging teens.

## What it does
**MEMIC** is mimicry motion ranking game with 2 play mode.

```
      1. Battle Mode
	- Purpose : To meet the need of teens who want to play challenging game
	- How to Play
	   1) Pick your favorite and fancy posture
	   2) Memorize your ZEPETO's posture within count 5 
	   3) Set your camera and Get ready to mimic ZEPETO within count 10
           4) MEMIC will calculate the similarity between you and your ZEPETO and Rank your score
       2. Selfie Mode
	- Purpose : To meet the need of teens who want to take cool selfie with ZEPETO
	- How to Play
	   1) Pick your favorite and fancy posture
           2) Take a Cute Selfie with your ZEPETO
```	   


## How we built it
       1. ZEPETO Render API - PhotoBoothID
	: produce our own ZEPETO images and also list various ZEPETO postures
       2. NAVER Cloud AI Service - Position Estimation
	: compare real-state posture via camera with selected ZEPETO's posture by applying NAVER Cloud's Position Estimation API

## Challenges we ran into
We had a hard time to raise the accuracy of detecting the exact coordinate value with Position Estimation API.  

## Accomplishments that we're proud of
Our idea is not customized Avatar to sink with users, it is the conversion of thoughts that users are mimicking avatar. ZEPETO as a 3D contents creator suggest various types of posture and allow users to mimic ZEPETO. Teens that receptive to new trends easily enjoy this contents. 
According to the number of postings in SNS channels, Teens had high demand on editing ZEPETO photos with SNOW. MEMIC's Selfie mode enable teens to edit ZEPETO photos in-app.

## What we learned
- Pose estimation, HTML Game Programming 
- API usage

## What's next for MEMIC ?
- Not only be myself, what if be a famous K-pop star or celebrity and mimic them ? 
- What if we play Battle Mode in groups. And battle with other users at the same time.
- Users used to share the ranking via SNS channels, it could lead to bring a new ZEPETO selfie trend

## Ref
https://github.com/rwightman/posenet-pytorch

