import React, {useState} from 'react';

//css
import './css/addImages.css';
import Grid from '@material-ui/core/Grid';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Images = (props) => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);
    const [ arrayImgFiles, setArrayImgFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            const arrayNativeFiles = Array.from(e.target.files);

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            setArrayImgFiles((prevFiles)=>{
                let newFiles = prevFiles.concat(arrayNativeFiles);
                props.set(newFiles);
               return newFiles;
            });
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		return source.map((photo) => {
			return <Grid item xs={3} key={photo}><img src={photo} alt="" key={photo} /></Grid>;
		});
	};

	return (
		<div className="app">
			<div className="heading">Imagenes Producto</div>
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
                        
                            <AddAPhotoIcon className="label" />
                        
					</label>
				</div>
				<div className="result">
                    <Grid container spacing={1}>
                        {renderPhotos(selectedFiles)}
                    </Grid>
                </div>
			</div>
		</div>
	);
};

export default Images;
