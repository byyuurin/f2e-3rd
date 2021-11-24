import * as Entity from './entities';

export interface BaseRequestParams {
  /** 挑選 */
  $select?: string;
  /** 過濾 */
  $filter?: string;
  /** 排序 */
  $orderby?: string;
  /** 取前幾筆 */
  $top?: number;
  /** 跳過前幾筆 */
  $skip?: number;
  /** 空間過濾 */
  $spatialFilter?: string;
}

type QueryParams<T> = T extends string
  ? BaseRequestParams & { [Key in T]: string }
  : T extends Record<string, any>
  ? BaseRequestParams & T
  : BaseRequestParams;

export interface ServiceRequest<P = BaseRequestParams, T = any> {
  params: QueryParams<P>;
  entity: T;
}

export interface Service {
  // https://ptx.transportdata.tw/MOTC?t=Tourism&v=2
  Tourism: {
    // 取得所有觀光景點資料
    '/ScenicSpot': ServiceRequest<BaseRequestParams, Entity.ScenicSpotTourismInfo>;

    // 取得指定[縣市]觀光景點資料
    '/ScenicSpot/{City}': ServiceRequest<'City', Entity.ScenicSpotTourismInfo>;

    // 取得所有觀光餐飲資料
    '/Restaurant': ServiceRequest<BaseRequestParams>;

    // 取得指定[縣市]觀光餐飲資料
    '/Restaurant/{City}': ServiceRequest<'City'>;

    // 取得所有觀光旅宿資料
    '/Hotel': ServiceRequest<BaseRequestParams>;

    // 取得指定[縣市]觀光旅宿資料
    '/Hotel/{City}': ServiceRequest<'City'>;

    // 取得所有觀光活動資料
    '/Activity': ServiceRequest<BaseRequestParams>;

    // 取得指定[縣市]觀光活動資料
    '/Activity/{City}': ServiceRequest<'City'>;

    // 取得台灣好行公車的動態定時資料(A1)
    '/Bus/RealTimeByFrequency/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車的動態定時資料(A1)
    '/Bus/RealTimeByFrequency/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車的動態定點資料(A2)
    '/Bus/RealTimeNearStop/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車的動態定點資料(A2)
    '/Bus/RealTimeNearStop/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車的預估到站資料(N1)
    '/Bus/EstimatedTimeOfArrival/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車的預估到站資料(N1)
    '/Bus/EstimatedTimeOfArrival/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車路線資料
    '/Bus/Route/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車路線資料
    '/Bus/Route/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車路線與站牌資料
    '/Bus/StopOfRoute/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車路線與站牌資料
    '/Bus/StopOfRoute/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車路線班表資料
    '/Bus/Schedule/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車路線班表資料
    '/Bus/Schedule/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車線型資料
    '/Bus/Shape/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得指定[路線名稱]的台灣好行公車線型資料
    '/Bus/Shape/TaiwanTrip/{TaiwanTripName}': ServiceRequest<'TaiwanTripName'>;

    // 取得台灣好行公車路線站間旅行時間基本資料
    '/Bus/S2TravelTime/TaiwanTrip': ServiceRequest<BaseRequestParams>;

    // 取得台灣好行公車之最新消息
    '/Bus/News/TaiwanTrip': ServiceRequest<BaseRequestParams>;
  };
  // https://ptx.transportdata.tw/MOTC?t=Bike&v=2
  Bike: {
    // 取得指定[縣市]的公共自行車租借站位資料
    '/Station/{City}': ServiceRequest<BaseRequestParams>;

    // 取得動態指定[縣市]的公共自行車即時車位資料
    '/Availability/{City}': ServiceRequest<BaseRequestParams>;
  };
}
