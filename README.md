# 2026 信州・長野秋冬之旅 — 互動地圖

純 HTML / CSS / JavaScript 靜態網站，無框架、無伺服器、無 API 金鑰。適合部署至 GitHub Pages。

## 網站功能

- 以 `assets/shinshu-map.png` 為背景，六個城市圓形圖片為可點擊熱區：川崎、長野、松本、金澤、輕井澤、東京／成田。
- 滑鼠懸停或鍵盤聚焦時有發光外框與箭頭；手機觸控可開啟底部詳情。
- 每日 2026/11/25–12/02 行程、已提供的所有 Google Maps 短網址、費用紀錄，以及待確認／未安排項目。
- 預設 Google Maps 搜尋連結用於未提供網址的地點，原始短網址不修改。

## GitHub Pages 上架

1. 建立新的 GitHub repository，例如 `shinshu-2026-trip`。
2. 將這個資料夾內的 `index.html`、`styles.css`、`app.js`、`assets` 目錄上傳到儲存庫**根目錄**。
3. GitHub 儲存庫選擇 **Settings → Pages → Build and deployment**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/(root)`，按 Save。
4. 等待 GitHub 完成部署後，即可由 Pages 顯示的網址開啟。

## 修改內容

- 行程／連結：編輯 `app.js` 的 `DAYS`。
- 城市歸屬／簡介：編輯 `app.js` 的 `CITIES`。
- 費用：編輯 `app.js` 的 `EXPENSES`；現在只有 11/25 已有紀錄。
- 背景圖片：用同樣檔名覆蓋 `assets/shinshu-map.png`。
- 圓形熱區：在 `index.html` 的 SVG `viewBox="0 0 1122 1402"` 裡調整各城市的 `cx`、`cy`、`r`。這些座標是依目前圖片手動對齊的；更換版面不同的圖時需要重新調整。

## 注意

- 「11/25 機場接送」採用新筆記，不沿用舊版 N’EX。
- 「11/28 晚餐」採用新筆記的 **19:00**。
- 11/28 車次「信越本線 8 號」、12/01「JR 556 號」均照原筆記呈現，尚未核對車種及時刻。
- 11/30 原筆記「OR」未明確描述第二方案，網站只保留自由活動及提醒。
- 12/02 沒有行程資料；費用未標明幣別，網站不自行推定。
- 手繪底圖不是真正的 GPS 比例尺，請以 Google Maps／交通業者資訊導航。

此網站不會蒐集訪客資料。開啟地圖時會離開本站前往 Google Maps。
