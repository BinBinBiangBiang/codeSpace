// 给banner 这个1-接口 建立一个2-接口

// 1-接口 => ：3000/banner -> store -> component
// 2-接口 => 类Java等强类型的接口定义 vuex    如果做到？ 使用TS类型检测

// pic,targetId等等对应的是数据表
export interface Banner {
 pic:string;
 targetId:number;
 targetType:number;
 typeTitle:string;
 bannerId:number;
}



// 跟vuex 一道，把数据严谨再严谨
// let banner:Banner = {pic: '范家吵架图'}

