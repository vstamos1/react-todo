import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const {item, handleChange, handleSubmit, editItem} = this.props;
        if (editItem === true){

        }
        return (
            <div className="card card-classBody my-3">
                <form onSubmit={handleSubmit} className="m-4">
                    <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                               <i className="fas fa-book"/>
                           </div>
                       </div> 
                       <input type="text" className="form-control text-capitalize" 
                       placeholder="add todo item" value={item} onChange={handleChange}/>
                    </div>
                    
                        <button disabled={item === ''} className={editItem !==true? "btn btn-block btn-primary mt-3 text-uppercase":"btn btn-block btn-success mt-3 text-uppercase" } type="submit">{editItem !==true? 'add item':'edit item'}</button>
                    
                    
                </form>
            </div>
        )
    }
}
