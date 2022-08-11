

import React, {Component} from 'react';
import {connect} from "react-redux";
import Form from "./form";
import PostRender from "./postRender";




class Post extends Component {

    render() {

        console.log(this.props.posts)

        return (
            <div className="">
                <Form/>
                {
                    this.props.posts.map((post) => <PostRender data = {post} key={post.id}/> )
                }

            </div>
        );
    }
}

const getStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(getStateToProps, null)(Post);
