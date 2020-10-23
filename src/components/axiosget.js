import React, {Component} from 'react';
import axios from 'axios';


class Dev extends Component {
  constructor(props){
      super(props)

      this.state = { 
      posts:[ ]
      }
  }
   


 componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res=>{
         console.log(res)
             this.setState ({posts:res.data}) })
     .catch(err=>{
        console.log(err)})
 }





    render() { 
        const {posts}=this.state; 
         return (
            <div>
       List of posts
       {
          posts.map(post=>
          <div key={post.id}>{post.title}</div>
          )
       }

       </div>
        )
}
}
 
export default Dev;
