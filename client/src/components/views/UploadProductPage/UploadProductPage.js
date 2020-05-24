import React, {useState} from 'react'

function UploadProductPage() {

  const [TitleValue, setTitleValue] = useState("");

  const [DescriptionValue, setDescriptionValue] = useState("");

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  }

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  }

  return (
    <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
      <div style={{ textAlign:'center', marginBottom:'2rem'}}>
        <h2> Upload Travel Product</h2>
      </div>
      
      <form onSubmit >

        {/* DropZone */}

        <br />
        <br />
        <label>Title</label>
        <input 
          onChange={onTitleChange}
          value={TitleValue}
        />
        <br />
        <br />
        <label>Description</label>
        <textarea 
          onChange={onDescriptionChange}
          value={DescriptionValue}
        />
        <br />
        <br />
        <label>Price($)</label>
        <input
          onChange
          value
          type="number"
        />
        <select>
          <option key value>

          </option>
        </select>
        <br />
        <br />

        <button
          onClick
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default UploadProductPage
