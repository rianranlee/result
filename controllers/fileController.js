const File = require('../models/file');
const fs = require('fs');

exports.uploadFile = async (req, res) => {
  const { originalname, mimetype, size } = req.file;

  try {
    const file = await File.create({
      name: originalname,
      extension: originalname.split('.').pop(),
      mimeType: mimetype,
      size,
      uploadDate: new Date(),
    });

    res.json(file);
  } catch (err) {
    res.status(500).json({ message: 'File upload failed' });
  }
};
