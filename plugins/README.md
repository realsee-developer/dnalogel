<p align="center">
	<a href="https://realsee.js.org/"><img src="https://vrlab-public.ljcdn.com/common/file/web/ea031fa5-ad82-46b3-86c8-7b20ec1e635a.jpg" width="60" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@realsee/dnalogel">
    <img src="https://img.shields.io/npm/v/@realsee/dnalogel.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=@realsee/dnalogel">
    <img src="https://packagephobia.now.sh/badge?p=@realsee/dnalogel" alt="install size" >
  </a>
  <a href="https://github.com/realsee-developer/dnalogel/blob/main/plugins/TERMS.txt">
    <img src="https://img.shields.io/npm/l/@realsee/dnalogel.svg" alt="license">
  </a>
</p>

<h1 align="center">@realsee/dnalogel</h1>

# ð Overview

@realsee/dnalogel å° [å¦è§(realsee.com)](https://realsee.com) **VR çæ¿** å¸¸ç¨è½åæ²æ·ï¼å¹¶ä»¥ `Five Plugins` å½¢å¼è¿è¡æ½è±¡ã
ç»å[å¦è§ VR çæ¿ SDK Five](https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/) 
ä¸ [å¦è§å¼æ¾ API](https://open-platform.realsee.com/developer/open/api/#/) ,å¯ä»¥å¶ä½åºä¸°å¯å¤å½©çä¸ç»´ç©ºé´åºç¨ãä¸è®ºæ¯ç»è¿çº¿ä¸ç¯å¢åé¤ç¾ç¼çåéåè½ï¼è¿æ¯çµæä¸ç°çç«é·å°è¯ï¼ææå·²ç»è½å°çåè½æä»¬åæ¯«æ ä¿ççå¼æºè³github [realsee-developer/dnalogel](https://github.com/realsee-developer/dnalogel) ã

# ð¨ Usage

**1ãå®è£**

```bash
npm install @realsee/dnalogel
```

```bash
yarn add @realsee/dnalogel
```

2.x çæ¬ä¾èµ `svelte`ï¼ ä½¿ç¨æ¶è¯·åæ¶å®è£:
```bash
npm install svelte 
```

```bash
yarn add svelte 
```

**2ãæä»¶æ³¨å**

```js
import { Five } from '@realsee/five'
import { Plugin } from '@realsee/dnalogel'
const five = new Five({
  plugins: [[Plugin, 'PluginName', initOptions]],
})
```

**3ãæä»¶æ¹æ³ä½¿ç¨**

```js
// ä¸åæä»¶æä¾çæ¹æ³å¯è½å­å¨å·®å¼,è¯·åèåæä»¶ API ææ¡£
five.plugins.PluginName.load(data)
five.plugins.PluginName.enable()
five.plugins.PluginName.disable()
five.plugins.PluginName.dispose()
```

**4ãæä»¶ä¾èµæ°æ®è·å**

æ¨å¯ä»¥éè¿ [open API](https://open-platform.realsee.com/developer/open/api#/) æ¥çæ°æ®è·åæ¹å¼åç¸å³ open API ã

# ð Documents

- [è¯´æææ¡£](https://open-platform.realsee.com/developer/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin/)
- [API ææ¡£](https://unpkg.com/@realsee/dnalogel/docs/index.html)
- [demo æºç ](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
- [æ°æ®ä¾èµæ¥æºï¼open API](https://open-platform.realsee.com/developer/open/api/)
- [CHANGELOG](https://github.com/realsee-developer/dnalogel/blob/main/plugins/CHANGELOG.md)

# ð¡ Preview

æä»¬ä¸ºæ¯ä¸ªæä»¶ä¹¦åäºç®åçææç¤ºä¾ï¼æ¨å¯ç¹å»é¢è§ï¼
[@realsee/dnalogel showcase](https://realsee.js.org/dnalogel/)


# ð§¾ Lists

- ð ModelViewPluginï¼æ¨¡åå°çªæä»¶
- ð PanoFloorplanRadarPluginï¼å¨æ¯æ·åé·è¾¾å¾æä»¶
- ð ModelRoomLabelPluginï¼æ¨¡åææ¿å±æ ç­¾æä»¶
- ð TopviewFloorplanPluginï¼ä¿¯è§æ¨¡åæ·åå¾æä»¶
- ð ModelChassisCompassPluginï¼æ¨¡ååºçæåéæä»¶
- ð ModelEntryDoorGuidePluginï¼æ¨¡åå¥æ·é¨å¼å¯¼æä»¶
- ð CSS3DRenderPluginï¼CSS3Dæ¸²ææä»¶
- ð CameraMovementPluginï¼ç¸æºè¿éæä»¶
- ð ModelFloorplanPluginï¼æ¨¡åæ·åå¾æä»¶
- ð PanoRulerPluginï¼å¨æ¯æ å°ºæä»¶
- ð PanoCompassPluginï¼å¨æ¯æåéæä»¶
- å¶ä»æä»¶æç»­æ´æ°ä¸­...

# License
[TERMS](https://github.com/realsee-developer/dnalogel/blob/main/plugins/TERMS.txt)
