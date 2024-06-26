/**
 * namespace定义积木的选单package
 */
//% weight=0 color=#3CB371 icon="\uf0ad" block="百度大脑"
namespace baiduAi {

    let api_key = ""
    let api_secret = ""
    /**
    * 初始化 api_key api_secret
    * blockId可自定，通常就用函式名称即可。
     * weight同样是定义积木出现的顺序，在这里是数字愈小愈上面。
     * blockGap定义积木和积木之间的间距
     * block则定义了积木中要出现的字，以及对应的输入参数名称，参数名称前面要加%，每个参数中间必须要加上|以做为区隔
     * blockExternalInputs=true则定义了二个参数以上的输入，以竖排排的方式排版积木
    */
    //% blockId="setApiConfig" block="设置Api key %apiKey| api secret %apiSecret"
    //% blockGap=2 weight=0
    export function setApiConfig(apiKey: string, apiSecret:string): void {
        api_key = apiKey
        api_secret = apiSecret
    }

}
