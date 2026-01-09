import React, { useState, useRef } from 'react';

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const fileInputRef = useRef(null);

  const handleFileSelect = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles).map(file => ({
      file,
      id: Date.now() + Math.random(),
      status: 'pending'
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileSelect(droppedFiles);
    }
  };

  const simulateUpload = (fileId) => {
    setUploadStatus('uploading');
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadStatus('success');
        
        // Update file status after 2 seconds
        setTimeout(() => {
          setFiles(prev => prev.map(f => 
            f.id === fileId ? { ...f, status: 'completed' } : f
          ));
          setUploadStatus('idle');
        }, 2000);
      }
      
      setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
    }, 200);
  };

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const clearAllFiles = () => {
    setFiles([]);
    setUploadProgress({});
    setUploadStatus('idle');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const iconMap = {
      'pdf': '📄',
      'doc': '📝', 'docx': '📝',
      'xls': '📊', 'xlsx': '📊',
      'jpg': '🖼️', 'jpeg': '🖼️', 'png': '🖼️', 'gif': '🖼️',
      'mp4': '🎥', 'avi': '🎥', 'mov': '🎥',
      'mp3': '🎵', 'wav': '🎵', 'ogg': '🎵',
      'zip': '🗜️', 'rar': '🗜️',
      'txt': '📄'
    };
    return iconMap[extension] || '📎';
  };

  return (
    <div className="file-upload-container">
      <h2>File Upload Components</h2>
      
      {/* Basic File Upload */}
      <section className="basic-upload">
        <h3>Basic File Upload</h3>
        
        <div className="upload-area">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            onChange={(e) => handleFileSelect(e.target.files)}
            style={{ display: 'none' }}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
          />
          
          <button 
            className="upload-button"
            onClick={() => fileInputRef.current?.click()}
          >
            📁 Choose Files
          </button>
          
          <span className="upload-info">
            Accepted formats: Images, PDFs, Documents
          </span>
        </div>
      </section>

      {/* Drag and Drop Upload */}
      <section className="drag-drop-upload">
        <h3>Drag and Drop Upload</h3>
        
        <div 
          className={`drop-zone ${dragActive ? 'active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="drop-content">
            <div className="drop-icon">📁</div>
            <p>Drag files here to upload</p>
            <p className="drop-hint">or click to browse</p>
          </div>
        </div>
      </section>

      {/* File List with Progress */}
      <section className="file-list-section">
        <h3>File Queue</h3>
        
        {files.length === 0 ? (
          <div className="empty-state">
            <p>No files selected yet</p>
            <p>Choose files or drag them to the drop zone above</p>
          </div>
        ) : (
          <div className="file-list">
            {files.map(fileItem => (
              <div key={fileItem.id} className="file-item">
                <div className="file-info">
                  <span className="file-icon">
                    {getFileIcon(fileItem.file.name)}
                  </span>
                  <div className="file-details">
                    <div className="file-name">{fileItem.file.name}</div>
                    <div className="file-meta">
                      <span className="file-size">{formatFileSize(fileItem.file.size)}</span>
                      <span className={`file-status ${fileItem.status}`}>
                        {fileItem.status === 'pending' && '⏳ Pending'}
                        {fileItem.status === 'uploading' && '⬆️ Uploading'}
                        {fileItem.status === 'completed' && '✅ Completed'}
                        {fileItem.status === 'error' && '❌ Error'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="file-actions">
                  {fileItem.status === 'pending' && (
                    <button 
                      onClick={() => simulateUpload(fileItem.id)}
                      className="upload-btn"
                    >
                      Upload
                    </button>
                  )}
                  
                  <button 
                    onClick={() => removeFile(fileItem.id)}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </div>
                
                {/* Progress Bar */}
                {uploadProgress[fileItem.id] !== undefined && (
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${uploadProgress[fileItem.id]}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">
                      {Math.round(uploadProgress[fileItem.id])}%
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {files.length > 0 && (
          <div className="file-list-actions">
            <button onClick={clearAllFiles} className="clear-btn">
              Clear All
            </button>
            <span className="file-count">
              {files.length} file{files.length !== 1 ? 's' : ''} selected
            </span>
          </div>
        )}
      </section>

      {/* Advanced Upload Options */}
      <section className="advanced-upload">
        <h3>Advanced Upload Options</h3>
        
        <div className="upload-options">
          <div className="option-group">
            <label>File Type Filter</label>
            <select defaultValue="all">
              <option value="all">All Files</option>
              <option value="images">Images Only</option>
              <option value="documents">Documents Only</option>
              <option value="media">Media Files Only</option>
            </select>
          </div>
          
          <div className="option-group">
            <label>Max File Size</label>
            <select defaultValue="10mb">
              <option value="1mb">1 MB</option>
              <option value="5mb">5 MB</option>
              <option value="10mb">10 MB</option>
              <option value="50mb">50 MB</option>
              <option value="100mb">100 MB</option>
            </select>
          </div>
          
          <div className="option-group">
            <label>
              <input type="checkbox" defaultChecked />
              Auto-start upload
            </label>
          </div>
          
          <div className="option-group">
            <label>
              <input type="checkbox" />
              Show file preview
            </label>
          </div>
        </div>
      </section>

      {/* Upload Status */}
      <section className="upload-status">
        <h3>Upload Status</h3>
        
        <div className="status-indicators">
          <div className={`status-item ${uploadStatus}`}>
            <span className="status-label">Overall Status:</span>
            <span className="status-value">
              {uploadStatus === 'idle' && '⏸️ Idle'}
              {uploadStatus === 'uploading' && '⬆️ Uploading'}
              {uploadStatus === 'success' && '✅ Success'}
              {uploadStatus === 'error' && '❌ Error'}
            </span>
          </div>
          
          <div className="status-item">
            <span className="status-label">Total Files:</span>
            <span className="status-value">{files.length}</span>
          </div>
          
          <div className="status-item">
            <span className="status-label">Completed:</span>
            <span className="status-value">
              {files.filter(f => f.status === 'completed').length}
            </span>
          </div>
          
          <div className="status-item">
            <span className="status-label">Pending:</span>
            <span className="status-value">
              {files.filter(f => f.status === 'pending').length}
            </span>
          </div>
        </div>
      </section>

      {/* File Preview */}
      <section className="file-preview">
        <h3>File Preview</h3>
        
        {files.filter(f => f.file.type.startsWith('image/')).length > 0 ? (
          <div className="preview-grid">
            {files
              .filter(f => f.file.type.startsWith('image/'))
              .slice(0, 4)
              .map(fileItem => (
                <div key={fileItem.id} className="preview-item">
                  <img 
                    src={URL.createObjectURL(fileItem.file)} 
                    alt={fileItem.file.name}
                    className="preview-image"
                  />
                  <div className="preview-info">
                    <div className="preview-name">{fileItem.file.name}</div>
                    <div className="preview-size">{formatFileSize(fileItem.file.size)}</div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="no-preview">
            <p>No image files to preview</p>
            <p>Upload images to see preview</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default FileUpload;
