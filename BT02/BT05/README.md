# BÀI TẬP 05 – ANIMATE APP

## 1. Thông tin bài tập

- Tên bài: AnimateApp
- Chủ đề: Ứng dụng theo dõi mục tiêu học tập
- Công nghệ: React Native, Expo
- Animation: React Native Animated

## 2. Link ứng dụng Expo

Dán link Expo Snack tại đây: 

[LINK EXPO ANIMATEAPP]

## 3. Các chức năng của ứng dụng

- Theo dõi tiến độ học tập bằng thanh Progress.
- Hiển thị phần trăm hoàn thành mục tiêu.
- Nhấn nút Bắt đầu học để tăng tiến độ 20%.
- Hiển thị thông báo khi hoàn thành 100%.
- Có hiệu ứng phóng to và xuất hiện cho thông báo hoàn thành.
- Có nút làm lại mục tiêu.

## 4. Các Component được sử dụng

### 4.1. ProgressCard

- Hiển thị mục tiêu học tập.
- Hiển thị phần trăm hoàn thành.
- Hiển thị thanh tiến độ.

### 4.2. ActionButton

- Tạo nút bắt đầu học.
- Xử lý sự kiện nhấn nút.
- Cập nhật tiến độ học tập.
- Tạo nút làm lại mục tiêu.

### 4.3. AnimatedMessage

- Hiển thị thông báo hoàn thành.
- Sử dụng Animated.spring tạo hiệu ứng phóng to.
- Sử dụng Animated.timing tạo hiệu ứng mờ dần và xuất hiện.
- Sử dụng Animated.parallel để chạy đồng thời hai hiệu ứng.

## 5. Cấu trúc thư mục

```text
AnimateApp/
├── App.js
├── components/
│   ├── ProgressCard.js
│   ├── ActionButton.js
│   └── AnimatedMessage.js
└── README.md
```

## 6. Hình ảnh kết quả thực hiện

### Giao diện ban đầu
Chèn ảnh màn hình ứng dụng khi tiến độ bằng 0%.

### Giao diện khi nhấn nút bắt đầu
Chèn ảnh màn hình khi tiến độ đang tăng.

### Giao diện khi hoàn thành
Chèn ảnh thông báo hoàn thành và hiệu ứng Animation.

## 7. Kết luận

Đã hoàn thành ứng dụng AnimateApp với chức năng theo dõi mục tiêu học tập. Ứng dụng sử dụng các Component riêng biệt, quản lý trạng thái bằng useState và tạo hiệu ứng chuyển động bằng Animated trong React Native.