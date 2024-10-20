document.getElementById('uploadForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fileInput = document.getElementById('imageInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file to upload.');
    return;
  }

  const maxSizeInMB = 2; // 限制最大大小为2MB
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSizeInBytes) {
    alert(`File size exceeds the maximum allowed size of ${maxSizeInMB} MB.`);
    return;
  }

  // 读取图片并获取尺寸
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const requiredWidth = 3200; // 指定宽度
      const requiredHeight = 2400; // 指定高度

      if (img.width !== requiredWidth || img.height !== requiredHeight) {
        alert(`Image dimensions must be ${requiredWidth}x${requiredHeight}.`);
        return;
      }

      // 尺寸符合要求，提交表单
      document.getElementById('uploadForm').submit();
    };
    img.onerror = function () {
      alert('Invalid image file.');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});