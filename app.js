const [images, setImages] = React.useState([
  'image1.jpg', 'image2.jpg', 'image3.jpg'

]);
const handleAddImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setImages([...images, url]);
  }
};
return (
  <div>
    <button onClick={() => document.getElementById('fileInput').click()}>+ ADD IMAGE</button>
    <input 
      type="file" 
      id="fileInput" 
      style={{ display: 'none' }}
      onChange={handleAddImage}
    />
    <div className="flex space-x-4 overflow-x-auto">
      {images.map((img, idx) => (
        <img key={idx} src={img} className="w-32 h-32 object-cover rounded"/>
      ))}
    </div>
  </div>
);