import React, {Component} from "react";
// import {tags, genres} from '../../data.js'

// const initialData = {
//     title: "",
//     description: "",
//     director: "",
//     duration: "",
//     price: "",
//     img: "",
//     featured: false,
// }

class FilmForm extends React.Component {
    // state = {
    //     data: initialData,
    //     tags: tags,
    //     genre: 1,
    //     sel: "",
    // }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.data)
    }

    handleStringChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value},
        })

    handleNumberChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: parseInt(e.target.value, 10)},
        })

    handleCheckboxChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.checked},
        })

    // toggleTag = tag =>
    //     this.setState(({tags}) => ({
    //         tags: tags.includes(tag._id)
    //             ? tags.filter(id => id !== tag._id)
    //             : [...tags, tag._id],
    //     }))
    //
    // toggleGenre = genre => this.setState({genre})
    //
    // toggleSel = e => this.setState({sel: e.target.value})

    render() {
        const {data} = this.state
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                {/*<div className="ui grid">*/}
                {/*    <div className="four wide column">TASK 1*/}
                {/*        <div className="grouped fields">*/}
                {/*            <label>Tags</label>*/}
                {/*            {tags.map(tag => (*/}
                {/*                <div key={tag._id} className="field inline">*/}
                {/*                    <input id={`tag-${tag._id}`}  type="checkbox"*/}
                {/*                           checked={this.state.tags.includes(tag._id)}*/}
                {/*                           onChange={() => this.toggleTag(tag)}*/}
                {/*                    />*/}
                {/*                    <label htmlFor={`tag-${tag._id}`}>{tag.title}</label>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="four wide column">TASK 2*/}
                {/*        <div className="field">*/}
                {/*            <label>Genres</label>*/}
                {/*            {genres.map(genre => (*/}
                {/*                <div key={genre._id} className="field inline">*/}
                {/*                    <input  id={`genre-${genre._id}`}  type="radio"*/}
                {/*                            checked={this.state.genre === genre._id}*/}
                {/*                            onChange={() => this.toggleGenre(genre._id)}*/}
                {/*                    />*/}
                {/*                    <label htmlFor={`genre-${genre._id}`}>{genre.title}</label>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="four wide column">TASK 3*/}
                {/*        <label>Select</label>*/}
                {/*        <select value={this.state.sel}  onChange={this.toggleSel}  className="ui dropdown">*/}
                {/*            {genres.map(genre =>*/}
                {/*                <option key={genre._id} value={genre._id}>{genre.title}</option>*/}
                {/*            )}*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="ui  grid">
                    <div className="twelve wide column">
                        <div className="field">
                            <label>Film title</label>
                            <input type="text"  name="title"  id="title" placeholder="film title"
                                   value={data.title}
                                   onChange={this.handleStringChange}
                            />
                        </div>
                        <div className="field">
                            <label>Film description</label>
                            <textarea name="description" id="description" placeholder="film description"
                                      onChange={this.handleStringChange}
                                      value={data.description}
                            />
                        </div>
                    </div>

                    <div className="twelve wide column field">
                        <label>Image</label>
                        <input type="text" name="img" id="img"  placeholder="img"
                               onChange={this.handleStringChange}
                               value={data.img}
                        />
                    </div>

                    <div className="six wide column field">
                        <div className="field">
                            <label>Director</label>
                            <input   type="text"  name="director"  id="director"  placeholder="film director"
                                     onChange={this.handleStringChange}
                                     value={data.director}
                            />
                        </div>
                    </div>

                    <div className="six wide column field">
                        <div className="field">
                            <label>Duration</label>
                            <input type="number"  name="duration" id="duration"  placeholder="Duration"
                                   value={data.duration}
                                   onChange={this.handleNumberChange}
                            />
                        </div>
                    </div>

                    <div className="six wide column field">
                        <div className="field">
                            <label>Price</label>
                            <input type="number" name="price"  id="price"  placeholder="price"
                                   value={data.price}
                                   onChange={this.handleNumberChange}
                            />
                        </div>
                    </div>

                    <div className="six wide column inline field">
                        <label htmlFor="featured">Featured</label>
                        <input  type="checkbox" name="featured"  id="featured"
                                value={data.featured}
                                onChange={this.handleCheckboxChange}
                        />
                    </div>
                </div>

                {/*TODO: your code here*/}

                <div className="ui fluid buttons">
                    <button className="ui button primary" type="submit">Save</button>
                    <div className="or" />
                    <span className="ui button">Hide form</span>
                </div>
            </form>
        )
    }
}


export default FilmForm
