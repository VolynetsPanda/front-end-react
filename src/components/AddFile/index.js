import {useRef} from "react";
import {FileDrop} from "react-file-drop";
import {decodeHelper} from "../../helpers/decodeHelper";

function AddFile() {
    const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 }
    const fileInputRef = useRef(null);
    const onFileInputChange = (event) => {
        const { files } = event.target;
        console.log('testing files => ', files)
        decodeHelper(files)
    }
    const onTargetClick = () => {
        fileInputRef.current.click()
    }
    return (
        <div>
            <h2>AddFile</h2>
            <div style={styles}>
                <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    hidden
                />
                <FileDrop
                    onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
                    onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                    onFrameDrop={(event) => console.log('onFrameDrop', event)}
                    onDragOver={(event) => console.log('onDragOver', event)}
                    onDragLeave={(event) => console.log('onDragLeave', event)}
                    onDrop={(files, event) => console.log('onDrop!', files, event)}
                    onTargetClick={onTargetClick}
                >
                    Drop some files here!
                </FileDrop>
            </div>

        </div>
    );
}
export default AddFile;
