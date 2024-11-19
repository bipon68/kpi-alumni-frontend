const UploadSection = () => {
  return (
    <div id="upload" className="upload-section py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Upload an Image or Video to Match Faces</h3>
        <input type="file" id="fileUpload" accept="image/*,video/*" className="block mx-auto mb-4" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md" id="uploadButton">
          Upload and Match
        </button>
        <div id="preview" className="mt-6"></div>
      </div>
    </div>
  );
};

export default UploadSection;
