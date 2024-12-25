const express = require('express');
const { uploadFile, listFiles, deleteFile, getFile, downloadFile, updateFile } = require('../controllers/fileController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/list', authMiddleware, listFiles);
router.delete('/delete/:id', authMiddleware, deleteFile);
router.get('/:id', authMiddleware, getFile);
router.get('/download/:id', authMiddleware, downloadFile);
router.put('/update/:id', authMiddleware, upload.single('file'), updateFile);

module.exports = router;
