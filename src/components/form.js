import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPost} from "../redux/action";
import './form.css'

class Form extends Component {
    state = {
        postText: '',
        postImg: '',
        postSelect: '',
    }

    onChangeTextArea = (e) => this.setState({postText: e.target.value})
    onChangeImgSrc = (e) => this.setState({postImg: e.target.value})
    onChangeSelect = (e) => this.setState({postSelect: e.target.value})

    onSubmitInput = () => {
        this.props.addPost(this.state.postText, this.state.postImg, this.state.postSelect)
        this.setState({postText: ''})
        this.setState({postImg: ''})
        this.setState({postSelect: ''})
        console.log(this.postText)
    }

    render() {

        return (
            <div>
                <div id="form" className="form__body">

                    <div className="form__item">
                        <label htmlFor="formImg" className="form__label">Зображення:</label>
                        <input placeholder="Введіть посилання на зображення"
                               id="formImg" type="text"
                               className="form__input "
                               onChange={this.onChangeImgSrc}
                               value={this.state.postImg}
                        />
                    </div>

                    <select
                        value={this.state.postSelect}
                        className="profile-nicknames"
                        onChange={this.onChangeSelect}
                    >
                        <option defaultValue="">Виберіть автора</option>
                        <option defaultValue="@ray">@ray</option>
                        <option defaultValue="@dart_vader">@dart_vader</option>
                    </select>
                    <div className="form__item">
                        <label htmlFor="formText" className="form__label">Текст</label>
                        <textarea placeholder="Ваша стаття"
                                  className="form__input custom__input"
                                  onChange={this.onChangeTextArea}
                                  id=" formText"
                                  type="text"
                                  value={this.state.postText}
                        ></textarea>

                    </div>
                    <button onClick={this.onSubmitInput} type="submit" className="form__button">Готово!</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text, link, nick) => dispatch(addPost(text, link, nick))
    }
}

export default connect(null, mapDispatchToProps)(Form);