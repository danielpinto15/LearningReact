import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selecedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      { selecedImg && <Modal selecedImg= {selecedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
