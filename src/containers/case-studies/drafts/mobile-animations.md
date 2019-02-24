# Mobile Animations
This is the landing spot for writing up the Mobile Animations case study.

------

Simply put we started using a new animation library within our app, but nothing is ever that easy. 

This was a self directed, self intiated goal to improve our app. My role within our product (one that has 2million daily active users) was that of a junior user expirence designer. At the start of this project I had no visiability to our stack, (I knew we rolled native) motion was not apart of my job title, and well frankly I had 10 or so senior designers above me. 

On my first day I was given a project to maintain and implament slight tweaks. It was a part of the application that handled device pairing and setup. Device setup was crucial to our experience and before I had arrived at Garmin they had just done a complete overhaul of this part of the application. Global changes were not in the picture this soon. 

Maintaining the project meant simply put creating custom views that were specific to each device (we have a lot of devices :-D). I would document the various new device features that required setup and create the various gesture tutorials that accompained each device. The process for documenting the gesture tutorials was very tedious and would change in some cases daily, depending on the device UX. 

So here is the old workflow.
1. Digest the Device UX and map out the frame-by-frame animations needed for each highlighted Tutorial (Usually around 4-5)
2. Create a frame-by-frame rough documentation of each step for the visual designers. (1 day)
3. Brief the needs with the visual designers and give them direction on needs and wants. 
4. Wait patiently for the Visual Designers to work :-D (3-5 days)
5. Update the documentation (frame-by-frame) with graphics from the VD's and brief the Developers of the changes.(few hours)
6. Wait for the Dev's to work...patiently :-D (5-7 days)
7. Demo


Demo is were the product owner team would see the final animations within code and for review. This demo was usually a blood bath. Given the fast pace of changes to device UX, developer assumptions (with the animations), ability to see inprogress work. The blood bath is invedtiable. And usually we would have a fire drill for updates that would impact myself, the visual designer, device UX designer, development, product owners, and stake holders. **This is the issue**. The issue of review would come very late in the product cycle, when changes we most critical and expensive. When changes did come they were always rushed, chaotic and stress full.

So how to solve this problem?

What to solve:
- Late changes require massive lift from multiple teams
- Process was not flexable to changes
- Animation style was lo-fedality and required lots of fragile and delicate coding.
- Source of truth between platforms
- Higher fedality needed for the very complex aniamtions

I come from a pretty strong dev background before Garmin and had a solution in mind. Something as simple as saying use this library. But of course nothing is ever just that easy and within a corporate setting that has multiple layers and stakeholders it is never that easy.

To put simply I wanted to use an animation library developed by airB&B to take the burden and delicate motion assumptions off the shoulders of our engineers. I wanted to have a single source of truth that could stay well within the designers wheel house. The answer was Lottie.

Lottie is an animation library for both iOS and Andorid that could keep up with the most ambitious motion designer. I had used Lottie for a few instances in my previous job with a react-native app and I was blown away with just how awesome and powerful it was.  Again...just walking into a developers office and saying "Hey use this library" was not what shook out. My course of action involved multiple teams lots of cordoniation.


Skunkswork project.
I came up with a very loose pruposal and showed my direct lead, got his blessing and ensured him nothing on my work load would slip :-D (nothing did either :-D ). First I needed an MVP to really help sell this build. **Always make friends with the developers** Listen, emphasis, and remember they are your implamenters and keeping them happy will ensure a happy product. (this doesnt mean rolling over, but remember developers are users too and sometimes an easy dev lift is better than wasting a sprint on something trivial)

So I recruted some dev's! Our application is on both iOS and Andorid and Lottie supports both (and web which I will use later!). The iOS engineer I recructed instantly had a quick build running and we started pushing the API thru its limits

- Starting and stopping
- Speeding up
- Reversing
- Looping
- And much more.

A simple build on a phone was nice and could easily relay the messaging, but approaching my director with this solution would neglect one very important aspect of Ok cool whats next/more.

Next I recruited our motion designers to help me better understand the animation creation aspect. Lottie was what the developers used to render the animations natively, but another aspect needed to be understood. Turing the after effects work into JSON for the Lottie API.

I have never done anythign beyond a the most basic of basics within after effects, so I needed to recruit some very skilled Motion Designers within out company. This meant going off of our floor (4th floor). To people I had never met of worked with. I was basically cold calling fellow employees asking them help in making a project the had never worked on better. Spoiler they were awesome and extremly helpful, insightful and amped up. We spent many sessions testing the limits of the problem. And after a few sessions with their help I had a better understanding of this part of the problem and 5 rock solid actual real world garmin animaitons to add to our MVP.

Using the actual motion designer to better understand the problem was awesome and great, but they were not dedicated team members that we could use for work. We needed to work within our sgement for the day-to-day work.

Next we needed to consult with our dedicated visual designers to see if they could handle/ work within this type of workflow. Spoiler they could and were actually very versed in after effects.

So we solved one problem of our process which was how to achive higher fidelity animations that were required for our prodcuts, but another and even more seirous problem was improving efficency with delivery and QA'ing accuracy within or content. 



So quick recap:
1. Identify the problem
2. Research a solution - Mapping out pain points, finding solutions, figuring out soltuions. Legal Leg work (lisences and rights)
3. Created an MVP on iOS and Android to see dev possabilites
4. Consulted with Motion Designers to test the motion possabilites within After Effects and Bodymovin
5. Fostered a knowledge transfer bewteen the motion designers and visual designers to ensure a cohesive workflow
6. Update MVP with a real-world garmin example (device setup).
7. Selling to Stakeholders


### Conclusion
Presenting to stakeholders/director. At this point we had covered all angles. Established work flows between our teams and tested out a real solution. If you trust that old motto of be prepared...we were. At the end of the day it really came down to "ok cool we are using this library..go!" but like I said before and will always say nothing is ever that easy.




