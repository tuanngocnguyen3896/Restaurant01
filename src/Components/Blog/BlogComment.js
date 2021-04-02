import React from 'react';
import { useSelector } from 'react-redux';
import './BlogComment.css';
export default function BlogComment() {
    let comments = useSelector(state => state.CommentReducer.comments);
    const renderComment = () => {
        // console.log(comments);
        return comments.map((com,index) => {
            return <div key={index} container>
                             <div className="row mb-4" style={{background: '#303030', padding: '20px 30px'}}>
                                 <div className="col-2">
                                     <img src={com.avatar} style={{height:80, borderRadius:'50%'}}></img>
                                 </div>
                                 <div className="col-10">
                                     <div className="d-flex justify-content-between">
                                     <h4 className="name">{com.name}</h4>
                                     <h5 className="email">{com.email}</h5>
                                     </div>
                                     <p className="comment">{com.content}</p>
                                 </div>
                             </div>
                 </div>
        })
    }
    const renderNumberComment = () => {
        return comments.reduce((amount,item,index) => {
            return amount +=1;
        },0)
    }
    return (
        <div className="single-blog-comment my-5">
                                 <h3 className="text-left text-white mb-5">Comments ({renderNumberComment()})</h3>
            {renderComment()}         
        </div>
    )
}