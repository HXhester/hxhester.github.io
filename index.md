---
title: Portfolio
feature_image: "https://hxhester.github.io/assets/Xu.jpg"
feature_text: |
  ## Xu Han
  Technical Artist , Rendering Engineer, Quick Learner
---
Started as a developer, with work experiences in both animation and game industry, my passion is found at art creation with technical mindset.

## Shaders
### Wet Floor and Ripple Shader
{% include video.html id="6tQXZedHwtU" title="Wet Floor and Ripple Shader" %}

Take advantages of PBR, change the floor appearances from dry to wet, to water puddle with ripples.

{% include video.html id="2-Ol9GU7UFE" title="Wet Floor and Ripple Shader" %}

**References:**
[https://seblagarde.wordpress.com/2012/12/10/observe-rainy-world/](https://seblagarde.wordpress.com/2012/12/10/observe-rainy-world/)
### Scene Transition Effect
{% include video.html id="SwvBseshn8g" title="Scene Transition - Enter" %}
{% include video.html id="rTkVtJ5F22M" title="Scene Transition - Leave" %}

Scene Transition Effect is a complex effect composed of 4 parts:

 1. Outline shader(Inverted Hull method +  Postprocessing method) 
 2. Outline on occlusion
 3. Power shield effect 
 4. Postprocessing effect: glitch + chromatic splitting
 5. URP render feature 

**References:** 
https://roystan.net/articles/outline-shader.html
https://alexanderameye.github.io/outlineshader
https://github.com/yahiaetman/URPCustomPostProcessingStack

### Fake Interior Shader
{% include video.html id="JlYuZ4J2CsE" title="Scene Transition - Enter" %}

Fake Interior Shader can save performance by only drawing the window without drawing the full interior. 

**References:**
https://zhuanlan.zhihu.com/p/159439811

### Model Variants Shader
{% include video.html id="g6jvVLKkgio" title="Scene Transition - Enter" %}

Change the appearances of the object without painting another set of textures.

### Dissolve and Dither
{% include video.html id="iDAkbZuSP5c" title="Scene Transition - Enter" %}
{% include video.html id="TNzL5DdqnT8" title="Scene Transition - Enter" %}
Dissolve with direction.
Cheap semi-transparent silhouette effect with correct sorting.

### HDRP Toon Shader
To make high quality cutscenes, we changed the pipeline from URP to HDRP. I was responsible for implementing character shader in HDRP based on URP character shader.

An HDRP Custom Pass was also made for high-fidelity hair shadow.

{% include figure.html image="https://hxhester.github.io/assets/HDRP_Toon_Shader.png" caption="Toon Shader Material Inspector" width="550" height="1100" %}

**Reference:**
 https://github.com/Jason-Ma-233/JasonMaToonRenderPipeline

### Substance Painter and Maya Shader
To keep consistency between the render results in Unity and DCC software, both scene and character shaders were re-written in DCC software. Work environment was also configured to match Unity.
{% include figure.html image="https://hxhester.github.io/assets/MayaShader.jpg" caption="Maya Shader" width="460" height="915" %}

{% include figure.html image="https://hxhester.github.io/assets/SPShader.jpg" caption="SP Shader" width="460" height="655" %}


## Editor Tools
### Assets Importer
Save import settings as presets, and apply import rules on assets import.
{% include figure.html image="https://hxhester.github.io/assets/ResourceImporter.PNG" caption="Assets Importer" width="502" height="524" %}

{% include figure.html image="https://hxhester.github.io/assets/ResourceImporter1.PNG" caption="Assets Importer Preset" width="502" height="524" %}
### Assets Cleaner
Batch clean unreferenced assets in the current scene folder.

{% include figure.html image="https://hxhester.github.io/assets/ResourceCleaner.PNG" caption="Assets Importer Preset" width="502" height="579" %}

### Assets Generator
Batch create materials from textures, batch create prefabs from models.

{% include figure.html image="https://hxhester.github.io/assets/Model2Prefab.PNG" caption="Assets Importer Preset" width="502" height="164" %}

{% include figure.html image="https://hxhester.github.io/assets/Texture2Mat.PNG" caption="Assets Importer Preset" width="502" height="166" %}

## Fixi in Playland
{% include figure.html image="https://s3-eu-west-1.amazonaws.com/cwsassets/mtg-57288379c4f53/2020/09/29/5f72ef778aea1_thumbnail.jpg?version=1601367931" alt="Image with just alt text" %}

Fixi in Playland is an animated series encouraging viewers from ages 5 to 8 to gain interests in technology. I participated in Season 1, 2 and Christmas special.

### Preview + Production platform (Core)

### Face Streamer
### Editor Tools
Lightmap Switcher, facial data reader, cross-scene solution…
### "Part-time" Roles
Mocap operator
Layout Artist
