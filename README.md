# 202612信州行｜GitHub Pages 互動旅遊地圖

這是一個可直接部署到 **GitHub Pages** 的靜態網站，使用手繪風旅遊地圖作為背景，並提供城市熱區互動、每日行程、餐廳／住宿地圖連結與費用整理。

## 目前版本特色

- 背景圖已更新為新版 **「202612信州行」**
- 互動城市：川崎、長野、松本、金澤、輕井澤、東京／成田
- 滑鼠移入城市圓形縮圖時會發光並顯示箭頭
- 點擊後可查看詳細行程、餐廳、住宿、Google Maps 連結
- 支援手機與桌面瀏覽器
- 不需框架、無需 API Key，純 HTML / CSS / JavaScript

## 檔案結構

```
shinshu-trip-github/
├─ index.html
├─ styles.css
├─ app.js
└─ assets/
   └─ shinshu-map.png
```

## 部署到 GitHub Pages

1. 建立新的 GitHub repository
2. 將本資料夾全部上傳到 repository 根目錄
3. 進入 **Settings → Pages**
4. 選擇 **Deploy from a branch**
5. Branch 選 `main`，資料夾選 `/(root)`
6. 儲存後等待部署完成

## 自行修改內容

- **行程資料**：編輯 `app.js`
- **背景圖**：替換 `assets/shinshu-map.png`
- **樣式**：編輯 `styles.css`
- **頁面結構**：編輯 `index.html`

## 備註

背景圖為示意手繪地圖，非精確地理比例；實際交通、車次與營業資訊請依出發前查詢結果為準。

## 本版修正

- 地圖已換為 202612信州行新版插畫，六個城市的 SVG 點擊圈、光暈和箭頭重新依 1122 × 1402 座標對齊。
- 內含 11/25–12/02 行程、餐廳／住宿原始 Google Maps 連結與旅費記錄。
- 所有檔案採相對路徑，適合部署至 GitHub Pages 專案網站。
