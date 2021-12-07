export interface TourismPicture {
  PictureUrl1?: string // 照片連結網址1
  PictureDescription1?: string // 照片說明1
  PictureUrl2?: string // 照片連結網址2
  PictureDescription2?: string // 照片說明2
  PictureUrl3?: string // 照片連結網址3
  PictureDescription3?: string // 照片說明3
}

export interface PointType {
  PositionLon?: number // 位置經度(WGS84)
  PositionLat?: number // 位置緯度(WGS84)
  GeoHash?: string // 地理空間編碼
}

export interface ScenicSpotTourismInfo {
  ID: string // 景點代碼
  Name?: string // 景點名稱
  DescriptionDetail?: string // 景點特色詳細說明
  Description?: string // 景點特色精簡說明
  Phone?: string // 景點服務電話
  Address?: string // 景點地址
  ZipCode?: string // 郵遞區號
  TravelInfo?: string // 交通資訊
  OpenTime?: string // 開放時間
  Picture?: TourismPicture // 景點照片
  MapUrl?: string // 景點地圖/簡圖介紹網址
  Position?: PointType // 景點位置
  Class1?: string // 景點分類1
  Class2?: string // 景點分類2
  Class3?: string // 景點分類3
  Level?: string // 古蹟分級
  WebsiteUrl?: string // 景點官方網站網址
  ParkingInfo?: string // 停車資訊
  ParkingPosition?: PointType // 景點主要停車場位置
  TicketInfo?: string // 票價資訊
  Remarks?: string // 警告及注意事項
  Keyword?: string // 常用搜尋關鍵字
  City?: string // 所屬縣市
  SrcUpdateTime: string // 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

export interface RestaurantTourismInfo {
  ID: string // 餐飲店家代碼
  RestaurantID: string // 餐飲店家代碼
  Name?: string // 餐飲店家名稱
  RestaurantName?: string // 餐飲店家名稱
  Description?: string // 店家簡述
  Address?: string // 店家地址
  ZipCode?: string // 郵遞區號
  Phone?: string // 預約電話
  OpenTime?: string // 營業時間
  WebsiteUrl?: string // 店家網站網址
  Picture?: TourismPicture // 店家照片
  Position?: PointType // 店家位置
  Class?: string // 店家分類
  MapUrl?: string // 店家地圖/簡圖介紹網址
  ParkingInfo?: string // 停車資訊
  City?: string // 所屬縣市
  SrcUpdateTime: string // 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

export interface HotelTourismInfo {
  ID: string // 旅館民宿代碼
  HotelID: string // 旅館民宿代碼
  Name?: string //): 旅館民宿名稱
  HotelName?: string //): 旅館民宿名稱
  Description?: string //): 旅館民宿簡述
  Grade?: string //): 觀光旅館星級
  Address?: string //): 旅館民宿地址
  ZipCode?: string //): 郵遞區號
  Phone?: string //): 旅館民宿電話
  Fax?: string //): 旅館民宿傳真
  WebsiteUrl?: string //): 旅館民宿網站網址
  Picture?: TourismPicture //): 旅館民宿照片
  Position?: PointType //): 旅館民宿位置
  Class?: string //): 旅館民宿分類
  MapUrl?: string //): 旅館民宿地點簡圖連結網址
  Spec?: string //): 房型、價目及數量說明
  ServiceInfo?: string //): 服務內容介紹
  ParkingInfo?: string //): 停車資訊
  City?: string //): 所屬縣市
  SrcUpdateTime: string // 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

export interface ActivityTourismInfo {
  ID: string //  活動訊息代碼
  ActivityID: string //  活動訊息代碼
  Name?: string // 活動名稱
  ActivityName?: string // 活動名稱
  Description?: string // 活動簡述
  Particpation?: string // 活動參與對象
  Location?: string // 主要活動地點名稱
  Address?: string // 主要活動地點地址
  Phone?: string // 活動聯絡電話
  Organizer?: string // 活動主辦單位
  StartTime?: string // 活動開始時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  EndTime?: string // 活動結束時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  Cycle?: string // 週期性活動執行時間
  NonCycle?: string // 非週期性活動執行時間
  WebsiteUrl?: string // 活動網址
  Picture?: TourismPicture // 活動照片
  Position?: PointType // 活動位置
  Class1?: string // 活動分類1
  Class2?: string // 活動分類2
  MapUrl?: string // 活動地圖/簡圖連結網址
  TravelInfo?: string // 交通資訊
  ParkingInfo?: string // 停車資訊
  Charge?: string // 費用標示
  Remarks?: string // 備註(其他活動相關事項)
  City?: string // 所屬縣市
  SrcUpdateTime: string //  觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string //  本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}
