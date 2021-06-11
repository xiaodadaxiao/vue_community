export default function saveHomeFromPath(to, from) {
    //console.log(to, from);
    if (to.path !== '/home') {
        return;
    }
    //记录返回home的from path
    to.meta.fromPath = from.path
}