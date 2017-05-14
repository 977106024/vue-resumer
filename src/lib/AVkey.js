import AV from 'leancloud-storage'

const APP_ID = 'oCA8kXF4wyGSxCIkHUcCxfxK-gzGzoHsz';
const APP_KEY = 'WTiO7VlWckiteR2gOCI3r4JU';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

