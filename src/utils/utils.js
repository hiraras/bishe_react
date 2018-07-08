export default class Utils{
    static getSearchParams = url => {
        const searchParams = url.split('?')[1];
        const paramsStr = searchParams.split('&');
        let result = {};
        for(let i=0;i<paramsStr.length;i += 1){
            let param = paramsStr[i].split('=');
            result[param[0]] = param[1];
        }
        return result;
    }
}