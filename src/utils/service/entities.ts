export interface TourismPicture {
  PictureUrl1?: string; // 照片連結網址1 ,
  PictureDescription1?: string; // 照片說明1 ,
  PictureUrl2?: string; // 照片連結網址2 ,
  PictureDescription2?: string; // 照片說明2 ,
  PictureUrl3?: string; // 照片連結網址3 ,
  PictureDescription3?: string; // 照片說明3
}

export interface PointType {
  PositionLon?: number; // 位置經度(WGS84) ,
  PositionLat?: number; // 位置緯度(WGS84) ,
  GeoHash?: string; // 地理空間編碼
}

export interface ScenicSpotTourismInfo {
  ID: string; // 景點代碼
  Name?: string; // 景點名稱
  DescriptionDetail?: string; // 景點特色詳細說明
  Description?: string; // 景點特色精簡說明
  Phone?: string; // 景點服務電話
  Address?: string; // 景點地址
  ZipCode?: string; // 郵遞區號
  TravelInfo?: string; // 交通資訊
  OpenTime?: string; // 開放時間
  Picture?: TourismPicture; // 景點照片
  MapUrl?: string; // 景點地圖/簡圖介紹網址
  Position?: PointType; // 景點位置
  Class1?: string; // 景點分類1
  Class2?: string; // 景點分類2
  Class3?: string; // 景點分類3
  Level?: string; // 古蹟分級
  WebsiteUrl?: string; // 景點官方網站網址
  ParkingInfo?: string; // 停車資訊
  ParkingPosition?: PointType; // 景點主要停車場位置
  TicketInfo?: string; // 票價資訊
  Remarks?: string; // 警告及注意事項
  Keyword?: string; // 常用搜尋關鍵字
  City?: string; // 所屬縣市
  SrcUpdateTime: string; // 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string; // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}