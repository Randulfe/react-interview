const CreateAdd = ({product})=>{

    return(
        <div>
           <form>

               <div className='formGroup'>
               <label>Headline</label>
               <input type='text'></input>
               </div>

               <div className='formGroup'>
               <label>Description</label>
               <textarea type='text'></textarea>
               </div>

               <div className='formGroup'>
               <label>Image</label>
               <input type='image' alt='Add the image for your add'></input>
               </div>
               <button className='btnOutline' type='submit'>Create</button>

           </form>
        </div>         
    )
}

export default CreateAdd;