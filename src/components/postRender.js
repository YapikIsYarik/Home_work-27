import React, {Component} from 'react';
import './posts.css'



class PostRender extends Component {

    render() {
        const {data} = this.props

        return (
            <div>
                <div className="post">
                    <div className="post__body">
                        <img className = 'user__img' src={data.author.photo} alt="profile img"/>
                        <div className="post__item">
                            <div className="user__info">
                                <div className="user__name">{data.author.name}</div>
                                <div className="user__nickname">{data.author.nickname}</div>
                                <div className="post__date">{data.author.date}</div>
                            </div>
                            <div className="post__content">{data.content}</div>
                            <img className = 'content__img' src={data.image} alt="post img"/>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default PostRender;