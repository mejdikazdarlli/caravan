import { CARviewer} from './MKViewer.js';



function _(elm){return document.getElementById(elm)}
let Viewer = new CARviewer(_("CarViewer"))
Viewer.initScene()
Viewer.animate()
