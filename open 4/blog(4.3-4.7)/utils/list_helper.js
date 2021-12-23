const { indexOf, result } = require("lodash")
const _= require("lodash")


const dummy=(blogs)=>{
 return 1
}

const totalLikes=(blogs)=>{
  const sum= (total,like)=>{
    return total +like.likes
  }
  return blogs.length === 0? 0: blogs.reduce(sum,0)
}

const favoriteBlog=(blogs)=>{
  const biggest= blogs.reduce(
    (acc, b)=>   b.likes > acc.likes ?    b : acc )

    return biggest
                                                                                      //  7 5 12 10 0 2
}
const mostBlogs=blogs=>{
  const Allauthors=_.map(blogs,'author')
  let bigAuthLiked=_.chain(Allauthors)
                 .countBy()
                 .toPairs()
                 .max()
                 .head()
                 .value()
  let blogLiked= _.chain(Allauthors)
                  .countBy()
                  .findLast()
                  .value()
 const Author={
   author:bigAuthLiked,
   blogs:blogLiked
 }
 return  Author
}
const mostLikedBlog=(blogs)=>{
    const authors={}
    let likes=0;
    return blogs.reduce((acc,curr)=>{
      const {author}=curr
      if(author in authors ){
        authors[author] += curr.likes
      }
      else authors[curr.author] =curr.likes
      if(authors[author]>likes){
        likes=authors[author]
        acc={author,likes}
      }
      return acc
    },{author:"everyone",likes:"0"})       
}

module.exports={
  totalLikes,
  dummy,
  favoriteBlog,
  mostBlogs,
  mostLikedBlog
}
