const multer = require('multer');
const path = require('path');
const fs = require('fs');
const IdGenerator = require('./idGenerator');

// Конфигурация хранилища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = '';
    
    if (file.fieldname === 'avatar') {
      uploadPath = path.join(__dirname, '../../data/uploads/avatars');
    } else if (file.fieldname === 'attachment') {
      uploadPath = path.join(__dirname, '../../data/uploads/applications');
    } else {
      uploadPath = path.join(__dirname, '../../data/uploads');
    }
    
    // Создаем директорию если не существует
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = IdGenerator.generateFileName(file.originalname);
    cb(null, uniqueName);
  }
});

// Фильтр файлов
const fileFilter = (req, file, cb) => {
  const allowedTypes = {
    'avatar': ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    'attachment': ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  };
  
  const fieldname = file.fieldname;
  const allowedMimes = allowedTypes[fieldname] || allowedTypes.attachment;
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type for ${fieldname}. Allowed types: ${allowedMimes.join(', ')}`), false);
  }
};

// Настройки загрузки
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Middleware для разных типов загрузок
const uploadAvatar = upload.single('avatar');
const uploadAttachment = upload.single('attachment');

module.exports = {
  uploadAvatar,
  uploadAttachment,
  upload
};