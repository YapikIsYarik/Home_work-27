import React, {Component} from 'react';
import './posts.css'
import {connect} from "react-redux";
import {addLike, addComment ,addShare} from "../redux/action";


class PostRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: '',
            comment: '',
            share: '',
        }
    }

    handleChangeLikes = () => {
        let act = true;
        let domLikes = document.querySelector('.post__like');
        this.setState({likes: domLikes.innerHTML});
        domLikes.classList.toggle("_clicked")
        if (domLikes.classList.contains('_clicked')) {
            this.props.addLike(this.state.likes, this.props.data.id, act);
        } else
            this.props.addLike(this.state.likes, this.props.data.id, !act);

    }
    handleChangeComments = () => {
        let act = true;
        let domShare = document.querySelector('.post__comment');
        this.setState({share: domShare.innerHTML});
        domShare.classList.toggle("_clicked")
        if (domShare.classList.contains('_clicked')) {
            this.props.addComment(this.state.comment, this.props.data.id, act);
        } else
            this.props.addComment(this.state.comment, this.props.data.id, !act);

    }
    handleChangeShare = () => {
        let act = true;
        let domComments = document.querySelector('.post__share');
        this.setState({comment: domComments.innerHTML});
        domComments.classList.toggle("_clicked")
        if (domComments.classList.contains('_clicked')) {
            this.props.addShare(this.state.comment, this.props.data.id, act);
        } else
            this.props.addShare(this.state.comment, this.props.data.id, !act);

    }

    render() {
        const {data} = this.props
        return (
            <div>
                <div className="post">
                    <img className='user__img' src={data.author.photo} alt="profile img"/>
                    <div className="post__body">
                        <div className="post__item">
                            <div className="user__info">
                                <div className="user__name">{data.author.name}</div>
                                <div className="user__nickname">{data.author.nickname}</div>
                                <div className="post__date">{data.author.date}</div>
                            </div>
                            <div className="post__content">{data.content}</div>
                            <img className='content__img' src={data.image} alt="post img"/>
                            <div className="post__reactions">
                                <div onClick={this.handleChangeLikes} className="post__like">
                                    <span>
                                        <img className='post__like-icon reaction-icon' src="https://cdn-icons-png.flaticon.com/512/889/889140.png" alt="like"/>
                                    </span>
                                    {data.like}
                                </div>
                                <div onClick={this.handleChangeComments} className="post__comment">
                                    <span>
                                        <img className='post__comment-icon reaction-icon' src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png" alt="comments"/>
                                    </span>
                                    {data.comment}
                                </div>
                                <div onClick={this.handleChangeShare} className="post__share">
                                    <span>
                                        <img className='post__share-icon reaction-icon' src="https://cdn-icons-png.flaticon.com/512/929/929468.png" alt="comments"/>
                                    </span>
                                    {data.share}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }

    componentDidMount() {
        this.setState({likes: document.querySelector('.post__like').innerHTML});
        this.setState({comment: document.querySelector('.post__comment').innerHTML});
        this.setState({share: document.querySelector('.post__share').innerHTML});
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment, id, act) => dispatch(addComment(comment, id, act)),
        addLike: (like, id, act) => dispatch(addLike(like, id, act)),
        addShare: (like, id, act) => dispatch(addShare(like, id, act))

    }

}

export default connect(null, mapDispatchToProps)(PostRender);